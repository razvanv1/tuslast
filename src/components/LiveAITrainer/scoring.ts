import type { Answers, ScoreResult, Category, Recommendation } from "./types";
import { COPY, type Lang } from "./copy";

const FORMAT_RX = /(format|list[ăa]|tabel|table|rezumat|summary|json|email|bullet|markdown)/i;
const CONSTRAINT_RX = /(maxim|max |sub |cel mult|at most|în |fără|without|nu include|limit|cuvinte|words|caractere|characters)/i;
const TONE_RX = /(ton|tone|audient|audience|client|profesional|professional|formal|informal|concis|concise|scurt|short)/i;
const SAFETY_RX = /(anonim|anonym|fără date|no data|fictiv|fiction|review|verific|verify|mask[ăa]?|pseudonim|generic)/i;

const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

export function generateScore(a: Answers, lang: Lang = "ro"): ScoreResult {
  const c = COPY[lang].scoring;
  const task = a.task.trim();
  const prompt = a.prompt.trim();

  let workflowFit = 30;
  if (task.split(/\s+/).length >= 3) workflowFit += 25;
  if (task.length > 40) workflowFit += 15;
  if (/săptăm|zilnic|lun|repetit|raport|email|ofert|follow|sumar|week|daily|month|report|proposal|summary/i.test(task))
    workflowFit += 20;
  workflowFit = clamp(workflowFit);

  let promptQuality = 20;
  if (prompt.length > 30) promptQuality += 15;
  if (FORMAT_RX.test(prompt)) promptQuality += 20;
  if (CONSTRAINT_RX.test(prompt)) promptQuality += 20;
  if (TONE_RX.test(prompt)) promptQuality += 15;
  if (prompt.length > 120) promptQuality += 10;
  promptQuality = clamp(promptQuality);

  let dataSafety = 70;
  let safetyWarning: string | undefined;
  const risky = a.safety === "yes" || a.safety === "unsure";
  const mitigates = SAFETY_RX.test(prompt);
  if (risky && !mitigates) {
    dataSafety = 25;
    safetyWarning = c.safetyWarn;
  } else if (risky && mitigates) {
    dataSafety = 75;
  } else if (a.safety === "no") {
    dataSafety = 90;
  }

  const aiUsage = clamp(workflowFit * 0.3 + promptQuality * 0.45 + dataSafety * 0.25);

  const score = aiUsage;
  let category: Category;
  if (score < 35) category = "AI Tourist";
  else if (score < 55) category = "AI Experimenter";
  else if (score < 75) category = "AI Operator";
  else category = "AI Adoption Ready";

  let recommendation: Recommendation;
  if (category === "AI Tourist" || category === "AI Experimenter") recommendation = "AI Usage Audit";
  else if (category === "AI Operator") recommendation = "AI Adoption Sprint";
  else recommendation = "AI Back Office Kit";

  const bullets: string[] = [];
  bullets.push(promptQuality < 50 ? c.promptLow : c.promptHigh);
  bullets.push(workflowFit < 60 ? c.workflowLow : c.workflowHigh);
  if (safetyWarning) bullets.push(safetyWarning);
  else bullets.push(c.safetyOk);

  const betterPrompt = buildBetterPrompt(a, lang);

  return {
    score,
    category,
    bullets: bullets.slice(0, 3),
    betterPrompt,
    recommendation,
    metrics: { aiUsage, promptQuality, dataSafety, workflowFit },
    safetyWarning,
  };
}

function buildBetterPrompt(a: Answers, lang: Lang): string {
  const c = COPY[lang].scoring;
  const role = a.role.trim() || c.defaultRole;
  const task = a.task.trim() || c.defaultTask;
  const safetyClause = a.safety === "yes" || a.safety === "unsure" ? `\n${c.betterSafety}` : "";
  return [
    c.betterRole(role),
    c.betterObjective(task),
    c.betterContext,
    c.betterFormat,
    `${c.betterConstraints}${safetyClause}`,
    c.betterAsk,
  ].join("\n");
}
