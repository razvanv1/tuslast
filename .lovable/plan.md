

## Goal
Migrate the polished assets/content from the source project `unlearning website (40)` into THIS site, keeping THIS site's editorial Wired aesthetic (black bg, paper, red, DM Serif Display + JetBrains Mono). Plus add a new `/hermes` page based on the uploaded HTML, fully restyled in the existing visual language.

## What's missing here vs. the source project
1. **Logo asset** → copy `src/assets/logo.webp` from source.
2. **Razvan photo** → copy `razvan-valceanu.jpg` from source for About page.
3. **Footer** lacks contact details, address, phone, social icons (LinkedIn, Facebook, Instagram, WhatsApp), legal links, newsletter band.
4. **Contact page** (currently we use `/assessment`) — missing a full Contact page with email, phone, address, LinkedIn.
5. **Resources page** — does not exist.
6. **Legal pages** — Privacy Policy, Cookie Policy, Terms & Conditions don't exist.
7. **Cookie consent (GDPR popup)** — doesn't exist.
8. **Hermes Agent page** — doesn't exist.

## Plan

### 1. Assets
- Copy `logo.webp` and `razvan-valceanu.jpg` from source project into `src/assets/`.

### 2. Footer (`src/components/Footer.tsx`)
Restructure to include, in editorial style (black bg, paper text, red accents, mono labels):
- **Contact column**: `hello@unlearning.ro`, `+40 722 598 346`, `1, Aleea Pasărea în Văzduh, București, RO`
- **Programmes column** (existing 3 + Hermes Agent + About + Resources)
- **Legal column**: Privacy / Cookie / Terms links
- **Follow Us column**: LinkedIn, Facebook, Instagram, WhatsApp (small inline SVG icons in mono style)
- Newsletter mini-band linking to /assessment (or existing CTA pattern)
- Bottom strip: `© 2026 The Unlearning School · contact@unlearning.ro`

### 3. About page (`src/pages/About.tsx`)
- Add `razvan-valceanu.jpg` portrait (paper-bordered, polaroid feel matching `card-shadow`) into the founder section. Keep existing copy + add LinkedIn link `https://www.linkedin.com/in/razvanvalceanu/`.

### 4. Contact integration
- Update `/assessment` page (or add a simple Contact section at the bottom) with email + phone + address + LinkedIn block, in editorial style — small grid of `mailto:` / `tel:` / address card.
- Keep the existing Cal embed flow intact.

### 5. New Resources page (`src/pages/Resources.tsx`)
Adapt content from source (entry paths, content types, topics, featured formats, newsletter pill) into our editorial style:
- `<PageHero>` with eyebrow "RESOURCES" + title "Useful material for teams working through AI, funding, execution, and change."
- Sections using `<Section>`, `<SectionHeading>`, mono labels, red emphasis em tags
- 6-cell grid for content types (paper bg / dark bg alternating)
- 8-cell grid for topics
- Featured formats 2-col
- Newsletter card at end (linking to `/assessment` or external newsletter)
- Add to `App.tsx` routes + Navbar + Footer.

### 6. Legal pages (`src/pages/legal/`)
Create three pages: `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `TermsAndConditions.tsx`, port the content from source, restyled (paper bg section for the body, red kicker, DM Serif H1, Inter body). Add routes `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`.

### 7. Cookie consent popup (`src/components/CookieConsent.tsx`)
Port logic, restyle as a thin black bottom banner with red accent, `border-t-2 border-paper/10`, mono-cased buttons "Accept all" (red bg) / "Essential only" (ghost). Mount in `App.tsx`.

### 8. Hermes Agent page (`src/pages/Hermes.tsx`)
Build using existing components (`PageHero`, `Section`, `SectionHeading`, `NumberedStep`, `Blockquote`, `CTASection`). Maintain editorial style — DO NOT use the amber/dark theme from the HTML. Sections to port (text content kept verbatim where useful):
1. **Hero** — eyebrow "HERMES AGENT · INTERNAL AGENTIC SOLUTION", title "Stop prompting. *Start delegating.*", subtitle, CTA.
2. **Terminal mock** — render as a mono-styled `<pre>` block in a paper card with red dot row.
3. **What it is** — 2-col, with verdict pull-quote.
4. **Differentiators** — 3-cell grid (Memory that compounds / Self-improvement loop / Action, not response).
5. **Use cases** — 6 numbered items with time/title/body and mono metric, list format like Editorial NumberedStep but with right-side metric column.
6. **Technical** — 2-col: tech-list bullets + mono code block on paper bg.
7. **Program weeks** — 4-col `<Section variant="paper">` cards (Week 01–04).
8. **Pricing** — 2 cards (€497 / €997), the second highlighted in red.
9. **Blockquote** from Dez.
10. **FAQ** — 2-col grid.
11. **CTA** — `<CTASection>`.
- Add route `/hermes` + Navbar link "Hermes Agent" + Footer link.

### 9. Routing & Nav updates
- `App.tsx`: add routes `/resources`, `/hermes`, `/contact` (alias to assessment or new), `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`.
- `Navbar.tsx`: add "Hermes Agent" and "Resources" links (compact spacing already in place).

### 10. SEO / index.html
- Update `<title>` and meta description if needed (already good).

## Files affected
- **Created**: `src/components/CookieConsent.tsx`, `src/pages/Resources.tsx`, `src/pages/Hermes.tsx`, `src/pages/legal/PrivacyPolicy.tsx`, `src/pages/legal/CookiePolicy.tsx`, `src/pages/legal/TermsAndConditions.tsx`, `src/assets/logo.webp`, `src/assets/razvan-valceanu.jpg`
- **Edited**: `src/components/Footer.tsx`, `src/components/Navbar.tsx`, `src/pages/About.tsx`, `src/pages/Assessment.tsx`, `src/App.tsx`

## Open question
The source uses the email `hello@unlearning.ro`, but THIS site currently uses `contact@unlearning.ro`. I'll standardize on **`hello@unlearning.ro`** (matches the source which you confirmed is "final and functional"), unless you object. Same for phone `+40 722 598 346` and address `1, Aleea Pasărea în Văzduh, București, RO`.

