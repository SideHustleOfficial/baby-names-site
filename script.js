// ============================================================
// NAME LIST: add or edit names here.
// Format: { name, gender: "boy" | "girl", origin, meaning }
// Meanings are commonly cited traditional interpretations. Verify before publishing.
// ============================================================
const NAMES = [
  { name: "Aarav", gender: "boy", origin: "Sanskrit", meaning: "Peaceful, calm" },
  { name: "Arjun", gender: "boy", origin: "Sanskrit", meaning: "Bright, white, silver" },
  { name: "Vihaan", gender: "boy", origin: "Sanskrit", meaning: "Dawn, the beginning of the day" },
  { name: "Aditya", gender: "boy", origin: "Sanskrit", meaning: "Sun" },
  { name: "Advait", gender: "boy", origin: "Sanskrit", meaning: "Unique, one without a second" },
  { name: "Ishaan", gender: "boy", origin: "Sanskrit", meaning: "Sun, a name of Lord Shiva" },
  { name: "Kabir", gender: "boy", origin: "Arabic", meaning: "Great, important" },
  { name: "Rohan", gender: "boy", origin: "Sanskrit", meaning: "Ascending, rising" },
  { name: "Shaurya", gender: "boy", origin: "Sanskrit", meaning: "Bravery, valour" },
  { name: "Veer", gender: "boy", origin: "Sanskrit", meaning: "Brave, courageous" },
  { name: "Ved", gender: "boy", origin: "Sanskrit", meaning: "Knowledge, wisdom" },
  { name: "Yash", gender: "boy", origin: "Sanskrit", meaning: "Fame, success, glory" },
  { name: "Dhruv", gender: "boy", origin: "Sanskrit", meaning: "Pole star, steadfast" },
  { name: "Pranav", gender: "boy", origin: "Sanskrit", meaning: "The sacred syllable Om" },
  { name: "Laksh", gender: "boy", origin: "Sanskrit", meaning: "Aim, goal, target" },
  { name: "Reyansh", gender: "boy", origin: "Sanskrit", meaning: "Ray of the sun" },
  { name: "Dev", gender: "boy", origin: "Sanskrit", meaning: "God, divine" },
  { name: "Neel", gender: "boy", origin: "Sanskrit", meaning: "Blue" },
  { name: "Mohan", gender: "boy", origin: "Sanskrit", meaning: "Charming, attractive" },
  { name: "Ananya", gender: "girl", origin: "Sanskrit", meaning: "Unique, matchless" },
  { name: "Diya", gender: "girl", origin: "Sanskrit", meaning: "Lamp, light" },
  { name: "Aadhya", gender: "girl", origin: "Sanskrit", meaning: "First, the primordial power" },
  { name: "Meera", gender: "girl", origin: "Sanskrit", meaning: "Devoted to God" },
  { name: "Saanvi", gender: "girl", origin: "Sanskrit", meaning: "Another name of goddess Lakshmi" },
  { name: "Kavya", gender: "girl", origin: "Sanskrit", meaning: "Poetry, poetic" },
  { name: "Tara", gender: "girl", origin: "Sanskrit", meaning: "Star" },
  { name: "Nisha", gender: "girl", origin: "Sanskrit", meaning: "Night" },
  { name: "Pari", gender: "girl", origin: "Persian", meaning: "Fairy, angel" },
  { name: "Priya", gender: "girl", origin: "Sanskrit", meaning: "Beloved, dear" },
  { name: "Lavanya", gender: "girl", origin: "Sanskrit", meaning: "Grace, beauty" },
  { name: "Shreya", gender: "girl", origin: "Sanskrit", meaning: "Auspicious, excellence" },
  { name: "Gauri", gender: "girl", origin: "Sanskrit", meaning: "Fair, radiant, a name of Parvati" },
  { name: "Nandini", gender: "girl", origin: "Sanskrit", meaning: "Daughter, joy, delight" },
  { name: "Ishita", gender: "girl", origin: "Sanskrit", meaning: "Desire, wish" },
  { name: "Anvi", gender: "girl", origin: "Sanskrit", meaning: "Goddess Durga" }
];

// ============================================================
// DOM references
// ============================================================
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const count = document.getElementById("count");
const sortSelect = document.getElementById("sort");
const lettersNav = document.getElementById("letters");
const bannerEl = document.getElementById("banner");
const favCountEl = document.getElementById("fav-count");
const toastEl = document.getElementById("toast");
const themeBtn = document.getElementById("theme-toggle");
const randomBtn = document.getElementById("random");
const genderButtons = document.querySelectorAll(".seg-btn");

const state = {
  gender: "all",   // all | boy | girl | fav
  letter: "all",   // all | A..Z
  sort: "az",
  query: "",
  highlight: null
};

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

// ---------- Name of the day (changes daily) ----------
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

  bannerEl.append(label, text);
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
  [item.gender, item.origin].forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tags.appendChild(span);
  });

  const meaning = document.createElement("p");
  meaning.className = "meaning";
  meaning.textContent = item.meaning;

  const copy = document.createElement("button");
  copy.className = "copy-btn";
  copy.textContent = "Copy name";
  copy.addEventListener("click", () => {
    copyText(item.name).then(() => toast(`Copied ${item.name}`));
  });

  card.append(top, tags, meaning, copy);
  return card;
}

// ---------- Filtering and rendering ----------
function getFiltered() {
  const q = state.query.trim().toLowerCase();

  const list = NAMES.filter((item) => {
    if ((state.gender === "boy" || state.gender === "girl") && item.gender !== state.gender) return false;
    if (state.gender === "fav" && !favs.includes(item.name)) return false;
    if (state.letter !== "all" && item.name[0].toUpperCase() !== state.letter) return false;
    if (q) {
      const text = `${item.name} ${item.meaning} ${item.origin}`.toLowerCase();
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
  renderLetters();

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
renderNameOfDay();
render();
