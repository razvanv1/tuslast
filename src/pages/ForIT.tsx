import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";

const ForIT = () => {
  useEffect(() => { document.title = "For IT & Digital — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="FOR CIO & DIGITAL TRANSFORMATION"
        title="Your Copilot deployment data says adoption is on track. Your business unit leads say otherwise. Both are right."
        subtitle="Licence activation and real workflow change are two different metrics. We measure the second — and fix the gap in one day."
        ctaText="Book a free AI Adoption Assessment →"
        ctaTo="/assessment"
        secondaryText="See programmes"
        secondaryTo="/programmes"
        note="30 minutes · 1-page written output · No proposal attached"
      />

      {/* Visibility gap */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The visibility gap is structural, not accidental</h2>
        <p className="text-mid max-w-2xl mb-6">
          Standard Microsoft 365 Copilot dashboards measure licence activation, prompt usage counts, and feature engagement. They do not measure whether the underlying process changed, whether output quality improved, or whether the team is running the same workflow they ran 12 months ago — just with an occasional AI prompt inserted.
        </p>
        <Blockquote>
          The problem is not that the deployment failed. The problem is that the workflow redesign that should have followed the deployment never happened. The gap between reported adoption and experienced productivity is structural and consistent across sectors.
        </Blockquote>
      </Section>

      {/* Two measurement layers */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Two measurement layers, not one</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <p className="text-xs font-semibold tracking-widest text-mid uppercase mb-2">YOUR CURRENT DASHBOARD MEASURES</p>
              <h3 className="text-lg font-bold text-foreground mb-3">Licence activation layer</h3>
              <ul className="space-y-2 text-sm text-mid">
                <li>• Active licences</li>
                <li>• Prompt usage counts</li>
                <li>• Feature engagement rates</li>
                <li>• DAU / WAU per tool</li>
              </ul>
              <p className="text-sm text-mid mt-4 italic">Shows access and interaction. Does not show whether work changed.</p>
            </div>
            <div className="border-2 border-primary rounded-lg p-6">
              <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">WHAT THE AI ADOPTION SPRINT MEASURES</p>
              <h3 className="text-lg font-bold text-foreground mb-3">Behaviour change layer</h3>
              <ul className="space-y-2 text-sm text-mid">
                <li>• Which processes are AI-assisted vs. unchanged</li>
                <li>• Where the workflow blockage is specific</li>
                <li>• Process time delta before and after redesign</li>
                <li>• Number of AI-embedded steps per workflow</li>
              </ul>
              <p className="text-sm text-mid mt-4 italic">Shows whether the deployment produced operational change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">The AI Adoption Sprint: what happens in two days</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Day 1 — Diagnostic</h3>
              <p className="text-mid">Structured interviews with 5–8 team leads. A usage map of where AI tools are deployed and where actual integration into workflows has or has not occurred. Identification of the 3–5 processes with the largest adoption gap. Output: a written gap report.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Day 2 — Sprint</h3>
              <p className="text-mid">The highest-priority process from Day 1 is redesigned by the team — with AI embedded into the workflow, not added to the side of it. By end of day: a working version, a measurable baseline, and a replication template owned by the team.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Post-sprint</h3>
              <p className="text-mid">A 90-day roadmap for extending the same approach to additional processes, teams, or locations — based on what was found in the diagnostic, not on a generic transformation framework.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Start with the free Assessment"
        subtitle="The 30-minute AI Adoption Gap Assessment produces a 1-page written output identifying where the behaviour change gap is. Designed to be shared with your operations and HR leads as a shared diagnosis before any programme or budget decision."
        ctaText="Book the AI Adoption Gap Assessment →"
        ctaTo="/assessment"
        note="Free · No proposal · Written output within 24 hours"
      />
    </>
  );
};

export default ForIT;
