# Design system

## Character

Early-web documentation, interpreted through a current technical interface. It should be structured, precise and warm, not a simulated terminal.

## Tokens

| Token | Value | Use |
|---|---|---|
| Signal yellow | `#FFDC00` | Primary action and active state |
| Leaf green | `#167341` | Secondary status and experimental work |
| Near-black | `#0C0C0A` | Main background |
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
| `--ink` | `#0C0C0A` | Background |
| `--paper` / `--text` | `#F1EFE7` / `#F3F0E7` | Bone reading surfaces / body and headings |
| `--muted` | `#BDBCB4` | Secondary copy, metadata |
| `--line` | `#34342E` | Rules and borders |
| `--green` | `#167341` | Secondary status, experimental work |

Open drift: the Tokens table above documents Signal yellow as `#FFDC00`, but the CSS ships `#E7A919`. Pick one and align both.

## Direction (Sept 2026)

- Single dark theme, single accent (yellow). The indigo/plum second accent was removed.
- Section headings and page-hero titles are solid Bone, not gradient-filled.
- Typography in code: Arial/Helvetica at weight 600 with tight negative letter-spacing for headings and body; "Courier New" monospace for eyebrows, labels, nav and footer; the home hero h1 uses a yellow span for the two-tone split.

## Logo (open)

- `public/yetyellow-logo.png` is a glossy 3D raster mark. It clashes with the flat editorial type; the intended direction is a flat, monoline mark, which needs a new asset.
- Earlier project notes described the logo as a pear mark in black, yellow and green. The shipped asset does not match that description. Reconcile before redoing the mark.
