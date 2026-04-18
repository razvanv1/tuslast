
## Funding page — extinderea Instruments + bridge invers spre Events

### Ce se schimbă

**1. De la 3 la 4 instrumente — adăugare Google Cloud**
Card nou între AWS și EU grants:
- **Google Cloud partner programs & startup credits**
- Audience: "For Google Cloud partners, Workspace rollouts, and AI-first scaleups"
- Body: Google alocă fonduri prin Google Cloud Partner Advantage și programe de co-marketing pentru adopția Vertex AI, Gemini Enterprise și Workspace. Pentru startup-uri și scaleup-uri, Google for Startups Cloud Program oferă până la $200k credits Google Cloud + acces Gemini.
- Coverage: "Vertex AI & Gemini API consumption, Workspace + Gemini Enterprise licenses, partner-led delivery, MVP build credits"
- Tag: "Partner or startup track"

**2. Refactor toate cele 4 carduri — info mai completă, mai vandabilă**

- **Microsoft MDF & co-sell** — adăugăm mențiune Microsoft for Startups Founders Hub ($150k Azure credits + Copilot/GitHub access pentru startup-uri/scaleup-uri eligibile). Body devine: parteneri = MDF; startup/scaleup = Founders Hub credits. Le facilităm accesul la ambele.
- **AWS partner programs** — adăugăm AWS Activate (până la $100k credits pentru startup-uri prin VC/accelerator/standalone). Body: parteneri APN = co-sell; startup/scaleup = Activate credits + Bedrock access. Le facilităm accesul la ambele.
- **Google Cloud** — descris mai sus, include și partner track și startup track.
- **EU digital grants** — adăugăm explicit **Erasmus+** (skills, mobility, training cohorts) ca instrument complementar Digital Europe Programme. Coverage extins cu "MVP build & validation, upskilling cohorts under Erasmus+, Digital Europe AI projects".

**3. CTA per card — buton "Book a call" pe fiecare instrument**
Acum cardurile sunt statice. Adăugăm pe fiecare card, în footer, un buton mic stilat (font-mono, uppercase, hover red) care duce la `/assessment` cu label-ul "Book a call about this →" (RO: "Programează un call pentru asta →"). 4 carduri × 4 butoane = 4 entry points.

**4. Bridge invers spre Events (după secțiunea Result, înainte de Quote)**
Bloc nou, mirror al celui de pe pagina Events care duce la Funding. Layout 8/4:
- Kicker: "Before you fund it"
- Title: "Want to see what a live session looks like before you fund one?"
- Body: Vino într-o sesiune live de prototipare ca să vezi exact ce primești înainte să structurezi finanțarea.
- CTA buton spre `/events`: "See live sessions →"

**5. Update intro/instruments titles**
- "Three sources" → **"Four sources"** în titlul secțiunii instruments
- Subtitle rămâne: "Most companies have access to at least one."

### Fișiere modificate

- `src/i18n/locales/en/funding.json` — adăugare item 4 (Google) în `instruments.items`, refactor body+coverage pentru toate 4, schimbare title "Three" → "Four", adăugare `instruments.cardCta`, adăugare bloc nou `eventsBridge`
- `src/i18n/locales/ro/funding.json` — același set, RO natural
- `src/pages/Funding.tsx` — adăugare buton CTA în footer-ul fiecărui card de instrument, adăugare secțiune `eventsBridge` între Result și Quote

### Detaliu tehnic

**Buton card instrument**: în footer-ul fiecărui card (după coverage, înainte/lângă tag), un `<Link to="/assessment">` stilat ca buton mic — `inline-flex items-center font-mono text-[10px] uppercase tracking-[0.25em] text-red hover:text-ink border-t border-ink/15 pt-4 mt-4 w-full`. Tag-ul existent rămâne dar mutat sus, lângă audience, ca badge.

**Grid instruments**: rămâne `md:grid-cols-3` actual? Cu 4 carduri trecem la `md:grid-cols-2 lg:grid-cols-4` ca toate să încapă pe rând pe desktop, 2x2 pe tablet, stack pe mobile.

**Bridge Events section**: copy-paste pattern din `Events.tsx` (secțiunea funding bridge), inversat — link spre `/events` în loc de `/funding`. Stil identic pentru consistență vizuală.

### Texte cheie (draft)

EN:
- Google card body: "Google allocates funds through Google Cloud Partner Advantage for Vertex AI, Gemini Enterprise and Workspace adoption. For startups and scaleups, Google for Startups Cloud Program offers up to $200k in Google Cloud credits plus Gemini access. We facilitate access to both tracks."
- Microsoft addendum: "...For startups and scaleups, Microsoft for Startups Founders Hub provides up to $150k in Azure credits plus Copilot and GitHub access. We facilitate access to both partner and startup tracks."
- AWS addendum: "...For startups and scaleups, AWS Activate provides up to $100k in credits plus Bedrock access. We facilitate access to both APN and Activate tracks."
- EU addendum: "Includes Digital Europe Programme, Horizon Europe digital pillars, and Erasmus+ for upskilling cohorts and mobility. Coverage extends to MVP build & validation work."

RO: traduceri naturale păstrând termenii proprii (Founders Hub, Activate, Vertex AI, Gemini, Erasmus+).
