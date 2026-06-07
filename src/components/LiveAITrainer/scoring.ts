import type { Answers, ScoreResult, Category, Recommendation } from "./types";

const FORMAT_RX = /(format|listă|lista|tabel|rezumat|json|email|bullet|markdown)/i;
const CONSTRAINT_RX = /(maxim|sub |cel mult|în |fără|nu include|limit|cuvinte|caractere)/i;
const TONE_RX = /(ton|audient|client|profesional|formal|informal|concis|scurt)/i;
const SAFETY_RX = /(anonim|fără date|fictiv|review uman|verific|mască|pseudonim|generic)/i;

const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)));

export function generateScore(a: Answers): ScoreResult {
  const task = a.task.trim();
  const prompt = a.prompt.trim();

  // Workflow Fit — based on task concreteness
  let workflowFit = 30;
  if (task.split(/\s+/).length >= 3) workflowFit += 25;
  if (task.length > 40) workflowFit += 15;
  if (/săptăm|zilnic|lun|repetit|raport|email|ofert|follow|sumar/i.test(task)) workflowFit += 20;
  workflowFit = clamp(workflowFit);

  // Prompt Quality
  let promptQuality = 20;
  if (prompt.length > 30) promptQuality += 15;
  if (FORMAT_RX.test(prompt)) promptQuality += 20;
  if (CONSTRAINT_RX.test(prompt)) promptQuality += 20;
  if (TONE_RX.test(prompt)) promptQuality += 15;
  if (prompt.length > 120) promptQuality += 10;
  promptQuality = clamp(promptQuality);

  // Data Safety
  let dataSafety = 70;
  let safetyWarning: string | undefined;
  const risky = a.safety === "Da" || a.safety === "Nu sunt sigur";
  const mitigates = SAFETY_RX.test(prompt);
  if (risky && !mitigates) {
    dataSafety = 25;
    safetyWarning =
      "Taskul implică date sensibile, dar promptul nu menționează anonimizare, date fictive sau review uman.";
  } else if (risky && mitigates) {
    dataSafety = 75;
  } else if (a.safety === "Nu") {
    dataSafety = 90;
  }

  // AI Usage composite
  const aiUsage = clamp(
    workflowFit * 0.3 + promptQuality * 0.45 + dataSafety * 0.25,
  );

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
  if (promptQuality < 50) {
    bullets.push(
      "Promptul tău e prea general. Adaugă context (cine ești, pentru cine scrii) și format de output (listă, tabel, email).",
    );
  } else {
    bullets.push(
      "Promptul are structură. Următorul pas: adaugă criterii de calitate și exemple de output dorit.",
    );
  }
  if (workflowFit < 60) {
    bullets.push(
      "Descrie taskul mai concret — durată, frecvență, ce input primești și ce output livrezi. Așa devine automatizabil.",
    );
  } else {
    bullets.push(
      "Taskul descris e clar repetitiv — exact tipul de proces unde AI dă cel mai mare câștig de timp.",
    );
  }
  if (safetyWarning) bullets.push(safetyWarning);
  else
    bullets.push(
      "Bun reflex pe partea de date. Documentează intern ce categorii de informații pot intra în tool-urile AI.",
    );

  const betterPrompt = buildBetterPrompt(a);

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

function buildBetterPrompt(a: Answers): string {
  const role = a.role.trim() || "profesionist";
  const task = a.task.trim() || "acest task";
  const safetyClause =
    a.safety === "Da" || a.safety === "Nu sunt sigur"
      ? "\nDate: folosesc exemple fictive / anonimizate. Output-ul va trece prin review uman înainte de trimitere."
      : "";
  return [
    `Rol: sunt ${role}.`,
    `Obiectiv: ${task}.`,
    `Context: [adaugă 2-3 propoziții despre situație, audiență, restricții interne].`,
    `Format output: [listă / tabel / email / rezumat — alege unul].`,
    `Constrângeri: maxim 200 de cuvinte, ton profesional, fără jargon.${safetyClause}`,
    `Înainte de răspuns, pune-mi 1-2 întrebări dacă ceva e neclar.`,
  ].join("\n");
}
