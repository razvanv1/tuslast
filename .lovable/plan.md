

## Plan: Audit + rewrite all SEO/GEO/AEO meta across the site

I'll do a coherent, persuasive rewrite of titles, meta descriptions, OG/Twitter, keywords, and JSON-LD across **every page in both EN and RO**, matching the voice you set on the homepage meta:

> *"AI Training, Workshops and Events for AI adoption. We redesign workflows so your team actually uses the AI tools your company is already paying for."*

That's the master tone: concrete, second-person, names the actual problem, no jargon. I'll apply it everywhere.

### Audit findings (what's wrong now)

1. **`index.html` is hardcoded EN-only and stale** — title/description in `<head>` are static and override the homepage's React `<SEO>` for first paint and crawlers that don't run JS. They also don't match what `home.json` says. Two competing sources of truth.
2. **Tone drift across pages** — some titles use a dash format (`AI Adoption Call - free 30-minute…`), others use a comma (`AI for Non-Technical People, structured…`), some are description-style, some are feature-list style. No consistent shape.
3. **Descriptions are mixed quality** — `funding`, `programmes`, `score`, `assessment`, `events` are decent. `about`, `resources`, `hermes` are flat. Legal/payment/404 are bare-bones.
4. **Keywords drift** — homepage missing "Gemini Enterprise", funding has it, programmes doesn't. No coherent keyword cluster strategy.
5. **GEO partial** — `geo.region=RO`, `ICBM` are set but no `geo.position`, no localized `geo.placename` for RO version (still "Bucharest" in English on RO pages — fine but could add `București`).
6. **6 resource articles** each have their own SEO block — need same treatment.
7. **OG image** — homepage has a real one, all other pages fall back to a generic `12b5078b-…` OG image. Acceptable for now, but I'll keep the system intact.

### What I'll do

#### A) Define one consistent title formula
**Format**: `{Page promise} · {Concrete proof or scope}` — no dashes, no "The Unlearning School" suffix (SEO.tsx already appends it).

Examples (EN → RO):
- Home: `AI training that gets your team using the tools you already pay for` / `Training AI care îți face echipa să folosească tool-urile pe care deja le plătești`
- Programmes: `AI for non-technical teams · role-adapted, EU AI Act Article 4 ready` / `AI pentru echipe non-tehnice · adaptat pe rol, conform Art. 4 EU AI Act`
- Funding: `Fund the AI adoption you can't afford to skip · MDF, AWS, Google, EU grants` / `Finanțează adopția AI pe care nu ți-o permiți să o amâni · MDF, AWS, Google, granturi UE`
- Events: `Live AI prototyping for 15–500 people · workshops, hackathons, keynotes`
- Hermes: `Hermes · the open-source AI agent that runs on your server`
- Score: `Free 2-minute AI adoption score · know exactly where you stand`
- Assessment: `Free 30-minute AI adoption call · maturity score + roadmap in 24h`
- Resources: `Field notes on AI adoption · frameworks, funding intel, EU AI Act`
- About: `Behaviour change practice for AI adoption · founded by Răzvan Vâlceanu`

#### B) Rewrite descriptions in the homepage voice
Every description follows: **(1) what the page actually delivers + (2) who it's for + (3) one concrete proof point**. 150–160 chars, second person, no buzzwords like "leverage" / "transform" / "empower".

Example for Funding (EN):
> *"Most companies qualify for Microsoft MDF, AWS co-sell, Google Cloud Partner funds or EU digital grants. Few structure the application right. We do that, free."*

Example for Hermes (EN):
> *"Hermes is an open-source AI agent with persistent memory and 40+ tools. Runs on your server. Telegram, Slack, Email. From prototype to autonomy in 4 weeks."*

#### C) Coherent keyword clusters
3 master clusters reused across pages:
- **Adoption cluster**: AI adoption, AI training, change management, Copilot adoption, Gemini Enterprise rollout, EU AI Act Article 4
- **Geo cluster**: Romania, Bucharest, EU, mid-market
- **Vendor cluster**: Microsoft Copilot, Microsoft 365, AWS Bedrock, Google Workspace, Gemini, OpenAI ChatGPT
Each page picks its relevant subset — no more orphan keywords.

#### D) Fix `index.html` (server-rendered baseline)
- Update the static `<title>` and `<meta description>` to the new home strings
- Remove the **duplicate** OG/Twitter meta tags at the bottom (lines 105–110) — `react-helmet-async` already injects them
- Keep the JSON-LD blobs but tighten descriptions to match
- Add `geo.position` and a Romanian-friendly second placename

#### E) Strengthen GEO/AEO in `SEO.tsx`
- Add `geo.position="44.4268;26.1025"` (sibling to ICBM)
- For RO routes: add `geo.placename="București, România"` instead of "Bucharest"
- Add `<meta name="audience" content="business">` (helps AEO classify intent)
- Add a default `BreadcrumbList` JSON-LD when not on home (helps Google rich results)

#### F) Per-article SEO for the 6 resource articles
Same rewrite treatment in EN + RO (titles + descriptions + keywords).

#### G) Legal / payment / 404 pages
Tighten the bare descriptions — still `noindex` so they're not ranking, but the title/OG should be on-brand for any accidental share.

### Files to edit

**i18n (12 files)**:
- `src/i18n/locales/en/{home,about,assessment,events,funding,hermes,programmes,resources,score,legal,misc}.json` — `seo` / `meta` blocks
- `src/i18n/locales/ro/` — same 11 files, RO native (not literal translation)
- Both `resources.json` files — also rewrite the 6 `articles.*.seo` blocks

**Code (2 files)**:
- `index.html` — replace hardcoded title/description, remove duplicate OG/Twitter blocks at bottom, refresh JSON-LD copy
- `src/components/SEO.tsx` — add `geo.position`, RO-aware `geo.placename`, optional breadcrumb JSON-LD, `audience` meta

### What I'm NOT doing

- Not creating per-page custom OG images (out of scope, would need design pass — current fallback OG stays)
- Not changing canonical/hreflang logic (already correct via `routes.ts`)
- Not touching `sitemap.xml` or `robots.txt` (already aligned)
- Not adding new pages or new JSON-LD types beyond `BreadcrumbList`

### One quick check

Should the title format use the **middle dot `·`** (used in your funding HTML reference) as the separator everywhere, or a **dash `–`** (more common in Google SERPs)? Default if no answer: `·` to match the editorial style you already established on `/funding`.

