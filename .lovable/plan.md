
Plan: înlocuiesc tonurile shiny/uniform-black cu o paletă matte black + dark grey (mai multă variație tonală între secțiuni) și măresc accentele Kandinsky/Bauhaus care apar prea mici în backdrop-uri.

## Ce schimb

### 1. Paletă — matte black + dark grey (în `src/index.css`)
Trec de la negru shiny uniform la un set de tonuri matte cu contrast subtil între secțiuni:
- `--background` (matte black de bază): `0 0% 6%` → `0 0% 8%` (mai puțin "deep black", mai mult charcoal mat)
- `--section-darker`: ajustat la `0 0% 5%` (matte deep, fără luciu)
- `--section-graphite`: ajustat la `220 4% 14%` (dark grey cu nuanță rece subtilă, înlocuiește "graphite cu sheen")
- Elimin / reduc gradientele și sheen-urile pe `.bg-section-graphite` (dacă există un `background-image` cu gradient — îl scot, las culoare plată mată)
- Adaug un al patrulea ton: `--section-slate` (`220 3% 11%`) pentru și mai multă variație între secțiuni consecutive

### 2. Variantă nouă în `Section.tsx`
Adaug `variant="slate"` ca opțiune, ca să pot alterna 4 tonuri (dark / darker / graphite / slate) în loc de 3 — rupe monotonia fără să schimb structura paginii.

### 3. Accente Kandinsky mai mari (în `src/components/bauhaus/BauhausBackdrop.tsx`)
Accentele secundare apar la `w-20`–`w-28` și sunt aproape invizibile. Le măresc cu ~40–60%:
- Compoziții principale: `w-48 md:w-64` → `w-64 md:w-80` (corner-tl, corner-bl)
- Compoziții corner-tr / corner-br: `w-52 md:w-72` → `w-72 md:w-96`
- Accente secundare (DotGrid, DiagonalLines, CrossHair, SquareStack, WaveLines): `w-20`–`w-28` → `w-32`–`w-44`
- Center-burst: `w-72 md:w-96` → `w-96 md:w-[32rem]`
- Cresc ușor opacitatea accentelor secundare (`0.5–0.6` → `0.65–0.75`) ca să fie vizibile peste matte black

### 4. Verificare contrast
Mă asigur că `mix-blend-screen` rămâne lizibil pe noile tonuri matte (nu mai e negru pur, deci shape-urile vor avea ușor mai puțin contrast — compensez prin opacitate crescută la pasul 3).

## Fișiere atinse
- `src/index.css` — tokens de culoare + eliminare sheen
- `src/components/Section.tsx` — adaug `variant="slate"`
- `src/components/bauhaus/BauhausBackdrop.tsx` — măresc shape-urile

## Ce NU schimb
- Paleta `--bau-*` (culorile Kandinsky rămân identice)
- Tipografia, layout-ul, structura paginilor
- Variantele `paper` (cream-ul rămâne neatins)
