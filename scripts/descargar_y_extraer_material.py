#!/usr/bin/env python3
"""
Descarga los PDFs y guias web referenciados en materias/*.html de asesoriaseningenieria.github.io
y extrae su contenido completo a archivos de solo texto (.txt) por asignatura.

Uso:
  python3 scripts/descargar_y_extraer_material.py --download   # Descarga desde Google Drive / UdeA
  python3 scripts/descargar_y_extraer_material.py --extract    # Extrae texto (pdftotext + OCR) y genera catalogo JSON
"""

import argparse
import json
import os
import re
import subprocess
import tempfile
import unicodedata
from pathlib import Path
from urllib.parse import parse_qs, unquote, urljoin, urlparse

import requests
from bs4 import BeautifulSoup

ROOT = Path("/home/v1rr3eor/IAs/projects/asesoriaseningenieria.github.io")
MATERIAS_DIR = ROOT / "materias"
MAT_DIR = ROOT / "material_estudio"
MANIFEST_PATH = MAT_DIR / "download_manifest.json"
CATALOG_PATH = MAT_DIR / "catalogo_material.json"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
    ),
    "Accept-Language": "es-CO,es;q=0.9,en;q=0.8",
}


def slugify_filename(name: str, default_ext: str = "") -> str:
    name = unquote(name).strip()
    # Keep stem and extension separately
    p = Path(name)
    stem = p.stem if p.suffix else name
    ext = p.suffix.lower() if p.suffix else default_ext
    stem_norm = unicodedata.normalize("NFKD", stem).encode("ascii", "ignore").decode("ascii")
    stem_clean = re.sub(r"[^A-Za-z0-9._-]+", "_", stem_norm).strip("._-")
    if not stem_clean:
        stem_clean = "archivo"
    return f"{stem_clean[:110]}{ext}"


def extract_subject_links() -> list:
    """Extracts external Drive/web study links grouped by subject HTML file."""
    records = []
    for html_path in sorted(MATERIAS_DIR.glob("*.html")):
        subject_id = html_path.stem
        soup = BeautifulSoup(html_path.read_text(encoding="utf-8"), "html.parser")
        for li in soup.select("li.topic-item"):
            name_el = li.select_one(".topic-name")
            topic_name = name_el.get_text(" ", strip=True) if name_el else ""
            for a in li.select("a[href]"):
                href = a["href"].strip()
                if "drive.google.com" in href or "ayura.udea.edu.co" in href:
                    records.append({
                        "subject_id": subject_id,
                        "topic_name": topic_name,
                        "url": href,
                    })
    return records


def parse_drive_id(url: str):
    m_folder = re.search(r"/folders/([A-Za-z0-9_-]+)", url)
    if m_folder:
        return "folder", m_folder.group(1)
    m_file = re.search(r"/file/d/([A-Za-z0-9_-]+)", url)
    if m_file:
        return "file", m_file.group(1)
    m_doc = re.search(r"docs\.google\.com/(document|presentation|spreadsheets)/d/([A-Za-z0-9_-]+)", url)
    if m_doc:
        return m_doc.group(1), m_doc.group(2)
    qs = parse_qs(urlparse(url).query)
    if "id" in qs:
        return "file", qs["id"][0]
    return None, None


