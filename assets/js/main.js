/**
 * Lógica principal de interfaz: navegación, scroll, buscador de materias y filtros de temas.
 */
(function () {
  "use strict";

  const header = document.getElementById("site-header");
  const scrollTopBtn = document.getElementById("scroll-top");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  // 1. Sticky header & scroll-to-top button
  function handleScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (header) {
      header.classList.toggle("scrolled", y > 24);
    }
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle("visible", y > 360);
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile menu toggle & dropdown support
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (!link.dataset.dropdownTrigger && navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  document.querySelectorAll("[data-dropdown-trigger]").forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      if (window.innerWidth <= 960) {
        event.preventDefault();
        const parent = trigger.closest(".nav-dropdown");
        if (parent) {
          parent.classList.toggle("open");
        }
      }
    });
  });

  // 3. Renderizado y filtrado del catálogo de materias en index.html
  const grid = document.getElementById("subjects-grid");
  const searchInput = document.getElementById("subject-search");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const emptyState = document.getElementById("subjects-empty");

  if (grid && window.ASESORIAS_DATA) {
    let activeCategory = "all";
    let searchTerm = "";

    function renderSubjects() {
      const normalized = searchTerm.trim().toLowerCase();
      const filtered = window.ASESORIAS_DATA.subjects.filter(function (subj) {
        const matchesCat = activeCategory === "all" || subj.category === activeCategory;
        if (!matchesCat) return false;
        if (!normalized) return true;
        const haystack = [
          subj.title,
          subj.categoryLabel,
          subj.summary,
          subj.topics.join(" ")
        ].join(" ").toLowerCase();
        return haystack.includes(normalized);
      });

      grid.innerHTML = "";
      if (emptyState) {
        emptyState.style.display = filtered.length === 0 ? "block" : "none";
      }

      filtered.forEach(function (subj) {
        const card = document.createElement("a");
        card.href = subj.url;
        card.className = "subject-card";

        const resourceLabel = subj.resourcesCount > 0
          ? subj.resourcesCount + " documentos en PDF"
          : "Teoría + laboratorio interactivo";

        const tagsHtml = subj.topics.slice(0, 4).map(function (topic) {
          return '<span class="topic-chip">' + escapeHtml(topic) + "</span>";
        }).join("");

        card.innerHTML =
          '<div class="subject-card-head">' +
            '<img src="' + escapeHtml(subj.icon) + '" alt="' + escapeHtml(subj.title) + '" loading="lazy">' +
            '<div>' +
              '<span class="subject-cat">' + escapeHtml(subj.categoryLabel) + "</span>" +
              "<h3>" + escapeHtml(subj.title) + "</h3>" +
            "</div>" +
          "</div>" +
          "<p>" + escapeHtml(subj.summary) + "</p>" +
          '<div class="subject-tags">' + tagsHtml + "</div>" +
          '<div class="subject-card-foot">' +
            "<span>" + escapeHtml(resourceLabel) + "</span>" +
            "<span>Estudiar tema →</span>" +
          "</div>";

        grid.appendChild(card);
      });
    }

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        activeCategory = btn.dataset.category || "all";
        renderSubjects();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        searchTerm = e.target.value;
        renderSubjects();
      });
    }

    renderSubjects();
  }

  // 4. Filtro rápido de temas dentro de páginas de materia individuales
  const topicFilterInput = document.getElementById("topic-search");
  if (topicFilterInput) {
    const items = document.querySelectorAll(".topic-item");
    topicFilterInput.addEventListener("input", function (e) {
      const q = e.target.value.trim().toLowerCase();
      items.forEach(function (item) {
        const txt = item.textContent.toLowerCase();
        item.style.display = txt.includes(q) ? "flex" : "none";
      });
    });
  }

  // 5. Año dinámico en footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
