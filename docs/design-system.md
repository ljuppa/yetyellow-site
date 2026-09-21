# Design system

## Character

Early-web documentation, interpreted through a current technical interface. It should be structured, precise and warm, not a simulated terminal.

## Tokens

| Token | Value | Use |
|---|---|---|
| Signal yellow | `#E7A919` | Primary action and active state |
| Leaf green | `#167341` | Secondary status and experimental work |
| Near-black | `#0C0C0A` | Page background (ground) |
| Panel | `#14141F` | Card and form fill, one layer above ground |
| Bone | `#F1EFE7` | Reading surfaces and contrast sections |
| Muted grey | `#BDBCB4` | Secondary copy and metadata |

## Rules

- Use a modern sans-serif for all primary copy.
- Use monospace only for metadata, labels, timestamps and status cues.
- Prefer grids, rules and bordered panels over shadows and rounded cards.
- Use yellow as a signal, not a large background fill.
- Set headings solid in Bone. Keep yellow for signal only: labels, actions and active state. Do not apply gradient fills to type.
- Motion must communicate state or feedback.
- Support keyboard navigation, visible focus and reduced motion.


## Palette in code

`src/styles/global.css` is the implemented source of truth for colour. Current values:

| Token (CSS) | Value | Role |
|---|---|---|
| `--yellow` | `#E7A919` | Single accent: labels, actions, active state, hero span |
| `--ink` | `#0C0C0A` | Ground: page background |
| `--panel` | `#14141F` | Panel: card and form fill, one layer above ground |
| `--paper` / `--text` | `#F1EFE7` / `#F3F0E7` | Bone reading surfaces / body and headings |
| `--muted` | `#BDBCB4` | Secondary copy, metadata |
| `--line` | `#34342E` | Rules and borders |
| `--green` | `#167341` | Secondary status, experimental work |

Resolved: signal yellow is `#E7A919`, matching the CSS. The Tokens table above is now aligned to it.

## Direction (Sept 2026)

- Single dark theme, single accent (yellow). The indigo/plum second accent was removed.
- Section headings and page-hero titles are solid Bone, not gradient-filled.
- Typography in code: Arial/Helvetica at weight 600 with tight negative letter-spacing for headings and body; "Courier New" monospace for eyebrows, labels, nav and footer; the home hero h1 uses a yellow span for the two-tone split.
- Two-panel background: ground (`--ink`) is the page background; panel (`--panel`) sits one layer above it on cards and form fields (principles grid, now-list entries, contact form inputs). Borders (`--line`) still separate sections; panel fill adds depth without shadows or rounded cards.

## Logo

- The mark is a quince, not a pear. Earlier notes calling it a pear were wrong; the fruit is a quince, and the shipped glossy 3D raster (`public/yetyellow-logo.png`) matched neither description.
- Replaced with a flat, fully monoline, abstract quince mark (`public/yetyellow-logo.svg`): low-poly outline in yellow (`--yellow`), no fill; a small leaf outline in leaf green (`--green`) at the stem. Abstract and geometric rather than a literal fruit illustration, so it reads as engineered, in keeping with the flat editorial type.
- The body carries a hub-and-spoke node graph, not facet lines: it reads as a small network (AI), on straight-edge geometry (engineering), inside the personal quince/leaf identity.
- The same mark, icon only, drives `public/favicon.png` (browser tab icon, transparent background, stroke weights bumped slightly so it still reads at 16px) and the lockup drives `public/og-image.png` (social share card, 1200x630, on the standard dark ground with the hero eyebrow and headline).
