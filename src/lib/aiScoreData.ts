// AI Adoption Score — single source of truth for keys, weights, and rank thresholds.
// All user-facing strings (questions, options, category names, ranks, priority actions)
// live in src/i18n/locales/{en,ro}/score.json and are pulled via useTranslation in the page.

export type CategoryKey = "strategy" | "tools" | "adoption" | "impact";

/** Stable per-question metadata. Question text & options are localized in score.json. */
export const questionMeta: { categoryKey: CategoryKey }[] = [
  { categoryKey: "strategy" },
  { categoryKey: "strategy" },
  { categoryKey: "strategy" },
  { categoryKey: "tools" },
  { categoryKey: "tools" },
  { categoryKey: "tools" },
  { categoryKey: "adoption" },
  { categoryKey: "adoption" },
  { categoryKey: "adoption" },
  { categoryKey: "impact" },
];

/** Same value scale across all questions. */
export const optionValues = [0, 33, 66, 100];

export const weights: Record<CategoryKey, number> = {
  strategy: 0.30,
  tools: 0.15,
  adoption: 0.35,
  impact: 0.20,
};

export type RankKey = "leader" | "advanced" | "builder" | "starter";

export const getRankKey = (total: number): RankKey => {
  if (total >= 80) return "leader";
  if (total >= 60) return "advanced";
  if (total >= 40) return "builder";
  return "starter";
};

export const rankToneClass: Record<RankKey, string> = {
  leader: "text-emerald-700",
  advanced: "text-blue-700",
  builder: "text-amber-700",
  starter: "text-red",
};

// ─────────────────────────────────────────────────────────────────────────────
// Legacy English defaults — kept so the page renders before full i18n wiring.
// TODO: replace with t("score:...") lookups when refactoring AIAdoptionScore.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export const categoryLabels: Record<CategoryKey, string> = {
  strategy: "Strategy & Vision",
  tools: "Tools & Infrastructure",
  adoption: "Adoption & Skills",
  impact: "Impact & Measurement",
};

type LegacyQuestion = {
  categoryKey: CategoryKey;
  category: string;
  text: string;
  options: { text: string; value: number }[];
};

const opt = (text: string, value: number) => ({ text, value });

export const questions: LegacyQuestion[] = [
  { categoryKey: "strategy", category: categoryLabels.strategy, text: "Does your team have a written AI strategy tied to business goals?", options: [
    opt("No strategy, ad-hoc experiments", 0), opt("Draft exists, not shared", 33), opt("Documented, partially adopted", 66), opt("Living strategy, reviewed quarterly", 100),
  ]},
  { categoryKey: "strategy", category: categoryLabels.strategy, text: "Who owns AI initiatives in your organisation?", options: [
    opt("Nobody clearly owns it", 0), opt("IT or one champion", 33), opt("Cross-functional working group", 66), opt("Executive sponsor + dedicated lead", 100),
  ]},
  { categoryKey: "strategy", category: categoryLabels.strategy, text: "How do you decide which AI use cases to prioritise?", options: [
    opt("Whatever sounds exciting", 0), opt("Vendor pitches drive it", 33), opt("Internal request list", 66), opt("Scored against impact + feasibility", 100),
  ]},
  { categoryKey: "tools", category: categoryLabels.tools, text: "What AI tools are sanctioned and paid for by the company?", options: [
    opt("None, people use free tools privately", 0), opt("One general tool (e.g. ChatGPT)", 33), opt("A small stack (chat + one vertical tool)", 66), opt("Curated stack with SSO and governance", 100),
  ]},
  { categoryKey: "tools", category: categoryLabels.tools, text: "How is sensitive data handled when using AI?", options: [
    opt("No rules, people paste anything", 0), opt("Verbal guidance only", 33), opt("Written policy, weak enforcement", 66), opt("Policy + enterprise tools + DLP", 100),
  ]},
  { categoryKey: "tools", category: categoryLabels.tools, text: "Are AI tools integrated into your core systems (CRM, docs, email)?", options: [
    opt("Standalone only", 0), opt("Manual copy-paste workflows", 33), opt("Some integrations live", 66), opt("Deeply integrated, automated handoffs", 100),
  ]},
  { categoryKey: "adoption", category: categoryLabels.adoption, text: "What share of your team uses AI weekly for real work?", options: [
    opt("Under 10%", 0), opt("10–30%", 33), opt("30–60%", 66), opt("Over 60%", 100),
  ]},
  { categoryKey: "adoption", category: categoryLabels.adoption, text: "Has your team had structured AI training in the last 12 months?", options: [
    opt("None", 0), opt("One-off webinar", 33), opt("Workshop or short course", 66), opt("Ongoing programme with practice", 100),
  ]},
  { categoryKey: "adoption", category: categoryLabels.adoption, text: "How openly do people share AI workflows internally?", options: [
    opt("People hide their usage", 0), opt("Quiet, no sharing", 33), opt("Occasional show-and-tell", 66), opt("Regular cadence + shared library", 100),
  ]},
  { categoryKey: "impact", category: categoryLabels.impact, text: "Do you measure time or money saved from AI?", options: [
    opt("Not measured", 0), opt("Anecdotes only", 33), opt("Tracked for a few use cases", 66), opt("Tracked across the team with KPIs", 100),
  ]},
];

export const priorityActions: Record<CategoryKey, string[]> = {
  strategy: [
    "Write a one-page AI strategy: 3 outcomes, 3 use cases, owner per use case.",
    "Assign an executive sponsor and a working lead.",
    "Score every proposed use case on impact × feasibility before funding it.",
  ],
  tools: [
    "Pick one sanctioned chat tool with SSO and roll it out properly.",
    "Publish a one-page acceptable-use + data policy.",
    "Map two integrations into your CRM or docs system this quarter.",
  ],
  adoption: [
    "Run a structured cohort programme, not a one-off webinar.",
    "Create a weekly 30-min show-and-tell to surface real workflows.",
    "Make it safe to admit AI usage — leadership uses it openly first.",
  ],
  impact: [
    "Pick 3 use cases and instrument time saved per week.",
    "Tie one AI workflow to a revenue or cost KPI.",
    "Review impact monthly with the working group.",
  ],
};

export const getRank = (total: number) => {
  const key = getRankKey(total);
  const map = {
    leader: { rank: "AI Leader", desc: "You're operating ahead of most peers. Sharpen the edge.", format: "Advanced cohort + custom advisory", toneClass: rankToneClass.leader },
    advanced: { rank: "AI Advanced", desc: "Solid foundations. Time to scale and measure.", format: "Team cohort + measurement sprint", toneClass: rankToneClass.advanced },
    builder: { rank: "AI Builder", desc: "Real momentum, gaps to close before scaling.", format: "AI for Work cohort", toneClass: rankToneClass.builder },
    starter: { rank: "AI Starter", desc: "Early days. The next 90 days will define everything.", format: "Strategy call + foundations cohort", toneClass: rankToneClass.starter },
  };
  return map[key];
};

export const computeScores = (answers: Record<CategoryKey, number[]>) => {
  const catScores = {} as Record<CategoryKey, number>;
  (Object.keys(weights) as CategoryKey[]).forEach((key) => {
    const vals = answers[key] || [];
    catScores[key] = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
  });
  let total = 0;
  (Object.keys(weights) as CategoryKey[]).forEach((key) => {
    total += catScores[key] * weights[key];
  });
  total = Math.round(total);
  const sorted = (Object.entries(catScores) as [CategoryKey, number][]).sort((a, b) => a[1] - b[1]);
  const weakest = sorted[0][0];
  return { catScores, total, weakest };
};
