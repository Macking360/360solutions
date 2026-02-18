# TLS Guard Site

This folder contains a static landing page for TLS Guard.

## Local preview

1. Open `site/index.html` in a browser.
2. Or serve the repo root with a basic static server and browse to `/site/`.

## Deploy to GitHub Pages

Option A: root site repository

1. Push the repo to GitHub.
2. In repository Settings -> Pages, set source branch to `main`.
3. Set folder to `/site`.
4. Save and wait for deployment.

Option B: branch-based pages

1. Publish only the `site/` folder to a branch (for example `gh-pages`).
2. In repository Settings -> Pages, set source branch and root folder.
3. Save and verify the published URL.

## Deploy to Vercel

1. Import the repository into Vercel.
2. Framework preset: `Other`.
3. Set Root Directory to `site`.
4. Build command: leave empty.
5. Output Directory: `.`.
6. Deploy.

No backend or runtime dependencies are required.
