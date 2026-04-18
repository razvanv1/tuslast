
## Goal
Rebrand "Free audit" → "AI Adoption Call" sitewide, and reframe its purpose: instead of a generic adoption-gap audit, it's now a free call that **measures AI maturity** and delivers a **score, gap analysis, and practical next-step roadmap**. Position it as a funnel placeholder until an automatic self-serve tool ships.

## Audit of current usage

`Free audit` / `free audit` appears in:

- **`src/lib/booking.ts`** — `BOOKING_LABEL = "Free audit"` (single source for all CTAs).
- **`src/pages/Assessment.tsx`** — page title, SEO, hero tag/title/subtitle/CTA, section copy, booking section, mailto subject, blockquote.
- **`src/components/HeroCardDeck.tsx`** — homepage card label `"Free audit"`.
- **`src/components/PageHero.tsx`** — generic, no copy change needed.
- **`src/components/Navbar.tsx`** / **`CTASection.tsx`** — pull from `BOOKING_LABEL`, so updating the constant cascades.
- Likely other pages (Index, AIForNonTechnical, Funding, Events, Hermes, About, Resources, Footer) reference "Free audit" in CTA copy or notes — I'll grep and replace each occurrence with consistent wording.

## Naming & terminology rules

- Button label everywhere: **"AI Adoption Call"** (replaces "Free audit →").
- Long-form / hero / SEO: **"AI Adoption Call — free 30-minute maturity assessment"**.
- Where the old copy said "free audit" descriptively in body text, rewrite to reflect the new framing (maturity score + gap analysis + roadmap), not just a find-replace.
- Mailto subjects: `Subject: AI Adoption Call`.
- Route `/assessment` stays (avoid breaking inbound links / SEO); internal anchor `#book` stays.

## New positioning copy (to use on `/assessment`)

> The AI Adoption Call is a free 30-minute conversation that measures **how mature your organisation is for AI adoption**. We ask a short set of structured questions and send you back a **maturity score, a gap analysis, and a practical next-step roadmap** — within 24 hours. No proposal, no pricing.
>
> *Soon this will run as a self-serve tool. Until then, we run it live with you on a call.*

## Changes (concise)

### 1. `src/lib/booking.ts`
- `BOOKING_LABEL = "AI Adoption Call"`.
- Add `BOOKING_NOTE = "Free · 30 min · Maturity score in 24h"` (optional helper) — or just update notes inline per page.

### 2. `src/pages/Assessment.tsx` (full rewrite of copy, structure preserved)
- `document.title` → `"AI Adoption Call, The Unlearning School"`.
- SEO title/description/keywords reframed around "AI maturity assessment", "AI adoption maturity score", "AI readiness call".
- Hero `tag` → `"AI Adoption Call"`, title → `"AI Adoption Call, 30 minutes."`, subtitle reframed (maturity score + gap analysis + roadmap, 24h delivery), CTA label → `"Book the call →"`, note → `"Free · 30 min · Maturity score in 24h"`.
- "What the call covers" — rewrite the 3 numbered steps to match the new framing:
  1. **Where you are today** — short structured questions across tools, workflows, governance, skills.
  2. **Where the gaps are** — score across the maturity dimensions; what's holding adoption back.
  3. **What to do next** — a practical, ranked roadmap of the first 1–3 moves.
- "What you receive" section — replace bullets with: **Maturity score**, **Gap analysis across key dimensions**, **Practical next-step roadmap (ranked)**. Keep the "shareable internally, no pricing" line.
- "Who books this" personas — light edits so each persona ties to the maturity-score framing (COO wants the score to justify investment; HR/L&D wants the gap map to plan training; BU lead wants the roadmap).
- Booking section — heading + body adjusted, CTA label "AI Adoption Call · Open calendar →", mailto subject `AI%20Adoption%20Call`.
- Add a small "soon self-serve" line under the booking card: *"We're building this as a self-serve tool. Until it ships, we run the assessment live with you."*
- Closing blockquote — keep meaning, swap "audit" → "AI Adoption Call".

### 3. `src/components/HeroCardDeck.tsx`
- Card label `"Free audit"` → `"AI Adoption Call"`, caption `"Free · 30 min · Score"`.

### 4. Other pages — find & replace CTA strings
- Run a grep for `Free audit`, `free audit`, `Free Audit` across `src/pages/**` and `src/components/**`, and replace each in context:
  - CTA buttons → `AI Adoption Call →`
  - Body sentences referring to "the free audit" → "the AI Adoption Call"
  - `note` props that previously said "Free · 30 min" → keep, or extend to `"Free · 30 min · Maturity score"`
- Specifically check: `Index.tsx`, `AIForNonTechnical.tsx`, `Funding.tsx`, `Events.tsx`, `Hermes.tsx`, `About.tsx`, `Resources.tsx`, `Footer.tsx`, `CTASection.tsx` callers.

### 5. SEO / sitemap
- `public/sitemap.xml` — no URL change (route stays `/assessment`), no edit needed unless a `<title>`-like field exists; will verify.
- No redirect needed.

## What I will NOT change
- Route path `/assessment` (preserves inbound links + SEO).
- Brevo calendar URL.
- Visual design, layout, components, colors, fonts.
- Navbar structure (only the label text via `BOOKING_LABEL`).

## Risk
Low — text + one constant. Behavior, routing, calendar, and design are untouched. The cascading `BOOKING_LABEL` change updates Navbar + every CTA in one place.
