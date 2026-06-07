import { useTranslation } from "react-i18next";

export type Lang = "en" | "ro";

export const COPY = {
  ro: {
    eyebrow: "Live AI Trainer",
    headlinePart1: "Începe un mini-curs AI",
    headlineEm: "de 5 minute.",
    intro:
      "Răspunde la câteva întrebări despre munca ta, primește feedback instant și află cât de pregătită este echipa ta să folosească AI în taskuri reale.",
    headerLabel: "TUS AI Trainer · sesiune live",
    stepLabel: (s: number) => `Pasul ${Math.min(s, 5)} / 5`,
    lesson: (s: number) => `Lecția ${s} / 5`,
    steps: [
      {
        question: "Începem simplu. Care este rolul tău în companie?",
        placeholder: "ex: fondator, HR manager, sales, operations...",
      },
      {
        question:
          "Care este un task repetitiv pe care îl faci săptămânal și care îți consumă timp?",
        placeholder:
          "ex: follow-up-uri, rapoarte, oferte, sumarizări, emailuri...",
      },
      {
        question:
          "Taskul implică date de client, informații financiare sau documente interne?",
        placeholder: "",
      },
      {
        question: "Scrie cum ai cere unui AI să te ajute cu acel task.",
        placeholder: "Scrie promptul tău aici...",
      },
    ],
    safety: { yes: "Da", no: "Nu", unsure: "Nu sunt sigur" },
    continue: "Continuă →",
    seeScore: "Vezi scorul →",
    skipDemo: "Vreau doar să văd exemplul →",
    scoreLabel: "Scor AI Usage",
    outOf: "/ 100",
    feedback: "Feedback",
    rewritten: "Promptul tău, rescris",
    recommendation: "Recomandare",
    recoNote:
      "Pentru context: măsuri de AI literacy și documentare internă pentru echipa ta.",
    outcomePreview: "Previzualizare rezultat",
    unlocked: "Deblocat",
    locked: "Blocat",
    category: "Categorie",
    rows: {
      workflowFit: { label: "Workflow Fit", caption: "Cât de potrivit e taskul pentru AI" },
      dataSafety: { label: "Data Safety", caption: "Risc de expunere a datelor" },
      promptQuality: { label: "Prompt Quality", caption: "Cât de structurat e promptul" },
      aiUsage: { label: "AI Usage Score", caption: "Scor compozit final" },
    },
    lead: {
      eyebrow: "Primește raportul complet",
      name: "Nume",
      email: "Email de serviciu",
      company: "Companie",
      role: "Rol",
      employees: "Număr angajați",
      consent:
        "Sunt de acord să primesc raportul și să fiu contactat pentru opțiuni de training AI.",
      submit: "Trimite raportul →",
      submitting: "Se trimite...",
    },
    confirm: {
      eyebrow: "Raport pregătit",
      title: "Raportul a plecat pe email.",
      bodyPre: "Următorul pas recomandat: ",
      bodyEm: "AI Usage Audit",
      bodyPost:
        " pentru echipa ta — o sesiune scurtă în care identificăm 3 procese unde AI dă rezultat săptămâna viitoare.",
      cta: "Programează AI Usage Audit →",
    },
    demo: {
      role: "Operations manager într-o firmă de distribuție",
      task:
        "Pregătesc săptămânal un raport de stoc pentru 3 manageri, copiez date din 2 fișiere Excel și formatez un email cu observații.",
      safety: "Da" as const,
      prompt:
        "Ai un tabel Excel cu stocuri. Identifică produsele cu stoc sub 10 unități, grupează-le pe categorie și scrie un email scurt către managerii regionali, ton profesional, maxim 150 de cuvinte. Folosește date fictive în exemplu, output-ul final va trece prin review uman.",
    },
    scoring: {
      promptLow:
        "Promptul tău e prea general. Adaugă context (cine ești, pentru cine scrii) și format de output (listă, tabel, email).",
      promptHigh:
        "Promptul are structură. Următorul pas: adaugă criterii de calitate și exemple de output dorit.",
      workflowLow:
        "Descrie taskul mai concret — durată, frecvență, ce input primești și ce output livrezi. Așa devine automatizabil.",
      workflowHigh:
        "Taskul descris e clar repetitiv — exact tipul de proces unde AI dă cel mai mare câștig de timp.",
      safetyWarn:
        "Taskul implică date sensibile, dar promptul nu menționează anonimizare, date fictive sau review uman.",
      safetyOk:
        "Bun reflex pe partea de date. Documentează intern ce categorii de informații pot intra în tool-urile AI.",
      betterRole: (role: string) => `Rol: sunt ${role}.`,
      betterObjective: (task: string) => `Obiectiv: ${task}.`,
      betterContext:
        "Context: [adaugă 2-3 propoziții despre situație, audiență, restricții interne].",
      betterFormat: "Format output: [listă / tabel / email / rezumat — alege unul].",
      betterConstraints:
        "Constrângeri: maxim 200 de cuvinte, ton profesional, fără jargon.",
      betterSafety:
        "Date: folosesc exemple fictive / anonimizate. Output-ul va trece prin review uman înainte de trimitere.",
      betterAsk: "Înainte de răspuns, pune-mi 1-2 întrebări dacă ceva e neclar.",
      defaultRole: "profesionist",
      defaultTask: "acest task",
    },
  },
  en: {
    eyebrow: "Live AI Trainer",
    headlinePart1: "Take a 5-minute",
    headlineEm: "AI mini-course.",
    intro:
      "Answer a few questions about your work, get instant feedback and find out how ready your team is to use AI on real tasks.",
    headerLabel: "TUS AI Trainer · live session",
    stepLabel: (s: number) => `Step ${Math.min(s, 5)} / 5`,
    lesson: (s: number) => `Lesson ${s} / 5`,
    steps: [
      {
        question: "Let's start simple. What's your role in the company?",
        placeholder: "e.g. founder, HR manager, sales, operations...",
      },
      {
        question:
          "What is a repetitive task you do every week that eats up your time?",
        placeholder:
          "e.g. follow-ups, reports, proposals, summaries, emails...",
      },
      {
        question:
          "Does the task involve client data, financial information or internal documents?",
        placeholder: "",
      },
      {
        question: "Write how you would ask an AI to help you with that task.",
        placeholder: "Write your prompt here...",
      },
    ],
    safety: { yes: "Yes", no: "No", unsure: "Not sure" },
    continue: "Continue →",
    seeScore: "See your score →",
    skipDemo: "Just show me the example →",
    scoreLabel: "AI Usage Score",
    outOf: "/ 100",
    feedback: "Feedback",
    rewritten: "Your prompt, rewritten",
    recommendation: "Recommendation",
    recoNote:
      "For context: AI literacy measures and internal documentation for your team.",
    outcomePreview: "Outcome preview",
    unlocked: "Unlocked",
    locked: "Locked",
    category: "Category",
    rows: {
      workflowFit: { label: "Workflow Fit", caption: "How well the task suits AI" },
      dataSafety: { label: "Data Safety", caption: "Data exposure risk" },
      promptQuality: { label: "Prompt Quality", caption: "How structured the prompt is" },
      aiUsage: { label: "AI Usage Score", caption: "Final composite score" },
    },
    lead: {
      eyebrow: "Get the full report",
      name: "Name",
      email: "Work email",
      company: "Company",
      role: "Role",
      employees: "Number of employees",
      consent:
        "I agree to receive the report and be contacted with AI training options.",
      submit: "Send the report →",
      submitting: "Sending...",
    },
    confirm: {
      eyebrow: "Report ready",
      title: "Your report is on its way.",
      bodyPre: "Recommended next step: ",
      bodyEm: "AI Usage Audit",
      bodyPost:
        " for your team — a short session where we identify 3 processes where AI delivers results next week.",
      cta: "Book AI Usage Audit →",
    },
    demo: {
      role: "Operations manager at a distribution company",
      task:
        "Every week I prepare a stock report for 3 managers, copy data from 2 Excel files and format an email with observations.",
      safety: "Yes" as const,
      prompt:
        "You have an Excel table with stock levels. Identify products with stock below 10 units, group them by category and write a short email to regional managers, professional tone, max 150 words. Use fictional data in the example; the final output will go through human review.",
    },
    scoring: {
      promptLow:
        "Your prompt is too general. Add context (who you are, who you're writing for) and an output format (list, table, email).",
      promptHigh:
        "The prompt has structure. Next step: add quality criteria and examples of the desired output.",
      workflowLow:
        "Describe the task more concretely — duration, frequency, what input you get and what output you deliver. That's how it becomes automatable.",
      workflowHigh:
        "The task you described is clearly repetitive — exactly the kind of process where AI delivers the biggest time savings.",
      safetyWarn:
        "The task involves sensitive data, but the prompt doesn't mention anonymization, fictional data or human review.",
      safetyOk:
        "Good instinct on the data side. Document internally which categories of information can go into AI tools.",
      betterRole: (role: string) => `Role: I am ${role}.`,
      betterObjective: (task: string) => `Objective: ${task}.`,
      betterContext:
        "Context: [add 2-3 sentences about the situation, audience, internal constraints].",
      betterFormat: "Output format: [list / table / email / summary — pick one].",
      betterConstraints:
        "Constraints: max 200 words, professional tone, no jargon.",
      betterSafety:
        "Data: I'm using fictional / anonymized examples. The output will go through human review before being sent.",
      betterAsk: "Before answering, ask me 1-2 questions if anything is unclear.",
      defaultRole: "professional",
      defaultTask: "this task",
    },
  },
} as const;

export function useLang(): Lang {
  const { i18n } = useTranslation();
  return i18n.language?.startsWith("ro") ? "ro" : "en";
}

export function useCopy() {
  const lang = useLang();
  return COPY[lang];
}
