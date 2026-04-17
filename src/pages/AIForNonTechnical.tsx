import { useEffect } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerAi from "@/assets/banner-ai.png";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, NumberedStep, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";

const challenges = [
  { tag: "EU AI Act compliance", body: "Since February 2025, the EU AI Act requires organisations to ensure AI literacy among employees. Article 4 is a legal obligation, not a recommendation." },
  { tag: "Inconsistent adoption", body: "Some people use AI daily, others barely use it at all. Output quality varies from person to person." },
  { tag: "Isolated time savings", body: "Teams save time in isolated ways, but not at a team level. Managers have little visibility into what is actually changing." },
  { tag: "Personal experimentation", body: "AI becomes personal experimentation, not an operational capability." },
  { tag: "Data leak risk", body: "Unregulated AI use risks data leaks through unsupervised inputs and outputs." },
  { tag: "Compliance audit gaps", body: "Inconsistent tool usage makes compliance audits harder to pass." },
];

const audience = [
  { tag: "Primary participants", items: ["Operations teams", "Finance teams", "HR teams", "Customer support", "Engineering teams", "Team leads and managers"] },
  { tag: "Internal sponsors", items: ["HR", "L&D", "Business unit leadership"] },
  { tag: "Cohort size", items: ["Up to 5 participants", "Up to 10 participants", "Over 10 (custom)"] },
];

const sessions = [
  {
    num: "01",
    title: "Where AI Fits in Your Operations",
    body: "This session maps your team's actual workflows and identifies where AI creates value vs. where it doesn't. What AI can do beyond chatbot prompting. AI vs automation vs agents, without jargon. Where human judgment remains critical.",
    practice: "Personalised AI configuration · Memory management · Data privacy controls · Model selection guide · AI tool selection framework. Each participant defines 1–2 real use cases to work on during the program.",
  },
  {
    num: "02",
    title: "Building Your First AI Workflows",
    body: "Participants take their identified use cases and build the first working version of each, inside the AI tools they already have access to. Workflow automation, internal reporting, research and analysis, document drafting, process documentation.",
    practice: "Live exercises on real tasks. Each workflow tested, adjusted, and committed before the session ends. Failures are part of the demo, that is where teams build trust in the tool.",
  },
  {
    num: "03",
    title: "Team Adoption, Workflows, and Champions",
    body: "How a workflow built by one person becomes a workflow used by the team. Identification of 2–3 internal champions. Standards for what good AI usage looks like inside the organisation, and what it does not.",
    practice: "Manager-facing standards. Champion role definition. Cross-functional handoff patterns.",
  },
  {
    num: "04",
    title: "Results, Refinement, and 30-Day Action Plan",
    body: "Review of what each participant built, retained, and adopted. Refinement of the workflows that need it. A manager-facing 30-day adoption roadmap that the cohort owns and runs without the trainer.",
    practice: "30-day plan documented. Clear ownership for next-step rollout. One follow-up session 30 days after delivery.",
  },
];

const deliverables = [
  "A first trained cohort across your teams",
  "Validated prompt frameworks for real use cases",
  "Tested AI workflows for research, reporting, operations, and decision support",
  "2–3 internal champions identified",
  "A manager-facing 30-day adoption roadmap",
  "A clearer standard for how AI should and should not be used inside your teams",
  "Clear ownership for next-step rollout",
];

const included = [
  "AI vendor & license audit of your current tool stack",
  "Live sessions (scope agreed after initial meeting)",
  "Cross-functional design for any department mix",
  "Live practical exercises built on your existing AI tools",
  "Role-relevant prompt frameworks for your team",
  "A custom prompt kit adapted to your workflows",
  "Tested workflow examples adapted to your context",
  "Identification of internal champions",
  "A manager-facing AI adoption roadmap",
  "One 30-day follow-up session after delivery",
  "Official certificate of completion from The Unlearning School",
];

