import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerAi from "@/assets/banner-ai.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import { Kicker, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
    body: "This session maps your team's actual workflows and identifies where AI creates value vs. where it doesn't.",
    topics: [
      "What AI can do beyond chatbot-style prompting",
      "The foundations that actually matter for business teams",
      "AI vs automation vs agents, without unnecessary jargon",
      "What good AI usage looks like across different roles",
      "Where human judgment remains critical",
      "How the program will run and what is expected between sessions",
    ],
    practice: [
      { h: "Personalised AI Configuration", body: "setting permanent rules for how your AI assistant responds (tone, format, context)" },
      { h: "Memory Management", body: "controlling what your AI remembers across conversations" },
      { h: "Data Privacy Controls", body: "disabling model training on your conversations; enterprise data boundaries" },
      { h: "Model Selection Guide", body: "when to use fast/instant models vs deep-thinking models vs specialised models" },
      { h: "AI Tool Selection Framework", body: "matching the right AI tool to the right task based on capability, not brand" },
    ],
    useCases: ["Workflow automation", "Internal reporting", "Research and analysis", "Document drafting", "Process documentation", "Data synthesis", "Stakeholder communication"],
    outcome: "By the end of Session 1, the cohort has a shared language, a realistic scope, and concrete working scenarios. Each participant defines 1–2 real use cases to work on during the program.",
  },
  {
    num: "02",
    title: "Building Your First AI Workflows",
    body: "This session focuses on practical AI usage inside real business workflows.",
    topics: [
      "How to choose the right tool for the right task",
      "ChatGPT vs Claude vs Gemini vs Copilot in real business contexts",
      "Research workflows for internal and external analysis",
      "Using AI for document drafting, summarisation, and review",
      "Structuring reports and operational materials faster",
      "Reducing time spent on repetitive preparation tasks",
    ],
    practice: [
      { h: "Deep Research Mode", body: "using extended research capabilities to generate comprehensive reports with cited sources in 10+ minutes" },
      { h: "4 Prompting Strategies", body: "Clear Idea, Sequential Approach, Reverse Engineering, Cloning" },
      { h: "Temperature & Creativity Controls", body: "adjusting output precision (low for compliance/finance) vs creative freedom (high for ideation)" },
      { h: "Private Knowledge Base Querying", body: "uploading your own documents and interrogating them without external data leakage" },
      { h: "Source-Cited Research", body: "conversational search that returns answers with verifiable references" },
    ],
    useCases: [],
    outcome: "By the end of Session 2, participants have tested practical workflows and built prompt frameworks they can immediately use in their role.",
  },
  {
    num: "03",
    title: "Team Adoption, Workflows, and Champions",
    body: "This session focuses on operational workflows and the internal adoption layer.",
    topics: [
      "Using AI for process documentation, analysis, and operational planning",
      "Competitor scanning and market synthesis",
      "Faster first drafts without lowering quality standards",
      "How managers create minimum standards for AI usage",
      "Identifying 2 to 3 internal AI Champions",
      "How to measure adoption beyond vanity metrics",
      "How to reduce the gap between early adopters and the rest of the team",
    ],
    practice: [
      { h: "The Adoption Bottleneck", body: "middle managers caught between AI-fluent juniors and results-driven seniors" },
      { h: "From Prompting to Orchestration", body: "shifting from asking AI to write content, to having AI agents execute multi-step workflows autonomously" },
      { h: "Cohort Completion Advantage", body: "group-based learning delivers 85%+ completion vs 10-15% for self-paced courses" },
      { h: "Internal AI Champions", body: "identifying 2-3 team members who become the go-to reference for AI adoption" },
      { h: "Impact Measurement: Hours Saved", body: "measuring success by time recovered, not modules completed" },
    ],
    useCases: [],
    outcome: "By the end of Session 3, the team has both practical workflows and a clearer internal structure for sustained adoption.",
  },
  {
    num: "04",
    title: "Results, Refinement, and 30-Day Action Plan",
    body: "This final session turns learning into visible business decisions.",
    topics: [
      "Presentation of tested use cases",
      "Review of what worked and what did not",
      "Feedback and refinement",
      "Identifying repeatable workflows worth keeping",
      "Deciding what should scale after the first cohort",
      "Defining ownership, expectations, and next actions",
      "Building a 30-day roadmap for ongoing adoption",
    ],
    practice: [
      { h: "Non-Deterministic AI Outputs", body: "understanding that the same prompt generates different results, and how to iterate effectively" },
      { h: "Rapid Prototyping Without Code", body: "building functional web applications and tools using AI-assisted development platforms" },
      { h: "Reverse Engineering Strategy", body: "providing an existing product as reference and asking AI to analyse its business model, audience, and structure" },
      { h: "Cloning Strategy", body: "replicating the structure and style of an existing product as a starting point for a new project" },
      { h: "30-Day Adoption Sprint", body: "post-program action plan with clear ownership, milestones, and accountability based on hours saved" },
    ],
    useCases: [],
    outcome: "By the end of Session 4, your team has a first trained cohort, visible implementation examples, and a practical next-step plan.",
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

const tiers = [
  {
    tag: "Small Team",
    cohort: "Up to 5 participants",
    price: "3,000",
    perPerson: "600 EUR per participant",
    bestFor: ["Focused team or department pilot", "Quick validation of AI fit", "Tight, hands-on cohort"],
    productKey: "ai_small_team",
    featured: false,
  },
  {
    tag: "Standard",
    cohort: "Up to 10 participants",
    price: "5,000",
    perPerson: "500 EUR per participant",
    bestFor: ["Cross-functional team rollout", "Balanced group size for exercises", "Best price-to-impact ratio"],
    productKey: "ai_standard",
    featured: true,
  },
  {
    tag: "Enterprise",
    cohort: "Over 10 participants",
    price: "Custom",
    perPerson: "Custom pricing on request",
    bestFor: ["Multi-department rollout", "Custom scope and delivery plan", "Volume pricing agreed after initial meeting"],
    productKey: null,
    featured: false,
  },
];

const tools = [
  "Google AI Studio",
  "ChatGPT",
  "Claude",
  "Google Gemini",
  "Hermes Agent",
  "Lovable",
  "Manus",
  "Microsoft Copilot",
  "Google NotebookLM",
  "Perplexity",
];

const successMetrics = [
  "Number of real use cases adopted by the teams",
  "Number of workflows tested and retained",
  "Consistency of AI usage across participants",
  "Manager visibility into adoption and output quality",
  "Existence of a practical 30-day plan owned internally",
  "Identification of internal champions who can carry adoption further",
];

const nextSteps = [
  { num: "1", h: "Book the free audit", body: "A 30-minute working conversation to understand where AI fits in your workflows, what's blocking adoption, and which format makes sense. No commitment." },
  { num: "2", h: "We scope the right format together", body: "Based on the meeting, we agree on the right entry point: a single session, a short sprint, or the full program. Everything is adapted to your team's tools and context." },
  { num: "3", h: "Delivery starts", body: "The program begins on your timeline. Modular delivery means you control the pace. From this initial engagement, we grow the number of trained participants together." },
];

const AIForNonTechnical = () => {
  const { toast } = useToast();
  const [loadingKey, setLoadingKey] = useState<string | null>(null);

  useEffect(() => { document.title = "AI for Non-Technical People, The Unlearning School"; }, []);

  const handleCheckout = async (productKey: string) => {
    setLoadingKey(productKey);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { product: productKey },
      });
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err: any) {
      toast({ title: "Checkout error", description: err.message ?? "Could not start checkout", variant: "destructive" });
    } finally {
      setLoadingKey(null);
    }
  };

  return (
    <>
      <SEO
        title="AI for Non-Technical People, structured AI adoption programme"
        description="Role-adapted AI training for operations, HR, finance, and customer support teams. EU AI Act Article 4 ready. Built on the AI tools you already pay for. From 3,000 EUR per cohort."
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
          offers: [
            { "@type": "Offer", name: "Small Team (up to 5)", price: "3000", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Standard (up to 10)", price: "5000", priceCurrency: "EUR" },
          ],
        }}
        faq={[
          { question: "Who is this programme for?", answer: "Operations, finance, HR, customer support, and engineering teams that have access to AI tools but inconsistent or low usage." },
          { question: "Does it satisfy EU AI Act Article 4?", answer: "Yes. The programme is designed to deliver auditable AI literacy required by EU AI Act Article 4, in force since February 2025." },
          { question: "Which AI tools do we use?", answer: "The tools your organisation already pays for, typically Microsoft 365 Copilot, ChatGPT Enterprise, Gemini, or your internal assistants." },
          { question: "How much does it cost?", answer: "3,000 EUR for up to 5 participants, 5,000 EUR for up to 10 participants. Custom pricing for over 10. All tiers include the same content, audit, and certificate." },
        ]}
      />
      <PageHero
        tag="AI for Non-Technical People"
        banner={bannerAi}
        bannerAlt="Modern office workers learning AI tools"
        title="Your team is already using AI. You just don't control how."
        subtitle="A structured adoption program for non-technical business teams, built entirely on the AI tools and licenses you already pay for. Modular: 1 session to full program."
        ctaText="Buy now →"
        ctaTo="#pricing"
        secondaryText="Call now"
        secondaryTo="tel:+40722598346"
        
      />

      <Section>
        <SectionHeading
          kicker="The current challenge"
          title={<>AI adoption without structure creates gaps in <em className="text-red">performance, compliance, and security.</em></>}
          intro="Across business teams, AI adoption often starts before leadership has a clear model for how it should be used. Some employees rely on it daily, others avoid it. No standards. No visibility. No accountability. With AI regulation tightening across Romania and Europe, this is no longer just inefficiency, it is legal and operational risk."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10 mt-8">
          {challenges.map((c) => (
            <article key={c.tag} className="bg-background p-6 md:p-8 border border-paper/10">
              <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{c.tag}</span></p>
              <p className="text-paper/80 text-[15px] leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>

        <p className="text-paper/70 text-[15px] mt-8 leading-relaxed">
          Teams lose time on research, preparation, reporting, and repetitive tasks that AI could handle. Managers know the shift is happening, but often lack a structured framework for guiding adoption, setting expectations, and measuring progress. <span className="text-red">The cost of unstructured AI adoption is not just productivity loss. It is legal, operational, and reputational risk.</span>
        </p>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="Program objective">
          Help your team stop experimenting with AI and start using it. Build a first working cohort of AI-enabled professionals, supported by managers who can guide adoption, reduce inconsistency, and turn scattered experimentation into structured execution.
        </Blockquote>
      </Section>

      <Section variant="paper">
        <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] bg-red text-paper px-3 py-1.5">Who this program is for</span></p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          Any team that makes decisions <em>and gets work done.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {audience.map((a) => (
            <article key={a.tag} className="bg-paper p-8 md:p-10">
              <p className="mb-4"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{a.tag}</span></p>
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
              <p className="mb-2"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{e.meta}</span></p>
              <h3 className="font-display text-2xl text-paper mb-3">{e.name}</h3>
              <p className="text-paper/75 text-[15px] leading-relaxed">{e.body}</p>
            </article>
          ))}
        </div>
        <p className="text-paper/65 text-[15px] mt-6 italic font-display">Book the free audit. Scope the right format together. No commitment until you see the fit.</p>
      </Section>

      <Section variant="darker">
        <SectionHeading
          kicker="Program structure (full program)"
          title={<>Modular sessions. <em className="text-red">Designed for real work.</em></>}
          intro="Each session builds on the previous one, creating a progressive learning journey that translates directly into day-to-day execution. Click any module to expand."
        />
        <CurriculumAccordion sessions={sessions} />
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

      {/* PRICING */}
      <Section>
        <div id="pricing" className="scroll-mt-20">
          <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] bg-red text-paper px-3 py-1.5">Investment</span></p>
          <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-4 max-w-3xl">
            Simple pricing. <em className="text-red">Per cohort.</em>
          </h2>
          <p className="font-display italic text-lg md:text-xl text-paper/70 mb-12 max-w-2xl">
            Everything is fully customised to your team's context, tools, and existing AI licenses. Pricing scales with group size. Full customisation included in every tier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <article
                key={t.tag}
                className={`relative border-2 p-8 md:p-10 ${t.featured ? "border-red bg-red text-paper" : "border-paper/20 bg-background text-paper"}`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 bg-paper text-ink font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1">Most popular</span>
                )}
                <p className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-2 ${t.featured ? "text-paper/80" : "text-paper/50"}`}> {t.tag}</p>
                <p className={`font-mono text-[11px] uppercase tracking-[0.2em] mb-4 ${t.featured ? "text-paper/80" : "text-paper/60"}`}>{t.cohort}</p>
                <p className="font-display text-6xl mb-1 leading-none">
                  {t.price === "Custom" ? (
                    <span>Custom</span>
                  ) : (
                    <>
                      {t.price}<span className="font-mono text-base align-top opacity-70"> EUR</span>
                    </>
                  )}
                </p>
                <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-6 ${t.featured ? "text-paper/80" : "text-paper/50"}`}>{t.perPerson}</p>

                <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-3 ${t.featured ? "text-paper/80" : "text-paper/60"}`}>Best for</p>
                <ul className={`space-y-2 text-sm border-t ${t.featured ? "border-paper/30" : "border-paper/15"} pt-4 mb-6`}>
                  {t.bestFor.map((b) => (
                    <li key={b} className={`border-b pb-2 ${t.featured ? "border-paper/20 text-paper/95" : "border-paper/10 text-paper/80"}`}>→ {b}</li>
                  ))}
                </ul>

                <p className={`text-xs mb-6 ${t.featured ? "text-paper/85" : "text-paper/65"}`}>
                  Includes all sessions, AI vendor audit, follow-up session, and certificate.
                </p>

                {t.productKey ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => handleCheckout(t.productKey!)}
                      disabled={loadingKey === t.productKey}
                      className={`w-full inline-flex items-center justify-center px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors disabled:opacity-50 ${
                        t.featured
                          ? "bg-paper text-ink hover:bg-ink hover:text-paper"
                          : "bg-red text-paper hover:bg-paper hover:text-ink"
                      }`}
                    >
                      {loadingKey === t.productKey ? "Loading…" : "Pay & enrol →"}
                    </button>
                    <Link
                      to="/assessment"
                      className={`block text-center font-mono text-[10px] uppercase tracking-[0.2em] hover:underline ${t.featured ? "text-paper/90" : "text-paper/60"}`}
                    >
                      Or book the free audit first
                    </Link>
                  </div>
                ) : (
                  <Link
                    to="/assessment"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                  >
                    Free audit →
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className="mt-10 border-l-4 border-red pl-5 max-w-3xl">
            <p className="mb-2"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">Confidence clause</span></p>
            <p className="text-paper/85 text-[15px] leading-relaxed">
              If, after Session 1, your team concludes the program is not the right fit, the remaining sessions can be stopped and not invoiced.
            </p>
          </div>
        </div>
      </Section>

      {/* Commercial terms */}
      <Section variant="paper">
        <SectionHeading
          kicker="Commercial terms"
          title={<>Flexible delivery. <em className="text-red">Tailored to your context.</em></>}
        />
        <div className="grid md:grid-cols-3 gap-px bg-ink/10 mt-8">
          {[
            { h: "Delivery", body: "Online, hybrid, or in person." },
            { h: "Scheduling", body: "Modular sessions. Dates agreed in advance with your team." },
            { h: "Customisation", body: "Everything is tailored. Prompt kit, exercises, and workflows are adapted to your actual context, and built on the AI tools and licenses you already use. Initial meeting used to tailor use cases and expected outcomes." },
          ].map((c) => (
            <article key={c.h} className="bg-paper p-8">
              <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{c.h}</span></p>
              <p className="text-ink/80 text-[15px] leading-relaxed">{c.body}</p>
            </article>
          ))}
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
          {successMetrics.map((it) => (
            <li key={it} className="flex gap-3 py-3 border-b border-ink/15 text-ink/85 text-[15px]">
              <span className="text-red">→</span><span>{it}</span>
            </li>
          ))}
        </ul>
        <p className="text-ink/70 text-[15px] mt-6 italic font-display max-w-3xl">ROI can also be calibrated using your team's real data during the diagnostic stage, so the business case reflects actual workflows, time use, and internal realities, not only generic benchmarks.</p>
      </Section>

      {/* Leadership */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> Program leadership</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              Răzvan <em className="text-red">Vâlceanu.</em>
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mt-3">Founder, The Unlearning School</p>
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
                  <li>→ Workshops, hackathons, and keynotes for fast proof and leadership buy-in</li>
                  <li>→ Rapid prototyping and AI-enabled experimentation</li>
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">Credentials</p>
                <ul className="space-y-1 text-paper/85">
                  <li>→ Lovable Ambassador</li>
                  <li>→ Google Generative AI for Leaders (certification in progress)</li>
                  <li>→ Microsoft AI Certification</li>
                  <li>→ EU Accredited Trainer</li>
                </ul>
              </div>
            </TwoColumnGrid>
            <div className="pt-4 border-t border-paper/15">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">Tools used every day</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/80 border border-paper/25 px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What happens next */}
      <Section variant="paper">
        <SectionHeading
          kicker="What happens next"
          title={<>Three steps <em className="text-red">to get started.</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 mt-8">
          {nextSteps.map((s) => (
            <article key={s.num} className="bg-paper p-8 md:p-10">
              <span className="font-display text-6xl text-red leading-none">{s.num}</span>
              <h3 className="font-display text-2xl text-ink leading-tight mt-4 mb-3">{s.h}</h3>
              <p className="text-ink/75 text-[14px] leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="A program designed to fit your team. Not the other way around."
        subtitle="Pay and enrol your cohort, or book the free audit first. No pitch deck, no generic workshop."
        ctaText="Buy now · from €3,000 →"
        ctaTo="#pricing"
        secondaryText="Free audit"
        secondaryTo="/assessment"
        note="Modular delivery · Built on your existing tools · Certificate of completion"
      />
    </>
  );
};

export default AIForNonTechnical;
