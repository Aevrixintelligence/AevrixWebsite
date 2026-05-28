# Aevrix Site — Enhancement Progress

Tracks the site-restructure work modelled after enalytix.com.
Last updated: 2026-05-27 (third pass).

---

## ✅ Done in this round (2026-05-27 pass 3)

### 15. Unified header across homepage + all sub-pages
- Replaced the simplified sub-page nav with the **exact same mega-menu header** used on the homepage.
- All 10 sub-pages now show: `[AEVRIX Intelligence logo] · Solutions▾ · Industries▾ · How it works · Features · FAQ · [Contact us]`.
- Solutions and Industries are real hover-mega-menus on sub-pages too (with icons + descriptions).
- Mobile drawer: grouped Solutions/Industries lists, same as homepage.

### 16. Logo source consolidated
- Removed the two giant base64-embedded logo blobs from `index.html` (saved ~212 KB / page load).
- Both homepage nav + footer now reference `av.png` directly.
- All sub-pages use `../av.png` — same image asset, same look everywhere.

### 17. CSS: nav + mega-menu rules added to `assets/page.css`
- `header nav` is fixed at 60px height (matching homepage); `body{padding-top:60px}` reserves space.
- `.nl-drop`, `.mega`, `.mega-itm`, `.mega-ic`, `.mega-tx` rules copied so the mega-menu styles and animates identically.
- Mobile mega-menu (`.mm-grp`) styled with section headers.



---

## ✅ Done in this round (2026-05-27 pass 2)

### 10. Fixed sub-page nav + logo
- Rewrote `<header>` on all 10 sub-pages: full-width fixed nav, proper `av.png` logo (32×32, rounded) with "Aevrix" wordmark.
- Same nav links across all sub-pages: Solutions · Industries · How it works · Features · FAQ · Contact us (button).
- Added working mobile burger menu with `#mb` toggle + `.mm` drawer.
- All nav styles tightened in `assets/page.css` (heights, gaps, hover states, mobile responsive).

### 11. Removed Use cases + Case snapshot sections
- Stripped from all 4 solution pages and all 6 industry pages.
- Kept: hero, capabilities/problem, CTA strip, footer.

### 12. Contact modal now lives on every sub-page
- Each sub-page embeds the same `cm-ov` overlay HTML at the bottom of `<body>`.
- All `Talk to us →` and `Contact us` buttons now call `openContact()` and open in-place — no more redirect to `index.html#cta`.
- Shared logic in `assets/contact.js`.

### 13. "Interested in" auto-fills based on page
- Each sub-page sets `<html data-page-name="…">` (e.g. `data-page-name="Healthcare"`).
- Modal shows a teal pill "Interested in: [Page name]" at the top.
- A `select` field defaults to the current page; users can change it to any of the 10 solutions/industries or "Something else".
- The selected value is sent as the `interest` form field + included in the email subject line.

### 14. Homepage modal now has the same field
- Added the same `Interested in` select to `index.html`'s modal (defaults to "Select a topic" / "General enquiry").
- Synced to the existing modal JS so the value is captured in submission.
- Added `select` styles to homepage modal CSS (custom dropdown caret).



---

## ✅ Done

### 1. Mega-menu navigation
- Replaced flat anchor-only nav with hover dropdowns for **Solutions** and **Industries**.
- Desktop: hover-open mega-panels with icon + title + tagline per item.
- Mobile: solutions and industries grouped inside the mobile drawer with section headers.
- Files: `index.html` (CSS lines ~236-258, nav lines ~634-712).

### 2. Trust / stats strip
- New `#trust` band directly under hero with 4 stat cards:
  `50M+ frames daily · 99.4% accuracy · 120ms latency · 100% on-prem`.
- Gradient teal numbers, muted labels.
- Responsive: 4-up → 2-up on tablet.

### 3. Logo / partner strip
- Existing `#logos` section retained; added the new `#logos` band ("Built to run alongside…") featuring tech-stack pills:
  `NVIDIA Jetson · AWS/Azure · Kubernetes · ONVIF · REST · Grafana`.
- Two complementary sections; the original "industries we serve" strip is unchanged.

### 4. Testimonials section
- New `#testimonials` section before the CTA.
- 3 cards, each with: a metric chip (e.g. "↓ 78% review time"), quote, avatar initials, name, role.
- Responsive: 3-col → 2-col → 1-col.

### 5. Dedicated Solution pages (4)
| Slug | URL | Hero illustration |
|---|---|---|
| Object Detection | `solutions/object-detection.html` | `art-detect` (annotated video feed) |
| Visual Search | `solutions/visual-search.html` | `art-search` (search bar + ranked clips) |
| Data Chatbot | `solutions/chatbot.html` | `art-chat` (conversation UI) |
| Face Recognition | `solutions/face-recognition.html` | `art-face` (face landmark overlay) |

Each page contains:
- Sticky nav (links back to home)
- Breadcrumb
- Hero: eyebrow + headline + lede + dual CTA + artifact illustration
- 6-card capabilities grid
- 4-card use-cases grid with example queries
- Case-snapshot card (dark theme, 3 stat columns)
- Teal CTA strip
- Footer

