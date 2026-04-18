import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import CurriculumAccordion, { type CurriculumSession } from "@/components/CurriculumAccordion";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { Kicker, SectionHeading } from "@/components/Editorial";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const stats = [
  { v: "40+", l: "built-in tools" },
  { v: "24/7", l: "runs on your server" },
  { v: "MIT", l: "open source · you own it" },
  { v: "4 wks", l: "to full autonomy" },
];

const differentiators = [
  { num: "01", h: "Memory that compounds", body: "Hermes remembers your clients, decisions, and why you made them. Multi-level memory across sessions. It searches its own history to recall a pricing decision from 4 weeks ago and uses it to avoid a mistake in week 5. Basic chatbots forget after you close the tab." },
  { num: "02", h: "Self-improvement loop", body: "When Hermes solves a hard problem, it writes a reusable skill in Markdown so it can solve similar problems faster next time. No manual configuration. It watched a founder classify support tickets and built its own skill for it." },
  { num: "03", h: "Action, not response", body: "Sends emails. Books meetings. Does prospect research. Updates spreadsheets. Runs scheduled tasks while you sleep. Connected to Gmail, Calendar, Slack, Notion, CRM, and 40+ other tools. Asks for approval before doing anything outside its scope." },
];

const useCases = [
  { num: 1, when: "Every morning · 07:30", h: "Morning intelligence briefing", body: "Hermes reads your emails, checks your calendar, scans 5 industry sources you define, and sends a 3-minute Telegram summary. Flagged items, drafted replies, and your day's priorities. Before your first coffee.", metric: "45 min", sub: "saved daily" },
  { num: 2, when: "Before every sales call", h: "Prospect research on demand", body: "Send a company name 30 minutes before your call. Get back: size, recent news, LinkedIn activity, potential pain points, and 3 questions worth asking. You walk in prepared without spending an hour on Google.", metric: "3×", sub: "conversion-ready calls" },
  { num: 3, when: "Content pipeline", h: "Voice note → LinkedIn post", body: "Send a 2-minute voice message on Telegram. Hermes transcribes, extracts your key idea, writes a post in your tone, and asks for approval. You publish. You did not write a word.", metric: "5×", sub: "content output" },
  { num: 4, when: "Every Friday · 17:00", h: "Competitor monitoring digest", body: "Tracks 3-5 competitors: new pages, pricing changes, job postings, press mentions. Structured weekly report on Telegram. You see what moved in the market without looking for it.", metric: "Zero", sub: "blind spots" },
  { num: 5, when: "After every meeting", h: "Automatic follow-up protocol", body: "Paste your meeting notes. Hermes extracts decisions, action items, and ownership. Drafts follow-up emails for each person. Creates tasks in your project tool. One paste, 90 seconds, done.", metric: "0", sub: "dropped follow-ups" },
  { num: 6, when: "Weekly · on demand", h: "Pipeline & revenue snapshot", body: "Reads your CRM or deal sheet, computes weighted pipeline, flags stale deals over 14 days, and tells you which 3 accounts to call this week. Structured report, no spreadsheet gymnastics.", metric: "Clear", sub: "weekly priority" },
];

const techList = [
  { h: "Self-improving agent", body: "Builds reusable skills from experience. The longer it runs, the less you have to instruct it." },
  { h: "Persistent memory across sessions", body: "Remembers clients, preferences, context, and past decisions. SQLite + LLM summarisation for cross-session recall." },
  { h: "Model-agnostic", body: "Works with 200+ models via OpenRouter, Nous Portal, OpenAI, or your own endpoint. Change the model with one command." },
  { h: "Multi-platform gateway", body: "Telegram, Slack, Discord, WhatsApp, Email. Start a task on laptop, get the result on your phone." },
  { h: "Parallel subagents", body: "Spawns isolated agents for parallel workstreams. Research three companies simultaneously. Monitor five sources at once." },
  { h: "40+ built-in tools", body: "Web search, browser automation, file operations, code execution, email, calendar, CRM, image generation, voice." },
];

