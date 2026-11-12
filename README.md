# LawLab

**LAWVERSE: The PIL Diaries**, a study game for UWC Public International Law (Unit 2: sources, treaties, custom, jus cogens and erga omnes; Unit 3: international law and municipal law, justiciability and extra-territorial application).

It's a static web app with no build step and no server code.

## Run it

- **Locally:** open `index.html` in a browser, or serve the folder:
  ```sh
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```
- **GitHub Pages:** Settings → Pages → Deploy from branch → `main`, folder `/ (root)`.

Progress is saved in the browser's `localStorage`. Use Settings → Export/Import to move it between devices.

## Files

| File | What it is |
|---|---|
| `index.html` | Page shell; loads everything below |
| `styles.css` | All styling (light/dark themes, Chill Mode) |
| `content.js` | Course knowledge bank: topics, episodes, cases, questions, case files, exam questions |
| `app.js` | The game (React + htm, no JSX build needed) |
| `vendor/` | React 18.3.1, ReactDOM 18.3.1 and htm 3.1.1 (UMD builds, MIT licensed) |

Fonts load from Google Fonts. Without a connection the app falls back to system fonts.

## Adding a unit

Add new entries to `TOPICS`, `SUBTOPICS`, `CASES`, `Q` (and optionally `MYSTERIES`, `SHOP`, `EXAM`) in `content.js`. Progress is stored per question id, so keep existing ids stable.
