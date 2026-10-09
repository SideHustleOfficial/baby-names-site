# Indian Baby Names & Meanings

A simple static website with a searchable baby name directory. No build step or server needed.

## Files

- `index.html`: the page layout
- `style.css`: styling
- `script.js`: search, gender filter, and rendering
- `data/names.json`: the name list. Add new names here.

## Run locally

Open `index.html` in a browser. If names don't load, run a local server instead:

    python -m http.server 8000

Then visit http://localhost:8000

## Add names

Add an entry to `data/names.json`:

    { "name": "Example", "gender": "girl", "origin": "Sanskrit", "meaning": "Meaning here" }

## Deploy free on GitHub Pages

1. Create a new repository on GitHub and upload these files.
2. Go to Settings > Pages.
3. Under "Build and deployment", choose "Deploy from a branch", select `main`, and save.
4. Your site will be live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Before you publish

- Verify each meaning against a reliable source. The starter list uses commonly cited meanings, and meanings vary by tradition and region.
- Add more names. A directory of 100+ names is much more useful than 20.
- Keep the footer disclaimer. Don't present name meanings as guarantees.

## Next steps

- Individual pages for each name (better for search engines)
- Horoscope section
- Premium report form with Razorpay payment (needs your account keys, so it's not included here)
