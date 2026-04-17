
## Overview
The user has 4 real programs in the funnel HTML — they should replace what's currently displayed. The "AI for Non-Techies" program needs renaming to **"AI for Non-Technical People"** (to match the ai-trainings.lovable.app site). Anything related to "IT Assist" branding (the partner) stays as a delivery credit on About — but the standalone **"For IT & Digital"** audience page should be removed (user said "scoate ce e legat de IT assist"). The full ai-trainings.lovable.app content for "AI for Non-Technical People" gets integrated as a dedicated detailed program page.

## The 4 real programs (from funnel HTML)

1. **AI Adoption Gap Assessment** — Free, 1 working session, written report in 5 business days. Step 1 / entry point.
2. **AI for Non-Technical People** — Core structured adoption program. Modular: Discovery (1×2h), Short Sprint (2–3 sessions), Full Program (4+ sessions). Built on existing tools.
3. **Events & Keynotes** — Keynote+Q&A (90 min, ≤500), Hands-on workshop (½/full day, 15–50), Internal hackathon (1–2 days).
4. **Funding Structuring** — MS MDF / AWS partner / EU digital grants. Audit → identify → restructure → apply → reimburse.

## Changes

### 1. Programmes.tsx — full rewrite
Replace 4 program cards with the 4 real programs above using the exact copy + meta tags + outputs from the HTML (Free / 1 session / 5 days; Modular / cross-functional / on-site or hybrid; 90 min – 2 days / 15–500 people; Custom / per qualifying instrument). FAQ section gets rewritten using funnel content (EU AI Act Article 4 obligation, vendor MDF availability, etc).

### 2. New page: `src/pages/AIForNonTechnical.tsx` (route `/programmes/ai-for-non-technical-people`)
Full editorial integration of ai-trainings.lovable.app content:
- Hero: "Your team is already using AI. You just don't control how."
- The Challenge: EU AI Act compliance, inconsistent adoption, isolated time savings, data leak risk, audit gaps
- Objective: Build first working cohort
- Who it's for: Operations / Finance / HR / Customer support / Engineering / Team leads
- Modular delivery: Discovery / Short Sprint / Full Program
- 4 sessions detail (Where AI Fits / Building First Workflows / Team Adoption & Champions / Results & 30-Day Plan)
- After the program: deliverables list
- What's included (incl. "AI Vendor & License Audit included")
- Program leadership: Răzvan Vâlceanu, **delivered in partnership with IT Assist** (this is the only IT Assist mention preserved)

### 3. New page: `src/pages/Funding.tsx` (route `/funding`)
Funnel page 4 verbatim: 3 funding instruments + 5-step "How we work" + result section.

### 4. New page: `src/pages/Events.tsx` (route `/events`)
Funnel page 3: 3 formats, includes list, scoped pricing.

### 5. Remove `src/pages/ForIT.tsx`
- Delete file
- Remove route from `App.tsx`
- Remove "IT & Digital" link from `Navbar.tsx` and `Footer.tsx`
- Remove "I lead IT / Digital" link from `Index.tsx` audience selector (replace with "I run a business unit" or just keep two: Operations + HR)

### 6. Homepage `src/pages/Index.tsx` updates
- Featured stories grid: replace current entries with the 4 real programs (Assessment / AI for Non-Technical People / Events / Funding) linking to respective pages.
- Audience selector: keep Operations + HR only (drop IT).

### 7. ShuffleDeck `src/components/ShuffleDeck.tsx`
Replace card labels with the 4 real programs + 3 mechanism cards:
- AI Adoption Gap Assessment → /assessment
- AI for Non-Technical People → /programmes/ai-for-non-technical-people
- Events & Keynotes → /events
- Funding Structuring → /funding
- (Keep mechanism cards: Unfreeze / Redesign / Refreeze → /programmes)

### 8. HeroCardDeck `src/components/HeroCardDeck.tsx`
Same label updates as ShuffleDeck.

### 9. Navbar + Footer
- Navbar: Operations / HR & L&D / Programmes / Events / Funding / About
- Footer: same plus Assessment

### 10. Global rename
Search & replace any remaining "AI for Non-Techies" → "AI for Non-Technical People" across all pages (ForOperations, ForHR, About, Assessment, etc).

## Files touched
- New: `src/pages/AIForNonTechnical.tsx`, `src/pages/Events.tsx`, `src/pages/Funding.tsx`
- Deleted: `src/pages/ForIT.tsx`
- Edited: `src/App.tsx`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/ShuffleDeck.tsx`, `src/components/HeroCardDeck.tsx`, `src/pages/Index.tsx`, `src/pages/Programmes.tsx`, `src/pages/ForOperations.tsx`, `src/pages/ForHR.tsx`, `src/pages/About.tsx`, `src/pages/Assessment.tsx`

All copy comes 1-to-1 from your HTML files — no fabricated text.
