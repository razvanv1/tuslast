
## Plan: Language switcher EN ↔ RO cu traducere completă

Default = engleză. Switcher în Navbar (desktop + mobile). Traducere completă RO pentru tot conținutul vizibil — titluri, butoane, etichete mono, microcopy, formulare, legal. Excepții (rămân în EN/original): nume proprii (Microsoft, Google, OpenAI, Hermes), acronime (AI, EU, GDPR, CRM), termeni legali consacrați (EU AI Act, Article 4), copyright, adrese email/telefon.

## Stack & arhitectură

**Librărie**: `react-i18next` + `i18next` + `i18next-browser-languagedetector`
- Standard de facto, SSR-safe, suportă namespaces, interpolare, plurals, lazy loading.
- `Trans` component pentru text cu markup inline (italic, `<em>`, link-uri).

**Storage limbă**: `localStorage` key `tus-lang` + `<html lang="...">` actualizat dinamic (important pentru SEO + screen readers + crawlere AI).

**Default**: forțat `en` la prima vizită (ignor `navigator.language` ca să respect cerința). Schimbarea persistă.

## Structură fișiere

```text
src/i18n/
  config.ts                    // init i18next
  locales/
    en/
      common.json              // navbar, footer, CTA-uri globale, cookie banner
      home.json                // pagina Index
      assessment.json          // AI Adoption Call
      ai-score.json            // AI Adoption Score (questions + results)
      programmes.json          // AI for Non-Technical
      events.json
      funding.json
      hermes.json
      resources.json
      about.json
      legal.json               // Privacy, Cookies, Terms
      payment.json             // Success/Canceled
    ro/
      (același set, traduceri RO)
src/components/
  LanguageSwitcher.tsx         // EN | RO toggle, mono-style
  LanguageProvider.tsx         // wrapper cu i18next + sync <html lang>
```

## Componente noi

**`LanguageSwitcher.tsx`** — toggle minimalist editorial:
```text
[ EN | RO ]  ← font-mono uppercase tracking-[0.2em], red underline pe activ
```
Plasat în Navbar înainte de butonul "Book a call" (desktop) și sus în mobile menu.

**`LanguageProvider.tsx`** — la mount setează `i18n.language = localStorage.tus-lang ?? 'en'`, ascultă `languageChanged` și actualizează `document.documentElement.lang`.

## Refactor pagini

Fiecare pagină / componentă cu text vizibil înlocuiește string-uri hardcodate cu `t('key')`. Pattern:
```tsx
const { t } = useTranslation('home');
<h1>{t('hero.title')}</h1>
<Trans i18nKey="hero.subtitle" components={{ em: <em className="text-red" /> }} />
```

Listă fișiere atinse (toate paginile + componentele cu copy):
- `Navbar.tsx`, `Footer.tsx`, `CookieConsent.tsx`, `CTASection.tsx`, `AIScoreCTA.tsx`, `Affiliations.tsx`, `Marquee.tsx`, `FAQAccordion.tsx`, `CurriculumAccordion.tsx`, `HeroCardDeck.tsx`, `IssueCard.tsx`, `PageHero.tsx`, `Editorial.tsx`, `Blockquote.tsx`
- Toate `src/pages/*` (12 pagini)
- `src/lib/aiScoreData.ts` — questions/answers mutate în JSON-uri locale (sau wrapper care returnează versiunea tradusă).

## Calitate traducere RO

**Principii**:
- Ton editorial, decis, fără calcuri din EN ("livrăm valoare" = NU; "construim programe care funcționează" = DA).
- Termeni-cheie consistenți: *unlearning* → "dezvățare" (cu mențiune EN la prima apariție pe Home: "Dezvățare. (Unlearning.)"), *AI adoption* → "adopția AI", *workflow* → "flux de lucru", *funding* → "finanțare", *behaviour-change* → "schimbare comportamentală".
- Butoane scurte și directe: "Book a call" → "Programează o discuție", "Get the dispatch" → "Primește newsletter-ul", "Take the score" → "Fă diagnosticul".
- Etichete mono uppercase rămân uppercase și în RO.
- Păstrez italicele și accentele tipografice pe red.

**Nu se traduc**: Microsoft, Google, OpenAI, Anthropic, EU AI Act, Article 4, GDPR, Hermes, "The Unlearning School" (brand), email-uri, numere de telefon, "© 2026 The Unlearning School. All rights reserved." (păstrez EN ca standard internațional).

## SEO impact

- `<html lang>` se schimbă dinamic (important pentru Google + AI crawlere).
- `SEO.tsx` primește `t()` pentru title/description per limbă.
- **NU** adaug rute `/ro/*` separate (out of scope, ar dubla sitemap-ul). Limba e client-side preference; default EN rămâne canonical pentru indexare.
- Adaug `<link rel="alternate" hreflang="en">` și `<link rel="alternate" hreflang="ro">` cu același URL (acceptabil pentru SPA cu language toggle).

## Rollout (un singur PR mare)

1. Install deps: `i18next`, `react-i18next`, `i18next-browser-languagedetector`.
2. Setup `src/i18n/config.ts` + provider în `main.tsx`.
3. Creez toate JSON-urile EN (extract din codul actual — sursa de adevăr).
4. Traduc fiecare JSON în RO, manual, atent la ton.
5. Refactor componentele globale (Navbar, Footer, CTA-uri).
6. Refactor pagină cu pagină.
7. Adaug `LanguageSwitcher` în Navbar.
8. Update `SEO.tsx` și `<html lang>`.
9. Test vizual EN ↔ RO pe toate paginile.

## Ce NU schimb

- Layout, design tokens, paleta matte, Bauhaus shapes.
- Rutele URL (rămân în EN: `/funding`, `/about` etc.).
- Conținut tehnic în cod (variabile, comentarii).
- `llms.txt`, `sitemap.xml`, `robots.txt` (rămân EN — limba canonical pentru crawlere).

## Risc / scope

Volum mare de copy (~12 pagini + componente). Voi face traducerea într-o singură rundă completă, nu pe bucăți. Estimare: ~2000 string-uri RO de scris cu grijă editorială.
