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

const programmes = [
  {
    tag: "START HERE · FREE",
    title: "AI Adoption Gap Assessment",
    details: "📅 30 minutes · Remote or on-site · Free",
    desc: "A structured diagnostic conversation covering which AI tools are deployed, where usage is measurably low, and which 3–5 processes are highest priority for redesign. You receive a 1-page written summary within 24 hours. Designed to be shared internally. No pricing document attached.",
    output: "Written 1-page summary: adoption gap location, prioritised process list, recommended next step (if any).",
    cta: "Book the Assessment →",
    to: "/assessment",
  },
  {
    tag: "CORE ENGAGEMENT",
    title: "AI for Non-Techies",
    details: "Half-day or full day · On-site · Up to 20 participants",
    desc: "Role-adapted sessions where participants use AI tools on their own real tasks. Adapted for operations, HR, finance, marketing, and legal teams. No AI background required. No technical setup needed before the session.",
    bullets: [
      "Each participant identifies 3 tasks from their actual work",
      "Learns to redesign each task using AI — in the session, not as homework",
      "Leaves with 3–5 AI-assisted workflows ready for the next working day",
    ],
    output: "3–5 AI-assisted workflows. Personal usage map. Replication template.",
  },
  {
    tag: "CORE ENGAGEMENT",
    title: "Rapid Prototyping Sprint",
    details: "1 day · On-site · 1 team, 1 process",
    desc: "One cross-functional team. One real, named process selected before the session arrives. By end of day: a working AI-assisted version of that process — built by the team, not demonstrated by a trainer.",
    bullets: [
      "Pre-session: process is mapped and scoped in advance",
      "In-session: team redesigns the workflow with AI embedded at each bottleneck",
      "Output: working process template, measurable time baseline, replication guide",
    ],
    output: "Working AI-assisted process version. Process time delta (before vs. after). Replication template owned by the team.",
  },
  {
    tag: "FULL ENGAGEMENT",
    title: "AI Adoption Sprint",
    details: "2 days · On-site · Multi-team",
    desc: "The most comprehensive engagement. Day 1 is a structured diagnostic. Day 2 is a sprint on the highest-priority process identified in Day 1. Includes a 90-day roadmap for extending adoption across the organisation.",
    bullets: [
      "Day 1: 5–8 structured interviews, usage map, written gap report",
      "Day 2: sprint on highest-priority process (full team, real task)",
      "Post-sprint: written 90-day roadmap for additional processes and teams",
    ],
    output: "Written gap report. Redesigned process. Process time delta. 90-day adoption roadmap.",
  },
];

const faqs = [
  {
    q: "How do we know which programme fits our situation?",
    a: "The Assessment produces a 1-page written output that makes this clear. There is no guesswork. The right programme is the one that matches what the Assessment finds — not what sounds most comprehensive on paper.",
  },
  {
    q: "Our teams have no AI background. Are these programmes appropriate?",
    a: "Yes. All programmes are designed specifically for non-technical teams. The entry condition is not AI experience — it is access to at least one AI tool (Copilot, ChatGPT, etc.) and a real process to improve. That is sufficient.",
  },
  {
    q: "What if we have multiple teams or departments?",
    a: "The AI Adoption Sprint includes a 90-day roadmap for extension across teams and processes. Larger rollouts are scoped after the Assessment identifies where to start. We do not recommend running multiple teams simultaneously before validating the first process redesign.",
  },
  {
    q: "Can costs be partially offset through vendor programmes?",
    a: "For organisations running Microsoft or AWS environments, programme costs can often be partially structured through vendor partner frameworks. This is discussed during the Assessment if relevant. We do not mention specific figures on this page because availability varies by organisation type and region.",
  },
];

const Programmes = () => {
  useEffect(() => { document.title = "Programmes — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="PROGRAMMES"
        title="From a free 30-minute diagnosis to a two-day full engagement"
        subtitle="All programmes are designed for non-technical teams. No coding. No AI background required. The entry point is the free Assessment — everything else follows from what it finds."
      />

      {/* Note */}
      <section className="border-b border-border">
        <div className="max-w-site mx-auto px-[5%] pb-12">
          <blockquote className="border-l-4 border-primary pl-6 py-2 text-mid italic text-base leading-relaxed max-w-2xl">
            The right programme for your organisation depends on what the Assessment finds. Every engagement listed below can be scoped after that call — not before. If you are not sure which level applies, start with the Assessment.
          </blockquote>
        </div>
      </section>

      {/* Programme cards */}
      <Section>
        <div className="space-y-10">
          {programmes.map((p, i) => (
            <div key={i} className="border border-border rounded-lg p-6 md:p-8">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">{p.tag}</p>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">{p.title}</h2>
              <p className="text-sm text-mid mb-4">{p.details}</p>
              <p className="text-mid mb-4">{p.desc}</p>
              {p.bullets && (
                <ul className="space-y-2 mb-4">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm text-mid">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-sm font-semibold text-foreground mb-4">OUTPUT: {p.output}</p>
              {p.cta && p.to && (
                <Link to={p.to} className="text-sm font-semibold text-primary hover:underline">{p.cta}</Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <section className="border-t border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Common questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-mid">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
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
