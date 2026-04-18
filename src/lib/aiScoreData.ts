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
