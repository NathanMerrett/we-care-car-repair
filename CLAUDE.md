# CLAUDE.md

## Project
This is a new website for We Care Car Repair, an independent garage. It replaces the old Wix site at wecarecarrepair.co.uk. The main job is to reposition the business from a mobile mechanic to a workshop with premises and a team, an updated design, and integrated booking system and up to date google reviews.

## Stack
Astro, static output, sanity for content management. Deployed to Netlify from main.

- `web/`: the Astro site.
- `studio/`: the Sanity Studio.

## Commands (run in `web/`)

- `npm run dev`: dev server at http://localhost:4321
- `npm run build`: production build into `web/dist/`
- `npm run preview`: serve the production build

## Definition of done

- `npm run build` passes with no errors.
- The page has been checked in the browser at phone width (375px) and at desktop width, with no console errors.
- `docs/todo.md` is updated with any changes made or additional tasks.

## Architecture
- One route per file in src/pages/. Do not add a router.
- Shared UI in src/components/. Astro components by default;
  a .tsx island only when it genuinely needs interactivity.
- No client-side JavaScript on a page unless it has an island.

## Do not
- Do not add a dependency without asking.
- Do not commit or push unless asked.
- Do not reformat files you were not asked to change.