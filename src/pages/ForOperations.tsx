import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";

const timeline = [
  { period: "Week 1–2", desc: "Early adopters use the tool daily. Visible enthusiasm. IT team reports high initial engagement." },
  { period: "Week 3–4", desc: "Middle majority try it on familiar tasks. Irregular usage. No process has changed." },
  { period: "Week 5+", desc: "Usage plateaus. Most staff return to previous workflows. Dashboard shows \"licences active.\" Productivity delta: zero." },
];

const responses = [
  { title: "A second training session", desc: "Same result as the first. Staff learn what the tool can do. They return to the same workflow. The process was never redesigned." },
  { title: "Mandatory usage targets", desc: "Compliance without capability. Teams hit the metric. Actual process time does not change. Reporting looks fine. Operations do not." },
  { title: "Waiting for organic adoption", desc: "Works for roughly 15% of staff. Stalls permanently for the other 85%. The majority stays on the old process indefinitely, with access to tools they do not use." },
];

const steps = [
  { num: "1", title: "We identify exactly where adoption stalls", desc: "The free 30-minute Assessment maps which processes are highest priority, where the usage gap is largest, and what a one-day sprint would address. You receive a 1-page written output you can share with your leadership team." },
  { num: "2", title: "We redesign one process in one day", desc: "Your team brings one real, named process. By end of day they have a working AI-assisted version they built themselves — not a demo scenario, not a simplified mockup. Their actual process, with AI embedded." },
  { num: "3", title: "They own the new workflow", desc: "Teams do not abandon processes they designed. The sprint output is a template the team built themselves and understands — which is why they run it the following week, and the week after." },
];

const objections = [
  { q: "\"We already ran a Copilot training day.\"", a: "A training day teaches staff what the tool can do. It does not change the process the tool needs to be embedded in. If usage did not change after the training day, the process was never redesigned. That is the work that remains." },
  { q: "\"We do not have budget for this right now.\"", a: "The Assessment is free. 30 minutes and a written summary you can use to build an internal business case. For programmes with constrained budgets, we can structure pilots through Microsoft and AWS partner frameworks that significantly reduce client costs." },
  { q: "\"Our team is not technical enough for AI.\"", a: "That is exactly the condition all our programmes are designed for. The entry question is not \"are they ready?\" — it is \"which one process should we fix first?\"" },
  { q: "\"We need to see results before committing to a programme.\"", a: "The Assessment produces a 1-page written output with a clear identification of where the gap is. That document is the result. Book the Assessment, share it internally, and decide from there." },
];

const ForOperations = () => {
  useEffect(() => { document.title = "For Operations — The Unlearning School"; }, []);

  return (
    <>
      <PageHero
        tag="FOR COO & OPERATIONS"
        title="You are paying for AI tools your teams are not using."
        subtitle="That is a workflow problem, not a motivation problem. We fix it in one day."
        ctaText="Book a free AI Adoption Assessment →"
        ctaTo="/assessment"
        note="No pitch · No proposal · 1-page written output within 24 hours"
      />

      {/* Pattern */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The pattern is consistent across organisations</h2>
        <p className="text-mid max-w-2xl mb-8">
          Your organisation deployed Microsoft 365 Copilot — or a similar tool. Licences are active. Your most engaged employees use it occasionally. The majority returned to their previous workflows within four weeks. The tool works. The surrounding process was never redesigned to use it.
        </p>
        <div className="border border-border rounded-lg overflow-hidden">
          {timeline.map((t, i) => (
            <div key={t.period} className={`flex gap-4 p-4 ${i < timeline.length - 1 ? "border-b border-border" : ""}`}>
              <span className="font-bold text-foreground whitespace-nowrap min-w-[100px]">{t.period}</span>
              <span className="text-mid">{t.desc}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Why standard responses fail */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Why the standard responses do not work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {responses.map((r, i) => (
              <div key={i} className="border border-border rounded-lg p-6">
                <p className="text-xs font-semibold tracking-widest text-mid uppercase mb-2">Response {i + 1}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-mid">{r.desc}</p>
              </div>
            ))}
          </div>
          <Blockquote>
            When a team runs their weekly reporting cycle the same way they did in 2022 — but with a Copilot button visible — they try it once, find it marginally helpful, and return to the known process. Not from resistance. Because the surrounding workflow was never changed to require it.
          </Blockquote>
        </div>
      </section>

      {/* What we do instead */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">What we do instead</h2>
        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {s.num}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-mid">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Assessment output */}
      <section className="border-y border-border">
        <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">The Assessment output is an internal document you can use</h2>
          <p className="text-mid max-w-2xl mb-6">
            The 1-page written summary from the Assessment is designed to travel inside your organisation. It identifies which AI tools are deployed, where usage is measurably low, which 3–5 processes are highest priority, and what a one-day sprint would address.
          </p>
          <Blockquote>
            Many Operations Directors use this document to align IT, HR, and finance leads before any budget conversation. It is a shared diagnosis, not a vendor proposal. There is no pricing in it.
          </Blockquote>
        </div>
      </section>

      {/* Objections */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Common objections, directly addressed</h2>
        <div className="space-y-6">
          {objections.map((o, i) => (
            <div key={i}>
              <h3 className="font-bold text-foreground mb-1">{o.q}</h3>
              <p className="text-mid">{o.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        dark
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
