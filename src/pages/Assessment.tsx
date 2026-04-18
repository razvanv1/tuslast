import { useEffect } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerAssessment from "@/assets/banner-assessment.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import { Kicker, NumberedStep, SectionHeading, Sidebar } from "@/components/Editorial";
import { CALENDAR_URL } from "@/lib/booking";

const personas = [
  { num: "01", tag: "COO / Operations", title: "You need a number to justify investment.", desc: "The maturity score gives you a defensible baseline to take to the board, and a ranked roadmap of where the next euro should go." },
  { num: "02", tag: "HR / L&D Lead", title: "You need to know which teams to train first.", desc: "The gap analysis maps maturity across dimensions, so your training programme targets the actual blockers, not generic AI literacy." },
  { num: "03", tag: "Business unit lead", title: "You need a practical first move, not a strategy deck.", desc: "The roadmap names the 1–3 workflows where redesigning around AI would produce a visible result inside one quarter." },
];

const Assessment = () => {
  useEffect(() => { document.title = "AI Adoption Call, The Unlearning School"; }, []);

  return (
    <>
      <SEO
        title="AI Adoption Call — free 30-minute maturity assessment"
        description="A free 30-minute call that measures how mature your organisation is for AI adoption. You receive a maturity score, a gap analysis, and a practical next-step roadmap within 24 hours."
        keywords="AI adoption call, AI maturity assessment, AI readiness score, AI gap analysis, AI adoption roadmap, EU AI Act readiness, free AI consultation"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "AI Adoption Call",
          description: "Book a free 30-minute AI maturity assessment call.",
          url: "https://tuslast.lovable.app/assessment",
          provider: { "@type": "Organization", name: "The Unlearning School" },
        }}
      />
      <PageHero
        tag="AI Adoption Call"
        banner={bannerAssessment}
        bannerAlt="Team reviewing an AI maturity assessment around a table"
        title="AI Adoption Call, 30 minutes."
        subtitle="A free 30-minute call that measures how mature your organisation is for AI adoption. We ask a short set of structured questions and send back a maturity score, a gap analysis, and a practical next-step roadmap — within 24 hours."
        ctaText="Book the call →"
        ctaTo="#book"
        note="Free · 30 min · Maturity score in 24h"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="The 30 minutes" read="3 min" filed="AI Adoption Call · Method" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="What the call covers"
              title={<>Three questions, <em className="text-red">in order.</em></>}
            />
            <NumberedStep num={1} title="Where you are today">
              A short structured conversation across the dimensions that determine AI maturity: tools deployed, workflows touched, governance in place, and team skills. Establishes the baseline.
            </NumberedStep>
            <NumberedStep num={2} title="Where the gaps are">
              We score each dimension and surface the specific gaps holding adoption back. Not a vague "you need more training" — concrete, named blockers per area.
            </NumberedStep>
            <NumberedStep num={3} title="What to do next">
              A practical, ranked roadmap of the first 1–3 moves: which workflow to redesign first, which team to upskill, which governance gap to close. Sequenced, not theoretical.
            </NumberedStep>
          </div>
        </div>
      </Section>

      {/* What you receive */}
      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> What you receive</Kicker>
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
                "A maturity score for your organisation across the key AI adoption dimensions",
                "A gap analysis: where the score is lowest, and why it matters operationally",
                "A practical next-step roadmap: 1–3 ranked moves to start with, in order",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 py-3 border-b border-ink/15 text-ink text-[15px]">
                  <span className="font-mono text-red">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-xl text-ink/75 leading-snug">
              This document is written to be shared inside your organisation. It is not a proposal. It contains no pricing. <span className="text-red not-italic">Many clients use the maturity score and roadmap to align operations, HR, and IT leads before any internal budget discussion starts.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Who books this */}
      <Section>
        <SectionHeading
          kicker="Who books this"
          title={<>Three readers. <em className="text-red">Three uses for the score.</em></>}
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
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> Book your slot</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-4 max-w-3xl">
            Pick a time. <em className="text-red">We'll do the rest.</em>
          </h2>
          <p className="font-display italic text-lg md:text-xl text-ink/65 mb-10 max-w-2xl">
            Select a time below. You will receive 3 short pre-call questions by email so the 30 minutes go straight to scoring your situation, not gathering context.
          </p>

          <div className="border-2 border-ink/15 bg-paper p-10 md:p-14 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">Direct booking</p>
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug mb-8 max-w-xl mx-auto">
              Click below to open the calendar and pick a 30-minute slot that works for you.
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors"
            >
              AI Adoption Call · Open calendar →
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mt-6 max-w-md mx-auto">
              Soon this will run as a self-serve tool. Until it ships, we run the assessment live with you on a call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-ink/75 text-[14px]">
            <p><strong className="text-ink">Before the call:</strong> 3 short questions by email. 5 minutes to answer. The session goes straight to scoring, not to gathering context.</p>
            <p><strong className="text-ink">After the call:</strong> 1-page written summary within 24 hours — maturity score, gap analysis, next-step roadmap. No follow-up pitch unless you request one.</p>
          </div>

          <p className="text-sm text-ink/60 mt-8">
            Or email:{" "}
            <a
              href="mailto:hello@unlearning.ro?subject=AI%20Adoption%20Call"
              className="text-red font-medium hover:underline"
            >
              hello@unlearning.ro
            </a>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-2">
              Subject: AI Adoption Call · Reply within 1 business day
            </span>
          </p>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="Standard practice, every AI Adoption Call">
          No proposal is attached to this call. If the score shows there is no problem worth solving, we say so. If there is, the roadmap describes what fixing it would look like. You decide what to do next.
        </Blockquote>
      </Section>
    </>
  );
};

export default Assessment;
