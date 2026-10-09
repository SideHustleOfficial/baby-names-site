// ============================================================
// APP LOGIC
// ============================================================
const $ = (id) => document.getElementById(id);

const grid = $("grid");
const search = $("search");
const count = $("count");
const sortSelect = $("sort");
const lettersNav = $("letters");
const bannerEl = $("banner");
const favCountEl = $("fav-count");
const toastEl = $("toast");
const themeBtn = $("theme-toggle");
const randomBtn = $("random");
const genderButtons = document.querySelectorAll(".seg-btn");
const originsEl = $("origins");
const collectionsEl = $("collections");
const syllSelect = $("syll");
const vowelBox = $("vowel");
const quizForm = $("quiz-form");
const quizResult = $("quiz-result");
const comboBtn = $("combo-btn");
const comboResult = $("combo-result");

// Themes are matched against each name's meaning text.
const COLLECTIONS = {
  light: { label: "✨ Light", re: /light|sun|ray|lamp|dawn|moon|bright|shin|radian|lustre|brilliance|flame/i },
  nature: { label: "🌿 Nature", re: /sky|ocean|sea|lotus|flower|cloud|earth|rain|star|river|basil|breeze|dew|mist|spring|garland|mountain|tree/i },
  goddess: { label: "🪷 Goddesses", re: /goddess|Lakshmi|Durga|Parvati|Saraswati|Ganga|wife of|Sita|Janaki|Vaidehi|Radha/i },
  divine: { label: "🙏 Divine", re: /God|divine|Vishnu|Shiva|Krishna|Rama|Lord|sacred|holy/i },
  strength: { label: "⚔️ Strength", re: /brave|victor|conquer|valour|courage|invincib|strong|warrior|fearless|destroyer|unconquer|bravery/i },
  calm: { label: "🕊️ Calm", re: /peace|calm|tranquil|gentle|soft|quiet|silence|cool/i }
};

const state = {
  gender: "all",      // all | boy | girl | fav
  letter: "all",      // all | A..Z
  sort: "az",
  query: "",
  origin: "all",
  collection: "all",
  syll: "any",        // any | 1 | 2 | 3 | 4
  vowel: false,
  highlight: null
};

// ---------- Helpers ----------
function slugOf(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Rough syllable estimate: counts groups of vowels.
function syllables(name) {
  const groups = name.toLowerCase().match(/[aeiouy]+/g) || [];
  return Math.max(groups.length, 1);
}

function findName(value) {
  const v = value.trim().toLowerCase();
  return v ? NAMES.find((n) => n.name.toLowerCase() === v) : undefined;
}

// ---------- URL parameters (shareable filtered links) ----------
function readParams() {
  const p = new URLSearchParams(location.search);
  if (p.get("gender")) state.gender = p.get("gender");
  if (p.get("letter")) state.letter = p.get("letter").toUpperCase();
  if (p.get("q")) state.query = p.get("q");
  if (p.get("sort")) state.sort = p.get("sort");
  if (p.get("origin")) state.origin = p.get("origin");
  if (p.get("collection")) state.collection = p.get("collection");
}

function writeParams() {
  const p = new URLSearchParams();
  if (state.gender !== "all") p.set("gender", state.gender);
  if (state.letter !== "all") p.set("letter", state.letter);
  if (state.query) p.set("q", state.query);
  if (state.sort !== "az") p.set("sort", state.sort);
  if (state.origin !== "all") p.set("origin", state.origin);
  if (state.collection !== "all") p.set("collection", state.collection);
  const qs = p.toString();
  try {
    history.replaceState(null, "", qs ? "?" + qs : location.pathname);
  } catch (e) {}
}

// ---------- Storage helpers (safe if storage is blocked) ----------
function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

let favs = load("favNames", []);

// ---------- Theme ----------
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}
applyTheme(load("theme", "light"));
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  save("theme", next);
});

// ---------- Toast ----------
let toastTimer;
function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

// ---------- Clipboard ----------
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const area = document.createElement("textarea");
  area.value = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  return Promise.resolve();
}

// ---------- Sharing ----------
function shareName(item) {
  const text = `${item.name} means "${item.meaning}"`;
  const url = new URL(`names/${slugOf(item.name)}.html`, location.href).href;
  if (navigator.share) {
    navigator.share({ title: item.name, text, url }).catch(() => {});
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
  }
}

// ---------- Favourites ----------
function toggleFav(name) {
  if (favs.includes(name)) {
    favs = favs.filter((n) => n !== name);
    toast(`Removed ${name} from saved`);
  } else {
    favs.push(name);
    toast(`Saved ${name} ♥`);
  }
  save("favNames", favs);
  render();
}

