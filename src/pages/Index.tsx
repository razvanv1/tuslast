import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroCardDeck from "@/components/HeroCardDeck";
import Section from "@/components/Section";
import IssueCard from "@/components/IssueCard";
import Marquee from "@/components/Marquee";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "64%", label: "of employees with Copilot access do not actively use it" },
  { value: "1,000+", label: "professionals trained across the EU" },
  { value: "1 day", label: "to redesign one process with AI embedded" },
];

const stories = [
  {
    number: "I.",
    title: "AI as Weapon",
    body: "When the only metric is speed, the team learns to fear the tool. Adoption stalls because the tool feels like surveillance, not assistance.",
    variant: "default" as const,
  },
  {
    number: "II.",
    title: "AI as Assistant",
    body: "The dream sold by the vendor. Helpful, frictionless, instantly productive. Reality: the assistant only works inside processes redesigned to receive it.",
    variant: "red" as const,
  },
  {
    number: "III.",
    title: "AI as Bottleneck",
    body: "Three months in: licences active, dashboards green, behaviour unchanged. The new tool is layered on top of the old workflow. Nothing moves faster.",
    variant: "default" as const,
  },
  {
    number: "IV.",
    title: "AI as Theatre",
    body: "Leadership announces the rollout. The team performs adoption for one week. The press release is filed. The processes remain identical.",
    variant: "blue" as const,
  },
  {
    number: "V.",
    title: "AI as Unlock",
    body: "When teams unfreeze the old habit first, AI stops being an add-on and becomes the workflow. This is the only adoption pattern that holds.",
    variant: "default" as const,
  },
  {
    number: "VI.",
    title: "AI as Ours",
    body: "The redesigned process belongs to the team that built it — not to the consultant, not to the vendor. Templates they own. Habits they keep.",
    variant: "paper" as const,
  },
];

