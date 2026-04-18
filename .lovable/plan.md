
## Faza 2: Traducere completă pagini interne

Infra e gata, Home arată bine. Continuăm cu restul paginilor în 3 sub-faze logice, grupate după prioritate de business și complexitate. Fiecare sub-fază = un singur PR/mesaj, ca să pot traduce atent fără să sar peste nuanțe.

## Sub-faza 2A — Pâlnia de conversie (prioritate maximă)

Paginile pe care aterizează lead-urile din CTA-uri. Traducerea proastă aici = lead pierdut.

- **Assessment** (`/assessment`) — AI Adoption Call: hero, ce primești, pași, FAQ, formular booking, microcopy.
- **AI Adoption Score** (`/ai-adoption-score`) — întrebări, opțiuni de răspuns, ecran de rezultat, copy email, `aiScoreData.ts` extras în JSON.
- **Programmes** (`/programmes`) — AI for Non-Technical: hero, curriculum accordion, pricing, FAQ, CTA-uri.

Componente refăcute pe parcurs: `PageHero`, `FAQAccordion`, `CurriculumAccordion`, `Editorial` (Kicker, SectionHeading, NumberedStep), `Blockquote`, `IssueCard`.

## Sub-faza 2B — Pagini de servicii

- **Events** (`/events`) — keynote, workshop, hackathon.
- **Funding** (`/funding`) — MDF, AWS, EU grants.
- **Hermes** (`/hermes`) — produs separat.
- **Resources** (`/resources`) — playbook + dispatch.

## Sub-faza 2C — About + legal + payment

- **About** — povestea, principii, bio.
- **Privacy Policy**, **Cookie Policy**, **Terms** — limbaj juridic adecvat (RO formal, "dvs.", termeni GDPR consacrați rămân + glosar).
- **PaymentSuccess**, **PaymentCanceled** — microcopy scurt.
- **NotFound** — 404.
- `Affiliations`, `Marquee`, `HeroCardDeck` (dacă mai au string-uri hardcodate).

## Recomandare

**Începem cu Sub-faza 2A acum**, într-un singur mesaj. E partea care contează cel mai mult pentru conversie și grupează cele mai complexe componente reutilizabile (`PageHero`, `FAQAccordion`, `CurriculumAccordion`) — odată traduse, restul paginilor merge mult mai repede pentru că folosesc aceleași componente.

După 2A confirmi tonul pe Assessment + Score, apoi rulez 2B și 2C consecutiv fără să mai întreb.

## Ce rămâne neschimbat

Layout, paletă, Bauhaus, rute URL, brand names (Microsoft, Google, OpenAI, EU AI Act, Hermes, The Unlearning School), `llms.txt`/`sitemap.xml`/`robots.txt`.
