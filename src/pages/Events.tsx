import { useEffect } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerEvents from "@/assets/banner-events.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { Kicker, SectionHeading } from "@/components/Editorial";

const formats = [
  {
    num: "01",
    title: "Keynote + Q&A",
    meta: "90 minutes · Up to 500 people",
    body: "Built for conferences and large corporate events. Topics include AI literacy, EU AI Act readiness, rapid prototyping, and future of work. Content is adapted to your audience and sector, not recycled from the previous event.",
  },
  {
    num: "02",
    title: "Hands-on workshop",
    meta: "Half-day or full day · 15–50 participants",
    body: "Participants work inside the AI tools they already have access to. Live demos include real failures, because that's where teams build actual trust in the tool. Every participant leaves with something they built themselves.",
  },
  {
    num: "03",
    title: "Internal hackathon",
    meta: "1 to 2 days · Custom scope",
    body: "Full design and facilitation of an internal AI hackathon. Includes brief design, team coaching, judging criteria, and an output showcase. Teams build working prototypes on real company problems, not presentations about prototypes.",
  },
];

const included = [
  "Pre-event research on the company, sector, and specific teams in the room",
  "All content and demos built around your tool stack and industry context",
  "Live facilitation by Răzvan Vâlceanu, founder of The Unlearning School",
  "Copy-paste prompt sheets every participant takes out of the room",
  "Post-session resource pack: prompts, workflow examples, next steps",
  "Optional: scoped proposal for follow-up adoption work based on what surfaces in the room",
];

const Events = () => {
  useEffect(() => { document.title = "Events & Keynotes, The Unlearning School"; }, []);

  return (
    <>
      <SEO
        title="Events & Keynotes — AI adoption workshops, hackathons, keynotes"
        description="Sector-adapted AI workshops, internal hackathons and keynotes. 90 min – 2 days. 15 to 500 people. Every demo built around your workflows, not generic productivity examples."
        keywords="AI keynote, AI workshop, AI hackathon, corporate AI event, AI speaker EU, Copilot workshop"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI keynote, workshop and hackathon facilitation",
          provider: { "@type": "Organization", name: "The Unlearning School" },
          areaServed: ["RO", "EU"],
        }}
      />
      <PageHero
        tag="Events & Keynotes"
        banner={bannerEvents}
        bannerAlt="Speaker on stage in front of large audience"
        title="They leave with something they built."
        subtitle="Workshops, hackathons, and keynotes for companies that need fast proof, internal momentum, or a way to show leadership what AI actually looks like in practice."
        ctaText="AI Adoption Call →"
        ctaTo="/assessment"
        secondaryText="See all programmes"
        secondaryTo="/programmes"
        note="90 min – 2 days · 15 to 500 people · Sector-adapted"
      />

      <Section>
        <SectionHeading
          kicker="Why most AI events don't work"
          title={<>They show what AI can do. <em className="text-red">Not what it does inside your company.</em></>}
          intro="People watch a demo. Maybe try something once. Then go back to old workflows by Tuesday morning. The reason isn't the tool, it's that nothing in the session connected to their actual work. Their reports. Their client calls. Their weekly prep. When AI doesn't map to a specific task someone does every day, it stays a curiosity."
        />
        <p className="font-display italic text-xl md:text-2xl text-paper/80 leading-snug max-w-3xl mt-6">
          Before every session, I research the company, the sector, and the teams in the room. <span className="text-red not-italic">The demos are built around their workflows, not generic productivity examples.</span> Everyone leaves with prompt sheets they can copy-paste on Monday morning.
        </p>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> Formats</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Three formats. <em className="text-red">One standard:</em> real outputs, not slides about outputs.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {formats.map((f) => (
            <article key={f.num} className="bg-paper p-8 md:p-10 flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-6xl text-red leading-none">{f.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 text-right">{f.meta}</span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{f.title}</h3>
              <p className="text-ink/70 text-[15px] leading-relaxed">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> What's included in every engagement</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              No generic deck. <em className="text-red">No recycled content.</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-3 border-t border-paper/15">
              {included.map((it, i) => (
                <li key={it} className="flex gap-4 py-3 border-b border-paper/15 text-paper text-[15px]">
                  <span className="font-mono text-red tabular-nums">0{i + 1}</span>
                  <span className="text-paper/85">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Kicker> Pricing</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              Scoped per <em className="text-red">engagement.</em>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ink/80 text-[16px] leading-relaxed mb-5">
              A 30-minute call is enough to confirm the format, the audience, and the right scope. From there we send a specific proposal within 48 hours.
            </p>
            <p className="font-display italic text-lg text-ink/70">
              No catalogue pricing. Every event is built around the room it is delivered in.
            </p>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="When budget is the objection">
          Your AI program might already be funded. You just haven't structured it that way. Microsoft, AWS, and Google allocate co-sell and Market Development Funds every quarter to support exactly this kind of adoption work. Most companies qualify. Most don't know it.
        </Blockquote>
      </Section>

      <AIScoreCTA />

      <CTASection
        title="Tell me about your event."
        subtitle="A 30-minute call to confirm format, audience, and scope. Specific proposal within 48 hours. Built around the people in the room, not the previous event we ran."
        ctaText="AI Adoption Call →"
        ctaTo="/assessment"
        note="Free · No commitment · Proposal within 48 hours"
      />
    </>
  );
};

export default Events;
