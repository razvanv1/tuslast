import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, NumberedStep, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";

const timeline = [
  { period: "Week 1–2", desc: "Early adopters use the tool daily. Visible enthusiasm. IT team reports high initial engagement." },
  { period: "Week 3–4", desc: "Middle majority try it on familiar tasks. Irregular usage. No process has changed." },
  { period: "Week 5+", desc: "Usage plateaus. Most staff return to previous workflows. Dashboard shows \"licences active.\" Productivity delta: zero." },
];

const responses = [
  { num: "I", title: "A second training session", desc: "Same result as the first. Staff learn what the tool can do. They return to the same workflow. The process was never redesigned." },
  { num: "II", title: "Mandatory usage targets", desc: "Compliance without capability. Teams hit the metric. Actual process time does not change. Reporting looks fine. Operations do not." },
  { num: "III", title: "Waiting for organic adoption", desc: "Works for roughly 15% of staff. Stalls permanently for the other 85%. The majority stays on the old process indefinitely." },
];

const objections = [
  { q: "We already ran a Copilot training day.", a: "A training day teaches staff what the tool can do. It does not change the process the tool needs to be embedded in. If usage did not change after the training day, the process was never redesigned. That is the work that remains." },
  { q: "We do not have budget for this right now.", a: "The Assessment is free. 30 minutes and a written summary you can use to build an internal business case. For programmes with constrained budgets, we can structure pilots through Microsoft and AWS partner frameworks." },
  { q: "Our team is not technical enough for AI.", a: "That is exactly the condition all our programmes are designed for. The entry question is not \"are they ready?\" — it is \"which one process should we fix first?\"" },
  { q: "We need to see results before committing.", a: "The Assessment produces a 1-page written output with a clear identification of where the gap is. That document is the result. Book the Assessment, share it internally, and decide from there." },
];

const ForOperations = () => {
  useEffect(() => { document.title = "For Operations — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="DISPATCH · OPERATIONS"
        title="You are paying for AI tools your teams are not using."
        subtitle="That is a workflow problem, not a motivation problem. We fix it in one day."
        ctaText="Book Free Assessment →"
        ctaTo="/assessment"
        note="No pitch · No proposal · 1-page written output within 24 hours"
      />

      {/* Editorial intro with sidebar */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="A field report" read="6 min" filed="Operations · AI Adoption" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="The Pattern"
              title={<>The pattern is consistent <em className="text-red">across organisations.</em></>}
            />
            <TwoColumnGrid>
              <p>Your organisation deployed Microsoft 365 Copilot — or a similar tool. Licences are active. Your most engaged employees use it occasionally. The majority returned to their previous workflows within four weeks. The tool works. The surrounding process was never redesigned to use it.</p>
              <p>This pattern is not unique to your team, your industry, or your region. We have observed it in finance, retail, manufacturing, and professional services. The variables change. The shape does not.</p>
            </TwoColumnGrid>

            <div className="mt-12 border-t-2 border-paper/15">
              {timeline.map((t, i) => (
                <div key={t.period} className="grid grid-cols-12 gap-6 py-6 border-b border-paper/15">
                  <span className="col-span-12 md:col-span-3 font-display text-2xl text-red">{t.period}</span>
                  <span className="col-span-12 md:col-span-9 text-paper/80 text-[15px] leading-relaxed">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Why standard responses fail — paper section */}
      <Section variant="paper">
        <div className="flex justify-between items-end font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50 border-b border-ink/15 pb-4 mb-10">
          <span>Three Wrong Answers</span>
          <span className="text-red">Pp. 24</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Why the standard responses <em className="text-red">do not work.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {responses.map((r) => (
            <article key={r.num} className="bg-paper p-8 md:p-10 border-0">
              <span className="font-display text-6xl text-red leading-none block mb-6">{r.num}</span>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{r.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{r.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-ink/80 text-lg leading-relaxed font-display italic">
            When a team runs their weekly reporting cycle the same way they did in 2022 — but with a Copilot button visible — they try it once, find it marginally helpful, and return to the known process. Not from resistance. <span className="text-red not-italic">Because the surrounding workflow was never changed to require it.</span>
          </p>
        </div>
      </Section>

      {/* What we do instead */}
      <Section>
        <SectionHeading
          kicker="The Method"
          title={<>What we do <em className="text-red">instead.</em></>}
        />
        <NumberedStep num={1} title="We identify exactly where adoption stalls">
          The free 30-minute Assessment maps which processes are highest priority, where the usage gap is largest, and what a one-day sprint would address. You receive a 1-page written output you can share with your leadership team.
        </NumberedStep>
        <NumberedStep num={2} title="We redesign one process in one day">
          Your team brings one real, named process. By end of day they have a working AI-assisted version they built themselves — not a demo scenario, not a simplified mockup. Their actual process, with AI embedded.
        </NumberedStep>
        <NumberedStep num={3} title="They own the new workflow">
          Teams do not abandon processes they designed. The sprint output is a template the team built themselves and understands — which is why they run it the following week, and the week after.
        </NumberedStep>
      </Section>

      {/* Pull quote */}
      <Section bordered={false}>
        <Blockquote attribution="From the field, Q3 reports">
          The Assessment output is an internal document, not a vendor proposal. It is a shared diagnosis you can put in front of operations, IT, and finance leads — before the budget conversation starts.
        </Blockquote>
      </Section>

      {/* Objections */}
      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker>— Letters & Replies</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              Common objections, <em className="text-red">directly addressed.</em>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            {objections.map((o, i) => (
              <div key={i} className="border-t-2 border-ink/15 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2">Q.0{i + 1}</p>
                <h3 className="font-display text-2xl text-ink mb-3 italic">"{o.q}"</h3>
                <p className="text-ink/75 text-[15px] leading-relaxed">{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Your licences are running. Your processes have not changed."
        subtitle="The Assessment takes 30 minutes. You receive a 1-page written summary within 24 hours. No proposal is attached."
        ctaText="Book the Assessment →"
        ctaTo="/assessment"
        note="Free · No commitment · Written output within 24 hours"
      />
    </>
  );
};

export default ForOperations;
