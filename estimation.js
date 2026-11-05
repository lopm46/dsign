"use strict";

(() => {
  const app = document.getElementById("estimate-app");
  const raw = document.getElementById("estimate-data");
  if (!app || !raw) return;
  const data = JSON.parse(raw.textContent);
  const panels = [...app.querySelectorAll("[data-estimate-panel]")];
  const form = document.getElementById("estimate-form");
  const next = document.getElementById("estimate-next");
  const actions = document.getElementById("estimate-actions");
  const toolbar = document.getElementById("estimate-toolbar");
  const question = document.getElementById("estimate-question");
  const hint = document.getElementById("estimate-hint");
  const selection = document.getElementById("estimate-selection");
  const error = document.getElementById("estimate-error");
  const progress = [...app.querySelectorAll("[data-estimate-progress]")];
  const domainInputs = [...app.querySelectorAll('input[name="domains"]')];
  const serviceInputs = [...app.querySelectorAll('input[name="services"]')];
  const serviceChoices = new Map(serviceInputs.map(input => [input.value, input.closest("label")]));
  const serviceIndex = new Map(data.domains.flatMap(domain => domain.services.map(service => [service.id, { ...service, domain: domain.id }])));
  const stageKeys = ["domaines", "travaux", "budget", "delais", "coordonnees", "merci"];
  const headings = ["Votre projet concerne :", "Choisissez vos travaux :", "Quel est votre budget prévisionnel ?", "Dans quels délais souhaitez-vous réaliser vos travaux ?", "Vos coordonnées"];
  const hints = ["Choisissez un ou plusieurs domaines.", "Sélectionnez un ou plusieurs services pour votre projet.", "Sélectionnez une fourchette de budget.", "Choisissez le délai qui correspond à votre projet.", "Utilisez des coordonnées fictives pour prévisualiser la dernière étape."];
  const state = { step: 0, domains: [], services: [], budget: "", timeline: "", complete: false };
  const session = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  let countdown = null;
  const syncToolbarHeight = () => {
    document.documentElement.style.scrollPaddingTop = `${toolbar.offsetHeight + 24}px`;
  };
  new ResizeObserver(syncToolbarHeight).observe(toolbar);

  const budgetLabel = () => data.budgets.find(item => item.id === state.budget)?.label || "";
  const timelineLabel = () => data.timelines.find(item => item.id === state.timeline)?.label || "";
  const servicesForDomains = () => state.domains.flatMap(id => data.domains.find(domain => domain.id === id).services);
  const canReach = step => step === 0 || (state.domains.length > 0 && (step === 1 || (state.services.length > 0 && (step === 2 || (state.budget && (step === 3 || (state.timeline && (step === 4 || state.complete))))))));
  const safeStep = step => {
    let target = Math.max(0, Math.min(5, Number.isInteger(step) ? step : 0));
    while (!canReach(target)) target -= 1;
    return target;
  };
  const clearCountdown = () => { if (countdown !== null) clearInterval(countdown); countdown = null; };
  const clearError = () => { error.hidden = true; error.textContent = ""; };
  const showError = (text, panel) => {
    error.textContent = text;
    error.hidden = false;
    panel?.querySelector("input")?.focus({ preventScroll: true });
    error.scrollIntoView({ block: "start", behavior: "instant" });
  };

  function renderSummary(target) {
    const list = document.createElement("dl");
    const add = (title, content) => {
      const row = document.createElement("div"), dt = document.createElement("dt"), dd = document.createElement("dd");
      dt.textContent = title;
      if (typeof content === "string") dd.textContent = content;
      else dd.append(content);
      row.append(dt, dd); list.append(row);
    };
    add("Domaines", state.domains.map(id => data.domains.find(domain => domain.id === id).label).join(" · "));
    const details = document.createElement("details"), title = document.createElement("summary"), ul = document.createElement("ul");
    title.textContent = `${state.services.length} service${state.services.length > 1 ? "s" : ""} sélectionné${state.services.length > 1 ? "s" : ""}`;
    details.open = state.services.length <= 5;
    for (const id of state.services) { const li = document.createElement("li"); li.textContent = serviceIndex.get(id).label; ul.append(li); }
    details.append(title, ul); add("Travaux", details);
    add("Budget prévisionnel", budgetLabel()); add("Délai souhaité", timelineLabel());
    target.replaceChildren(list);
  }

  function refreshServices() {
    const available = new Set(servicesForDomains().map(service => service.id));
    state.services = state.services.filter(id => available.has(id));
    const fieldset = panels[1].querySelector("fieldset");
    for (const service of servicesForDomains()) fieldset.append(serviceChoices.get(service.id));
    for (const input of serviceInputs) {
      input.checked = state.services.includes(input.value);
      serviceChoices.get(input.value).hidden = !available.has(input.value);
    }
  }

  function updateSelection() {
    if (state.step === 0) {
      const n = state.domains.length;
      selection.textContent = n ? `${n} domaine${n > 1 ? "s" : ""} sélectionné${n > 1 ? "s" : ""}` : "";
      next.firstChild.textContent = `Voir tous les services (${servicesForDomains().length})`;
      next.disabled = n === 0;
    } else if (state.step === 1) {
      const n = state.services.length;
      selection.textContent = `${n} service${n > 1 ? "s" : ""} sélectionné${n > 1 ? "s" : ""}`;
    } else selection.textContent = "";
  }

  function render() {
    clearError();
    const step = state.step;
    panels.forEach((panel, index) => { panel.hidden = index !== step; });
    document.querySelector(".estimate-intro").hidden = step === 5;
    document.querySelector(".estimate-question").hidden = step === 5;
    toolbar.hidden = step === 5;
    progress.forEach((button, index) => {
      button.disabled = index > step;
      button.classList.toggle("is-complete", index < step);
      if (index === step) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
    if (step < 5) {
      question.textContent = headings[step]; hint.textContent = hints[step];
      document.getElementById("estimate-step-count").textContent = `Étape ${step + 1} sur 5`;
      actions.querySelector("[data-estimate-back]").hidden = step === 0;
      next.disabled = false;
      next.type = step === 4 ? "submit" : "button";
      next.firstChild.textContent = step === 4 ? "Recevoir mon estimation" : "Continuer";
      updateSelection();
    }
    if (step === 1) refreshServices();
    if (step === 4) {
      renderSummary(document.getElementById("estimate-summary"));
      form.elements.projectCategories.value = JSON.stringify(state.domains.map(id => data.domains.find(d => d.id === id).label));
      form.elements.projectServices.value = JSON.stringify(state.services.map(id => serviceIndex.get(id).value));
      form.elements.projectBudget.value = budgetLabel(); form.elements.projectTimeline.value = timelineLabel();
    }
    if (step === 5) { renderSummary(document.getElementById("estimate-final-summary")); startCountdown(); }
    syncToolbarHeight();
    document.title = step === 5 ? "Simulation terminée — D-SIGN" : `${headings[step]} — Estimation D-SIGN`;
  }

  function navigate(step, mode = "push") {
    clearCountdown();
    state.step = safeStep(step);
    const url = new URL(location.href); url.hash = stageKeys[state.step];
    history[`${mode}State`]({ dsignEstimation: session, step: state.step }, "", url);
    render();
    const focus = state.step === 5 ? document.getElementById("estimate-thanks-title") : question;
    focus.focus({ preventScroll: true });
    if (state.step === 5) window.scrollTo({ top: 0, behavior: "instant" });
    else window.scrollTo({ top: app.getBoundingClientRect().top + window.scrollY, behavior: "instant" });
  }

  function goBack() {
    if (state.step <= 0) return;
    history.back();
  }

  window.addEventListener("popstate", event => {
    if (event.state?.dsignEstimation !== session) return;
    navigate(event.state.step, "replace");
  });

  for (const input of domainInputs) input.addEventListener("change", () => {
    state.domains = input.checked ? [...state.domains, input.value] : state.domains.filter(id => id !== input.value);
    state.complete = false; refreshServices(); updateSelection(); clearError();
  });
  for (const input of serviceInputs) input.addEventListener("change", () => {
    state.services = input.checked ? [...state.services, input.value] : state.services.filter(id => id !== input.value);
    state.complete = false; updateSelection(); clearError();
  });
  for (const input of app.querySelectorAll('input[name="budget"], input[name="timeline"]')) input.addEventListener("change", () => {
    state[input.name] = input.value; state.complete = false; clearError();
  });
  for (const button of progress) button.addEventListener("click", () => { const target = Number(button.dataset.estimateProgress); if (target !== state.step) navigate(target); });
  for (const button of app.querySelectorAll("[data-estimate-edit]")) button.addEventListener("click", () => navigate(Number(button.dataset.estimateEdit)));
  for (const button of app.querySelectorAll("[data-estimate-back]")) button.addEventListener("click", goBack);
  next.addEventListener("click", event => {
    if (state.step === 4) return;
    event.preventDefault();
    const messages = ["Veuillez sélectionner au moins un domaine.", "Veuillez sélectionner au moins un service pour continuer.", "Veuillez sélectionner une fourchette de budget pour continuer.", "Veuillez sélectionner un délai pour la réalisation de vos travaux."];
    if (!canReach(state.step + 1)) { showError(messages[state.step], panels[state.step]); return; }
    navigate(state.step + 1);
  });

  function fieldError(input, message = "") {
    const error = document.getElementById(`${input.id}-error`);
    input.setAttribute("aria-invalid", String(Boolean(message)));
    error.textContent = message; error.hidden = !message;
  }
  const contactInputs = [...form.querySelectorAll("input[required]")];
  for (const input of contactInputs) input.addEventListener("input", () => { state.complete = false; fieldError(input); });
  function validateContact() {
    let first = null;
    for (const input of contactInputs) {
      const value = input.value.trim(); let message = "";
      if (!value) message = "Renseignez ce champ pour continuer.";
      else if (input.name === "email" && (input.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) message = "Indiquez une adresse email valide.";
      else if (input.name === "phone" && (!/^[+\d\s().-]+$/.test(value) || value.replace(/\D/g, "").length < 10 || value.replace(/\D/g, "").length > 15)) message = "Indiquez un numéro de téléphone valide.";
      else if (input.name === "postalCode" && !/^\d{5}$/.test(value)) message = "Indiquez un code postal à 5 chiffres.";
      fieldError(input, message);
      if (message && !first) first = input;
    }
    if (first) { first.focus({ preventScroll: true }); first.scrollIntoView({ block: "start", behavior: "instant" }); return false; }
    return true;
  }
  document.getElementById("estimate-fill-demo").addEventListener("click", () => {
    state.complete = false;
    const examples = { firstName: "Camille", lastName: "Exemple", email: "camille@example.com", phone: "06 00 00 00 00", address: "12 rue des Ateliers", postalCode: "80000", city: "Amiens" };
    for (const input of contactInputs) { input.value = examples[input.name]; fieldError(input); }
  });
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (state.step !== 4 || !canReach(4) || !validateContact()) return;
    // Demonstration only: no fetch, mail, storage, or Contact Form 7 submission.
    // The future WordPress adapter will submit the fields and project context here.
    state.complete = true;
    navigate(5);
  });

  function startCountdown() {
    let seconds = 10;
    document.getElementById("estimate-countdown").hidden = false;
    document.getElementById("estimate-pause").hidden = false;
    document.getElementById("estimate-seconds").textContent = String(seconds);
    countdown = setInterval(() => {
      seconds -= 1;
      document.getElementById("estimate-seconds").textContent = String(seconds);
      if (seconds === 0) { clearCountdown(); location.assign("index.html"); }
    }, 1000);
  }
  document.getElementById("estimate-pause").addEventListener("click", () => {
    clearCountdown(); document.getElementById("estimate-countdown").hidden = true;
    document.getElementById("estimate-pause").hidden = true;
  });
  document.getElementById("estimate-restart").addEventListener("click", () => {
    clearCountdown();
    Object.assign(state, { step: 0, domains: [], services: [], budget: "", timeline: "", complete: false });
    for (const input of [...domainInputs, ...serviceInputs, ...app.querySelectorAll('input[name="budget"], input[name="timeline"]')]) input.checked = false;
    form.reset(); for (const input of contactInputs) fieldError(input);
    navigate(0, "replace");
  });
  window.addEventListener("pagehide", clearCountdown);
  history.replaceState({ dsignEstimation: session, step: 0 }, "", location.href);
  refreshServices(); render(); app.hidden = false;
})();