def list_drive_folder(session: requests.Session, folder_id: str, visited=None, depth: int = 0) -> list:
    """Recursively lists items inside a public Google Drive folder via embeddedfolderview."""
    if visited is None:
        visited = set()
    if folder_id in visited or depth > 4:
        return []
    visited.add(folder_id)

    items = []
    url = f"https://drive.google.com/embeddedfolderview?id={folder_id}#list"
    try:
        resp = session.get(url, headers=HEADERS, timeout=30)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")
        entries = soup.select(".flip-entry")
        for entry in entries:
            eid = entry.get("id", "").replace("entry-", "").strip()
            title_el = entry.select_one(".flip-entry-title")
            title = title_el.get_text(" ", strip=True) if title_el else eid
            link_el = entry.select_one("a[href]")
            href = link_el["href"] if link_el else ""
            if "/folders/" in href:
                sub_kind, sub_id = parse_drive_id(href)
                if sub_id:
                    sub_items = list_drive_folder(session, sub_id, visited, depth + 1)
                    for si in sub_items:
                        si["subfolder"] = f"{title}/{si['subfolder']}".strip("/")
                    items.extend(sub_items)
            else:
                kind, fid = parse_drive_id(href)
                fid = fid or eid
                if fid:
                    items.append({
                        "file_id": fid,
                        "kind": kind or "file",
                        "title": title,
                        "url": href or f"https://drive.google.com/file/d/{fid}/view",
                        "subfolder": "",
                    })
    except Exception as exc:
        print(f"[WARN] Error listando carpeta {folder_id}: {exc}")

    # Fallback: parse main folder HTML if embeddedfolderview gave 0 items
    if not items:
        try:
            r2 = session.get(f"https://drive.google.com/drive/folders/{folder_id}", headers=HEADERS, timeout=30)
            found_ids = set(re.findall(r"https://drive\.google\.com/file/d/([A-Za-z0-9_-]+)", r2.text))
            for fid in sorted(found_ids):
                items.append({
                    "file_id": fid,
                    "kind": "file",
                    "title": fid,
                    "url": f"https://drive.google.com/file/d/{fid}/view",
                    "subfolder": "",
                })
        except Exception as exc:
            print(f"[WARN] Fallback carpeta {folder_id}: {exc}")

    return items


def get_drive_file_title(session: requests.Session, file_id: str) -> str:
    try:
        r = session.get(f"https://drive.google.com/file/d/{file_id}/view", headers=HEADERS, timeout=25)
        soup = BeautifulSoup(r.text, "html.parser")
        og = soup.find("meta", property="og:title")
        if og and og.get("content"):
            return og["content"].strip()
        if soup.title and soup.title.string:
            return soup.title.string.replace(" - Google Drive", "").strip()
    except Exception:
        pass
    return f"{file_id}.pdf"


def extract_filename_from_cd(cd: str) -> str:
    if not cd:
        return ""
    m_utf8 = re.search(r"filename\*=UTF-8''([^;]+)", cd, flags=re.I)
    if m_utf8:
        return unquote(m_utf8.group(1)).strip().strip('"')
    m_plain = re.search(r'filename="?([^";]+)"?', cd, flags=re.I)
    if m_plain:
        return m_plain.group(1).strip().strip('"')
    return ""


def download_drive_file(session: requests.Session, file_id: str, kind: str, title_hint: str, dest_dir: Path) -> dict:
    """Downloads a file from Google Drive; handles confirmation HTML for large files."""
    dest_dir.mkdir(parents=True, exist_ok=True)

    if kind in ("document", "presentation", "spreadsheets"):
        dl_url = f"https://docs.google.com/{kind}/d/{file_id}/export?format=pdf"
        resp = session.get(dl_url, headers=HEADERS, timeout=60, stream=True)
    else:
        dl_url = f"https://drive.google.com/uc?export=download&id={file_id}"
        resp = session.get(dl_url, headers=HEADERS, timeout=60, stream=True)
        ctype = resp.headers.get("Content-Type", "").lower()
        if "text/html" in ctype:
            html_body = resp.text
            resp.close()
            soup = BeautifulSoup(html_body, "html.parser")
            form = soup.find("form", id="download-form") or soup.find("form")
            if form and form.get("action"):
                action = form["action"]
                params = {}
                for inp in form.find_all("input"):
                    if inp.get("name"):
                        params[inp["name"]] = inp.get("value", "")
                resp = session.get(action, params=params, headers=HEADERS, timeout=90, stream=True)
            else:
                confirm_url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t"
                resp = session.get(confirm_url, headers=HEADERS, timeout=90, stream=True)

    ctype = resp.headers.get("Content-Type", "").lower()
    cd_name = extract_filename_from_cd(resp.headers.get("Content-Disposition", ""))
    raw_name = cd_name or title_hint or f"{file_id}.pdf"

    # Read first chunk to inspect magic bytes
    chunks = []
    first_chunk = b""
    for ch in resp.iter_content(chunk_size=65536):
        if ch:
            if not first_chunk:
                first_chunk = ch
            chunks.append(ch)
    resp.close()
    data = b"".join(chunks)

    is_pdf = first_chunk.startswith(b"%PDF-") or "application/pdf" in ctype or raw_name.lower().endswith(".pdf")
    if "text/html" in ctype and not first_chunk.startswith(b"%PDF-"):
        return {
            "status": "skipped_html_or_restricted",
            "file_id": file_id,
            "title": raw_name,
            "content_type": ctype,
        }

    if not is_pdf:
        # Check extension; only save non-PDFs into otros/ if small, or skip binary junk
        ext = Path(raw_name).suffix.lower() or ""
        return {
            "status": "non_pdf",
            "file_id": file_id,
            "title": raw_name,
            "ext": ext,
            "bytes": len(data),
            "content_type": ctype,
        }

    clean_name = slugify_filename(raw_name, default_ext=".pdf")
    if not clean_name.lower().endswith(".pdf"):
        clean_name += ".pdf"

    # Avoid filename collisions across different file_ids
    dest_path = dest_dir / clean_name
    if dest_path.exists():
        # Check if same size -> already downloaded
        if dest_path.stat().st_size == len(data):
            return {
                "status": "ok",
                "file_id": file_id,
                "title": raw_name,
                "pdf_path": str(dest_path.relative_to(ROOT)),
                "bytes": len(data),
            }
        stem = dest_path.stem
        dest_path = dest_dir / f"{stem}_{file_id[:6]}.pdf"

    dest_path.write_bytes(data)
    return {
        "status": "ok",
        "file_id": file_id,
        "title": raw_name,
        "pdf_path": str(dest_path.relative_to(ROOT)),
        "bytes": len(data),
    }


