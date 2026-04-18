
## Pagina Events & Keynotes — refactor pentru a vinde evenimentele

### Diagnoză rapidă

Pagina actuală (`src/pages/Events.tsx`) e bine structurată editorial, dar nu vinde. Problemele:

1. **Hook-ul lipsește în prima secțiune vizibilă.** Titlul "They leave with something they built" e bun, dar subtitle-ul nu spune CE construiesc. Vizitatorul nu înțelege în 5 secunde ce primește dacă te aduce la evenimentul lui.
2. **"Live prototyping" nu apare nicăieri** — deși ăsta e diferențiatorul real. Oamenii ies din sală cu un prototip funcțional pe problema lor, nu cu slide-uri.
3. **Formatele (01/02/03) descriu generic.** Nu există un "iată cum arată o sesiune live de prototipare, minut cu minut".
4. **CTA-urile sunt slabe.** "AI Adoption Call" e generic și nu spune că e despre evenimente. Trebuie "Book a 30-min call to scope your event".
5. **Lipsește dovadă socială / context concret** — câte evenimente livrate, ce sectoare, ce companii (chiar și anonimizate: "bancă top 5 RO", "fond de investiții EU").
6. **Nu există un "what happens in the room" walkthrough** — fluxul real al unei sesiuni live.

### Ce schimbăm

**1. Hero — refocusare pe live prototyping ca hook principal**
- Title nou: "Live AI prototyping. On your workflows. In the room."
- Subtitle care explică în 2 fraze: ei aduc o problemă reală → ies cu un prototip funcțional + prompt sheet
- CTA primary: "Book your event call →" (nu "AI Adoption Call")
- CTA secondary: "See how a session runs ↓" (anchor către secțiunea nouă "Inside the room")
- Note rămâne tehnic (durată, capacitate, sector-adapted)

**2. Secțiune nouă: "Inside the room" — walkthrough live prototyping**
Inserată după intro, înainte de Formats. Layout: timeline pe verticală cu 4-5 etape ale unei sesiuni de 4 ore (workshop standard):
- `00:00` Intake — echipele aduc 1 problemă reală pe care o au săptămâna asta
- `00:30` Demo live — construiesc primul prototip pe problema unei echipe, cu eșecuri reale incluse
- `01:30` Hands-on — fiecare echipă construiește pe problema lor, eu trec pe la mese
- `03:00` Showcase — fiecare echipă arată ce a construit, primesc feedback
- `04:00` Plecăm cu — prompt sheet copy-paste + prototipul funcțional + plan de continuare

Asta e secțiunea care vinde. Oamenii înțeleg exact ce primesc.

**3. Formats — adăugăm "what you walk out with" la fiecare card**
Sub `body`, adăugăm o linie nouă `outcome` (ex: "Walk out with: prompt sheet + 1 working prototype per team"). Asta închide vânzarea pe fiecare format.

**4. CTA-uri reformulate peste tot**
- Hero primary: "Book your event call →"
- Final CTA: păstrăm structura dar titlu mai direct: "Bring this to your team."
- Toate spun explicit "event" / "session", nu "AI adoption call" generic.

**5. Mini-bloc de social proof / track record**
Bandă scurtă între "Inside the room" și "Formats": 3 numere statice (ex: "40+ sessions delivered · 8 sectors · 2,500+ people in rooms"). Dacă cifrele reale sunt diferite, le pun la întrebare înainte de implementare.

**6. Secțiunea "Included" — păstrăm dar mutăm "live facilitation by Răzvan" pe primul loc**
Și adăugăm explicit: "Real prototypes built on your problems, not slideware."

### Fișiere modificate

- `src/i18n/locales/en/events.json` — rescriere hero, adăugare secțiune `inside`, adăugare `outcome` pe fiecare format, reformulare CTA-uri, adăugare bloc `proof`
- `src/i18n/locales/ro/events.json` — același set de modificări, traduse natural în RO
- `src/pages/Events.tsx` — adăugare secțiune nouă "Inside the room" (timeline), adăugare bandă de proof, adăugare outcome pe carduri, schimbare CTA labels

### Detaliu tehnic

Secțiunea "Inside the room" va fi un `<Section variant="paper">` cu un layout grid pe 2 coloane pe desktop (col-span-4 pentru titlu/kicker, col-span-8 pentru timeline). Timeline-ul: fiecare etapă e un rând cu `font-mono` pentru timestamp în roșu, titlu display mediu și body. Border-bottom subtle între ele, în stilul existent al secțiunii "Included".

Banda de proof: rând simplu cu 3 coloane, numerele mari în display, label-urile în mono uppercase — pattern deja folosit pe site.

### O singură întrebare blocantă

Înainte să scriu textele, am nevoie să confirmi cifrele pentru banda de social proof — altfel scot blocul complet și pagina merge fără el.
