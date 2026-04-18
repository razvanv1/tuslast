

## Partnerships block on Events + Hermes — credibility & magnetism

### Goal
Anchor Events page on two trust signals (Lovable Ambassador + Hermes Agent partner) and explicitly tell the audience these events are **free, practical, no-PowerPoint, with merch + free credits + perks**. Cross-link Events ↔ Hermes. Add Hermes logo and yellow banner to Hermes page hero.

### Assets to copy from uploads to project
- `user-uploads://Lovable_Logo_Wordmark_Black.png` → `src/assets/partner-lovable.png`
- `user-uploads://images.png` (Hermes Agent logo) → `src/assets/partner-hermes.png`
- `user-uploads://hermes-agent-banner.avif` → `src/assets/banner-hermes.avif`

### Changes per file

**1. `src/pages/Events.tsx` — new central "Partners & what attendees get" section**
Inserted right after the Hero (before `intro` Section), so it's the second thing visitors see. Layout:
- Top row: kicker "In partnership with" centered, then the **two logos side-by-side, large and central** (Lovable wordmark + Hermes Agent), white card on dark bg, with subtle separator. Below each logo: one-line role ("Lovable Ambassador" / "Hermes Agent Partner").
- Bottom row: 4-column grid of perks for attendees, each with a number and short label:
  - `01 Free for participants` — "All public events are free. No tickets, no upsell."
  - `02 Practical, no slides` — "Live builds on real workflows. Zero generic decks, zero PowerPoint."
  - `03 Merch & free credits` — "Lovable + Hermes Agent perks: free platform credits, merch, swag."
  - `04 International, local` — "We bring international speakers and standards into local rooms."
- Anchor id `#partners` so we can link to it from Hermes.

**2. `src/pages/Hermes.tsx` — banner + partnership section + back-link to Events**
- Add `banner` prop on `PageHero` using `banner-hermes.avif` (yellow Hermes Agent banner).
- New section right after the terminal/stats block: small kicker "We host Hermes events", title "See Hermes Agent live in person.", short body explaining we run free, practical Hermes Agent demos & build sessions inside our Events programme, with a CTA button → `/events#partners` "See live events →".
- Show Hermes logo (small, paper card) inside this section header for brand recognition.

**3. `src/i18n/locales/en/events.json` + `src/i18n/locales/ro/events.json`**
Add a new top-level `partners` block:
```
partners: {
  kicker, titleStart, titleEm,
  lovable: { role, name },
  hermes: { role, name },
  perks: [4 items with num/title/body],
  hermesLinkText, hermesLinkTo
}
```

**4. `src/i18n/locales/en/hermes.json` + `src/i18n/locales/ro/hermes.json`**
Add `eventsBridge` block: `{ kicker, titleStart, titleEm, body, cta }` for the new "See Hermes live at our events" section, plus `hero.bannerAlt` for the new yellow banner.

### Copy direction (concise, credibility-first)

EN Events partners section:
- Kicker: "In partnership with"
- Title: "International standards. *Local rooms.*"
- Lovable role: "Lovable Ambassador — official partner for AI app prototyping"
- Hermes role: "Hermes Agent Partner — official partner for autonomous AI agents"
- Subline under perks grid: "Public events are free. The condition is simple: practical only — no generic talks, no slideware, no theory."

RO Events:
- Kicker: "În parteneriat cu"
- Title: "Standarde internaționale. *Săli locale.*"
- Lovable rol: "Lovable Ambassador — partener oficial pentru prototipare AI"
- Hermes rol: "Hermes Agent Partner — partener oficial pentru agenți AI autonomi"
- Subline: "Evenimentele publice sunt gratuite. Condiția: doar practic — fără prezentări generale, fără slide-uri, fără teorie."

EN Hermes bridge:
- "See Hermes Agent *live at our events.*"
- Body: "We bring Hermes Agent into our public events — free, practical, no slides. Watch a live build, ask questions, and walk out with a working prototype and free credits."
- CTA: "See live events →" → `/events#partners`

RO Hermes bridge:
- "Vezi Hermes Agent *live la evenimentele noastre.*"
- Body: "Aducem Hermes Agent în evenimentele noastre publice — gratuite, practice, fără slide-uri. Vezi un build live, pune întrebări, pleci cu un prototip și credits gratuite."
- CTA: "Vezi evenimentele live →"

### Visual / layout notes
- Logos rendered on a `bg-paper` card (the logos are dark on white) inside the dark Events section, so they pop. Side-by-side on desktop (`md:grid-cols-2`), stacked on mobile, separated by a vertical paper/15 divider.
- Logos use `<img>` with explicit width/height for CLS, `loading="lazy"` (below fold ok for partners block? It's near hero — use `eager`).
- Hermes hero banner: same `PageHero banner` pattern already used on Events/Funding/etc — full-width, paper bg. The yellow banner becomes the visual anchor.
- Hermes logo small inline in the bridge section header (h-8) for instant recognition.

### Files modified
- `src/pages/Events.tsx`
- `src/pages/Hermes.tsx`
- `src/i18n/locales/en/events.json`
- `src/i18n/locales/ro/events.json`
- `src/i18n/locales/en/hermes.json`
- `src/i18n/locales/ro/hermes.json`
- 3 new assets copied into `src/assets/`

