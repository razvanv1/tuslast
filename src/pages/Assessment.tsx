import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";

const steps = [
  { num: "1", title: "What AI tools are currently deployed", desc: "Which tools, which teams, whether deployment is recent or established. Establishes the baseline — what is available versus what is actually being used in daily work." },
  { num: "2", title: "Where usage is measurably low — or unmeasurable", desc: "The gap between tool access and actual workflow change. Specific processes, not general impressions. This is usually where the most actionable information surfaces." },
  { num: "3", title: "The highest-priority process for redesign", desc: "A concrete identification of the one process where a one-day sprint would produce a visible result. A specific, named workflow — not a general capability recommendation." },
];

const personas = [
  { tag: "COO / OPERATIONS", title: "Low usage after rollout.", desc: "You want to know exactly where the process blockage is before spending more on training or tooling." },
  { tag: "HR / L&D LEAD", title: "You need a credible internal programme.", desc: "You need to understand what demonstrable AI literacy looks like in your organisation — and which teams need it most urgently." },
  { tag: "CIO / DIGITAL", title: "The dashboard says on track. Reality does not.", desc: "You want a second measurement layer — one that tracks process output, not licence activation." },
];

const Assessment = () => {
  useEffect(() => { document.title = "AI Adoption Gap Assessment — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="FREE · 30 MINUTES · 1-PAGE WRITTEN OUTPUT"
        title="AI Adoption Gap Assessment"
        subtitle="A structured 30-minute conversation that identifies exactly where AI adoption is stalling in your organisation. Written 1-page summary within 24 hours. No proposal attached."
        ctaText="Book your slot →"
        ctaTo="#book"
        note="No pitch · No commitment · No pricing document"
      />

      {/* What the 30 minutes covers */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What the 30 minutes covers</h2>
        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{s.num}</div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-mid">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What you receive */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What you receive</h2>
          <p className="text-mid max-w-2xl mb-6">
            Within 24 hours of the call, you receive a 1-page written document containing:
          </p>
          <ul className="space-y-2 text-mid max-w-2xl mb-6">
            <li>• Where the adoption gap is largest in your organisation</li>
            <li>• The 3 highest-priority processes for AI redesign, ranked</li>
            <li>• A brief note on which programme format (if any) fits the problem identified</li>
          </ul>
          <Blockquote>
            This document is written to be shared inside your organisation. It is not a proposal. It contains no pricing. Many clients use it to align operations, HR, and IT leads before any internal budget discussion starts.
          </Blockquote>
        </div>
      </section>

      {/* Who books this */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Who books this</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div key={p.tag} className="border border-border rounded-lg p-6">
              <p className="text-xs font-semibold tracking-widest text-mid uppercase mb-2">{p.tag}</p>
              <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-mid">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Book section */}
      <section id="book" className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Book your slot</h2>
          <p className="text-mid max-w-xl mx-auto mb-8">
            Select a time below. You will receive 3 short pre-call questions by email to keep the 30 minutes focused on your specific situation rather than gathering context.
          </p>
          <div className="border-2 border-dashed border-border rounded-lg p-12 max-w-lg mx-auto mb-8">
            <p className="text-mid font-semibold mb-2">Add your calendar booking widget here</p>
            <p className="text-sm text-mid">Paste your Calendly or Cal.com embed code to replace this placeholder.</p>
          </div>
          <p className="text-sm text-mid mb-2">
            Or email: <a href="mailto:contact@unlearning.ro" className="text-primary hover:underline">contact@unlearning.ro</a>
          </p>
          <p className="text-xs text-mid">Subject line: Assessment · Response within 1 business day</p>
        </div>
      </section>

      {/* Before/after notes */}
      <Section>
        <div className="max-w-2xl">
          <p className="text-mid mb-4">
            <strong className="text-foreground">Before the call:</strong> 3 short questions by email. 5 minutes to answer. The session goes straight to your situation, not to gathering context.
          </p>
          <p className="text-mid mb-4">
            <strong className="text-foreground">After the call:</strong> 1-page written summary within 24 hours. No follow-up pitch unless you request one.
          </p>
          <p className="text-mid">
            No proposal is attached to this call. If there is no problem worth solving, we say so. If there is, we describe what fixing it would look like. You decide what to do next.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Assessment;