const weeks: CurriculumSession[] = [
  {
    num: "01",
    title: "Foundation",
    kicker: "Week 01 · Install & connect",
    body: "We get Hermes running on your infrastructure and connected to the channels you already live in. By end of week, the agent is sending you a useful morning briefing every day.",
    topics: ["Agent installed on your server", "Telegram gateway connected", "Gmail + Calendar integration", "First workflow: morning briefing", "Memory configured for your context"],
    outcome: "A live agent on your server, reachable from Telegram, with one daily workflow already running.",
  },
  {
    num: "02",
    title: "Business workflows",
    kicker: "Week 02 · Build sprint",
    body: "We build three custom automations together — the ones you actually need. You watch how they're wired so you can edit and extend them yourself later.",
    topics: ["3 custom automations built with you", "Prospect research workflow", "Scheduled reporting setup", "Competitor monitoring live", "Meeting follow-up protocol"],
    outcome: "Three production workflows running on autopilot, each saving you hours per week.",
  },
  {
    num: "03",
    title: "Tool connections",
    kicker: "Week 03 · Integration",
    body: "Hermes plugs into the rest of your stack — Slack, Notion, your CRM, content pipeline. Approval flows mean it always asks before doing anything sensitive.",
    topics: ["Connect to your existing stack", "Slack / Notion / CRM basics", "Content pipeline setup", "Approval flows (agent asks first)", "Security and permissions review"],
    outcome: "Hermes lives inside your tools, with clear permissions and a human-in-the-loop on anything that matters.",
  },
  {
    num: "04",
    title: "Autonomous mode",
    kicker: "Week 04 · Handoff",
    body: "We move from supervised to autonomous. Hermes runs on its own, handles exceptions by the rules you set, and you learn how to teach it new skills without us.",
    topics: ["Agent runs without daily input", "Exception handling rules", "Weekly digest design", "Teaching Hermes new skills live", "Handoff and documentation"],
    outcome: "A self-running agent you fully own, with the documentation and skills to extend it on your own.",
  },
];

