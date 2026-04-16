import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Kicker, SectionHeading } from "@/components/Editorial";

const programmes = [
  {
    num: "00",
    tag: "Start Here · Free",
    title: "AI Adoption Gap Assessment",
    details: "30 minutes · Remote or on-site · Free",
    desc: "A structured diagnostic conversation covering which AI tools are deployed, where usage is measurably low, and which 3–5 processes are highest priority for redesign. You receive a 1-page written summary within 24 hours.",
    output: "Written 1-page summary: adoption gap location, prioritised process list, recommended next step.",
    cta: "Book the Assessment →",
    to: "/assessment",
    variant: "red" as const,
  },
  {
    num: "01",
    tag: "Core Engagement",
    title: "AI for Non-Techies",
    details: "Half or full day · On-site · Up to 20 participants",
    desc: "Role-adapted sessions where participants use AI tools on their own real tasks. Adapted for operations, HR, finance, marketing, and legal teams. No AI background required.",
    bullets: [
      "Each participant identifies 3 tasks from their actual work",
      "Learns to redesign each task using AI — in the session, not as homework",
      "Leaves with 3–5 AI-assisted workflows ready for the next working day",
    ],
    output: "3–5 AI-assisted workflows. Personal usage map. Replication template.",
    variant: "default" as const,
  },
  {
    num: "02",
    tag: "Core Engagement",
    title: "Rapid Prototyping Sprint",
    details: "1 day · On-site · 1 team, 1 process",
    desc: "One cross-functional team. One real, named process selected before the session. By end of day: a working AI-assisted version of that process — built by the team, not demonstrated by a trainer.",
    bullets: [
      "Pre-session: process is mapped and scoped in advance",
      "In-session: team redesigns the workflow with AI embedded at each bottleneck",
      "Output: working process template, measurable time baseline, replication guide",
    ],
    output: "Working AI-assisted process. Time delta. Replication template owned by the team.",
    variant: "default" as const,
  },
  {
    num: "03",
    tag: "Full Engagement",
    title: "AI Adoption Sprint",
    details: "2 days · On-site · Multi-team",
    desc: "The most comprehensive engagement. Day 1 is a structured diagnostic. Day 2 is a sprint on the highest-priority process identified in Day 1. Includes a 90-day roadmap.",
    bullets: [
      "Day 1: 5–8 structured interviews, usage map, written gap report",
      "Day 2: sprint on highest-priority process (full team, real task)",
      "Post-sprint: written 90-day roadmap for additional processes and teams",
    ],
    output: "Written gap report. Redesigned process. Time delta. 90-day adoption roadmap.",
    variant: "blue" as const,
  },
];

const faqs = [
  {
    q: "How do we know which programme fits our situation?",
    a: "The Assessment produces a 1-page written output that makes this clear. There is no guesswork. The right programme is the one that matches what the Assessment finds.",
  },
  {
    q: "Our teams have no AI background. Are these programmes appropriate?",
    a: "Yes. All programmes are designed specifically for non-technical teams. The entry condition is access to at least one AI tool and a real process to improve.",
  },
  {
    q: "What if we have multiple teams or departments?",
    a: "The AI Adoption Sprint includes a 90-day roadmap for extension across teams and processes. We do not recommend running multiple teams simultaneously before validating the first process redesign.",
  },
  {
    q: "Can costs be partially offset through vendor programmes?",
    a: "For organisations running Microsoft or AWS environments, programme costs can often be partially structured through vendor partner frameworks. Discussed during the Assessment if relevant.",
  },
];

const Programmes = () => {
  useEffect(() => { document.title = "Programmes — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="THE CATALOGUE"
        title="Four programmes. One method. Built for non-technical teams."
        subtitle="From a free 30-minute diagnosis to a two-day full engagement. The entry point is the Assessment — everything else follows from what it finds."
      />

      {/* Editor's note */}
      <Section bordered={false}>
        <div className="max-w-3xl">
          <Kicker>— Editor's Note</Kicker>
          <p className="font-display italic text-2xl md:text-3xl text-paper/80 leading-snug">
            The right programme depends on what the Assessment finds. Every engagement listed here can be scoped after that call — <span className="text-red">not before.</span>
          </p>
        </div>
      </Section>

      {/* Programme cards */}
      <Section>
        <div className="space-y-px bg-paper/10">
          {programmes.map((p) => {
            const bg =
              p.variant === "red"
                ? "bg-red text-paper"
                : p.variant === "blue"
                ? "bg-blue text-paper"
                : "bg-background text-paper border-2 border-paper/15";
            return (
              <article key={p.num} className={`${bg} p-8 md:p-12`}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-2">
                    <span className="font-display text-7xl md:text-8xl leading-none">{p.num}</span>
                  </div>
                  <div className="md:col-span-7">
                    <p className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-3 ${p.variant === "default" ? "text-red" : "opacity-90"}`}>
                      {p.tag} · {p.details}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl leading-[1.05] mb-4">{p.title}</h2>
                    <p className="text-[15px] leading-relaxed opacity-85 mb-5">{p.desc}</p>
                    {p.bullets && (
                      <ul className="space-y-2 mb-5">
                        {p.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-[14px] opacity-85">
                            <span className={p.variant === "default" ? "text-red" : ""}>→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="md:col-span-3 md:border-l md:border-current/20 md:pl-6">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] mb-2 opacity-60">Output</p>
                    <p className="text-sm leading-relaxed mb-6">{p.output}</p>
                    {p.cta && p.to && (
                      <Link
                        to={p.to}
                        className="inline-flex items-center px-5 py-3 bg-paper text-ink font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
                      >
                        {p.cta}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* FAQ — paper section */}
      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Frequently Filed</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              Common <em className="text-red">questions.</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="border-t-2 border-ink/15">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-ink/15">
                  <AccordionTrigger className="text-left font-display text-xl md:text-2xl text-ink hover:text-red hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink/75 text-[15px] leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      <CTASection
        title="Not sure where to start?"
        subtitle="The Assessment takes 30 minutes and produces a written output you can use internally. The right programme becomes obvious from what it finds."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
        note="Free · No pitch · 1-page written output within 24 hours"
      />
    </>
  );
};

export default Programmes;