// ---------- Name of the day ----------
function renderNameOfDay() {
  if (!NAMES.length) return;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const item = NAMES[dayOfYear % NAMES.length];
  bannerEl.innerHTML = "";

  const label = document.createElement("div");
  label.className = "banner-label";
  label.textContent = "Name of the day";

  const text = document.createElement("div");
  const title = document.createElement("div");
  title.className = "banner-name";
  title.textContent = item.name;
  const meaning = document.createElement("div");
  meaning.className = "banner-meaning";
  meaning.textContent = item.meaning;
  text.append(title, meaning);

  const link = document.createElement("a");
  link.className = "pill-btn";
  link.href = `names/${slugOf(item.name)}.html`;
  link.textContent = "Read more";

  bannerEl.append(label, text, link);
}

// ---------- Chips: origins and themes ----------
function renderOrigins() {
  const counts = {};
  NAMES.forEach((n) => { counts[n.origin] = (counts[n.origin] || 0) + 1; });
  const top = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 12);
  originsEl.innerHTML = "";
  ["all", ...top].forEach((o) => {
    const b = document.createElement("button");
    b.className = "chip" + (state.origin === o ? " active" : "");
    b.textContent = o === "all" ? "All origins" : o;
    b.addEventListener("click", () => { state.origin = o; render(); });
    originsEl.appendChild(b);
  });
}

function renderCollections() {
  collectionsEl.innerHTML = "";
  ["all", ...Object.keys(COLLECTIONS)].forEach((key) => {
    const b = document.createElement("button");
    b.className = "chip" + (state.collection === key ? " active" : "");
    b.textContent = key === "all" ? "All themes" : COLLECTIONS[key].label;
    b.addEventListener("click", () => { state.collection = key; render(); });
    collectionsEl.appendChild(b);
  });
}

// ---------- Letter bar ----------
function renderLetters() {
  const available = new Set(NAMES.map((n) => n.name[0].toUpperCase()));
  lettersNav.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "letter all-btn" + (state.letter === "all" ? " active" : "");
  allBtn.textContent = "All";
  allBtn.addEventListener("click", () => { state.letter = "all"; render(); });
  lettersNav.appendChild(allBtn);

  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "letter" + (state.letter === letter ? " active" : "");
    btn.textContent = letter;
    btn.disabled = !available.has(letter);
    btn.addEventListener("click", () => { state.letter = letter; render(); });
    lettersNav.appendChild(btn);
  });
}

// ---------- Cards ----------
function makeCard(item) {
  const card = document.createElement("article");
  card.className = `card ${item.gender}`;
  if (state.highlight === item.name) card.classList.add("highlight");

  const top = document.createElement("div");
  top.className = "card-top";

  const h2 = document.createElement("h2");
  h2.textContent = item.name;

  const fav = document.createElement("button");
  const isFav = favs.includes(item.name);
  fav.className = "fav-btn" + (isFav ? " on" : "");
  fav.textContent = isFav ? "♥" : "♡";
  fav.setAttribute("aria-label", isFav ? "Remove from saved" : "Save name");
  fav.addEventListener("click", () => toggleFav(item.name));

  top.append(h2, fav);

  const tags = document.createElement("div");
  tags.className = "tags";
  [item.gender, item.origin, `${syllables(item.name)} syllable(s)`].forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tags.appendChild(span);
  });

  card.append(top, tags);

  if (item.pronunciation) {
    const pron = document.createElement("p");
    pron.className = "pron";
    pron.textContent = `Pronounced: ${item.pronunciation}`;
    card.appendChild(pron);
  }

  const meaning = document.createElement("p");
  meaning.className = "meaning";
  meaning.textContent = item.meaning;
  card.appendChild(meaning);

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const copy = document.createElement("button");
  copy.className = "action-btn";
  copy.textContent = "Copy";
  copy.addEventListener("click", () => {
    copyText(item.name).then(() => toast(`Copied ${item.name}`));
  });

  const share = document.createElement("button");
  share.className = "action-btn";
  share.textContent = "Share";
  share.addEventListener("click", () => shareName(item));

  const view = document.createElement("a");
  view.className = "action-btn";
  view.href = `names/${slugOf(item.name)}.html`;
  view.textContent = "View";

  actions.append(copy, share, view);
  card.appendChild(actions);
  return card;
}

