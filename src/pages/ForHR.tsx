import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";

const programmes = [
  {
    num: "I",
    tag: "AI for Non-Techies",
    title: "Role-adapted workshops for any team",
    desc: "Half-day or full-day on-site sessions. Participants use AI tools on their own real tasks — not demonstration scenarios. Adapted for operations, HR, marketing, finance, and legal. No technical prerequisites.",
    output: "3–5 AI-assisted workflows ready to run the next morning.",
  },
  {
    num: "II",
    tag: "Rapid Prototyping Sprint",
    title: "One process redesigned in one day",
    desc: "Cross-functional team. One real, named process selected before the session. By end of day: a working AI-assisted version and a replication template the team built themselves.",
    output: "Measurable process time delta. Template owned by the team.",
  },
  {
    num: "III",
    tag: "AI Adoption Sprint",
    title: "Full diagnostic and redesign",
    desc: "Two days. Day 1: structured interviews, usage map, written gap report. Day 2: sprint on the highest-priority process. 90-day roadmap for extending to additional processes and teams.",
    output: "Written gap report, redesigned process, 90-day roadmap.",
  },
];

const ForHR = () => {
  useEffect(() => { document.title = "For HR & L&D — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="DISPATCH · HR & L&D"
        title="Your teams have access to AI. You need evidence they actually use it."
        subtitle="EU AI Act Article 4 requires demonstrable AI literacy. The hard part is not the regulation — it is changing how 50 people actually work on a Tuesday afternoon."
        ctaText="Book Free Assessment →"
        ctaTo="/assessment"
        secondaryText="See programmes"
        secondaryTo="/programmes"
        note="30 minutes · 1-page written output · No proposal attached"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="On regulation & reality" read="5 min" filed="HR · Compliance · L&D" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="The Literacy Gap"
              title={<>It is not an awareness problem. <em className="text-red">It is a workflow one.</em></>}
            />
            <TwoColumnGrid>
              <p>Most employees in AI-enabled organisations know that AI tools exist and have completed at least one training session on them. The gap is between knowing and doing — between completing a feature walkthrough and integrating AI into how work actually gets done every day.</p>
              <p>The practical implication: you need a programme that produces a measurable change in how staff run specific processes — not one that produces completion records and a certificate. The regulator does not care about the certificate. Neither does your CFO.</p>
            </TwoColumnGrid>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="EU AI Act Article 4, in force since February 2025">
          Organisations using AI systems must ensure a sufficient level of AI literacy for relevant staff — proportional to role and tool. A programme that demonstrably changes daily working behaviour satisfies the requirement. A one-hour awareness webinar does not.
        </Blockquote>
      </Section>

      {/* Programmes — paper section */}
      <Section variant="paper">
        <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 border-b border-ink/15 pb-4 mb-10">
          <span>The Catalogue</span>
          <span className="text-red">Three Editions</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-12 max-w-3xl">
          What we deliver.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {programmes.map((p) => (
            <article key={p.num} className="bg-paper p-8 md:p-10 flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-6xl text-red leading-none">{p.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">{p.tag}</span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{p.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>
              <div className="border-t border-ink/15 pt-4">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-red mb-1">Output</p>
                <p className="text-sm text-ink font-medium">{p.output}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Measurable proof */}
      <Section>
        <SectionHeading
          kicker="The Receipts"
          title={<>Measurable proof, <em className="text-red">not completion records.</em></>}
          intro="The difference between training credibility and behaviour change evidence is what you can report to a board — or a regulator."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10">
          <article className="bg-background p-8 md:p-10 border-2 border-paper/15">
            <Kicker>Quantitative</Kicker>
            <h3 className="font-display text-3xl text-paper mb-4">By the numbers</h3>
            <p className="text-paper/75 text-[15px] leading-relaxed">
              Number of AI-assisted workflows each participant leaves with (typical: 3–5 per person). Process time delta before and after a sprint. Tracked per engagement and reportable as programme outcomes.
            </p>
          </article>
          <article className="bg-red text-paper p-8 md:p-10 border-2 border-red">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80 mb-3">— Qualitative</p>
            <h3 className="font-display text-3xl mb-4">In the room</h3>
            <p className="text-paper/90 text-[15px] leading-relaxed">
              Manager-reported behaviour shift: the specific observable change in how the team runs the redesigned process the following week. Documented in the post-sprint debrief.
            </p>
          </article>
        </div>
      </Section>

      <CTASection
        title="Start with the Assessment."
        subtitle="The free 30-minute call identifies where the usage gap is largest and which programme format fits your context."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
        note="Free · No pitch · Written summary within 24 hours"
      />
    </>
  );
};

export default ForHR;
