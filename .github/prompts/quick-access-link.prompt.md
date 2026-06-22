---
description: "Quickly add or rename a top Quick Access link box in Tech and Tonic."
---

Use the quick-access-link agent.

Task:
- Add or update a link in the top Quick Access strip.

Inputs:
- Title: <enter title>
- URL: <enter url>
- Position: top (default) or specify custom order
- Push after build: yes/no

Requirements:
- Edit src/main.tsx quickLinks.
- Avoid duplicates by href.
- Run npm run build.
- If push is requested, check git status first and confirm handling of unrelated changes.
