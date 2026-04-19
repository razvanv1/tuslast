

## Plan: Add concrete proof to /funding using what's on /resources

You're right — `/funding` is currently all abstract claims ("we structure programs", "most companies qualify") with zero concrete examples. The hard, specific stuff lives on `/resources`. Let's move/mirror the concrete pieces to `/funding` where they actually belong as proof.

### What's concrete on /resources that belongs on /funding

From `resources.json` → `funding` block + `cheapAi` (free tier) data:

1. **Named EU instruments** — Digital Europe Programme, Horizon Europe AI calls, PNRR Romania, POCIDIF
2. **Named vendor free tiers** — Microsoft Founders Hub ($150k Azure), AWS Activate ($100k), Google for Startups ($200k)
3. **Capability tags** — "EU structural & Horizon programmes", "National digitalization (PNRR/POCIDIF)", "Fit scoring & deadline tracking", etc.

These are exactly the "proofs" missing from `/funding`. Right now `/funding` says *"four sources, most companies qualify"* without naming a single programme.

### Changes to /funding

**Add 2 new sections, keep existing flow intact:**

#### 1. After "Available funding instruments" → new section: "Named programmes we work with"
A clean 2-column list (vendor credits | EU/national grants) showing actual programme names — no fluff, just the list:

- **Vendor free tiers & credits**: Microsoft Founders Hub, AWS Activate, Google for Startups Cloud, Microsoft MDF, AWS co-sell, Google Partner Advantage
- **EU & national grants**: Digital Europe Programme, Horizon Europe AI calls, PNRR Romania (digitalization), POCIDIF, Erasmus+

This is the proof that "four instruments" isn't hand-waving — these are real, named, current programmes.

#### 2. Before the FAQ → new section: "What we actually do behind the scenes"
Pull the 6 capability tags from `/resources` funding block and reframe them as the operational layer:
- Continuous scanning of EU & national calls
- Fit scoring against your org profile  
- Deadline & follow-up tracking
- Reuse of past application content
- Drafting structured proposal sections
- Coordinating partners & co-applicants

Frame this honestly: "This is the operational engine behind the structuring work. We'll open it up as a separate tool later — for now it runs inside our funding engagements."

This kills the abstract feel and shows there's actual machinery.

### Changes to /resources

Now that the named programmes + capability list live on `/funding`, the funding teaser on `/resources` becomes redundant detail. Slim it down to:
- Keep the kicker, title, short body
- Keep the CTA ("Request a private funding scan →")
- **Remove** the 6 tags list (they now live on `/funding`)
- **Add** a secondary link: "See the full funding practice →" pointing to `/funding`

This makes `/resources` the discovery surface and `/funding` the depth page — proper hierarchy.

### Files to edit

- `src/i18n/locales/en/funding.json` — add `programmes` block (named list) + `engine` block (6 capabilities)
- `src/i18n/locales/ro/funding.json` — same, RO native
- `src/pages/Funding.tsx` — render the 2 new sections in the right positions
- `src/i18n/locales/en/resources.json` — slim funding block, add link to /funding
- `src/i18n/locales/ro/resources.json` — same
- `src/pages/Resources.tsx` — remove the tags grid from funding section, add secondary link

### What I'm NOT doing

- Not inventing case studies / client names / numbers we can't back up
- Not adding logos (no permission)
- Not duplicating the Microsoft/AWS/Google card content from `instruments` — the new "named programmes" list is a flat reference, not a re-pitch

### One check before building

The named programmes list — should I include **all** of them on `/funding` (Microsoft Founders Hub, AWS Activate, Google for Startups, Microsoft MDF, AWS co-sell, Google Partner Advantage, Digital Europe, Horizon Europe, PNRR, POCIDIF, Erasmus+) or strip to the ones most relevant to RO mid-market (skip Founders Hub / Activate / Google for Startups since those are startup tracks already covered in the `instruments` cards)?

Default if you don't answer: include all, grouped by vendor / EU-national, no duplication of the long descriptions from `instruments`.

