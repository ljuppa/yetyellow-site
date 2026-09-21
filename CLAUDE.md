# yetyellow-site

Personal website for Ljupcho: a public platform for AI and fractional-advisory
positioning, showcasing an agentic project portfolio. Domain: yetyellow.nl.

## Stack

- Astro static site (see `astro.config.mjs`).
- Deploys to Cloudflare with Wrangler.
- `api/contact.ts` backs the contact form.

## Commands

- `npm run dev` local dev server
- `npm run check` astro check (types and content)
- `npm run build` check, then build
- `npm run deploy` build, then `wrangler deploy`

## Architecture decisions

- Astro was chosen over Next.js or a FastAPI plus frontend combination, to keep
  the public site simple and decoupled from any agentic-app backends.
- Python/FastAPI practice lives on separate, independently hosted agent
  projects, so the public site's reliability is not coupled to experimental
  backend work.

## Where things are

- `src/styles/global.css` implemented design tokens and layout. Source of truth
  for colour.
- `docs/design-system.md` design system: palette, direction, open items.
- `docs/` also holds architecture.md, content-model.md, delivery.md,
  product-brief.md, writing-standard.md and adr/.
- `AGENTS.md` writing voice for all site copy.

## Writing voice

Site copy and any writing for Ljupcho follow `AGENTS.md`: clear international
English in a Dutch professional register, direct and sober, British spelling,
no American marketing tone, no em dashes. Make claims specific or remove them.

## Working style

Senior peer. Be direct, flag assumptions, give tradeoffs rather than
prescriptions, prefer tables over prose, confirm section by section before
generating.
