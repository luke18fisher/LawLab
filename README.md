# LawLab

**LAWVERSE**, a study game for UWC LLB courses. It opens on a course picker; switch courses any time from the course chip in the top bar.

| Code | Course | Seasons |
|---|---|---|
| **PUB** | Public International Law: *The PIL Diaries* | Unit 2 (sources, treaties, custom, jus cogens and erga omnes); Unit 3 (international law and municipal law, justiciability and extra-territorial application) |
| **CON** | Constitutional Law: *The Bill of Rights Diaries* | Bill of Rights litigation · Equality (s 9) · Human dignity (s 10) · Freedom of religion (s 15) · Socio-economic rights |

It's a static web app with no build step and no server code.

## Run it

- **Locally:** open `index.html` in a browser, or serve the folder:
  ```sh
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```
- **Render:** New → Blueprint → choose this repo (uses `render.yaml`). Or New → Static Site with no build command and publish directory `.`.
- **GitHub Pages:** Settings → Pages → Deploy from branch → `main`, folder `/ (root)`.

Progress is saved in the browser's `localStorage` (one save covers every course; XP and level are shared, everything else is per course). Use Settings → Export/Import to move it between devices.

## Files

| File | What it is |
|---|---|
| `index.html` | Page shell; loads everything below |
| `styles.css` | All styling (light/dark themes, Chill Mode) |
| `content.js` | PUB course knowledge bank: topics, episodes, cases, questions, case files, exam questions |
| `content-con.js` | CON course knowledge bank (same structure) |
| `render.yaml` | Render static-site blueprint |
| `app.js` | The game (React + htm, no JSX build needed) |
| `vendor/` | React 18.3.1, ReactDOM 18.3.1 and htm 3.1.1 (UMD builds, MIT licensed) |

Fonts load from Google Fonts. Without a connection the app falls back to system fonts.

## Adding a unit

Add new entries to `TOPICS`, `SUBTOPICS`, `CASES`, `Q` (and optionally `MYSTERIES`, `SHOP`, `EXAM`) in that course's content file. Each unit is one season (one `TOPICS` entry). Progress is stored per id, so keep existing ids stable and unique across courses (CON ids start with `c-`/`cq`).

## Adding a course

Create `content-<code>.js` that registers `window.LAWVERSE_COURSES.<id> = {id, code, name, tagline, look, blurb, scope, seriesTitle, notesLabel, meta, flags, TOPICS, SUBTOPICS, CASES, Q, MYSTERIES, SHOP, GLOWUP, PLAYLISTS, EXAM}` (copy the bottom of `content-con.js`), and add a `<script>` tag for it in `index.html` before `app.js`. It appears as a new tile on the course picker.
