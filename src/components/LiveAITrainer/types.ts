export type SafetyAnswer = "Da" | "Nu" | "Nu sunt sigur";

export interface Answers {
  role: string;
  task: string;
  safety: SafetyAnswer | "";
  prompt: string;
}

export type Category =
  | "AI Tourist"
  | "AI Experimenter"
  | "AI Operator"
  | "AI Adoption Ready";

export type Recommendation =
  | "AI Usage Audit"
  | "AI Adoption Sprint"
  | "AI Back Office Kit";

export interface ScoreResult {
  score: number;
  category: Category;
  bullets: string[];
  betterPrompt: string;
  recommendation: Recommendation;
  metrics: {
    aiUsage: number;
    promptQuality: number;
    dataSafety: number;
    workflowFit: number;
  };
  safetyWarning?: string;
}

export interface LeadData {
  name: string;
  email: string;
  company: string;
  role: string;
  employees: "1-10" | "11-50" | "51-200" | "200+";
  consent: boolean;
}
