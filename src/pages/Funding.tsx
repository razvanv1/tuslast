import { useEffect } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerFunding from "@/assets/banner-funding.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, NumberedStep, SectionHeading } from "@/components/Editorial";

const instruments = [
  {
    title: "Microsoft MDF & co-sell",
    audience: "For Microsoft partners and Copilot rollouts",
    body: "Market Development Funds allocated to Microsoft partners to support adoption of Copilot, Azure AI, and Microsoft 365. Qualifying programs must be structured around specific adoption outcomes, not generic training.",
    tag: "Partner tier dependent",
  },
  {
    title: "AWS partner programs",
    audience: "For AWS partners and cloud-adjacent teams",
    body: "AWS allocates co-sell budgets through its partner network to support digital skills and cloud adoption programs. Qualifying requires active partner status and a program aligned to AWS adoption metrics.",
    tag: "APN partner required",
  },
  {
    title: "EU digital competitiveness grants",
    audience: "Digital Europe Programme and related instruments",
    body: "EU programs that fund AI literacy and digital skills development inside organisations. Applications must be framed as qualifying projects with measurable adoption outcomes, not internal training budgets.",
    tag: "Romania-eligible",
  },
];

const Funding = () => {
  useEffect(() => { document.title = "Funding Structuring, The Unlearning School"; }, []);

  return (
    <>
      <SEO
        title="Funding Structuring — vendor MDF, AWS co-sell & EU digital grants"
        description="Structure your AI adoption programme to qualify for Microsoft MDF, AWS co-sell, or EU digital grants. We draft the application and align delivery so reimbursement actually happens."
        keywords="Microsoft MDF, AWS co-sell, EU digital grants, AI funding, Digital Europe Programme, AI grant Romania, vendor credits"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Funding structuring for AI adoption programmes",
          provider: { "@type": "Organization", name: "The Unlearning School" },
          areaServed: ["RO", "EU"],
          description: "Microsoft MDF, AWS partner co-sell, and EU digital grant structuring for AI adoption work.",
        }}
      />
      <PageHero
        tag="MDF, Funding & Grants"
        banner={bannerFunding}
        bannerAlt="Modern team reviewing funding documents"
        title="Your AI program might already be funded."
        subtitle="Vendor MDF programs, co-sell budgets, and EU digital grants exist specifically to fund this kind of work. Most companies qualify for at least one. Most have never claimed it."
        ctaText="Free audit →"
        ctaTo="/assessment"
        secondaryText="See all programmes"
        secondaryTo="/programmes"
        note="We handle the structuring · You run the program · You get the cost back"
      />

      <Section>
        <SectionHeading
          kicker="The objection we hear most"
          title={<>"We don't have budget <em className="text-red">for this."</em></>}
          intro="In most cases, that's not accurate. It means the budget hasn't been identified or structured correctly."
        />
        <div className="space-y-5 text-paper/80 text-[15px] leading-relaxed max-w-3xl mt-6">
          <p>Every quarter, Microsoft, AWS, and Google allocate Market Development Funds to partners who drive platform adoption. These budgets exist specifically to support AI skills programs inside organisations.</p>
          <p>Most of them go unused, not because companies don't qualify, but because nobody structured the program in a way that meets the funding criteria.</p>
          <p>The same is true for EU digital competitiveness grants under Digital Europe and related programs. The applications fail not because the work isn't fundable, but because they're submitted as internal training plans instead of qualifying projects.</p>
          <p className="font-display italic text-xl md:text-2xl text-paper">
            We turn your AI adoption program into something that qualifies. <span className="text-red">You run the program. You get the cost back.</span>
          </p>
        </div>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> Available funding instruments</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Three sources. <em className="text-red">Most companies have access to at least one.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {instruments.map((i) => (
            <article key={i.title} className="bg-paper p-8 md:p-10 flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">{i.audience}</p>
              <h3 className="font-display text-2xl text-ink leading-tight mb-4">{i.title}</h3>
              <p className="text-ink/70 text-[15px] leading-relaxed flex-1 mb-5">{i.body}</p>
              <div className="border-t border-ink/15 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">{i.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="How we work"
          title={<>We do the structuring. <em className="text-red">You run the program.</em></>}
        />
        <NumberedStep num={1} title="Audit your vendor relationships">
          We review your current Microsoft Partner status, AWS tier, and any existing vendor agreements to identify which funding programs you qualify for right now.
        </NumberedStep>
        <NumberedStep num={2} title="Identify eligible instruments">
          Based on the audit, we map the specific MDF programs, co-sell budgets, or EU grant instruments that fit your situation. Not a generic list, a specific set of options with qualification criteria confirmed.
        </NumberedStep>
        <NumberedStep num={3} title="Structure the program to qualify">
          We redesign the scope and documentation of your AI adoption program to meet the funding criteria. This is the step most companies miss. The program content stays the same. The way it's framed and documented changes.
        </NumberedStep>
        <NumberedStep num={4} title="Draft and support the application">
          We write or co-author the MDF proposal or grant application. Vendor fund applications require specific language and metrics. We know what those are.
        </NumberedStep>
        <NumberedStep num={5} title="Coordinate delivery and reimbursement">
          Delivery documentation is aligned with program requirements from the start, not retrofitted at the end. Reimbursement doesn't get stuck because the paperwork doesn't match the application.
        </NumberedStep>
      </Section>

      <Section variant="paper" bordered={false}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> Result</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              A fully funded, or significantly reduced cost, <em className="text-red">adoption program.</em>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-ink/80 text-[15px] leading-relaxed">
            <p>For companies where internal budget approval is the blocker, this removes the objection entirely.</p>
            <p>For companies where budget exists but is hard to defend, qualifying for vendor or EU funding shifts the conversation from "should we spend this?" to "should we leave this on the table?"</p>
            <p className="font-display italic text-xl text-ink">
              The work happens either way. <span className="text-red">The funding determines whether it costs you anything.</span>
            </p>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="On qualification">
          Most companies qualify for at least one instrument. The question is not whether the funding exists, it does. The question is whether your program is structured in a way that the funding body will recognise.
        </Blockquote>
      </Section>

      <CTASection
        title="Check what you qualify for."
        subtitle="A 30-minute call to map your vendor relationships and confirm which instruments fit. We come back with a written shortlist within 5 business days. No commitment until you see the numbers."
        ctaText="Free audit →"
        ctaTo="/assessment"
        note="Free · No commitment · Written shortlist within 5 business days"
      />
    </>
  );
};

export default Funding;
