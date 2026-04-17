
User wants Buy Now CTAs added across the site since Stripe products & links exist. Buy Now = primary, Assessment = secondary.

Need to identify where pricing/products are shown and where CTAs are missing or wrongly prioritized.

Known products:
- AI Small Team (€3,000) — `ai_small_team`
- AI Standard (€5,000) — `ai_standard`
- Hermes Self-directed (€497) — `hermes_self`
- Hermes Full Build (€997) — `hermes_full`

Pages already have checkout wired:
- `/programmes/ai-for-non-technical-people` — has Pay & enrol on tier cards
- `/hermes` — has Pay buttons on tiers

Pages where Buy Now is missing or where CTA hierarchy is wrong (Assessment is currently primary):
- Homepage hero — currently primary = Assessment, secondary = Programmes. No Buy Now.
- Homepage CTA bottom — only Assessment.
- PageHero on AI for Work & Hermes — primary is likely Assessment, no Buy Now jump-to-pricing.
- Navbar — primary CTA is Assessment (red).

## Plan

**1. Homepage (`src/pages/Index.tsx`)**
- Hero: Make **Buy Now (AI for Work €3,000)** the primary red CTA → links to `/programmes/ai-for-non-technical-people#pricing`. Move "Book Assessment" to secondary (outline). Keep "See programmes" removed or as tertiary text link.
- Bottom CTASection: Add a primary "Buy AI for Work →" button alongside the existing Assessment (now secondary).
- Programs catalogue cards: Add a "Buy now →" link next to each program's existing "See the program" link where a Stripe product exists (Core program → pricing anchor; Hermes card if added).

**2. AI for Work page (`src/pages/AIForNonTechnical.tsx`)**
- PageHero: Add primary "Buy now →" button (jumps to `#pricing` section) + secondary "Book free Assessment".
- Add an `id="pricing"` anchor on the pricing/tiers block (likely already there — verify).
- Add a sticky/inline mid-page CTA strip after curriculum: "Ready? Pick your tier →" jumping to pricing.

**3. Hermes page (`src/pages/Hermes.tsx`)**
- PageHero: primary "Buy Hermes →" (jumps to `#pricing`), secondary "Book Assessment".
- Verify pricing anchor exists.

**4. Navbar (`src/components/Navbar.tsx`)**
- Keep "Assessment →" as the persistent secondary CTA (outline style instead of solid red), and add a solid red "Buy →" button linking to `/programmes/ai-for-non-technical-people#pricing`. On mobile, stack both.
- Alternative: keep navbar as-is to avoid clutter — only update page-level CTAs. **Recommended: keep navbar simple, just swap Assessment to outline and add Buy.**

**5. PageHero component (`src/components/PageHero.tsx`)**
- Already supports `ctaText`/`secondaryText`. No structural change needed — just pass new props from each page. Primary stays red, secondary stays outline. ✓

**6. CTASection component (`src/components/CTASection.tsx`)**
- Extend to optionally accept a secondary CTA, so the bottom homepage band can show **Buy Now (primary) + Assessment (secondary)**.

## CTA hierarchy rule going forward
- **Primary (solid red)**: Buy Now / Pay & enrol
- **Secondary (outline paper)**: Book free Assessment
- **Tertiary (text link)**: See details / programmes

## Files to edit
- `src/components/CTASection.tsx` — add optional secondary CTA props
- `src/components/Navbar.tsx` — add Buy button, demote Assessment to outline
- `src/pages/Index.tsx` — hero CTAs swap, bottom CTA swap, ladder cards add Buy link
- `src/pages/AIForNonTechnical.tsx` — hero CTAs, ensure `#pricing` anchor, mid-page CTA strip
- `src/pages/Hermes.tsx` — hero CTAs, ensure `#pricing` anchor

No backend changes. No new Stripe products. Pure UI/CTA reordering.
