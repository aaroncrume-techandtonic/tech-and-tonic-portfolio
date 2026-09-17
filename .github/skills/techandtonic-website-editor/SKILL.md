---
name: techandtonic-website-editor
description: 'Make content edits to the techandtonic.tech site (repo tech-and-tonic-portfolio): homepage link hub, portfolio page, policy impact explorer, tracker infographic. Use when asked to edit text/copy/links on techandtonic.tech, update the link hub, change the portfolio or policy-impact-explorer page, update the tracker infographic, preview the site locally, or deploy techandtonic.tech.'
---

# techandtonic.tech Website Editor

techandtonic.tech is built from `tech-and-tonic-portfolio` (the repo with `.git` remote
`aaroncrume-techandtonic/tech-and-tonic-portfolio`). It's a Vite + React multi-page site — NOT
the Next.js `app/` folder that also lives in this repo (that folder exists but `package.json`
builds with `vite build`, so `app/` is currently dead code and won't appear on the live site).

A separate `tech-and-tonic-portfolio-publish` folder elsewhere in the workspace is an
unconnected copy (no `.git`) — don't edit it expecting changes to deploy.

## Step 1: Find the right file for the page being edited

| Page (URL path) | Built from | Edit here |
|---|---|---|
| `/` — homepage link hub | `index.html` → `src/main.tsx` | `quickLinks` / `groupedLinks` arrays in [src/main.tsx](../../../src/main.tsx) |
| `/tracker.html` — Beyond GPS infographic | `tracker.html` → `src/tracker-main.tsx` | [src/TrackerInfographic.tsx](../../../src/TrackerInfographic.tsx) |
| `/portfolio.html` — Professional Portfolio SPA | standalone file | edit directly inside [portfolio.html](../../../portfolio.html) |

Confirm the page list against `build.rollupOptions.input` in `vite.config.ts` — only entries
listed there are actually built and deployed.

`compound-portfolio.html`, `content.html`, `live.html`, `site.html`, and
`policy-impact-explorer.html` exist in the repo but are **not** in `vite.config.ts` build inputs —
they are legacy/unused/retired. `policy-impact-explorer.html` was intentionally pulled from the
build and redirected to `/` in `vercel.json` (retired page); the other three were never wired in.
Confirm with the user before reviving any of these — an edit won't show up on the live site
without also adding the entry back to `vite.config.ts` (and, for the policy page, removing the
`vercel.json` redirect and its `src/main.tsx` link entries).

## Step 2: Read files directly — don't rely on default search

`tech-and-tonic-portfolio` has its own `.gitignore`/nested `.git`, so `grep_search` and
`semantic_search` can silently return empty results inside it. When searching this folder, pass
`includeIgnoredFiles: true` to `grep_search`, or just `read_file` the known path directly.

## Step 3: Make the edit

- **Standalone HTML pages** (`portfolio.html`, `policy-impact-explorer.html`): these are
  self-contained single-file apps (Tailwind CDN + Chart.js, no build-time imports). Edit text
  nodes, `value=` attributes, `<option>` labels, and any inline `<script>` data directly in the
  HTML file.
- **React entry pages** (`src/main.tsx`, `src/TrackerInfographic.tsx`): edit the typed
  arrays/objects (e.g. `LinkCard`, `LinkGroup`, `quickLinks`, `groupedLinks`). Keep the TypeScript
  types intact — the build runs `tsc` before `vite build` and will fail on type errors.

## Step 4: Preview locally

```bash
cd tech-and-tonic-portfolio
npm install   # first time only
npm run dev
```

Open the printed local URL and navigate to the specific path being changed (`/`, `/portfolio.html`,
`/tracker.html`, `/policy-impact-explorer.html`) to confirm the edit looks right.

## Step 5: Verify the build before deploying

```bash
npm run build
```

This runs `sync:vocabulary` → `tsc` → `vite build` (output to `dist/`, per `vercel.json`). Fix any
TypeScript errors it surfaces before deploying.

## Step 6: Deploy

- Check the current branch first: `git branch --show-current`. Vercel deploys to production on
  push to `main`; other branches only get preview deployments.
- Commit and push. Don't force-push, and confirm with the user before pushing directly to `main`
  for production-affecting changes.

## Quality checklist

- [ ] Change is confirmed in `npm run dev` preview, not just read in source
- [ ] `npm run build` completes with no TypeScript errors
- [ ] New/changed links use existing patterns — internal pages as `/page.html`, external
  redirects added to `vercel.json`'s `redirects` array (e.g. `/go/...`) rather than hardcoded
  long URLs, when following the existing convention
- [ ] No edits made to unused legacy files (`compound-portfolio.html`, `content.html`,
  `live.html`, `site.html`, `app/`) unless the user explicitly asked to revive them
