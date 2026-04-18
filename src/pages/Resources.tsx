import { useEffect } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { Kicker, SectionHeading } from "@/components/Editorial";

const entryPaths = [
  { tag: "Funding noise", desc: "Read the pieces on funding intelligence, opportunity selection, vendor credits, public and private routes, and diversification of funding sources." },
  { tag: "AI in the team", desc: "Start with AI at work, role-based use, habits, judgment, and what responsible adoption looks like inside real teams." },
  { tag: "Weak traction", desc: "Go to execution friction, weak-fit initiatives, adoption drag, decision bottlenecks, work that keeps moving without progress." },
  { tag: "Expertise → product", desc: "Use the academy and learning systems section for academy design, learning products, partner academies, customer education." },
];

const contentTypes = [
  { name: "Articles & analysis", desc: "Sharp pieces on funding, AI, execution, and the future of work, usable thinking, not recycled summaries." },
  { name: "Podcast episodes", desc: "Conversations and solo episodes that turn messy themes into something easier to challenge, use, and apply." },
  { name: "Guides & working notes", desc: "Practical material for teams that need a starting point, stronger framing, or a way to move from idea to action." },
  { name: "Studies & case notes", desc: "Selected research, examples, observations, and supporting material for situations beyond surface-level content." },
  { name: "Tools, templates, checklists", desc: "Simple assets that can be used inside actual work, not only discussed." },
  { name: "Frameworks & methods", desc: "Selected pieces that show how The Unlearning School thinks and works behind the scenes." },
];

const topics = [
  "Funding intelligence",
  "AI at work",
  "Execution friction",
  "Future of work",
  "Academies & learning systems",
  "Tools & frameworks",
  "Podcast & insights",
  "Hermes Agent",
];

const newsletterBullets = [
  "Selected articles and notes",
  "Practical insights from the podcast",
  "Funding and opportunity observations",
  "Working frameworks and useful tools",
  "Updates worth reading, not inbox filler",
];

