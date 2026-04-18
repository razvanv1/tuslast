import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import CurriculumAccordion, { type CurriculumSession } from "@/components/CurriculumAccordion";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { Kicker, SectionHeading } from "@/components/Editorial";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Stat { v: string; l: string; }
interface TerminalLine { speaker: string; type: "user" | "agent"; text: string; }
interface Diff { num: string; h: string; body: string; }
interface UseCase { num: number; when: string; h: string; body: string; metric: string; sub: string; }
interface TechItem { h: string; body: string; }
interface FooterItem { label: string; body: string; }
interface Tier { tag: string; price: string; features: string[]; button: string; }

const Hermes = () => {
  const { t } = useTranslation("hermes");
  const { toast } = useToast();
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const stats = t("stats", { returnObjects: true }) as Stat[];
  const terminalLines = t("terminal.lines", { returnObjects: true }) as TerminalLine[];
  const whatIsParagraphs = t("whatIs.paragraphs", { returnObjects: true }) as string[];
  const differentiators = t("differentiators.items", { returnObjects: true }) as Diff[];
  const useCases = t("useCases.items", { returnObjects: true }) as UseCase[];
  const techList = t("tech.items", { returnObjects: true }) as TechItem[];
  const weeks = t("coaching.weeks", { returnObjects: true }) as CurriculumSession[];
  const coachingFooter = t("coaching.footer", { returnObjects: true }) as FooterItem[];
  const faqs = t("faq.items", { returnObjects: true }) as FAQItem[];
  const tierSelf = t("pricing.tiers.self", { returnObjects: true }) as Tier;
  const tierFull = t("pricing.tiers.full", { returnObjects: true }) as Tier;

  const handleCheckout = async (productKey: string) => {
    setLoadingKey(productKey);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", { body: { product: productKey } });
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
      else throw new Error(t("checkout.errorNoUrl"));
    } catch (err: any) {
      toast({ title: t("checkout.errorTitle"), description: err.message ?? t("checkout.errorDefault"), variant: "destructive" });
    } finally {
      setLoadingKey(null);
    }
  };

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Hermes Agent",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Linux, macOS, Windows",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          license: "https://opensource.org/licenses/MIT",
          description: t("seo.schemaDescription"),
        }}
      />
      <PageHero
        tag={t("hero.tag")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.ctaText")}
        ctaTo="#pricing"
        secondaryText={t("hero.secondaryText")}
        secondaryTo="tel:+40722598346"
        note={t("hero.note")}
      />

      <Section bordered={false}>
        <div className="max-w-3xl mx-auto bg-paper text-ink border-2 border-paper/30">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-ink/15 bg-ink/5">
            <span className="w-3 h-3 rounded-full bg-red" />
            <span className="w-3 h-3 rounded-full bg-ink/30" />
            <span className="w-3 h-3 rounded-full bg-ink/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60 ml-3">{t("terminal.title")}</span>
          </div>
          <div className="p-6 md:p-8 font-mono text-[13px] leading-relaxed text-ink/85 space-y-4">
            {terminalLines.map((line, i) => (
              <div key={i}>
                <span className={line.type === "agent" ? "text-red" : "text-ink/40"}>{line.speaker}</span>
                <br />
                <span className="whitespace-pre-line">{line.text}</span>
              </div>
            ))}
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

      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Kicker> {t("whatIs.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              {t("whatIs.titleStart")} <em className="text-red">{t("whatIs.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-paper/80 text-[15px] leading-relaxed">
            {whatIsParagraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/<em>/g, '<span class="text-red">').replace(/<\/em>/g, '</span>') }} />
            ))}
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution={t("honestQuote.attribution")}>
          {t("honestQuote.body")}
        </Blockquote>
      </Section>

      <Section>
        <SectionHeading
          kicker={t("differentiators.kicker")}
          title={<>{t("differentiators.titleStart")} <em className="text-red">{t("differentiators.titleEm")}</em></>}
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

      <Section variant="paper">
        <div id="use-cases" className="scroll-mt-20">
          <Kicker> {t("useCases.kicker")}</Kicker>
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-6 max-w-3xl">
            {t("useCases.titleStart")} <em className="text-red">{t("useCases.titleEm")}</em>
          </h2>
          <p className="font-display italic text-lg text-ink/70 mb-12 max-w-2xl">
            {t("useCases.intro")}
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

      <Section>
        <SectionHeading
          kicker={t("tech.kicker")}
          title={<>{t("tech.titleStart")} <em className="text-red">{t("tech.titleEm")}</em></>}
          intro={t("tech.intro")}
        />
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-5">
            {techList.map((it) => (
              <div key={it.h} className="border-b border-paper/15 pb-5">
                <h3 className="font-display text-xl text-paper mb-2">{it.h}</h3>
                <p className="text-paper/70 text-sm leading-relaxed">{it.body}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-5">
            <div className="bg-paper text-ink border-2 border-paper/30 p-6 font-mono text-[12px] leading-relaxed">
              <p className="text-ink/50">{t("tech.code.comment1")}</p>
              <p className="break-all mb-4">{t("tech.code.cmd1")}</p>
              <p className="text-ink/50">{t("tech.code.comment2")}</p>
              <p className="mb-1">{t("tech.code.cmd2")}</p>
              <p className="text-red mb-4">{t("tech.code.ok2")}</p>
              <p className="text-ink/50">{t("tech.code.comment3")}</p>
              <p className="mb-1">{t("tech.code.cmd3")}</p>
              <p className="text-red">{t("tech.code.ok3")}</p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mt-4"> {t("tech.code.footnote")}</p>
          </div>
        </div>
      </Section>

      <Section variant="darker">
        <Kicker> {t("coaching.kicker")}</Kicker>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-6 max-w-4xl">
          {t("coaching.titleStart")} <em className="text-red">{t("coaching.titleEm")}</em>
        </h2>
        <p className="text-paper/70 text-base md:text-lg max-w-3xl mb-2">
          {t("coaching.intro")}
        </p>

        <CurriculumAccordion
          sessions={weeks}
          labels={{
            module: (num) => t("coaching.module", { num }),
            moduleKicker: (num) => t("coaching.moduleKicker", { num }),
            topics: t("coaching.topicsLabel"),
          }}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12 text-paper/75 text-sm">
          {coachingFooter.map((f, i) => (
            <p key={i}><strong className="text-paper">{f.label}</strong> {f.body}</p>
          ))}
        </div>
      </Section>

      <Section>
        <div id="pricing" className="scroll-mt-20" />
        <Kicker> {t("pricing.kicker")}</Kicker>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-12 max-w-3xl">
          {t("pricing.titleStart")} <em className="text-red">{t("pricing.titleEm")}</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="border-2 border-paper/20 p-8 md:p-10 bg-background">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 mb-2"> {tierSelf.tag}</p>
            <p className="font-display text-6xl text-paper mb-1">{tierSelf.price}<span className="font-mono text-base align-top text-paper/60"> {t("pricing.perPerson")}</span></p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mb-6">{t("pricing.oneTime")}</p>

            <ul className="space-y-2 text-paper/80 text-sm border-t border-paper/15 pt-5 mb-8">
              {tierSelf.features.map((i) => (
                <li key={i} className="border-b border-paper/10 pb-2">→ {i}</li>
              ))}
            </ul>
            <div className="space-y-2">
              <button
                onClick={() => handleCheckout("hermes_self")}
                disabled={loadingKey === "hermes_self"}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors disabled:opacity-50"
              >
                {loadingKey === "hermes_self" ? t("pricing.loading") : tierSelf.button}
              </button>
              <Link to="/assessment" className="block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 hover:text-red">{t("pricing.altLink")}</Link>
            </div>
          </article>
          <article className="border-2 border-red bg-red text-paper p-8 md:p-10 relative">
            <span className="absolute -top-3 left-8 bg-paper text-ink font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1">{t("pricing.mostPopular")}</span>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80 mb-2"> {tierFull.tag}</p>
            <p className="font-display text-6xl text-paper mb-1">{tierFull.price}<span className="font-mono text-base align-top text-paper/80"> {t("pricing.perPerson")}</span></p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/80 mb-6">{t("pricing.oneTime")}</p>
            <ul className="space-y-2 text-paper text-sm border-t border-paper/30 pt-5 mb-8">
              {tierFull.features.map((i) => (
                <li key={i} className="border-b border-paper/20 pb-2">→ {i}</li>
              ))}
            </ul>
            <div className="space-y-2">
              <button
                onClick={() => handleCheckout("hermes_full")}
                disabled={loadingKey === "hermes_full"}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-paper text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors disabled:opacity-50"
              >
                {loadingKey === "hermes_full" ? t("pricing.loading") : tierFull.button}
              </button>
              <Link to="/assessment" className="block text-center font-mono text-[10px] uppercase tracking-[0.2em] text-paper/85 hover:text-paper underline">{t("pricing.altLinkFull")}</Link>
            </div>
          </article>
        </div>
        <p className="text-paper/60 text-sm mt-6 max-w-2xl">{t("pricing.footnote")}</p>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution={t("founderQuote.attribution")}>
          {t("founderQuote.body")}
        </Blockquote>
      </Section>

      <Section variant="darker">
        <div id="faq" className="scroll-mt-20" />
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-red mb-4">
          {t("faq.kicker")}
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-6 max-w-4xl">
          {t("faq.titleStart")} <em className="text-red">{t("faq.titleEm")}</em>
        </h2>
        <p className="text-paper/70 text-base md:text-lg max-w-3xl">
          {t("faq.intro", { count: faqs.length })}
        </p>

        <FAQAccordion items={faqs} grouped />
      </Section>

      <AIScoreCTA />

      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaText={t("cta.ctaText")}
        ctaTo="#pricing"
        secondaryText={t("cta.secondaryText")}
        secondaryTo="/assessment"
        note={t("cta.note")}
      />
    </>
  );
};

export default Hermes;
