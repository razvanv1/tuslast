

## Plan: Real Resources index grid

Cut the filler. Replace with a real article grid.

### Remove
- "Pick the entry point" section (entry paths)
- "Six formats. One library." section (formats)
- "Browse by topic" section (topics)

### Keep
- Hero
- AI Score CTA
- Playbook featured card (it's the anchor)
- Newsletter section
- Final CTA

### Add: Real article grid

New section between Playbook and Newsletter: **"The Library"** — 6-card grid of the actual resource articles already scaffolded in `src/pages/resources/`:

1. EU AI Act Article 4 — what it means for non-tech teams (`/resources/eu-ai-act-article-4`)
2. Why Copilot rollouts stall after 30 days (`/resources/copilot-rollout-stalls`)
3. The Lewin model applied to AI adoption (`/resources/lewin-model-ai-adoption`)
4. AI for procurement: 3 workflows, before/after (`/resources/ai-procurement-workflows`)
5. How to qualify for vendor MDF on AI training (`/resources/vendor-mdf-ai-training`)
6. Hermes Agent vs ChatGPT — when to use which (`/resources/hermes-vs-chatgpt`)

Each card (Wired editorial style, matches site):
- Mono kicker: category tag (e.g. "Compliance", "Adoption", "Frameworks", "Workflows", "Funding", "Tools")
- Display headline (DM Serif, ~2xl)
- 1-line excerpt (paper/70, sm)
- Mono footer: read time + arrow
- Hover: red border, subtle lift
- 3-col desktop, 2-col tablet, 1-col mobile
- Border-grid pattern (`gap-px bg-paper/10`) consistent with rest of site

### Files to change
- `src/pages/Resources.tsx` — remove 3 sections, add 1 grid section, use `LocalizedLink`
- `src/i18n/locales/en/resources.json` — remove `entry`, `formats`, `topics` keys; add `library` key with section heading + 6 article entries (kicker, title, excerpt, readTime)
- `src/i18n/locales/ro/resources.json` — same, RO native

### Result
Page flow: Hero → Score CTA → Playbook (featured) → **Library grid (6 articles)** → Newsletter → CTA. Tighter, real, linked to actual content.