const AIForNonTechnical = () => {
  useEffect(() => { document.title = "AI for Non-Technical People, The Unlearning School"; }, []);

  return (
    <>
      <SEO
        title="AI for Non-Technical People, structured AI adoption programme"
        description="Role-adapted AI training for operations, HR, finance, and customer support teams. EU AI Act Article 4 ready. Built on the AI tools you already pay for."
        keywords="AI training non-technical, EU AI Act Article 4, Copilot training, ChatGPT training, AI literacy programme, AI workflow design, role-based AI"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: "AI for Non-Technical People",
          description: "Modular AI adoption programme for non-technical business teams. Discovery, Short Sprint, or Full Programme.",
          provider: { "@type": "Organization", name: "The Unlearning School", url: "https://tuslast.lovable.app/" },
          inLanguage: ["en", "ro"],
          educationalLevel: "Professional",
          teaches: ["AI workflow design", "Prompting", "EU AI Act Article 4 literacy", "Responsible AI use"],
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: ["Onsite", "Online"],
            courseWorkload: "PT2H/PT4D",
          },
        }}
        faq={[
          {
            question: "Who is this programme for?",
            answer:
              "Operations, finance, HR, customer support, and engineering teams that have access to AI tools but inconsistent or low usage.",
          },
          {
            question: "Does it satisfy EU AI Act Article 4?",
            answer:
              "Yes. The programme is designed to deliver auditable AI literacy required by EU AI Act Article 4, in force since February 2025.",
          },
          {
            question: "Which AI tools do we use?",
            answer:
              "The tools your organisation already pays for, typically Microsoft 365 Copilot, ChatGPT Enterprise, Gemini, or your internal assistants.",
          },
        ]}
      />
      <PageHero
        tag="AI for Non-Technical People"
        banner={bannerAi}
        bannerAlt="Modern office workers learning AI tools"
        title="Your team is already using AI. You just don't control how."
        subtitle="A structured adoption program for non-technical business teams, built entirely on the AI tools and licenses you already pay for. Modular: 1 session to full program. Delivered in partnership with IT Assist."
        ctaText="Book a meeting →"
        ctaTo="/assessment"
        secondaryText="See all programmes"
        secondaryTo="/programmes"
        note="Modular · Cross-functional teams · In-person, hybrid, or online"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline="The current challenge" read="6 min" filed="Program · AI Literacy" />
          <div className="md:col-span-9">
            <SectionHeading
              kicker="The current challenge"
              title={<>AI adoption without structure creates gaps in <em className="text-red">performance, compliance, and security.</em></>}
              intro="Across business teams, AI adoption often starts before leadership has a clear model for how it should be used. Some employees rely on it daily, others avoid it. No standards. No visibility. No accountability. With AI regulation tightening across Romania and Europe, this is no longer just inefficiency, it is legal and operational risk."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10 mt-8">
              {challenges.map((c) => (
                <article key={c.tag} className="bg-background p-6 md:p-8 border border-paper/10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">{c.tag}</p>
                  <p className="text-paper/80 text-[15px] leading-relaxed">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="Program objective">
          Help your team stop experimenting with AI and start using it. Build a first working cohort of AI-enabled professionals, supported by managers who can guide adoption, reduce inconsistency, and turn scattered experimentation into structured execution.
        </Blockquote>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> Who this program is for</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Any team that makes decisions <em>and gets work done.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {audience.map((a) => (
            <article key={a.tag} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-4">{a.tag}</p>
              <ul className="space-y-2 text-ink/80 text-[15px]">
                {a.items.map((it) => (
                  <li key={it} className="flex gap-3 border-b border-ink/10 pb-2 last:border-0">
                    <span className="text-red">→</span><span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="text-ink/70 text-[15px] mt-6 italic font-display">Any department mix. Cross-functional cohorts welcome.</p>
      </Section>

      <Section>
        <SectionHeading
          kicker="Entry points"
          title={<>Modular delivery. <em className="text-red">Flexible scope.</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {[
            { name: "Discovery Session", meta: "1 session · 2 hours", body: "Understand where AI fits, where it doesn't, and what's blocking adoption." },
            { name: "Short Sprint", meta: "2–3 sessions over 2–3 weeks", body: "Pick one operational bottleneck, build and test an AI workflow for it." },
            { name: "Full Program", meta: "4+ sessions, modular", body: "Covers adoption infrastructure, workflow integration, internal champions, and a 30-day action plan." },
          ].map((e) => (
            <article key={e.name} className="bg-background p-8 md:p-10 border border-paper/10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">{e.meta}</p>
              <h3 className="font-display text-2xl text-paper mb-3">{e.name}</h3>
              <p className="text-paper/75 text-[15px] leading-relaxed">{e.body}</p>
            </article>
          ))}
        </div>
        <p className="text-paper/65 text-[15px] mt-6 italic font-display">Book a meeting. Scope the right format together. No commitment until you see the fit.</p>
      </Section>

      <Section variant="paper">
        <SectionHeading
          kicker="Program structure (full program)"
          title={<>Modular sessions. <em className="text-red">Designed for real work.</em></>}
          intro="Each session builds on the previous one, creating a progressive learning journey that translates directly into day-to-day execution."
        />
        <div className="space-y-px bg-ink/10 mt-8">
          {sessions.map((s) => (
            <article key={s.num} className="bg-paper p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-2">
                  <span className="font-display text-6xl text-red leading-none">{s.num}</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 leading-tight">{s.title}</h3>
                  <p className="text-ink/75 text-[15px] leading-relaxed mb-4">{s.body}</p>
                  <div className="border-t border-ink/10 pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">What you'll practice</p>
                    <p className="text-ink/80 text-[14px] leading-relaxed">{s.practice}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> After the program</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              What your team <em className="text-red">gets.</em>
            </h2>
            <p className="text-paper/70 text-[15px] mt-5 leading-relaxed">Not just training. A structured first deployment of AI adoption across your business functions.</p>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-3 border-t border-paper/15">
              {deliverables.map((d, i) => (
                <li key={d} className="flex gap-4 py-3 border-b border-paper/15 text-paper text-[15px]">
                  <span className="font-mono text-red tabular-nums">0{i + 1}</span>
                  <span className="text-paper/85">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Kicker> What is included</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-5">
              Everything you need. <em className="text-red">Nothing you don't.</em>
            </h2>
            <div className="bg-red text-paper p-6 mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/80 mb-3"> Included in the price</p>
              <h3 className="font-display text-2xl mb-3">AI Vendor & License Audit</h3>
              <p className="text-paper/90 text-[14px] leading-relaxed">Before delivery, we audit the AI tools and licenses your team already uses. All exercises, prompt kits, and workflows are built on your existing vendor stack, so participants work with tools they already have access to. No new licenses required, no wasted budget.</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-2 border-t-2 border-ink/15">
              {included.map((it) => (
                <li key={it} className="flex gap-3 py-3 border-b border-ink/15 text-ink/85 text-[15px]">
                  <span className="text-red">→</span><span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker="Why this format"
          title={<>Designed to change how the work gets done <em className="text-red">after the room.</em></>}
          intro="The program is delivered as modular sessions rather than a 2-day intensive. Lower operational disruption. Space to apply learning between sessions. Better retention, feedback, and refinement based on real usage."
        />
        <p className="font-display italic text-xl md:text-2xl text-paper/80 leading-snug max-w-3xl mt-6">
          The program is not designed to impress in the room. <span className="text-red not-italic">It is designed to change how the work gets done after the room.</span>
        </p>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> How success is measured</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-10 max-w-3xl">
          Evaluated by operational adoption. <em className="text-red">Not attendance.</em>
        </h2>
        <ul className="space-y-2 border-t-2 border-ink/15 max-w-3xl">
          {[
            "Number of real use cases adopted by the teams",
            "Number of workflows tested and retained",
            "Consistency of AI usage across participants",
            "Manager visibility into adoption and output quality",
            "Existence of a practical 30-day plan owned internally",
            "Identification of internal champions who can carry adoption further",
          ].map((it) => (
            <li key={it} className="flex gap-3 py-3 border-b border-ink/15 text-ink/85 text-[15px]">
              <span className="text-red">→</span><span>{it}</span>
            </li>
          ))}
        </ul>
        <p className="text-ink/70 text-[15px] mt-6 italic font-display max-w-3xl">ROI can also be calibrated using your team's real data during the diagnostic stage, so the business case reflects actual workflows, time use, and internal realities, not only generic benchmarks.</p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> Program leadership</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              Răzvan <em className="text-red">Vâlceanu.</em>
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mt-3">Founder, The Unlearning School · Delivered in partnership with IT Assist</p>
          </div>
          <div className="md:col-span-8 space-y-4 text-paper/80 text-[15px] leading-relaxed">
            <p>20+ years across innovation, digital transformation, executive education, entrepreneurship, and practical workforce training.</p>
            <p>Worked across corporate, academic, public-sector, and entrepreneurial environments, designing and delivering learning experiences that translate into execution, not just awareness.</p>
            <TwoColumnGrid>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">Current focus</p>
                <ul className="space-y-1 text-paper/85">
                  <li>→ AI adoption for non-technical teams</li>
                  <li>→ Practical training for cross-functional business teams</li>
                  <li>→ Workflow redesign and execution support</li>
                  <li>→ Rapid prototyping and AI-enabled experimentation</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">Credentials</p>
                <ul className="space-y-1 text-paper/85">
                  <li>→ Lovable Ambassador</li>
                  <li>→ Google Certification</li>
                  <li>→ Microsoft Certification</li>
                  <li>→ GAIL Certification</li>
                </ul>
              </div>
            </TwoColumnGrid>
          </div>
        </div>
      </Section>

      <Section variant="paper" bordered={false}>
        <Blockquote attribution="Confidence clause">
          If, after Session 1, your team concludes the program is not the right fit, the remaining sessions can be stopped and not invoiced.
        </Blockquote>
      </Section>

      <CTASection
        title="A program designed to fit your team. Not the other way around."
        subtitle="Book a meeting. See if there's a fit. No commitment, no pitch deck, no generic workshop. Just a working conversation about where AI can make a difference in your operations."
        ctaText="Book a meeting →"
        ctaTo="/assessment"
        note="Modular delivery · Built on your existing tools · Certificate of completion"
      />
    </>
  );
};

export default AIForNonTechnical;
