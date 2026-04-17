

## Update: Bauhaus shapes = vivid Kandinsky popsicle palette

User vrea ca toate formele geometrice Bauhaus să fie în culori vii, saturate, "popsicle shiny" — stil Kandinsky autentic, nu doar red + blue din paleta existentă.

## Paletă extinsă (doar pentru forme decorative)

Adaug în `index.css` un set de tokens noi `--bau-*` (folosite EXCLUSIV de SVG-urile Bauhaus, nu intră în UI/text/butoane — păstrăm contrast și brand intact):

- `--bau-red`: `0 85% 55%` (popsicle red)
- `--bau-yellow`: `48 100% 58%` (Kandinsky yellow)
- `--bau-blue`: `220 90% 52%` (vivid cobalt)
- `--bau-cyan`: `190 85% 55%` (ice pop cyan)
- `--bau-pink`: `330 85% 65%` (hot pink)
- `--bau-orange`: `22 95% 58%` (popsicle orange)
- `--bau-green`: `150 70% 48%` (mint pop)
- `--bau-purple`: `270 70% 60%` (Itten violet)
- `--bau-black`: `0 0% 8%` (Bauhaus pure black accent)

Tailwind: extind `colors.bau.{red,yellow,blue,cyan,pink,orange,green,purple,black}` în `tailwind.config.ts` ca să le pot folosi `fill-bau-yellow text-bau-pink` etc.

## Aplicare în `BauhausShapes.tsx`

Fiecare primitivă primește o paletă rotativă în loc de mono `currentColor`:
- `<CircleStack/>` — 3 cercuri: yellow + pink + cobalt
- `<TriangleGrid/>` — triunghiuri alternând red/yellow/blue (Itten classic)
- `<HalfMoon/>` — orange sau cyan
- `<DotGrid/>` — puncte multicolore aleatorii (seeded)
- `<DiagonalLines/>` — linii alternând purple/cyan/yellow
- `<ArcSweep/>` — arc gros yellow sau pink
- `<SquareStack/>` — Albers: blue + orange + pink suprapuse
- `<CrossHair/>` — cruce red + cerc yellow
- `<WaveLines/>` — gradient cyan→pink
- `<CompositionA/B/C>` — compoziții complete Kandinsky-style cu 4-5 culori per compoziție

Toate formele primesc:
- `opacity` ridicat (60-90% în loc de 10-20%) ca să se vadă culorile vii
- `mix-blend-mode: screen` pe dark sections (culorile pop pe gri)
- `mix-blend-mode: multiply` pe paper sections
- Filtru SVG `<feGaussianBlur>` foarte subtil + `drop-shadow` pentru efectul "shiny popsicle" (glow ușor în jurul fiecărei forme)

## Fișiere atinse

**Edit**: 
- `src/index.css` — adaug 9 tokens `--bau-*` în `:root`
- `tailwind.config.ts` — extind `colors.bau.*`
- `src/components/bauhaus/BauhausShapes.tsx` — refactor toate primitivele cu paleta vie + filtru shiny
- `src/components/bauhaus/BauhausBackdrop.tsx` — crește opacity default de la 10-20% la 60-80%

**Memorie**: update `mem://design/bauhaus-system` cu noua paletă popsicle.

## Rezultat

Site-ul capătă explozii de culoare Kandinsky autentice — galben, cyan, pink, orange, violet — pe fundalul gri închis, cu un glow subtil "popsicle shiny". Brandul (red `#c03a1e` + blue + paper) rămâne neschimbat pentru text, butoane, headings; doar formele decorative devin vii.

