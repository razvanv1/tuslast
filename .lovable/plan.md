## Goal
Rewrite all 6 resource articles so they render correctly on `/resources/*` pages, doing them **one at a time** (not all at once), in both EN and RO.

## Why one at a time
Last attempt tried to batch all 6 articles into both locale files simultaneously. The files got large, keys were incomplete or malformed, and pages still show raw i18n keys. Doing them one-by-one lets us verify each article renders cleanly before moving to the next.

## Order
1. `lewinAdoption` — `/resources/lewin-model-ai-adoption`
2. `euAiActArticle4` — `/resources/eu-ai-act-article-4`
3. `copilotRollout` — `/resources/copilot-rollout-stalls`
4. `procurementWorkflows` — `/resources/ai-procurement-workflows`
5. `vendorMdf` — `/resources/vendor-mdf-ai-training`
6. `hermesVsChatgpt` — `/resources/hermes-vs-chatgpt`

## Per-article steps
For each article, in one pass:
1. Read current state of `src/i18n/locales/en/resources.json` and `src/i18n/locales/ro/resources.json` to see what's already there for that article key.
2. Write the full i18n payload the `ResourceArticle` template expects:
   - `docTitle`
   - `tag`, `readTime`
   - `seo.title`, `seo.description`, `seo.keywords`
   - `hero.title`, `hero.subtitle`
   - `lead`
   - `sections[]` with `heading` + `body` (4–6 sections, editorial tone matching Wired-style voice already in the site)
   - `takeaway`
3. Add EN first, then mirror the same structure in RO with translated copy.
4. Validate JSON parses cleanly in both files.
5. Confirm the shared `article.*` block (`filedUnder`, `readTime`, `takeawayLabel`, `ctaText`, `backToResources`, `fileLabel`, `sectionLabel`) exists — add any missing keys.
6. Stop and let user check the page renders before moving to next article.

## Content direction
- Voice: editorial, direct, TUS's existing tone (skeptical of hype, practical, EU/RO context aware).
- Length: ~800–1200 words per article, split across 4–6 sections.
- Each article ends with a sharp takeaway (1–2 sentences).
- SEO title/description tuned to the topic keyword already in the URL slug.

## Deliverable per turn
One article, EN + RO, JSON-validated. User confirms it looks right before we proceed to the next.

Start with article 1 (`lewinAdoption`) on approval.
