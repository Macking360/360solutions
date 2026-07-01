# Deployment

This is a Next.js 15 app deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

## Vercel setup

1. Connect the GitHub repo (`macking360/360solutions`) to a new Vercel project
2. Vercel auto-detects Next.js — no build config needed
3. Set environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SITE_URL` — production domain, e.g. `https://360solutions.com`
   - (BC Multiplex vars will be added in later lanes — see `.env.example`)

## GitHub Pages decommission

Do this **after** the Vercel domain is live and DNS/redirects are confirmed:
1. Go to repo Settings → Pages
2. Set Source to "None" to disable GitHub Pages

The original static site files are preserved in `_static-backup/` and tagged as `static-site-v0` in git.

## Branch strategy

- `main` — production (auto-deploys to Vercel)
- `claude/new-session-*` — active development branches, merged via PR
