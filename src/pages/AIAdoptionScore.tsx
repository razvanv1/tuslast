import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import SEO from "@/components/SEO";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  questions,
  weights,
  categoryLabels,
  priorityActions,
  getRank,
  computeScores,
  type CategoryKey,
} from "@/lib/aiScoreData";

type Stage = "quiz" | "gate" | "results";

const emailSchema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
  consent: z.boolean(),
});

const stats = [
  { value: "92%", label: "of companies invest in AI" },
  { value: "1%", label: "feel mature in AI adoption" },
  { value: "75%", label: "of AI projects stall in pilot" },
  { value: "57%", label: "of employees hide AI usage" },
];

const categoryAccent: Record<CategoryKey, string> = {
  strategy: "bg-red",
  tools: "bg-blue-700",
  adoption: "bg-amber-600",
  impact: "bg-emerald-700",
};

const AIAdoptionScore = () => {
  const { toast } = useToast();
  const [stage, setStage] = useState<Stage>("quiz");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<CategoryKey, number[]>>({
    strategy: [],
    tools: [],
    adoption: [],
    impact: [],
  });
  const [history, setHistory] = useState<{ key: CategoryKey; value: number }[]>([]);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [computed, setComputed] = useState<ReturnType<typeof computeScores> | null>(null);

  useEffect(() => {
    document.title = "AI Adoption Score, The Unlearning School";
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const total = questions.length;
  const progress = stage === "quiz" ? (currentQ / total) * 100 : 100;

  const handleSelect = (value: number) => {
    const q = questions[currentQ];
    const newAnswers = { ...answers, [q.categoryKey]: [...answers[q.categoryKey], value] };
    setAnswers(newAnswers);
    setHistory([...history, { key: q.categoryKey, value }]);
    if (currentQ + 1 < total) {
      setTimeout(() => setCurrentQ((c) => c + 1), 250);
    } else {
      setComputed(computeScores(newAnswers));
      setTimeout(() => setStage("gate"), 250);
    }
  };

  const handleBack = () => {
    if (currentQ === 0 || history.length === 0) return;
    const last = history[history.length - 1];
    const newArr = [...answers[last.key]];
    newArr.pop();
    setAnswers({ ...answers, [last.key]: newArr });
    setHistory(history.slice(0, -1));
    setCurrentQ((c) => c - 1);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse({ email, consent });
    if (!parsed.success) {
      toast({ title: "Invalid email", description: parsed.error.errors[0].message, variant: "destructive" });
      return;
    }
    if (!computed) return;
    setSubmitting(true);
    const { catScores, total: score, weakest } = computed;
    const rankInfo = getRank(score);
    const { error } = await supabase.from("ai_score_submissions").insert({
      email: parsed.data.email,
      score,
      rank: rankInfo.rank,
      category_scores: catScores,
      weakest_category: weakest,
      consent_marketing: parsed.data.consent,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Couldn't save your result", description: "Please try again.", variant: "destructive" });
      return;
    }
    setStage("results");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
  };

  const handleRetake = () => {
    setStage("quiz");
    setCurrentQ(0);
    setAnswers({ strategy: [], tools: [], adoption: [], impact: [] });
    setHistory([]);
    setEmail("");
    setConsent(false);
    setComputed(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const q = questions[currentQ];

  return (
    <>
      <SEO
        title="AI Adoption Score — Free 2-minute AI maturity test"
        description="Measure your team's AI maturity in 2 minutes. 10 weighted questions across strategy, tools, adoption and impact. Instant score, gap analysis, and a ranked next-step roadmap."
        keywords="AI maturity assessment, AI adoption score, AI readiness test, AI maturity model, free AI audit, EU AI Act readiness"
      />

      {/* HERO */}
      <section className="relative bg-background text-paper overflow-hidden border-b-2 border-paper/10">
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-6">AI Adoption Score · 2 min</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-paper leading-[0.95] max-w-5xl mb-6">
            How AI-ready is your team, <em className="text-red">really?</em>
          </h1>
          <p className="font-display italic text-xl md:text-2xl text-paper/70 max-w-3xl leading-snug mb-10">
            92% of companies invest in AI. Only 1% feel mature. Drop the self-narrative and get your maturity score, a gap analysis across four dimensions, and the next move that actually matters.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-paper/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-5xl text-red mb-1">{s.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR — paper variant */}
      <section className="relative bg-paper text-ink border-b-2 border-ink/10 overflow-hidden">
        <div className="absolute inset-0 bg-paper-tex opacity-60 pointer-events-none" />
        <div className="relative max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
          {/* Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
                {stage === "results" ? "Your result" : `Question ${Math.min(currentQ + 1, total)} of ${total}`}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
                {Math.round(progress)}%
              </p>
            </div>
            <div className="h-1 bg-ink/10 overflow-hidden">
              <motion.div
                className="h-full bg-red"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {stage === "quiz" && q && (
              <motion.div
                key={`q-${currentQ}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{q.category}</p>
                <h2 className="font-display text-3xl md:text-5xl text-ink leading-tight mb-10">
                  {q.text}
                </h2>
                <div className="grid gap-3">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.value)}
                      className="text-left border-2 border-ink/15 px-5 py-4 md:px-7 md:py-5 hover:border-red hover:bg-ink hover:text-paper transition-colors group"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 group-hover:text-paper/60 mr-3">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-base md:text-lg">{opt.text}</span>
                    </button>
                  ))}
                </div>
                {currentQ > 0 && (
                  <button
                    onClick={handleBack}
                    className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 hover:text-red transition-colors"
                  >
                    ← Previous question
                  </button>
                )}
              </motion.div>
            )}

            {stage === "gate" && (
              <motion.div
                key="gate"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">Your score is ready</p>
                <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-5">
                  Drop your email <em className="text-red">to see it.</em>
                </h2>
                <p className="font-display italic text-lg md:text-xl text-ink/70 max-w-2xl mb-10 leading-snug">
                  We'll show your maturity score, the gap analysis across all four dimensions, and the priority actions for your weakest area.
                </p>
                <form onSubmit={handleEmailSubmit} className="max-w-xl space-y-5">
                  <div>
                    <label htmlFor="ai-score-email" className="sr-only">Email</label>
                    <input
                      id="ai-score-email"
                      type="email"
                      required
                      maxLength={255}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-transparent border-2 border-ink/20 px-5 py-4 text-ink placeholder:text-ink/40 font-mono text-base focus:outline-none focus:border-red transition-colors"
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-red"
                    />
                    <span className="text-xs text-ink/60 leading-relaxed">
                      I agree to receive my score by email and occasional insights from The Unlearning School. Unsubscribe anytime. See our{" "}
                      <Link to="/privacy-policy" className="text-red hover:underline">Privacy Policy</Link>.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Saving..." : "See my score →"}
                  </button>
                </form>
              </motion.div>
            )}

            {stage === "results" && computed && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {(() => {
                  const { catScores, total: score, weakest } = computed;
                  const rankInfo = getRank(score);
                  return (
                    <>
                      <div className="text-center border-2 border-ink/15 p-10 md:p-14 mb-12 bg-paper">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-4">Your AI Adoption Score</p>
                        <p className="font-display text-7xl md:text-9xl text-ink leading-none mb-3">{score}</p>
                        <p className={`font-display text-2xl md:text-4xl ${rankInfo.toneClass} mb-2`}>{rankInfo.rank}</p>
                        <p className="font-display italic text-base md:text-lg text-ink/70 max-w-xl mx-auto">{rankInfo.desc}</p>
                      </div>

                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">Gap Analysis</p>
                      <h3 className="font-display text-3xl md:text-4xl text-ink mb-8">Where you score across the four dimensions</h3>
                      <div className="grid sm:grid-cols-2 gap-5 mb-12">
                        {(Object.entries(catScores) as [CategoryKey, number][]).map(([key, val]) => (
                          <div key={key} className="border-2 border-ink/15 p-5">
                            <div className="flex items-baseline justify-between mb-3">
                              <p className="font-display text-xl text-ink">{categoryLabels[key]}</p>
                              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                                Weight {weights[key] * 100}%
                              </p>
                            </div>
                            <div className="h-2 bg-ink/10 overflow-hidden mb-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${val}%` }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`h-full ${categoryAccent[key]}`}
                              />
                            </div>
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
                              {Math.round(val)} / 100
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">Priority Actions</p>
                      <h3 className="font-display text-3xl md:text-4xl text-ink mb-2">
                        Start here: <em className="text-red">{categoryLabels[weakest]}</em>
                      </h3>
                      <p className="text-ink/60 mb-6">Your weakest area. Move on these first.</p>
                      <ul className="space-y-3 mb-10">
                        {priorityActions[weakest].map((action) => (
                          <li key={action} className="border-l-2 border-red pl-5 py-2">
                            <p className="text-lg text-ink">{action}</p>
                          </li>
                        ))}
                      </ul>

                      <div className="border-2 border-ink/15 p-6 mb-12 bg-ink text-paper">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60 mb-2">Recommended format</p>
                        <p className="font-display text-2xl md:text-3xl text-paper">{rankInfo.format}</p>
                      </div>

                      {/* Dual CTA */}
                      <div className="border-t-2 border-ink/15 pt-10">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">What's next</p>
                        <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-3">
                          Want help <em className="text-red">closing the gaps?</em>
                        </h3>
                        <p className="font-display italic text-lg text-ink/70 max-w-2xl mb-8">
                          Walk through your results live with us, or jump straight into the cohort built for non-technical teams.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Link
                            to="/assessment#book"
                            className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors"
                          >
                            Book a free call to discuss results →
                          </Link>
                          <Link
                            to="/programmes/ai-for-non-technical-people"
                            className="inline-flex items-center px-7 py-4 border-2 border-ink/40 text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
                          >
                            See the AI for Work cohort →
                          </Link>
                        </div>
                        <p className="mt-6 text-sm text-ink/60 leading-relaxed max-w-2xl">
                          Automated email reports are coming soon — for now, save this page or screenshot your score. If you want to discuss the results, book a free call below.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 items-center">
                          <a
                            href={`mailto:?subject=${encodeURIComponent(`My AI Adoption Score: ${score}/100 — ${rankInfo.rank}`)}&body=${encodeURIComponent(`I just took the AI Adoption Score from The Unlearning School and got ${score}/100 (${rankInfo.rank}).\n\nTake yours here (2 minutes): https://tuslast.lovable.app/ai-adoption-score`)}`}
                            className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60 hover:text-red transition-colors"
                          >
                            ✉ Share score with a colleague
                          </a>
                          <button
                            onClick={handleRetake}
                            className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 hover:text-red transition-colors"
                          >
                            ↺ Retake assessment
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* METHODOLOGY */}
      <Section variant="dark" decor="edge-right">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">Methodology</p>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-6 max-w-3xl">
          A weighted model. <em className="text-red">Not a vibe-check.</em>
        </h2>
        <p className="text-paper/70 text-lg max-w-2xl mb-12 leading-relaxed">
          Not all aspects of AI readiness are equal. Adoption and strategy weigh more because they have the biggest impact on real outcomes.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60 mb-4">Weight per dimension</p>
            <ul className="divide-y divide-paper/10 border-y border-paper/10">
              {(Object.entries(weights) as [CategoryKey, number][]).map(([key, w]) => (
                <li key={key} className="flex items-center justify-between py-4">
                  <span className="font-display text-2xl text-paper">{categoryLabels[key]}</span>
                  <span className="font-mono text-sm uppercase tracking-[0.2em] text-red">{w * 100}%</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60 mb-4">Rank bands</p>
            <ul className="divide-y divide-paper/10 border-y border-paper/10">
              {[
                { range: "80–100", rank: "AI Leader" },
                { range: "60–79", rank: "AI Advanced" },
                { range: "40–59", rank: "AI Builder" },
                { range: "0–39", rank: "AI Starter" },
              ].map((b) => (
                <li key={b.rank} className="flex items-center justify-between py-4">
                  <span className="font-display text-2xl text-paper">{b.rank}</span>
                  <span className="font-mono text-sm uppercase tracking-[0.2em] text-red">{b.range}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        title="Score in hand. Now what?"
        subtitle="A 30-minute call to walk through your gaps and decide the first move that actually moves the number."
        ctaText="Book the AI Adoption Call →"
        ctaTo="/assessment"
        secondaryText="See AI for Work →"
        secondaryTo="/programmes/ai-for-non-technical-people"
        note="Free · 30 min · No pricing pitch"
      />
    </>
  );
};

export default AIAdoptionScore;