const faqs: FAQItem[] = [
  // ── Pricing & guarantees ──────────────────────────────────────────
  { category: "Pricing & guarantees", q: "How much does Hermes cost?", a: "Two tiers, both one-time payments with no recurring fees. Self-directed: €497 (2 × 90-min sessions, agent setup + 2 core workflows, 30 days email support). Full build: €997 (4 × 90-min sessions, complete setup + 6 or more workflows, full integrations, 4 weeks async Telegram support, recordings, 3 months of light support after). The agent itself is yours forever under MIT license." },
  { category: "Pricing & guarantees", q: "Are there any recurring fees or subscriptions?", a: "No. Both tiers are strictly one-time. Once the program ends, you owe nothing — not to us, not to a SaaS vendor. The only ongoing cost is the small cloud server Hermes runs on (around €5–8/month, billed by the cloud provider directly to you)." },
  { category: "Pricing & guarantees", q: "What is the satisfaction guarantee?", a: "If after the first 90-minute session you decide Hermes is not for you, we refund the full amount with no questions and no paperwork. After session one we are past the point where a refund is fair to either side, but if something goes wrong we always work it out — we have never had a client leave unhappy." },
  { category: "Pricing & guarantees", q: "What is the price-lock guarantee?", a: "The price you pay at enrolment is locked. Any future increases (we adjust pricing roughly twice a year) do not apply to you, including for any follow-up engagements within 12 months. Spots are capped at 4 per month, so the price reflects scarcity, not artificial urgency." },
  { category: "Pricing & guarantees", q: "Do you offer payment plans or invoicing?", a: "Yes. For the Full build (€997) we offer a 2-instalment plan at no extra cost (€499 + €498). Company invoicing in EUR or RON is available — we issue a proper invoice from a Romanian SRL with VAT. Just mention it before checkout and we send a payment link with terms." },
  { category: "Pricing & guarantees", q: "Is there a discount for teams or multiple seats?", a: "Yes. Two seats: 10% off. Three or more: custom quote. Each person gets their own agent on their own server — we don't share infrastructure between team members because permissions and memory are personal." },

  // ── Technical & setup ─────────────────────────────────────────────
  { category: "Technical & setup", q: "Do I need to know how to code?", a: "No. Hermes uses natural language for almost all configuration. The technical setup (server, gateway, integrations) is done with you live in session one — not handed off as homework. By end of week one you'll be talking to a working agent from your phone." },
  { category: "Technical & setup", q: "What does \"on my server\" actually mean?", a: "Hermes runs on a small Linux cloud instance — typically a €5–8/month VPS on Hetzner, DigitalOcean, or Scaleway. You own the server, the API keys, the data, and the agent. Nothing is routed through our infrastructure. We help you provision it in session one and you keep full root access." },
  { category: "Technical & setup", q: "Which AI models does Hermes use?", a: "By default, Hermes uses your own API keys for OpenAI, Anthropic (Claude), or Google (Gemini) — whichever you prefer. You pay the model provider directly at cost (typically €5–30/month depending on usage). We help you pick the right model for each workflow during the program." },
  { category: "Technical & setup", q: "What if I don't already have a cloud server?", a: "We provision one with you in session one — it takes about 15 minutes. We walk you through Hetzner or DigitalOcean signup, install Hermes, and configure SSH access. No prior server experience needed." },
  { category: "Technical & setup", q: "Which tools and platforms does Hermes integrate with?", a: "Out of the box: Telegram, Gmail, Google Calendar, Slack, Notion, Airtable, Linear, GitHub, HubSpot, Pipedrive, plus 30+ others via webhook and HTTP. New integrations can be added by describing them in plain English — Hermes writes its own connector and you approve it." },
  { category: "Technical & setup", q: "Can Hermes work offline or on-premise?", a: "Yes, for advanced clients. We can deploy Hermes against a local LLM (Ollama, LM Studio) on your own hardware, with zero outbound API calls. Setup is more involved and only included in the Full build with prior agreement — mention it before enrolling." },

  // ── How Hermes works ──────────────────────────────────────────────
  { category: "How Hermes works", q: "How is this different from Zapier or Make?", a: "Zapier and Make automate fixed if-this-then-that rules. Hermes handles ambiguous decisions — it can read a situation, weigh options, decide what to do, and ask you when uncertain. Rule-based tools cannot do that. The two are complementary: many clients keep their Zapier flows and use Hermes for the judgement-heavy parts." },
  { category: "How Hermes works", q: "How is this different from ChatGPT or Claude?", a: "ChatGPT is a chat interface — it forgets after the tab closes and cannot take actions in your tools. Hermes is a persistent agent: it remembers your clients and decisions across months, sends real emails, books real meetings, runs scheduled tasks while you sleep, and writes its own reusable skills when it solves a hard problem." },
  { category: "How Hermes works", q: "What does \"self-improving\" mean exactly?", a: "When Hermes successfully solves a non-trivial task, it writes a small Markdown skill file describing how it did it. Next time a similar task appears, it loads that skill instead of reasoning from scratch — faster, cheaper, more consistent. You can read every skill in plain English and edit or delete any of them." },
  { category: "How Hermes works", q: "How does memory work?", a: "Hermes has multi-level memory: short-term (current conversation), session memory (last few days of activity), and long-term knowledge (clients, projects, decisions, preferences). It searches its own history before acting, so a pricing decision from week 4 can inform a quote in week 12. All memory is stored in a local SQLite file on your server — you can inspect, export, or wipe it at any time." },
  { category: "How Hermes works", q: "Can Hermes act without my approval?", a: "Only on workflows you have explicitly marked as autonomous (e.g. morning briefing, scheduled reports). Anything that touches the outside world — sending an email, booking a meeting, posting in Slack — requires explicit approval by default, until you tell Hermes you trust it for that specific action type." },

  // ── Privacy, security & ownership ─────────────────────────────────
  { category: "Privacy & ownership", q: "Is my data secure?", a: "Yes. All data lives on your server. No telemetry, no analytics, no third-party cloud lock-in, no data shared with us. Hermes is open source under MIT license — you can audit every line of code. The only outbound calls are to the AI model provider you chose (OpenAI/Anthropic/Google) and to the integrations you explicitly connect." },
  { category: "Privacy & ownership", q: "Who owns Hermes after the program?", a: "You do. Fully. The code is MIT licensed, the server is yours, the API keys are yours, the memory is yours. We do not retain any access. If we vanish tomorrow, your agent keeps running indefinitely." },
  { category: "Privacy & ownership", q: "Can I modify or extend Hermes myself?", a: "Yes — that is the point. The codebase is small (around 8,000 lines of Python) and well documented. The handoff in week 4 includes a walkthrough of the architecture so you (or a developer you hire) can extend it without us." },
  { category: "Privacy & ownership", q: "Is Hermes GDPR compliant?", a: "Yes. Because all data stays on your server in the EU region of your choice, you remain the sole data controller. We provide a one-page DPA template if your legal team needs one. Hermes never logs personally identifiable information to external services unless you explicitly configure it to." },

  // ── Program logistics ─────────────────────────────────────────────
  { category: "Program logistics", q: "How long is the program?", a: "Full build is 4 weeks: one 90-minute session per week, plus async Telegram support between sessions. Self-directed is 2 weeks with two sessions. Both timelines are flexible — clients with travel or busy weeks can stretch to 6–8 weeks at no extra cost." },
  { category: "Program logistics", q: "When can I start?", a: "Maximum 4 clients per month. The current waiting list is typically 2–3 weeks. The free 30-minute discovery call can usually happen within 48 hours — that's where we confirm fit and lock your start date." },
  { category: "Program logistics", q: "Is the program 1:1 or group?", a: "Strictly 1:1. Every session is built around your specific workflows — no slides, no curriculum applied to a cohort. The 4-clients-per-month cap is what makes this possible." },
  { category: "Program logistics", q: "What if I need to reschedule a session?", a: "No problem. As long as you give 24h notice we move it to the next available slot. We work in CET but accommodate clients from EST to GMT+8 regularly." },
  { category: "Program logistics", q: "What happens after the 4 weeks?", a: "You get 3 months of light support included — async Telegram messages for questions, small fixes, model updates. After that, optional retainer (€200/month) or one-off sessions (€250/90 min) if you want help adding new workflows. Most clients don't need it." },
  { category: "Program logistics", q: "Do you record the sessions?", a: "Yes. Every session is recorded and shared with you within 24 hours, indexed by topic. The recordings plus the written playbook mean you can always go back and see exactly how a workflow was built." },

  // ── Fit & decision ────────────────────────────────────────────────
  { category: "Fit & decision", q: "Who is Hermes NOT for?", a: "Three groups: (1) People who want a no-code drag-and-drop tool — Hermes is configured by talking to it, not by clicking. (2) Teams that need a polished SaaS UI for non-technical end users — Hermes is a personal operations agent, not a product. (3) Anyone expecting magic without effort — the program requires 4 hours of live work plus your real workflows to build against." },
  { category: "Fit & decision", q: "Who gets the most value from Hermes?", a: "Solo founders, agency owners, consultants, and operators who: spend 5+ hours a week on email/research/coordination, already know their workflows by heart, and want to own the tool rather than rent another SaaS. Typical client recovers 8–15 hours per week within 60 days." },
  { category: "Fit & decision", q: "What if I'm not sure Hermes fits my workflows?", a: "Book the free 30-minute audit. We look at 2–3 of your actual recurring tasks and tell you honestly whether Hermes will help, will not help, or whether a simpler tool would do the job. About 30% of audit calls end with us recommending something else." },
  { category: "Fit & decision", q: "Can I see Hermes running before I commit?", a: "Yes. The discovery call includes a 5-minute live demo of a real client workflow (with permission and anonymised data). You can also see the open-source repository on GitHub before talking to us." },
];

