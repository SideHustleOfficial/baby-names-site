const grid = document.getElementById("grid");
const search = document.getElementById("search");
const count = document.getElementById("count");
const filterButtons = document.querySelectorAll(".filter");

let names = [];
let activeGender = "all";

function render() {
  const query = search.value.trim().toLowerCase();

  const matches = names.filter((item) => {
    const genderOk = activeGender === "all" || item.gender === activeGender;
    const text = `${item.name} ${item.meaning} ${item.origin}`.toLowerCase();
    const searchOk = query === "" || text.includes(query);
    return genderOk && searchOk;
  });

  grid.innerHTML = "";

  if (matches.length === 0) {
    grid.innerHTML = `<p class="empty">No names found. Try a different search.</p>`;
  }

  matches.forEach((item) => {
    const card = document.createElement("article");
    card.className = `card ${item.gender}`;
    card.innerHTML = `
      <h2>${item.name}</h2>
      <span class="tag">${item.gender} · ${item.origin}</span>
      <p class="meaning">${item.meaning}</p>
    `;
    grid.appendChild(card);
  });

  count.textContent = `Showing ${matches.length} of ${names.length} names`;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    activeGender = button.dataset.gender;
    render();
  });
});

search.addEventListener("input", render);

fetch("data/names.json")
  .then((response) => response.json())
  .then((data) => {
    names = data;
    render();
  })
  .catch(() => {
    grid.innerHTML = `<p class="empty">Could not load names. Check data/names.json.</p>`;
  });
