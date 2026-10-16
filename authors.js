(() => {
  "use strict";

  // Shared author directory for every .authors list on the homepage and publications page.
  // Edit a URL here once to update that author's links throughout both pages.
  // Use null when an author's homepage is unknown; their name remains plain text.
  const authorHomepages = {
    "Shenghao Yuan": "https://shenghaoyuan.github.io/",
    "Yazhou Tang": "https://www.tangda.me/",
    "Tianci Cao": "https://ziyefbk.github.io/",
    // These personal profiles are linked from https://trust2proj.github.io/.
    "Jun Liu": "https://github.com/LiuJun5817",
    "Jiayi Lu": "https://lujiayi1008.github.io/",
    "Zhuoruo Zhang": "https://dblp.org/pid/329/4775.html",
    "Rui Chang": "https://person.zju.edu.cn/en/0019220",
    "Jean-Pierre Talpin": "https://www.irisa.fr/prive/talpin/",
    "Frédéric Besson": "https://people.rennes.inria.fr/Frederic.Besson/",
    "Mingshuai Chen": "https://fiction-zju.github.io/author/mingshuai-chen/",
    "David Sanan": "https://davidsanan.github.io/",
    "Yongwang Zhao": "https://lvpgroup.github.io/",
    "Benjamin Lion": "https://benjaminlion.fr/",
    "Samuel Hym": "https://dblp.org/pid/45/1491",
    "Koen Zandberg": "https://bergzand.net/",
    "Emmanuel Baccelli": "https://www.emmanuelbaccelli.com/",
  };

  const names = Object.keys(authorHomepages)
    .filter((name) => authorHomepages[name])
    .sort((a, b) => b.length - a.length)
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  if (!names.length) return;
  const pattern = new RegExp(names.join("|"), "gu");
  const isWordCharacter = (character) => /[\p{L}\p{N}_]/u.test(character || "");

  function linkAuthors(root = document) {
    root.querySelectorAll(".authors").forEach((list) => {
      const walker = document.createTreeWalker(list, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          return node.parentElement.closest("a, script, style")
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
        },
      });
      // Collect first: inserting links while walking would visit the new text again.
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);

      nodes.forEach((node) => {
        const text = node.textContent;
        const fragment = document.createDocumentFragment();
        let cursor = 0;
        for (const match of text.matchAll(pattern)) {
          const start = match.index;
          const end = start + match[0].length;
          if (isWordCharacter(text[start - 1]) || isWordCharacter(text[end])) continue;
          fragment.append(document.createTextNode(text.slice(cursor, start)));
          const link = document.createElement("a");
          link.className = "author-link";
          link.href = authorHomepages[match[0]];
          link.textContent = match[0];
          fragment.append(link);
          cursor = end;
        }
        if (!cursor) return;
        fragment.append(document.createTextNode(text.slice(cursor)));
        node.replaceWith(fragment);
      });
    });
  }

  linkAuthors();
  document.addEventListener("publications:loaded", (event) => {
    linkAuthors(event.detail?.root || document);
  });
})();
