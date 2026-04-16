import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";

const programmes = [
  {
    tag: "Start here · Free",
    title: "AI Adoption Gap Assessment",
    meta: ["30 minutes", "Remote or on-site", "Free"],
    body: [
      "A structured diagnostic conversation covering which AI tools are deployed, where usage is measurably low, and which 3–5 processes are highest priority for redesign.",
      "You receive a 1-page written summary within 24 hours. Designed to be shared internally. No pricing document attached.",
    ],
    output: "Written 1-page summary: adoption gap location, prioritised process list, recommended next step (if any).",
    cta: { label: "Book the Assessment →", to: "/assessment" },
    highlight: true,
  },
  {
    tag: "Core engagement",
    title: "AI for Non-Techies",
    meta: ["Half-day or full day", "On-site", "Up to 20 participants"],
    body: [
      "Role-adapted sessions where participants use AI tools on their own real tasks. Adapted for operations, HR, finance, marketing, and legal teams. No AI background required. No technical setup needed before the session.",
    ],
    bullets: [
      "Each participant identifies 3 tasks from their actual work",
      "Learns to redesign each task using AI — in the session, not as homework",
      "Leaves with 3–5 AI-assisted workflows ready for the next working day",
    ],
    output: "3–5 AI-assisted workflows per participant. Personal usage map. Replication template.",
  },
  {
    tag: "Core engagement",
    title: "Rapid Prototyping Sprint",
    meta: ["1 day", "On-site", "1 team, 1 process"],
    body: [
      "One cross-functional team. One real, named process selected before the session arrives. By end of day: a working AI-assisted version of that process — built by the team, not demonstrated by a trainer.",
    ],
    bullets: [
      "Pre-session: process is mapped and scoped in advance",
      "In-session: team redesigns the workflow with AI embedded at each bottleneck",
      "Output: working process template, measurable time baseline, replication guide",
    ],
    output: "Working AI-assisted process version. Process time delta (before vs. after). Replication template owned by the team.",
  },
  {
    tag: "Full engagement",
    title: "AI Adoption Sprint",
    meta: ["2 days", "On-site", "Multi-team"],
    body: [
      "The most comprehensive engagement. Day 1 is a structured diagnostic. Day 2 is a sprint on the highest-priority process identified in Day 1. Includes a 90-day roadmap for extending adoption across the organisation.",
    ],
    bullets: [
      "Day 1: 5–8 structured interviews, usage map, written gap report",
      "Day 2: sprint on highest-priority process (full team, real task)",
      "Post-sprint: written 90-day roadmap for additional processes and teams",
    ],
    output: "Written gap report. Redesigned process. Process time delta. 90-day adoption roadmap.",
  },
];

const faqs = [
  { q: "How do we know which programme fits our situation?", a: "The Assessment produces a 1-page written output that makes this clear. There is no guesswork. The right programme is the one that matches what the Assessment finds — not what sounds most comprehensive on paper." },
  { q: "Our teams have no AI background. Are these programmes appropriate?", a: "Yes. All programmes are designed specifically for non-technical teams. The entry condition is not AI experience — it is access to at least one AI tool (Copilot, ChatGPT, etc.) and a real process to improve. That is sufficient." },
  { q: "What if we have multiple teams or departments?", a: "The AI Adoption Sprint includes a 90-day roadmap for extension across teams and processes. Larger rollouts are scoped after the Assessment identifies where to start. We do not recommend running multiple teams simultaneously before validating the first process redesign." },
  { q: "Can costs be partially offset through vendor programmes?", a: "For organisations running Microsoft or AWS environments, programme costs can often be partially structured through vendor partner frameworks. This is discussed during the Assessment if relevant. We do not mention specific figures on this page because availability varies by organisation type and region." },
];

const Programmes = () => {
  useEffect(() => { document.title = "Programmes — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="THE CATALOGUE"
        title="From a free 30-minute diagnosis to a two-day full engagement."
        subtitle="All programmes are designed for non-technical teams. No coding. No AI background required. The entry point is the free Assessment — everything else follows from what it finds."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
      />

      <Section bordered={false}>
        <Blockquote attribution="How to use this page">
          The right programme for your organisation depends on what the Assessment finds. Every engagement listed below can be scoped after that call — not before. If you are not sure which level applies, start with the Assessment.
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
                  {p.bullets && (
                    <ul className={`space-y-2 text-[15px] ${p.highlight ? "text-paper/90" : "text-paper/80"}`}>
                      {p.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className={p.highlight ? "text-paper" : "text-red"}>→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
        subtitle="The Assessment takes 30 minutes and produces a written output you can use internally. The right programme becomes obvious from what it finds."
        ctaText="Book the free AI Adoption Gap Assessment →"
        ctaTo="/assessment"
        note="Free · No pitch · 1-page written output within 24 hours"
      />
    </>
  );
};

export default Programmes;