// ---------- Filtering and rendering ----------
function getFiltered() {
  const q = state.query.trim().toLowerCase();
  const col = COLLECTIONS[state.collection];

  const list = NAMES.filter((item) => {
    if ((state.gender === "boy" || state.gender === "girl") && item.gender !== state.gender) return false;
    if (state.gender === "fav" && !favs.includes(item.name)) return false;
    if (state.letter !== "all" && item.name[0].toUpperCase() !== state.letter) return false;
    if (state.origin !== "all" && item.origin !== state.origin) return false;
    if (col && !col.re.test(item.meaning)) return false;
    if (state.syll !== "any") {
      const s = syllables(item.name);
      if (state.syll === "4" ? s < 4 : s !== Number(state.syll)) return false;
    }
    if (state.vowel && !/^[aeiou]/i.test(item.name)) return false;
    if (q) {
      const text = `${item.name} ${item.meaning} ${item.origin} ${item.pronunciation || ""}`.toLowerCase();
      if (!text.includes(q)) return false;
    }
    return true;
  });

  list.sort((a, b) =>
    state.sort === "za" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
  );
  return list;
}

function render() {
  genderButtons.forEach((b) => {
    b.classList.toggle("active", b.dataset.gender === state.gender);
  });
  favCountEl.textContent = favs.length;
  sortSelect.value = state.sort;
  syllSelect.value = state.syll;
  vowelBox.checked = state.vowel;
  if (search.value !== state.query) search.value = state.query;

  renderLetters();
  renderOrigins();
  renderCollections();
  writeParams();

  const list = getFiltered();
  grid.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = state.gender === "fav"
      ? "No saved names yet. Tap ♡ on any name to save it."
      : "No names match. Try a different search or filter.";
    grid.appendChild(empty);
  } else {
    list.forEach((item) => grid.appendChild(makeCard(item)));
  }

  count.textContent = `Showing ${list.length} of ${NAMES.length} names`;
}

// ---------- Name finder quiz ----------
function renderQuizOptions() {
  const origins = [...new Set(NAMES.map((n) => n.origin))].sort();
  const originSelect = quizForm.elements["origin"];
  origins.forEach((o) => {
    const opt = document.createElement("option");
    opt.value = o;
    opt.textContent = o;
    originSelect.appendChild(opt);
  });
}

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const feel = quizForm.elements["feel"].value;
  const gender = quizForm.elements["gender"].value;
  const origin = quizForm.elements["origin"].value;
  const col = COLLECTIONS[feel];

  const list = NAMES.filter((n) =>
    col.re.test(n.meaning) &&
    (gender === "any" || n.gender === gender) &&
    (origin === "any" || n.origin === origin)
  );

  quizResult.innerHTML = "";
  if (!list.length) {
    quizResult.textContent = "No matches. Try 'Any gender' or 'Any origin'.";
    return;
  }

  const picks = list.sort(() => Math.random() - 0.5).slice(0, 8);
  const ul = document.createElement("ul");
  ul.className = "quiz-list";
  picks.forEach((n) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `names/${slugOf(n.name)}.html`;
    a.textContent = n.name;
    const span = document.createElement("span");
    span.textContent = ` — ${n.meaning}`;
    li.append(a, span);
    ul.appendChild(li);
  });
  quizResult.appendChild(ul);
});

// ---------- Name combination ----------
comboBtn.addEventListener("click", () => {
  const first = findName($("combo-first").value);
  const middle = findName($("combo-middle").value);
  comboResult.innerHTML = "";

  if (!first || !middle) {
    comboResult.textContent = "Type two names from the list, for example Aarav and Ishaan.";
    return;
  }

  const full = document.createElement("p");
  full.className = "combo-name";
  full.textContent = `${first.name} ${middle.name}`;

  const total = document.createElement("p");
  total.textContent = `About ${syllables(first.name) + syllables(middle.name)} syllables in total.`;

  const detail = document.createElement("p");
  detail.className = "meaning";
  detail.textContent = `${first.name}: ${first.meaning}. ${middle.name}: ${middle.meaning}.`;

  comboResult.append(full, total, detail);
});

// ---------- Events ----------
genderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.gender = btn.dataset.gender;
    state.highlight = null;
    render();
  });
});

search.addEventListener("input", () => {
  state.query = search.value;
  state.highlight = null;
  render();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  render();
});

syllSelect.addEventListener("change", () => {
  state.syll = syllSelect.value;
  render();
});

vowelBox.addEventListener("change", () => {
  state.vowel = vowelBox.checked;
  render();
});

randomBtn.addEventListener("click", () => {
  const list = getFiltered();
  if (!list.length) return toast("No names to pick from");
  const pick = list[Math.floor(Math.random() * list.length)];
  state.highlight = pick.name;
  render();
  const el = [...grid.querySelectorAll(".card")].find(
    (c) => c.querySelector("h2").textContent === pick.name
  );
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  toast(`🎲 ${pick.name} — ${pick.meaning}`);
});

// ---------- Start ----------
readParams();
renderQuizOptions();
renderNameOfDay();
render();