def fetch_udea_logicamatematica(session: requests.Session, base_url: str, subject_dir: Path) -> list:
    """Fetches text and any linked PDFs from UdeA Lógica Matemática portal."""
    results = []
    pdf_dir = subject_dir / "pdfs"
    txt_dir = subject_dir / "texto"
    pdf_dir.mkdir(parents=True, exist_ok=True)
    txt_dir.mkdir(parents=True, exist_ok=True)

    visited = set()
    to_visit = [base_url]
    collected_text = []
    downloaded_pdfs = set()

    while to_visit and len(visited) < 25:
        url = to_visit.pop(0)
        if url in visited:
            continue
        visited.add(url)
        try:
            r = session.get(url, headers=HEADERS, timeout=25)
            r.encoding = r.apparent_encoding or "utf-8"
            ctype = r.headers.get("Content-Type", "").lower()
            if "application/pdf" in ctype or url.lower().endswith(".pdf"):
                fname = slugify_filename(Path(urlparse(url).path).name or "udea_logica.pdf", ".pdf")
                if fname not in downloaded_pdfs:
                    downloaded_pdfs.add(fname)
                    dest = pdf_dir / fname
                    dest.write_bytes(r.content)
                    results.append({
                        "status": "ok",
                        "title": fname,
                        "pdf_path": str(dest.relative_to(ROOT)),
                        "bytes": len(r.content),
                        "source_url": url,
                    })
                continue

            soup = BeautifulSoup(r.text, "html.parser")
            for tag in soup(["script", "style", "noscript"]):
                tag.decompose()
            title = soup.title.get_text(" ", strip=True) if soup.title else url
            body_text = soup.get_text("\n", strip=True)
            if body_text:
                collected_text.append(f"=== {title} ({url}) ===\n{body_text}\n")

            for a in soup.select("a[href]"):
                nxt = urljoin(url, a["href"].strip()).split("#")[0]
                if nxt.lower().endswith(".pdf") or ("ayura.udea.edu.co/logicamatematica" in nxt and nxt not in visited):
                    if nxt not in to_visit:
                        to_visit.append(nxt)
        except Exception as exc:
            print(f"[WARN] UdeA fetch error {url}: {exc}")

    if collected_text:
        txt_path = txt_dir / "udea_logica_matematica_guia_web.txt"
        txt_path.write_text("\n".join(collected_text), encoding="utf-8")
        results.append({
            "status": "ok_web_text",
            "title": "Guía UdeA Lógica Matemática (Texto Web)",
            "txt_path": str(txt_path.relative_to(ROOT)),
            "source_url": base_url,
        })
    return results


