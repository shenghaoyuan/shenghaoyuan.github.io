(() => {
  "use strict";

  function initializePublications() {
    const publications = Array.from(document.querySelectorAll(".publication"));
    if (!publications.length) return;
    if (document.documentElement.hasAttribute("data-publications-enhanced")) return;
    document.documentElement.setAttribute("data-publications-enhanced", "");

    async function copyText(text) {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          return;
        } catch {
          // Local files and browser permissions may require the older copy API.
        }
      }

      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.readOnly = true;
      textarea.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0;";
      document.body.append(textarea);
      try {
        textarea.focus({ preventScroll: true });
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        if (!document.execCommand("copy")) throw new Error("Copy is unavailable");
      } finally {
        textarea.remove();
      }
    }

    function addBibtexCopy(detail, title) {
      const panel = detail.querySelector(".paper-panel");
      const code = panel?.querySelector("pre > code");
      if (!code || panel.querySelector(".copy-bibtex")) return;

      const toolbar = document.createElement("div");
      toolbar.className = "bibtex-toolbar";
      const label = document.createElement("span");
      label.textContent = "BibTeX";
      const copyButton = document.createElement("button");
      copyButton.type = "button";
      copyButton.className = "button-link copy-bibtex";
      copyButton.textContent = "Copy";
      copyButton.setAttribute("aria-label", title ? `Copy BibTeX: ${title}` : "Copy BibTeX");
      const status = document.createElement("span");
      status.className = "bibtex-copy-status";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      toolbar.append(label, copyButton);
      code.parentElement.before(toolbar, status);

      let resetTimer;
      copyButton.addEventListener("click", async () => {
        window.clearTimeout(resetTimer);
        copyButton.disabled = true;
        copyButton.textContent = "Copying…";
        status.textContent = "";
        try {
          await copyText(code.textContent.trim());
          copyButton.disabled = false;
          copyButton.textContent = "Copied!";
          status.textContent = "BibTeX copied to clipboard.";
          copyButton.focus({ preventScroll: true });
          resetTimer = window.setTimeout(() => {
            copyButton.textContent = "Copy";
            status.textContent = "";
          }, 2000);
        } catch {
          copyButton.disabled = false;
          copyButton.textContent = "Copy";
          status.textContent = "Copy unavailable. Select and copy the BibTeX below.";
          const pre = code.parentElement;
          pre.tabIndex = 0;
          pre.focus({ preventScroll: true });
          const selection = window.getSelection();
          const range = document.createRange();
          range.selectNodeContents(code);
          selection?.removeAllRanges();
          selection?.addRange(range);
        }
      });
    }

    publications.forEach((publication) => {
      const links = publication.querySelector(".paper-links");
      if (!links) return;

      publication.querySelectorAll("details.paper-detail").forEach((detail) => {
        const summary = detail.querySelector("summary");
        if (!summary || !detail.id || detail.classList.contains("is-enhanced")) return;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "button-link paper-toggle";
        button.textContent = summary.textContent.trim();
        button.setAttribute("aria-controls", detail.id);
        button.setAttribute("aria-expanded", String(detail.open));
        const title = publication.querySelector("h3")?.textContent.trim();
        if (title) button.setAttribute("aria-label", `${button.textContent}: ${title}`);
        addBibtexCopy(detail, title);

        button.addEventListener("click", () => {
          detail.open = !detail.open;
          button.setAttribute("aria-expanded", String(detail.open));
        });
        detail.addEventListener("toggle", () => {
          button.setAttribute("aria-expanded", String(detail.open));
        });

        links.append(button);
        summary.hidden = true;
        detail.classList.add("is-enhanced");
      });
    });

    const search = document.querySelector(".publication-search");
    const input = document.getElementById("publication-filter");
    const count = document.getElementById("publication-result-count");
    const clear = document.getElementById("publication-clear");
    const empty = document.getElementById("publication-empty");
    const years = Array.from(document.querySelectorAll(".publication-year"));
    const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const searchablePublications = publications.map((publication) => {
      const year = publication.closest(".publication-year")?.querySelector("h2")?.textContent || "";
      const metadata = publication.dataset.search || Array.from(
        publication.querySelectorAll("h3, .authors, .venue, .venue-badge")
      ).map((element) => element.textContent).join(" ");
      return { element: publication, text: normalize(`${year} ${metadata}`) };
    });

    function filterPublications() {
      const tokens = normalize(input?.value || "").trim().split(/\s+/).filter(Boolean);
      let visible = 0;

      searchablePublications.forEach(({ element, text }) => {
        element.hidden = !tokens.every((token) => text.includes(token));
        if (!element.hidden) visible += 1;
      });
      years.forEach((year) => {
        year.hidden = !Array.from(year.querySelectorAll(".publication")).some((publication) => !publication.hidden);
      });

      if (count) count.textContent = `${visible} of ${publications.length} publications`;
      if (empty) empty.hidden = visible !== 0;
      if (clear) clear.disabled = !input?.value;
    }

    function resetFilter() {
      if (input) input.value = "";
      filterPublications();
    }

    if (search && input) {
      input.addEventListener("input", filterPublications);
      input.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        event.preventDefault();
        resetFilter();
      });
      clear?.addEventListener("click", () => {
        resetFilter();
        input.focus();
      });
      search.addEventListener("submit", (event) => event.preventDefault());
      filterPublications();
      search.hidden = false;
    }

    function revealHashTarget() {
      if (!window.location.hash) return;
      let id;
      try {
        id = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        return;
      }
      const target = document.getElementById(id);
      const publication = target?.closest(".publication");
      if (!publication) return;

      if (publication.hidden || publication.closest(".publication-year")?.hidden) resetFilter();

      let ancestor = target;
      while (ancestor && publication.contains(ancestor)) {
        if (ancestor.tagName === "DETAILS") ancestor.open = true;
        ancestor = ancestor.parentElement;
      }
      window.requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }

    window.addEventListener("hashchange", revealHashTarget);
    document.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target.closest("a[href]");
      if (!link || link.target || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin === window.location.origin &&
          destination.pathname === window.location.pathname &&
          destination.search === window.location.search &&
          destination.hash === window.location.hash) {
        revealHashTarget();
      }
    });
    revealHashTarget();
  }

  initializePublications();
  document.addEventListener("publications:loaded", initializePublications);
})();
