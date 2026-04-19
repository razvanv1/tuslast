
## Plan: Rebuild /resources around what's actually real

Cut the teaser grid entirely. Replace with real, useful content blocks that already exist or can be assembled now — no "coming soon" placeholders.

### Remove
- The 6-card "Library" grid (fake teaser, links go nowhere usable)
- The `library` keys from `resources.json` (EN + RO)

### Keep (in this order)
1. Hero
2. AI Score CTA (yours, real)
3. Playbook featured card (yours, real, downloadable)
4. Final CTA (AI Adoption Call, real)

### Add: 2 new real sections between Playbook and Final CTA

**Section A — "Upcoming events & where to meet us"**
Editorial list, not a grid. Each row: date (mono) · event name (display) · 1-line context · link (Register / Details).
Seed with 1 real entry you mentioned:
- May 2026 · Lovable Founder Series · [your context] · Register link
Plus 1–2 placeholder rows you can edit easily in the locale file (RO + EN). Empty-state message if list is empty: "No public events scheduled. Book an AI Adoption Call instead."

**Section B — "AI on the cheap · Credits, free tiers, open source"**
A curated reference list — the kind of thing people actually bookmark. Editorial 2-column layout, grouped by category. Each item: name · 1-line what-you-get · link.

Categories + seed entries (you edit/extend later):
- **Vendor credits** — Microsoft for Startups (Azure + OpenAI credits), Google for Startups (Cloud + Gemini), AWS Activate, Anthropic Startups
- **Free tiers worth using** — Lovable AI gateway (Gemini Flash free window), Groq (fast inference free tier), Mistral (free API tier), Together AI (free credits)
- **Open source models / tools** — Llama 3, Mistral, Qwen, Whisper (speech), Ollama (run local), LM Studio
- **EU funding routes (2026)** — Digital Europe, Horizon Europe AI calls, national digitalization grants (RO: PNRR, POCIDIF)

All copy in EN + RO, real links, no placeholders pretending to be articles.

### Files to change
- `src/pages/Resources.tsx` — remove library grid, add 2 new sections (Events list + Cheap-AI reference list)
- `src/i18n/locales/en/resources.json` — drop `library`, add `events` + `cheapAi` keys
- `src/i18n/locales/ro/resources.json` — same, RO native

### Result
Page flow: Hero → Score CTA → Playbook (real download) → **Events (real, dated)** → **Cheap AI reference (real links)** → Final CTA. Everything on the page is usable today. Zero teasing.

### One thing I need from you before building
What's the real Lovable Founder Series May 2026 detail — is it a date + city + registration URL you have, or should I leave it as an editable placeholder row you fill in the locale file after?
