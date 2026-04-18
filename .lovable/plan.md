
## Goal
Reuse the email infrastructure already working on `unlearning.ro` from project `unlearning website (40)`, then complete the previously approved plan: 4 branded score-report templates + auto-send after submission + extra ToFu CTA entry points.

## Step 1 — Inspect the source project

Look at what's already wired up in the other project:
- `supabase/functions/_shared/transactional-email-templates/` (registry + existing templates)
- `supabase/functions/send-transactional-email/index.ts` (read `SENDER_DOMAIN` and `FROM_DOMAIN` constants — these are baked in)
- `supabase/functions/handle-email-unsubscribe/index.ts`
- `supabase/functions/handle-email-suppression/index.ts`
- The unsubscribe page (likely `/unsubscribe` or `/email-preferences/unsubscribe`)
- `supabase/config.toml` for any function-specific config

I'll list, read and copy verbatim with `cross_project--copy_project_asset`. The constants (`SENDER_DOMAIN = "notify.unlearning.ro"` etc.) come over with the file — no manual editing.

## Step 2 — Wire infrastructure on this project

The DB side (pgmq queues, RPCs, suppression tables, cron, vault secret) does NOT copy with files — it's created by the platform tool. So I'll:
1. Run `setup_email_infra` to provision queues + tables + cron on THIS project's database.
2. Copy the Edge Functions from project (40) into this repo (templates registry, send/unsubscribe/suppression functions, any shared utilities).
3. Re-point the registry to only the templates we want (the 4 AI-score ones — see step 3). Keep any generic ones already in (40) only if useful; otherwise drop them.
4. Deploy: `deploy_edge_functions(["send-transactional-email", "handle-email-unsubscribe", "handle-email-suppression"])`.
5. If the source project's `SENDER_DOMAIN` is `notify.unlearning.ro` (highly likely), I'll also need an email domain entry on THIS project. I'll call `check_email_domain_status` first; if missing, surface the setup dialog ONCE so the same `notify.unlearning.ro` is attached here. (NS records already exist at the registrar — verification will be near-instant.)

## Step 3 — Create the 4 branded score templates

`supabase/functions/_shared/transactional-email-templates/`:
- `ai-score-leader.tsx` (80–100)
- `ai-score-advanced.tsx` (60–79)
- `ai-score-builder.tsx` (40–59)
- `ai-score-starter.tsx` (0–39)

Each template (React Email, white body, brand accents red `#C2261D` / ink `#0F0F0F` / paper `#F4EFE2`, Arial fallback):
- Mono-uppercase eyebrow "AI Adoption Score"
- Big DM-Serif-style heading: `{score} / 100 — {rank}`
- Rank-specific interpretation paragraph
- Inline Gap Analysis: 4 horizontal bars (Strategy/Tools/Adoption/Impact) using table-based widths (email-safe), red tint on weakest
- Priority Actions list (3 items from `aiScoreData.ts`)
- Recommended next-step format line
- Two CTAs:
  - Primary red button → `https://tuslast.lovable.app/assessment#book` ("Book a free call to discuss your score →")
  - Secondary outline button → `https://tuslast.lovable.app/programmes/ai-for-non-technical-people` ("Join the AI for Work cohort →")
- Signed "Răzvan, The Unlearning School"

Update `registry.ts` to register all 4. `previewData` set with realistic samples.

## Step 4 — Trigger send from the calculator

In `src/pages/AIAdoptionScore.tsx`, right after the successful insert into `ai_score_submissions` (and before/while showing results):

```ts
const rankSlug = rank.toLowerCase().includes('leader') ? 'leader'
  : rank.toLowerCase().includes('advanced') ? 'advanced'
  : rank.toLowerCase().includes('builder') ? 'builder' : 'starter';

supabase.functions.invoke('send-transactional-email', {
  body: {
    templateName: `ai-score-${rankSlug}`,
    recipientEmail: email,
    idempotencyKey: `ai-score-${submissionId}`,
    templateData: { score, rank, categoryScores, weakest, priorityActions, format, firstName: null }
  }
}).catch(() => {}); // fail-soft — score still shows
```

Add an inline confirmation under the score reveal: *"📧 We just sent the full report to **{email}** — check your inbox (and spam, just in case)."*

Add a small "share with a colleague" `mailto:` link below the CTAs.

## Step 5 — More ToFu entry points

Add `<AIScoreCTA variant="band" />` before the closing CTASection on:
- `src/pages/Funding.tsx`
- `src/pages/Events.tsx`
- `src/pages/Hermes.tsx`
- `src/pages/About.tsx`

On `src/pages/Index.tsx`: move the existing `<AIScoreCTA variant="band" />` higher (right after the hero deck, before the first Editorial section).

On `src/pages/Assessment.tsx`: add a second `<AIScoreCTA variant="inline" />` BELOW the booking block with the copy *"Want a structured starting point for the call? Take the score first →"*.

## Files

**Copied from project (40):**
- `supabase/functions/send-transactional-email/index.ts`
- `supabase/functions/handle-email-unsubscribe/index.ts`
- `supabase/functions/handle-email-suppression/index.ts`
- `supabase/functions/_shared/transactional-email-templates/registry.ts`
- Any unsubscribe page component + route registration

**New:**
- 4 × `ai-score-*.tsx` templates

**Modified:**
- `supabase/functions/_shared/transactional-email-templates/registry.ts` (register the 4)
- `src/pages/AIAdoptionScore.tsx` (invoke + confirmation + share link)
- `src/pages/Funding.tsx`, `Events.tsx`, `Hermes.tsx`, `About.tsx` (add band)
- `src/pages/Index.tsx` (reposition band)
- `src/pages/Assessment.tsx` (second inline CTA)
- `src/App.tsx` (only if unsubscribe page route is missing)

**Auto-provisioned by tools:**
- `setup_email_infra` → DB queues/tables/cron/vault secret
- Email domain attachment if not already on this project

## Risk / order
Low. Order matters: domain check → `setup_email_infra` → copy functions → templates → deploy → wire trigger → CTA additions. If the domain is missing on this project, I'll show the setup dialog once and continue automatically after.
