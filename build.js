// build.js
// Generates a page for every name, an origin guide page for each origin,
// sitemap.xml and robots.txt. Run it after every change to the name list:
//
//   node build.js
//
// Requires Node.js 18 or newer. Commit the generated folders and files.

const fs = require("fs");
const path = require("path");

// Set this to your live site address (no trailing slash).
const BASE = "https://sidehustleofficial.github.io/baby-names-site";

const root = __dirname;
const src = fs.readFileSync(path.join(root, "script.js"), "utf8");
const NAMES = new Function(src.slice(0, src.indexOf("// APP LOGIC")) + "\nreturn NAMES;")();

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const ORIGIN_INTROS = {
  Sanskrit: "Sanskrit is the classical language of ancient India. Many Hindu names come from it, often from deities, scriptures, and words for nature and virtue.",
  Arabic: "Arabic is the language of the Quran and of many Muslim names. Names often come from prophets, religious figures, virtues, or descriptive words.",
  Persian: "Persian names are common across South Asia and the Middle East. Many describe beauty, nature, or qualities.",
  Hebrew: "Hebrew names come from the Old Testament and are widely used in Jewish and Christian families.",
  Punjabi: "Punjabi names are common in Punjab and among Sikh families. Many Sikh names combine elements like 'Gur' (Guru) or 'Preet' (love).",
  Greek: "Greek names come from ancient Greek and spread widely through early Christianity.",
  Latin: "Latin names come from the Roman language and are common in Western and Christian naming traditions."
};

function layout(title, description, body, depth) {
  const prefix = depth === 0 ? "" : "../";
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="stylesheet" href="${prefix}style.css">
  <link rel="stylesheet" href="${prefix}extra.css">
</head>
<body>
${body}
  <footer>
    <p>Meanings are commonly cited traditional interpretations, shared for cultural interest. They vary by tradition and region.</p>
  </footer>
</body>
</html>
`;
}

function namePage(item) {
  const s = slug(item.name);
  const url = `${BASE}/names/${s}.html`;
  const related = NAMES.filter((n) => n !== item && n.origin === item.origin && n.gender === item.gender).slice(0, 8);
  const shareText = encodeURIComponent(`${item.name} means "${item.meaning}" ${url}`);

  const body = `
<main class="detail">
  <a class="back" href="../index.html">← All names</a>
  <h1>${esc(item.name)}</h1>
  <p class="tags">${esc(item.gender)} · ${esc(item.origin)}</p>
  ${item.pronunciation ? `<p class="pron">Pronounced: ${esc(item.pronunciation)}</p>` : ""}
  <p class="meaning">${esc(item.meaning)}</p>
  ${item.sources ? `<p class="sources">Sources: ${esc(item.sources)}</p>` : ""}

  <div class="share-row">
    <a href="https://wa.me/?text=${shareText}" target="_blank" rel="noopener">Share on WhatsApp</a>
  </div>

  ${related.length ? `<h2>More ${esc(item.origin)} ${esc(item.gender)} names</h2>
  <ul>${related.map((r) => `<li><a href="${slug(r.name)}.html">${esc(r.name)}</a></li>`).join("")}</ul>` : ""}
</main>`;

  return layout(
    `${item.name} meaning and origin | Indian Baby Names`,
    `${item.name} is a ${item.gender} name of ${item.origin} origin meaning "${item.meaning}".`,
    body,
    1
  );
}

function originPage(origin, list) {
  const intro = ORIGIN_INTROS[origin] || `${origin} names. Meanings are commonly cited traditional interpretations.`;
  const items = list
    .map((n) => `<li><a href="../names/${slug(n.name)}.html">${esc(n.name)}</a> <span>${esc(n.meaning)}</span></li>`)
    .join("\n");

  const body = `
<main class="detail">
  <a class="back" href="../index.html">← All names</a>
  <h1>${esc(origin)} names</h1>
  <p class="meaning">${esc(intro)}</p>
  <h2>${list.length} names</h2>
  <ul class="origin-list">
${items}
  </ul>
</main>`;

  return layout(
    `${origin} baby names and meanings | Indian Baby Names`,
    `Browse ${list.length} ${origin} baby names with meanings.`,
    body,
    1
  );
}

function main() {
  fs.mkdirSync(path.join(root, "names"), { recursive: true });
  fs.mkdirSync(path.join(root, "origins"), { recursive: true });

  NAMES.forEach((item) => {
    fs.writeFileSync(path.join(root, "names", `${slug(item.name)}.html`), namePage(item));
  });

  const byOrigin = {};
  NAMES.forEach((n) => {
    (byOrigin[n.origin] = byOrigin[n.origin] || []).push(n);
  });
  Object.keys(byOrigin).forEach((origin) => {
    fs.writeFileSync(path.join(root, "origins", `${slug(origin)}.html`), originPage(origin, byOrigin[origin]));
  });

  const urls = [
    `${BASE}/`,
    ...Object.keys(byOrigin).map((o) => `${BASE}/origins/${slug(o)}.html`),
    ...NAMES.map((n) => `${BASE}/names/${slug(n.name)}.html`)
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`;
  fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
  fs.writeFileSync(
    path.join(root, "robots.txt"),
    `User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`
  );

  console.log(`Built ${NAMES.length} name pages, ${Object.keys(byOrigin).length} origin pages, and sitemap.xml.`);
}

main();
