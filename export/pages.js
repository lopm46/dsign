"use strict";

(() => {
  const grid = document.getElementById("project-grid");
  const filters = document.querySelector(".project-filters");
  const dialog = document.getElementById("project-dialog");
  const rawProjects = document.getElementById("projects-data");

  if (grid && filters && rawProjects) {
    const projects = JSON.parse(rawProjects.textContent);
    const cards = [...grid.querySelectorAll("[data-project-category]")];
    const buttons = [...filters.querySelectorAll("[data-project-filter]")];
    const count = document.getElementById("project-count");
    const applyFilter = (key, updateUrl = true) => {
      const valid = buttons.some(button => button.dataset.projectFilter === key) ? key : "tous";
      buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.projectFilter === valid)));
      cards.forEach(card => { card.hidden = valid !== "tous" && card.dataset.projectCategory !== valid; });
      const total = cards.filter(card => !card.hidden).length;
      count.textContent = `${total} projet${total > 1 ? "s" : ""}`;
      if (updateUrl) {
        const url = new URL(location.href);
        if (valid === "tous") url.searchParams.delete("type");
        else url.searchParams.set("type", valid);
        history.replaceState(null, "", url);
      }
    };
    applyFilter(new URLSearchParams(location.search).get("type"), false);
    filters.hidden = false;
    buttons.forEach(button => button.addEventListener("click", () => applyFilter(button.dataset.projectFilter)));
    window.addEventListener("popstate", () => applyFilter(new URLSearchParams(location.search).get("type"), false));

    if (dialog && typeof dialog.showModal === "function") {
      const image = document.getElementById("project-dialog-image");
      const title = document.getElementById("project-dialog-title");
      const galleryCount = document.getElementById("project-gallery-count");
      const contact = document.getElementById("project-dialog-contact");
      let currentProject = null;
      let currentImage = 0;
      let opener = null;
      const showImage = index => {
        if (!currentProject) return;
        currentImage = (index + currentProject.images.length) % currentProject.images.length;
        image.src = currentProject.images[currentImage];
        image.alt = `${currentProject.title} — vue de conception ${currentImage + 1}`;
        galleryCount.textContent = `${currentImage + 1} / ${currentProject.images.length}`;
      };
      const openProject = (id, source) => {
        currentProject = projects.find(project => project.id === id);
        if (!currentProject) return;
        opener = source || document.getElementById(`projet-${id}`);
        if (opener?.hidden) applyFilter(currentProject.category);
        title.textContent = currentProject.title;
        contact.href = `index.html?projet=${currentProject.category === "agrandissement" ? "extension" : currentProject.category}#contact`;
        showImage(0);
        if (!dialog.open) dialog.showModal();
        document.body.classList.add("has-project-dialog");
      };
      cards.forEach(card => card.addEventListener("click", event => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        openProject(card.dataset.openProject, card);
      }));
      dialog.querySelector("[data-close-project]").addEventListener("click", () => dialog.close());
      dialog.querySelector("[data-project-previous]").addEventListener("click", () => showImage(currentImage - 1));
      dialog.querySelector("[data-project-next]").addEventListener("click", () => showImage(currentImage + 1));
      dialog.addEventListener("keydown", event => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          showImage(currentImage + (event.key === "ArrowRight" ? 1 : -1));
        }
      });
      dialog.addEventListener("click", event => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
      });
      dialog.addEventListener("close", () => {
        document.body.classList.remove("has-project-dialog");
        opener?.focus({ preventScroll: true });
      });
      const requestedProject = location.hash.match(/^#projet-(\d+)$/)?.[1];
      if (requestedProject) openProject(requestedProject);
    }
  }

  const rail = document.querySelector(".progress-container");
  const steps = [...document.querySelectorAll("[data-method-step]")];
  if (rail && steps.length) {
    const links = [...rail.querySelectorAll("[data-step-link]")];
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker = window.innerHeight * 0.36;
      const tops = steps.map(step => step.getBoundingClientRect().top);
      let active = 0;
      tops.forEach((top, index) => { if (top <= marker) active = index; });
      const nextTop = tops[active + 1];
      const fraction = nextTop === undefined ? 0 : Math.max(0, Math.min(1, (marker - tops[active]) / (nextTop - tops[active] || 1)));
      const progress = Math.max(0, Math.min(1, (active + fraction) / (steps.length - 1)));
      rail.style.setProperty("--method-progress", String(progress));
      const activeLink = links[active];
      rail.style.setProperty("--method-current-y", `${activeLink.offsetTop}px`);
      rail.style.setProperty("--method-row-height", `${activeLink.offsetHeight}px`);
      links.forEach((link, index) => {
        if (index === active) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
        link.classList.toggle("is-complete", index < active);
      });
      steps.forEach((step, index) => step.classList.toggle("is-active", index === active));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("load", schedule);
    document.fonts.ready.then(schedule);
    update();
  }
})();
