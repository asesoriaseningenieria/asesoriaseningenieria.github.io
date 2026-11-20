/**
 * Motor interactivo de aprendizaje por asignatura:
 * - Pestañas de estudio (Teoría Básica, Laboratorio Interactivo, Material PDF/Texto, Autoevaluación)
 * - Visor integrado de archivos .txt extraídos desde los PDFs originales
 * - Laboratorios / Calculadoras con gráficas Canvas 2D para las 11 asignaturas
 * - Cuestionarios de autoevaluación con retroalimentación paso a paso
 */
(function () {
  "use strict";

  const root = document.getElementById("learning-workspace");
  if (!root) return;

  const subjectId = root.dataset.subjectId || "";
  const data = (window.ASESORIAS_THEORY && window.ASESORIAS_THEORY[subjectId]) || null;

  // ======================== 1. Tabs Switching ========================
  const tabBtns = root.querySelectorAll(".subject-tab-btn");
  const tabPanels = root.querySelectorAll(".tab-panel");

  function activateTab(tabKey) {
    tabBtns.forEach(function (b) {
      b.classList.toggle("active", b.dataset.tab === tabKey);
    });
    tabPanels.forEach(function (p) {
      p.classList.toggle("active", p.dataset.panel === tabKey);
    });
  }

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      activateTab(btn.dataset.tab);
    });
  });

  // ======================== 2. Render Theory Modules ========================
  const theoryContainer = document.getElementById("theory-container");
  if (theoryContainer && data && Array.isArray(data.theory)) {
    theoryContainer.innerHTML = "";
    data.theory.forEach(function (mod, idx) {
      const det = document.createElement("details");
      det.className = "theory-card";
      if (idx === 0) det.open = true;

      const bulletsHtml = (mod.points || []).map(function (pt) {
        return "<li>" + pt + "</li>";
      }).join("");

      const formulaHtml = mod.formula
        ? '<div class="formula-box">' + escapeHtml(mod.formula) + "</div>"
        : "";

      const exampleHtml = mod.example
        ? '<div class="example-box"><strong>Ejemplo resuelto paso a paso:</strong><div>' + mod.example + "</div></div>"
        : "";

      det.innerHTML =
        "<summary>" +
          "<span>" + escapeHtml(mod.title) + "</span>" +
          '<span class="theory-tag">' + escapeHtml(mod.tag || ("Módulo " + (idx + 1))) + "</span>" +
        "</summary>" +
        '<div class="theory-body">' +
          "<p>" + mod.summary + "</p>" +
          (bulletsHtml ? "<ul>" + bulletsHtml + "</ul>" : "") +
          formulaHtml +
          exampleHtml +
        "</div>";

      theoryContainer.appendChild(det);
    });
  }

  // ======================== 3. Render Local PDF & Text Docs ========================
  const docsContainer = document.getElementById("local-docs-container");
  if (docsContainer && data && Array.isArray(data.docs)) {
    if (data.docs.length === 0) {
      docsContainer.innerHTML =
        '<div class="learning-intro">Esta área combina teoría interactiva directa en la web con acompañamiento 1 a 1 en vivo sobre tus talleres, códigos o proyectos.</div>';
    } else {
      docsContainer.innerHTML = "";
      data.docs.forEach(function (doc, i) {
        const card = document.createElement("div");
        card.className = "doc-item-card topic-item";

        const metaParts = [];
        if (doc.pages) metaParts.push(doc.pages + " pág.");
        if (doc.words) metaParts.push(doc.words.toLocaleString("es-CO") + " palabras extraídas");
        if (doc.size_mb) metaParts.push(doc.size_mb + " MB");
        const metaStr = metaParts.join(" • ") || "Documento de estudio";

        const txtBtn = doc.txt_path
          ? '<button type="button" class="btn btn-gold btn-sm open-txt-btn" data-txt="../' +
            escapeAttr(doc.txt_path) +
            '" data-title="' +
            escapeAttr(doc.name) +
            '">📖 Leer en texto</button>'
          : "";

        const pdfBtn = doc.pdf_path
          ? '<a href="../' +
            escapeAttr(doc.pdf_path) +
            '" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">📄 Abrir PDF</a>'
          : "";

        card.innerHTML =
          '<div class="topic-title-wrap">' +
            '<span class="topic-order">' + String(i + 1).padStart(2, "0") + "</span>" +
            "<div>" +
              '<span class="topic-name">' + escapeHtml(doc.name) + "</span>" +
              '<span class="topic-note">' + escapeHtml(metaStr) + "</span>" +
              (doc.preview ? '<div class="doc-meta">' + escapeHtml(doc.preview.slice(0, 150)) + "…</div>" : "") +
            "</div>" +
          "</div>" +
          '<div class="doc-actions">' + txtBtn + pdfBtn + "</div>";

        docsContainer.appendChild(card);
      });
    }
  }

  // Filter local docs & topics
  const topicFilterInput = document.getElementById("topic-search");
  if (topicFilterInput) {
    topicFilterInput.addEventListener("input", function (e) {
      const q = e.target.value.trim().toLowerCase();
      document.querySelectorAll(".topic-item").forEach(function (item) {
        item.style.display = item.textContent.toLowerCase().includes(q) ? "flex" : "none";
      });
    });
  }

  // ======================== 4. Built-in Plain Text Viewer Modal ========================
  const modal = document.createElement("div");
  modal.className = "text-viewer-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML =
    '<div class="text-viewer-dialog">' +
      '<div class="text-viewer-head">' +
        '<h3 id="tv-title">Contenido en texto extraído</h3>' +
        '<button type="button" id="tv-close" class="btn btn-outline btn-sm">✕ Cerrar</button>' +
      "</div>" +
      '<div class="text-viewer-toolbar">' +
        '<div class="search-box" style="max-width:340px;">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>' +
          '<input id="tv-search" type="search" placeholder="Buscar palabra clave en este texto..." aria-label="Buscar en texto">' +
        "</div>" +
        '<span id="tv-stats" style="font-size:0.8rem; color:var(--text-dim);"></span>' +
        '<a id="tv-raw-link" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="margin-left:auto;">Abrir .txt completo</a>' +
      "</div>" +
      '<pre id="tv-content" class="text-viewer-content">Cargando texto...</pre>' +
    "</div>";
  document.body.appendChild(modal);

  const tvTitle = document.getElementById("tv-title");
  const tvContent = document.getElementById("tv-content");
  const tvSearch = document.getElementById("tv-search");
  const tvStats = document.getElementById("tv-stats");
  const tvRawLink = document.getElementById("tv-raw-link");
  const tvClose = document.getElementById("tv-close");
  let currentRawText = "";

  function closeModal() {
    modal.classList.remove("open");
  }
  tvClose.addEventListener("click", closeModal);
  modal.addEventListener("click", function (ev) {
    if (ev.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  tvSearch.addEventListener("input", function () {
    const q = tvSearch.value.trim().toLowerCase();
    if (!q) {
      tvContent.textContent = currentRawText;
      tvStats.textContent = currentRawText.split(/\s+/).filter(Boolean).length + " palabras";
      return;
    }
    const lines = currentRawText.split("\n");
    const matched = lines.filter(function (ln) {
      return ln.toLowerCase().includes(q);
    });
    tvStats.textContent = matched.length + " líneas coinciden";
    tvContent.textContent = matched.length ? matched.join("\n") : "No se encontraron coincidencias para \"" + q + "\".";
  });

  document.addEventListener("click", function (ev) {
    const btn = ev.target.closest(".open-txt-btn");
    if (!btn) return;
    const txtUrl = btn.dataset.txt;
    const title = btn.dataset.title || "Material en texto";
    tvTitle.textContent = title;
    tvSearch.value = "";
    tvRawLink.href = txtUrl;
    tvContent.textContent = "Cargando contenido extraído...";
    tvStats.textContent = "";
    modal.classList.add("open");

    fetch(txtUrl)
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(function (txt) {
        currentRawText = txt;
        tvContent.textContent = txt;
        tvStats.textContent = txt.split(/\s+/).filter(Boolean).length + " palabras";
      })
      .catch(function () {
        currentRawText = "";
        tvContent.textContent = "No fue posible cargar el archivo directamente desde file://. Si abres el sitio en https://asesoriaseningenieria.github.io o con un servidor local (python3 -m http.server), podrás leerlo aquí o abrir el enlace directo .txt.";
      });
  });

  // ======================== 5. Render Self-Evaluation Quiz ========================
  const quizContainer = document.getElementById("quiz-container");
  if (quizContainer && data && Array.isArray(data.quiz)) {
    quizContainer.innerHTML = "";
    data.quiz.forEach(function (qItem, qIdx) {
      const card = document.createElement("div");
      card.className = "quiz-card";
      const optsHtml = qItem.options.map(function (opt, oIdx) {
        return '<button type="button" class="quiz-opt-btn" data-q="' + qIdx + '" data-o="' + oIdx + '">' + escapeHtml(opt) + "</button>";
      }).join("");
      card.innerHTML =
        "<h4>Pregunta " + (qIdx + 1) + ": " + escapeHtml(qItem.question) + "</h4>" +
        '<div class="quiz-options">' + optsHtml + "</div>" +
        '<div class="quiz-feedback" id="qf-' + qIdx + '"></div>';
      quizContainer.appendChild(card);

      card.querySelectorAll(".quiz-opt-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          const chosen = Number(btn.dataset.o);
          const isOk = chosen === qItem.answerIndex;
          card.querySelectorAll(".quiz-opt-btn").forEach(function (b, idx) {
            b.classList.remove("correct", "wrong");
            if (idx === qItem.answerIndex) b.classList.add("correct");
            else if (idx === chosen && !isOk) b.classList.add("wrong");
          });
          const fb = document.getElementById("qf-" + qIdx);
          fb.classList.add("visible");
          fb.innerHTML = (isOk ? "✅ <strong>¡Correcto!</strong> " : "❌ <strong>Revisa el procedimiento:</strong> ") + escapeHtml(qItem.explanation);
        });
      });
    });
  }

  // ======================== 6. Subject-Specific Interactive Labs ========================
  const labContainer = document.getElementById("lab-container");
  if (labContainer) {
    renderInteractiveLab(subjectId, labContainer);
  }

  function renderInteractiveLab(id, container) {
    if (id === "razonamiento-logico") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Evaluador Lógico y Calculadora de Conteo</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label for="rl-expr">Expresión Proposicional</label>' +
              '<select id="rl-expr">' +
                '<option value="imp">Implicación: p ⇒ q</option>' +
                '<option value="contrap">Contrarrecíproca: (¬q) ⇒ (¬p)</option>' +
                '<option value="bicond">Bicondicional: p ⇔ q</option>' +
                '<option value="and">Conjunción: p ∧ q</option>' +
                '<option value="or">Disyunción: p ∨ q</option>' +
                '<option value="taut">Ley de Modus Ponens: ((p ⇒ q) ∧ p) ⇒ q</option>' +
              "</select></div>" +
            '<div class="lab-field"><label for="rl-n">Conteo: total elementos (n)</label><input id="rl-n" type="number" min="1" max="15" value="6"></div>' +
            '<div class="lab-field"><label for="rl-r">Seleccionados (r)</label><input id="rl-r" type="number" min="0" max="15" value="2"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="rl-run" class="btn btn-gold btn-sm">Calcular tabla y conteo</button></div>' +
          '<pre id="rl-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const expr = document.getElementById("rl-expr").value;
        const n = Math.max(1, Math.min(15, parseInt(document.getElementById("rl-n").value || "6", 10)));
        const r = Math.max(0, Math.min(n, parseInt(document.getElementById("rl-r").value || "2", 10)));
        const rows = [[true, true], [true, false], [false, true], [false, false]];
        const evalFn = {
          imp: function (p, q) { return !p || q; },
          contrap: function (p, q) { return q || !p; },
          bicond: function (p, q) { return p === q; },
          and: function (p, q) { return p && q; },
          or: function (p, q) { return p || q; },
          taut: function (p, q) { return !((!p || q) && p) || q; }
        }[expr];

        let tbl = " p | q | Resultado\n---|---|----------\n";
        let tCount = 0;
        rows.forEach(function (pair) {
          const val = evalFn(pair[0], pair[1]);
          if (val) tCount++;
          tbl += " " + (pair[0] ? "V" : "F") + " | " + (pair[1] ? "V" : "F") + " |     " + (val ? "V" : "F") + "\n";
        });
        const tipo = tCount === 4 ? "TAUTOLOGÍA (siempre verdadera)" : tCount === 0 ? "CONTRADICCIÓN" : "CONTINGENCIA";
        const fact = function (k) { let res = 1; for (let i = 2; i <= k; i++) res *= i; return res; };
        const perm = fact(n) / fact(n - r);
        const comb = perm / fact(r);

        document.getElementById("rl-out").textContent =
          tbl + "\nClasificación: " + tipo +
          "\n\n--- Conteo (n=" + n + ", r=" + r + ") ---\n" +
          "Permutaciones P(n,r) = " + n + "! / (" + n + "-" + r + ")! = " + perm.toLocaleString("es-CO") + "\n" +
          "Combinaciones C(n,r) = " + comb.toLocaleString("es-CO") + "\n" +
          "Probabilidad de elegir 1 grupo específico = 1/" + comb.toLocaleString("es-CO") + " = " + (100 / comb).toFixed(2) + "%";
      };
      document.getElementById("rl-run").addEventListener("click", run);
      run();
    } else if (id === "algebra-lineal") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Solucionador de Sistema Lineal 2×2, Determinante e Inversa</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>a11</label><input id="al-a11" type="number" step="any" value="3"></div>' +
            '<div class="lab-field"><label>a12</label><input id="al-a12" type="number" step="any" value="2"></div>' +
            '<div class="lab-field"><label>b1</label><input id="al-b1" type="number" step="any" value="12"></div>' +
            '<div class="lab-field"><label>a21</label><input id="al-a21" type="number" step="any" value="1"></div>' +
            '<div class="lab-field"><label>a22</label><input id="al-a22" type="number" step="any" value="-4"></div>' +
            '<div class="lab-field"><label>b2</label><input id="al-b2" type="number" step="any" value="-10"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="al-run" class="btn btn-gold btn-sm">Resolver sistema y valores propios</button></div>' +
          '<pre id="al-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const a11 = parseFloat(document.getElementById("al-a11").value || 0);
        const a12 = parseFloat(document.getElementById("al-a12").value || 0);
        const b1 = parseFloat(document.getElementById("al-b1").value || 0);
        const a21 = parseFloat(document.getElementById("al-a21").value || 0);
        const a22 = parseFloat(document.getElementById("al-a22").value || 0);
        const b2 = parseFloat(document.getElementById("al-b2").value || 0);

        const det = a11 * a22 - a12 * a21;
        const tr = a11 + a22;
        const disc = tr * tr - 4 * det;
        let eigTxt = "";
        if (disc >= 0) {
          const l1 = (tr + Math.sqrt(disc)) / 2;
          const l2 = (tr - Math.sqrt(disc)) / 2;
          eigTxt = "λ1 = " + l1.toFixed(4) + ", λ2 = " + l2.toFixed(4);
        } else {
          const re = tr / 2;
          const im = Math.sqrt(-disc) / 2;
          eigTxt = "λ = " + re.toFixed(3) + " ± " + im.toFixed(3) + "i";
        }

        let txt = "Matriz A = [[" + a11 + ", " + a12 + "], [" + a21 + ", " + a22 + "]]\n";
        txt += "det(A) = (" + a11 + ")(" + a22 + ") - (" + a12 + ")(" + a21 + ") = " + det.toFixed(4) + "\n";
        if (Math.abs(det) < 1e-12) {
          txt += "Sistema singular (det(A) = 0): filas linealmente dependientes (no hay inversa única).\n";
        } else {
          const x = (b1 * a22 - a12 * b2) / det;
          const y = (a11 * b2 - b1 * a21) / det;
          txt += "Solución única por Cramer / A⁻¹b:\n";
          txt += "  x = " + x.toFixed(4) + "\n  y = " + y.toFixed(4) + "\n";
          txt += "Matriz Inversa A⁻¹:\n";
          txt += "  [" + (a22 / det).toFixed(4) + ", " + (-a12 / det).toFixed(4) + "]\n";
          txt += "  [" + (-a21 / det).toFixed(4) + ", " + (a11 / det).toFixed(4) + "]\n";
        }
        txt += "Traza(A) = " + tr.toFixed(4) + " | Valores propios: " + eigTxt;
        document.getElementById("al-out").textContent = txt;
      };
      document.getElementById("al-run").addEventListener("click", run);
      run();
    } else if (id === "geometria-vectorial") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Laboratorio Vectorial en ℝ³ (Producto Punto, Cruz y Proyección)</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Ax</label><input id="gv-ax" type="number" step="any" value="4"></div>' +
            '<div class="lab-field"><label>Ay</label><input id="gv-ay" type="number" step="any" value="2"></div>' +
            '<div class="lab-field"><label>Az</label><input id="gv-az" type="number" step="any" value="0"></div>' +
            '<div class="lab-field"><label>Bx</label><input id="gv-bx" type="number" step="any" value="2"></div>' +
            '<div class="lab-field"><label>By</label><input id="gv-by" type="number" step="any" value="5"></div>' +
            '<div class="lab-field"><label>Bz</label><input id="gv-bz" type="number" step="any" value="0"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="gv-run" class="btn btn-gold btn-sm">Calcular y graficar en plano XY</button></div>' +
          '<div class="lab-canvas-wrap"><canvas id="gv-canvas" width="640" height="280"></canvas></div>' +
          '<pre id="gv-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const ax = parseFloat(document.getElementById("gv-ax").value || 0);
        const ay = parseFloat(document.getElementById("gv-ay").value || 0);
        const az = parseFloat(document.getElementById("gv-az").value || 0);
        const bx = parseFloat(document.getElementById("gv-bx").value || 0);
        const by = parseFloat(document.getElementById("gv-by").value || 0);
        const bz = parseFloat(document.getElementById("gv-bz").value || 0);

        const normA = Math.hypot(ax, ay, az);
        const normB = Math.hypot(bx, by, bz);
        const dot = ax * bx + ay * by + az * bz;
        const cx = ay * bz - az * by;
        const cy = az * bx - ax * bz;
        const cz = ax * by - ay * bx;
        const area = Math.hypot(cx, cy, cz);
        const cosT = (normA > 0 && normB > 0) ? Math.max(-1, Math.min(1, dot / (normA * normB))) : 0;
        const deg = (Math.acos(cosT) * 180) / Math.PI;
        const kProj = normB > 0 ? dot / (normB * normB) : 0;
        const px = kProj * bx, py = kProj * by, pz = kProj * bz;

        document.getElementById("gv-out").textContent =
          "||A|| = " + normA.toFixed(4) + "   |   ||B|| = " + normB.toFixed(4) + "\n" +
          "A · B = " + dot.toFixed(4) + "   |   Ángulo θ = " + deg.toFixed(2) + "°\n" +
          "A × B = (" + cx.toFixed(3) + ", " + cy.toFixed(3) + ", " + cz.toFixed(3) + ")\n" +
          "Área paralelogramo ||A × B|| = " + area.toFixed(4) + " u²\n" +
          "Proyección de A sobre B = (" + px.toFixed(3) + ", " + py.toFixed(3) + ", " + pz.toFixed(3) + ")";

        const canvas = document.getElementById("gv-canvas");
        const ctx = canvas.getContext("2d");
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const ox = W * 0.4, oy = H * 0.65;
        const maxVal = Math.max(5, Math.abs(ax), Math.abs(ay), Math.abs(bx), Math.abs(by), 1);
        const sc = Math.min(W * 0.45, H * 0.5) / maxVal;

        drawAxes2D(ctx, W, H, ox, oy);
        drawArrow(ctx, ox, oy, ox + ax * sc, oy - ay * sc, "#f5a623", "A");
        drawArrow(ctx, ox, oy, ox + bx * sc, oy - by * sc, "#38bdf8", "B");
        drawArrow(ctx, ox, oy, ox + px * sc, oy - py * sc, "#4ade80", "proy");
      };
      document.getElementById("gv-run").addEventListener("click", run);
      run();
    } else if (id === "calculo-diferencial") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Explorador de Derivada, Recta Tangente y Optimización</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Función f(x)</label>' +
              '<select id="cd-fn">' +
                '<option value="cubic">f(x) = 0.25x³ - x² + 2</option>' +
                '<option value="quad">f(x) = -x² + 4x + 1</option>' +
                '<option value="sin">f(x) = 2·sen(x)</option>' +
                '<option value="exp">f(x) = 0.5·e^(0.6x)</option>' +
              "</select></div>" +
            '<div class="lab-field"><label>Punto de análisis x₀</label><input id="cd-x0" type="number" step="0.25" value="1.5"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="cd-run" class="btn btn-gold btn-sm">Graficar f(x) y recta tangente</button></div>' +
          '<div class="lab-canvas-wrap"><canvas id="cd-canvas" width="640" height="280"></canvas></div>' +
          '<pre id="cd-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const key = document.getElementById("cd-fn").value;
        const x0 = parseFloat(document.getElementById("cd-x0").value || 0);
        const fns = {
          cubic: { f: function (x) { return 0.25 * x * x * x - x * x + 2; }, df: function (x) { return 0.75 * x * x - 2 * x; }, d2f: function (x) { return 1.5 * x - 2; }, label: "0.25x³ - x² + 2" },
          quad: { f: function (x) { return -x * x + 4 * x + 1; }, df: function (x) { return -2 * x + 4; }, d2f: function () { return -2; }, label: "-x² + 4x + 1" },
          sin: { f: function (x) { return 2 * Math.sin(x); }, df: function (x) { return 2 * Math.cos(x); }, d2f: function (x) { return -2 * Math.sin(x); }, label: "2·sen(x)" },
          exp: { f: function (x) { return 0.5 * Math.exp(0.6 * x); }, df: function (x) { return 0.3 * Math.exp(0.6 * x); }, d2f: function (x) { return 0.18 * Math.exp(0.6 * x); }, label: "0.5·e^(0.6x)" }
        }[key];

        const y0 = fns.f(x0);
        const m = fns.df(x0);
        const y2 = fns.d2f(x0);
        const mono = Math.abs(m) < 1e-3 ? "PUNTO CRÍTICO (f'(x₀) ≈ 0)" : (m > 0 ? "CRECIENTE (f' > 0)" : "DECRECIENTE (f' < 0)");
        const conc = y2 > 0 ? "Cóncava hacia arriba (f'' > 0)" : (y2 < 0 ? "Cóncava hacia abajo (f'' < 0)" : "Posible punto de inflexión");

        document.getElementById("cd-out").textContent =
          "f(x) = " + fns.label + "\n" +
          "En x₀ = " + x0.toFixed(3) + ": f(x₀) = " + y0.toFixed(4) + "  |  Pendiente m = f'(x₀) = " + m.toFixed(4) + "\n" +
          "Recta tangente: y = " + m.toFixed(3) + "(x - " + x0.toFixed(2) + ") + " + y0.toFixed(3) + "\n" +
          "Comportamiento: " + mono + " | " + conc;

        const canvas = document.getElementById("cd-canvas");
        const ctx = canvas.getContext("2d");
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const xmin = -4, xmax = 6, ymin = -6, ymax = 8;
        const mapX = function (x) { return ((x - xmin) / (xmax - xmin)) * W; };
        const mapY = function (y) { return H - ((y - ymin) / (ymax - ymin)) * H; };

        drawAxes2D(ctx, W, H, mapX(0), mapY(0));
        // Plot curve
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= 200; i++) {
          const x = xmin + (i / 200) * (xmax - xmin);
          const y = fns.f(x);
          if (i === 0) ctx.moveTo(mapX(x), mapY(y));
          else ctx.lineTo(mapX(x), mapY(y));
        }
        ctx.stroke();

        // Tangent line
        ctx.strokeStyle = "#f5a623";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(mapX(x0 - 2.5), mapY(y0 + m * -2.5));
        ctx.lineTo(mapX(x0 + 2.5), mapY(y0 + m * 2.5));
        ctx.stroke();

        // Point
        ctx.fillStyle = "#f5a623";
        ctx.beginPath();
        ctx.arc(mapX(x0), mapY(y0), 6, 0, 2 * Math.PI);
        ctx.fill();
      };
      document.getElementById("cd-run").addEventListener("click", run);
      run();
    } else if (id === "calculo-integral") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Simulador Visual de Sumas de Riemann e Integral Definida</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Función f(x)</label>' +
              '<select id="ci-fn">' +
                '<option value="x2">f(x) = x²</option>' +
                '<option value="x3">f(x) = 0.2x³ + 1</option>' +
                '<option value="sin">f(x) = sen(x) + 1.5</option>' +
                '<option value="exp">f(x) = e^(0.4x)</option>' +
              "</select></div>" +
            '<div class="lab-field"><label>Límite inferior a</label><input id="ci-a" type="number" step="0.5" value="0"></div>' +
            '<div class="lab-field"><label>Límite superior b</label><input id="ci-b" type="number" step="0.5" value="3"></div>' +
            '<div class="lab-field"><label>Subintervalos n</label><input id="ci-n" type="number" min="2" max="50" value="8"></div>' +
            '<div class="lab-field"><label>Método</label>' +
              '<select id="ci-meth">' +
                '<option value="mid">Punto Medio</option>' +
                '<option value="left">Suma Izquierda</option>' +
                '<option value="right">Suma Derecha</option>' +
                '<option value="trap">Trapecios</option>' +
              "</select></div>" +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="ci-run" class="btn btn-gold btn-sm">Calcular integral y graficar</button></div>' +
          '<div class="lab-canvas-wrap"><canvas id="ci-canvas" width="640" height="280"></canvas></div>' +
          '<pre id="ci-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const key = document.getElementById("ci-fn").value;
        const a = parseFloat(document.getElementById("ci-a").value || 0);
        const b = parseFloat(document.getElementById("ci-b").value || 3);
        const n = Math.max(2, Math.min(50, parseInt(document.getElementById("ci-n").value || "8", 10)));
        const meth = document.getElementById("ci-meth").value;

        const fns = {
          x2: { f: function (x) { return x * x; }, F: function (x) { return (x * x * x) / 3; } },
          x3: { f: function (x) { return 0.2 * Math.pow(x, 3) + 1; }, F: function (x) { return 0.05 * Math.pow(x, 4) + x; } },
          sin: { f: function (x) { return Math.sin(x) + 1.5; }, F: function (x) { return -Math.cos(x) + 1.5 * x; } },
          exp: { f: function (x) { return Math.exp(0.4 * x); }, F: function (x) { return Math.exp(0.4 * x) / 0.4; } }
        }[key];

        const dx = (b - a) / n;
        let approx = 0;
        const rects = [];
        for (let i = 0; i < n; i++) {
          const xL = a + i * dx;
          const xR = xL + dx;
          let h = 0;
          if (meth === "left") h = fns.f(xL);
          else if (meth === "right") h = fns.f(xR);
          else if (meth === "mid") h = fns.f((xL + xR) / 2);
          else h = (fns.f(xL) + fns.f(xR)) / 2;
          approx += h * dx;
          rects.push({ xL: xL, xR: xR, yL: fns.f(xL), yR: fns.f(xR), h: h });
        }
        const exact = fns.F(b) - fns.F(a);
        const errPct = Math.abs(exact) > 1e-9 ? (Math.abs(approx - exact) / Math.abs(exact)) * 100 : 0;

        document.getElementById("ci-out").textContent =
          "Δx = (" + b + " - " + a + ") / " + n + " = " + dx.toFixed(4) + "\n" +
          "Aproximación (" + meth + ") = " + approx.toFixed(5) + "\n" +
          "Integral Exacta (TFC) = " + exact.toFixed(5) + "   |   Error relativo = " + errPct.toFixed(3) + "%";

        const canvas = document.getElementById("ci-canvas");
        const ctx = canvas.getContext("2d");
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const padX = Math.max(0.5, Math.abs(b - a) * 0.2);
        const xmin = Math.min(a, b) - padX, xmax = Math.max(a, b) + padX;
        let ymax = 1;
        for (let i = 0; i <= 60; i++) ymax = Math.max(ymax, fns.f(xmin + (i / 60) * (xmax - xmin)));
        ymax *= 1.15;
        const ymin = -0.3 * ymax;
        const mapX = function (x) { return ((x - xmin) / (xmax - xmin)) * W; };
        const mapY = function (y) { return H - ((y - ymin) / (ymax - ymin)) * H; };

        drawAxes2D(ctx, W, H, mapX(0), mapY(0));

        ctx.fillStyle = "rgba(245, 166, 35, 0.26)";
        ctx.strokeStyle = "#f5a623";
        ctx.lineWidth = 1.3;
        rects.forEach(function (rc) {
          if (meth === "trap") {
            ctx.beginPath();
            ctx.moveTo(mapX(rc.xL), mapY(0));
            ctx.lineTo(mapX(rc.xL), mapY(rc.yL));
            ctx.lineTo(mapX(rc.xR), mapY(rc.yR));
            ctx.lineTo(mapX(rc.xR), mapY(0));
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          } else {
            const x0p = mapX(Math.min(rc.xL, rc.xR));
            const x1p = mapX(Math.max(rc.xL, rc.xR));
            const y0p = mapY(Math.max(0, rc.h));
            const y1p = mapY(Math.min(0, rc.h));
            ctx.fillRect(x0p, y0p, x1p - x0p, y1p - y0p);
            ctx.strokeRect(x0p, y0p, x1p - x0p, y1p - y0p);
          }
        });

        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        for (let i = 0; i <= 160; i++) {
          const x = xmin + (i / 160) * (xmax - xmin);
          const y = fns.f(x);
          if (i === 0) ctx.moveTo(mapX(x), mapY(y));
          else ctx.lineTo(mapX(x), mapY(y));
        }
        ctx.stroke();
      };
      document.getElementById("ci-run").addEventListener("click", run);
      run();
    } else if (id === "metodos-numericos") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Simulador del Método de Euler (EDO) vs Solución Analítica</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Problema de Valor Inicial</label>' +
              '<select id="mn-ode">' +
                '<option value="exp">y\' = y, y(0) = 1 → Exacta: e^x</option>' +
                '<option value="decay">y\' = -0.8y, y(0) = 2 → Exacta: 2e^(-0.8x)</option>' +
                '<option value="lin">y\' = x + y, y(0) = 1 → Exacta: 2e^x - x - 1</option>' +
              "</select></div>" +
            '<div class="lab-field"><label>Tamaño de paso h</label><input id="mn-h" type="number" step="0.05" min="0.05" max="1" value="0.25"></div>' +
            '<div class="lab-field"><label>x final</label><input id="mn-xf" type="number" step="0.5" min="0.5" max="4" value="2"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="mn-run" class="btn btn-gold btn-sm">Ejecutar Euler y comparar</button></div>' +
          '<div class="lab-canvas-wrap"><canvas id="mn-canvas" width="640" height="270"></canvas></div>' +
          '<pre id="mn-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const key = document.getElementById("mn-ode").value;
        const h = Math.max(0.05, Math.min(1, parseFloat(document.getElementById("mn-h").value || 0.25)));
        const xf = Math.max(0.5, Math.min(4, parseFloat(document.getElementById("mn-xf").value || 2)));
        const odes = {
          exp: { f: function (x, y) { return y; }, exact: function (x) { return Math.exp(x); }, y0: 1 },
          decay: { f: function (x, y) { return -0.8 * y; }, exact: function (x) { return 2 * Math.exp(-0.8 * x); }, y0: 2 },
          lin: { f: function (x, y) { return x + y; }, exact: function (x) { return 2 * Math.exp(x) - x - 1; }, y0: 1 }
        }[key];

        let x = 0, y = odes.y0;
        const pts = [{ x: x, y: y, ye: odes.exact(x) }];
        const steps = Math.round(xf / h);
        let rowsTxt = " Paso |   x   | y (Euler) | y (Exacta) | Error %\n------|-------|-----------|------------|--------\n";
        rowsTxt += "   0  | 0.00  |  " + y.toFixed(4).padStart(7) + "  |  " + odes.exact(0).toFixed(4).padStart(8) + "  |  0.00%\n";

        for (let i = 1; i <= steps; i++) {
          y = y + h * odes.f(x, y);
          x = i * h;
          const ye = odes.exact(x);
          const err = Math.abs((ye - y) / ye) * 100;
          pts.push({ x: x, y: y, ye: ye });
          rowsTxt += "  " + String(i).padStart(2) + "  | " + x.toFixed(2).padStart(5) + " |  " + y.toFixed(4).padStart(7) + "  |  " + ye.toFixed(4).padStart(8) + "  | " + err.toFixed(2).padStart(5) + "%\n";
        }
        document.getElementById("mn-out").textContent = rowsTxt;

        const canvas = document.getElementById("mn-canvas");
        const ctx = canvas.getContext("2d");
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const ymax = Math.max.apply(null, pts.map(function (p) { return Math.max(p.y, p.ye); })) * 1.12;
        const mapX = function (vx) { return 45 + (vx / xf) * (W - 70); };
        const mapY = function (vy) { return H - 25 - (vy / ymax) * (H - 45); };
        drawAxes2D(ctx, W, H, mapX(0), mapY(0));

        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
          const vx = (i / 100) * xf;
          if (i === 0) ctx.moveTo(mapX(vx), mapY(odes.exact(vx)));
          else ctx.lineTo(mapX(vx), mapY(odes.exact(vx)));
        }
        ctx.stroke();

        ctx.strokeStyle = "#f5a623";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        pts.forEach(function (p, idx) {
          if (idx === 0) ctx.moveTo(mapX(p.x), mapY(p.y));
          else ctx.lineTo(mapX(p.x), mapY(p.y));
        });
        ctx.stroke();
        pts.forEach(function (p) {
          ctx.fillStyle = "#f5a623";
          ctx.beginPath();
          ctx.arc(mapX(p.x), mapY(p.y), 4, 0, 2 * Math.PI);
          ctx.fill();
        });
      };
      document.getElementById("mn-run").addEventListener("click", run);
      run();
    } else if (id === "fisica-mecanica") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Simulador de Tiro Parabólico (Cinemática 2D)</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Velocidad inicial v₀ (m/s)</label><input id="fm-v0" type="number" step="1" min="1" value="25"></div>' +
            '<div class="lab-field"><label>Ángulo θ (°)</label><input id="fm-th" type="number" step="1" min="5" max="85" value="45"></div>' +
            '<div class="lab-field"><label>Altura inicial y₀ (m)</label><input id="fm-y0" type="number" step="0.5" min="0" value="0"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="fm-run" class="btn btn-gold btn-sm">Simular trayectoria</button></div>' +
          '<div class="lab-canvas-wrap"><canvas id="fm-canvas" width="640" height="270"></canvas></div>' +
          '<pre id="fm-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const v0 = Math.max(1, parseFloat(document.getElementById("fm-v0").value || 25));
        const th = (parseFloat(document.getElementById("fm-th").value || 45) * Math.PI) / 180;
        const y0 = Math.max(0, parseFloat(document.getElementById("fm-y0").value || 0));
        const g = 9.81;
        const vx = v0 * Math.cos(th), vy = v0 * Math.sin(th);
        const tFlight = (vy + Math.sqrt(vy * vy + 2 * g * y0)) / g;
        const tPeak = vy / g;
        const yMax = y0 + (vy * vy) / (2 * g);
        const xMax = vx * tFlight;

        document.getElementById("fm-out").textContent =
          "Componentes iniciales: v₀x = " + vx.toFixed(2) + " m/s,  v₀y = " + vy.toFixed(2) + " m/s\n" +
          "Tiempo hasta altura máxima = " + tPeak.toFixed(2) + " s  |  Altura máxima y_max = " + yMax.toFixed(2) + " m\n" +
          "Tiempo total de vuelo = " + tFlight.toFixed(2) + " s  |  Alcance horizontal R = " + xMax.toFixed(2) + " m";

        const canvas = document.getElementById("fm-canvas");
        const ctx = canvas.getContext("2d");
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const maxX = Math.max(10, xMax * 1.1);
        const maxY = Math.max(5, yMax * 1.2);
        const mapX = function (x) { return 40 + (x / maxX) * (W - 70); };
        const mapY = function (y) { return H - 25 - (y / maxY) * (H - 45); };
        drawAxes2D(ctx, W, H, mapX(0), mapY(0));

        ctx.strokeStyle = "#f5a623";
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
          const t = (i / 100) * tFlight;
          const x = vx * t;
          const y = y0 + vy * t - 0.5 * g * t * t;
          if (i === 0) ctx.moveTo(mapX(x), mapY(y));
          else ctx.lineTo(mapX(x), mapY(y));
        }
        ctx.stroke();
      };
      document.getElementById("fm-run").addEventListener("click", run);
      run();
    } else if (id === "estatica") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Calculadora de Viga Simplemente Apoyada y Centroide de Sección T</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Luz de viga L (m)</label><input id="es-L" type="number" step="0.5" min="1" value="6"></div>' +
            '<div class="lab-field"><label>Carga distribuida w (kN/m)</label><input id="es-w" type="number" step="1" min="0" value="12"></div>' +
            '<div class="lab-field"><label>Carga puntual P (kN)</label><input id="es-P" type="number" step="1" min="0" value="20"></div>' +
            '<div class="lab-field"><label>Posición a de P (m)</label><input id="es-a" type="number" step="0.25" min="0" value="2.5"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="es-run" class="btn btn-gold btn-sm">Calcular reacciones V y M</button></div>' +
          '<pre id="es-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const L = Math.max(0.5, parseFloat(document.getElementById("es-L").value || 6));
        const w = Math.max(0, parseFloat(document.getElementById("es-w").value || 12));
        const P = Math.max(0, parseFloat(document.getElementById("es-P").value || 20));
        const a = Math.max(0, Math.min(L, parseFloat(document.getElementById("es-a").value || 2.5)));

        const Rb = ((w * L * L) / 2 + P * a) / L;
        const Ra = w * L + P - Rb;
        // Sample max bending moment along span
        let mMax = 0, xMaxM = 0;
        for (let i = 0; i <= 200; i++) {
          const x = (i / 200) * L;
          const m = Ra * x - 0.5 * w * x * x - (x > a ? P * (x - a) : 0);
          if (m > mMax) { mMax = m; xMaxM = x; }
        }

        document.getElementById("es-out").textContent =
          "Equilibrio ΣM_A = 0  ⇒  R_B = (w·L²/2 + P·a) / L = " + Rb.toFixed(2) + " kN\n" +
          "Equilibrio ΣF_y = 0  ⇒  R_A = w·L + P - R_B = " + Ra.toFixed(2) + " kN\n" +
          "Cortante máximo |V_max| = " + Math.max(Ra, Rb).toFixed(2) + " kN\n" +
          "Momento flector máximo M_max = " + mMax.toFixed(2) + " kN·m (en x = " + xMaxM.toFixed(2) + " m)";
      };
      document.getElementById("es-run").addEventListener("click", run);
      run();
    } else if (id === "mecanica-materiales") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Círculo de Mohr 2D (Esfuerzos Principales y Cortante Máximo)</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>σx (MPa)</label><input id="mm-sx" type="number" step="5" value="80"></div>' +
            '<div class="lab-field"><label>σy (MPa)</label><input id="mm-sy" type="number" step="5" value="-20"></div>' +
            '<div class="lab-field"><label>τxy (MPa)</label><input id="mm-txy" type="number" step="5" value="40"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="mm-run" class="btn btn-gold btn-sm">Calcular esfuerzos y dibujar Círculo de Mohr</button></div>' +
          '<div class="lab-canvas-wrap"><canvas id="mm-canvas" width="640" height="280"></canvas></div>' +
          '<pre id="mm-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const sx = parseFloat(document.getElementById("mm-sx").value || 0);
        const sy = parseFloat(document.getElementById("mm-sy").value || 0);
        const txy = parseFloat(document.getElementById("mm-txy").value || 0);
        const avg = (sx + sy) / 2;
        const R = Math.hypot((sx - sy) / 2, txy);
        const s1 = avg + R, s2 = avg - R;
        const thetaP = 0.5 * (Math.atan2(2 * txy, sx - sy) * 180) / Math.PI;

        document.getElementById("mm-out").textContent =
          "Centro del círculo: σ_prom = (" + sx + " + " + sy + ")/2 = " + avg.toFixed(2) + " MPa\n" +
          "Radio (Cortante Máximo en el plano): R = τ_max = " + R.toFixed(2) + " MPa\n" +
          "Esfuerzos Principales: σ₁ = " + s1.toFixed(2) + " MPa   |   σ₂ = " + s2.toFixed(2) + " MPa\n" +
          "Ángulo del plano principal: θp = " + thetaP.toFixed(2) + "°";

        const canvas = document.getElementById("mm-canvas");
        const ctx = canvas.getContext("2d");
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        const maxLim = Math.max(Math.abs(s1), Math.abs(s2), R, 20) * 1.35;
        const sc = Math.min(W, H) * 0.4 / maxLim;
        const ox = W * 0.5, oy = H * 0.5;
        drawAxes2D(ctx, W, H, ox, oy);

        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.6;
        ctx.beginPath();
        ctx.arc(ox + avg * sc, oy, Math.max(4, R * sc), 0, 2 * Math.PI);
        ctx.stroke();

        // Diameter connecting X(sx, txy) and Y(sy, -txy)
        ctx.strokeStyle = "#f5a623";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ox + sx * sc, oy + txy * sc);
        ctx.lineTo(ox + sy * sc, oy - txy * sc);
        ctx.stroke();

        [s1, s2].forEach(function (sp, idx) {
          ctx.fillStyle = "#4ade80";
          ctx.beginPath();
          ctx.arc(ox + sp * sc, oy, 5, 0, 2 * Math.PI);
          ctx.fill();
          ctx.fillStyle = "#f8fafc";
          ctx.font = "12px sans-serif";
          ctx.fillText("σ" + (idx + 1) + "=" + sp.toFixed(1), ox + sp * sc - 18, oy - 10);
        });
      };
      document.getElementById("mm-run").addEventListener("click", run);
      run();
    } else if (id === "ingenieria-civil-nsr10") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Espectro Elástico NSR-10 y Cortante Basal Sísmico (V_s)</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Aa (ej. 0.15 Medellín)</label><input id="ic-aa" type="number" step="0.05" value="0.15"></div>' +
            '<div class="lab-field"><label>Av (ej. 0.20 Medellín)</label><input id="ic-av" type="number" step="0.05" value="0.20"></div>' +
            '<div class="lab-field"><label>Fa (Suelo)</label><input id="ic-fa" type="number" step="0.1" value="1.5"></div>' +
            '<div class="lab-field"><label>Fv (Suelo)</label><input id="ic-fv" type="number" step="0.1" value="2.0"></div>' +
            '<div class="lab-field"><label>Período T (s)</label><input id="ic-T" type="number" step="0.05" value="0.35"></div>' +
            '<div class="lab-field"><label>Peso W (kN) / R</label><input id="ic-W" type="number" step="50" value="1200"></div>' +
            '<div class="lab-field"><label>Coeficiente R</label><input id="ic-R" type="number" step="0.5" value="5"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="ic-run" class="btn btn-gold btn-sm">Calcular espectro NSR-10</button></div>' +
          '<div class="lab-canvas-wrap"><canvas id="ic-canvas" width="640" height="260"></canvas></div>' +
          '<pre id="ic-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const Aa = parseFloat(document.getElementById("ic-aa").value || 0.15);
        const Av = parseFloat(document.getElementById("ic-av").value || 0.20);
        const Fa = parseFloat(document.getElementById("ic-fa").value || 1.5);
        const Fv = parseFloat(document.getElementById("ic-fv").value || 2.0);
        const T = Math.max(0, parseFloat(document.getElementById("ic-T").value || 0.35));
        const W = Math.max(1, parseFloat(document.getElementById("ic-W").value || 1200));
        const R = Math.max(1, parseFloat(document.getElementById("ic-R").value || 5));
        const I = 1.0;

        const Tc = 0.48 * (Av * Fv) / (Aa * Fa);
        const Tl = 2.4 * Fv;
        const saAt = function (t) {
          if (t <= Tc) return 2.5 * Aa * Fa * I;
          if (t <= Tl) return (1.2 * Av * Fv * I) / t;
          return (1.2 * Av * Fv * Tl * I) / (t * t);
        };
        const Sa = saAt(T);
        const Vs = (Sa * W) / R;

        document.getElementById("ic-out").textContent =
          "Períodos límite NSR-10 (Título A.2.6): Tc = " + Tc.toFixed(3) + " s  |  TL = " + Tl.toFixed(2) + " s\n" +
          "Meseta espectral máxima: Sa_max = 2.5·Aa·Fa = " + (2.5 * Aa * Fa).toFixed(3) + " g\n" +
          "Aceleración en T = " + T.toFixed(2) + " s:  Sa = " + Sa.toFixed(4) + " g\n" +
          "Cortante basal reducido (V_s = Sa·W / R):  V_s = " + Vs.toFixed(2) + " kN (" + ((Vs / W) * 100).toFixed(2) + "% de W)";

        const canvas = document.getElementById("ic-canvas");
        const ctx = canvas.getContext("2d");
        const Wc = canvas.width, Hc = canvas.height;
        ctx.clearRect(0, 0, Wc, Hc);
        const tMax = Math.max(3.5, Tl + 0.5);
        const sMax = Math.max(0.4, 2.5 * Aa * Fa * 1.25);
        const mapX = function (t) { return 42 + (t / tMax) * (Wc - 65); };
        const mapY = function (s) { return Hc - 24 - (s / sMax) * (Hc - 45); };
        drawAxes2D(ctx, Wc, Hc, mapX(0), mapY(0));

        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        for (let i = 0; i <= 160; i++) {
          const t = (i / 160) * tMax;
          const s = saAt(Math.max(0.01, t));
          if (i === 0) ctx.moveTo(mapX(t), mapY(s));
          else ctx.lineTo(mapX(t), mapY(s));
        }
        ctx.stroke();

        ctx.fillStyle = "#f5a623";
        ctx.beginPath();
        ctx.arc(mapX(T), mapY(Sa), 6, 0, 2 * Math.PI);
        ctx.fill();
      };
      document.getElementById("ic-run").addEventListener("click", run);
      run();
    } else if (id === "programacion-ingenieria") {
      container.innerHTML =
        '<div class="lab-panel">' +
          '<h3 style="color:var(--gold);">Laboratorio de Algoritmos Numéricos (Ejecución + Código Python)</h3>' +
          '<div class="lab-grid">' +
            '<div class="lab-field"><label>Algoritmo</label>' +
              '<select id="pr-algo">' +
                '<option value="newton">Newton-Raphson: raíz de f(x) = x³ - x - 2</option>' +
                '<option value="simpson">Integración Simpson 1/3: ∫₀^π sen(x) dx</option>' +
                '<option value="mat">Solución Matricial NumPy / JS (Gauss 2×2)</option>' +
              "</select></div>" +
            '<div class="lab-field"><label>Parámetro inicial (x₀ o n)</label><input id="pr-param" type="number" step="0.5" value="1.5"></div>' +
          "</div>" +
          '<div class="lab-actions"><button type="button" id="pr-run" class="btn btn-gold btn-sm">Ejecutar algoritmo y ver Python</button></div>' +
          '<pre id="pr-out" class="lab-output"></pre>' +
        "</div>";

      const run = function () {
        const algo = document.getElementById("pr-algo").value;
        const p = parseFloat(document.getElementById("pr-param").value || 1.5);
        let out = "";

        if (algo === "newton") {
          let x = p;
          out += "=== Ejecución Newton-Raphson (f(x) = x³ - x - 2) ===\n";
          for (let k = 1; k <= 7; k++) {
            const fx = x * x * x - x - 2;
            const dfx = 3 * x * x - 1;
            const xNew = x - fx / dfx;
            out += "Iter " + k + ": x = " + x.toFixed(6) + " -> x_nuevo = " + xNew.toFixed(6) + " (|f|=" + Math.abs(fx).toExponential(2) + ")\n";
            x = xNew;
          }
          out += "\n--- Código equivalente en Python ---\n" +
            "def newton(x0, tol=1e-6):\n" +
            "    x = x0\n" +
            "    for _ in range(20):\n" +
            "        fx = x**3 - x - 2\n" +
            "        if abs(fx) < tol: return x\n" +
            "        x -= fx / (3*x**2 - 1)\n" +
            "    return x";
        } else if (algo === "simpson") {
          let n = Math.max(2, Math.round(Math.abs(p) * 4));
          if (n % 2 !== 0) n += 1;
          const h = Math.PI / n;
          let sum = Math.sin(0) + Math.sin(Math.PI);
          for (let i = 1; i < n; i++) sum += (i % 2 === 0 ? 2 : 4) * Math.sin(i * h);
          const I = (h / 3) * sum;
          out += "=== Regla de Simpson 1/3 (n = " + n + " subintervalos) ===\n";
          out += "Resultado numérico = " + I.toFixed(7) + "  |  Valor exacto = 2.0000000\n";
          out += "Error absoluto = " + Math.abs(2 - I).toExponential(3) + "\n\n";
          out += "--- Código Python (NumPy) ---\n" +
            "import numpy as np\n" +
            "x = np.linspace(0, np.pi, " + (n + 1) + ")\n" +
            "y = np.sin(x)\n" +
            "h = x[1] - x[0]\n" +
            "I = (h/3) * (y[0] + y[-1] + 4*y[1:-1:2].sum() + 2*y[2:-2:2].sum())";
        } else {
          out += "=== Sistema A·x = b (A=[[4,1],[2,3]], b=[9,7]) ===\n";
          const det = 4 * 3 - 1 * 2;
          const x1 = (9 * 3 - 1 * 7) / det;
          const x2 = (4 * 7 - 9 * 2) / det;
          out += "x₁ = " + x1.toFixed(4) + ",  x₂ = " + x2.toFixed(4) + "\n\n";
          out += "--- Código Python (NumPy) ---\n" +
            "import numpy as np\n" +
            "A = np.array([[4.0, 1.0], [2.0, 3.0]])\n" +
            "b = np.array([9.0, 7.0])\n" +
            "x = np.linalg.solve(A, b)";
        }
        document.getElementById("pr-out").textContent = out;
      };
      document.getElementById("pr-run").addEventListener("click", run);
      run();
    }
  }

  function drawAxes2D(ctx, W, H, ox, oy) {
    ctx.strokeStyle = "rgba(148, 163, 184, 0.35)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, oy);
    ctx.lineTo(W, oy);
    ctx.moveTo(ox, 0);
    ctx.lineTo(ox, H);
    ctx.stroke();
  }

  function drawArrow(ctx, x0, y0, x1, y1, color, label) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x1, y1);
    ctx.stroke();
    const ang = Math.atan2(y1 - y0, x1 - x0);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 - 9 * Math.cos(ang - 0.4), y1 - 9 * Math.sin(ang - 0.4));
    ctx.lineTo(x1 - 9 * Math.cos(ang + 0.4), y1 - 9 * Math.sin(ang + 0.4));
    ctx.closePath();
    ctx.fill();
    if (label) {
      ctx.font = "bold 12px sans-serif";
      ctx.fillText(label, x1 + 6, y1 - 4);
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replace(/'/g, "&#39;");
  }
})();