const Hermes = () => {
  const { toast } = useToast();
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  useEffect(() => { document.title = "Hermes Agent, The Unlearning School"; }, []);

  const handleCheckout = async (productKey: string) => {
    setLoadingKey(productKey);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", { body: { product: productKey } });
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
      else throw new Error("No checkout URL returned");
    } catch (err: any) {
      toast({ title: "Checkout error", description: err.message ?? "Could not start checkout", variant: "destructive" });
    } finally {
      setLoadingKey(null);
    }
  };

  return (
    <>
      <SEO
        title="Hermes Agent — your self-improving AI operations agent"
        description="Open-source AI agent with persistent memory, 40+ tools, multi-platform gateway. Runs on your server. Telegram, Slack, Email. 4 weeks to full autonomy."
        keywords="AI agent, self-improving agent, Hermes agent, open source AI agent, Telegram AI agent, autonomous agent, persistent memory agent"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Hermes Agent",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Linux, macOS, Windows",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          license: "https://opensource.org/licenses/MIT",
          description:
            "Self-improving AI operations agent with persistent memory and 40+ built-in tools. Runs on your server.",
        }}
      />
      <PageHero
        tag="Hermes Agent · Internal Agentic Solution"
        title="Stop prompting. Start delegating."
        subtitle="ChatGPT answers questions. Hermes sends the email, books the meeting, researches the prospect, monitors the market, and reports back on Telegram. While you are in a call."
        ctaText="Buy Agent →"
        ctaTo="#pricing"
        secondaryText="Call now"
        secondaryTo="tel:+40722598346"
        note="Open source · MIT · Built by Nous Research"
      />

      {/* Terminal mock */}
      <Section bordered={false}>
        <div className="max-w-3xl mx-auto bg-paper text-ink border-2 border-paper/30">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-ink/15 bg-ink/5">
            <span className="w-3 h-3 rounded-full bg-red" />
            <span className="w-3 h-3 rounded-full bg-ink/30" />
            <span className="w-3 h-3 rounded-full bg-ink/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60 ml-3">hermes · telegram gateway · running</span>
          </div>
          <div className="p-6 md:p-8 font-mono text-[13px] leading-relaxed text-ink/85 space-y-4">
            <div><span className="text-ink/40">You 07:29</span><br />Morning briefing please.</div>
            <div><span className="text-red">Hermes 07:30</span><br />Checking email, calendar, and news...<br />3 emails need a reply today. Andrei's proposal is ready for review. 14:00 confirmed.<br />Top signal: EU AI Act compliance deadline moved to Q3. One competitor updated pricing.<br />Drafted replies for 2 routine emails. Send?</div>
            <div><span className="text-ink/40">You 07:31</span><br />Yes. Research Innobyte before my 14:00.</div>
            <div><span className="text-red">Hermes 07:31</span><br />Sent. Researching Innobyte now.<br />60 employees · €2.1M raised in 2023 · hiring 3 sales roles · main competitor lost 2 enterprise clients last month.<br /><span className="text-red">✓ Briefing complete at 07:31</span></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10 mt-10">
          {stats.map((s) => (
            <div key={s.l} className="bg-background border-2 border-paper/15 p-6 text-center">
              <p className="font-display text-3xl md:text-4xl text-red leading-none mb-2">{s.v}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What it is */}
      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Kicker> What this actually is</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              The <em className="text-red">short answer.</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-paper/80 text-[15px] leading-relaxed">
            <p>Every chatbot you have used starts from zero each time. It has no memory of what you decided last week, what your clients look like, or how you handled a similar situation six months ago.</p>
            <p>Hermes is different in one specific way: <span className="text-red">it compounds</span>. When it solves a problem, it writes a reusable procedure. Next time, it is faster and better. The longer it runs, the more useful it becomes.</p>
            <p>It also acts. Not just answering. Sending emails, scheduling reports, researching companies, updating spreadsheets, monitoring competitors, all while you are elsewhere.</p>
            <p>It runs on a €5/month server, lives in your Telegram, and belongs entirely to you. No subscription to a platform. No vendor lock-in. No data leaving your infrastructure.</p>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="The honest framing">
          ChatGPT is a calculator. Zapier is a set of fixed rules. Hermes is the team member who learns your business, remembers everything, and works while you sleep.
        </Blockquote>
      </Section>

      {/* Differentiators */}
      <Section>
        <SectionHeading
          kicker="What makes it different"
          title={<>Three things <em className="text-red">no chatbot does.</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {differentiators.map((d) => (
            <article key={d.num} className="bg-background p-8 md:p-10 border-2 border-paper/15">
              <span className="font-display text-6xl text-red leading-none">{d.num}</span>
              <h3 className="font-display text-2xl text-paper leading-tight mt-5 mb-3">{d.h}</h3>
              <p className="text-paper/70 text-sm leading-relaxed">{d.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Use cases */}
      <Section variant="paper">
        <div id="use-cases" className="scroll-mt-20">
          <Kicker> What your agent does</Kicker>
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-6 max-w-3xl">
            Real workflows, <em className="text-red">built for your business.</em>
          </h2>
          <p className="font-display italic text-lg text-ink/70 mb-12 max-w-2xl">
            These are workflows we build together during the coaching program, adapted to your context. Not demos. Not templates. Yours.
          </p>

          <div className="border-t-2 border-ink/15">
            {useCases.map((u) => (
              <div key={u.num} className="grid grid-cols-12 gap-4 md:gap-8 py-8 border-b-2 border-ink/15">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-display text-4xl md:text-5xl text-red leading-none">{String(u.num).padStart(2, "0")}</span>
                </div>
                <div className="col-span-10 md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mb-2">{u.when}</p>
                  <h3 className="font-display text-2xl text-ink leading-tight">{u.h}</h3>
                </div>
                <div className="col-span-12 md:col-span-5 text-ink/75 text-[15px] leading-relaxed">{u.body}</div>
                <div className="col-span-12 md:col-span-2 text-right">
                  <p className="font-display text-3xl text-red leading-none">{u.metric}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60 mt-1">{u.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technical */}
      <Section>
        <SectionHeading
          kicker="Under the hood"
          title={<>What it is, <em className="text-red">technically.</em></>}
          intro="No jargon beyond what matters."
        />
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-5">
            {techList.map((t) => (
              <div key={t.h} className="border-b border-paper/15 pb-5">
                <h3 className="font-display text-xl text-paper mb-2">{t.h}</h3>
                <p className="text-paper/70 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-5">
            <div className="bg-paper text-ink border-2 border-paper/30 p-6 font-mono text-[12px] leading-relaxed">
              <p className="text-ink/50"># Install Hermes on your VPS</p>
              <p className="break-all mb-4">curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash</p>
              <p className="text-ink/50"># Connect to your Telegram</p>
              <p className="mb-1">hermes setup gateway telegram</p>
              <p className="text-red mb-4">✓ Gateway connected. Hermes is live.</p>
              <p className="text-ink/50"># Schedule your first briefing</p>
              <p className="mb-1">hermes cron "morning briefing at 7:30 every weekday"</p>
              <p className="text-red">✓ Scheduled. First briefing tomorrow 07:30.</p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mt-4"> We do this together, live, in week 1.</p>
          </div>
        </div>
      </Section>

      {/* Coaching weeks */}
      <Section variant="darker">
        <Kicker> The coaching program</Kicker>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-6 max-w-4xl">
          4 weeks. One agent built <em className="text-red">around your workflows.</em>
        </h2>
        <p className="text-paper/70 text-base md:text-lg max-w-3xl mb-2">
          Modular weeks. Each week ships something live you can use immediately. Click a week to expand.
        </p>

        <CurriculumAccordion sessions={weeks} />

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-paper/75 text-sm">
          <p><strong className="text-paper">Included:</strong> 4 × 90-min 1:1 sessions, recorded. Async Telegram support. Custom playbook for every workflow.</p>
          <p><strong className="text-paper">Yours after:</strong> The agent is fully yours. MIT license. No subscription. 3 months of light support after the program ends.</p>
          <p><strong className="text-paper">Maximum 4 clients/month.</strong> 1:1 program. Spots typically booked 2-3 weeks out.</p>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div id="pricing" className="scroll-mt-20" />
        <Kicker> Investment</Kicker>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-12 max-w-3xl">
          Two ways <em className="text-red">to engage.</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="border-2 border-paper/20 p-8 md:p-10 bg-background">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-2"> Self-directed</p>
            <p className="font-display text-6xl text-paper mb-1">€497<span className="font-mono text-base align-top text-paper/60"> /person</span></p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mb-6">one-time · no recurring fees</p>
            
            <ul className="space-y-2 text-paper/80 text-sm border-t border-paper/15 pt-5 mb-8">
              {["2 × 90-min 1:1 sessions", "Agent setup + 2 core workflows", "Written playbook", "Email support for 30 days", "Hermes fully yours at end"].map((i) => (
                <li key={i} className="border-b border-paper/10 pb-2">→ {i}</li>
              ))}
            </ul>
            <div className="space-y-2">
              <button
                onClick={() => handleCheckout("hermes_self")}
                disabled={loadingKey === "hermes_self"}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors disabled:opacity-50"
              >
                {loadingKey === "hermes_self" ? "Loading…" : "Pay & enrol →"}
              </button>
              <Link to="/assessment" className="block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 hover:text-red">Or book the AI Adoption Call</Link>
            </div>
          </article>
          <article className="border-2 border-red bg-red text-paper p-8 md:p-10 relative">
            <span className="absolute -top-3 left-8 bg-paper text-ink font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1">Most popular</span>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80 mb-2"> Full build</p>
            <p className="font-display text-6xl text-paper mb-1">€997<span className="font-mono text-base align-top text-paper/80"> /person</span></p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/80 mb-6">one-time · no recurring fees</p>
            <ul className="space-y-2 text-paper text-sm border-t border-paper/30 pt-5 mb-8">
              {["4 × 90-min 1:1 sessions", "Complete agent setup + 6+ workflows", "Full tool integrations", "Async Telegram support · 4 weeks", "Custom playbook + session recordings", "3 months light support after"].map((i) => (
                <li key={i} className="border-b border-paper/20 pb-2">→ {i}</li>
              ))}
            </ul>
            <div className="space-y-2">
              <button
                onClick={() => handleCheckout("hermes_full")}
                disabled={loadingKey === "hermes_full"}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-paper text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors disabled:opacity-50"
              >
                {loadingKey === "hermes_full" ? "Loading…" : "Pay & secure your spot →"}
              </button>
              <Link to="/assessment" className="block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/85 hover:text-paper underline">Or book the AI Adoption Call first</Link>
            </div>
          </article>
        </div>
        <p className="text-paper/60 text-sm mt-6 max-w-2xl">Both include a 30-minute discovery call before any commitment. No pitch deck. One honest conversation about whether this makes sense for you.</p>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution="Răzvan Vâlceanu · Founder, The Unlearning School · Former GM Bitdefender Romania · 1,400+ professionals trained">
          The difference between people who use AI well and those who fall behind is not intelligence. It is knowing which tool solves which problem. Most people are using the wrong tool.
        </Blockquote>
      </Section>

      {/* FAQ */}
      <Section variant="darker">
        <div id="faq" className="scroll-mt-20" />
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-red mb-4">
          FAQ · Frequently asked questions
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-6 max-w-4xl">
          Everything you'd ask <em className="text-red">before enrolling.</em>
        </h2>
        <p className="text-paper/70 text-base md:text-lg max-w-3xl">
          {faqs.length} questions covering pricing, guarantees, technical setup, ownership, and fit.
          Click any question to expand the answer.
        </p>

        <FAQAccordion items={faqs} grouped />
      </Section>

      <CTASection
        title="One agent. Built around your workflows."
        subtitle="Pay and secure your spot, or book the free 30-minute audit first if you want to talk it through."
        ctaText="Buy Hermes · from €497 →"
        ctaTo="#pricing"
        secondaryText="AI Adoption Call"
        secondaryTo="/assessment"
        note="No pitch deck · hello@unlearning.ro"
      />
    </>
  );
};

export default Hermes;