def run_download():
    MAT_DIR.mkdir(parents=True, exist_ok=True)
    records = extract_subject_links()
    session = requests.Session()

    manifest = {
        "sources": [],
        "subjects": {},
    }

    for rec in records:
        subj = rec["subject_id"]
        topic = rec["topic_name"]
        url = rec["url"]
        subj_dir = MAT_DIR / subj
        pdf_dir = subj_dir / "pdfs"
        (subj_dir / "texto").mkdir(parents=True, exist_ok=True)
        pdf_dir.mkdir(parents=True, exist_ok=True)

        print(f"\n[{subj}] Procesando: {topic} -> {url}")
        entry_log = {
            "subject_id": subj,
            "topic_name": topic,
            "url": url,
            "files": [],
        }

        if "ayura.udea.edu.co" in url:
            udea_res = fetch_udea_logicamatematica(session, url, subj_dir)
            entry_log["files"].extend(udea_res)
        else:
            kind, gid = parse_drive_id(url)
            if kind == "folder" and gid:
                folder_items = list_drive_folder(session, gid)
                print(f"  Encontrados {len(folder_items)} elementos en carpeta {gid}")
                for it in folder_items:
                    sub_prefix = slugify_filename(it["subfolder"].replace("/", "_")) + "_" if it["subfolder"] else ""
                    title_hint = f"{sub_prefix}{it['title']}" if sub_prefix else it["title"]
                    dl = download_drive_file(session, it["file_id"], it["kind"], title_hint, pdf_dir)
                    dl["subfolder"] = it["subfolder"]
                    dl["source_url"] = it["url"]
                    entry_log["files"].append(dl)
                    print(f"    - {dl.get('pdf_path', dl.get('title'))} [{dl['status']}]")
            elif gid:
                title_hint = get_drive_file_title(session, gid)
                dl = download_drive_file(session, gid, kind or "file", title_hint, pdf_dir)
                dl["source_url"] = url
                entry_log["files"].append(dl)
                print(f"    - {dl.get('pdf_path', dl.get('title'))} [{dl['status']}]")

        manifest["sources"].append(entry_log)
        manifest["subjects"].setdefault(subj, []).append(entry_log)

    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\nManifiesto guardado en: {MANIFEST_PATH}")


def pdf_page_count(pdf_path: Path) -> int:
    try:
        out = subprocess.check_output(["pdfinfo", str(pdf_path)], text=True, stderr=subprocess.DEVNULL)
        m = re.search(r"Pages:\s+(\d+)", out)
        return int(m.group(1)) if m else 0
    except Exception:
        return 0


def pick_tesseract_lang() -> str:
    try:
        out = subprocess.check_output(["tesseract", "--list-langs"], text=True, stderr=subprocess.STDOUT)
        langs = {ln.strip() for ln in out.splitlines()[1:] if ln.strip()}
        if "spa" in langs and "eng" in langs:
            return "spa+eng"
        for cand in ("spa", "eng", "afr"):
            if cand in langs:
                return cand
    except Exception:
        pass
    return ""


