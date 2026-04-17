import { useState } from "react";
import { ChevronDown, BookOpen, Wrench, Target, CheckCircle2 } from "lucide-react";

export interface CurriculumSession {
  num: string;
  title: string;
  body?: string;
  topics: string[];
  practice?: { h: string; body: string }[];
  useCases?: string[];
  outcome?: string;
  /** Optional override for the small label above the title (e.g. "Week 01 · Build sprint"). */
  kicker?: string;
}

interface CurriculumAccordionProps {
  sessions: CurriculumSession[];
}

const CurriculumAccordion = ({ sessions }: CurriculumAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10">
      {/* Progress rail */}
      <div className="hidden md:flex items-center gap-2 mb-8 px-2">
        {sessions.map((s, i) => (
          <div key={s.num} className="flex items-center gap-2 flex-1">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className={`flex items-center gap-3 group transition-all ${
                openIndex === i ? "scale-105" : "opacity-60 hover:opacity-100"
              }`}
            >
              <span
                className={`flex items-center justify-center w-9 h-9 rounded-full font-mono text-[11px] font-bold transition-all ${
                  openIndex === i
                    ? "bg-red text-paper shadow-[0_0_24px_-4px_hsl(var(--red)/0.7)]"
                    : "bg-paper/10 text-paper/70 group-hover:bg-paper/20"
                }`}
              >
                {s.num}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70 hidden lg:inline whitespace-nowrap">
                Module {s.num}
              </span>
            </button>
            {i < sessions.length - 1 && (
              <div className="flex-1 h-px bg-gradient-to-r from-paper/20 via-paper/10 to-paper/5" />
            )}
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {sessions.map((s, i) => {
          const isOpen = openIndex === i;
          return (
            <article
              key={s.num}
              className={`relative overflow-hidden border transition-all duration-300 rounded-lg ${
                isOpen
                  ? "border-red/40 bg-gradient-to-br from-paper/[0.04] to-paper/[0.01] shadow-[0_20px_60px_-30px_hsl(var(--red)/0.4)]"
                  : "border-paper/10 bg-paper/[0.02] hover:border-paper/25 hover:bg-paper/[0.04]"
              }`}
            >
              {/* Accent stripe */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
                  isOpen ? "bg-red" : "bg-paper/15"
                }`}
              />

              {/* Header */}
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-5 md:gap-7 text-left px-6 md:px-8 py-6 md:py-7 group"
                aria-expanded={isOpen}
              >
                <span
                  className={`flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full font-display text-2xl md:text-3xl transition-all ${
                    isOpen
                      ? "bg-red text-paper shadow-[0_8px_24px_-8px_hsl(var(--red)/0.7)]"
                      : "bg-paper/10 text-paper/80 group-hover:bg-paper/20"
                  }`}
                >
                  {s.num}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red/80 mb-1">
                    {s.kicker ?? `Module ${s.num} · Live session`}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-paper leading-tight">
                    {s.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-paper/60 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-red" : "group-hover:text-paper"
                  }`}
                  size={24}
                />
              </button>

              {/* Body */}
              <div
                className={`grid transition-all duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 md:px-8 pb-8 md:pb-10 pt-2">
                    {s.body && (
                      <p className="text-paper/80 text-[15px] md:text-base leading-relaxed mb-8 max-w-3xl">
                        {s.body}
                      </p>
                    )}

                    <div className={`grid grid-cols-1 ${s.practice && s.practice.length > 0 ? "md:grid-cols-2" : ""} gap-5 mb-6`}>
                      {/* Topics */}
                      <div className="bg-background/60 backdrop-blur-sm border border-paper/10 rounded-md p-5 md:p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen size={14} className="text-red" />
                          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red">
                            What's covered
                          </p>
                        </div>
                        <ul className="space-y-2">
                          {s.topics.map((t) => (
                            <li
                              key={t}
                              className="flex gap-3 text-paper/85 text-[14px] leading-relaxed"
                            >
                              <span className="text-red font-mono text-xs mt-1">→</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Practice */}
                      {s.practice && s.practice.length > 0 && (
                        <div className="bg-background/60 backdrop-blur-sm border border-paper/10 rounded-md p-5 md:p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Wrench size={14} className="text-red" />
                            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red">
                              Hands-on practice
                            </p>
                          </div>
                          <ul className="space-y-3">
                            {s.practice.map((p) => (
                              <li key={p.h} className="text-paper/85 text-[14px] leading-relaxed">
                                <span className="font-semibold text-paper block mb-0.5">
                                  {p.h}
                                </span>
                                <span className="text-paper/65">{p.body}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {s.useCases && s.useCases.length > 0 && (
                      <div className="bg-background/60 backdrop-blur-sm border border-paper/10 rounded-md p-5 md:p-6 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Target size={14} className="text-red" />
                          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red">
                            Real use cases participants work on
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {s.useCases.map((u) => (
                            <span
                              key={u}
                              className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/80 border border-paper/25 bg-paper/5 px-3 py-1.5 rounded-full hover:border-red hover:text-red transition-colors cursor-default"
                            >
                              {u}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Outcome */}
                    {s.outcome && (
                      <div className="flex gap-4 items-start border-l-2 border-red bg-red/5 px-5 py-4 rounded-r-md">
                        <CheckCircle2
                          size={18}
                          className="text-red flex-shrink-0 mt-0.5"
                        />
                        <p className="font-display italic text-[15px] md:text-base text-paper/90 leading-snug">
                          {s.outcome}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default CurriculumAccordion;
