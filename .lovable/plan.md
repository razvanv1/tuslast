
**Goal**: Remove "The Diagnosis" kicker from the homepage hero, then make the ShuffleDeck interaction controls dramatically more visible and engaging — the deck becomes the clear hero focal point.

**Files to edit**
- `src/pages/Index.tsx` — remove the `<p>The Diagnosis</p>` kicker above the H1.
- `src/components/ShuffleDeck.tsx` — redesign the controls under the deck.

**Changes**

1. **Hero cleanup (`Index.tsx`)**
   - Delete the "The Diagnosis" mono kicker line. Keep the H1 as-is below it.

2. **ShuffleDeck control redesign — make it feel like a game**

   Replace the current tiny faded row with a bold, editorial control panel:

   - **Hint line** ("Tap to open · Swipe to shuffle"):
     - Bigger: from `text-[9px]` → `text-xs md:text-sm`
     - Brighter: from `text-paper/45` → `text-paper/85`
     - Add a subtle pulsing arrow/finger cue (animate-pulse on a `↔` glyph) to invite swipe.
     - Wrap in a thin red-bordered pill so it reads as an instruction badge.

   - **Prev / Counter / Next row**:
     - Make Prev/Next real buttons with a paper-bordered chip style: `border border-paper/40 px-4 py-2 hover:bg-red hover:text-paper hover:border-red`
     - Larger label: `text-xs md:text-sm`, tracking preserved.
     - Counter in the middle becomes a large display element: `font-display text-3xl md:text-4xl text-red tabular-nums` with the "/ 04" in smaller paper/50.
     - Add a thin progress bar under the row showing deck position (e.g. 4 segments, current one filled red, others paper/15).

   - **"Now drawing" line**:
     - Promote to `text-2xl md:text-3xl` italic display (already display, just bigger), and put a red dot `•` glyph in front that pulses, signaling live state.

   - **Spacing**: Increase `mt-6` → `mt-8`, give the whole control block its own visual rhythm so it feels like a card-game HUD rather than utility text.

3. **No new components, no new assets** — purely Tailwind/markup changes within the existing two files. Tokens stay semantic (`text-red`, `text-paper`, `border-paper/40`).

**Visual outcome**
```text
       [ deck of 4 cards — large, dominant ]

   ┌────────────────────────────────┐
   │  ↔  Tap to open · Swipe to shuffle │   ← pill, pulsing arrow
   └────────────────────────────────┘

   [← Prev]      01 / 04      [Next →]      ← real chip buttons + big counter
   ▰▰▱▱▱▱▱▱                                  ← progress segments

       •  Now drawing: AI for Non-Technical People
```

Result: deck remains the centerpiece, but the interaction affordances are now obvious and inviting on first glance — especially on the 390px mobile viewport the user is on.
