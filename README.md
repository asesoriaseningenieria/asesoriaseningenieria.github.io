# asesoriaseningenieria.github.io

Sitio web oficial de **Asesorías en Ingeniería** para la prestación de servicios de asesorías académicas personalizadas (presenciales y online), desarrollo de trabajos escritos y consulta organizada de material de estudio por asignaturas.

> **Directriz Humana (Español)**: [`rules/objetivo.md`](rules/objetivo.md)  
> **AI Mirror (English)**: [`rules/objective.md`](rules/objective.md)

## Estructura del Proyecto

```text
asesoriaseningenieria.github.io/
├── index.html                   # Página principal, servicios y catálogo interactivo de materias
├── contacto.html                # Generador de solicitud de asesoría y embudo hacia Facebook
├── favicon.ico                  # Icono principal del sitio
├── site.webmanifest             # Manifiesto PWA / iconos web
├── materias/                    # Páginas independientes y organizadas por asignatura
│   ├── razonamiento-logico.html
│   ├── algebra-lineal.html
│   ├── geometria-vectorial.html
│   ├── calculo-diferencial.html
│   ├── calculo-integral.html
│   ├── metodos-numericos.html
│   ├── fisica-mecanica.html
│   ├── estatica.html
│   ├── mecanica-materiales.html
│   ├── ingenieria-civil-nsr10.html
│   └── programacion-ingenieria.html
└── assets/
    ├── css/
    │   ├── main.css             # Sistema de diseño global (paleta institucional, layout y responsive)
    │   └── subject.css          # Estilos para páginas de asignaturas y contacto
    ├── js/
    │   ├── data-materias.js     # Base de datos estructurada de materias y temas
    │   ├── main.js              # Navegación, filtros por categoría y buscador en tiempo real
    │   └── contact.js           # Constructor interactivo de mensajes para Facebook Messenger
    └── img/
        ├── brand/               # Logotipos, favicons y portada Open Graph (og-cover.png)
        ├── hero/                # Fotografías optimizadas de tutoría, escritorio y código/estructuras
        └── icons/               # Iconos SVG vectoriales por área de estudio
```
