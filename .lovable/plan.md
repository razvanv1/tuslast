

## Plan: Rewrite /funding to sell the call (EN + RO)

You gave me a complete reference HTML for the new `/funding`. I'll port the **content and structure** into the existing React/Tailwind components — keeping our design system (Wired editorial, red accent, paper/dark sections, DM Serif Display, JetBrains Mono) instead of importing the gold/serif theme from the HTML.

### What changes

**1. Hero** — sharper sell:
- Title: "You learned what to build. *Now fund building it.*"
- Subtitle: training leaves prototypes, production costs real money, MS/AWS/Google/EU fund exactly that, most qualify, few structure it right.
- Primary CTA: "Find out what you qualify for →" → `/assessment`
- Secondary: "See funding instruments ↓" → `#instruments`
- Note: "Free · No commitment · Written shortlist in 5 business days"

**2. Bridge (3 steps) — rewritten as Training → The Gap → Funding**
- 01 Training: prototypes built on your workflows, link to `/programmes`
- 02 The gap: prototype ≠ production; needs licences, integrations, change mgmt
- 03 Funding: budget already exists; we structure + draft

**3. NEW: EU AI Act Article 4 callout** (between bridge and instruments)
- Editorial dark callout with red left border. "Compliance training qualifies under multiple instruments. You're legally required to do this anyway." Link to existing `/resources/eu-ai-act-article-4`.

**4. Objection section** ("We don't have budget for this")
- Replace current `intro` block with the objection framing: MDF goes unused, EU apps fail on framing not work, we turn programme into something funding body recognises.

**5. Instruments (4 cards)** — rewrite to:
- Microsoft MDF & Founders Hub (two tracks)
- AWS co-sell & Activate (two tracks)
- Google Cloud Partner & startup credits (two tracks) — **new card, replaces one of the current 4**
- EU & national (PNRR, POCIDIF, Digital Europe, Erasmus+)
- Each card gets a `covers` **list** (4 bullets) instead of a single coverage line, and CTA "Book a call about this →" → `/assessment`

**6. Named programmes** — keep the 2-column structure, expand to match the HTML (add Anthropic for Startups, Horizon Europe explicitly).

**7. How we work — 5 steps** (currently 4):
- 01 Audit vendor relationships
- 02 Map eligible instruments
- 03 Structure programme to qualify
- 04 Draft and submit application
- 05 Align delivery and reimbursement
- Plus a **Result** callout block: "Fully funded, or significantly reduced-cost, adoption programme…"

**8. NEW: "How our model works"** (paper/inverted section) — honest framing:
- Left: we're not a grants consultancy, we're an AI adoption company; structuring is part of how we engage; if you qualify for nothing we tell you in 5 days, no pitch follows.
- Right: 4 numbered points — What the call covers / What happens after / What it costs / Our incentive.
- Replaces the current `result` section.

**9. FAQ — 6 questions, FULL answers** (this fixes the "FAQ answers missing" issue):
- How long does an MDF application take?
- What if we are not a Microsoft / AWS / Google partner yet?
- How does reimbursement actually work?
- What documents do you need from us?
- What does this cost us?
- What if we don't qualify for anything?
- Each answer = 2 paragraphs, matching the HTML.

**10. "Before you fund — see a live session" callout** — bridge to `/events` (replaces current `eventsBridge` block, repositioned after FAQ).

**11. Quote** — keep, swap to: *"Most companies qualify for at least one instrument. The question is not whether the funding exists — it does. The question is whether your programme is structured in a way that the funding body will recognise."*

**12. Final CTA** — "Find out what you qualify for · A 30-minute call. A written shortlist in 5 days." Primary → `/assessment`, secondary → `/programmes`.

### What I'm NOT doing

- Not changing the visual theme to the gold/Playfair palette in the HTML — staying with our red/paper/DM Serif system. (Otherwise `/funding` would look like a different site.)
- Not adding the standalone newsletter section at bottom — we don't have a newsletter component on other pages and adding one here only is inconsistent. Skipping unless you want it.
- Not removing the existing `engine` (operational machinery) section — it still adds proof. Keeping it between FAQ and final CTA, slightly trimmed.
- Not touching `/resources` — out of scope.

### Files to edit

- `src/i18n/locales/en/funding.json` — full rewrite of all content blocks
- `src/i18n/locales/ro/funding.json` — same, RO native (not literal translation)
- `src/pages/Funding.tsx` — restructure: add EU AI Act callout, expand instruments to support `covers` array, add 5th process step + Result block, add new `model` section (paper variant), expand FAQ rendering (already supports it), reposition events bridge after FAQ
- No new components needed — reusing `Section`, `SectionHeading`, `NumberedStep`, `Blockquote`, `FAQAccordion`, `CTASection`, `Link`

### One quick check

The HTML has `instrument-card` with a **list of 4 coverage bullets** (not a single string). Our current `Instrument` type uses `coverage: string`. I'll change it to `coverage: string[]` and update both locales — confirm that's fine, otherwise I'll keep it as a comma-joined string. Default if no answer: switch to array (cleaner, matches the source).

