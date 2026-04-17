
**Goal**: Transform `/resources` into a functional editorial hub. Posts come from your WordPress.com site (you write there, site auto-displays). Newsletter signup saves emails to Lovable Cloud.

**Architecture**

1. **WordPress.com → Lovable Cloud → Site**
   - You publish on WordPress.com (familiar editor).
   - Edge function `wp-posts` proxies WordPress.com REST API via the connector gateway (`/rest/v1.1/sites/{site_id}/posts`).
   - Site fetches via Supabase function — no exposed credentials, automatic OAuth refresh.
   - Site ID hardcoded in the edge function (you give it to me, or we read it from `/me/sites`).

2. **Newsletter → Lovable Cloud table**
   - Table `newsletter_subscribers` (email unique, source, subscribed_at).
   - Edge function `subscribe-newsletter` with Zod validation + simple in-memory rate limit.
   - RLS: only insert allowed (no public reads).

**Setup steps**
1. Enable Lovable Cloud.
2. Connect WordPress.com connector → I read your site ID via `/me/sites`.
3. Create `newsletter_subscribers` table + RLS.
4. Create edge functions `wp-posts` and `subscribe-newsletter`.

**Frontend rebuild — `/resources` (Hub editorial)**

Replace current static page with:

- **A. Featured playbook card** (KEEP existing AI Literacy Playbook tarot card at top) — already works.
- **B. Featured article** — top-most fresh WordPress post, large editorial layout (cover image, title, excerpt, "Read article →"). Click → `/resources/[slug]`.
- **C. Latest articles grid** — 6 most recent posts in 3-col grid (cover, category chip, title, excerpt, date).
- **D. Browse by topic** — KEEP the 8 topic chips, but each becomes a real link to `/resources?topic=ai-at-work` filtering posts by WP category/tag.
- **E. Six formats hub** — KEEP the 6 format cards (Articles, Podcast, Guides, Studies, Tools, Frameworks), each linking to filtered list.
- **F. Newsletter signup** — REPLACE mailto with real form (email input + submit), success toast, error handling.

**New routes**
- `/resources` — hub (above).
- `/resources/[slug]` — single article page (fetches one WP post by slug, renders title/cover/HTML content with editorial styling).
- `/resources/topic/[slug]` — filtered list by topic.

**Files to create**
- `supabase/functions/wp-posts/index.ts` — list/get posts (params: `slug?`, `category?`, `per_page`, `page`).
- `supabase/functions/subscribe-newsletter/index.ts` — Zod validation, insert into table.
- `src/pages/Resources.tsx` — refactor to fetch + display real posts.
- `src/pages/ResourceArticle.tsx` — single-post page.
- `src/components/NewsletterForm.tsx` — reusable form.
- `src/components/ArticleCard.tsx` — reusable card.
- `src/lib/wp.ts` — typed client for the wp-posts function.
- `src/App.tsx` — add routes.

**Migration**
- Table `public.newsletter_subscribers` with RLS allowing public INSERT only (no SELECT/UPDATE/DELETE from anon).

**What I need from you to finish wiring**
1. Click "Connect" when WordPress.com prompt appears.
2. After connect, I'll fetch your sites and confirm which one to use (or you tell me the URL like `unlearning.ro` or `unlearning.wordpress.com`).
3. On WordPress.com, ensure you have at least one published post + recommended categories matching your 8 topics (Funding intelligence, AI at work, Execution friction, Future of work, Academies & learning systems, Tools & frameworks, Podcast & insights, Hermes Agent). Posts without categories still show in the main feed.

**What stays unchanged**
- AI Literacy Playbook featured card (already works).
- Page hero, footer, CTA section, design tokens.
- Homepage and other pages.

After you approve, I'll execute in this order: enable Cloud → connect WordPress.com → create table + functions → rebuild frontend → test fetch end-to-end.
