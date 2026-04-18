
## Goal
Faci AI Adoption Score un instrument de **top-of-funnel** complet: după ce userul lasă emailul și vede scorul, primește **automat pe email** un raport branded cu scorul, interpretarea, gap analysis și 2 CTA-uri (Book free call + Cumpără cursul). Plus: mai multe puncte de intrare pe site către calculator.

## De ce nu merge acum emailul
Calculatorul salvează submisia în `ai_score_submissions`, dar **nu există nicio infrastructură de email** în proiect. Niciun edge function, niciun template, niciun apel `send-transactional-email`. De-asta nu primești nimic în inbox.

## Ce construiesc

### 1. Infrastructura de email (Lovable Email — built-in)
- Verific domeniul de email al proiectului. Dacă nu e configurat, deschid dialogul de setup (un singur click — apoi continui automat).
- Rulez `setup_email_infra` (cozi pgmq, tabele log/suppression, cron, etc.).
- Rulez `scaffold_transactional_email` (edge function `send-transactional-email`, unsubscribe handler, suppression handler).

### 2. Patru template-uri de email (React Email, branding Wired)
Un template per rank, ca fiecare user să primească interpretarea potrivită scorului lui. Toate au același skeleton vizual + aceleași 2 CTA.

| Template | Trimis la rank | Subject |
|---|---|---|
| `ai-score-leader` | 80–100 | "Your AI Adoption Score: Leader (X/100)" |
| `ai-score-advanced` | 60–79 | "Your AI Adoption Score: Advanced (X/100)" |
| `ai-score-builder` | 40–59 | "Your AI Adoption Score: Builder (X/100)" |
| `ai-score-starter` | 0–39 | "Your AI Adoption Score: Starter (X/100)" |

**Conținutul fiecărui email** (dynamic data din `templateData`):
- Header pe paper cream, label mono "AI Adoption Score", titlu DM Serif cu scorul mare (ex: "73 / 100 — AI Advanced")
- Paragraf de interpretare specific rank-ului (1 paragraf strong)
- **Gap Analysis** vizual: 4 bare orizontale (Strategy/Tools/Adoption/Impact) — randate inline cu div-uri colorate (red accent pe categoria slabă)
- **Priority Actions** — 3 acțiuni concrete pentru categoria slabă (din `priorityActions` în `aiScoreData.ts`)
- **Recommended next step** — formatul recomandat (ex: "4-session enablement sprint")
- **Două CTA-uri**:
  - Primary roșu: "Book a free call to discuss your score →" → `https://tuslast.lovable.app/assessment#book`
  - Secondary outline: "Join the AI for Work cohort →" → `https://tuslast.lovable.app/programmes/ai-for-non-technical-people`
- Semnătură Răzvan + The Unlearning School
- Footer system-managed (unsubscribe automat)

Fonturi: Arial fallback (email-safe), bg #ffffff, accent #C2261D (red), ink #0F0F0F, paper accent #F4EFE2.

### 3. Trigger din pagina calculatorului
În `src/pages/AIAdoptionScore.tsx`, după `insert` în `ai_score_submissions`, apelez:
```ts
supabase.functions.invoke('send-transactional-email', {
  body: {
    templateName: `ai-score-${rankSlug}`, // leader|advanced|builder|starter
    recipientEmail: email,
    idempotencyKey: `ai-score-${submissionId}`,
    templateData: { score, rank, categoryScores, weakest, priorityActions, format }
  }
})
```
Trimiterea e async — userul vede rezultatele instant pe pagină, emailul vine în câteva secunde. Dacă invoke eșuează, scorul tot se afișează (fail-soft).

### 4. Mai multe puncte de intrare către calculator (ToFu maxim)
Verific ce există deja și completez unde lipsește:
- ✅ Navbar — există
- ✅ Footer — există  
- ✅ HeroCardDeck (homepage) — există
- ✅ AIScoreCTA pe Index, Assessment, AIForNonTechnical, Resources — există
- ➕ **Adaug bandă AIScoreCTA și pe**: `Funding.tsx`, `Events.tsx`, `Hermes.tsx`, `About.tsx` — înainte de CTASection-ul final
- ➕ **Pe homepage**, mut `<AIScoreCTA variant="band" />` mai sus (după hero deck, înainte de Editorial) ca să fie primul lucru pe care-l vede userul după hero
- ➕ **Pe Assessment**, adaug variantă inline și sub blocul de booking (nu doar sus) cu mesaj: "Vrei un preview înainte de call? Take the score → ai un punct de plecare structurat pentru discuție."

### 5. Ajustări mici pe pagina calculatorului
- Adaug pe ecranul de rezultate un mesaj clar: *"📧 Ți-am trimis raportul complet pe [email] — verifică inboxul (și spam)."*
- Sub CTA-uri, adaug un al treilea link discret: "Trimite scorul unui coleg" (mailto cu pre-filled subject + URL).

### 6. Out of scope (nu fac acum)
- ❌ Pagină separată `/assessment/quiz` — calculatorul `/ai-adoption-score` ESTE deja exact ce ai descris (10 întrebări structurate, score 0–100, gap chart, roadmap, salvare în DB). Nu duplicăm. Dacă vrei alt slug, doar redirect — spune-mi.
- ❌ Admin dashboard pentru submisii (poate fi follow-up).
- ❌ A/B testing pe gate copy.

## Files

**New:**
- `supabase/functions/_shared/transactional-email-templates/ai-score-leader.tsx`
- `supabase/functions/_shared/transactional-email-templates/ai-score-advanced.tsx`
- `supabase/functions/_shared/transactional-email-templates/ai-score-builder.tsx`
- `supabase/functions/_shared/transactional-email-templates/ai-score-starter.tsx`

**Modified:**
- `supabase/functions/_shared/transactional-email-templates/registry.ts` — register 4 templates
- `src/pages/AIAdoptionScore.tsx` — invoke send-transactional-email + confirmation message
- `src/pages/Funding.tsx`, `Events.tsx`, `Hermes.tsx`, `About.tsx` — adaug AIScoreCTA band
- `src/pages/Index.tsx` — repoziționez bloc AIScoreCTA mai sus
- `src/pages/Assessment.tsx` — adaug AIScoreCTA inline sub booking

**Auto-created by tools:**
- Email domain (dacă nu există) — prin dialog
- Email infra (cozi, tabele, cron) — prin `setup_email_infra`
- `send-transactional-email`, `handle-email-unsubscribe`, `handle-email-suppression` — prin `scaffold_transactional_email`

## Risc
Mic. Singurul punct sensibil: configurarea domeniului de email — dacă nu e gata, deschid dialogul și continui automat după ce confirmi. Restul e pur cod (template-uri + un `invoke` în pagină).
