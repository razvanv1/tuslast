
## Pagina Funding — refactor pentru a vinde structurarea de finanțare

### Diagnoză

Pagina actuală (`src/pages/Funding.tsx` + `funding.json`) are 2 probleme mari:

1. **Nu e legată narativ de Programmes.** Vizitatorul nu înțelege că Funding e *continuarea logică* a training-ului: în programe câștigi knowledge și prototipuri → ca să le implementezi în producție (agenți, tooling, integrări, licențe) ai nevoie de bani → aici structurăm banii ăia. Acum pagina pare un serviciu standalone, deconectat.

2. **CTA-urile sunt generice și greșite.** Peste tot scrie "AI Adoption Call →" cu link spre `/assessment`. Asta e CTA-ul pentru maturity assessment, nu pentru funding. Pe pagina de finanțare oamenii vor să sune ca să afle: *"pentru ce mă calific eu concret și cât pot lua?"* — ăsta e hook-ul, nu un assessment generic.

### Ce schimbăm

**1. Hero — refocusare pe puntea Training → Implementation**
- Tag rămâne "MDF, Funding & Grants"
- Title nou: "You learned what to build. Now fund building it."
- Subtitle care explică explicit puntea: programele dau knowledge + prototipuri; producția (agenți, integrări, licențe Copilot/Azure, dev work) costă bani reali → MDF-urile vendor și granturile UE există tocmai pentru asta, majoritatea companiilor se califică, puțini știu cum să aplice
- CTA primary: **"Book a funding call →"** → link nou `/funding` form sau direct mailto/calendar
- CTA secondary: **"See funding instruments ↓"** → anchor către secțiunea instruments
- Note: "Free 30-min scoping call · Written shortlist in 5 business days · No commitment"

**2. Secțiune nouă: "From training to production" (puntea explicită)**
Inserată imediat după Hero, înainte de Intro. Layout: 3 carduri orizontale care arată fluxul:
- `01 Training` → "Your team learns to prototype with AI on real workflows" (link spre /programmes)
- `02 The gap` → "Prototypes need budget to become production: agents, integrations, Copilot/Azure licenses, dev work, change management"
- `03 Funding` → "Vendor MDF, AWS co-sell and EU grants exist to fund exactly this. We structure your program to qualify."

Asta e secțiunea care leagă tot. Fără ea, pagina pare random.

**3. Intro — păstrăm structura, ajustăm o frază**
Adăugăm o propoziție în intro care spune explicit: *"This is the step that comes after the training. The knowledge is yours; the implementation needs budget."*

**4. Instruments — păstrăm cardurile, adăugăm `coverage` la fiecare**
Sub `body`, adăugăm o linie nouă `coverage` (ex: "Typically covers: Copilot licenses, Azure AI consumption, partner-led adoption work"). Concret, nu generic.

**5. CTA-uri reformulate complet**
Toate CTA-urile actuale spun "AI Adoption Call → /assessment". Le schimbăm în:
- Hero primary + Final CTA: **"Book a funding call →"**
- Toate cu același target: rămâne `/assessment` ca fallback (acolo se face oricum scoping call), DAR label-ul e explicit despre funding, nu despre AI adoption generic
- Note-urile vorbesc despre "shortlist scris în 5 zile", "verificăm pentru ce te califici", nu despre "maturity score"

**6. Eliminare AIScoreCTA de pe pagină**
Acum apare `<AIScoreCTA />` înainte de CTA-ul final. Pe pagina de funding NU are ce căuta — vizitatorul e aici pentru bani, nu pentru un quiz de maturitate. Îl scoatem.

**7. Final CTA — reformulare**
- Title: "Find out what you qualify for."
- Subtitle: "30-min call to map your vendor relationships and EU eligibility. Written shortlist of instruments + estimated coverage within 5 business days."
- Note: "Free · No commitment · Shortlist in 5 business days"

### Fișiere modificate

- `src/i18n/locales/en/funding.json` — rescriere hero, adăugare secțiune `bridge` (3 pași), ajustare intro, adăugare `coverage` pe instruments, reformulare CTA-uri
- `src/i18n/locales/ro/funding.json` — același set, RO natural
- `src/pages/Funding.tsx` — adăugare secțiune nouă "From training to production" după Hero, adăugare `coverage` pe carduri, eliminare `<AIScoreCTA />`, ajustare CTA labels

### Detaliu tehnic

Secțiunea "From training to production" va fi un `<Section>` (dark, default) cu grid 3 coloane (md:grid-cols-3, gap-px, bg-paper/10) — același pattern ca grid-ul de Instruments dar pe variant dark. Fiecare card: număr mare în display (`01`, `02`, `03`) în roșu pentru pași 1+3, în paper/60 pentru pasul 2 (the gap), titlu display, body. Cardul 1 are link spre `/programmes` în footer (mono uppercase, hover red). Cardul 2 e neutral — descrie problema. Cardul 3 e activ — descrie soluția.

Coverage line pe instruments: sub `body`, înainte de `border-t`, o linie `font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50` cu prefix "Covers:" în roșu.

Restul layout-ului rămâne neschimbat.
