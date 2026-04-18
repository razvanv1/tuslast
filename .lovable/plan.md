
Big batch. Let me plan it tight.

## Scope (everything you listed)

**A. Testimonials section (new)** — 6 real testimonials, RO + EN translation, on home page + About page. New `Testimonials.tsx` component, editorial style (no star ratings, no SaaS card-grid; use Wired pull-quote style with attribution mono).

**B. Founder mini-bio + photo + LinkedIn on home page** — new section "The person behind it" between Credibility and Partners. Use the new uploaded photo (`person_extracted.png`) → copy to `src/assets/founder-portrait.png`. Bio adapted from your LinkedIn copy (condensed to ~80 words for home, full version stays on About). LinkedIn link button.

**C. AI Adoption Score hero strip** — thin promo strip directly under the Hero (above ShuffleDeck). Mono kicker + one-line pitch + button "Take the 2-min test →". Variant `paper` for contrast. Doesn't replace hero CTA, complements it.

**D. Meta titles <60 chars + 4 more home FAQs** — trim title strings in `i18n/.../meta.title` for home + main pages. Add 4 FAQs to home (price, timeline, languages, in-person/remote).

**E. Image intrinsic sizes** — re-export `card-ai-non-technical.webp` and `card-assessment.webp` at ~454px wide (current display size). Will use `code--exec` with imagemagick/cwebp to resize.

**F. Resources index — 6 article stubs scaffolded**:
1. EU AI Act Article 4 — what it means for non-tech teams
2. Why Copilot rollouts stall after 30 days
3. The Lewin model applied to AI adoption
4. AI for procurement: 3 workflows, before/after
5. How to qualify for vendor MDF on AI training
6. Hermes Agent vs ChatGPT — when to use which

Each gets a stub `.tsx` page with hero + 3 placeholder sections + CTA back to /assessment. Resources index page becomes a real grid linking to all 6 + the existing playbook.

**G. Nav restructure → 4 top items + Programmes dropdown**
Final nav: **Programmes ▾** (AI for Work, Hermes, Events, Funding) · **Resources** · **About** · **AI Score** · CTA "Book a call". Mobile keeps flat list inside drawer.

**H. Funding comparison table + "what you get" tables on pricing cards**
- Funding page: new comparison table (4 instruments × coverage% / timeline / eligibility / typical save).
- Home pricing cards: replace current 3 bullets with a 4–5 row "what you get" mini-table (deliverable / format / outcome).

**J. Before/After workflow infographic component (reusable)**
New `<BeforeAfterWorkflow>` component. Two columns (Before grey, After red accent), each with: process name, time, steps, friction note. Used once on home (between Premise and Audience) with one anonymized example: "Procurement RFP review · before 6h, after 45min".

