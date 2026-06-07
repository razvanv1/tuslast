import type { Answers, LeadData, ScoreResult } from "./types";
import { generateScore as computeScore } from "./scoring";
import type { Lang } from "./copy";

const log = (event: string, payload?: unknown) => {
  // eslint-disable-next-line no-console
  console.log("[trainer]", event, payload ?? {});
};

export async function startSession(): Promise<{ sessionId: string }> {
  const sessionId = `tus_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  log("trainer_started", { sessionId });
  return { sessionId };
}

export async function submitAnswer(stepId: number, answer: string): Promise<void> {
  log("trainer_step_completed", { stepId, answer });
}

export async function generateScore(answers: Answers, lang: Lang = "ro"): Promise<ScoreResult> {
  const result = computeScore(answers, lang);
  log("trainer_score_generated", { score: result.score, category: result.category });
  return result;
}

export async function submitLead(lead: LeadData, score: ScoreResult): Promise<{ ok: true }> {
  log("trainer_lead_submitted", { lead, score: score.score, category: score.category });
  return { ok: true };
}
