

## Plan: SEO/AEO hardening + crawlability + copy coherence audit

Three separate problems bundled. I'll tackle them in one pass.

### 1) Make the site readable to AI bots (the "React blank page" problem)

**The real issue**: Vite SPA serves an empty `<div id="root">` to bots that don't run JS. Some AI crawlers (older GPTBot fetches, Claude-Web, Perplexity-User, social previews) get nothing. `react-helmet-async` only works after JS runs.

**Fix without changing stack** (no SSR, no Next.js):
- **Inline a server-rendered fallback inside `index.html` `<body>`** — visible H1, page intro paragraph, nav links, key offer copy, contact, address — wrapped in a `<noscript>` + a regular `<div id="bot-content">` that gets hidden by CSS once React hydrates (`#root:not(:empty) ~ #bot-content { display: none }`). Bots without JS see real content; humans never see it.
- **Add static `<meta>` baseline** in `index.html` for the homepage (already partly done) — title, description, OG, Twitter, geo, JSON-LD. So even zero-JS crawlers get full meta on `/`.
- **Add `prerender` hints**: `<link rel="alternate" hreflang>` already there via Helmet, but add static EN/RO hreflang in `index.html` too.
- **Verify `robots.txt`** — already permissive (audited earlier, all major AI bots allowed). Confirm sitemap is fresh.
- **Add `llms.txt`** content check — `public/llms.txt` exists; I'll rewrite it as a clean, structured site map for LLMs (what TUS does, key pages, contact). This is the AEO standard now.
- **Add `<meta name="generator">` removal** and `<meta name="fediverse:creator">` skip (not needed) — keep meta clean.

**What I won't do**: install SSR/prerender tooling (react-snap, vite-prerender). That's a bigger refactor. The static fallback + per-page Helmet covers 95% of bots.

### 2) Copy coherence audit (button labels, funnel naming)

**Audit scope**: Every CTA button label across all pages, EN + RO. Goal: one action = one name everywhere.

Known inconsistencies to fix:
- "AI Adoption Call" vs "Book a call" vs "Free 30-min call" vs "Discuție AI Adoption" vs "Programează o discuție" — pick one canonical name per language and use it everywhere (nav, hero, CTAs, footer, FAQ).
- "AI Adoption Score" vs "AI Score" vs "Take the score" vs "Diagnostic AI" vs "Fă diagnosticul" — same.
- "Programmes" vs "AI for Work" vs "AI for non-technical" — clarify hierarchy.
- "See programmes" vs "View programmes" vs "Explore programmes" — pick one.
- "Book a funding call" vs "Find out what you qualify for" vs "Book a call about this" — funding page has 3 names for the same CTA.

**Deliverable**: a canonical CTA dictionary (EN + RO), then propagate across all components and locale files.

### 3) Translation quality pass + remove em-dashes

**Em-dashes (—)**: Scan all `.json`, `.tsx`, `.html`, `.md`, `.txt` files. Replace `—` with either `-` (regular dash, OK for Google SERP) or restructure the sentence (often better). Keep regular hyphens (`-`) as-is. This includes the funding page rewrite I just did, the SEO descriptions, and the bot-content fallback.

**RO translation pass**: Sweep RO locale files for:
- LM-stereotype words: "claritate", "intersecție", "navighează", "valorifică", "împuternicește", "transformă", "experiență seamless", "soluții" (when overused), "în mod natural", "într-adevăr", "pur și simplu"
- Robotic literal translations of EN idioms — rewrite in native business RO
- Anglicisms left untranslated where a clean RO word exists; keep tech terms (Copilot, Gemini, MDF, Bedrock, etc.) in English

**EN translation pass**: Same hunt for AI-stereotype phrases — "leverage", "unlock", "seamlessly", "harness the power of", "in today's fast-paced world", "robust solution", "cutting-edge", "game-changer". Strip them.

### Files I'll touch

**Crawlability**:
- `index.html` — add bot-content fallback block, static hreflang, hide-on-hydrate CSS
- `public/llms.txt` — rewrite as proper LLM site index
- `public/robots.txt` — verify (likely no change)
- `public/sitemap.xml` — verify dates current

**Copy coherence + em-dashes + translation pass**:
- All 22 locale files in `src/i18n/locales/{en,ro}/*.json`
- All page components that contain hardcoded copy: scan `src/pages/*.tsx` and `src/components/*.tsx` for any inline strings (most are already in i18n, but spot-check)
- `src/components/Navbar.tsx`, `Footer.tsx`, CTA components — verify they pull from canonical i18n keys

### What I need to confirm before starting

One decision:

**Canonical CTA names** — pick the version you want used everywhere:
1. **For the 30-min booking call**: 
   - EN: `AI Adoption Call` (current default in nav/footer) — keep this everywhere?
   - RO: `Discuție AI Adoption` — keep this everywhere?
2. **For the 2-min self-test**: 
   - EN: `AI Adoption Score` — keep this everywhere?
   - RO: `Diagnostic AI Adoption` — keep this everywhere?

**Default if you don't answer**: I'll standardize on those four names (current nav defaults) and rewrite every other variant to match. If you prefer different wording, tell me now.

