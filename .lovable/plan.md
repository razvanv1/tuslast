
Rescriu copy-ul newsletter-ului în Footer cu un ton mai uman, mai editorial, mai puțin "robotic corporate". Păstrez structura vizuală existentă (eyebrow badge roșu, titlu display cu italic roșu, paragraf, input + buton).

**Fișier modificat:** `src/components/Footer.tsx` (doar textele din secțiunea newsletter, liniile ~88-110)

**Copy nou propus:**

- **Eyebrow:** `Dispatch · The Unlearning Pill`
- **Titlu:** `One email a month. *Worth opening.*`
- **Subtitle:** `Field notes from inside the work — what's actually moving funding decisions, where AI is quietly rewriting jobs, and the unglamorous mechanics of building teams that ship. Written by humans who'd rather under-send than waste your inbox.`
- **Placeholder input:** `name@company.com`
- **Buton:** `Get the dispatch →`

**De ce funcționează:**
- "One email a month. Worth opening." — promisiune concretă, nu jargon ("Signal, not noise" e clișeu de LinkedIn).
- Subtitle-ul vorbește despre *ce vede cititorul*, nu despre taxonomia internă a temelor (funding intelligence / execution friction etc. sună a deck de pitch).
- "Written by humans who'd rather under-send than waste your inbox" — înlocuiește "No spam, unsubscribe anytime" care e text legal-default pe care nu-l mai citește nimeni.
- Păstrează vocea brandului: editorial Wired, italic pe accentul roșu, ton sec dar cu atitudine.

**Ce NU schimb:**
- Layout, clase, badge roșu, structura formularului, action Mailchimp, accesibilitate (label sr-only).
