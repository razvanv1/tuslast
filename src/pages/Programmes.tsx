import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";

const programmes = [
  {
    tag: "Step 1 · Free · Entry point",
    title: "AI Adoption Gap Assessment",
    meta: ["Free", "1 working session", "Report in 5 business days"],
    body: [
      "One working session. We map what your company actually does with the AI tools it already pays for, and where the gaps create real risk.",
      "Includes a license & vendor audit, usage gap map per team, EU AI Act risk flags (Article 4), and 3–5 specific workflows worth fixing now — prioritised by impact. Delivered as a written report formatted for leadership, not IT.",
    ],
    output: "Written report (5 business days): license audit, usage gap map, AI Act risk flags, 3–5 prioritised use cases, one clear next step.",
    cta: { label: "Book the Assessment →", to: "/assessment" },
    highlight: true,
  },
  {
    tag: "Step 2 · Core program",
    title: "AI for Non-Technical People",
    meta: ["Modular: 1 session → full program", "Cross-functional teams", "In-person, hybrid, or online"],
    body: [
      "A structured adoption program for non-technical business teams, built entirely on the AI tools and licenses you already pay for. Modular delivery: Discovery (1×2h), Short Sprint (2–3 sessions), or Full Program (4+ sessions).",
      "Covers adoption infrastructure, workflow integration, internal champions, and a 30-day action plan. Evaluated by operational adoption, not attendance.",
    ],
    output: "First trained cohort, validated prompt frameworks, tested workflows, 2–3 internal champions, manager-facing 30-day adoption roadmap.",
    cta: { label: "See the full program →", to: "/programmes/ai-for-non-technical-people" },
  },
  {
    tag: "Step 3 · Accelerator",
    title: "Events & Keynotes",
    meta: ["90 min – 2 days", "15 to 500 people", "Sector-adapted"],
    body: [
      "Workshops, hackathons, and keynotes for companies that need fast proof, internal momentum, or a way to show leadership what AI actually looks like in practice.",
      "Three formats: Keynote + Q&A (90 min, up to 500), Hands-on workshop (½ or full day, 15–50 participants), Internal hackathon (1–2 days). Every demo is built around your workflows, not generic productivity examples.",
    ],
    output: "Copy-paste prompt sheets every participant takes out of the room. Post-session resource pack. Optional scoped proposal for follow-up adoption work.",
    cta: { label: "See event formats →", to: "/events" },
  },
  {
    tag: "Step 4 · Deal closer",
    title: "Funding Structuring",
    meta: ["Custom", "Per qualifying instrument", "Romania & EU"],
    body: [
      'Your AI program might already be funded. Vendor MDF programs, co-sell budgets, and EU digital grants exist specifically to fund this kind of work. Most companies qualify for at least one. Most have never claimed it.',
      "We turn your AI adoption program into something that qualifies. We handle the structuring, support the application, and align delivery with documentation requirements so reimbursement actually happens.",
    ],
    output: "A fully funded or significantly reduced cost adoption program. Microsoft MDF / co-sell, AWS partner programs, or EU Digital Europe grants — whichever fits.",
    cta: { label: "See funding options →", to: "/funding" },
  },
];

const faqs = [
  { q: "How do we know which programme fits our situation?", a: "Start with the Assessment. The 1-page written output makes it specific. The right programme is the one that matches what the Assessment finds — not what sounds most comprehensive on paper." },
  { q: "Our teams have no AI background. Is that a problem?", a: 'That is exactly the condition all our programmes are designed for. The entry question is not "are they ready?" — it is "which one process should we fix first?"' },
  { q: '"We don\'t have budget for this right now."', a: "In most cases, that's not accurate — it means the budget hasn't been identified or structured correctly. Microsoft, AWS, and Google allocate Market Development Funds every quarter to support adoption programmes. Most companies qualify. Most don't know it. The Funding Structuring track exists for exactly this." },
  { q: "Are we required to do this under the EU AI Act?", a: "Since February 2025, the EU AI Act (Article 4) requires organisations to ensure AI literacy across employees. It is a legal obligation, not a recommendation. A programme that demonstrably changes daily working behaviour satisfies it. A one-hour awareness webinar does not." },
];

const Programmes = () => {
  useEffect(() => { document.title = "Programmes — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="THE CATALOGUE · 4 STEPS"
        title="From a free diagnostic to a fully funded adoption program."
        subtitle="Four programmes, designed to be used in order. Start with the Assessment. Everything else is scoped from what it finds."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
      />

      <Section bordered={false}>
        <Blockquote attribution="How to use this page">
          The right programme depends on what the Assessment finds. Every engagement listed below can be scoped after that call — not before. If you are not sure which step applies, start with the Assessment.
        </Blockquote>
      </Section>

      <Section>
        <div className="space-y-px bg-paper/10">
          {programmes.map((p) => (
            <article
              key={p.title}
              className={`p-8 md:p-12 ${p.highlight ? "bg-red text-paper" : "bg-background text-paper"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <p className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-4 ${p.highlight ? "text-paper/80" : "text-red"}`}>
                    {p.tag}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight mb-5">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.meta.map((m) => (
                      <span
                        key={m}
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 ${p.highlight ? "bg-paper/15 text-paper" : "bg-paper/10 text-paper/80"}`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  {p.body.map((para, i) => (
                    <p
                      key={i}
                      className={`text-[15px] leading-relaxed ${p.highlight ? "text-paper/90" : "text-paper/80"}`}
                    >
                      {para}
                    </p>
                  ))}
                  <div className={`mt-6 border-t pt-4 ${p.highlight ? "border-paper/30" : "border-paper/15"}`}>
                    <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-2 ${p.highlight ? "text-paper/80" : "text-red"}`}>
                      Output
                    </p>
                    <p className="text-[15px]">{p.output}</p>
                  </div>
                  {p.cta && (
                    <Link
                      to={p.cta.to}
                      className="inline-flex items-center px-6 py-3 mt-4 bg-paper text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
                    >
                      {p.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Common questions</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-10 max-w-3xl">
          Asked. Answered.
        </h2>
        <div className="space-y-px bg-ink/10">
          {faqs.map((f) => (
            <div key={f.q} className="bg-paper p-6 md:p-8">
              <p className="font-display text-xl text-ink mb-2">{f.q}</p>
              <p className="text-ink/70 text-[15px] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Not sure where to start?"
        subtitle="The Assessment takes one working session and produces a written report you can use internally. The right programme becomes obvious from what it finds."
        ctaText="Book the free AI Adoption Gap Assessment →"
        ctaTo="/assessment"
        note="Free · No pitch · Written report within 5 business days"
      />
    </>
  );
};

export default Programmes;
