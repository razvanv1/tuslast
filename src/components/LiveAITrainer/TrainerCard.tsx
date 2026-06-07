import { useEffect, useRef, useState } from "react";
import type { Answers, SafetyAnswer, ScoreResult } from "./types";
import LeadForm from "./LeadForm";
import Confirmation from "./Confirmation";
import { submitLead } from "./trainerApi";
import { useCopy } from "./copy";

interface TrainerCardProps {
  step: number;
  answers: Answers;
  result: ScoreResult | null;
  done: boolean;
  onAnswer: (patch: Partial<Answers>) => void;
  onNext: () => void;
  onSkipToDemo: () => void;
  onDone: () => void;
}

const FIELDS = ["role", "task", "safety", "prompt"] as const;
const SAFETY_VALUES: SafetyAnswer[] = ["yes", "no", "unsure"];

const TrainerCard = ({
  step, answers, result, done, onAnswer, onNext, onSkipToDemo, onDone,
}: TrainerCardProps) => {
  const t = useCopy();
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (step <= 4) inputRef.current?.focus();
  }, [step]);

  if (done) {
    return (
      <div className="border-2 border-ink/15 bg-paper">
        <Header step={5} live label={t.headerLabel} stepText={t.stepLabel(5)} />
        <Confirmation />
      </div>
    );
  }

  const isFinal = step === 5;
  const field = FIELDS[step - 1];
  const current = t.steps[step - 1];

  const canContinue = (() => {
    if (isFinal) return false;
    if (field === "safety") return answers.safety !== "";
    return (answers[field] as string).toString().trim().length > 1;
  })();

  return (
    <div className="border-2 border-ink/15 bg-paper">
      <Header step={step} live label={t.headerLabel} stepText={t.stepLabel(step)} />
      <Progress step={step} />

      <div className="p-8 md:p-10">
        {!isFinal && current && (
          <>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40 mb-4">
              {t.lesson(step)}
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-snug mb-8">
              {current.question}
            </h3>

            {field === "safety" ? (
              <div className="flex flex-wrap gap-3 mb-8">
                {SAFETY_VALUES.map((opt) => {
                  const active = answers.safety === opt;
                  const label =
                    opt === "yes" ? t.safety.yes : opt === "no" ? t.safety.no : t.safety.unsure;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => onAnswer({ safety: opt })}
                      className={`px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] border transition-colors ${
                        active
                          ? "bg-ink text-paper border-ink"
                          : "bg-transparent text-ink border-ink/25 hover:border-ink"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            ) : (
              <textarea
                ref={inputRef}
                value={answers[field] as string}
                onChange={(e) => onAnswer({ [field]: e.target.value } as Partial<Answers>)}
                placeholder={current.placeholder}
                rows={field === "prompt" ? 5 : 3}
                className="w-full bg-transparent border border-ink/20 px-4 py-3 text-ink text-[15px] leading-relaxed placeholder:text-ink/35 focus:border-red focus:outline-none transition-colors mb-8 resize-none"
              />
            )}

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onNext}
                disabled={!canContinue}
                className="inline-flex items-center px-7 py-4 bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-red transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {step === 4 ? t.seeScore : t.continue}
              </button>
              {step === 1 && (
                <button
                  type="button"
                  onClick={onSkipToDemo}
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55 hover:text-red transition-colors"
                >
                  {t.skipDemo}
                </button>
              )}
            </div>
          </>
        )}

        {isFinal && result && <ResultBlock result={result} />}

        {isFinal && result && (
          <LeadForm
            submitting={submitting}
            onSubmit={async (lead) => {
              setSubmitting(true);
              await submitLead(lead, result);
              setSubmitting(false);
              onDone();
            }}
          />
        )}
      </div>
    </div>
  );
};

const Header = ({
  live, label, stepText,
}: { step: number; live: boolean; label: string; stepText: string }) => (
  <div className="px-6 md:px-8 py-4 border-b border-ink/15 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3 min-w-0">
      <span className="relative inline-flex h-2 w-2">
        {live && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-red opacity-60 animate-ping" />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
      </span>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink truncate">
        {label}
      </p>
    </div>
    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55 whitespace-nowrap">
      {stepText}
    </p>
  </div>
);

const Progress = ({ step }: { step: number }) => (
  <div className="grid grid-cols-5 gap-1 px-6 md:px-8 py-3 bg-paper border-b border-ink/10">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className={`h-1 ${i <= step ? "bg-red" : "bg-ink/10"} transition-colors`}
      />
    ))}
  </div>
);

const ResultBlock = ({ result }: { result: ScoreResult }) => {
  const t = useCopy();
  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
          {t.scoreLabel}
        </p>
        <div className="flex items-baseline gap-4">
          <p className="font-display text-7xl md:text-8xl text-ink leading-none">
            {result.score}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">{t.outOf}</p>
        </div>
        <p className="font-display text-2xl text-ink mt-3">{result.category}</p>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
          {t.feedback}
        </p>
        <ul className="space-y-3">
          {result.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-ink/85 text-[15px] leading-relaxed">
              <span className="font-mono text-red text-[11px] pt-1.5">0{i + 1}</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
          {t.rewritten}
        </p>
        <pre className="bg-ink text-paper p-5 md:p-6 font-mono text-[12px] leading-relaxed whitespace-pre-wrap">
{result.betterPrompt}
        </pre>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">
          {t.recommendation}
        </p>
        <p className="font-display text-2xl text-ink">{result.recommendation}</p>
        <p className="text-ink/65 text-[14px] leading-relaxed mt-2 max-w-lg">
          {t.recoNote}
        </p>
      </div>
    </div>
  );
};

export default TrainerCard;
