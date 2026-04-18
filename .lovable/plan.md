
## Homepage — Partners endorsement + 2 pricing CTAs

### Ce se schimbă pe `src/pages/Index.tsx`

Homepage actuală are aceste secțiuni majore: Hero → ShuffleDeck → Stats → Pattern → Premise (quote) → Audience → Ladder (3 programe) → Mechanism → Credibility → FinalCTA + FAQ. Trebuie să adăugăm două lucruri noi, integrate natural, fără să rupem ritmul editorial:

**A. Bandă de Parteneri (endorsement) — sub Credibility, înainte de FinalCTA**

De ce aici: Credibility deja spune "the receipts" (1.400+ trained, founder, before/after). Banda de parteneri e următorul tier de credibilitate — *external endorsement*. Ordinea naturală: dovezi proprii → validare externă → CTA final.

Layout (pattern deja folosit pe `/events#partners`, dar adaptat pentru homepage):
- Variant: `paper` (cream) ca să spargă vizual succesiunea de secțiuni dark
- Kicker mono uppercase: "Official partners · External endorsement"
- Title display medie: "Backed by the platforms *we teach.*" / RO: "Susținut de platformele *pe care le predăm.*"
- Sub-line scurtă (1 propoziție): "We are official Lovable Ambassador and Hermes Agent Partner. The tools we train teams on, we partner with directly."
- 2 logo-uri side-by-side, mari, centrate, pe carduri `bg-paper` cu border subtle (logos sunt deja dark, deci pe paper merg). Sub fiecare logo: rolul în mono uppercase ("Lovable Ambassador" / "Hermes Agent Partner")
- Sub bandă, link discret mono → `/events#partners` "See partner perks at our events →"

**B. Pricing CTAs — secțiune nouă "Start now" cu 2 carduri de preț**

Plasament: între Ladder și Mechanism. De ce: Ladder enumeră cele 3 programe (Core / Events / Funding) ca *catalog descriptiv*. Imediat după catalog e momentul firesc să arăți **două puncte concrete de intrare cu preț**, înainte de a continua narrativ cu mechanism/credibility. E pattern-ul "catalog → buy now → continue story".

Layout:
- Variant: `darker` (mai întunecat decât default), pentru contrast cu Ladder (paper sau dark) și cu Mechanism care urmează
- Kicker: "Start now · Two entry points"
- Title: "Skip the call. *Start today.*" / RO: "Sari peste call. *Începe azi.*"
- Sub-line: "Two productized entry points with public pricing. Pay, get scheduled, start. Everything else still routes through the free AI Adoption Call."
- Grid 2 coloane (md:grid-cols-2), gap-px pe `bg-paper/15`, fiecare card `bg-background p-10`:

  **Card 1 — AI for Work training**
  - Tag mono: "Training · Per person"
  - Price block mare: "from €600" (display, big), apoi "/ participant" mic mono
  - Title: "AI for Non-Technical People"
  - 3 bullet-uri scurte: "Modular: Discovery / Sprint / Full" · "Built on tools you already pay for" · "EU AI Act Article 4 ready"
  - Primary CTA buton roșu: "Buy AI for Work →" → `/programmes/ai-for-non-technical-people`
  - Secondary text link mono: "See programme details →"

  **Card 2 — Hermes Agent install**
  - Tag mono: "Personal AI assistant · Per install"
  - Price block: "from €497" + "/ install" mic
  - Title: "Hermes Agent — personal install"
  - 3 bullet-uri: "Autonomous AI assistant configured for your workflow" · "Setup, training, handover" · "Official Hermes Agent Partner"
  - Primary CTA buton roșu: "Install Hermes →" → `/hermes`
  - Secondary text link mono: "See what Hermes does →"

- Sub grid, o linie mono fină centrată: "Need to scope first? → AI Adoption Call (free, 30 min)" cu link spre `/assessment` — ca să nu pierdem oamenii care nu sunt încă gata să cumpere.

### Fișiere modificate

1. `src/i18n/locales/en/home.json` — adaugă blocuri `partners` și `pricing`
2. `src/i18n/locales/ro/home.json` — același set, RO natural
3. `src/pages/Index.tsx` — render 2 secțiuni noi în pozițiile descrise; importă `partner-lovable.png` și `partner-hermes.png` din `src/assets/`

### Detaliu tehnic

- Folosim `<Section variant="paper">` pentru parteneri (contrast cu vecinii dark) și `<Section variant="darker">` pentru pricing (contrast cu Ladder).
- Logo-uri: `<img loading="lazy" decoding="async">` cu `h-12 md:h-14 w-auto object-contain`, în carduri `bg-paper` cu padding generos. Pe paper-section logo-urile dark se văd direct fără card alb suplimentar — folosim doar border `border-ink/10` și padding.
- Pricing cards: pattern editorial, nu SaaS-style — preț în `font-display text-5xl md:text-6xl text-paper`, "from" mic deasupra în mono uppercase roșu, "/participant" sau "/install" mic mono sub preț. Bullet-uri cu separator `border-t border-paper/10` între ele, fără bullet-points tipice (estetica Wired).
- CTA primar: pattern existent — `bg-red text-paper px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink`. Secondary: text link mono cu hover red.
- Navigare: `Link` din `@/components/LocalizedLink` (ca să meargă atât EN cât și RO automat).
- Anchor: secțiunea pricing primește `id="pricing"` ca să putem face link din alte locuri ulterior.

### Copy direction (concis)

EN partners:
- Kicker: "Official partners · External endorsement"
- Title: "Backed by the platforms *we teach.*"
- Body: "We are official Lovable Ambassador and Hermes Agent Partner. The platforms we train teams on, we partner with directly — which means perks, free credits, and access for the people we train."

RO partners:
- Kicker: "Parteneri oficiali · Validare externă"
- Title: "Susținut de platformele *pe care le predăm.*"
- Body: "Suntem Lovable Ambassador oficial și Hermes Agent Partner. Platformele pe care formăm echipele sunt și partenerii noștri direcți — ceea ce înseamnă perks, credits gratuite și acces pentru oamenii pe care îi pregătim."

EN pricing:
- Kicker: "Start now · Two entry points"
- Title: "Skip the call. *Start today.*"
- Body: "Two productized entry points with public pricing. Pay, get scheduled, start. Everything else still routes through the free AI Adoption Call."
- Card 1 footer note: "Cohort minimum applies. Volume pricing on request."
- Card 2 footer note: "Includes setup, configuration, and 1 handover session."
- Bottom line: "Need to scope first? → AI Adoption Call (free, 30 min)"

RO pricing:
- Kicker: "Începe acum · Două puncte de intrare"
- Title: "Sari peste call. *Începe azi.*"
- Body: "Două intrări cu preț public. Plătești, te programezi, începi. Restul rămâne pe Discuția AI Adoption (gratuită)."
- Card 1 footer: "Minim de cohortă aplicabil. Preț de volum la cerere."
- Card 2 footer: "Include setup, configurare și 1 sesiune de handover."
- Bottom: "Vrei să faci mai întâi scoping? → Discuție AI Adoption (gratuit, 30 min)"

### Ordinea finală a homepage-ului

Hero → Shuffle → Stats → Pattern → Premise → Audience → **Ladder** → **🆕 Pricing (2 carduri)** → Mechanism → Credibility → **🆕 Partners endorsement** → FinalCTA → FAQ
