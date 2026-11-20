# Biblioteca Local de Material de Estudio (`material_estudio/`)

Esta carpeta almacena los archivos PDF descargados desde los enlaces de Google Drive del portal y su contenido completo extraído en archivos de solo texto (`.txt`), organizado por asignatura:

- `pdfs/`: Documentos originales en formato PDF para lectura o descarga directa.
- `texto/`: Extracción en solo texto (`pdftotext -layout` / OCR) utilizada por el visor integrado en cada asignatura y como base de las secciones de teoría básica interactiva.
- `catalogo_material.json`: Índice estructurado de documentos, páginas, conteo de palabras y rutas locales.
- `download_manifest.json`: Registro técnico de fuentes procesadas desde Google Drive.
