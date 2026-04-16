
**Issue:** On mobile (430px), the ShuffleDeck cards overflow the screen, drag/swipe is broken, and cards don't link to their program pages.

**Root causes (from `src/components/ShuffleDeck.tsx`):**
1. Card width `260px` + page padding `px-6` (48px) = fits, but `dragConstraints={{left:0,right:0,top:0,bottom:0}}` combined with the parent's `overflow-hidden` on the hero section clips the drag motion and can block touch gestures on mobile Safari/Chrome.
2. No `touch-action: none` on the draggable element → browser hijacks horizontal swipe for scroll/back-navigation.
3. Cards are not links — clicking/tapping does nothing. User expects tap → navigate to that program's page.
4. The hero `<section>` has `overflow-hidden` which clips swipe-out animation.

**Plan:**

1. **Fix mobile drag** in `ShuffleDeck.tsx`:
   - Add `touch-action: none` (via `style={{ touchAction: "none" }}`) to the top draggable card so the browser doesn't steal the swipe.
   - Lower swipe threshold on mobile (offset > 80px or velocity > 300).
   - Remove the zero `dragConstraints` (let it free-drag); keep elastic.

2. **Fit on mobile**: reduce top card width from `260px` → `220px` on mobile, and shrink container height accordingly so it doesn't overflow the 430px viewport with padding. Add `max-w-full`.

3. **Make cards clickable links**: add `href` to each entry in `DECK` (Assessment → `/assessment`, the 3 sprint cards → `/programmes`, the 3 mechanism cards → `/programmes#mechanism` or `/about`). On the top card, a tap (no drag movement) navigates via `useNavigate`. Detect tap vs drag using offset threshold in `onDragEnd` / `onClick`.

4. **Add visual affordance**: small "Tap to open · Swipe to shuffle" hint under