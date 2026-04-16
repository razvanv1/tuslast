import { useEffect } from "react";
import { Link } from "react-router-dom";
import ShuffleDeck from "@/components/ShuffleDeck";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "64%", label: "of employees with Copilot access do not actively use it" },
  { value: "1,000+", label: "professionals trained across the EU" },
  { value: "1 day", label: "to redesign one process with AI embedded" },
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

const ladder = [
  {
    tag: "Start here · Free",
    title: "AI Adoption Gap Assessment",
    body: "30-minute structured call. We identify where usage is stalling and which 3–5 processes are highest priority. You receive a 1-page written summary within 24 hours.",
    href: "/assessment",
    cta: "Book the Assessment",
    highlight: true,
  },
  {
    tag: "Core engagement",
    title: "AI for Non-Techies / Rapid Prototyping Sprint",
    body: "Half-day or full-day on-site. Your team redesigns one real process with AI embedded. No code. No IT dependency. Measurable output by end of day.",
    href: "/programmes",
    cta: "See programmes",
  },
  {
    tag: "Full engagement",
    title: "AI Adoption Sprint",
    body: "Two-day engagement. Day 1: diagnostic + written gap report. Day 2: sprint on highest-priority process. 90-day roadmap included.",
    href: "/programmes",
    cta: "See programmes",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "The Unlearning School — AI adoption training for non-technical teams";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-background border-b-2 border-paper/10 overflow-hidden">
        <div className="bg-halftone">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-10 md:pt-14">
            <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 border-b border-paper/15 pb-4 mb-8">
              <span>AI Adoption Training · EU</span>
              <span className="hidden md:inline text-red">The Unlearning School</span>
            </div>

            <div className="relative z-10 mb-10 md:mb-14">
              <h1 className="font-display text-[44px] md:text-[88px] lg:text-[112px] leading-[0.9] text-paper tracking-tighter max-w-6xl">
                Your organisation bought AI capability.{" "}
                <em className="text-red">What you are paying for is unused potential.</em>
              </h1>
            </div>

            <ShuffleDeck />

            <div className="max-w-3xl mt-10 mb-16">
              <p className="font-display italic text-xl md:text-2xl text-paper/85 leading-snug mb-8">
                The tools are deployed. The licences are active.{" "}
                <span className="text-red not-italic">The workflows have not changed.</span>{" "}
                That is the problem we fix.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/assessment"
                  className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                >
                  Book a free AI Adoption Assessment →
                </Link>
                <Link
                  to="/programmes"
                  className="inline-flex items-center px-7 py-4 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                >
                  See our programmes
                </Link>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-6">
                30-minute structured call · 1-page written output within 24 hours · No proposal attached
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

      {/* Why adoption stalls */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— The Pattern</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">Across every sector we observe</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl text-paper leading-[1] mb-8 max-w-3xl">
              Why AI adoption stalls after the rollout.
            </h2>
            <p className="text-paper/80 text-[15px] leading-relaxed max-w-2xl mb-10">
              Most organisations respond to low AI tool usage with a second training session. Same result. The problem is not the tool and it is not the team. It is the process — which was never redesigned to use AI.
            </p>

            <div className="border-t border-paper/15">
              {[
                { week: "Week 1–2", text: "Enthusiastic early adopters use the tool daily. Visible momentum." },
                { week: "Week 3–4", text: "Middle majority try it once or twice on familiar tasks. Irregular usage." },
                { week: "Week 5+", text: "Usage plateaus. Most employees return to previous workflows. Dashboard shows \"active licences.\" Processes have not changed." },
              ].map((row) => (
                <div key={row.week} className="grid grid-cols-12 gap-4 py-5 border-b border-paper/15">
                  <div className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-red">{row.week}</div>
                  <div className="col-span-9 md:col-span-10 text-paper/80 text-[15px] leading-relaxed">{row.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="The premise behind every Unlearning School engagement">
          Adding a tool to an unchanged process does not change the process. You need to redesign the workflow first — and clear the old habit before the new one can form. That is the step most deployments skip.
        </Blockquote>
      </Section>

      {/* WHO THIS IS FOR — editorial table */}
      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Who this is for</p>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Three roles. <em>Three diagnoses.</em>
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

      {/* HOW IT WORKS — three stages */}
      <Section>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— How it works</p>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-12 max-w-3xl">
          Three stages, <em className="text-red">not a menu.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {ladder.map((l) => (
            <article
              key={l.title}
              className={`p-8 md:p-10 flex flex-col ${l.highlight ? "bg-red text-paper" : "bg-background text-paper"}`}
            >
              <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-4 ${l.highlight ? "text-paper/80" : "text-red"}`}>
                {l.tag}
              </p>
              <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4">{l.title}</h3>
              <p className={`text-[14px] leading-relaxed flex-1 mb-6 ${l.highlight ? "text-paper/90" : "text-paper/75"}`}>
                {l.body}
              </p>
              <Link
                to={l.href}
                className={`font-mono text-[10px] uppercase tracking-[0.25em] inline-flex items-center gap-2 hover:gap-3 transition-all ${l.highlight ? "text-paper" : "text-red"}`}
              >
                {l.cta} →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* The mechanism */}
      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— The mechanism</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              Unfreeze, <em className="text-red">then change.</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-ink/80 text-[16px] leading-relaxed mb-5">
              Before a team can build new working habits, they must consciously let go of the old ones. Most AI adoption programmes start at "change" and skip "unfreeze" entirely. That is why behaviour does not stick. Our sprints are built around the unfreeze step first.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
              Based on Lewin's Unfreeze–Change–Refreeze model (1947), applied to AI workflow adoption in non-technical teams.
            </p>
          </div>
        </div>
      </Section>

      {/* Credibility */}
      <Section>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Credibility, briefly</p>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-12 max-w-3xl">
          The receipts.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {[
            { tag: "Track record", title: "1,000+ professionals trained", body: "Across finance, retail, manufacturing, and professional services — Romania and EU." },
            { tag: "Founder", title: "Răzvan Vâlceanu", body: "Former GM at Bitdefender. Former Entrepreneurship Director at USV Timișoara. 15 years at the intersection of technology and organisational change." },
            { tag: "Proof format", title: "Before / after workflows", body: "Anonymised sector examples available on request during the Assessment call. No client names published on this site." },
          ].map((c) => (
            <article key={c.tag} className="bg-background p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-4">{c.tag}</p>
              <h3 className="font-display text-2xl text-paper leading-tight mb-3">{c.title}</h3>
              <p className="text-paper/70 text-sm leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Not sure which programme fits?"
        subtitle="Start with the Assessment. 30 minutes. Written output you can share internally. No proposal attached."
        ctaText="Book the AI Adoption Gap Assessment →"
        ctaTo="/assessment"
        note="Free · No pitch · 1-page summary within 24 hours"
      />
    </>
  );
};

export default Index;
