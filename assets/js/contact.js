/**
 * Generador interactivo de solicitud de asesoría para enviar por Facebook Messenger.
 */
(function () {
  "use strict";

  const form = document.getElementById("advisory-form");
  if (!form) return;

  const subjectSelect = document.getElementById("materia");
  const levelSelect = document.getElementById("nivel");
  const modalitySelect = document.getElementById("modalidad");
  const dateInput = document.getElementById("fecha");
  const detailsInput = document.getElementById("detalle");
  const previewBox = document.getElementById("message-preview");
  const previewText = document.getElementById("preview-text");
  const copyBtn = document.getElementById("copy-message-btn");
  const copyFeedback = document.getElementById("copy-feedback");

  // Poblar selector de materias desde data-materias.js
  if (subjectSelect && window.ASESORIAS_DATA) {
    window.ASESORIAS_DATA.subjects.forEach(function (subj) {
      const opt = document.createElement("option");
      opt.value = subj.title;
      opt.textContent = subj.title;
      opt.dataset.id = subj.id;
      subjectSelect.appendChild(opt);
    });

    const otherOpt = document.createElement("option");
    otherOpt.value = "Otra materia / Proyecto específico";
    otherOpt.textContent = "Otra materia / Proyecto específico";
    subjectSelect.appendChild(otherOpt);

    // Preseleccionar si viene ?materia=... en la URL
    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("materia");
    if (requestedId) {
      const match = Array.from(subjectSelect.options).find(function (o) {
        return o.dataset.id === requestedId;
      });
      if (match) {
        subjectSelect.value = match.value;
      }
    }
  }

  function buildMessage() {
    const materia = subjectSelect ? subjectSelect.value : "";
    const nivel = levelSelect ? levelSelect.value : "";
    const modalidad = modalitySelect ? modalitySelect.value : "";
    const fecha = dateInput && dateInput.value ? dateInput.value : "Lo antes posible";
    const detalle = detailsInput && detailsInput.value.trim()
      ? detailsInput.value.trim()
      : "Requiero información de disponibilidad y tarifas.";

    return [
      "Hola Asesorías en Ingeniería, necesito ayuda académica:",
      "• Materia / Área: " + materia,
      "• Nivel: " + nivel,
      "• Modalidad preferida: " + modalidad,
      "• Fecha límite o examen: " + fecha,
      "• Detalle / Temas: " + detalle
    ].join("\n");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const message = buildMessage();
    if (previewText && previewBox) {
      previewText.textContent = message;
      previewBox.classList.add("visible");
      previewBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  if (copyBtn && previewText) {
    copyBtn.addEventListener("click", function () {
      const text = previewText.textContent;
      if (!text) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showCopied).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }

      function fallbackCopy() {
        const temp = document.createElement("textarea");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        showCopied();
      }

      function showCopied() {
        if (copyFeedback) {
          copyFeedback.textContent = "¡Mensaje copiado! Ahora pégalo en nuestro chat de Facebook.";
          setTimeout(function () {
            copyFeedback.textContent = "";
          }, 4500);
        }
      }
    });
  }
})();
