/**
 * Base de teoría básica, catálogo local de archivos PDF y autoevaluación por asignatura.
 */
window.ASESORIAS_THEORY = {
  "razonamiento-logico": {
    "intro": "Síntesis teórica de lógica matemática, álgebra básica, geometría y probabilidad basada en la bibliografía y exámenes de la asignatura.",
    "theory": [
      {
        "title": "1. Proposiciones y Conectivos Lógicos",
        "tag": "Lógica Matemática",
        "summary": "Una <strong>proposición</strong> es un enunciado con valor de verdad definido (Verdadero V o Falso F, nunca ambos). Las oraciones exclamativas, interrogativas u órdenes no son proposiciones.",
        "points": [
          "<strong>Conjunción (p ∧ q)</strong>: Solo es verdadera cuando tanto p como q son verdaderas.",
          "<strong>Disyunción (p ∨ q)</strong>: Es falsa únicamente cuando ambas proposiciones son falsas.",
          "<strong>Implicación (p ⇒ q)</strong>: Solo es falsa cuando el antecedente p es verdadero y el consecuente q es falso.",
          "<strong>Equivalencia contrarrecíproca</strong>: (p ⇒ q) es lógicamente equivalente a (¬q ⇒ ¬p), clave en exámenes de admisión UdeA."
        ],
        "formula": "p ⇒ q  ≡  ¬p ∨ q  ≡  ¬q ⇒ ¬p\nLeyes de De Morgan:  ¬(p ∧ q) ≡ ¬p ∨ ¬q   |   ¬(p ∨ q) ≡ ¬p ∧ ¬q",
        "example": "En la ruta de canales (Examen UdeA 2008 Jornada 1): si todo barco que pasa por la boya 6 obligatoriamente pasó antes por la boya 5, entonces la proposición verdadera es «Si pasó por 6, pasó por 5» (6 ⇒ 5), equivalente a «Si no pasó por 5, no pasó por 6»."
      },
      {
        "title": "2. Álgebra Básica, Potenciación y Factorización",
        "tag": "Álgebra",
        "summary": "Dominar productos notables, leyes de exponentes y factorización agiliza el despeje de ecuaciones en pruebas cronometradas.",
        "points": [
          "<strong>Diferencia de cuadrados</strong>: a² − b² = (a − b)(a + b).",
          "<strong>Trinomio cuadrado perfecto</strong>: a² ± 2ab + b² = (a ± b)².",
          "<strong>Leyes de potenciación</strong>: aᵐ · aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ."
        ],
        "formula": "x² + bx + c = (x + r₁)(x + r₂)   donde r₁ + r₂ = b  y  r₁·r₂ = c",
        "example": "Factorizar 4x² − 25 = (2x − 5)(2x + 5). Resolver x² − x − 12 = 0 ⇒ (x − 4)(x + 3) = 0 ⇒ x = 4 ó x = −3."
      },
      {
        "title": "3. Geometría Básica, Pitágoras y Áreas",
        "tag": "Geometría",
        "summary": "En triángulos rectángulos, semejanza y figuras inscritas se combinan relaciones métricas y proporcionalidad.",
        "points": [
          "<strong>Teorema de Pitágoras</strong>: En todo triángulo rectángulo de catetos a, b e hipotenusa c se cumple c² = a² + b².",
          "<strong>Áreas clave</strong>: Triángulo A = b·h/2; Círculo A = πr²; Trapecio A = (B + b)·h/2.",
          "<strong>Ángulos</strong>: La suma interna en cualquier triángulo plano es 180° y en un polígono de n lados es 180°(n − 2)."
        ],
        "formula": "c = √(a² + b²)   |   Perímetro círculo = 2πr   |   Área = πr²",
        "example": "Una escalera de 13 m apoyada a 5 m de la pared alcanza una altura h = √(13² − 5²) = √(169 − 25) = √144 = 12 m."
      },
      {
        "title": "4. Conteo, Probabilidad y Estadística Descriptiva",
        "tag": "Probabilidad",
        "summary": "La probabilidad clásica mide la razón entre casos favorables y casos posibles equiprobables.",
        "points": [
          "<strong>Permutaciones</strong> (importa el orden): P(n, r) = n! / (n − r)!.",
          "<strong>Combinaciones</strong> (no importa el orden): C(n, r) = n! / [r!(n − r)!].",
          "<strong>Media aritmética</strong>: x̄ = (Σ xᵢ) / N; <strong>Mediana</strong>: dato central ordenado."
        ],
        "formula": "P(A) = (Casos favorables) / (Casos totales)   |   P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
        "example": "De 5 tarjetas numeradas del 1 al 5, ¿de cuántas formas se pueden escoger 2 sin importar el orden? C(5,2) = 5! / (2!·3!) = 10 parejas posibles."
      }
    ],
    "docs": [
      {
        "name": "EjeciciosLogicaNo2",
        "filename": "EjeciciosLogicaNo2.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/EjeciciosLogicaNo2.pdf",
        "txt_path": null,
        "size_mb": 1.45,
        "pages": 11,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Examen-2008-Jornada-1-Examen-Admision-Universidad-de-Antioquia-UdeA-Blog-de-la-Nacho",
        "filename": "Examen-2008-Jornada-1-Examen-Admision-Universidad-de-Antioquia-UdeA-Blog-de-la-Nacho.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Examen-2008-Jornada-1-Examen-Admision-Universidad-de-Antioquia-UdeA-Blog-de-la-Nacho.pdf",
        "txt_path": null,
        "size_mb": 0.29,
        "pages": 29,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Examen-2008-Jornada-2-Examen-Admision-Universidad-de-Antioquia",
        "filename": "Examen-2008-Jornada-2-Examen-Admision-Universidad-de-Antioquia.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Examen-2008-Jornada-2-Examen-Admision-Universidad-de-Antioquia.pdf",
        "txt_path": null,
        "size_mb": 0.3,
        "pages": 26,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Examen-2008-Jornada-3-Examen-Admision-Universidad-de-Antioquia",
        "filename": "Examen-2008-Jornada-3-Examen-Admision-Universidad-de-Antioquia.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Examen-2008-Jornada-3-Examen-Admision-Universidad-de-Antioquia.pdf",
        "txt_path": null,
        "size_mb": 0.31,
        "pages": 28,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Examen-2008-Jornada-4-Examen-Admision-Universidad-de-Antioquia",
        "filename": "Examen-2008-Jornada-4-Examen-Admision-Universidad-de-Antioquia.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Examen-2008-Jornada-4-Examen-Admision-Universidad-de-Antioquia.pdf",
        "txt_path": null,
        "size_mb": 0.3,
        "pages": 25,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "FACTORIZACION-Algebra",
        "filename": "FACTORIZACION-Algebra.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/FACTORIZACION-Algebra.pdf",
        "txt_path": null,
        "size_mb": 0.03,
        "pages": 2,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Geometria",
        "filename": "Geometria.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Geometria.pdf",
        "txt_path": null,
        "size_mb": 8.11,
        "pages": 164,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Logica Matematica",
        "filename": "Logica_Matematica.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Logica_Matematica.pdf",
        "txt_path": null,
        "size_mb": 0.3,
        "pages": 8,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "PotenciaciA3n-Algebra",
        "filename": "PotenciaciA3n-Algebra.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/PotenciaciA3n-Algebra.pdf",
        "txt_path": null,
        "size_mb": 0.02,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Probabilidades",
        "filename": "Probabilidades.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Probabilidades.pdf",
        "txt_path": null,
        "size_mb": 0.47,
        "pages": 23,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "SOLIS DAUN JULIO ERNESTO Logica Matematica",
        "filename": "SOLIS_DAUN_JULIO_ERNESTO_Logica_Matematica.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/SOLIS_DAUN_JULIO_ERNESTO_Logica_Matematica.pdf",
        "txt_path": null,
        "size_mb": 14.49,
        "pages": 284,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Simulacro-NA-1-Examen-de-Admision-UdeA-recopilado-por-Escolaria-Version-2",
        "filename": "Simulacro-NA-1-Examen-de-Admision-UdeA-recopilado-por-Escolaria-Version-2.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Simulacro-NA-1-Examen-de-Admision-UdeA-recopilado-por-Escolaria-Version-2.pdf",
        "txt_path": null,
        "size_mb": 4.02,
        "pages": 9,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Simulacro-NA-2-preparatorio-para-el-Examen-de-Admision-de-la-Universidad-de-Antioquia-recopilado-por-Escolaria",
        "filename": "Simulacro-NA-2-preparatorio-para-el-Examen-de-Admision-de-la-Universidad-de-Antioquia-recopilado-por-Escolaria.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/Simulacro-NA-2-preparatorio-para-el-Examen-de-Admision-de-la-Universidad-de-Antioquia-recopilado-por-Escolaria.pdf",
        "txt_path": null,
        "size_mb": 5.94,
        "pages": 19,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "UDEA",
        "filename": "UDEA.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/UDEA.pdf",
        "txt_path": null,
        "size_mb": 0.21,
        "pages": 2,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "estadisticaConceptosBasicos",
        "filename": "estadisticaConceptosBasicos.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/estadisticaConceptosBasicos.pdf",
        "txt_path": null,
        "size_mb": 2.8,
        "pages": 78,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "introducciomEstadistica",
        "filename": "introducciomEstadistica.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/introducciomEstadistica.pdf",
        "txt_path": null,
        "size_mb": 1.7,
        "pages": 24,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "introduccionGeometria",
        "filename": "introduccionGeometria.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/introduccionGeometria.pdf",
        "txt_path": null,
        "size_mb": 0.48,
        "pages": 6,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "introduccionLogica",
        "filename": "introduccionLogica.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/introduccionLogica.pdf",
        "txt_path": null,
        "size_mb": 0.17,
        "pages": 29,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "introduccionProbabilidad",
        "filename": "introduccionProbabilidad.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/introduccionProbabilidad.pdf",
        "txt_path": null,
        "size_mb": 0.16,
        "pages": 56,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "teoremadePitAgoras",
        "filename": "teoremadePitAgoras.pdf",
        "pdf_path": "material_estudio/razonamiento-logico/pdfs/teoremadePitAgoras.pdf",
        "txt_path": null,
        "size_mb": 0.51,
        "pages": 13,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "Si la proposición «Si llueve, la vía se moja» (p ⇒ q) es VERDADERA, ¿cuál afirmación es necesariamente equivalente?",
        "options": [
          "Si la vía se moja, entonces llovió (q ⇒ p)",
          "Si la vía no se moja, entonces no llovió (¬q ⇒ ¬p)",
          "Si no llueve, la vía no se moja (¬p ⇒ ¬q)",
          "Llueve y la vía no se moja (p ∧ ¬q)"
        ],
        "answerIndex": 1,
        "explanation": "Toda implicación p ⇒ q es lógicamente equivalente a su contrarrecíproca ¬q ⇒ ¬p. Ni la recíproca ni la inversa se deducen automáticamente."
      },
      {
        "question": "En un grupo de 6 estudiantes, ¿de cuántas maneras distintas se puede seleccionar un comité de 2 representantes?",
        "options": [
          "12",
          "15",
          "30",
          "36"
        ],
        "answerIndex": 1,
        "explanation": "Como en un comité no importa el orden de elección, usamos combinaciones: C(6, 2) = (6 × 5) / 2 = 15."
      },
      {
        "question": "Un triángulo rectángulo tiene hipotenusa de 10 cm y un cateto de 6 cm. ¿Cuál es su área?",
        "options": [
          "24 cm²",
          "30 cm²",
          "48 cm²",
          "60 cm²"
        ],
        "answerIndex": 0,
        "explanation": "El otro cateto vale √(10² − 6²) = √64 = 8 cm. Luego el área es (6 × 8) / 2 = 24 cm²."
      }
    ]
  },
  "algebra-lineal": {
    "intro": "Resumen teórico de espacios vectoriales, bases, vectores coordenados y transformaciones lineales basado en los textos guía de la asignatura.",
    "theory": [
      {
        "title": "1. Espacios y Subespacios Vectoriales",
        "tag": "Módulo 1–2",
        "summary": "Un <strong>espacio vectorial V</strong> es un conjunto no vacío con operaciones de suma y multiplicación por escalar que cumplen 10 axiomas (cerradura, asociatividad, neutro 0, inverso −a, conmutatividad y distributividad).",
        "points": [
          "<strong>Criterio de Subespacio (Teorema 1)</strong>: Un subconjunto no vacío H ⊆ V es subespacio si cumple únicamente dos reglas de cerradura:",
          "1) Si x ∈ H e y ∈ H, entonces x + y ∈ H (cerradura bajo suma).",
          "2) Si x ∈ H y α es escalar, entonces α·x ∈ H (cerradura bajo producto por escalar).",
          "Todo subespacio debe contener obligatoriamente al vector cero (0 ∈ H)."
        ],
        "formula": "H ≤ V  ⇔  (H ≠ ∅) ∧ (∀ x,y ∈ H: x + y ∈ H) ∧ (∀ α ∈ ℝ, x ∈ H: αx ∈ H)",
        "example": "El plano H = {(x, y, z) ∈ ℝ³ : 2x − y + z = 0} pasa por el origen (0,0,0) y es cerrado bajo suma y escalado, por tanto es un subespacio de ℝ³. Si la ecuación fuera = 5, no sería subespacio."
      },
      {
        "title": "2. Independencia Lineal, Bases y Vectores Coordenados",
        "tag": "Módulo 7",
        "summary": "Un conjunto {v₁, v₂, ..., vₙ} es <strong>linealmente independiente</strong> si c₁v₁ + ... + cₙvₙ = 0 tiene únicamente la solución trivial c₁ = c₂ = ... = cₙ = 0.",
        "points": [
          "<strong>Base B</strong>: Conjunto linealmente independiente que genera todo el espacio V.",
          "<strong>Dimensión dim(V)</strong>: Número de vectores de cualquier base de V.",
          "<strong>Vector coordenado [v]_B</strong>: Para cada v ∈ V existen escalares únicos (a₁, ..., aₙ) tales que v = a₁v₁ + ... + aₙvₙ."
        ],
        "formula": "det(A) ≠ 0  ⇔  Columnas de A son L.I.  ⇔  A es invertible  ⇔  Ax = b tiene solución única",
        "example": "En ℝ², los vectores v₁ = (1, 2) y v₂ = (3, 1) tienen det = 1·1 − 3·2 = −5 ≠ 0, luego forman una base de ℝ²."
      },
      {
        "title": "3. Transformaciones Lineales, Núcleo e Imagen",
        "tag": "Módulo 11–12",
        "summary": "Una función T : V → W es una <strong>transformación lineal</strong> si preserva las operaciones vectoriales: T(x + y) = T(x) + T(y) y T(αx) = αT(x).",
        "points": [
          "<strong>Núcleo o Kernel (Nu(T))</strong>: Conjunto de v ∈ V tales que T(v) = 0_W.",
          "<strong>Imagen o Recorrido (Im(T))</strong>: Conjunto de w ∈ W que son imagen de algún v ∈ V.",
          "<strong>Teorema de la Dimensión</strong>: dim(V) = nulidad(T) + rango(T)."
        ],
        "formula": "T(x + y) = T(x) + T(y)   y   T(αx) = αT(x)   ⇒   T(v) = A_T · v",
        "example": "Si T(x, y) = (x + y, x − 4y), su matriz asociada respecto a la base canónica es A = [[1, 1], [1, −4]], con det(A) = −5 ≠ 0, así que T es un isomorfismo (nulidad = 0, rango = 2)."
      }
    ],
    "docs": [
      {
        "name": "EjemplosEspaciosySubespacios",
        "filename": "EjemplosEspaciosySubespacios.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EjemplosEspaciosySubespacios.pdf",
        "txt_path": null,
        "size_mb": 11.95,
        "pages": 19,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosVectoresCoordenados",
        "filename": "EjemplosVectoresCoordenados.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EjemplosVectoresCoordenados.pdf",
        "txt_path": null,
        "size_mb": 19.5,
        "pages": 12,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosEspaciosyVectoresUdea",
        "filename": "EjerciciosEspaciosyVectoresUdea.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EjerciciosEspaciosyVectoresUdea.pdf",
        "txt_path": null,
        "size_mb": 4.3,
        "pages": 12,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosEspaciosyVectoresUdea backup",
        "filename": "EjerciciosEspaciosyVectoresUdea_backup.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EjerciciosEspaciosyVectoresUdea_backup.pdf",
        "txt_path": null,
        "size_mb": 4.27,
        "pages": 23,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosTransformaciones",
        "filename": "EjerciciosTransformaciones.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EjerciciosTransformaciones.pdf",
        "txt_path": null,
        "size_mb": 8.99,
        "pages": 9,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosTransformacionesUdea",
        "filename": "EjerciciosTransformacionesUdea.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EjerciciosTransformacionesUdea.pdf",
        "txt_path": null,
        "size_mb": 4.27,
        "pages": 7,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosVectoresUdea",
        "filename": "EjerciciosVectoresUdea.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EjerciciosVectoresUdea.pdf",
        "txt_path": null,
        "size_mb": 4.27,
        "pages": 8,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EspaciosySubespaciosVectoriales",
        "filename": "EspaciosySubespaciosVectoriales.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/EspaciosySubespaciosVectoriales.pdf",
        "txt_path": null,
        "size_mb": 33.51,
        "pages": 12,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TransformacionesLinealesTeoria",
        "filename": "TransformacionesLinealesTeoria.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/TransformacionesLinealesTeoria.pdf",
        "txt_path": null,
        "size_mb": 45.67,
        "pages": 14,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "VectoresCoordenadosyMatricesEquivalentes",
        "filename": "VectoresCoordenadosyMatricesEquivalentes.pdf",
        "pdf_path": "material_estudio/algebra-lineal/pdfs/VectoresCoordenadosyMatricesEquivalentes.pdf",
        "txt_path": null,
        "size_mb": 21.89,
        "pages": 12,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "¿Cuál de los siguientes subconjuntos de ℝ² SÍ es un subespacio vectorial?",
        "options": [
          "{(x, y) : x + y = 3}",
          "{(x, y) : y = 2x}",
          "{(x, y) : x² + y² = 1}",
          "{(x, y) : x ≥ 0, y ≥ 0}"
        ],
        "answerIndex": 1,
        "explanation": "y = 2x pasa por (0,0) y es cerrado bajo suma y multiplicación por cualquier escalar real (incluidos negativos)."
      },
      {
        "question": "Si T : ℝ⁴ → ℝ³ es una transformación lineal con nulidad(T) = 1, ¿cuál es su rango?",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answerIndex": 2,
        "explanation": "Por el teorema de la dimensión: dim(ℝ⁴) = 4 = nulidad(T) + rango(T) = 1 + rango(T) ⇒ rango(T) = 3."
      },
      {
        "question": "¿Para qué valor de k la matriz A = [[2, k], [4, 6]] NO es invertible?",
        "options": [
          "k = 2",
          "k = 3",
          "k = 4",
          "k = 6"
        ],
        "answerIndex": 1,
        "explanation": "A no es invertible cuando det(A) = 0 ⇒ 2(6) − 4k = 0 ⇒ 12 = 4k ⇒ k = 3."
      }
    ]
  },
  "geometria-vectorial": {
    "intro": "Fundamentos de vectores en el plano y el espacio, rectas, planos y secciones cónicas basados en los materiales de la asignatura.",
    "theory": [
      {
        "title": "1. Vectores Geométricos, Norma y Producto Escalar",
        "tag": "Vectores R²/R³",
        "summary": "Un vector representa una magnitud y dirección en el plano o espacio. El <strong>producto escalar (punto)</strong> relaciona longitudes y ángulos entre vectores.",
        "points": [
          "<strong>Norma (magnitud)</strong>: ||A|| = √(Aₓ² + Aᵧ² + A_z²).",
          "<strong>Producto escalar</strong>: A · B = AₓBₓ + AᵧBᵧ + A_zB_z = ||A|| ||B|| cos(θ).",
          "<strong>Ortogonalidad</strong>: Dos vectores no nulos son perpendiculares si y solo si A · B = 0."
        ],
        "formula": "cos(θ) = (A · B) / (||A|| ||B||)   |   proy_B(A) = [(A · B) / ||B||²] B",
        "example": "Para A = (4, 2, 0) y B = (−1, 2, 0), A·B = 4(−1) + 2(2) = 0, lo que demuestra que son ortogonales (θ = 90°)."
      },
      {
        "title": "2. Producto Cruz, Rectas y Planos en el Espacio",
        "tag": "Geometría R³",
        "summary": "El <strong>producto vectorial (cruz) A × B</strong> produce un vector perpendicular tanto a A como a B, cuya magnitud equivale al área del paralelogramo que forman.",
        "points": [
          "<strong>Recta en ℝ³</strong> que pasa por P₀ en dirección v: r(t) = P₀ + t·v.",
          "<strong>Plano en ℝ³</strong> con punto P₀ y vector normal n = (a, b, c): a(x − x₀) + b(y − y₀) + c(z − z₀) = 0.",
          "<strong>Paralelismo</strong>: A × B = 0 si y solo si A y B son paralelos."
        ],
        "formula": "A × B = (AᵧB_z − A_zBᵧ,  A_zBₓ − AₓB_z,  AₓBᵧ − AᵧBₓ)   |   Área = ||A × B||",
        "example": "Con A = (1, 0, 0) y B = (0, 2, 0), A × B = (0, 0, 2): perpendicular al plano XY y de magnitud 2 (área del rectángulo 1×2)."
      },
      {
        "title": "3. Secciones Cónicas: Circunferencia, Parábola, Elipse e Hipérbola",
        "tag": "Cónicas",
        "summary": "Las cónicas surgen al cortar un cono con un plano y se describen mediante ecuaciones cuadráticas de segundo grado en (x, y).",
        "points": [
          "<strong>Circunferencia</strong>: (x − h)² + (y − k)² = r².",
          "<strong>Parábola vertical</strong> con vértice (h, k): (x − h)² = 4p(y − k).",
          "<strong>Elipse</strong> con centro (h, k) y semiejes a, b: (x − h)²/a² + (y − k)²/b² = 1.",
          "<strong>Hipérbola</strong>: (x − h)²/a² − (y − k)²/b² = 1."
        ],
        "formula": "Distancia focal elipse: c² = a² − b²   |   Hipérbola: c² = a² + b²   |   Excentricidad e = c/a",
        "example": "La ecuación x²/25 + y²/9 = 1 representa una elipse centrada en (0,0) con a = 5, b = 3 y focos a distancia c = √(25 − 9) = 4."
      }
    ],
    "docs": [
      {
        "name": "Geometria Vectorial Jaramillo",
        "filename": "Geometria_Vectorial_Jaramillo.pdf",
        "pdf_path": "material_estudio/geometria-vectorial/pdfs/Geometria_Vectorial_Jaramillo.pdf",
        "txt_path": null,
        "size_mb": 6.4,
        "pages": 529,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "conicas",
        "filename": "conicas.pdf",
        "pdf_path": "material_estudio/geometria-vectorial/pdfs/conicas.pdf",
        "txt_path": null,
        "size_mb": 1.19,
        "pages": 88,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "unidad-6.lc3adneas-y-superficies-en-el-espacio-2020-10",
        "filename": "unidad-6.lc3adneas-y-superficies-en-el-espacio-2020-10.pdf",
        "pdf_path": "material_estudio/geometria-vectorial/pdfs/unidad-6.lc3adneas-y-superficies-en-el-espacio-2020-10.pdf",
        "txt_path": null,
        "size_mb": 1.04,
        "pages": 73,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "vectoresGeometricos",
        "filename": "vectoresGeometricos.pdf",
        "pdf_path": "material_estudio/geometria-vectorial/pdfs/vectoresGeometricos.pdf",
        "txt_path": null,
        "size_mb": 5.48,
        "pages": 58,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "Si A = (3, −4, 0) y B = (4, 3, 0), ¿cuál es el ángulo entre A y B?",
        "options": [
          "0°",
          "45°",
          "60°",
          "90°"
        ],
        "answerIndex": 3,
        "explanation": "A·B = 3(4) + (−4)(3) + 0 = 12 − 12 = 0. Como el producto punto es cero, son perpendiculares (90°)."
      },
      {
        "question": "¿Cuál es la magnitud del producto cruz A × B si ||A|| = 5, ||B|| = 4 y el ángulo entre ellos es 30°?",
        "options": [
          "5",
          "10",
          "10√3",
          "20"
        ],
        "answerIndex": 1,
        "explanation": "||A × B|| = ||A|| ||B|| sen(θ) = 5 × 4 × sen(30°) = 20 × 0.5 = 10."
      },
      {
        "question": "Dada la elipse (x − 2)²/16 + (y + 1)²/9 = 1, ¿cuál es su centro y semieje mayor?",
        "options": [
          "Centro (−2, 1), a = 16",
          "Centro (2, −1), a = 4",
          "Centro (2, −1), a = 3",
          "Centro (4, 3), a = 5"
        ],
        "answerIndex": 1,
        "explanation": "Comparando con (x − h)²/a² + (y − k)²/b² = 1, h = 2, k = −1 y a = √16 = 4."
      }
    ]
  },
  "calculo-diferencial": {
    "intro": "Teoría clave de funciones reales, límites, continuidad, derivación y optimización basada en los textos y guías de la asignatura.",
    "theory": [
      {
        "title": "1. Funciones, Dominio y Modelado",
        "tag": "Unidad 1",
        "summary": "Una <strong>función f</strong> asigna a cada x de su dominio D un único valor real f(x). Deben cuidarse restricciones en denominadores (≠ 0), raíces pares (≥ 0) y logaritmos (> 0).",
        "points": [
          "<strong>Composición</strong>: (f ∘ g)(x) = f(g(x)).",
          "<strong>Simetría</strong>: Par si f(−x) = f(x); Impar si f(−x) = −f(x).",
          "<strong>Funciones hiperbólicas</strong>: senh(x) = (eˣ − e⁻ˣ)/2, cosh(x) = (eˣ + e⁻ˣ)/2."
        ],
        "formula": "cosh²(x) − senh²(x) = 1   |   d/dx[senh(x)] = cosh(x)",
        "example": "Para f(x) = √(x − 3) / (x − 5), exigimos x − 3 ≥ 0 y x − 5 ≠ 0 ⇒ Dominio = [3, 5) ∪ (5, ∞)."
      },
      {
        "title": "2. Límites y Continuidad",
        "tag": "Unidad 2",
        "summary": "El límite lím_{x→a} f(x) = L describe el valor al que se aproxima f(x) cuando x se acerca a a por ambos lados (límites laterales iguales).",
        "points": [
          "<strong>Existencia</strong>: El límite bilateral existe si lím_{x→a⁻} f(x) = lím_{x→a⁺} f(x) = L.",
          "<strong>Continuidad en x = a</strong>: Requiere (1) f(a) definida, (2) límite existe, (3) lím_{x→a} f(x) = f(a).",
          "<strong>Límites notables</strong>: lím_{x→0} sen(x)/x = 1; lím_{x→∞} (1 + 1/x)ˣ = e."
        ],
        "formula": "lím_{x→a} [f(x) − f(a)] / (x − a)  =  f'(a)",
        "example": "lím_{x→1} (x² − 1)/(x − 1) = lím_{x→1} (x − 1)(x + 1)/(x − 1) = lím_{x→1} (x + 1) = 2 (la pendiente tangente a y = x² en (1,1))."
      },
      {
        "title": "3. Derivadas, Reglas y Aplicaciones (Optimización)",
        "tag": "Unidad 3–4",
        "summary": "La derivada f'(x) mide la razón de cambio instantánea y la pendiente de la recta tangente a la curva.",
        "points": [
          "<strong>Regla del producto</strong>: (fg)' = f'g + fg'.",
          "<strong>Regla de la cadena</strong>: [f(g(x))]' = f'(g(x)) · g'(x).",
          "<strong>Criterio de extremos</strong>: Puntos críticos donde f'(c) = 0 o no existe. Si f''(c) > 0 hay mínimo local; si f''(c) < 0 hay máximo local."
        ],
        "formula": "Recta tangente en (x₀, f(x₀)):  y − f(x₀) = f'(x₀)(x − x₀)",
        "example": "Para f(x) = −x² + 4x + 1: f'(x) = −2x + 4 = 0 ⇒ x = 2. Como f''(2) = −2 < 0, alcanza un máximo f(2) = 5."
      }
    ],
    "docs": [
      {
        "name": "calculo-james-stewart-7ed",
        "filename": "calculo-james-stewart-7ed.pdf",
        "pdf_path": "material_estudio/calculo-diferencial/pdfs/calculo-james-stewart-7ed.pdf",
        "txt_path": null,
        "size_mb": 16.13,
        "pages": 954,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "calculoUPB",
        "filename": "calculoUPB.pdf",
        "pdf_path": "material_estudio/calculo-diferencial/pdfs/calculoUPB.pdf",
        "txt_path": null,
        "size_mb": 0.83,
        "pages": 13,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "clase2UPB",
        "filename": "clase2UPB.pdf",
        "pdf_path": "material_estudio/calculo-diferencial/pdfs/clase2UPB.pdf",
        "txt_path": null,
        "size_mb": 0.74,
        "pages": 10,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "funciones",
        "filename": "funciones.pdf",
        "pdf_path": "material_estudio/calculo-diferencial/pdfs/funciones.pdf",
        "txt_path": null,
        "size_mb": 1.15,
        "pages": 71,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "hiperbolicas4",
        "filename": "hiperbolicas4.pdf",
        "pdf_path": "material_estudio/calculo-diferencial/pdfs/hiperbolicas4.pdf",
        "txt_path": null,
        "size_mb": 0.1,
        "pages": 3,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "limitesyDerivadas",
        "filename": "limitesyDerivadas.pdf",
        "pdf_path": "material_estudio/calculo-diferencial/pdfs/limitesyDerivadas.pdf",
        "txt_path": null,
        "size_mb": 1.99,
        "pages": 92,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "¿Cuál es la ecuación de la recta tangente a f(x) = x² en el punto P(1, 1)?",
        "options": [
          "y = x",
          "y = 2x − 1",
          "y = 2x + 1",
          "y = x² − 1"
        ],
        "answerIndex": 1,
        "explanation": "La derivada es f'(x) = 2x, luego m = f'(1) = 2. Con punto-pendiente: y − 1 = 2(x − 1) ⇒ y = 2x − 1."
      },
      {
        "question": "Si f'(c) = 0 y f''(c) = −6 < 0 en un punto crítico c, ¿qué ocurre en x = c?",
        "options": [
          "Hay un mínimo relativo",
          "Hay un máximo relativo",
          "La función tiene una asíntota",
          "La pendiente es infinita"
        ],
        "answerIndex": 1,
        "explanation": "Por el criterio de la segunda derivada, f''(c) < 0 indica concavidad hacia abajo, luego existe un máximo relativo."
      },
      {
        "question": "¿Cuál es la derivada de g(x) = sen(3x)?",
        "options": [
          "cos(3x)",
          "3·cos(3x)",
          "−3·cos(3x)",
          "3·sen(3x)"
        ],
        "answerIndex": 1,
        "explanation": "Aplicando la regla de la cadena: g'(x) = cos(3x) · d/dx(3x) = 3·cos(3x)."
      }
    ]
  },
  "calculo-integral": {
    "intro": "Módulos teóricos de antiderivadas, sumas de Riemann, métodos de integración, aplicaciones e integrales impropias basados en las guías de la asignatura.",
    "theory": [
      {
        "title": "1. Antiderivadas e Integral Indefinida",
        "tag": "Capítulo 1",
        "summary": "F(x) es una <strong>antiderivada o primitiva</strong> de f(x) en un intervalo I si F'(x) = f(x). Dos primitivas cualesquiera difieren en una constante arbitraria C.",
        "points": [
          "<strong>Regla de la potencia</strong>: ∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C (para n ≠ −1).",
          "<strong>Caso logarítmico</strong>: ∫ (1/x) dx = ln|x| + C.",
          "<strong>Linealidad</strong>: ∫ [af(x) + bg(x)] dx = a∫f(x)dx + b∫g(x)dx."
        ],
        "formula": "∫ f(x) dx = F(x) + C   ⇔   F'(x) = f(x)",
        "example": "Para f(x) = 4x³ + 8x² − 4x + 5, una antiderivada general es F(x) = x⁴ + (8/3)x³ − 2x² + 5x + C."
      },
      {
        "title": "2. Sumas de Riemann y Teorema Fundamental del Cálculo",
        "tag": "Capítulo 3",
        "summary": "La integral definida ∫ₐᵇ f(x) dx es el límite de las sumas de áreas de n rectángulos de ancho Δx = (b − a)/n cuando n → ∞.",
        "points": [
          "<strong>Notación Sigma</strong>: Σ_{k=1}^n k = n(n + 1)/2; Σ_{k=1}^n k² = n(n + 1)(2n + 1)/6.",
          "<strong>Teorema Fundamental (TFC)</strong>: Si F es primitiva de f continua en [a, b], entonces ∫ₐᵇ f(x) dx = F(b) − F(a)."
        ],
        "formula": "∫ₐᵇ f(x) dx = lím_{n→∞} Σ_{i=1}^n f(xᵢ*) Δx = F(b) − F(a)",
        "example": "∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9. Una suma de Riemann de punto medio con n = 6 aproxima 8.9375 (error < 0.7%)."
      },
      {
        "title": "3. Métodos de Integración (Sustitución, Partes y Fracciones)",
        "tag": "Capítulo 2",
        "summary": "Cuando la integral no es inmediata, transformamos el integrando para reducirlo a formas elementales.",
        "points": [
          "<strong>Sustitución simple</strong>: Elegir u = g(x) tal que du = g'(x)dx aparezca en el integrando.",
          "<strong>Integración por partes</strong> (basada en d(U·V) = VdU + UdV): ∫ U dV = U·V − ∫ V dU.",
          "<strong>Fracciones parciales</strong>: Descomponer P(x)/Q(x) (grado P < grado Q) según factores lineales o cuadráticos de Q(x)."
        ],
        "formula": "∫ U dV = U·V − ∫ V dU   (regla ILATE para elegir U)",
        "example": "Para ∫ x·cos(x) dx: elegimos U = x (dU = dx) y dV = cos(x)dx (V = sen x) ⇒ x·sen(x) − ∫ sen(x)dx = x·sen(x) + cos(x) + C."
      },
      {
        "title": "4. Aplicaciones Geométricas e Integrales Impropias",
        "tag": "Capítulos 4–5",
        "summary": "La integral permite calcular áreas entre curvas, volúmenes de sólidos de revolución (discos, arandelas, capas) y convergencia sobre intervalos infinitos.",
        "points": [
          "<strong>Área entre curvas</strong>: A = ∫ₐᵇ |f(x) − g(x)| dx.",
          "<strong>Volumen por discos</strong> alrededor del eje X: V = π ∫ₐᵇ [R(x)]² dx.",
          "<strong>Integral impropia Tipo I</strong>: ∫ₐ^∞ f(x)dx = lím_{b→∞} ∫ₐᵇ f(x)dx (converge si el límite es finito)."
        ],
        "formula": "∫₁^∞ (1 / xᵖ) dx   converge si p > 1 (vale 1/(p−1))  y  diverge si p ≤ 1",
        "example": "∫₁^∞ (1/x²) dx = lím_{b→∞} [−1/x]₁ᵇ = lím_{b→∞} (−1/b + 1) = 1 (converge)."
      }
    ],
    "docs": [
      {
        "name": "EjemplosAntiderivadas",
        "filename": "EjemplosAntiderivadas.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjemplosAntiderivadas.pdf",
        "txt_path": null,
        "size_mb": 1.16,
        "pages": 10,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosAplicaciones",
        "filename": "EjemplosAplicaciones.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjemplosAplicaciones.pdf",
        "txt_path": null,
        "size_mb": 1.04,
        "pages": 57,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosImpropias",
        "filename": "EjemplosImpropias.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjemplosImpropias.pdf",
        "txt_path": null,
        "size_mb": 0.1,
        "pages": 9,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosMetodos",
        "filename": "EjemplosMetodos.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjemplosMetodos.pdf",
        "txt_path": null,
        "size_mb": 1.14,
        "pages": 19,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosAntiderivadas",
        "filename": "EjerciciosAntiderivadas.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjerciciosAntiderivadas.pdf",
        "txt_path": null,
        "size_mb": 0.07,
        "pages": 3,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosAplicaciones",
        "filename": "EjerciciosAplicaciones.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjerciciosAplicaciones.pdf",
        "txt_path": null,
        "size_mb": 0.19,
        "pages": 14,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosMetodosIntegracion",
        "filename": "EjerciciosMetodosIntegracion.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjerciciosMetodosIntegracion.pdf",
        "txt_path": null,
        "size_mb": 0.1,
        "pages": 5,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosRieman",
        "filename": "EjerciciosRieman.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/EjerciciosRieman.pdf",
        "txt_path": null,
        "size_mb": 0.14,
        "pages": 13,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TEjemplosRieman",
        "filename": "TEjemplosRieman.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TEjemplosRieman.pdf",
        "txt_path": null,
        "size_mb": 5.06,
        "pages": 36,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaAntiderivadas",
        "filename": "TeoriaAntiderivadas.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TeoriaAntiderivadas.pdf",
        "txt_path": null,
        "size_mb": 0.71,
        "pages": 7,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaAplicaciones",
        "filename": "TeoriaAplicaciones.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TeoriaAplicaciones.pdf",
        "txt_path": null,
        "size_mb": 2.54,
        "pages": 31,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaImpropias",
        "filename": "TeoriaImpropias.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TeoriaImpropias.pdf",
        "txt_path": null,
        "size_mb": 0.89,
        "pages": 14,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaMetodosdeIntegracion",
        "filename": "TeoriaMetodosdeIntegracion.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TeoriaMetodosdeIntegracion.pdf",
        "txt_path": null,
        "size_mb": 2.38,
        "pages": 18,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaRiemann",
        "filename": "TeoriaRiemann.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TeoriaRiemann.pdf",
        "txt_path": null,
        "size_mb": 0.8,
        "pages": 16,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaRiemann backup",
        "filename": "TeoriaRiemann_backup.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TeoriaRiemann_backup.pdf",
        "txt_path": null,
        "size_mb": 0.79,
        "pages": 17,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaSoloRiemanCompleta",
        "filename": "TeoriaSoloRiemanCompleta.pdf",
        "pdf_path": "material_estudio/calculo-integral/pdfs/TeoriaSoloRiemanCompleta.pdf",
        "txt_path": null,
        "size_mb": 1.0,
        "pages": 55,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "Al aplicar integración por partes a ∫ x·eˣ dx, ¿cuál es la elección adecuada?",
        "options": [
          "U = eˣ, dV = x dx",
          "U = x, dV = eˣ dx",
          "U = x·eˣ, dV = dx",
          "No se puede resolver por partes"
        ],
        "answerIndex": 1,
        "explanation": "Al elegir U = x, su derivada dU = dx reduce el grado polinómico, mientras dV = eˣdx se integra directo a V = eˣ."
      },
      {
        "question": "¿Cuál es el valor exacto de la integral definida ∫₀² 3x² dx?",
        "options": [
          "4",
          "6",
          "8",
          "12"
        ],
        "answerIndex": 2,
        "explanation": "La antiderivada es x³. Evaluando en los límites: 2³ − 0³ = 8."
      },
      {
        "question": "¿Para qué valores de p converge la integral impropia ∫₁^∞ x⁻ᵖ dx?",
        "options": [
          "p < 1",
          "p = 1",
          "p > 1",
          "Para todo p real"
        ],
        "answerIndex": 2,
        "explanation": "La p-integral impropia en [1, ∞) converge exclusivamente cuando p > 1."
      }
    ]
  },
  "metodos-numericos": {
    "intro": "Fundamentos teóricos de análisis numérico, interpolación, solución de ecuaciones diferenciales y filtrado de Kalman basados en las guías de la asignatura.",
    "theory": [
      {
        "title": "1. Error Numérico, Bisección y Newton-Raphson",
        "tag": "Raíces y Error",
        "summary": "En ingeniería se aproximan soluciones de ecuaciones no lineales f(x) = 0 mediante esquemas iterativos controlando el error relativo.",
        "points": [
          "<strong>Error relativo porcentual</strong>: ε = |x_exacto − x_aprox| / |x_exacto| × 100%.",
          "<strong>Método de Bisección</strong>: Garantiza convergencia si f(a)·f(b) < 0 dividiendo el intervalo a la mitad.",
          "<strong>Newton-Raphson</strong>: Convergencia cuadrática usando la recta tangente: xₙ₊₁ = xₙ − f(xₙ)/f'(xₙ)."
        ],
        "formula": "xₙ₊₁ = xₙ − f(xₙ) / f'(xₙ)",
        "example": "Para f(x) = x² − 2 con x₀ = 1.5: f(1.5)=0.25, f'(1.5)=3 ⇒ x₁ = 1.5 − 0.25/3 = 1.4167 (muy cerca de √2 ≈ 1.4142)."
      },
      {
        "title": "2. Interpolación Polinómica (Lagrange y Hermite)",
        "tag": "Interpolación",
        "summary": "La interpolación construye un polinomio único P(x) que pasa exactamente por n + 1 puntos dados (y en Hermite coincide además con las derivadas).",
        "points": [
          "<strong>Polinomio de Lagrange</strong>: Pₙ(x) = Σ yᵢ Lᵢ(x), donde Lᵢ(xⱼ) = δᵢⱼ.",
          "<strong>Interpolación de Hermite</strong>: Ajusta tanto valores f(xᵢ) como pendientes f'(xᵢ) en los nodos.",
          "<strong>Cuidado</strong>: Polinomios de grado muy alto en nodos equidistantes pueden oscilar (fenómeno de Runge); conviene usar splines."
        ],
        "formula": "Lᵢ(x) = Π_{j≠i} (x − xⱼ) / (xᵢ − xⱼ)",
        "example": "Dados (0, 1) y (2, 5), el interpolador lineal de Lagrange es P₁(x) = 1·(x−2)/(0−2) + 5·(x−0)/(2−0) = 1 + 2x."
      },
      {
        "title": "3. Ecuaciones Diferenciales (Método de Euler y Runge-Kutta)",
        "tag": "EDOs",
        "summary": "Resuelve problemas de valor inicial y' = f(x, y), y(x₀) = y₀ avanzando paso a paso con tamaño h.",
        "points": [
          "<strong>Método de Euler explícito</strong>: Usa la pendiente al inicio del paso: yₙ₊₁ = yₙ + h · f(xₙ, yₙ).",
          "<strong>Error local vs global</strong>: Euler tiene error global O(h); reducir h a la mitad reduce aproximadamente a la mitad el error.",
          "<strong>Runge-Kutta orden 4 (RK4)</strong>: Promedia 4 pendientes en cada paso para precisión O(h⁴)."
        ],
        "formula": "yₙ₊₁ = yₙ + h · f(xₙ, yₙ)   |   xₙ₊₁ = xₙ + h",
        "example": "Para y' = y, y(0) = 1 con h = 0.5: y₁ = 1 + 0.5(1) = 1.5; y₂ = 1.5 + 0.5(1.5) = 2.25 (exacta e¹ ≈ 2.7183)."
      },
      {
        "title": "4. Estimación de Estado y Filtro de Kalman (UKF)",
        "tag": "Control y Filtrado",
        "summary": "El Filtro de Kalman estima estados óptimos combinando modelo dinámico y mediciones con ruido.",
        "points": [
          "<strong>Ciclo Predicción–Corrección</strong>: Predice estado a priori y matriz de covarianza P, luego corrige con ganancia de Kalman K usando la medición real.",
          "<strong>UKF (Unscented Kalman Filter)</strong>: Propaga puntos sigma a través de sistemas no lineales con mayor precisión que el EKF linealizado."
        ],
        "formula": "x̂ₖ = x̂ₖ⁻ + Kₖ(zₖ − H x̂ₖ⁻)",
        "example": "En navegación de vehículos autónomos, el UKF fusiona datos ruidosos de GPS y sensores inerciales reduciendo el error cuadrático medio (RMSE)."
      }
    ],
    "docs": [
      {
        "name": "Boukraa Ahnin Abderrahim Prueba4 2",
        "filename": "Boukraa_Ahnin_Abderrahim_Prueba4_2.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/Boukraa_Ahnin_Abderrahim_Prueba4_2.pdf",
        "txt_path": null,
        "size_mb": 0.54,
        "pages": 20,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Hermite interpolation es",
        "filename": "Hermite_interpolation_es.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/Hermite_interpolation_es.pdf",
        "txt_path": null,
        "size_mb": 0.07,
        "pages": 2,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Hernando LeytonV. 2009",
        "filename": "Hernando_LeytonV._2009.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/Hernando_LeytonV._2009.pdf",
        "txt_path": null,
        "size_mb": 1.25,
        "pages": 67,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Prueba Evaluacion 2 Abderrahim Boukraa Ahin",
        "filename": "Prueba_Evaluacion_2_Abderrahim_Boukraa_Ahin.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/Prueba_Evaluacion_2_Abderrahim_Boukraa_Ahin.pdf",
        "txt_path": null,
        "size_mb": 0.65,
        "pages": 20,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Prueba Evaluacion 3 Abderrahim Boukraa Ahnin",
        "filename": "Prueba_Evaluacion_3_Abderrahim_Boukraa_Ahnin.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/Prueba_Evaluacion_3_Abderrahim_Boukraa_Ahnin.pdf",
        "txt_path": null,
        "size_mb": 0.77,
        "pages": 19,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "SIGGRAPH2001 CoursePack 08",
        "filename": "SIGGRAPH2001_CoursePack_08.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/SIGGRAPH2001_CoursePack_08.pdf",
        "txt_path": null,
        "size_mb": 0.74,
        "pages": 81,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TAREAS DE EVALUACIAN HMG MADULO 2 CURSO 22-23 1AoC",
        "filename": "TAREAS_DE_EVALUACIAN_HMG_MADULO_2_CURSO_22-23_1AoC.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/TAREAS_DE_EVALUACIAN_HMG_MADULO_2_CURSO_22-23_1AoC.pdf",
        "txt_path": null,
        "size_mb": 0.07,
        "pages": 2,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Tareas HMG MA3dulo 3 Curso 22-23",
        "filename": "Tareas_HMG_MA3dulo_3_Curso_22-23.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/Tareas_HMG_MA3dulo_3_Curso_22-23.pdf",
        "txt_path": null,
        "size_mb": 0.19,
        "pages": 4,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Tareas HMG MA3dulo 4 Curso 22-23",
        "filename": "Tareas_HMG_MA3dulo_4_Curso_22-23.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/Tareas_HMG_MA3dulo_4_Curso_22-23.pdf",
        "txt_path": null,
        "size_mb": 0.32,
        "pages": 5,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "trabajoModulo4",
        "filename": "trabajoModulo4.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/trabajoModulo4.pdf",
        "txt_path": null,
        "size_mb": 0.73,
        "pages": 19,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "trabajoModuloDos",
        "filename": "trabajoModuloDos.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/trabajoModuloDos.pdf",
        "txt_path": null,
        "size_mb": 1.71,
        "pages": 25,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "trabajoModuloTres",
        "filename": "trabajoModuloTres.pdf",
        "pdf_path": "material_estudio/metodos-numericos/pdfs/trabajoModuloTres.pdf",
        "txt_path": null,
        "size_mb": 0.29,
        "pages": 13,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "Si aplicamos el Método de Euler a y' = 2x con y(0) = 1 y paso h = 0.5, ¿cuánto vale y₁ en x₁ = 0.5?",
        "options": [
          "1.0",
          "1.25",
          "1.5",
          "2.0"
        ],
        "answerIndex": 0,
        "explanation": "y₁ = y₀ + h·f(x₀, y₀) = 1 + 0.5·(2·0) = 1.0. Recién en el segundo paso (x₁=0.5) la pendiente 2(0.5)=1 hace subir y₂ = 1.5."
      },
      {
        "question": "¿Cuál es la principal ventaja del método de Newton-Raphson frente al de Bisección?",
        "options": [
          "No requiere derivada",
          "Converge cuadráticamente mucho más rápido cerca de la raíz",
          "Nunca diverge sin importar x₀",
          "Solo sirve para polinomios"
        ],
        "answerIndex": 1,
        "explanation": "Newton-Raphson posee convergencia cuadrática (duplica dígitos exactos por iteración), aunque exige f'(x) ≠ 0."
      },
      {
        "question": "¿Qué datos adicionales requiere la interpolación de Hermite frente a la de Lagrange?",
        "options": [
          "Valores de la segunda integral",
          "Los valores de las derivadas f'(xᵢ) en los nodos",
          "Únicamente puntos equidistantes",
          "Matrices triangulares inferiores"
        ],
        "answerIndex": 1,
        "explanation": "El polinomio de Hermite ajusta tanto los valores de la función f(xᵢ) como sus pendientes f'(xᵢ)."
      }
    ]
  },
  "fisica-mecanica": {
    "intro": "Síntesis teórica de cinemática en 1D y 2D, leyes de Newton, trabajo, energía mecánica y colisiones basada en la bibliografía de la asignatura.",
    "theory": [
      {
        "title": "1. Cinemática en 1D y 2D (Movimiento Parabólico)",
        "tag": "Cinemática",
        "summary": "En movimiento con aceleración constante g = 9.81 m/s² hacia abajo, los ejes horizontal (MRU) y vertical (MRUA) son independientes.",
        "points": [
          "<strong>Eje X (aₓ = 0)</strong>: x(t) = x₀ + (v₀ cos θ)·t.",
          "<strong>Eje Y (aᵧ = −g)</strong>: y(t) = y₀ + (v₀ sen θ)·t − ½gt².",
          "<strong>Movimiento circular uniforme</strong>: Aceleración centrípeta a_c = v²/r dirigida hacia el centro."
        ],
        "formula": "Alcance (si y₀=0): R = (v₀² · sen 2θ) / g   |   Altura máx: H = (v₀ sen θ)² / (2g)",
        "example": "Un proyectil lanzado a 20 m/s con ángulo de 30° alcanza y_max = (20·0.5)² / (2·9.81) = 100 / 19.62 ≈ 5.10 m."
      },
      {
        "title": "2. Dinámica y Leyes de Newton",
        "tag": "Dinámica",
        "summary": "La segunda ley relaciona la fuerza neta externa que actúa sobre un cuerpo con su masa y aceleración: ΣF = m·a.",
        "points": [
          "<strong>Diagrama de Cuerpo Libre (DCL)</strong>: Aislar el cuerpo y dibujar Peso (mg), Normal (N), Tensión (T) y Fricción (f).",
          "<strong>Fricción cinética</strong>: f_k = μ_k · N (opuesta al deslizamiento relativo).",
          "<strong>Tercera Ley</strong>: A toda fuerza de acción corresponde una reacción igual y opuesta sobre cuerpos distintos."
        ],
        "formula": "ΣFₓ = m·aₓ   |   ΣFᵧ = m·aᵧ   |   f_s ≤ μ_s N   |   f_k = μ_k N",
        "example": "Un bloque de 10 kg en plano horizontal con fuerza de 50 N y μ_k = 0.2: N = 98.1 N, f_k = 19.62 N ⇒ a = (50 − 19.62)/10 = 3.04 m/s²."
      },
      {
        "title": "3. Trabajo, Energía Mecánica y Colisiones",
        "tag": "Conservación",
        "summary": "El trabajo W = F·Δx·cos(θ) mide la transferencia de energía al desplazarse bajo una fuerza.",
        "points": [
          "<strong>Teorema Trabajo-Energía</strong>: W_neto = ΔK = ½mv_f² − ½mv_i².",
          "<strong>Conservación de Energía Mecánica</strong> (sin fuerzas no conservativas): K_i + U_gi + U_ei = K_f + U_gf + U_ef.",
          "<strong>Colisiones</strong>: En todo choque aislado se conserva el momento lineal total p = m₁v₁ + m₂v₂ (y en choques elásticos también se conserva K)."
        ],
        "formula": "K = ½mv²   |   U_g = mgh   |   U_e = ½kx²   |   m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f",
        "example": "Si un cuerpo cae libremente desde 5 m de altura partiendo del reposo, mgh = ½mv² ⇒ v = √(2·9.81·5) ≈ 9.90 m/s."
      }
    ],
    "docs": [
      {
        "name": "ColisionesTeoriaSerway",
        "filename": "ColisionesTeoriaSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/ColisionesTeoriaSerway.pdf",
        "txt_path": null,
        "size_mb": 3.65,
        "pages": 14,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjeerciciosEnergiaSerway",
        "filename": "EjeerciciosEnergiaSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjeerciciosEnergiaSerway.pdf",
        "txt_path": null,
        "size_mb": 0.55,
        "pages": 12,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosColisionesSerway",
        "filename": "EjemplosColisionesSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjemplosColisionesSerway.pdf",
        "txt_path": null,
        "size_mb": 1.16,
        "pages": 13,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosColisionesSerway backup",
        "filename": "EjemplosColisionesSerway_backup.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjemplosColisionesSerway_backup.pdf",
        "txt_path": null,
        "size_mb": 1.14,
        "pages": 14,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosEnergiaSerway",
        "filename": "EjemplosEnergiaSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjemplosEnergiaSerway.pdf",
        "txt_path": null,
        "size_mb": 3.28,
        "pages": 17,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosMCircularSerway",
        "filename": "EjemplosMCircularSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjemplosMCircularSerway.pdf",
        "txt_path": null,
        "size_mb": 9.63,
        "pages": 32,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosMovimiento1DireccionSerway",
        "filename": "EjemplosMovimiento1DireccionSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjemplosMovimiento1DireccionSerway.pdf",
        "txt_path": null,
        "size_mb": 1.15,
        "pages": 21,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjemplosNewtonSerway",
        "filename": "EjemplosNewtonSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjemplosNewtonSerway.pdf",
        "txt_path": null,
        "size_mb": 2.34,
        "pages": 28,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosColisionesSerway",
        "filename": "EjerciciosColisionesSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjerciciosColisionesSerway.pdf",
        "txt_path": null,
        "size_mb": 0.36,
        "pages": 10,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosMCircularSerway",
        "filename": "EjerciciosMCircularSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjerciciosMCircularSerway.pdf",
        "txt_path": null,
        "size_mb": 1.73,
        "pages": 25,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosMovimientoSerway",
        "filename": "EjerciciosMovimientoSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjerciciosMovimientoSerway.pdf",
        "txt_path": null,
        "size_mb": 0.29,
        "pages": 12,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosMovimientoenDosDreccionesSerway",
        "filename": "EjerciciosMovimientoenDosDreccionesSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjerciciosMovimientoenDosDreccionesSerway.pdf",
        "txt_path": null,
        "size_mb": 0.55,
        "pages": 10,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosNewtonSerway",
        "filename": "EjerciciosNewtonSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/EjerciciosNewtonSerway.pdf",
        "txt_path": null,
        "size_mb": 0.83,
        "pages": 11,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "MovimientoCircularTeoriaSerway1",
        "filename": "MovimientoCircularTeoriaSerway1.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/MovimientoCircularTeoriaSerway1.pdf",
        "txt_path": null,
        "size_mb": 8.36,
        "pages": 37,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "MovimientoenUnaDreccionSerway",
        "filename": "MovimientoenUnaDreccionSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/MovimientoenUnaDreccionSerway.pdf",
        "txt_path": null,
        "size_mb": 1.65,
        "pages": 19,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TrabajoyEnergiaSerway",
        "filename": "TrabajoyEnergiaSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/TrabajoyEnergiaSerway.pdf",
        "txt_path": null,
        "size_mb": 6.7,
        "pages": 20,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "VectoresyLeyesdeNewtonSerway",
        "filename": "VectoresyLeyesdeNewtonSerway.pdf",
        "pdf_path": "material_estudio/fisica-mecanica/pdfs/VectoresyLeyesdeNewtonSerway.pdf",
        "txt_path": null,
        "size_mb": 5.05,
        "pages": 29,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "En un tiro parabólico sobre terreno horizontal (sin fricción del aire), ¿con qué ángulo se obtiene el alcance máximo?",
        "options": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "answerIndex": 1,
        "explanation": "El alcance R = v₀² sen(2θ)/g es máximo cuando sen(2θ) = 1, es decir 2θ = 90° ⇒ θ = 45°."
      },
      {
        "question": "Si la rapidez de un automóvil se duplica (de v a 2v), ¿qué ocurre con su energía cinética K = ½mv²?",
        "options": [
          "Se duplica",
          "Se triplica",
          "Se cuadruplica",
          "Se mantiene igual"
        ],
        "answerIndex": 2,
        "explanation": "Como K depende del cuadrado de la rapidez, K_nueva = ½m(2v)² = 4·(½mv²) = 4K."
      },
      {
        "question": "En una colisión completamente inelástica (dos masas quedan pegadas tras chocar), ¿qué magnitud se conserva siempre?",
        "options": [
          "Solo la energía cinética",
          "El momento lineal total del sistema aislado",
          "La energía potencial elástica",
          "Ambas energías cinética y potencial"
        ],
        "answerIndex": 1,
        "explanation": "En choques inelásticos se pierde parte de la energía cinética en calor/deformación, pero el momento lineal total siempre se conserva si ΣF_ext = 0."
      }
    ]
  },
  "estatica": {
    "intro": "Principios de equilibrio rígido, centroides compuestos y análisis estructural basados en la bibliografía de la asignatura.",
    "theory": [
      {
        "title": "1. Equilibrio de Partículas y Cuerpos Rígidos (2D y 3D)",
        "tag": "Equilibrio",
        "summary": "Un cuerpo permanece en reposo o equilibrio estático cuando la fuerza resultante y el momento resultante respecto a cualquier punto son nulos.",
        "points": [
          "<strong>En el plano (2D)</strong>: Disponemos de 3 ecuaciones independientes: ΣFₓ = 0, ΣFᵧ = 0, ΣM_O = 0.",
          "<strong>Apoyos típicos</strong>: Rodillo (1 reacción normal), Pasador articulado (2 reacciones Rₓ, Rᵧ), Empotramiento (3 reacciones Rₓ, Rᵧ, M).",
          "<strong>Determinación estática</strong>: Si las incógnitas igualan las ecuaciones de equilibrio, la estructura es isostática."
        ],
        "formula": "ΣFₓ = 0   |   ΣFᵧ = 0   |   ΣM_A = Σ (r × F) = 0",
        "example": "En una viga de 6 m con carga puntual P = 20 kN a 2.5 m de A: ΣM_A = 0 ⇒ 6·R_B = 20(2.5) ⇒ R_B = 8.33 kN y R_A = 20 − 8.33 = 11.67 kN."
      },
      {
        "title": "2. Centroides de Áreas Compuestas",
        "tag": "Centroides",
        "summary": "Un área compleja se descompone en figuras geométricas simples (rectángulos, triángulos, semicírculos, trapecios), restando los huecos.",
        "points": [
          "<strong>Rectángulo (b × h)</strong>: Centroide en (b/2, h/2).",
          "<strong>Triángulo rectángulo</strong>: A un tercio de la base y un tercio de la altura desde el ángulo recto.",
          "<strong>Semicírculo</strong>: A distancia 4R/(3π) ≈ 0.4244R desde su diámetro base."
        ],
        "formula": "x̄ = (Σ Aᵢ xᵢ) / (Σ Aᵢ)   |   ȳ = (Σ Aᵢ yᵢ) / (Σ Aᵢ)   (Aᵢ negativo si es hueco)",
        "example": "Placa rectangular de 21×15 cm con un hueco semicircular y un triángulo restados: se suma A₁y₁ − A₂y₂ − A₃y₃ dividido entre el área neta."
      },
      {
        "title": "3. Armaduras y Fuerzas Internas en Vigas (V y M)",
        "tag": "Estructuras",
        "summary": "Al cortar una viga o analizar una cercha determinamos las fuerzas axiales en barras (tracción/compresión) y las leyes de cortante V(x) y momento M(x).",
        "points": [
          "<strong>Método de los Nodos</strong>: Aplica ΣFₓ = 0 y ΣFᵧ = 0 en cada nodo con máximo 2 incógnitas.",
          "<strong>Relación carga–cortante–momento</strong>: dV/dx = −w(x) y dM/dx = V(x).",
          "El momento flector alcanza un máximo o mínimo exactamente donde el cortante V(x) cruza por cero."
        ],
        "formula": "V(x) = Σ F_izq   |   M(x) = ∫ V(x) dx",
        "example": "Una viga simplemente apoyada de luz L bajo carga uniforme w tiene cortante máximo V = wL/2 en los apoyos y momento máximo M_max = wL²/8 en el centro."
      }
    ],
    "docs": [
      {
        "name": "calculosCentroide",
        "filename": "calculosCentroide.pdf",
        "pdf_path": "material_estudio/estatica/pdfs/calculosCentroide.pdf",
        "txt_path": null,
        "size_mb": 0.32,
        "pages": 6,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "¿Cuántas incógnitas de reacción introduce un apoyo de pasador articulado en 2D?",
        "options": [
          "1 fuerza normal",
          "2 componentes de fuerza (Rx, Ry)",
          "2 fuerzas y 1 momento",
          "3 momentos"
        ],
        "answerIndex": 1,
        "explanation": "Un pasador restringe traslación horizontal y vertical (Rx, Ry), pero permite giro libre (M = 0)."
      },
      {
        "question": "En una viga simplemente apoyada de 4 m con carga uniformemente distribuida w = 10 kN/m, ¿cuál es el momento flector máximo?",
        "options": [
          "10 kN·m",
          "20 kN·m",
          "40 kN·m",
          "80 kN·m"
        ],
        "answerIndex": 1,
        "explanation": "M_max = wL²/8 = 10 × 4² / 8 = 160 / 8 = 20 kN·m."
      },
      {
        "question": "¿Dónde ocurre el momento flector máximo en una viga sin momentos puntuales concentrados?",
        "options": [
          "Siempre en el apoyo derecho",
          "Donde el cortante V(x) es máximo",
          "Donde el cortante V(x) se hace cero o cambia de signo",
          "En el extremo en voladizo únicamente"
        ],
        "answerIndex": 2,
        "explanation": "Como dM/dx = V(x), los extremos locales del momento M ocurren donde V(x) = 0."
      }
    ]
  },
  "mecanica-materiales": {
    "intro": "Resumen de mecánica de sólidos: esfuerzo, deformación, flexión, torsión y Círculo de Mohr basado en los textos guía de la asignatura.",
    "theory": [
      {
        "title": "1. Esfuerzo Normal, Esfuerzo Cortante y Factor de Seguridad",
        "tag": "Capítulo 1",
        "summary": "El <strong>esfuerzo</strong> mide la intensidad interna de fuerza por unidad de área transversal (N/m² = Pa; 1 MPa = 1 N/mm²).",
        "points": [
          "<strong>Esfuerzo normal promedio</strong>: σ = P / A (tracción + o compresión −).",
          "<strong>Esfuerzo cortante promedio</strong> en pernos/pasadores: τ = V / A (cortante simple V = P; cortante doble V = P/2).",
          "<strong>Esfuerzo admisible</strong>: σ_adm = σ_falla / FS (Factor de Seguridad FS > 1)."
        ],
        "formula": "σ = P / A   |   τ_prom = V / A   |   FS = Carga de falla / Carga admisible",
        "example": "Una barra de acero de área A = 400 mm² sometida a tracción P = 48 kN soporta σ = 48,000 N / 400 mm² = 120 MPa."
      },
      {
        "title": "2. Deformación Axial, Ley de Hooke y Torsión",
        "tag": "Capítulos 2–3",
        "summary": "En el rango elástico lineal, los materiales cumplen la <strong>Ley de Hooke</strong>: σ = E · ε, donde E es el módulo de elasticidad (acero ≈ 200 GPa).",
        "points": [
          "<strong>Alargamiento axial</strong>: δ = (P · L) / (A · E).",
          "<strong>Deformación unitaria</strong>: ε = δ / L (adimensional).",
          "<strong>Torsión en ejes circulares</strong>: τ = T·r / J, ángulo de giro φ = T·L / (J·G)."
        ],
        "formula": "δ = P·L / (A·E)   |   τ_max = T·c / J   donde J = πc⁴ / 2 (eje macizo)",
        "example": "Una varilla de acero (E = 200 GPa) de 2 m y área 500 mm² bajo 50 kN se alarga δ = (50×10³ · 2000) / (500 · 200×10³) = 1.0 mm."
      },
      {
        "title": "3. Flexión en Vigas y Esfuerzos Combinados (Círculo de Mohr)",
        "tag": "Capítulos 4–7",
        "summary": "La flexión genera tracción en una cara de la viga y compresión en la opuesta, alcanzando su máximo en las fibras extremas a distancia c del eje neutro.",
        "points": [
          "<strong>Fórmula de la flexión</strong>: σ = −M·y / I; máximo σ_max = M·c / I.",
          "<strong>Cortante transversal</strong>: τ = V·Q / (I·t).",
          "<strong>Círculo de Mohr 2D</strong>: Permite hallar esfuerzos principales σ₁, σ₂ y cortante máximo τ_max a partir de (σₓ, σᵧ, τₓᵧ)."
        ],
        "formula": "σ₁,₂ = (σₓ + σᵧ)/2 ± √[((σₓ − σᵧ)/2)² + τₓᵧ²]   |   τ_max = Radio R",
        "example": "Si σₓ = 80 MPa, σᵧ = −20 MPa y τₓᵧ = 40 MPa: σ_prom = 30 MPa, R = √(50² + 40²) = 64.03 MPa ⇒ σ₁ = 94.03 MPa, σ₂ = −34.03 MPa."
      }
    ],
    "docs": [
      {
        "name": "2023-1 Proyecto Integrador-2023",
        "filename": "2023-1_Proyecto_Integrador-2023.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/2023-1_Proyecto_Integrador-2023.pdf",
        "txt_path": null,
        "size_mb": 0.23,
        "pages": 4,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "Ejercicio2resuelto",
        "filename": "Ejercicio2resuelto.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/Ejercicio2resuelto.pdf",
        "txt_path": null,
        "size_mb": 0.07,
        "pages": 2,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjercicioNo1Resuelto",
        "filename": "EjercicioNo1Resuelto.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/EjercicioNo1Resuelto.pdf",
        "txt_path": null,
        "size_mb": 0.11,
        "pages": 3,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosEsfuerzos",
        "filename": "EjerciciosEsfuerzos.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/EjerciciosEsfuerzos.pdf",
        "txt_path": null,
        "size_mb": 1.4,
        "pages": 12,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosEsfuerzosRC",
        "filename": "EjerciciosEsfuerzosRC.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/EjerciciosEsfuerzosRC.pdf",
        "txt_path": null,
        "size_mb": 3.65,
        "pages": 24,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "EjerciciosPropuestosEsfuerzos",
        "filename": "EjerciciosPropuestosEsfuerzos.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/EjerciciosPropuestosEsfuerzos.pdf",
        "txt_path": null,
        "size_mb": 0.19,
        "pages": 5,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "LEEME",
        "filename": "LEEME.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/LEEME.pdf",
        "txt_path": null,
        "size_mb": 0.02,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "RCEjemplosEsfuerzos",
        "filename": "RCEjemplosEsfuerzos.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/RCEjemplosEsfuerzos.pdf",
        "txt_path": null,
        "size_mb": 0.77,
        "pages": 19,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "RCTeoriaEsfuerzos",
        "filename": "RCTeoriaEsfuerzos.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/RCTeoriaEsfuerzos.pdf",
        "txt_path": null,
        "size_mb": 4.92,
        "pages": 21,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "TeoriaEsfuerzosbeer",
        "filename": "TeoriaEsfuerzosbeer.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/TeoriaEsfuerzosbeer.pdf",
        "txt_path": null,
        "size_mb": 7.33,
        "pages": 110,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "calculos",
        "filename": "calculos.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/calculos.pdf",
        "txt_path": null,
        "size_mb": 0.02,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "plataformaITM2023",
        "filename": "plataformaITM2023.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/plataformaITM2023.pdf",
        "txt_path": null,
        "size_mb": 0.21,
        "pages": 3,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "trabajoEsfuerzosCombinadosITM",
        "filename": "trabajoEsfuerzosCombinadosITM.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/trabajoEsfuerzosCombinadosITM.pdf",
        "txt_path": null,
        "size_mb": 2.03,
        "pages": 18,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "trabajoHidraulica",
        "filename": "trabajoHidraulica.pdf",
        "pdf_path": "material_estudio/mecanica-materiales/pdfs/trabajoHidraulica.pdf",
        "txt_path": null,
        "size_mb": 0.51,
        "pages": 7,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "Si un pasador de diámetro d trabaja a cortante DOBLE bajo una fuerza total P, ¿cuál es su esfuerzo cortante promedio?",
        "options": [
          "P / A",
          "P / (2A)",
          "2P / A",
          "4P / A"
        ],
        "answerIndex": 1,
        "explanation": "En cortante doble existen dos planos resistentes en paralelo, por lo que cada área A toma V = P/2 ⇒ τ = P/(2A)."
      },
      {
        "question": "¿Cómo cambia el alargamiento axial δ = PL/(AE) si duplicamos tanto la longitud L como el área transversal A?",
        "options": [
          "Se duplica",
          "Se reduce a la mitad",
          "Permanece igual",
          "Se cuadruplica"
        ],
        "answerIndex": 2,
        "explanation": "El factor 2 en el numerador (L) y en el denominador (A) se cancelan: (2L)/(2A) = L/A."
      },
      {
        "question": "En un estado de esfuerzo plano con σₓ = 60 MPa, σᵧ = 60 MPa y τₓᵧ = 0, ¿cuánto vale el cortante máximo en el plano (radio de Mohr)?",
        "options": [
          "0 MPa",
          "30 MPa",
          "60 MPa",
          "120 MPa"
        ],
        "answerIndex": 0,
        "explanation": "R = √[((60 − 60)/2)² + 0²] = 0 MPa. El círculo degenera en un punto (esfuerzo hidrostático en el plano)."
      }
    ]
  },
  "ingenieria-civil-nsr10": {
    "intro": "Síntesis técnica basada en la norma colombiana NSR-10 (Títulos A, B, C, E y F), diseño estructural, pavimentos rígidos y presupuestos APU.",
    "theory": [
      {
        "title": "1. Amenaza Sísmica, Espectro Elástico y Cortante Basal (Título A NSR-10)",
        "tag": "NSR-10 Título A",
        "summary": "El espectro elástico de diseño Sa(T) determina la aceleración sísmica horizontal en función de la zona sísmica (Aa, Av), el tipo de suelo (Fa, Fv) y el período fundamental T.",
        "points": [
          "<strong>Períodos límite</strong>: Tc = 0.48(Av·Fv)/(Aa·Fa) y TL = 2.4·Fv.",
          "<strong>Meseta máxima</strong> (T ≤ Tc): Sa = 2.5 · Aa · Fa · I.",
          "<strong>Cortante basal reducido</strong>: Vs = (Sa · W) / R, donde R refleja la capacidad de disipación de energía (DES, DMO, DMI).",
          "<strong>Control de deriva (A.6.4)</strong>: La deriva máxima elástica de piso Δ_max ≤ 1.0% de la altura de entrepiso (0.5% en mampostería)."
        ],
        "formula": "Vs = Sa(T) · W / R   |   U = 1.2 D + 1.0 L ± 1.0 E   (Título B)",
        "example": "Para Medellín (Aa=0.15, Av=0.20), suelo D (Fa=1.5, Fv=2.0), I=1.0: Sa_max = 2.5(0.15)(1.5) = 0.5625 g. Con W=1200 kN y R=5, Vs = 135 kN."
      },
      {
        "title": "2. Concreto Reforzado, Mampostería y Acero (Títulos C, D, E y F)",
        "tag": "Diseño Estructural",
        "summary": "Dimensionamiento seguro y económico de vigas, columnas, losas, muros confinados de 1–2 pisos y pórticos metálicos.",
        "points": [
          "<strong>Flexión en vigas de concreto (Título C)</strong>: Bloque de compresión a = As·fy / (0.85·f'c·b), resistencia φMn = 0.90·As·fy·(d − a/2).",
          "<strong>Viviendas 1 y 2 pisos (Título E)</strong>: Muros confinados por vigas y columnetas de amarre con continuidad vertical.",
          "<strong>Acero estructural (Título F / AISC 360)</strong>: Verificación de perfiles HSS/W por fluencia, pandeo flexional y pandeo local."
        ],
        "formula": "φMn = 0.90 · As · fy · (d − a/2)   |   ρ_min = max(0.25√f'c / fy, 1.4 / fy)  (MPa)",
        "example": "En una viga de 30×40 cm (d=35 cm) con f'c=21 MPa, fy=420 MPa y 3 barras #5 (As=600 mm²): a = 600·420/(0.85·21·300) = 47.06 mm ⇒ φMn = 74.0 kN·m."
      },
      {
        "title": "3. Diseño de Pavimento Rígido (PCA / INVIAS) y Presupuestos APU",
        "tag": "Vías y Presupuestos",
        "summary": "Como muestran las memorias técnicas reales incluidas en esta biblioteca en PDF, un proyecto vial exige caracterizar tránsito (TPD), subrasante (CBR, módulo k), espesor de losa, dovelas y juntas.",
        "points": [
          "<strong>Pavimento rígido (MR-41 / MR-45)</strong>: Diseño por fatiga y erosión (PCA) o tablas INVIAS según categoría de tránsito T0–T5.",
          "<strong>Transferencia de carga</strong>: Pasadores lisos (dovelas) en juntas transversales y barras corrugadas de anclaje en juntas longitudinales.",
          "<strong>Presupuesto APU</strong>: Desglose unitario de Materiales + Mano de obra + Equipos + AIU."
        ],
        "formula": "Costo Ítem = Cantidad_Obra × (Materiales + Mano_Obra + Equipo) + AIU",
        "example": "En losas de pavimento rígido de 18–20 cm, modular paños cercanos a 3.5×3.5 m evita fisuración por alabeo térmico."
      }
    ],
    "docs": [
      {
        "name": "1.ARGELIA CALLE 29 ENTRE CARRERAS 30 Y 31 LOCALIZACIAN",
        "filename": "1.ARGELIA_CALLE_29_ENTRE_CARRERAS_30_Y_31_LOCALIZACIAN.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/1.ARGELIA_CALLE_29_ENTRE_CARRERAS_30_Y_31_LOCALIZACIAN.pdf",
        "txt_path": null,
        "size_mb": 0.17,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "1.ARGELIA CARRERA 27 ENTRE CALLES 31 Y 32 LOCALIZACIAN",
        "filename": "1.ARGELIA_CARRERA_27_ENTRE_CALLES_31_Y_32_LOCALIZACIAN.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/1.ARGELIA_CARRERA_27_ENTRE_CALLES_31_Y_32_LOCALIZACIAN.pdf",
        "txt_path": null,
        "size_mb": 0.41,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "1.ARGELIA CARRERA 31 CON CALLE 32 LOCALIZACION",
        "filename": "1.ARGELIA_CARRERA_31_CON_CALLE_32_LOCALIZACION.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/1.ARGELIA_CARRERA_31_CON_CALLE_32_LOCALIZACION.pdf",
        "txt_path": null,
        "size_mb": 0.21,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "5.ARGELIA CALLE 29 ENTRE CARRERAS 30 Y 31 DETALLES",
        "filename": "5.ARGELIA_CALLE_29_ENTRE_CARRERAS_30_Y_31_DETALLES.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/5.ARGELIA_CALLE_29_ENTRE_CARRERAS_30_Y_31_DETALLES.pdf",
        "txt_path": null,
        "size_mb": 0.32,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "5.ARGELIA CARRERA 27 ENTRE CALLES 31 Y 32 DETALLES",
        "filename": "5.ARGELIA_CARRERA_27_ENTRE_CALLES_31_Y_32_DETALLES.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/5.ARGELIA_CARRERA_27_ENTRE_CALLES_31_Y_32_DETALLES.pdf",
        "txt_path": null,
        "size_mb": 0.32,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "5.ARGELIA CARRERA 31 CON CALLE 32 DETALLES",
        "filename": "5.ARGELIA_CARRERA_31_CON_CALLE_32_DETALLES.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/5.ARGELIA_CARRERA_31_CON_CALLE_32_DETALLES.pdf",
        "txt_path": null,
        "size_mb": 0.54,
        "pages": 1,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "8.ARGELIA CALLE 29 ENTRE CARRERAS 30 Y 31 DISEAO GEOMETRICO",
        "filename": "8.ARGELIA_CALLE_29_ENTRE_CARRERAS_30_Y_31_DISEAO_GEOMETRICO.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/8.ARGELIA_CALLE_29_ENTRE_CARRERAS_30_Y_31_DISEAO_GEOMETRICO.pdf",
        "txt_path": null,
        "size_mb": 0.63,
        "pages": 4,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "8.ARGELIA CARRERA 27 ENTRE CALLES 31 Y 32 DISEAO GEOMETRICO",
        "filename": "8.ARGELIA_CARRERA_27_ENTRE_CALLES_31_Y_32_DISEAO_GEOMETRICO.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/8.ARGELIA_CARRERA_27_ENTRE_CALLES_31_Y_32_DISEAO_GEOMETRICO.pdf",
        "txt_path": null,
        "size_mb": 1.43,
        "pages": 8,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "8.ARGELIA CARRERA 32 CON CALLE 32 DISEAO GEOMETRICO",
        "filename": "8.ARGELIA_CARRERA_32_CON_CALLE_32_DISEAO_GEOMETRICO.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/8.ARGELIA_CARRERA_32_CON_CALLE_32_DISEAO_GEOMETRICO.pdf",
        "txt_path": null,
        "size_mb": 0.9,
        "pages": 7,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "DiseAo Pavimento Argelia",
        "filename": "DiseAo_Pavimento_Argelia.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/DiseAo_Pavimento_Argelia.pdf",
        "txt_path": null,
        "size_mb": 3.59,
        "pages": 30,
        "words": 0,
        "chars": 0,
        "preview": ""
      },
      {
        "name": "DiseAo Pavimento Argelia 1",
        "filename": "DiseAo_Pavimento_Argelia_1.pdf",
        "pdf_path": "material_estudio/ingenieria-civil-nsr10/pdfs/DiseAo_Pavimento_Argelia_1.pdf",
        "txt_path": null,
        "size_mb": 1.9,
        "pages": 30,
        "words": 0,
        "chars": 0,
        "preview": ""
      }
    ],
    "quiz": [
      {
        "question": "Según el Título A de la NSR-10, ¿cuál es la deriva máxima permitida para estructuras aporticadas convencionales?",
        "options": [
          "0.2% de la altura de piso",
          "1.0% de la altura de piso",
          "2.5% de la altura de piso",
          "5.0% de la altura total"
        ],
        "answerIndex": 1,
        "explanation": "La sección A.6.4.1 de la NSR-10 fija el límite máximo de deriva en 1.0% (0.01 · h_piso) para pórticos y 0.5% para mampostería."
      },
      {
        "question": "En el diseño de pavimento rígido, ¿para qué se instalan pasadores lisos (dovelas) en las juntas transversales?",
        "options": [
          "Para impedir que la losa se expanda longitudinalmente",
          "Para transferir cargas entre losas adyacentes permitiendo movimiento horizontal",
          "Para reemplazar por completo la subbase granular",
          "Para acelerar el fraguado del cemento"
        ],
        "answerIndex": 1,
        "explanation": "Las dovelas lisas engrasadas transfieren cortante vertical entre losas sin restringir la contracción/dilatación térmica."
      },
      {
        "question": "¿Cuál es la combinación gravitacional mayorada clásica de la NSR-10 Título B (Carga Muerta D + Viva L)?",
        "options": [
          "1.0 D + 1.0 L",
          "1.4 D + 1.7 L",
          "1.2 D + 1.6 L",
          "0.9 D + 1.2 L"
        ],
        "answerIndex": 2,
        "explanation": "Bajo LRFD (NSR-10 B.2.4.2), la combinación principal de gravedad con carga viva es U = 1.2D + 1.6L (+ 0.5Lr)."
      }
    ]
  },
  "programacion-ingenieria": {
    "intro": "Módulos prácticos de programación científica en Python, MATLAB, macros VBA, Bash y desarrollo web interactivo para ingeniería.",
    "theory": [
      {
        "title": "1. Python Científico para Ingeniería (NumPy, SciPy y Pandas)",
        "tag": "Python",
        "summary": "Python permite vectorizar cálculos matriciales, resolver sistemas estructurales y procesar grandes tablas de datos en pocas líneas.",
        "points": [
          "<strong>Vectorización con NumPy</strong>: Evita bucles lentos operando directamente sobre arreglos ndarray.",
          "<strong>Sistemas lineales</strong>: <code>np.linalg.solve(A, b)</code> es numéricamente más estable y rápido que invertir la matriz manualmente.",
          "<strong>Visualización</strong>: Matplotlib genera gráficas de diagramas V y M, espectros sísmicos y convergencia numérica."
        ],
        "formula": "import numpy as np\nx = np.linalg.solve(A, b)   # Resuelve Ax = b en C/LAPACK",
        "example": "Para hallar la raíz de f(x) = x³ − x − 2 con Newton-Raphson en 6 líneas de Python basta iterar x = x - (x**3 - x - 2)/(3*x**2 - 1) hasta |f(x)| < 1e-7."
      },
      {
        "title": "2. MATLAB / Octave, VBA Excel y Automatización Bash",
        "tag": "MATLAB / VBA / Bash",
        "summary": "Herramientas estándar en facultades de ingeniería y empresas constructoras para simulaciones y hojas de cálculo.",
        "points": [
          "<strong>MATLAB</strong>: Sintaxis nativa de matrices (<code>A\\b</code>, <code>eig(A)</code>, <code>ode45</code>).",
          "<strong>VBA Excel</strong>: Macros para automatizar presupuestos APU, listas de despiece y reportes.",
          "<strong>Bash</strong>: Scripts de terminal Linux para procesar PDFs (<code>pdftotext</code>), imágenes y videos por lotes."
        ],
        "formula": "% MATLAB:\n[t, y] = ode45(@(t, y) -0.8*y, [0 4], 2);",
        "example": "Un script Bash con bucle <code>for f in *.pdf; do pdftotext -layout \"$f\"; done</code> extrae en segundos decenas de documentos."
      },
      {
        "title": "3. Desarrollo Web Interactivo (HTML5, CSS3 y JavaScript)",
        "tag": "Desarrollo Web",
        "summary": "HTML estructura el contenido, CSS diseña interfaces adaptables (Grid/Flexbox) y JavaScript da vida a calculadoras y gráficas en el navegador.",
        "points": [
          "<strong>DOM y Eventos</strong>: Leer formularios sin recargar la página y actualizar resultados al instante.",
          "<strong>Canvas 2D API</strong>: Trazar funciones, vectores, círculos de Mohr y simulaciones físicas directamente en el cliente.",
          "<strong>Fetch API</strong>: Cargar archivos JSON o texto plano asíncronamente."
        ],
        "formula": "const x = parseFloat(input.value);\nctx.lineTo(mapX(x), mapY(f(x)));",
        "example": "Todos los laboratorios y el lector de texto de este sitio web están programados en JavaScript puro sin frameworks pesados."
      }
    ],
    "docs": [],
    "quiz": [
      {
        "question": "En NumPy (Python), ¿qué función es más recomendable y numéricamente estable para resolver A·x = b?",
        "options": [
          "np.linalg.inv(A) * b",
          "np.linalg.solve(A, b)",
          "A / b",
          "np.dot(A, b)"
        ],
        "answerIndex": 1,
        "explanation": "np.linalg.solve(A, b) utiliza factorización LU directamente, siendo más rápida y precisa que calcular la inversa explícita."
      },
      {
        "question": "En MATLAB, ¿qué hace el operador barra invertida en `x = A \\ b`?",
        "options": [
          "Divide elemento a elemento b entre A",
          "Resuelve el sistema lineal A·x = b",
          "Calcula la transpuesta de A",
          "Multiplica A por b"
        ],
        "answerIndex": 1,
        "explanation": "En MATLAB, `A \\ b` (mldivide) resuelve eficientemente sistemas lineales A·x = b."
      },
      {
        "question": "En JavaScript de navegador, ¿qué API permite dibujar gráficas, vectores y curvas 2D en tiempo real dentro de `<canvas>`?",
        "options": [
          "localStorage",
          "CanvasRenderingContext2D (getContext('2d'))",
          "JSON.stringify",
          "navigator.clipboard"
        ],
        "answerIndex": 1,
        "explanation": "canvas.getContext('2d') expone métodos vectoriales (beginPath, moveTo, lineTo, arc, fillRect) para renderizar gráficos interactivos."
      }
    ]
  }
};
