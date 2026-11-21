# asesoriaseningenieria.github.io

Sitio web oficial e interactivo de **Asesorías en Ingeniería** (`https://asesoriaseningenieria.github.io`) para la prestación de servicios de asesorías académicas personalizadas (presenciales y online), desarrollo de trabajos escritos y aprendizaje interactivo por asignaturas.

- 📱 **Celular / WhatsApp**: **`300 408 3940`**
- 💬 **Facebook**: [`facebook.com/Asesorias en Ingeniería`](https://web.facebook.com/profile.php?id=61596656610578)
- > **Directriz Humana (Español)**: [`rules/objetivo.md`](rules/objetivo.md)  
- > **AI Mirror (English)**: [`rules/objective.md`](rules/objective.md)

## Características Interactivas por Asignatura
Cada una de las 11 páginas en `materias/*.html` incluye 4 módulos integrados:
1. **📖 Teoría Básica**: Definiciones, propiedades, fórmulas clave y ejemplos paso a paso redactados a partir del material extraído.
2. **🧮 Laboratorio Interactivo**: Simuladores y calculadoras en vivo con gráficas Canvas 2D (tablas de verdad, matrices, vectores ℝ³, recta tangente, sumas de Riemann, método de Euler, tiro parabólico, reacciones en vigas, Círculo de Mohr, espectro NSR-10 y algoritmos Python/JS).
3. **📚 Material en PDF**: Acceso directo a los libros y guías locales en `material_estudio/<materia>/pdfs/` (conservando respaldos en texto extraído en `material_estudio/<materia>/texto/`).
4. **✅ Autoevaluación**: Cuestionarios tipo parcial con retroalimentación inmediata y solución explicada.

## Estructura del Proyecto

```text
asesoriaseningenieria.github.io/
├── index.html                   # Portal principal, servicios, contacto y catálogo interactivo
├── contacto.html                # Constructor de solicitud hacia WhatsApp (300 408 3940) y Messenger
├── favicon.ico / site.webmanifest
├── scripts/
│   ├── descargar_y_extraer_material.py # Descarga PDFs de Drive y extrae texto plano (.txt)
│   └── generar_sitio_interactivo.py    # Construye data-teoria-materias.js y páginas materias/*.html
├── material_estudio/            # Repositorio local por asignatura (pdfs/ y texto/*.txt)
├── materias/                    # 11 páginas interactivas (teoría, laboratorio, PDF/TXT y quiz)
└── assets/
    ├── css/ (main.css, subject.css)
    ├── js/  (data-materias.js, data-teoria-materias.js, learning-interactive.js, main.js, contact.js)
    └── img/ (brand/, hero/, icons/)
```
