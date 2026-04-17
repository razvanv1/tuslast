import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import bannerAssessment from "@/assets/banner-assessment.png";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CalEmbed from "@/components/CalEmbed";
import { Kicker, NumberedStep, SectionHeading, Sidebar } from "@/components/Editorial";

const personas = [
  { num: "01", tag: "COO / Operations", title: "Low usage after rollout.", desc: "You want to know exactly where the process blockage is before spending more on training or tooling." },
  { num: "02", tag: "HR / L&D Lead", title: "You need a credible internal programme.", desc: "You need to understand what demonstrable AI literacy looks like in your organisation — and which teams need it most urgently." },
  { num: "03", tag: "Business unit lead", title: "Your team uses AI. You don't control how.", desc: "You need a structured map of who uses what, where the gaps create real risk, and which workflows would benefit first from redesign." },
];

const Assessment = () => {
  useEffect(() => { document.title = "AI Adoption Gap Assessment — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="AI Adoption Gap Assessment"
        banner={bannerAssessment}
        bannerAlt="Team filling out assessment forms around a table"
        title="AI Adoption Gap Assessment."
        subtitle="A structured 30-minute conversation that identifies exactly where AI adoption is stalling in your organisation. Written 1-page summary within 24 hours. No proposal attached."
        ctaText="Jump to booking ↓"
        ctaTo="#book"
        note="No pitch · No commitment · No pricing document"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="The 30 minutes" read="3 min" filed="Assessment · Method" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="What the call covers"
              title={<>Three questions, <em className="text-red">in order.</em></>}
            />
            <NumberedStep num={1} title="What AI tools are currently deployed">
              Which tools, which teams, whether deployment is recent or established. Establishes the baseline — what is available versus what is actually being used in daily work.
            </NumberedStep>
            <NumberedStep num={2} title="Where usage is measurably low — or unmeasurable">
              The gap between tool access and actual workflow change. Specific processes, not general impressions. This is usually where the most actionable information surfaces.
            </NumberedStep>
            <NumberedStep num={3} title="The highest-priority process for redesign">
              A concrete identification of the one process where a one-day sprint would produce a visible result. A specific, named workflow — not a general capability recommendation.
            </NumberedStep>
          </div>
        </div>
      </Section>

      {/* What you receive */}
      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker>— What you receive</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              One page. <em className="text-red">Yours to keep.</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-ink/80 text-[15px] leading-relaxed mb-6">
              Within 24 hours of the call, you receive a 1-page written document containing:
            </p>
            <ul className="space-y-3 mb-8 border-t-2 border-ink/15">
              {[
                "Where the adoption gap is largest in your organisation",
                "The 3 highest-priority processes for AI redesign, ranked",
                "A brief note on which programme format (if any) fits the problem identified",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 py-3 border-b border-ink/15 text-ink text-[15px]">
                  <span className="font-mono text-red">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-xl text-ink/75 leading-snug">
              This document is written to be shared inside your organisation. It is not a proposal. It contains no pricing. <span className="text-red not-italic">Many clients use it to align operations, HR, and IT leads before any internal budget discussion starts.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Who books this */}
      <Section>
        <SectionHeading
          kicker="Who books this"
          title={<>Three readers. <em className="text-red">Three diagnoses.</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {personas.map((p) => (
            <article key={p.num} className="bg-background p-8 md:p-10 border-2 border-paper/15">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-6xl text-red leading-none">{p.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">{p.tag}</span>
              </div>
              <h3 className="font-display text-2xl text-paper leading-tight mb-3">{p.title}</h3>
              <p className="text-paper/70 text-sm leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* BOOKING */}
      <Section variant="paper" bordered={false}>
        <div id="book" className="scroll-mt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Book your slot</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-4 max-w-3xl">
            Pick a time. <em className="text-red">We'll do the rest.</em>
          </h2>
          <p className="font-display italic text-lg md:text-xl text-ink/65 mb-10 max-w-2xl">
            Select a time below. You will receive 3 short pre-call questions by email to keep the 30 minutes focused on your specific situation rather than gathering context.
          </p>

          <CalEmbed />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-ink/75 text-[14px]">
            <p><strong className="text-ink">Before the call:</strong> 3 short questions by email. 5 minutes to answer. The session goes straight to your situation, not to gathering context.</p>
            <p><strong className="text-ink">After the call:</strong> 1-page written summary within 24 hours. No follow-up pitch unless you request one.</p>
          </div>

          <p className="text-sm text-ink/60 mt-8">
            Or email: <a href="mailto:contact@unlearning.ro" className="text-red font-medium hover:underline">contact@unlearning.ro</a>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 ml-3">Subject: Assessment · Reply within 1 business day</span>
          </p>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="Standard practice, every Assessment">
          No proposal is attached to this call. If there is no problem worth solving, we say so. If there is, we describe what fixing it would look like. You decide what to do next.
        </Blockquote>
      </Section>
    </>
  );
};

export default Assessment;
