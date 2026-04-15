import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";

const stats = [
  { value: "64%", label: "of employees with Copilot access do not actively use it" },
  { value: "1,000+", label: "professionals trained across EU" },
  { value: "1 day", label: "to redesign one process with AI embedded" },
];

const timeline = [
  { period: "Week 1–2", desc: "Enthusiastic early adopters use the tool daily. Visible momentum." },
  { period: "Week 3–4", desc: "Middle majority try it once or twice on familiar tasks. Irregular usage." },
  { period: "Week 5+", desc: "Usage plateaus. Most employees return to previous workflows. Dashboard shows \"active licences.\" Processes have not changed." },
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

const stages = [
  {
    tag: "START HERE · FREE",
    title: "AI Adoption Gap Assessment",
    desc: "30-minute structured call. We identify where usage is stalling and which 3–5 processes are highest priority. You receive a 1-page written summary within 24 hours.",
    cta: "Book the Assessment →",
    to: "/assessment",
  },
  {
    tag: "CORE ENGAGEMENT",
    title: "AI for Non-Techies / Rapid Prototyping Sprint",
    desc: "Half-day or full-day on-site. Your team redesigns one real process with AI embedded. No code. No IT dependency. Measurable output by end of day.",
    cta: "See programmes →",
    to: "/programmes",
  },
  {
    tag: "FULL ENGAGEMENT",
    title: "AI Adoption Sprint",
    desc: "Two-day engagement. Day 1: diagnostic + written gap report. Day 2: sprint on highest-priority process. 90-day roadmap included.",
    cta: "See programmes →",
    to: "/programmes",
  },
];

const credibility = [
  { tag: "TRACK RECORD", title: "1,000+ professionals trained", desc: "Across finance, retail, manufacturing, and professional services — Romania and EU." },
  { tag: "FOUNDER", title: "Răzvan Vâlceanu", desc: "Former GM at Bitdefender. Former Entrepreneurship Director at USV Timișoara. 15 years at the intersection of technology and organisational change." },
  { tag: "PROOF FORMAT", title: "Before / after workflows", desc: "Anonymised sector examples available on request during the Assessment call. No client names published on this site." },
];

const Index = () => {
  useEffect(() => { document.title = "The Unlearning School — AI Adoption Training · EU"; }, []);

  return (
    <>
      <PageHero
        tag="AI ADOPTION TRAINING · EU"
        title="Your organisation bought AI capability. What you are paying for is unused potential."
        subtitle="The tools are deployed. The licences are active. The workflows have not changed. That is the problem we fix."
        ctaText="Book a free AI Adoption Assessment →"
        ctaTo="/assessment"
        secondaryText="See our programmes"
        secondaryTo="/programmes"
        note="30-minute structured call · 1-page written output within 24 hours · No proposal attached"
      />

      {/* Stats */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.value} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-sm text-mid mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why AI adoption stalls */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Why AI adoption stalls after the rollout</h2>
        <p className="text-base text-mid max-w-2xl mb-8 leading-relaxed">
          Most organisations respond to low AI tool usage with a second training session. Same result. The problem is not the tool and it is not the team. It is the process — which was never redesigned to use AI.
        </p>
        <div className="space-y-4 mb-8">
          {timeline.map((t) => (
            <div key={t.period} className="flex gap-4">
              <span className="font-bold text-foreground whitespace-nowrap min-w-[100px]">{t.period}</span>
              <span className="text-mid">{t.desc}</span>
            </div>
          ))}
        </div>
        <Blockquote>
          Adding a tool to an unchanged process does not change the process. You need to redesign the workflow first — and clear the old habit before the new one can form. That is the step most deployments skip.
        </Blockquote>
      </Section>

      {/* Who this is for */}
      <section className="bg-card border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Who this is for</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Your role</th>
                  <th className="text-left py-3 pr-4 font-semibold text-foreground">Your situation</th>
                  <th className="text-left py-3 font-semibold text-foreground">What you get</th>
                </tr>
              </thead>
              <tbody>
                {audience.map((a) => (
                  <tr key={a.role} className="border-b border-border">
                    <td className="py-4 pr-4 font-semibold text-foreground align-top">{a.role}</td>
                    <td className="py-4 pr-4 text-mid align-top">{a.situation}</td>
                    <td className="py-4 text-mid align-top">{a.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/for-operations" className="text-sm font-semibold text-primary hover:underline">I run operations →</Link>
            <Link to="/for-hr" className="text-sm font-semibold text-primary hover:underline">I lead HR / L&D →</Link>
            <Link to="/for-it" className="text-sm font-semibold text-primary hover:underline">I lead IT / Digital →</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">How it works — three stages, not a menu</h2>
        <div className="space-y-10">
          {stages.map((s, i) => (
            <div key={i} className="border border-border rounded-lg p-6 md:p-8">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">{s.tag}</p>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-mid mb-4">{s.desc}</p>
              <Link to={s.to} className="text-sm font-semibold text-primary hover:underline">{s.cta}</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* The mechanism */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The mechanism: Unfreeze, then change</h2>
          <p className="text-mid max-w-2xl leading-relaxed">
            Before a team can build new working habits, they must consciously let go of the old ones. Most AI adoption programmes start at "change" and skip "unfreeze" entirely. That is why behaviour does not stick. Our sprints are built around the unfreeze step first.
          </p>
          <p className="text-xs text-mid mt-4">
            Based on Lewin's Unfreeze–Change–Refreeze model (1947), applied to AI workflow adoption in non-technical teams.
          </p>
        </div>
      </section>

      {/* Credibility */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Credibility, briefly</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credibility.map((c) => (
            <div key={c.tag} className="border border-border rounded-lg p-6">
              <p className="text-xs font-semibold tracking-widest text-mid uppercase mb-2">{c.tag}</p>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-mid">{c.desc}</p>
            </div>
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
