# Indian Baby Names & Meanings

A static website with a searchable baby name directory. Users can search, filter by gender or first letter, save favourites, copy names, pick a random name, and switch to dark mode. No server or build step is needed.

## Files

- `index.html`: page layout
- `style.css`: colours, layout, and animations
- `script.js`: search, filters, favourites, random pick, and theme logic
- `data/names.js`: the name list. Edit this to add or change names.

## Add a name

Open `data/names.js` and add a line inside the list:

    { name: "Example", gender: "girl", origin: "Sanskrit", meaning: "Meaning here" },

Keep the comma at the end of each line except the last one.

## Run locally

Open `index.html` in a browser. It works without a server.

## Deploy free on GitHub Pages

1. Create a public repository on GitHub, for example `baby-names-site`.
2. Upload all files, keeping the `data` folder.
3. Go to Settings > Pages.
4. Under "Build and deployment", choose "Deploy from a branch", select `main`, and save.
5. Your site will be live at `https://YOUR-USERNAME.github.io/REPO-NAME/` after a minute or two.

## Before you publish

- Verify each meaning against reliable sources. Meanings vary by tradition and region.
- Keep the footer disclaimer.
- Grow the list to 100+ names.

## Next steps

- Individual page for each name (helps search engines find the site)
- Horoscope section
- Premium report form with Razorpay payment (needs your account keys)
