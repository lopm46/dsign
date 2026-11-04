"use strict";

(() => {
  const menu = document.getElementById("mobile-menu");
  const summary = menu?.querySelector("summary");

  const closeMenu = (returnFocus = false) => {
    if (!menu?.open) return;
    menu.open = false;
    if (returnFocus) summary?.focus();
  };

  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu?.open) {
      closeMenu(true);
    }
  });

  document.addEventListener("click", (event) => {
    if (menu?.open && !menu.contains(event.target)) closeMenu();
  });

  const desktop = window.matchMedia("(min-width: 901px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });

  const information = document.getElementById("informations");
  const openInformation = () => {
    if (window.location.hash === "#informations" && information) {
      information.open = true;
    }
  };

  document.querySelectorAll('a[href="#informations"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (information) information.open = true;
    });
  });
  window.addEventListener("hashchange", openInformation);
  openInformation();

  const tradeFilters = document.querySelector(".trade-filters");
  const tradeCatalogue = document.getElementById("trade-catalogue");
  if (tradeFilters && tradeCatalogue) {
    const filterButtons = [...tradeFilters.querySelectorAll("button[data-trade-filter]")];
    const categories = [...tradeCatalogue.querySelectorAll("[data-trade-category]")];
    const tradeStatus = document.getElementById("trade-status");
    const selectCategory = (button, announce = true) => {
      const selected = button.dataset.tradeFilter;
      filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
      categories.forEach((category) => {
        category.hidden = category.dataset.tradeCategory !== selected;
      });
      if (announce && tradeStatus) {
        const active = categories.find((category) => !category.hidden);
        const count = active?.querySelectorAll(".trade").length || 0;
        tradeStatus.textContent = `${button.textContent.trim()} : ${count} exemples de travaux affichés.`;
      }
    };
    selectCategory(filterButtons[0], false);
    tradeFilters.hidden = false;
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => selectCategory(button));
    });
    let lastProjectMessage = "";
    tradeCatalogue.querySelectorAll("a[data-project]").forEach((link) => {
      link.addEventListener("click", () => {
        const message = document.getElementById("contact-message");
        if (message && (!message.value.trim() || message.value === lastProjectMessage)) {
          lastProjectMessage = `Bonjour, je souhaite vous parler de mon projet : ${link.dataset.project}.`;
          message.value = lastProjectMessage;
          message.dispatchEvent(new Event("input", { bubbles: true }));
        }
      });
    });
  }

  const form = document.getElementById("contact-form");
  if (!form) return;

  const serviceLabels = { renovation: "de rénovation", extension: "d’extension", construction: "de construction" };
  const requestedService = new URLSearchParams(window.location.search).get("projet");
  const projectMessage = document.getElementById("contact-message");
  if (Object.hasOwn(serviceLabels, requestedService) && projectMessage && !projectMessage.value.trim()) {
    projectMessage.value = `Bonjour, je souhaite vous parler de mon projet ${serviceLabels[requestedService]}.`;
  }

  const fields = [...form.querySelectorAll("input:not([type=hidden]), textarea")];
  const errorSummary = document.getElementById("form-errors");
  const errorList = errorSummary.querySelector("ul");
  const status = document.getElementById("form-status");
  const submit = form.querySelector('button[type="submit"]');
  const submitLabel = submit.querySelector("span");
  const defaultLabel = submitLabel.textContent;
  let sending = false;

  // Without JavaScript, native validation and the original form action remain.
  form.noValidate = true;

  const fieldError = (field) => document.getElementById(`${field.id}-error`);
  const setFieldError = (field, message = "") => {
    const error = fieldError(field);
    error.textContent = message;
    error.hidden = !message;
    if (message) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
  };

  const renderErrors = () => {
    errorList.replaceChildren();
    fields.filter((field) => field.getAttribute("aria-invalid") === "true").forEach((field) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${field.id}`;
      link.textContent = fieldError(field).textContent;
      link.addEventListener("click", (event) => {
        event.preventDefault();
        field.focus();
      });
      item.append(link);
      errorList.append(item);
    });
    errorSummary.hidden = !errorList.childElementCount;
  };

  const validate = (field) => {
    const value = field.value.trim();
    if (field.required && !value) {
      return {
        "your-name": "Indiquez votre nom.",
        "your-email": "Indiquez votre adresse e-mail.",
        "your-subject": "Indiquez votre numéro de téléphone."
      }[field.name] || "Complétez ce champ.";
    }
    if (field.type === "email" && field.validity.typeMismatch) return "Indiquez une adresse e-mail valide.";
    if (field.type === "tel" && (!/^[+\d\s()./-]+$/.test(value) || value.replace(/\D/g, "").length < 6)) {
      return "Indiquez un numéro de téléphone valide.";
    }
    if (field.maxLength > 0 && field.value.length > field.maxLength) {
      return `Limitez ce champ à ${field.maxLength} caractères.`;
    }
    return "";
  };

  const setStatus = (message = "", state = "") => {
    status.textContent = message;
    status.dataset.state = state;
  };

  fields.forEach((field) => {
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") {
        setFieldError(field, validate(field));
        renderErrors();
      }
      if (!sending) setStatus();
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;
    setStatus();
    fields.forEach((field) => setFieldError(field, validate(field)));
    renderErrors();
    if (!errorSummary.hidden) {
      errorSummary.focus();
      return;
    }

    sending = true;
    submit.disabled = true;
    submitLabel.textContent = "Envoi en cours…";
    form.setAttribute("aria-busy", "true");
    setStatus("Votre demande est en cours d’envoi.");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(form.dataset.contactEndpoint, {
        method: "POST",
        credentials: "omit",
        headers: { Accept: "application/json" },
        body: new FormData(form),
        signal: controller.signal
      });
      if (!response.ok) throw new Error("Contact service unavailable");
      const result = await response.json();

      if (result.status === "mail_sent") {
        setStatus("Votre demande a bien été transmise à D-SIGN. Merci de nous avoir présenté votre projet.", "success");
      } else if (result.status === "validation_failed") {
        const invalidFields = Array.isArray(result.invalid_fields) ? result.invalid_fields : [];
        invalidFields.forEach((invalid) => {
          const field = fields.find((item) => item.name === invalid.field);
          if (field) setFieldError(field, typeof invalid.message === "string" ? invalid.message : "Vérifiez ce champ.");
        });
        renderErrors();
        if (!errorSummary.hidden) {
          setStatus();
          errorSummary.focus();
        } else {
          setStatus("La demande n’a pas pu être validée. Vérifiez vos informations et réessayez.", "error");
        }
      } else {
        setStatus("Votre demande n’a pas pu être envoyée. Réessayez ou contactez-nous par e-mail ou par téléphone.", "error");
      }
    } catch {
      setStatus("Nous n’avons pas pu confirmer l’envoi. Vos informations sont conservées : vous pouvez réessayer ou nous contacter par e-mail ou par téléphone.", "error");
    } finally {
      window.clearTimeout(timeout);
      sending = false;
      submit.disabled = false;
      submitLabel.textContent = defaultLabel;
      form.removeAttribute("aria-busy");
    }
  });
})();