const Resources = () => {
  useEffect(() => { document.title = "Resources, The Unlearning School"; }, []);
  return (
    <>
      <SEO
        title="Resources — AI adoption insights, frameworks & playbooks"
        description="Selected articles, podcast episodes, working frameworks and tools on AI adoption, funding intelligence, execution friction, and the future of work."
        keywords="AI adoption resources, AI playbook, EU AI Act guide, funding intelligence, AI frameworks, podcast AI work"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "The Unlearning Pill — Resources",
          description:
            "Editorial hub: articles, podcast, frameworks, and tools on AI adoption and the future of work.",
          inLanguage: "en",
          isPartOf: { "@type": "WebSite", name: "The Unlearning School", url: "https://tuslast.lovable.app/" },
        }}
      />
      <PageHero
        tag="Resources"
        title="Useful material for teams working through AI, funding, execution, and change."
        subtitle="Articles, podcast episodes, studies, working notes, frameworks, and practical tools for teams dealing with opportunity overload, uneven AI adoption, execution drag, academy building, and the future of work."
        ctaText="Join The Unlearning Pill →"
        ctaTo="mailto:hello@unlearning.ro?subject=Subscribe%20to%20The%20Unlearning%20Pill"
        secondaryText="AI Adoption Call"
        secondaryTo="/assessment"
      />

      {/* AI Adoption Score lead magnet */}
      <AIScoreCTA />

      {/* FEATURED FREE RESOURCE */}
      <Section bordered={false}>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">Featured · Free download</p>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95] mb-5">
              The AI Literacy <em className="text-red">Compliance Playbook.</em>
            </h2>
            <p className="text-paper/75 text-[15px] leading-relaxed mb-6 max-w-lg">
              How to solve the EU AI Act Article 4 mandate. A practical guide to AI Literacy training for your employees, written for HR, L&amp;D, Operations and exec teams in SMEs.
            </p>
            <ul className="text-paper/70 text-sm space-y-2 mb-8 border-t border-paper/15 pt-5">
              <li className="border-b border-paper/15 pb-2">→ Why Article 4 already applies to your team today</li>
              <li className="border-b border-paper/15 pb-2">→ The "Shadow AI" risk and how to surface it</li>
              <li className="border-b border-paper/15 pb-2">→ A 4-step rollout plan for AI Literacy</li>
              <li className="pb-2">→ How to turn compliance into a competitive advantage</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="/resources/ai-literacy-playbook.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
              >
                Read the playbook →
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-5">
              Free · No email required · 2026 edition
            </p>
          </div>

          {/* Tarot-style card, matching homepage deck */}
          <div className="md:col-span-7 flex justify-center md:justify-end">
            <a
              href="/resources/ai-literacy-playbook.html"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-paper p-3 pb-16 card-shadow w-[280px] sm:w-[340px] md:w-[400px] max-w-full transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden bg-paper-dim relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red/10 via-transparent to-ink/20" aria-hidden />
                <div className="relative z-10 p-6 flex flex-col h-full text-ink">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-red">
                    <span className="w-1.5 h-1.5 bg-red rounded-full" />
                    The Article 4 Mandate
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/50 mt-1">2026 edition</p>
                  <div className="mt-auto">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/40 mb-3">Playbook 01</p>
                    <h3 className="font-display text-3xl md:text-4xl leading-[0.95] text-ink">
                      The AI Literacy <em className="text-red">Compliance Playbook</em>
                    </h3>
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/50 mt-4">
                      For SMEs · HR · L&amp;D · Ops
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-3 right-3 bg-ink text-paper px-3 py-3 text-center">
                <p className="font-display text-paper text-base md:text-lg leading-tight">Read the playbook</p>
                <p className="inline-block bg-paper px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-red mt-1">Free · No signup</p>
              </div>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Start here"
          title={<>Pick the entry point <em className="text-red">that matches the pressure.</em></>}
        />
        <div className="grid md:grid-cols-2 gap-px bg-paper/10">
          {entryPaths.map((s) => (
            <article key={s.tag} className="bg-background p-8 md:p-10 border-2 border-paper/15">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> If: {s.tag}</p>
              <p className="text-paper/80 text-[15px] leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Kicker> What you will find</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              Six formats. <em className="text-red">One library.</em>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {contentTypes.map((f, i) => (
            <article key={f.name} className="bg-paper p-8 border-2 border-ink/10">
              <span className="font-display text-5xl text-red leading-none">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl text-ink mt-4 mb-2">{f.name}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading kicker="Browse" title={<>By <em className="text-red">topic.</em></>} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10">
          {topics.map((t) => (
            <div key={t} className="bg-background border-2 border-paper/15 p-6 hover:border-red transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2"> Topic</p>
              <p className="font-display text-lg text-paper leading-tight">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper" bordered={false}>
        <div className="max-w-3xl mx-auto text-center">
          <Kicker> The Unlearning Pill</Kicker>
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-6">
            Signal, <em className="text-red">not noise.</em>
          </h2>
          <p className="text-ink/75 text-[15px] leading-relaxed mb-8">
            Selected updates on funding intelligence, AI at work, execution friction, academy building, and the future of work.
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2 mb-10 border-t-2 border-ink/15">
            {newsletterBullets.map((b, i) => (
              <li key={b} className="flex gap-4 py-3 border-b border-ink/15 text-ink text-[15px]">
                <span className="font-mono text-red">0{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@unlearning.ro?subject=Subscribe%20to%20The%20Unlearning%20Pill"
            className="inline-flex items-center px-7 py-4 bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-red transition-colors"
          >
            Join the newsletter →
          </a>
        </div>
      </Section>

      <CTASection
        title="Start with the AI Adoption Call."
        subtitle="A free 30-minute call that scores your AI adoption maturity and gives you a ranked next-step roadmap. 1-page written summary within 24 hours."
        ctaText="AI Adoption Call →"
        ctaTo="/assessment"
        note="Free · hello@unlearning.ro"
      />
    </>
  );
};

export default Resources;
