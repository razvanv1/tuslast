

## Plan: Build "The Unlearning School" Website

Convert 7 static HTML pages into a React + Tailwind multi-page website with shared components.

### Pages (7 routes)
1. **Home** (`/`) — Hero, stats bar, adoption timeline, audience table, programme ladder, credibility cards, CTA
2. **For Operations** (`/for-operations`) — Hero, adoption pattern timeline, objections, dark CTA section
3. **For HR & L&D** (`/for-hr`) — Hero, EU AI Act context, programme cards, measurement proof
4. **For IT & Digital** (`/for-it`) — Hero, measurement layers comparison, sprint steps
5. **Programmes** (`/programmes`) — Hero, 4 programme cards (Assessment, Non-Techies, Sprint, Full Sprint), FAQ
6. **About** (`/about`) — Hero, founder bio, unfreeze-change-refreeze model, before/after workflow example, track record
7. **Assessment** (`/assessment`) — Hero, 3-step process, booking placeholder, who books this

### Shared Components
- **Navbar** — Sticky nav with logo ("The Unlearning **School**"), nav links, orange "Book Assessment →" CTA button. Mobile: hide nav links
- **Footer** — Logo, link list, copyright
- **Reusable UI** — Callout block, card grid, step list, section wrapper

### Design System (Tailwind custom config)
- **Colors**: ink `#0d0d0d`, white `#fff`, off-white `#f7f6f2`, mid `#4a4a4a`, dark `#1a1a2e`, orange `#e05c2a`, border `#e2e0d8`
- **Font**: Inter (Google Fonts), weights 400/600/700/800
- **Buttons**: Primary (orange bg), outline (border only)
- **Layout**: Max-width 1100px centered, 5% horizontal padding

### Key Features
- Fully responsive (mobile-first, nav collapses on small screens)
- All internal links use React Router
- Pixel-perfect recreation of the existing HTML designs
- SEO-friendly page titles via document.title

