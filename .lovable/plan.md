
## Goal
Construiesc un calculator interactiv **AI Adoption Score** (10 întrebări, scoring ponderat, gap analysis, priority actions) integrat în designul nostru editorial Wired (paper/ink/red, DM Serif + JetBrains Mono). Folosit ca **lead magnet**: rezultatul scorului e gated de email; după dezvăluire, două CTA-uri — "Book free call" + "Vezi cursul AI for Work".

## Architecture

### New page — `/ai-adoption-score`
Componentă React full-stack (nu HTML embed). Logica calculatorului portată 1:1 din fișierul tău: aceleași 10 întrebări, aceleași ponderi (Strategy 30%, Tools 15%, Adoption 35%, Impact 20%), aceleași 4 ranks (Leader/Advanced/Builder/Starter), aceleași priority actions per categorie slabă.

**Flux pe pagină:**
1. **Hero** — banner editorial: "How AI-ready is your team? 10 questions. 2 minutes." + stats row (92% / 1% / 75% / 57% — cu surse) în stil mono labels.
2. **Calculator** (state local React):
   - Bară de progres roșie sus
   - O întrebare per ecran cu categorie + 4 opțiuni (click → auto-advance, fade transition)
   - Buton "Înapoi" discret
3. **Gate de email** (înainte de dezvăluirea scorului):
   - Headline: "Scorul tău e gata. Lasă emailul ca să-l vezi."
   - Câmp email + checkbox GDPR + buton "Vezi scorul →"
   - Validare zod (trim, email, max 255)
   - Submit → salvează în Lovable Cloud → afișează rezultate
4. **Rezultate** (după email):
   - Scor mare (0–100) + rank badge colorat
   - Gap Analysis: 4 bare orizontale per categorie cu scor + pondere
   - Priority Actions pentru categoria cea mai slabă (3 acțiuni)
   - Recommended format (ex: "4-session enablement sprint")
   - **Două CTA-uri side-by-side:**
     - Primary roșu: "Book a free call to discuss results →" (link la `/assessment#book`)
     - Secondary: "See the AI for Work cohort →" (link la `/programmes/ai-for-non-technical-people`)
   - Link mic: "Retake assessment ↺"
5. **Methodology section** (paper variant) — tabelul cu ponderi + tabelul cu rank bands (din designul tău), redate în stil editorial.
6. **Closing CTA section** — reuses `<CTASection>`.

### Backend — Lovable Cloud
Tabel nou `ai_score_submissions`:
- `id` uuid pk
- `email` text (validat)
- `score` int
- `rank` text
- `category_scores` jsonb (strategy/tools/adoption/impact)
- `weakest_category` text
- `consent_marketing` boolean
- `created_at` timestamptz

RLS: insert public (oricine poate trimite), select doar pentru rolul admin (rămâne pentru viitor — momentan doar colectăm). Fără autentificare cerută utilizatorului.

### Sitewide hooks (lead magnet, multe puncte de intrare)
Adaug butoane "Take the AI Adoption Score" în:
- **Homepage** — un bloc nou între hero card deck și prima secțiune existentă: "2 minutes. 10 questions. Know where you stand." + buton roșu mare.
- **Hero card deck** — adaug un card nou "AI Adoption Score" (folosesc un asset existent `card-eye` sau `card-bubble`) lângă AI Adoption Call.
- **Navbar** — link nou "AI Score" (sub butonul AI Adoption Call sau ca pill secundar).
- **Footer** — link în coloana resurse.
- **Assessment page** (`/assessment`) — adaug un mic bloc: "Prefer to start with a 2-min self-test? Take the AI Adoption Score →".
- **AIForNonTechnical** — bloc înainte de booking: "Not sure if you need this? Take the score first."
- **Resources** — listare ca tool.

### Files to create / modify
**New:**
- `src/pages/AIAdoptionScore.tsx` — pagina + calculator
- `src/lib/aiScoreData.ts` — întrebări, ponderi, ranks, priority actions (sursă unică)
- `src/components/AIScoreCTA.tsx` — bloc reutilizabil "Take the AI Adoption Score" (folosit pe homepage, assessment, AI for Work, etc.)
- Migration SQL — tabel `ai_score_submissions` + RLS

**Modified:**
- `src/App.tsx` — rută `/ai-adoption-score` (lazy)
- `src/components/Navbar.tsx` — link nou
- `src/components/Footer.tsx` — link nou
- `src/components/HeroCardDeck.tsx` — card nou
- `src/pages/Index.tsx` — bloc AIScoreCTA
- `src/pages/Assessment.tsx` — bloc AIScoreCTA mic
- `src/pages/AIForNonTechnical.tsx` — bloc AIScoreCTA
- `src/pages/Resources.tsx` — listare ca tool
- `public/sitemap.xml` — URL nou

## Design notes
- 100% în sistemul nostru: `bg-paper`, `text-ink`, `text-red`, `font-display` (DM Serif), `font-mono` uppercase tracking pe labels, borduri 2px `border-ink/15`.
- Calculatorul în secțiune `paper` (cremă) pentru contrast cu restul site-ului dark.
- Animații cu Framer Motion (fade între întrebări) — coerent cu `PageTransition`.
- Bare gap analysis: tracking colorat per categorie folosind tokens existenți (red, blue, accent).
- Mobile-first: o întrebare pe ecran ocupă tot viewportul, opțiuni stivuite vertical.

## Marketing copy (carlig tare)
- Hero: *"92% of companies invest in AI. Only 1% feel mature. Where do you actually stand?"*
- Pre-email gate: *"Your score is ready. Drop your email to see your maturity level, gap analysis, and the next move that actually matters."*
- Post-score CTA: *"Want help closing the gaps? Book a free call to walk through your results — or jump straight into the cohort built for non-technical teams."*

## Out of scope
- NU modific alte pagini (cum ai cerut explicit) decât pentru a adăuga butonul/cardul de intrare la calculator.
- NU trimit email automat cu rezultatul (doar salvăm în DB) — pot adăuga ulterior dacă vrei.
- NU adaug autentificare.
