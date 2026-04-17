

## Problema

Pe `/assessment`:
1. **Butonul "Free audit" din navbar** = `<Link to="/assessment">` → click pe pagina curentă = React Router nu re-navighează, butonul pare mort.
2. **Butonul "Free audit" din hero-ul paginii Assessment** = `ctaTo={BOOKING_URL}` = `/assessment` → același lucru, navigare către pagina curentă = nimic vizibil se întâmplă.

Tehnic linkurile sunt corecte, dar UX-ul este rupt: pe pagina Free audit, butoanele Free audit nu fac nimic.

## Soluția

Două schimbări țintite:

### 1. `src/components/Navbar.tsx`
Când utilizatorul este deja pe `/assessment` și dă click pe butonul "Free audit" din navbar → fă smooth scroll către secțiunea `#book` (zona cu butonul "Open calendar"), în loc de `<Link>`.

Logică:
- Dacă `location.pathname !== "/assessment"` → `<Link to="/assessment">` (comportament actual).
- Dacă `location.pathname === "/assessment"` → `<button onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}>`.
- Același tratament și pentru meniul mobil.

### 2. `src/pages/Assessment.tsx` (hero CTA)
În hero-ul paginii Assessment, butonul "Free audit →" actual duce la `/assessment` (adică nicăieri). Îl schimb să facă scroll către `#book`.

Cea mai curată cale: trec `ctaTo="#book"` în `PageHero` și actualizez `PageHero.tsx` să trateze ancorele care încep cu `#` ca smooth scroll către elementul respectiv (în loc de `<Link to="#book">` care se comportă ciudat).

### 3. `src/components/PageHero.tsx`
Adaug suport pentru ancore: dacă `to` începe cu `#`, randez un `<button>` care face `scrollIntoView` pe elementul cu acel ID. Restul logicii (extern vs intern) rămâne neschimbată.

## Fișiere modificate
- `src/components/Navbar.tsx` — buton Free audit context-aware (Link sau scroll).
- `src/components/PageHero.tsx` — suport pentru CTA cu ancoră `#book`.
- `src/pages/Assessment.tsx` — `ctaTo="#book"` în loc de `BOOKING_URL`.

## Rezultat
- Pe orice altă pagină: "Free audit" navighează la `/assessment` (neschimbat).
- Pe `/assessment`: "Free audit" (din navbar ȘI din hero) face scroll smooth la secțiunea cu butonul "Open calendar" → user vede imediat unde să apese pentru Brevo.
- "Open calendar" rămâne singurul buton care deschide link-ul Brevo extern (neschimbat).

