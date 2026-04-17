import { useEffect } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, NumberedStep, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

const About = () => {
  useEffect(() => { document.title = "About, The Unlearning School"; }, []);

  return (
    <>
      <SEO
        title="About — a behaviour change practice for AI adoption"
        description="The Unlearning School is a behaviour change practice founded by Răzvan Vâlceanu. We redesign workflows so AI tools actually get used in non-technical teams across the EU."
        keywords="The Unlearning School, Răzvan Vâlceanu, AI adoption consultancy, behaviour change AI, change management AI, EU"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "The Unlearning School",
          founder: { "@type": "Person", name: "Răzvan Vâlceanu" },
          description: "Behaviour change practice for AI adoption in non-technical teams.",
          areaServed: ["RO", "EU"],
          url: "https://tuslast.lovable.app/about",
        }}
      />
      <PageHero
        tag="ABOUT"
        title="A behaviour change practice, not a training company."
        subtitle="The difference matters. Training companies teach tools. We change the processes around the tools so the tools get used."
        ctaText="Free audit →"
        ctaTo="https://meet.brevo.com/razvan-valceanu"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="The founding observation" read="7 min" filed="About · Method" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="The problem we were founded to solve"
              title={<>Another training session <em className="text-red">was not the answer.</em></>}
            />
            <TwoColumnGrid>
              <p>In 2023, organisations across Europe began deploying AI tools at scale. Microsoft 365 Copilot. ChatGPT Enterprise. Custom AI assistants. In most cases, usage after the first month was below expectations.</p>
              <p>The standard response was to run another training session. The results were the same. The issue was not knowledge, it was that the surrounding workflow had never been changed to require the tool. A team that has always run its weekly report in a specific way will continue to run it that way, regardless of what tools are available. Not from resistance. Because changing a workflow is harder than adding a tool to an unchanged one.</p>
            </TwoColumnGrid>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="The founding premise">
          You cannot change behaviour by adding a new option to an old process. You have to remove the old path first. That is the unlearning step most programmes skip entirely.
        </Blockquote>
      </Section>

      <Section>
        <SectionHeading
          kicker="The mechanism"
          title={<>Unfreeze, change, <em className="text-red">refreeze.</em></>}
          intro="All The Unlearning School programmes are built on the same sequence, adapted from Kurt Lewin's change model (1947) and applied to AI workflow adoption."
        />
        <NumberedStep num={1} title="Unfreeze">
          Participants explicitly surface the current habit: how they run the process today, what assumptions are embedded in it, and why those assumptions exist. This step is non-negotiable. Without it, new behaviours do not stick.
        </NumberedStep>
        <NumberedStep num={2} title="Change">
          Participants redesign the workflow with AI embedded, in the session, not as homework. The new version is tested, adjusted, and completed before anyone leaves.
        </NumberedStep>
        <NumberedStep num={3} title="Refreeze">
          The new workflow is documented as a team-owned template. Participants who built it are the ones who run it next week. That ownership is why it sticks.
        </NumberedStep>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> A redesign in practice</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-6 max-w-3xl">
          Weekly supplier invoice reconciliation.
        </h2>
        <p className="text-ink/75 text-[15px] leading-relaxed max-w-2xl mb-10">
          Anonymised example from a finance operations team that ran a Rapid Prototyping Sprint. The process selected was weekly supplier invoice reconciliation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          <article className="bg-paper p-8 md:p-10">
            <Kicker variant="muted"> Before the sprint</Kicker>
            <h3 className="font-display text-2xl text-ink mb-5">The old workflow</h3>
            <ul className="space-y-2 text-ink/75 text-[15px]">
              <li className="border-b border-ink/10 pb-2">→ Manual download of invoice data from ERP</li>
              <li className="border-b border-ink/10 pb-2">→ Spreadsheet comparison against purchase orders</li>
              <li className="border-b border-ink/10 pb-2">→ Email thread to flag discrepancies</li>
              <li className="border-b border-ink/10 pb-2">→ Manual summary report for approval</li>
              <li className="pt-2 font-display italic text-ink">Average time: 4.5 hours per week</li>
            </ul>
          </article>
          <article className="bg-red text-paper p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80 mb-3"> After the sprint</p>
            <h3 className="font-display text-2xl mb-5">The redesigned workflow</h3>
            <ul className="space-y-2 text-paper/90 text-[15px]">
              <li className="border-b border-paper/20 pb-2">→ Same ERP export, process unchanged here</li>
              <li className="border-b border-paper/20 pb-2">→ AI-assisted comparison with pattern flagging</li>
              <li className="border-b border-paper/20 pb-2">→ AI-drafted summary of discrepancies for review</li>
              <li className="border-b border-paper/20 pb-2">→ One-click report generation</li>
              <li className="pt-2 font-display italic text-paper">Average time: 1.5 hours per week</li>
            </ul>
          </article>
        </div>

        <p className="text-ink/75 text-[15px] leading-relaxed max-w-3xl mt-8">
          The team built this version themselves during the sprint. Two weeks later, all four team members were running the new workflow without prompting. <span className="text-red font-medium">The template they created is what drove adoption, not the tool.</span>
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="relative max-w-[280px]">
              <div className="overflow-hidden border-2 border-paper/20 bg-paper">
                <img src={razvanPhoto} alt="Răzvan Vâlceanu" loading="lazy" width={600} height={800} className="w-full aspect-[3/4] object-cover object-top" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-red text-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em]">
                Founder
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95] mt-6">
              Răzvan <em className="text-red">Vâlceanu</em>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-paper/80 text-[15px] leading-relaxed">
            <p><strong className="text-paper">Răzvan Vâlceanu</strong> is the founder and lead trainer at The Unlearning School. He brings 15 years of experience at the intersection of technology and organisational change.</p>
            <p>Former General Manager at <strong className="text-paper">Bitdefender</strong>, where he ran a technology business unit and led product and go-to-market teams. Former Entrepreneurship Director at <strong className="text-paper">University of Life Sciences Timisoara</strong>, where he built programmes connecting academic institutions with the startup and corporate ecosystem.</p>
            <p>The Unlearning School was built on the observation, made repeatedly across both roles, that the limiting factor in organisational change is almost never the technology, <span className="text-red">it is the existing habit that the technology is supposed to replace.</span></p>
            <a
              href="https://www.linkedin.com/in/razvanvalceanu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-red hover:border-red transition-colors"
            >
              Răzvan on LinkedIn →
            </a>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> Track record</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Briefly stated.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {[
            { tag: "Scale", title: "1,400+ professionals trained", body: "Across finance, retail, manufacturing, and professional services. Romania and EU. Programmes delivered in English and Romanian." },
            { tag: "Proof", title: "Before / after workflow examples", body: "Anonymised examples from relevant sectors are available during the Assessment call. No client names are published on this site." },
            { tag: "Context", title: "Corporate, academic, startup", body: "Programmes have been delivered inside large enterprises, academic institutions, and growth-stage companies. The method adapts to the context; the mechanism does not change." },
          ].map((c) => (
            <article key={c.tag} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-4">{c.tag}</p>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{c.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="Start with the free audit."
        subtitle="30 minutes. A structured conversation about where adoption is stalling in your organisation. Written 1-page output within 24 hours. No proposal attached."
        ctaText="Free audit →"
        ctaTo="https://meet.brevo.com/razvan-valceanu"
        note="Free · hello@unlearning.ro"
      />
    </>
  );
};

export default About;
