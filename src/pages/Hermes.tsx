import { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
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

const weeks = [
  { num: "01", h: "Foundation", items: ["Agent installed on your server", "Telegram gateway connected", "Gmail + Calendar integration", "First workflow: morning briefing", "Memory configured for your context"] },
  { num: "02", h: "Business workflows", items: ["3 custom automations built with you", "Prospect research workflow", "Scheduled reporting setup", "Competitor monitoring live", "Meeting follow-up protocol"] },
  { num: "03", h: "Tool connections", items: ["Connect to your existing stack", "Slack / Notion / CRM basics", "Content pipeline setup", "Approval flows (agent asks first)", "Security and permissions review"] },
  { num: "04", h: "Autonomous mode", items: ["Agent runs without daily input", "Exception handling rules", "Weekly digest design", "Teaching Hermes new skills live", "Handoff and documentation"] },
];

const faqs = [
  { q: "Do I need to know how to code?", a: "No. Hermes uses natural language for most configuration. The technical setup is handled with you step by step, not handed off as homework." },
  { q: "What does \"on my server\" mean?", a: "Hermes runs on a small cloud instance around €5-8/month. You keep full control. Nothing goes through third-party platforms. We set this up together in week one." },
  { q: "I already use Zapier and Make. Why this?", a: "Zapier automates fixed rules. Hermes handles ambiguous decisions. It can read a situation, decide what to do, and ask you when uncertain. Rule-based tools cannot do that." },
  { q: "Is my data secure?", a: "All data stays on your server. No tracking, no telemetry, no third-party cloud lock-in. Hermes includes command approval flows and asks before acting outside its defined scope." },
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
        tag="HERMES AGENT · INTERNAL AGENTIC SOLUTION"
        title="Stop prompting. Start delegating."
        subtitle="ChatGPT answers questions. Hermes sends the email, books the meeting, researches the prospect, monitors the market, and reports back on Telegram. While you are in a call."
        ctaText="Book a free call →"
        ctaTo="/assessment"
        secondaryText="See what it does"
        secondaryTo="#use-cases"
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
      <Section variant="paper">
        <Kicker> The coaching program</Kicker>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-12 max-w-4xl">
          4 weeks. One agent built <em className="text-red">around your workflows.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-ink/10">
          {weeks.map((w) => (
            <article key={w.num} className="bg-paper p-8 border-2 border-ink/10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> Week {w.num}</p>
              <h3 className="font-display text-2xl text-ink leading-tight mb-5">{w.h}</h3>
              <ul className="space-y-2 text-ink/75 text-sm">
                {w.items.map((i) => <li key={i} className="border-b border-ink/10 pb-2">→ {i}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10 text-ink/75 text-sm">
          <p><strong className="text-ink">Included:</strong> 4 × 90-min 1:1 sessions, recorded. Async Telegram support. Custom playbook for every workflow.</p>
          <p><strong className="text-ink">Yours after:</strong> The agent is fully yours. MIT license. No subscription. 3 months of light support after the program ends.</p>
          <p><strong className="text-ink">Maximum 4 clients/month.</strong> 1:1 program. Spots typically booked 2-3 weeks out.</p>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
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
              <a href="/assessment" className="block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 hover:text-red">Or book a discovery call</a>
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
              <a href="/assessment" className="block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/85 hover:text-paper underline">Or book a discovery call first</a>
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
      <Section variant="paper">
        <SectionHeading
          kicker="Before you apply"
          title={<>Common <em className="text-red">questions.</em></>}
        />
        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {faqs.map((f) => (
            <article key={f.q} className="bg-paper p-8 border-2 border-ink/10">
              <h3 className="font-display text-xl text-ink mb-3">{f.q}</h3>
              <p className="text-ink/75 text-sm leading-relaxed">{f.a}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTASection
        title="One agent. Built around your workflows."
        subtitle="Book the free 30-minute discovery call. No pitch deck. One honest conversation about whether this makes sense for you."
        ctaText="Book the discovery call →"
        ctaTo="/assessment"
        note="Free · hello@unlearning.ro"
      />
    </>
  );
};

export default Hermes;
