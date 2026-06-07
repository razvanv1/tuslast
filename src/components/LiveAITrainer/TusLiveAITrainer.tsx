import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TrainerCard from "./TrainerCard";
import ScorePanel from "./ScorePanel";
import type { Answers, ScoreResult } from "./types";
import { generateScore, startSession, submitAnswer } from "./trainerApi";

// RO-only section. Copy intentionally kept inline (not in i18n) — feature is RO-launch.

const EMPTY: Answers = { role: "", task: "", safety: "", prompt: "" };

const DEMO: Answers = {
  role: "Operations manager într-o firmă de distribuție",
  task: "Pregătesc săptămânal un raport de stoc pentru 3 manageri, copiez date din 2 fișiere Excel și formatez un email cu observații.",
  safety: "Da",
  prompt:
    "Ai un tabel Excel cu stocuri. Identifică produsele cu stoc sub 10 unități, grupează-le pe categorie și scrie un email scurt către managerii regionali, ton profesional, maxim 150 de cuvinte. Folosește date fictive în exemplu, output-ul final va trece prin review uman.",
};

const TusLiveAITrainer = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [done, setDone] = useState(false);
  const [partialFit, setPartialFit] = useState<number | undefined>();

  useEffect(() => {
    startSession();
  }, []);

  const patch = (p: Partial<Answers>) => setAnswers((a) => ({ ...a, ...p }));

  const next = async () => {
    await submitAnswer(step, JSON.stringify(answers));
    if (step === 2 && answers.task.trim().length > 0) {
      setPartialFit(Math.min(85, 40 + answers.task.length));
    }
    if (step === 4) {
      const r = await generateScore(answers);
      setResult(r);
    }
    setStep((s) => Math.min(5, s + 1));
  };

  const skipToDemo = async () => {
    setAnswers(DEMO);
    const r = await generateScore(DEMO);
    setResult(r);
    setStep(5);
  };

  return (
    <section className="relative bg-paper text-ink border-y-2 border-ink/10 overflow-hidden">
      <div className="absolute inset-0 bg-paper-tex opacity-60 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10 md:mb-14">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">
                Live AI Trainer
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-6">
                Începe un mini-curs AI <em className="text-red">de 5 minute.</em>
              </h2>
            </div>
            <div className="md:col-span-5 flex items-end">
              <p className="text-ink/75 text-[15px] md:text-[16px] leading-relaxed">
                Răspunde la câteva întrebări despre munca ta, primește feedback instant și află cât
                de pregătită este echipa ta să folosească AI în taskuri reale.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-7 order-1">
            <TrainerCard
              step={step}
              answers={answers}
              result={result}
              done={done}
              onAnswer={patch}
              onNext={next}
              onSkipToDemo={skipToDemo}
              onDone={() => setDone(true)}
            />
          </div>
          <div className="md:col-span-5 order-2">
            <div className="md:sticky md:top-24">
              <ScorePanel step={step} result={result} partial={{ workflowFit: partialFit }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TusLiveAITrainer;