const audience = [
  {
    role: "COO / Operations Director",
    situation: "Copilot deployed. Licence spend is real. Process times have not improved. Board is asking for results.",
    result: "One process rebuilt in one day. Measurable output. Template your team built themselves.",
  },
  {
    role: "HR / L&D Lead",
    situation: "You need a credible AI upskilling programme. EU AI Act Article 4 is in force. No plan that demonstrably changes behaviour.",
    result: "Role-adapted workshops. Participants leave with 3–5 AI workflows ready the next morning.",
  },
  {
    role: "CIO / Digital Transformation",
    situation: "Deployment data says adoption on track. Business unit leads say otherwise. Cannot distinguish licence activation from real usage.",
    result: "Written gap report identifying where usage stalls in real processes. Redesigned process on Day 2.",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "The Unlearning School — AI Adoption Training · EU";
  }, []);

  return (
    <>
      {/* HERO — Wired-style scattered tarot deck */}
      <section className="relative bg-background border-b-2 border-paper/10 overflow-hidden">
        <div className="bg-halftone">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-10 md:pt-14">
            {/* Masthead bar */}
            <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 border-b border-paper/15 pb-4 mb-8">
              <span>Vol. 01 / Issue 04 — Autumn {new Date().getFullYear()}</span>
              <span className="hidden md:inline text-red">The AI Adoption Issue</span>
            </div>

            {/* Card deck */}
            <HeroCardDeck />

            {/* Massive headline */}
            <div className="relative -mt-6 md:-mt-12 z-10">
              <h1 className="font-display text-[64px] md:text-[140px] lg:text-[180px] leading-[0.85] text-paper text-center tracking-tighter">
                AI of a<br />
                <em className="text-red">thousand</em> faces.
              </h1>
            </div>

            <div className="max-w-2xl mx-auto text-center mt-10 mb-16">
              <p className="font-display italic text-xl md:text-2xl text-paper/85 leading-snug mb-8">
                Your organisation bought the capability. What you are paying for is unused potential. The tools are deployed. The licences are active. <span className="text-red not-italic">The workflows have not changed.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/assessment"
                  className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                >
                  Book Free Assessment →
                </Link>
                <Link
                  to="/programmes"
                  className="inline-flex items-center px-7 py-4 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                >
                  See Programmes
                </Link>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-6">
                30-min call · 1-page summary in 24h · No proposal attached
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS strip */}
      <section className="bg-background border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((s, i) => (
            <ScrollReveal key={s.value} className={i < 2 ? "md:border-r border-paper/10 md:pr-10" : ""}>
              <p className="font-display text-6xl md:text-7xl text-red leading-none mb-3">{s.value}</p>
              <p className="text-paper/70 text-sm leading-relaxed max-w-xs">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Editorial intro */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— The Thesis</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">By Răzvan Vâlceanu</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-1">8 min read</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl text-paper leading-[1] mb-8 max-w-3xl">
              Hundreds of millions use AI. Almost no organisation has changed because of it.
            </h2>
            <div className="md:columns-2 gap-10 text-paper/80 leading-relaxed text-[15px]">
              <p className="mb-4 first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-red">
                The conversation around AI in 2025 turned from what it could be to what it is. Large language models are now everywhere — in our schools, our homes, on therapist couches and government computers. Yet the office, the place we promised would be transformed, looks structurally identical to how it did three years ago.
              </p>
              <p className="mb-4">
                The pattern repeats across every sector we observe. Week one, enthusiastic early adopters use the new tool daily and the rollout looks healthy. Week three, the middle majority try it once or twice on familiar tasks. By week five, usage plateaus. The dashboard still shows "active licences" — but the processes have not changed.
              </p>
              <p>
                We are not running a tool problem. We are running a process problem. Adding a tool to an unchanged workflow does not change the workflow. You have to redesign the work first — and clear the old habit before the new one can form. <em className="text-red not-italic">That is the step most deployments skip.</em>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* MARQUEE breaker */}
      <Marquee items={["Unfreeze the habit", "Redesign the process", "Embed the tool", "Rebuild the team", "Repeat the work"]} />

      {/* SIX STORIES — the card grid (Wired-inspired) */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Six Readings From The Field</p>
            <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] max-w-2xl">
              How AI <em className="text-red">actually</em> shows up at work.
            </h2>
          </div>
          <p className="text-paper/60 text-sm max-w-sm leading-relaxed">
            We've trained over a thousand professionals. These are the six patterns we keep seeing — and the only one that works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10">
          {stories.map((s) => (
            <IssueCard key={s.number} {...s} className="border-0" />
          ))}
        </div>
      </Section>

      {/* WHO THIS IS FOR — editorial table */}
      <Section variant="paper">
        <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 border-b border-ink/15 pb-4 mb-10">
          <span>Subjects</span>
          <span className="text-red">Pp. 12 — 14</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Three readers. <em>Three diagnoses.</em>
        </h2>

        <div className="space-y-0 border-t border-ink/15">
          {audience.map((a, i) => (
            <ScrollReveal key={a.role}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-ink/15 group hover:bg-ink/[0.02] transition-colors">
                <div className="md:col-span-1">
                  <span className="font-display text-3xl text-red">0{i + 1}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl text-ink leading-tight">{a.role}</h3>
                </div>
                <div className="md:col-span-4 text-ink/70 text-[15px] leading-relaxed">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/40 mb-2">The Situation</p>
                  {a.situation}
                </div>
                <div className="md:col-span-4 text-ink text-[15px] leading-relaxed">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-red mb-2">What You Get</p>
                  {a.result}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mt-10 font-mono text-[11px] uppercase tracking-[0.2em]">
          <Link to="/for-operations" className="text-ink hover:text-red transition-colors">→ I run operations</Link>
          <Link to="/for-hr" className="text-ink hover:text-red transition-colors">→ I lead HR / L&D</Link>
          <Link to="/for-it" className="text-ink hover:text-red transition-colors">→ I lead IT / Digital</Link>
        </div>
      </Section>

      {/* PULL QUOTE */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red">— Pull Quote</p>
          </div>
          <div className="md:col-span-10">
            <Blockquote attribution="Lewin's Unfreeze–Change–Refreeze model (1947), applied to AI workflow adoption">
              Before a team can build new working habits, they must consciously let go of the old ones. Most AI adoption programmes start at "change" and skip "unfreeze" entirely. That is why behaviour does not stick.
            </Blockquote>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Not sure which programme fits?"
        subtitle="Start with the Assessment. 30 minutes. Written output you can share internally. No proposal attached."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
        note="Free · No pitch · 1-page summary within 24 hours"
      />
    </>
  );
};

export default Index;
