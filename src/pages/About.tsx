import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, NumberedStep, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";

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
  { num: "01", tag: "Scale", title: "1,000+ professionals trained", desc: "Across finance, retail, manufacturing, and professional services. Romania and EU. Programmes delivered in English and Romanian." },
  { num: "02", tag: "Proof", title: "Before / after workflow examples", desc: "Anonymised examples from relevant sectors are available during the Assessment call. No client names are published on this site." },
  { num: "03", tag: "Context", title: "Corporate, academic, startup", desc: "Programmes have been delivered inside large enterprises, academic institutions, and growth-stage companies. The method adapts; the mechanism does not change." },
];

const About = () => {
  useEffect(() => { document.title = "About — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="MASTHEAD · ABOUT"
        title="A behaviour change practice. Not a training company."
        subtitle="The difference matters. Training companies teach tools. We change the processes around the tools so the tools get used."
      />

      {/* Origin story */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="Origin story" read="8 min" filed="About · Method" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="The Founding Problem"
              title={<>What we were founded <em className="text-red">to solve.</em></>}
            />
            <TwoColumnGrid>
              <p>In 2023, organisations across Europe began deploying AI tools at scale. Microsoft 365 Copilot. ChatGPT Enterprise. Custom AI assistants. In most cases, usage after the first month was below expectations. The standard response was to run another training session. The results were the same.</p>
              <p>The issue was not knowledge — it was that the surrounding workflow had never been changed to require the tool. A team that has always run its weekly report in a specific way will continue to run it that way, regardless of what tools are available. Not from resistance. Because changing a workflow is harder than adding a tool to an unchanged one.</p>
            </TwoColumnGrid>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="The Unlearning School, founding principle">
          You cannot change behaviour by adding a new option to an old process. You have to remove the old path first. That is the unlearning step most programmes skip entirely.
        </Blockquote>
      </Section>

      {/* The mechanism */}
      <Section>
        <SectionHeading
          kicker="The Mechanism"
          title={<>Unfreeze, <em className="text-red">then change.</em></>}
          intro="All our programmes are built on the same sequence, adapted from Kurt Lewin's change model (1947) and applied to AI workflow adoption."
        />
        <NumberedStep num={1} title="Unfreeze">
          Participants explicitly surface the current habit: how they run the process today, what assumptions are embedded in it, and why those assumptions exist. This step is non-negotiable. Without it, new behaviours do not stick.
        </NumberedStep>
        <NumberedStep num={2} title="Change">
          Participants redesign the workflow with AI embedded — in the session, not as homework. The new version is tested, adjusted, and completed before anyone leaves.
        </NumberedStep>
        <NumberedStep num={3} title="Refreeze">
          The new workflow is documented as a team-owned template. Participants who built it are the ones who run it next week. That ownership is why it sticks.
        </NumberedStep>
      </Section>

      {/* Before / After — paper section */}
      <Section variant="paper">
        <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 border-b border-ink/15 pb-4 mb-10">
          <span>Case Study · Anonymised</span>
          <span className="text-red">Pp. 47</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-4 max-w-3xl">
          A finance team. <em className="text-red">One process.</em><br />
          Three hours saved per week.
        </h2>
        <p className="font-display italic text-lg md:text-xl text-ink/65 mb-12 max-w-2xl">
          Weekly supplier invoice reconciliation, redesigned in a single Rapid Prototyping Sprint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          <article className="bg-paper p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 mb-3">— Before</p>
            <h3 className="font-display text-2xl text-ink mb-6">The legacy process</h3>
            <ol className="space-y-3 mb-6">
              {beforeSteps.map((s, i) => (
                <li key={i} className="flex gap-4 text-ink/80 text-[15px] border-b border-ink/10 pb-2">
                  <span className="font-mono text-red">0{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="font-display text-3xl text-ink">
              Avg. time: <span className="text-red">4.5 hrs/week</span>
            </p>
          </article>
          <article className="bg-ink text-paper p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— After</p>
            <h3 className="font-display text-2xl mb-6">The redesigned process</h3>
            <ol className="space-y-3 mb-6">
              {afterSteps.map((s, i) => (
                <li key={i} className="flex gap-4 text-paper/85 text-[15px] border-b border-paper/15 pb-2">
                  <span className="font-mono text-red">0{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <p className="font-display text-3xl">
              Avg. time: <span className="text-red">1.5 hrs/week</span>
            </p>
          </article>
        </div>

        <p className="text-ink/70 text-[15px] leading-relaxed mt-8 max-w-3xl">
          The team built this version themselves during the sprint. Two weeks later, all four members were running the new workflow without prompting. <em className="text-red not-italic">The template they created is what drove adoption — not the tool.</em>
        </p>
      </Section>

      {/* The founder */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker>— The Founder</Kicker>
            <h2 className="font-display text-5xl md:text-6xl text-paper leading-[0.95]">
              Răzvan<br /><em className="text-red">Vâlceanu.</em>
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mt-4">Founder · Lead Trainer</p>
          </div>
          <div className="md:col-span-8 space-y-5 text-paper/85 text-[15px] leading-[1.7]">
            <p className="first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-red first-letter:leading-[0.78]">
              Răzvan brings 15 years of experience at the intersection of technology and organisational change. Former General Manager at <strong className="text-paper">Bitdefender</strong>, where he ran a technology business unit and led product and go-to-market teams.
            </p>
            <p>
              Former Entrepreneurship Director at <strong className="text-paper">Universitatea de Vest Timișoara</strong>, where he built programmes connecting academic institutions with the startup and corporate ecosystem.
            </p>
            <p>
              The Unlearning School was built on the observation, made repeatedly across both roles, that the limiting factor in organisational change is almost never the technology — it is the existing habit that the technology is supposed to replace.
            </p>
          </div>
        </div>
      </Section>

      {/* Track record */}
      <Section variant="paper">
        <SectionHeading
          kicker="Track Record"
          title="By the numbers."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {track.map((t) => (
            <article key={t.num} className="bg-paper p-8 md:p-10">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-6xl text-red leading-none">{t.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">{t.tag}</span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{t.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{t.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Start with the free Assessment."
        subtitle="30 minutes. A structured conversation about where adoption is stalling. Written 1-page output within 24 hours."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
        note="Free · contact@unlearning.ro"
      />
    </>
  );
};

export default About;