def extract_text_from_pdf(pdf_path: Path, txt_path: Path) -> dict:
    """Extracts plain text using pdftotext, falling back to Tesseract OCR for scanned PDFs."""
    txt_path.parent.mkdir(parents=True, exist_ok=True)
    method = "pdftotext"
    try:
        subprocess.run(
            ["pdftotext", "-layout", "-enc", "UTF-8", str(pdf_path), str(txt_path)],
            check=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        text = txt_path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        text = ""

    alnum_count = len(re.sub(r"[^A-Za-z0-9ÁÉÍÓÚáéíóúÑñ]", "", text))
    pages = pdf_page_count(pdf_path)
    ocr_lang = pick_tesseract_lang()

    if alnum_count < 80 and pages > 0 and ocr_lang:
        # Scanned PDF: run pdftoppm + tesseract (first up to 25 pages)
        method = f"ocr_tesseract({ocr_lang})"
        max_pages = min(pages, 25)
        ocr_chunks = []
        with tempfile.TemporaryDirectory() as tmpd:
            tmp_prefix = os.path.join(tmpd, "page")
            try:
                subprocess.run(
                    ["pdftoppm", "-png", "-r", "150", "-f", "1", "-l", str(max_pages), str(pdf_path), tmp_prefix],
                    check=True,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL,
                )
                for png in sorted(Path(tmpd).glob("page-*.png")):
                    res = subprocess.run(
                        ["tesseract", str(png), "stdout", "-l", ocr_lang],
                        capture_output=True,
                        text=True,
                        timeout=45,
                    )
                    if res.stdout.strip():
                        ocr_chunks.append(f"--- {png.name} ---\n{res.stdout.strip()}")
            except Exception as exc:
                ocr_chunks.append(f"[OCR warning: {exc}]")
        if ocr_chunks:
            text = "\n\n".join(ocr_chunks)
            txt_path.write_text(text, encoding="utf-8")

    # Clean excessive blank lines cleanly
    cleaned = re.sub(r"\n{4,}", "\n\n\n", text).strip()
    txt_path.write_text(cleaned + "\n", encoding="utf-8")
    words = len(cleaned.split())
    preview = " ".join(cleaned[:500].split())
    return {
        "txt_path": str(txt_path.relative_to(ROOT)),
        "pages": pages,
        "words": words,
        "chars": len(cleaned),
        "method": method,
        "preview": preview,
    }


def run_extract():
    MAT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {}
    if MANIFEST_PATH.exists():
        manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))

    catalog = {"subjects": {}}

    for html_path in sorted(MATERIAS_DIR.glob("*.html")):
        subj = html_path.stem
        subj_dir = MAT_DIR / subj
        pdf_dir = subj_dir / "pdfs"
        txt_dir = subj_dir / "texto"
        pdf_dir.mkdir(parents=True, exist_ok=True)
        txt_dir.mkdir(parents=True, exist_ok=True)

        docs = []
        for pdf_path in sorted(pdf_dir.glob("*.pdf")):
            txt_path = txt_dir / f"{pdf_path.stem}.txt"
            info = extract_text_from_pdf(pdf_path, txt_path)
            size_mb = round(pdf_path.stat().st_size / (1024 * 1024), 2)
            docs.append({
                "name": pdf_path.stem.replace("_", " "),
                "filename": pdf_path.name,
                "pdf_path": str(pdf_path.relative_to(ROOT)),
                "size_mb": size_mb,
                **info,
            })
            print(f"[{subj}] Extraído: {pdf_path.name} -> {txt_path.name} ({info['pages']} pág, {info['words']} pal, {info['method']})")

        # Include standalone extracted web texts (e.g., UdeA)
        for txt_path in sorted(txt_dir.glob("*.txt")):
            if not (pdf_dir / f"{txt_path.stem}.pdf").exists():
                content = txt_path.read_text(encoding="utf-8", errors="replace").strip()
                docs.append({
                    "name": txt_path.stem.replace("_", " "),
                    "filename": txt_path.name,
                    "pdf_path": None,
                    "txt_path": str(txt_path.relative_to(ROOT)),
                    "size_mb": round(txt_path.stat().st_size / (1024 * 1024), 2),
                    "pages": 1,
                    "words": len(content.split()),
                    "chars": len(content),
                    "method": "web_text",
                    "preview": " ".join(content[:500].split()),
                })
                print(f"[{subj}] Texto web incluido: {txt_path.name} ({len(content.split())} pal)")

        catalog["subjects"][subj] = {
            "total_docs": len(docs),
            "docs": docs,
            "sources": manifest.get("subjects", {}).get(subj, []),
        }

    CATALOG_PATH.write_text(json.dumps(catalog, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\nCatálogo completo guardado en: {CATALOG_PATH}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--download", action="store_true", help="Descarga PDFs desde Google Drive y UdeA")
    parser.add_argument("--extract", action="store_true", help="Extrae texto con pdftotext/OCR y genera catalogo")
    args = parser.parse_args()
    if not args.download and not args.extract:
        args.download = True
        args.extract = True
    if args.download:
        run_download()
    if args.extract:
        run_extract()


if __name__ == "__main__":
    main()
