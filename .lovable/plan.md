
## Goal
Skip emailul deocamdată (revenim later) și execut tot restul planului: mai multe puncte de intrare ToFu către `/ai-adoption-score` + ajustări pe pagina rezultatelor.

## Ce fac

### 1. Adaug `<AIScoreCTA variant="band" />` pe 4 pagini noi
Înainte de `<CTASection>`-ul final pe:
- `src/pages/Funding.tsx`
- `src/pages/Events.tsx`
- `src/pages/Hermes.tsx`
- `src/pages/About.tsx`

### 2. Repoziționez banda pe homepage
`src/pages/Index.tsx`: mut `<AIScoreCTA variant="band" />` mai sus — direct după hero deck, înainte de prima secțiune Editorial. Astfel e primul lucru pe care-l vede userul după hero.

### 3. A doua intrare pe Assessment
`src/pages/Assessment.tsx`: adaug `<AIScoreCTA variant="inline" />` și SUB blocul de booking, cu eyebrow "Vrei un preview înainte de call?" și copy "Take the score → ai un punct de plecare structurat pentru discuție." (variantă există deja sus; aceasta e a doua, plasată după booking pentru a prinde și userii care scrollează fără să rezerve).

### 4. Ajustări pe `src/pages/AIAdoptionScore.tsx` (results screen)
- Sub scor și CTA-uri adaug un mesaj discret: *"Pentru raportul complet pe email, revenim curând cu trimitere automată. Între timp, dacă vrei să discutăm rezultatele, rezervă un free call mai jos."* (Înlocuiesc mesajul de "ți-am trimis pe email" din planul original — încă nu funcționează emailul, deci nu mințim userul.)
- Adaug al treilea link discret sub CTA-uri: **"Trimite scorul unui coleg"** — `mailto:` cu subject + URL pre-filled (`/ai-adoption-score`).

## Out of scope acum (revenim)
- Infrastructura de email (`setup_email_infra`, `scaffold_transactional_email`, domain setup)
- Cele 4 template-uri React Email
- Apelul `supabase.functions.invoke('send-transactional-email', ...)` din pagină

## Files modificate
- `src/pages/Index.tsx` — repoziționare bandă
- `src/pages/Assessment.tsx` — a doua bandă inline sub booking
- `src/pages/Funding.tsx` — bandă înainte de CTASection
- `src/pages/Events.tsx` — bandă înainte de CTASection
- `src/pages/Hermes.tsx` — bandă înainte de CTASection
- `src/pages/About.tsx` — bandă înainte de CTASection
- `src/pages/AIAdoptionScore.tsx` — copy update pe results + mailto share link

## Risc
Zero. Pur layout — un singur component reutilizabil deja existent, importat în 4 pagini noi + repoziționat în 2 pagini existente.
