import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";

const programmes = [
  {
    tag: "AI FOR NON-TECHIES",
    title: "Role-adapted workshops for any team",
    desc: "Half-day or full-day on-site sessions. Participants use AI tools on their own real tasks — not demonstration scenarios. Adapted for operations, HR, marketing, finance, and legal. No technical prerequisites.",
    output: "Output per participant: 3–5 AI-assisted workflows ready to run the next morning.",
  },
  {
    tag: "RAPID PROTOTYPING SPRINT",
    title: "One process redesigned in one day",
    desc: "Cross-functional team. One real, named process selected before the session. By end of day: a working AI-assisted version and a replication template the team built themselves. Not a demo. A functional process.",
    output: "Output: Measurable process time delta. Template owned by the team.",
  },
  {
    tag: "AI ADOPTION SPRINT",
    title: "Full diagnostic and redesign",
    desc: "Two days. Day 1: structured interviews, usage map, written gap report. Day 2: sprint on the highest-priority process. 90-day roadmap for extending to additional processes and teams.",
    output: "Output: Written gap report, redesigned process, roadmap.",
  },
];

const ForHR = () => {
  useEffect(() => { document.title = "For HR & L&D — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="FOR HR & L&D"
        title="Your teams have access to AI tools. You need evidence they are actually using them."
        subtitle="EU AI Act Article 4 requires demonstrable AI literacy. The hard part is not the regulation — it is changing how 50 people actually work on a Tuesday afternoon."
        ctaText="Book a free AI Adoption Assessment →"
        ctaTo="/assessment"
        secondaryText="See programmes"
        secondaryTo="/programmes"
        note="30 minutes · 1-page written output · No proposal attached"
      />

      {/* Literacy gap */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The AI literacy gap is not an awareness problem</h2>
        <p className="text-mid max-w-2xl mb-6">
          Most employees in AI-enabled organisations know that AI tools exist and have completed at least one training session on them. The gap is between knowing and doing — between completing a feature walkthrough and integrating AI into the way work actually gets done every day.
        </p>
        <Blockquote>
          EU AI Act Article 4 (in force since February 2025) requires organisations using AI systems to ensure a sufficient level of AI literacy for relevant staff — proportional to role and tool. There is no prescribed format. A programme that demonstrably changes daily working behaviour satisfies the requirement. A one-hour awareness webinar does not.
        </Blockquote>
        <p className="text-mid max-w-2xl">
          The practical implication: you need a programme that produces a measurable change in how staff run specific processes — not one that produces completion records and a certificate.
        </p>
      </Section>

      {/* What we deliver */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What we deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <div key={p.tag} className="border border-border rounded-lg p-6">
                <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">{p.tag}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-mid mb-4">{p.desc}</p>
                <p className="text-sm font-semibold text-foreground">{p.output}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable proof */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Measurable proof, not completion records</h2>
        <p className="text-mid max-w-2xl mb-8">
          The difference between training credibility and behaviour change evidence is what you can report internally — and what you can show to a regulator or a board. We track two types of output per engagement:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-2">QUANTITATIVE</h3>
            <p className="text-sm text-mid">
              Number of AI-assisted workflows each participant leaves with (typical range: 3–5 per person). Process time delta before and after a sprint. Tracked per engagement and reportable as programme outcomes.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-2">QUALITATIVE</h3>
            <p className="text-sm text-mid">
              Manager-reported behaviour shift: the specific observable change in how the team runs the redesigned process the following week. Documented in the post-sprint debrief.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Start with the Assessment"
        subtitle="The free 30-minute AI Adoption Gap Assessment identifies where the usage gap is largest in your organisation and which programme format fits your context. The 1-page written output is designed to be shared with your leadership team before any budget conversation."
        ctaText="Book the AI Adoption Gap Assessment →"
        ctaTo="/assessment"
        note="Free · No pitch · Written summary within 24 hours"
      />
    </>
  );
};

export default ForHR;
