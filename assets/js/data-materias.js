/**
 * Catálogo estructurado de materias y áreas de Asesorías en Ingeniería.
 * Sirve como base de datos ligera para el buscador, filtros y formulario de solicitud.
 */
window.ASESORIAS_DATA = {
  brandName: "Asesorías en Ingeniería",
  facebookUrl: "https://www.facebook.com/eulerasesoriaspagina",
  driveGeneralUrl: "https://drive.google.com/drive/folders/11PEo-uedabUmOdOH5_GGLnLfW42c85vS?usp=share_link",
  subjects: [
    {
      id: "razonamiento-logico",
      title: "Razonamiento Lógico",
      category: "matematicas",
      categoryLabel: "Matemáticas y Admisión",
      url: "materias/razonamiento-logico.html",
      icon: "assets/img/icons/razonamiento-logico.svg",
      summary: "Preparación integral para examen de admisión UdeA, simulacros Escolaria, lógica proposicional, álgebra básica, geometría y probabilidad.",
      resourcesCount: 13,
      topics: [
        "Guía UdeA Lógica Matemática",
        "Lógica y conjuntos",
        "Álgebra y ecuaciones",
        "Geometría básica",
        "Probabilidad y estadística",
        "Simulacros Escolaria y Exámenes UdeA"
      ]
    },
    {
      id: "algebra-lineal",
      title: "Álgebra Lineal",
      category: "matematicas",
      categoryLabel: "Matemáticas",
      url: "materias/algebra-lineal.html",
      icon: "assets/img/icons/algebra-lineal.svg",
      summary: "Matrices, sistemas de ecuaciones lineales, espacios y subespacios vectoriales, independencia lineal, bases y transformaciones lineales.",
      resourcesCount: 2,
      topics: [
        "Espacios y subespacios vectoriales",
        "Transformaciones lineales",
        "Matrices y determinantes",
        "Valores y vectores propios"
      ]
    },
    {
      id: "geometria-vectorial",
      title: "Geometría Vectorial, Analítica y Euclidiana",
      category: "matematicas",
      categoryLabel: "Matemáticas",
      url: "materias/geometria-vectorial.html",
      icon: "assets/img/icons/geometria-vectorial.svg",
      summary: "Vectores geométricos en R2 y R3, producto punto y cruz, rectas, planos, cónicas y demostraciones en geometría euclidiana.",
      resourcesCount: 3,
      topics: [
        "Vectores geométricos",
        "Geometría analítica",
        "Geometría euclidiana",
        "Rectas, planos y cónicas"
      ]
    },
    {
      id: "calculo-diferencial",
      title: "Cálculo Diferencial",
      category: "matematicas",
      categoryLabel: "Cálculo",
      url: "materias/calculo-diferencial.html",
      icon: "assets/img/icons/calculo-diferencial.svg",
      summary: "Funciones reales, límites, continuidad, reglas de derivación, derivación implícita, razones de cambio y problemas de optimización.",
      resourcesCount: 3,
      topics: [
        "Funciones y modelado",
        "Límites y continuidad",
        "Derivadas y optimización",
        "Razones de cambio"
      ]
    },
    {
      id: "calculo-integral",
      title: "Cálculo Integral",
      category: "matematicas",
      categoryLabel: "Cálculo",
      url: "materias/calculo-integral.html",
      icon: "assets/img/icons/calculo-integral.svg",
      summary: "Antiderivadas, sumas de Riemann, técnicas de integración, áreas, volúmenes de revolución, integrales impropias y series.",
      resourcesCount: 5,
      topics: [
        "Antiderivadas",
        "Sumas de Riemann",
        "Métodos de integración",
        "Aplicaciones de la integral",
        "Integrales impropias",
        "Sucesiones y series"
      ]
    },
    {
      id: "metodos-numericos",
      title: "Métodos Numéricos",
      category: "matematicas",
      categoryLabel: "Matemáticas Aplicadas",
      url: "materias/metodos-numericos.html",
      icon: "assets/img/icons/metodos-numericos.svg",
      summary: "Solución numérica de ecuaciones diferenciales (Euler, Runge-Kutta), interpolación polinómica, raíces de ecuaciones y filtro de Kalman.",
      resourcesCount: 2,
      topics: [
        "Ecuaciones diferenciales (Euler)",
        "Interpolación polinómica",
        "Filtro de Kalman",
        "Implementación en Python y MATLAB"
      ]
    },
    {
      id: "fisica-mecanica",
      title: "Física Mecánica",
      category: "mecanica",
      categoryLabel: "Física y Mecánica",
      url: "materias/fisica-mecanica.html",
      icon: "assets/img/icons/fisica-mecanica.svg",
      summary: "Cinemática en 1D y 2D, movimiento circular, leyes de Newton, trabajo y energía, colisiones y conservación del momento lineal.",
      resourcesCount: 5,
      topics: [
        "Movimiento en 1 y 2 dimensiones",
        "Movimiento circular",
        "Leyes de Newton",
        "Trabajo y energía",
        "Colisiones y cantidad de movimiento"
      ]
    },
    {
      id: "estatica",
      title: "Estática (Mecánica Vectorial)",
      category: "mecanica",
      categoryLabel: "Física y Mecánica",
      url: "materias/estatica.html",
      icon: "assets/img/icons/estatica.svg",
      summary: "Equilibrio de partículas y cuerpos rígidos, armaduras y cerchas, centroides, centros de masa, momentos de inercia y fuerzas internas.",
      resourcesCount: 1,
      topics: [
        "Centro de masa y centroides",
        "Equilibrio en 2D y 3D",
        "Armaduras, marcos y máquinas",
        "Diagramas de cortante y momento"
      ]
    },
    {
      id: "mecanica-materiales",
      title: "Resistencia y Mecánica de Materiales",
      category: "mecanica",
      categoryLabel: "Mecánica de Sólidos",
      url: "materias/mecanica-materiales.html",
      icon: "assets/img/icons/mecanica-materiales.svg",
      summary: "Esfuerzo normal y cortante, deformación axial, torsión, flexión en vigas, esfuerzos combinados, círculo de Mohr y proyectos aplicados.",
      resourcesCount: 4,
      topics: [
        "Concepto de esfuerzo",
        "Esfuerzos combinados",
        "Proyectos plataforma hidráulica",
        "Torsión, flexión e inercia"
      ]
    },
    {
      id: "ingenieria-civil",
      title: "Ingeniería Civil, Estructuras NSR-10 y APU",
      category: "civil",
      categoryLabel: "Ingeniería Civil",
      url: "materias/ingenieria-civil-nsr10.html",
      icon: "assets/img/icons/ingenieria-civil.svg",
      summary: "Análisis estructural, diseño en concreto reforzado y acero (NSR-10 / AISC 360), presupuestos de obra (APU), memorias de cálculo y sustentaciones.",
      resourcesCount: 0,
      topics: [
        "Análisis estructural (vigas, pórticos, cerchas)",
        "Diseño NSR-10 y AISC 360",
        "Presupuestos y APU de obra",
        "Memorias de cálculo y planos"
      ]
    },
    {
      id: "programacion",
      title: "Programación para Ingeniería y Web",
      category: "programacion",
      categoryLabel: "Programación",
      url: "materias/programacion-ingenieria.html",
      icon: "assets/img/icons/programacion.svg",
      summary: "Acompañamiento práctico línea por línea en Python (NumPy, SciPy, Pandas), MATLAB, macros en Visual Basic, Bash y desarrollo web HTML/CSS/JS.",
      resourcesCount: 0,
      topics: [
        "Python científico e ingeniería",
        "MATLAB y simulaciones",
        "Visual Basic (Excel) y Bash",
        "HTML5, CSS3 y JavaScript"
      ]
    }
  ]
};
