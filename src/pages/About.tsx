import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";

const mechanismSteps = [
  { num: "1", title: "Unfreeze", desc: "Participants explicitly surface the current habit: how they run the process today, what assumptions are embedded in it, and why those assumptions exist. This step is non-negotiable. Without it, new behaviours do not stick." },
  { num: "2", title: "Change", desc: "Participants redesign the workflow with AI embedded — in the session, not as homework. The new version is tested, adjusted, and completed before anyone leaves." },
  { num: "3", title: "Refreeze", desc: "The new workflow is documented as a team-owned template. Participants who built it are the ones who run it next week. That ownership is why it sticks." },
];

const beforeSteps = [
  "Manual download of invoice data from ERP",
  "Spreadsheet comparison against purchase orders",
  "Email thread to flag discrepancies",
  "Manual summary report for approval",
];

const afterSteps = [
  "Same ERP export — process unchanged here",
  "AI-assisted comparison with pattern flagging",
  "AI-drafted summary of discrepancies for review",
  "One-click report generation",
];

const track = [
  { tag: "SCALE", title: "1,000+ professionals trained", desc: "Across finance, retail, manufacturing, and professional services. Romania and EU. Programmes delivered in English and Romanian." },
  { tag: "PROOF", title: "Before / after workflow examples", desc: "Anonymised examples from relevant sectors are available during the Assessment call. No client names are published on this site." },
  { tag: "CONTEXT", title: "Corporate, academic, startup", desc: "Programmes have been delivered inside large enterprises, academic institutions, and growth-stage companies. The method adapts to the context; the mechanism does not change." },
];

const About = () => {
  useEffect(() => { document.title = "About — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="ABOUT"
        title="A behaviour change practice, not a training company."
        subtitle="The difference matters. Training companies teach tools. We change the processes around the tools so the tools get used."
      />

      {/* Problem */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The problem we were founded to solve</h2>
        <p className="text-mid max-w-2xl mb-6 leading-relaxed">
          In 2023, organisations across Europe began deploying AI tools at scale. Microsoft 365 Copilot. ChatGPT Enterprise. Custom AI assistants. In most cases, usage after the first month was below expectations.
        </p>
        <p className="text-mid max-w-2xl mb-6 leading-relaxed">
          The standard response was to run another training session. The results were the same. The issue was not knowledge — it was that the surrounding workflow had never been changed to require the tool. A team that has always run its weekly report in a specific way will continue to run it that way, regardless of what tools are available. Not from resistance. Because changing a workflow is harder than adding a tool to an unchanged one.
        </p>
        <Blockquote>
          You cannot change behaviour by adding a new option to an old process. You have to remove the old path first. That is the unlearning step most programmes skip entirely.
        </Blockquote>
      </Section>

      {/* Mechanism */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The mechanism: Unfreeze, then change</h2>
          <p className="text-mid max-w-2xl mb-8">
            All The Unlearning School programmes are built on the same sequence, adapted from Kurt Lewin's change model (1947) and applied to AI workflow adoption:
          </p>
          <div className="space-y-8">
            {mechanismSteps.map((s) => (
              <div key={s.num} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">{s.num}</div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-mid">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">What a process redesign looks like in practice</h2>
        <p className="text-mid max-w-2xl mb-8">
          Below is an anonymised example from a finance operations team that ran a Rapid Prototyping Sprint. The process selected was weekly supplier invoice reconciliation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">BEFORE THE SPRINT</h3>
            <ul className="space-y-2 text-sm text-mid">
              {beforeSteps.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
            <p className="text-sm font-semibold text-foreground mt-4">Average time: 4.5 hours per week</p>
          </div>
          <div className="border-2 border-primary rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">AFTER THE SPRINT</h3>
            <ul className="space-y-2 text-sm text-mid">
              {afterSteps.map((s, i) => <li key={i}>• {s}</li>)}
            </ul>
            <p className="text-sm font-semibold text-foreground mt-4">Average time: 1.5 hours per week</p>
          </div>
        </div>
        <p className="text-sm text-mid mt-6 max-w-2xl">
          The team built this version themselves during the sprint. Two weeks later, all four team members were running the new workflow without prompting. The template they created is what drove adoption — not the tool.
        </p>
      </Section>

      {/* Founder */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The founder</h2>
          <p className="text-mid max-w-2xl mb-4 leading-relaxed">
            <strong className="text-foreground">Răzvan Vâlceanu</strong> is the founder and lead trainer at The Unlearning School. He brings 15 years of experience at the intersection of technology and organisational change.
          </p>
          <p className="text-mid max-w-2xl mb-4 leading-relaxed">
            Former General Manager at <strong className="text-foreground">Bitdefender</strong>, where he ran a technology business unit and led product and go-to-market teams. Former Entrepreneurship Director at <strong className="text-foreground">Universitatea de Vest Timișoara</strong>, where he built programmes connecting academic institutions with the startup and corporate ecosystem.
          </p>
          <p className="text-mid max-w-2xl leading-relaxed">
            The Unlearning School was built on the observation, made repeatedly across both roles, that the limiting factor in organisational change is almost never the technology — it is the existing habit that the technology is supposed to replace.
          </p>
        </div>
      </section>

      {/* Track record */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Track record</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {track.map((t) => (
            <div key={t.tag} className="border border-border rounded-lg p-6">
              <p className="text-xs font-semibold tracking-widest text-mid uppercase mb-2">{t.tag}</p>
              <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-mid">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Start with the free Assessment"
        subtitle="30 minutes. A structured conversation about where adoption is stalling in your organisation. Written 1-page output within 24 hours. No proposal attached."
        ctaText="Book the AI Adoption Gap Assessment →"
        ctaTo="/assessment"
        note="Free · contact@unlearning.ro"
      />
    </>
  );
};

export default About;
