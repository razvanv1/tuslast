// AI Adoption Score — single source of truth for questions, weights, ranks, and priority actions.
// Logic ported 1:1 from the original calculator spec.

export type CategoryKey = "strategy" | "tools" | "adoption" | "impact";

export interface Question {
  category: string;
  categoryKey: CategoryKey;
  text: string;
  options: { text: string; value: number }[];
}

export const questions: Question[] = [
  {
    category: "Leadership & Strategy",
    categoryKey: "strategy",
    text: "Does your organization have a documented AI strategy?",
    options: [
      { text: "No strategy exists", value: 0 },
      { text: "Informal / in discussion", value: 33 },
      { text: "Documented but not widely shared", value: 66 },
      { text: "Documented, communicated, and reviewed regularly", value: 100 },
    ],
  },
  {
    category: "Leadership & Strategy",
    categoryKey: "strategy",
    text: "Are senior leaders actively using AI in their daily work?",
    options: [
      { text: "No, leadership is not using AI", value: 0 },
      { text: "A few leaders experiment occasionally", value: 33 },
      { text: "Most leaders use AI regularly", value: 66 },
      { text: "Leadership champions AI and models usage for the team", value: 100 },
    ],
  },
  {
    category: "Leadership & Strategy",
    categoryKey: "strategy",
    text: "Is there a dedicated budget for AI training and tools?",
    options: [
      { text: "No budget allocated", value: 0 },
      { text: "Ad-hoc spending when needed", value: 33 },
      { text: "Budget exists but not formally tracked", value: 66 },
      { text: "Dedicated annual budget with clear allocation", value: 100 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    categoryKey: "tools",
    text: "Do employees have access to approved AI tools?",
    options: [
      { text: "No approved tools — people use whatever they find", value: 0 },
      { text: "Some tools available but no clear guidance", value: 33 },
      { text: "Approved toolset exists, most people know about it", value: 66 },
      { text: "Clear approved toolkit with onboarding for each tool", value: 100 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    categoryKey: "tools",
    text: "Are AI tools integrated into daily workflows?",
    options: [
      { text: "No — AI sits alongside regular tools, unused", value: 0 },
      { text: "Some individuals have integrated AI", value: 33 },
      { text: "Several teams have AI in their workflows", value: 66 },
      { text: "AI is embedded in core processes across the organization", value: 100 },
    ],
  },
  {
    category: "Tools & Infrastructure",
    categoryKey: "tools",
    text: "Are there clear guidelines on which AI tool to use for which task?",
    options: [
      { text: "No guidelines", value: 0 },
      { text: 'Informal knowledge — "ask someone who knows"', value: 33 },
      { text: "Some documentation exists", value: 66 },
      { text: "Clear decision framework documented and shared", value: 100 },
    ],
  },
  {
    category: "Team Adoption & Skills",
    categoryKey: "adoption",
    text: "What percentage of your team regularly uses AI in their work?",
    options: [
      { text: "Less than 10%", value: 0 },
      { text: "10–30%", value: 33 },
      { text: "30–60%", value: 66 },
      { text: "Over 60%", value: 100 },
    ],
  },
  {
    category: "Team Adoption & Skills",
    categoryKey: "adoption",
    text: "Does your organization provide formal AI training?",
    options: [
      { text: "No training available", value: 0 },
      { text: "Self-service resources only", value: 33 },
      { text: "Optional workshops or courses", value: 66 },
      { text: "Structured training program with follow-up", value: 100 },
    ],
  },
  {
    category: "Team Adoption & Skills",
    categoryKey: "adoption",
    text: "Are there identified AI champions who mentor others?",
    options: [
      { text: "No champions identified", value: 0 },
      { text: "A few people help informally", value: 33 },
      { text: "Champions recognized but not formally supported", value: 66 },
      { text: "Formal champion program with time/resources allocated", value: 100 },
    ],
  },
  {
    category: "Impact & Measurement",
    categoryKey: "impact",
    text: "Can you measure time saved or productivity gained from AI usage?",
    options: [
      { text: "We have no measurement at all", value: 0 },
      { text: "Some people track anecdotally", value: 33 },
      { text: "We have metrics for specific use cases", value: 66 },
      { text: "Organization-wide tracking with regular reporting", value: 100 },
    ],
  },
];

export const weights: Record<CategoryKey, number> = {
  strategy: 0.30,
  tools: 0.15,
  adoption: 0.35,
  impact: 0.20,
};

export const categoryLabels: Record<CategoryKey, string> = {
  strategy: "Strategy",
  tools: "Tools",
  adoption: "Adoption",
  impact: "Impact",
};

export const priorityActions: Record<CategoryKey, string[]> = {
  strategy: [
    "Create a one-page AI policy",
    "Appoint an executive sponsor",
    "Identify and approve 3 initial use cases",
  ],
  tools: [
    "Define default AI tools for the org",
    "Document where AI is permitted vs forbidden",
    "Simplify access — single sign-on, bookmarks",
  ],
  adoption: [
    "Run a cohort workshop with 10 people",
    "Identify 2–3 internal champions",
    "Measure usage weekly for 30 days",
  ],
  impact: [
    "Track hours saved per week per use case",
    "Measure frequency + quality of AI outputs",
    "Quantify one repetitive process fully",
  ],
};

export interface RankInfo {
  rank: string;
  desc: string;
  toneClass: string; // tailwind text color class using semantic tokens
  format: string;
}

export const getRank = (total: number): RankInfo => {
  if (total >= 80) {
    return {
      rank: "AI Leader",
      desc: "Strong maturity. Next step: scale and govern.",
      toneClass: "text-emerald-700",
      format: "Executive briefing + scale plan (2h)",
    };
  }
  if (total >= 60) {
    return {
      rank: "AI Advanced",
      desc: "Good momentum. Opportunity: standardize and align leadership.",
      toneClass: "text-blue-700",
      format: "4-session enablement sprint",
    };
  }
  if (total >= 40) {
    return {
      rank: "AI Builder",
      desc: "Activity without structure. Need: standards, champions, training.",
      toneClass: "text-amber-700",
      format: "2-session starter sprint",
    };
  }
  return {
    rank: "AI Starter",
    desc: "Early stage. Fastest win: enablement sprint.",
    toneClass: "text-red",
    format: "1-day AI reset workshop",
  };
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