### 6. Dedicated Industry pages (6)
| Slug | URL | Hero illustration |
|---|---|---|
| Manufacturing | `industries/manufacturing.html` | `art-mfg` (production line) |
| Retail | `industries/retail.html` | `art-retail` (shelf + OOS alert) |
| Logistics | `industries/logistics.html` | `art-log` (yard + idle bay) |
| Healthcare | `industries/healthcare.html` | `art-health` (ward + hand-wash) |
| Agriculture | `industries/agriculture.html` | `art-agri` (NDVI heatmap) |
| Smart Cities | `industries/smart-cities.html` | `art-city` (intersection + crowds) |

Same template as solution pages.

### 7. Artifact illustration library
- Single `assets/artifacts.svg` symbol library with 10 reusable SVG illustrations (`<symbol>` + `<use>`).
- Animated elements where appropriate (pulsing dots, scan lines, typing indicator).
- Referenced from every sub-page via `<svg><use href="../assets/artifacts.svg#art-..."/></svg>`.

### 8. Shared sub-page CSS
- `assets/page.css` — single stylesheet shared by all 10 sub-pages.
- Same design tokens as the homepage (`--teal`, `--text`, etc.) for visual consistency.

### 9. Link integrity
- All 10 mega-menu links resolve to real files.
- All sub-page asset references (`../assets/page.css`, `../av.png`, `../favicon.ico`, `../assets/artifacts.svg`) verified to exist.

---

## ⏳ Not done (next priorities, in suggested order)

### Higher priority
- [ ] **Resources section (Blog / Case Studies / Webinars)** — placeholder in nav + scaffolding pages. (Skipped this round per your instruction; bring back when blog content is ready.)
- [ ] **Solution rename to outcome-style** ("AI for Loss Prevention" instead of "Object Detection"). (Skipped per your instruction.)
- [ ] **Real client logos / pilot logos** in the logo strip — currently uses tech-stack placeholders. Replace with actual customer or pilot-program logos when you have permission.
- [ ] **Real testimonials with consent** — currently uses representative quotes. Replace with quotes you've cleared with named customers.
- [ ] **Case-snapshot stats grounded in real pilot data** — current numbers (3.2×, 14k units, 99.6% etc.) are plausible but illustrative; mark each one with a footnote or replace with verified data.

### SEO / discoverability
- [ ] Add each sub-page URL to `sitemap.xml`.
- [ ] Add per-page Open Graph + Twitter card meta tags (currently only the homepage has them).
- [ ] Add `<link rel="canonical">` to each sub-page.
- [ ] Add JSON-LD `Product` schema to solution pages and `Service` schema to industry pages.

### Functionality
- [ ] Wire the "Talk to us →" buttons on sub-pages to the same contact modal the homepage uses (currently they anchor to `index.html#cta`). Either move the modal into a shared JS include or duplicate it on each sub-page.
- [ ] Add JS click-toggle for mega-menus on tablet/keyboard navigation (currently CSS-hover only).
- [ ] Mobile menu: collapse the Solutions / Industries groups behind expandable accordions to shorten the drawer.

### Content polish
- [ ] Replace the placeholder "case snapshot" copy with a real pilot story per page.
- [ ] Add a 2-3 line "How it works for [Industry]" diagram on each industry page (extends the existing 4-step home flow).
- [ ] Add per-industry FAQ section (top 5 buyer questions).
- [ ] Internal cross-links: each industry page should link to the 2-3 most relevant solution pages, and vice-versa.

### Visual / artwork
- [ ] The current illustrations are stylised SVG mock-UIs. Consider commissioning real product screenshots or higher-fidelity 3D renders for the hero of each page when budget allows.

### Performance / hygiene
- [ ] Pull the large base64-encoded logo on lines 580 + 931 of `index.html` into a separate `av.png` reference (saves ~210KB per page load).
- [ ] Add `width`/`height` attributes to all images for CLS.

### Out of scope (per your instructions)
- [x] ~~Blog / case-studies scaffolding~~ — explicitly skipped.
- [x] ~~Outcome-style solution rename~~ — explicitly skipped.

---

## File tree (new + modified)

```
/
├── index.html              (modified: mega-menu, trust, testimonials)
├── av.png
├── favicon.ico
├── PROGRESS.md             (new)
├── assets/                 (new)
│   ├── page.css            (shared sub-page styles)
│   └── artifacts.svg       (SVG symbol library)
├── solutions/              (new)
│   ├── object-detection.html
│   ├── visual-search.html
│   ├── chatbot.html
│   └── face-recognition.html
└── industries/             (new)
    ├── manufacturing.html
    ├── retail.html
    ├── logistics.html
    ├── healthcare.html
    ├── agriculture.html
    └── smart-cities.html
```

---

## How to test locally

```bash
cd /home/vmukti/Downloads/files
python3 -m http.server 8080
# open http://localhost:8080
```

Then verify:
1. Hover **Solutions** in the desktop nav → mega-menu opens with 4 items
2. Click any item → loads its dedicated page with breadcrumb + hero illustration
3. Hover **Industries** → 6 items; click any → loads dedicated page
4. Mobile (resize browser to <768px) → hamburger → drawer shows grouped items
5. Each sub-page CTA → returns to `index.html#cta` and opens contact modal
