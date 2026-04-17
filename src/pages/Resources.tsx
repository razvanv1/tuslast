import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
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
      <PageHero
        tag="RESOURCES"
        title="Useful material for teams working through AI, funding, execution, and change."
        subtitle="Articles, podcast episodes, studies, working notes, frameworks, and practical tools for teams dealing with opportunity overload, uneven AI adoption, execution drag, academy building, and the future of work."
        ctaText="Join The Unlearning Pill →"
        ctaTo="/assessment"
        secondaryText="Book a call"
        secondaryTo="/assessment"
      />

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
        title="Start with the free Assessment."
        subtitle="30 minutes. A structured conversation about where adoption is stalling. Written 1-page output within 24 hours."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
        note="Free · hello@unlearning.ro"
      />
    </>
  );
};

export default Resources;
