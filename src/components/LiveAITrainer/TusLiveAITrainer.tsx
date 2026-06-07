import { useEffect, useMemo, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import TrainerCard from "./TrainerCard";
import ScorePanel from "./ScorePanel";
import type { Answers, ScoreResult } from "./types";
import { generateScore, startSession, submitAnswer } from "./trainerApi";
import { useCopy, useLang } from "./copy";

const EMPTY: Answers = { role: "", task: "", safety: "", prompt: "" };

const TusLiveAITrainer = () => {
  const lang = useLang();
  const t = useCopy();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(EMPTY);
  const [result, setResult] = useState<ScoreResult | null>(null);
  const [done, setDone] = useState(false);
  const [partialFit, setPartialFit] = useState<number | undefined>();

  const demo: Answers = useMemo(
    () => ({
      role: t.demo.role,
      task: t.demo.task,
      safety: "yes",
      prompt: t.demo.prompt,
    }),
    [t],
  );

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
      const r = await generateScore(answers, lang);
      setResult(r);
    }
    setStep((s) => Math.min(5, s + 1));
  };

  const skipToDemo = async () => {
    setAnswers(demo);
    const r = await generateScore(demo, lang);
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
                {t.eyebrow}
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-6">
                {t.headlinePart1} <em className="text-red">{t.headlineEm}</em>
              </h2>
            </div>
            <div className="md:col-span-5 flex items-end">
              <p className="text-ink/75 text-[15px] md:text-[16px] leading-relaxed">{t.intro}</p>
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
