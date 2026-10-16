# Shenghao Yuan's personal website

A responsive, static academic website inspired by the sidebar and navigation
layout of [Academic Pages](https://academicpages.github.io/). This is a custom
HTML/CSS implementation, not an installation of its Jekyll template. There is no
package installation or build step, and it retains the existing GitHub Pages
hosting setup.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Introduction, latest 10 news items, research overview, and featured publications |
| `news.html` | Complete news list, rendered from shared data |
| `research.html` | Research interests and current research directions |
| `publications.html` | Selected papers by year, PDFs, slides, and follow-up notes |
| `projects.html` | Research project directory, Linux patches, and Solana contributions |
| `projects/solana-jit-verification.html` | Solana eBPF JIT verification project, overview, and related publications |
| `projects/solana-riscv-jit.html` | Solana RISC-V JIT project, overview, source code, and related publication |
| `photos.html` | Through the years: photos grouped by year |
| `about.html` | Work, education, contact details, and scientific integrity |
| `style.css` | Shared layout and responsive styles |
| `auto.js` | Mobile navigation and compatibility with old homepage anchors |
| `publications.js` | Publication filtering, expandable details, and BibTeX copy buttons |
| `publications-data.js` | Single source of all publication content and homepage selection |
| `news-data.js` | Single source of all news entries, newest first |
| `content-renderer.js` | Renders full lists and homepage selections from shared data |
| `authors.js` | Shared mapping from author names to personal homepage URLs |

## Preview locally

From the repository directory, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://localhost:8000>, or open `index.html` directly in a browser. Both
HTTP and `file://` previews display the three selected papers and first 10 news
items. Shared data is loaded with ordinary local scripts, without fetching
another HTML page or requiring a build. JavaScript must be enabled to render
these lists. Navigation and the other static page content remain available
without JavaScript.

## Update content

Maintain news only in the `window.siteNews` array in `news-data.js`. Put the
newest entry first. `news.html` displays all entries, and the homepage displays
the first 10 in the same order (or all entries if fewer than 10). No HTML page
needs editing when news changes. Add a new object at the top of the array:

```js
{
  id: "news-unique-slug",
  date: "2026-10",
  label: "Oct 2026",
  html: '<p>Your update, with <a href="projects.html">optional links</a>.</p>'
},
```

Use a unique ID and the date precision you know: `YYYY`, `YYYY-MM`, or
`YYYY-MM-DD`. The initial 12 entries are drawn from the existing publications,
projects, and career history; no acceptance dates were inferred. Both views
preserve dates, text formatting, and links. An empty array displays “No news yet.”

Maintain publications only in `window.sitePublications.papers` in
`publications-data.js`. To add a paper, copy an existing object, use a unique
`id`, set its `year`, and update the title, authors, venue, resource links,
thumbnail, and details. Put PDFs in `publications/` and previews in
`img/publications/`. The full page groups papers by year automatically.

To choose the homepage papers, set `featured` to `1`, `2`, and `3` on the three
chosen objects; use `null` on the others. Positive ranks are sorted in ascending
order and the homepage displays the first three. For example:

```js
id: "oopsla-2026",
year: 2026,
featured: 1,
```

The selected papers remain OOPSLA 2026, OOPSLA 2025, and CAV 2024. Both pages
render the same title, authors, venue, preview, links, abstract, BibTeX, and
follow-up notes from the same object. HTML fragments in the data preserve author
emphasis and links. In JavaScript strings, write `\\` for a literal BibTeX
backslash, such as `Fr{\\'e}d{\\'e}ric`.

Do not maintain paper or news entries inside `index.html`, `publications.html`,
or `news.html`. They contain display containers only. Keep script order as data
files → `content-renderer.js` → `authors.js` → `publications.js`, so author links
and disclosure/copy controls initialize after the shared content is rendered.

Author homepage links are maintained in the `authorHomepages` mapping in
`authors.js`. Add or update an author's exact display name and URL there; all
matching names in `.authors` lists on the homepage and publications page become
links automatically. Existing links, author order, bold names, and contribution
markers are preserved. Use `null` for an unknown homepage to keep that name as
plain text.
The directory uses verified personal or institutional pages. Jun Liu and
Zhuoruo Zhang use the GitHub profiles linked from the
[TRust² project member list](https://trust2proj.github.io/).

Publication entries follow the layout of
[al-folio's publications page](https://alshedivat.github.io/al-folio/publications/):
year groups, venue badges, PDF first-page previews, author emphasis, and resource
buttons. Abstracts are transcribed from the local PDFs. The `Abstract`, `BibTeX`,
and `Follow-up` controls use native details elements enhanced by `publications.js`.
Each paper has a `Code` link to its GitHub/GitLab repository, using the paper's
artifact branch where available. The homepage highlights include the same Code
links and BibTeX entries. BibTeX is collapsed by default; open it and select
`Copy` to copy the entry for a LaTeX bibliography. A successful copy displays
`Copied!`; if browser permissions prevent copying, the entry is selected for
manual copying.
Filtering searches titles, authors, venues, and years. A link to a filtered-out
paper resets the filter so the linked paper remains reachable.

Update abstracts and BibTeX in each paper's `details` array in
`publications-data.js`; both views update together. Previews are rendered from
the first page of each existing PDF. The historical `publications/papers.bib`
file is retained for existing URLs and is not used to render either page.
The site remains buildless.

Photos are maintained in `photos.html`, grouped by year with the latest first.
The original Through the years photos and their credits are retained alongside
the photos in `img/2021/` and `img/2026/`. Each photo links to its original file.
To add photos, put the files in `img/<year>/`, add figures to the matching year
section, and update the year navigation if necessary. Use descriptive alt text
and retain photo credits. Encode spaces in image URLs as `%20`.

Research projects have separate detail pages under `projects/`; `projects.html`
contains linked summaries and the existing open-source contributions. Update
each project's description and overview on its detail page. The RISC-V project
uses `projects/sbpf_jit.png`, while the verification project uses
`projects/solana_jit_rust_overview.png`. Both diagrams link to the full image.

The header, profile sidebar, and footer are static markup shared by convention:
when changing navigation or profile details, update all seven top-level HTML pages
and both project detail pages. Keep `aria-current="page"` on the current page's
navigation link; project detail pages mark the Projects link with
`aria-current="location"`. Nested project pages use `../` for shared assets and
top-level pages. All pages use the same CSS and navigation script.

Original PDF and image URLs are retained. The old homepage anchors `#education`,
`#work`, `#research`, `#project`, `#publication`, and `#photos` redirect to the corresponding
pages when JavaScript is enabled. The pre-existing Google Analytics, Busuanzi,
and ClustrMaps integrations are retained; ClustrMaps is under the homepage's
expandable visitor map.

Publish using the repository's existing GitHub Pages workflow after committing
and pushing the changes. No separate hosting service is required.
