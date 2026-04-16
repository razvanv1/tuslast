import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { NumberedStep, SectionHeading } from "@/components/Editorial";

const responses = [
  { tag: "Response 1", title: "A second training session", body: "Same result as the first. Staff learn what the tool can do. They return to the same workflow. The process was never redesigned." },
  { tag: "Response 2", title: "Mandatory usage targets", body: "Compliance without capability. Teams hit the metric. Actual process time does not change. Reporting looks fine. Operations do not." },
  { tag: "Response 3", title: "Waiting for organic adoption", body: "Works for roughly 15% of staff. Stalls permanently for the other 85%. The majority stays on the old process indefinitely, with access to tools they do not use." },
];

const objections = [
  { q: '"We already ran a Copilot training day."', a: "A training day teaches staff what the tool can do. It does not change the process the tool needs to be embedded in. If usage did not change after the training day, the process was never redesigned. That is the work that remains." },
  { q: '"We do not have budget for this right now."', a: "The Assessment is free. 30 minutes and a written summary you can use to build an internal business case. For programmes with constrained budgets, we can structure pilots through Microsoft and AWS partner frameworks that significantly reduce client costs." },
  { q: '"Our team is not technical enough for AI."', a: 'That is exactly the condition all our programmes are designed for. The entry question is not "are they ready?" — it is "which one process should we fix first?"' },
  { q: '"We need to see results before committing to a programme."', a: "The Assessment produces a 1-page written output with a clear identification of where the gap is. That document is the result. Book the Assessment, share it internally, and decide from there." },
];

const ForOperations = () => {
  useEffect(() => { document.title = "AI Adoption for Operations — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="DISPATCH · COO & OPERATIONS"
        title="You are paying for AI tools your teams are not using."
        subtitle="That is a workflow problem, not a motivation problem. We fix it in one day."
        ctaText="Book a free AI Adoption Assessment →"
        ctaTo="/assessment"
        secondaryText="See programmes"
        secondaryTo="/programmes"
        note="No pitch · No proposal · 1-page written output within 24 hours"
      />

      <Section>
        <SectionHeading
          kicker="The Pattern"
          title={<>The pattern is consistent <em className="text-red">across organisations.</em></>}
          intro="Your organisation deployed Microsoft 365 Copilot — or a similar tool. Licences are active. Your most engaged employees use it occasionally. The majority returned to their previous workflows within four weeks. The tool works. The surrounding process was never redesigned to use it."
        />
        <div className="border-t border-paper/15">
          {[
            { week: "Week 1–2", text: "Early adopters use the tool daily. Visible enthusiasm. IT team reports high initial engagement." },
            { week: "Week 3–4", text: "Middle majority try it on familiar tasks. Irregular usage. No process has changed." },
            { week: "Week 5+", text: "Usage plateaus. Most staff return to previous workflows. Dashboard shows \"licences active.\" Productivity delta: zero." },
          ].map((row) => (
            <div key={row.week} className="grid grid-cols-12 gap-4 py-5 border-b border-paper/15">
              <div className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-red">{row.week}</div>
              <div className="col-span-9 md:col-span-10 text-paper/80 text-[15px] leading-relaxed">{row.text}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Why the standard responses do not work</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Three responses. <em className="text-red">Three failures.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 mb-10">
          {responses.map((r) => (
            <article key={r.tag} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-4">{r.tag}</p>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{r.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{r.body}</p>
            </article>
          ))}
        </div>

        <p className="font-display italic text-lg md:text-xl text-ink/75 leading-snug max-w-3xl">
          When a team runs their weekly reporting cycle the same way they did in 2022 — but with a Copilot button visible — they try it once, find it marginally helpful, and return to the known process. <span className="text-red not-italic">Not from resistance.</span> Because the surrounding workflow was never changed to require it.
        </p>
      </Section>

      <Section>
        <SectionHeading
          kicker="What we do instead"
          title={<>Identify, redesign, <em className="text-red">hand over.</em></>}
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

      <Section bordered={false}>
        <Blockquote attribution="On the Assessment output">
          Many Operations Directors use this document to align IT, HR, and finance leads before any budget conversation. It is a shared diagnosis, not a vendor proposal. There is no pricing in it.
        </Blockquote>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">— Common objections</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-10 max-w-3xl">
          Directly addressed.
        </h2>
        <div className="space-y-px bg-ink/10">
          {objections.map((o) => (
            <div key={o.q} className="bg-paper p-6 md:p-8">
              <p className="font-display text-xl text-ink mb-2">{o.q}</p>
              <p className="text-ink/70 text-[15px] leading-relaxed">{o.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Your licences are running. Your processes have not changed."
        subtitle="The Assessment takes 30 minutes. You receive a 1-page written summary within 24 hours. No proposal is attached. If there is no problem worth solving, we say so."
        ctaText="Book the AI Adoption Gap Assessment →"
        ctaTo="/assessment"
        note="Free · No commitment · Written output within 24 hours"
      />
    </>
  );
};

export default ForOperations;
