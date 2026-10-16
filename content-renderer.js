(() => {
  "use strict";

  // Classic scripts also work in file:// previews, without fetching another page.
  const scriptURL = document.currentScript?.src || document.baseURI;
  const rootURL = new URL("./", scriptURL);

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function canonicalURL(page, id) {
    const url = new URL(page, rootURL);
    if (id) url.hash = id;
    return url.href;
  }

  function prepareContent(root, page, prefix = "") {
    const nodes = [root, ...root.querySelectorAll("*")];
    const ids = new Map();

    if (prefix) {
      nodes.forEach((node) => {
        if (!node.id) return;
        ids.set(node.id, `${prefix}${node.id}`);
        node.id = ids.get(node.id);
      });
    }

    nodes.forEach((node) => {
      ["aria-controls", "aria-labelledby", "aria-describedby", "for"].forEach((attribute) => {
        if (!node.hasAttribute(attribute)) return;
        const references = node.getAttribute(attribute).trim().split(/\s+/);
        node.setAttribute(attribute, references.map((id) => ids.get(id) || id).join(" "));
      });

      ["href", "src"].forEach((attribute) => {
        if (!node.hasAttribute(attribute)) return;
        const value = node.getAttribute(attribute);
        // Content links always refer to the complete page, even on the homepage.
        const base = attribute === "href" && value.startsWith("#")
          ? canonicalURL(page)
          : rootURL;
        node.setAttribute(attribute, new URL(value, base).href);
      });

      if (node.tagName === "DETAILS") node.removeAttribute("open");
    });

    return root;
  }

  function createPaper(paper, featured) {
    const article = element("article", featured ? "publication publication--featured" : "publication");
    article.id = paper.id;
    if (Number(paper.featured) > 0) article.dataset.featured = String(paper.featured);

    const preview = element("div", "paper-preview");
    preview.append(element("span", "venue-badge", paper.badge));
    if (paper.thumbnail) {
      const thumbnail = element("a", "paper-thumbnail");
      thumbnail.href = paper.thumbnail.href || paper.links.find((link) => link.label === "PDF")?.href || paper.titleHref;
      thumbnail.setAttribute("aria-label", paper.thumbnail.ariaLabel || `Read PDF: ${paper.title}`);
      const image = element("img");
      image.setAttribute("src", paper.thumbnail.src);
      image.alt = paper.thumbnail.alt;
      if (paper.thumbnail.width) image.width = paper.thumbnail.width;
      if (paper.thumbnail.height) image.height = paper.thumbnail.height;
      image.loading = "lazy";
      image.decoding = "async";
      thumbnail.append(image);
      preview.append(thumbnail);
    }

    const body = element("div", "paper-body");
    const heading = element("h3");
    const title = element("a", "", paper.title);
    title.href = featured ? canonicalURL("publications.html", paper.id) : paper.titleHref;
    heading.append(title);
    const authors = element("p", "authors");
    authors.innerHTML = paper.authorsHtml;
    const venue = element("p", "venue");
    venue.innerHTML = paper.venueHtml;
    const links = element("div", "paper-links");
    paper.links.forEach((link) => {
      const anchor = element("a", link.className || "button-link", link.label);
      anchor.setAttribute("href", link.href);
      if (link.ariaLabel) anchor.setAttribute("aria-label", link.ariaLabel);
      links.append(anchor);
    });
    if (featured) {
      const detailsLink = element("a", "button-link", "Details");
      detailsLink.href = canonicalURL("publications.html", paper.id);
      links.append(detailsLink);
    }
    body.append(heading, authors, venue, links);

    paper.details.forEach((item) => {
      const detail = element("details", "paper-detail");
      detail.id = item.id;
      const summary = element("summary", "", item.label);
      const panel = element("div", "paper-panel");
      panel.innerHTML = item.html;
      detail.append(summary, panel);
      body.append(detail);
    });

    article.append(preview, body);
    return prepareContent(article, "publications.html", featured ? "featured-" : "");
  }

  function renderPublications() {
    const data = window.sitePublications;
    if (!data || !Array.isArray(data.papers)) return;

    document.querySelectorAll("[data-publication-legend]").forEach((legend) => {
      legend.innerHTML = data.legendHtml || "";
      prepareContent(legend, "publications.html");
    });

    ["publication-list", "selected-publications"].forEach((id) => {
      const root = document.getElementById(id);
      if (!root || root.dataset.publicationsRendered) return;
      const featured = id === "selected-publications";
      const papers = featured
        ? data.papers.filter((paper) => Number.isFinite(Number(paper.featured)) && Number(paper.featured) > 0)
          .sort((first, second) => Number(first.featured) - Number(second.featured)).slice(0, 3)
        : data.papers;
      const fragment = document.createDocumentFragment();

      if (featured) {
        papers.forEach((paper) => fragment.append(createPaper(paper, true)));
        if (papers.length && data.legendHtml) {
          const legend = element("p", "publication-legend");
          legend.innerHTML = data.legendHtml;
          fragment.append(prepareContent(legend, "publications.html", "featured-"));
        }
      } else {
        const years = [...new Set(papers.map((paper) => Number(paper.year)))].sort((first, second) => second - first);
        years.forEach((year) => {
          const section = element("section", "publication-year");
          const heading = element("h2", "", String(year));
          heading.id = `year-${year}`;
          section.setAttribute("aria-labelledby", heading.id);
          section.append(heading);
          papers.filter((paper) => Number(paper.year) === year)
            .forEach((paper) => section.append(createPaper(paper, false)));
          fragment.append(section);
        });
      }

      if (!papers.length) fragment.append(element("p", "section-intro", "No publications yet."));
      root.replaceChildren(fragment);
      root.dataset.publicationsRendered = "true";
      root.dataset.publicationsLoadState = papers.length ? "loaded" : "empty";
      root.removeAttribute("aria-busy");
      document.dispatchEvent(new CustomEvent("publications:loaded", { detail: { root } }));
    });
  }

  function createNewsItem(item, compact) {
    const row = element("li", "news-item");
    if (item.id) row.id = item.id;
    const date = element("time", "news-date", item.label);
    date.setAttribute("datetime", item.date);
    const content = element("div", "news-content");
    content.innerHTML = item.html;
    row.append(date, content);
    return prepareContent(row, "news.html", compact ? "latest-" : "");
  }

  function renderNews() {
    if (!Array.isArray(window.siteNews)) return;
    ["news-list", "latest-news"].forEach((id) => {
      const root = document.getElementById(id);
      if (!root || root.dataset.newsRendered) return;
      const compact = id === "latest-news";
      const items = compact ? window.siteNews.slice(0, 10) : window.siteNews;
      const fragment = document.createDocumentFragment();
      const list = compact ? element("ol", "news-list news-list--compact") : fragment;
      if (compact) list.setAttribute("role", "list");
      items.forEach((item) => list.append(createNewsItem(item, compact)));

      if (compact) {
        fragment.append(items.length ? list : element("p", "section-intro", "No news yet."));
      }
      root.replaceChildren(fragment);
      root.dataset.newsRendered = "true";
      root.dataset.newsLoadState = items.length ? "loaded" : "empty";
      root.removeAttribute("aria-busy");
      if (!compact && root.nextElementSibling?.matches(".news-empty")) {
        root.nextElementSibling.hidden = items.length > 0;
      }
    });
  }

  renderPublications();
  renderNews();
})();
