import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, NumberedStep, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";

const ForIT = () => {
  useEffect(() => { document.title = "For IT & Digital — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="DISPATCH · CIO & DIGITAL"
        title="Your dashboard says adoption is on track. Your business unit leads disagree. Both are right."
        subtitle="Licence activation and real workflow change are two different metrics. We measure the second — and fix the gap in one day."
        ctaText="Book Free Assessment →"
        ctaTo="/assessment"
        secondaryText="See programmes"
        secondaryTo="/programmes"
        note="30 minutes · 1-page written output · No proposal attached"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="On dashboards & deception" read="7 min" filed="IT · Measurement" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="The Visibility Gap"
              title={<>It is structural, <em className="text-red">not accidental.</em></>}
            />
            <TwoColumnGrid>
              <p>Standard Microsoft 365 Copilot dashboards measure licence activation, prompt usage counts, and feature engagement. They do not measure whether the underlying process changed, whether output quality improved, or whether the team is running the same workflow they ran 12 months ago — just with an occasional AI prompt inserted.</p>
              <p>The problem is not that the deployment failed. The problem is that the workflow redesign that should have followed the deployment never happened. The gap between reported adoption and experienced productivity is structural and consistent across sectors.</p>
            </TwoColumnGrid>
          </div>
        </div>
      </Section>

      {/* Two layers — paper section */}
      <Section variant="paper">
        <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 border-b border-ink/15 pb-4 mb-10">
          <span>Two Measurement Layers</span>
          <span className="text-red">Pp. 38</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-12 max-w-3xl">
          You're measuring <em className="text-red">access.</em><br />
          We measure <em className="text-red">change.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          <article className="bg-paper p-8 md:p-10">
            <Kicker variant="muted">— Your current dashboard</Kicker>
            <h3 className="font-display text-3xl text-ink leading-tight mb-6">Licence activation layer</h3>
            <ul className="space-y-3 text-ink/75 text-[15px]">
              <li className="border-b border-ink/10 pb-2">→ Active licences</li>
              <li className="border-b border-ink/10 pb-2">→ Prompt usage counts</li>
              <li className="border-b border-ink/10 pb-2">→ Feature engagement rates</li>
              <li className="pb-2">→ DAU / WAU per tool</li>
            </ul>
            <p className="text-sm text-ink/60 mt-6 italic font-display">Shows access. Does not show whether work changed.</p>
          </article>
          <article className="bg-ink text-paper p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— What the Sprint measures</p>
            <h3 className="font-display text-3xl leading-tight mb-6">Behaviour change layer</h3>
            <ul className="space-y-3 text-paper/85 text-[15px]">
              <li className="border-b border-paper/15 pb-2">→ Which processes are AI-assisted vs. unchanged</li>
              <li className="border-b border-paper/15 pb-2">→ Where workflow blockages are specific</li>
              <li className="border-b border-paper/15 pb-2">→ Process time delta, before vs. after</li>
              <li className="pb-2">→ Number of AI-embedded steps per workflow</li>
            </ul>
            <p className="text-sm text-paper/70 mt-6 italic font-display">Shows whether the deployment produced operational change.</p>
          </article>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="From the AI Adoption Sprint methodology">
          Adoption is what your dashboard reports. Change is what your team experiences. The gap between the two is the work nobody scheduled.
        </Blockquote>
      </Section>

      {/* Sprint */}
      <Section>
        <SectionHeading
          kicker="The Sprint"
          title={<>What happens in <em className="text-red">two days.</em></>}
        />
        <NumberedStep num={1} title="Day 1 — Diagnostic">
          Structured interviews with 5–8 team leads. A usage map of where AI tools are deployed and where actual integration into workflows has or has not occurred. Identification of the 3–5 processes with the largest adoption gap. Output: a written gap report.
        </NumberedStep>
        <NumberedStep num={2} title="Day 2 — Sprint">
          The highest-priority process from Day 1 is redesigned by the team — with AI embedded into the workflow, not added to the side of it. By end of day: a working version, a measurable baseline, and a replication template owned by the team.
        </NumberedStep>
        <NumberedStep num={3} title="Post-sprint">
          A 90-day roadmap for extending the same approach to additional processes, teams, or locations — based on what was found in the diagnostic, not on a generic transformation framework.
        </NumberedStep>
      </Section>

      <CTASection
        title="Start with the free Assessment."
        subtitle="The 30-minute Assessment produces a 1-page written output identifying where the behaviour change gap is. Designed to be shared with your operations and HR leads as a shared diagnosis."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
        note="Free · No proposal · Written output within 24 hours"
      />
    </>
  );
};

export default ForIT;