**K. Logo wall / case study tiles infrastructure**
New `<CaseStudyTiles>` component — 5 anonymized tiles (sector + scale + outcome, no logos since you can't publish names). Goes on home between Credibility and the new Founder section. Pattern: "Top-3 RO bank · 120 PMs · 4-week sprint · 38% process time saved".

**L. Analytics events layer**
Add Plausible script to `index.html` (lightweight, GDPR-safe, no cookie banner needed beyond what you have). Wrap primary CTAs (Buy AI for Work, Book Call, Take Score, Install Hermes) with `data-analytics` attributes + a small `trackEvent()` helper. No PostHog — heavier and overlap with existing Cloudflare.

**M. RO copy native-speaker pass**
Pass over all `ro/*.json` files. Fix the awkward bits I flagged: "Acum extrag" → "Trag acum", "Discuție AI Adoption" → "Sesiune AI Adoption" (consistent), "perks" → "beneficii", smooth out remaining anglicisms. No structural changes, just language polish.

### Skipping (with reason)
- **I. Embed Brevo calendar inline** — Brevo's iframe is heavy and breaks our design system. Better as separate scope after measuring current /assessment conversion. Flagging, not doing.

## File touch list

**New files (~14)**
- `src/components/Testimonials.tsx`
- `src/components/FounderBio.tsx`
- `src/components/AIScoreStrip.tsx`
- `src/components/BeforeAfterWorkflow.tsx`
- `src/components/CaseStudyTiles.tsx`
- `src/components/ProgrammesDropdown.tsx`
- `src/lib/analytics.ts`
- `src/assets/founder-portrait.png` (copied from upload)
- `src/pages/resources/EUAIActArticle4.tsx`
- `src/pages/resources/CopilotRollout.tsx`
- `src/pages/resources/LewinAdoption.tsx`
- `src/pages/resources/ProcurementWorkflows.tsx`
- `src/pages/resources/VendorMDF.tsx`
- `src/pages/resources/HermesVsChatGPT.tsx`

**Modified (~12)**
- `src/pages/Index.tsx` — insert AIScoreStrip, BeforeAfter, CaseStudyTiles, FounderBio, Testimonials; replace pricing card bullets with mini-tables
- `src/pages/About.tsx` — full LinkedIn bio + Testimonials block
- `src/pages/Resources.tsx` — real grid of 7 items
- `src/pages/Funding.tsx` — comparison table
- `src/components/Navbar.tsx` — 4-item nav + Programmes dropdown
- `src/lib/routes.ts` — register 6 new resource routes (EN + RO)
- `src/App.tsx` — add 12 new routes
- `index.html` — Plausible script tag
- All `src/i18n/locales/{en,ro}/home.json` — meta title trim, +4 FAQs, founder bio, testimonials, score strip, before/after
- `src/i18n/locales/{en,ro}/about.json` — testimonials + extended bio
- `src/i18n/locales/{en,ro}/resources.json` — 6 new article entries + RO native pass
- `src/i18n/locales/ro/*.json` — language polish across all locale files
- `public/sitemap.xml` — add 12 new URLs
- `src/assets/card-ai-non-technical.webp` & `card-assessment.webp` — re-encoded smaller

## Approach details

- **Testimonials component**: editorial pull-quote style. Big italic display quote, mono attribution (NAME — ROLE), 3-up grid on desktop, stacked on mobile. Cream paper variant section.
- **FounderBio**: 2-col on desktop (photo left 40%, text right 60%), stacked mobile. Photo on `bg-paper` with subtle ink border. LinkedIn button in red.
- **Score strip**: full-width thin band (paper bg), single row: kicker + "2-minute AI maturity test, instant score & roadmap" + button. Mobile stacks.
- **BeforeAfterWorkflow**: split layout, Before column muted/grey, After column accent red. Time stamps in big mono. Process steps as numbered list.
- **CaseStudyTiles**: 5 tiles in horizontal scroll on mobile, 5-col grid on desktop. Each tile: sector chip (mono red), big number (display font), one-line outcome.
- **Programmes dropdown**: hover on desktop, click on mobile. Same Wired aesthetic as nav (mono uppercase, sharp corners, no shadows).
- **Analytics**: `trackEvent(name, props?)` calls `window.plausible?.(name, {props})`. Wrap CTAs in onClick handlers. Defined events: `cta_buy_training`, `cta_book_call`, `cta_take_score`, `cta_install_hermes`, `cta_funding_call`.
- **Resource stubs**: 250–350 word each, real outline (intro / 3 numbered sections / takeaway / CTA), I'll write first drafts in EN + RO. You can rewrite later.

## Confirm before I build

Two things to confirm:

1. **Plausible analytics** — you have an account, or want me to use the free no-account-needed setup? If no account, I'll add a placeholder `data-domain` you fill in later.
2. **Resource article copy** — write first drafts myself (you edit later) or you want to write them yourself and I just scaffold empty pages?

If both default (yes account-later, drafts-by-me), reply "go" and I'll build everything in one round.
