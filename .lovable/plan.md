## TUS Live AI Trainer — Plan

A new homepage section that delivers a 5-step interactive mini-course right inline, simulated client-side, ending in a lead capture and Brevo booking CTA. Visually matches existing editorial/brutalist tokens (paper/ink/red, DM Serif Display, JetBrains Mono labels, sharp borders, generous negative space). No chat bubble — a full editorial "command console" card.

### Placement
Insert in `src/pages/Index.tsx` directly after `<AIScoreStrip />` (line 97), before the STATS strip. This sits right after the hero/value-prop transition and before proof — the natural place for a live demo.

### New files
1. `src/components/LiveAITrainer/TusLiveAITrainer.tsx` — main section component (Romanian copy hardcoded; matches site's i18n-light pattern for one-off sections is acceptable, but we'll route copy via `score.json` already in ro to be consistent — actually keep copy in-component since it's RO-only and self-contained, with a clear comment).
2. `src/components/LiveAITrainer/TrainerCard.tsx` — the console card (header status row, step body, input area, progress, primary/secondary actions).
3. `src/components/LiveAITrainer/ScorePanel.tsx` — side/bottom panel with 4 locked metrics (AI Usage, Prompt Quality, Data Safety, Workflow Fit) that unlock progressively.
4. `src/components/LiveAITrainer/LeadForm.tsx` — final lead capture (Name, Work email, Company, Role, Employees dropdown, consent checkbox).
5. `src/components/LiveAITrainer/Confirmation.tsx` — post-submit confirmation with Brevo CTA.
6. `src/components/LiveAITrainer/trainerApi.ts` — mock API abstraction with `startSession / submitAnswer / generateScore / submitLead`, all returning local mocks + `console.log`, with TODOs for future Supabase Edge Function wiring.
7. `src/components/LiveAITrainer/types.ts` — TS types for `Answers`, `ScoreResult`, `LeadData`.
8. `src/components/LiveAITrainer/scoring.ts` — pure mock scoring logic (task concreteness, prompt context/format/constraints, data safety modifier, anonymization keyword bonus) → 0–100 + category (`AI Tourist | AI Experimenter | AI Operator | AI Adoption Ready`) + 3 bullets + rewritten prompt + recommendation (`AI Usage Audit | AI Adoption Sprint | AI Back Office Kit`).

### Modified files
- `src/pages/Index.tsx` — import and render `<TusLiveAITrainer />` after `<AIScoreStrip />`.

### Section structure (matches brief)
- Wrap in existing `<Section variant="paper">` for a cream editorial break between the dark hero/strip and the dark stats — gives the trainer "live training room" feel and high contrast.
- Eyebrow: mono red `LIVE AI TRAINER`.
- H2 display serif: `Începe un mini-curs AI de 5 minute.`
- Subhead body: the long RO sentence from brief.
- Two-column grid on md+: left = TrainerCard (col-span-7), right = ScorePanel (col-span-5). Mobile: stacked, TrainerCard first.

### TrainerCard design
- Cream card on ink border (or ink card on paper bg with red accents) — bordered with `border-2 border-ink/15`, no rounded corners (matches site).
- Header row: left `font-mono text-[10px] uppercase tracking-[0.25em] text-red`: `TUS AI TRAINER · LIVE SESSION` with a tiny pulsing red dot. Right: `STEP 1 / 5`.
- Thin horizontal progress: 5 equal segments, filled = red, empty = ink/10.
- Lesson body: `font-display text-2xl md:text-3xl text-ink leading-snug` — the trainer's question.
- Answer area:
  - Steps 1, 2, 4: `<textarea>` with brief placeholder; min 3 rows; clean focus state (`focus:border-red outline-none`).
  - Step 3: three pill buttons (Da / Nu / Nu sunt sigur) using mono uppercase tracking.
  - Step 5: shows the generated `ScoreResult` + `LeadForm`.
- Primary button: `bg-ink text-paper` mono uppercase; label `Continuă →` (or `Vezi scorul →` on step 4).
- Secondary link: `Vreau doar să văd exemplul` — fills mock answers and jumps to step 5.

### ScorePanel design
- 4 stacked rows, each: mono label + big numeric score + 1-line descriptor.
- Locked state: `text-ink/20`, value shown as `— —`, small lock glyph (`▮`).
- As each step completes, corresponding metric "unlocks" with a subtle fade.
  - Step 1 (role) → Workflow Fit teaser
  - Step 2 (task) → Workflow Fit final
  - Step 3 (safety) → Data Safety
  - Step 4 (prompt) → Prompt Quality
  - Step 5 → AI Usage Score (composite)

### Scoring logic (mock)
- Base 30.
- +15 if task ≥ 3 words and contains a verb/noun cue (length heuristic).
- Prompt heuristics: +10 if mentions context (length > 30 chars), +10 if mentions a format word (`format|listă|tabel|rezumat|json|email`), +10 if mentions constraint (`maxim|în|sub|fără|nu include`), +10 if mentions tone/audience.
- Data safety: if `Da`/`Nu sunt sigur` and prompt does NOT contain (`anonim|fără date|fictiv|review uman|verific`), subtract 15 and surface a safety bullet.
- Clamp 0–100. Category buckets: 0–34 Tourist, 35–54 Experimenter, 55–74 Operator, 75+ Adoption Ready. Recommendation map: Tourist/Experimenter → `AI Usage Audit`, Operator → `AI Adoption Sprint`, Adoption Ready → `AI Back Office Kit`.
- Rewritten prompt: deterministic template combining role + task + format + constraint + safety clause.

### Lead form
Inline below score on step 5 (not a modal). Fields with proper `<label htmlFor>`, mono labels, `border-b border-ink/30` inputs. Consent checkbox required. Submit → `trainerApi.submitLead` (mock) → render `<Confirmation />`.

### Confirmation
Replaces TrainerCard content. Display:
- Mono red kicker `RAPORT PREGĂTIT`.
- Display serif line: `Următorul pas recomandat: AI Usage Audit pentru echipa ta.`
- Primary anchor button → `https://meet.brevo.com/razvan-valceanu` (target `_blank`), label `Programează AI Usage Audit →`.

### Motion
- Use `ScrollReveal` wrapper for the whole section (already in project).
- Step transitions: simple `key`-based remount + `transition-opacity duration-300` (no new libraries).
- Pulsing dot via Tailwind `animate-pulse`.

### Analytics
`console.log('[trainer]', event, payload)` inside `trainerApi` for `trainer_started`, `trainer_step_completed`, `trainer_score_generated`, `trainer_lead_submitted`. No real analytics wiring.

### Copy guardrails enforced
- No "workflow redesign", no "I help", no Article 4 compliance claims, no EU AI Act certification language. Only Romanian, plain and direct.

### Out of scope
- No real LLM call, no Supabase table, no edge function — only TODO markers in `trainerApi.ts`.
- No changes to nav, footer, other pages, or design tokens.
- No new dependencies.
