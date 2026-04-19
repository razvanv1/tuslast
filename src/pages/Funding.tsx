import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerFunding from "@/assets/banner-funding.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { Link } from "@/components/LocalizedLink";
import { Kicker, NumberedStep, SectionHeading } from "@/components/Editorial";

interface Instrument { title: string; audience: string; body: string; coverage: string[]; tag: string; }
interface Step { title: string; body: string; }
interface BridgeStep { num: string; label: string; title: string; body: string; linkText?: string; linkTo?: string; }
interface NamedItem { name: string; what: string; }
interface NamedGroup { title: string; items: NamedItem[]; }
interface EngineItem { title: string; body: string; }
interface ModelPoint { label: string; body: string; }

const Funding = () => {
  const { t } = useTranslation("funding");
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const instruments = t("instruments.items", { returnObjects: true }) as Instrument[];
  const steps = t("process.steps", { returnObjects: true }) as Step[];
  const objectionParagraphs = t("objection.paragraphs", { returnObjects: true }) as string[];
  const modelParagraphs = t("model.paragraphs", { returnObjects: true }) as string[];
  const modelPoints = t("model.points", { returnObjects: true }) as ModelPoint[];
  const bridgeSteps = t("bridge.steps", { returnObjects: true }) as BridgeStep[];
  const faqItems = t("faq.items", { returnObjects: true }) as FAQItem[];
  const programmesVendor = t("programmes.vendor", { returnObjects: true }) as NamedGroup;
  const programmesEu = t("programmes.eu", { returnObjects: true }) as NamedGroup;
  const engineItems = t("engine.items", { returnObjects: true }) as EngineItem[];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Funding structuring for AI adoption programmes",
          provider: { "@type": "Organization", name: "The Unlearning School" },
          areaServed: ["RO", "EU"],
          description: "Microsoft MDF, AWS partner co-sell, Google Cloud partner funds, and EU digital grant structuring for AI adoption work.",
        }}
      />
      <PageHero
        tag={t("hero.tag")}
        banner={bannerFunding}
        bannerAlt={t("hero.bannerAlt")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.ctaText")}
        ctaTo="/assessment"
        secondaryText={t("hero.secondaryText")}
        secondaryTo="#instruments"
        note={t("hero.note")}
      />

      {/* Bridge: Training → Gap → Funding */}
      <Section>
        <SectionHeading
          kicker={t("bridge.kicker")}
          title={<>{t("bridge.titleStart")} <em className="text-red">{t("bridge.titleEm")}</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10 mt-8">
          {bridgeSteps.map((s, idx) => {
            const isGap = idx === 1;
            return (
              <article key={s.num} className="bg-background p-8 md:p-10 flex flex-col">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className={`font-display text-5xl leading-none ${isGap ? "text-paper/40" : "text-red"}`}>{s.num}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60">{s.label}</span>
                </div>
                <h3 className="font-display text-2xl text-paper leading-tight mb-4">{s.title}</h3>
                <p className="text-paper/70 text-[15px] leading-relaxed flex-1">{s.body}</p>
                {s.linkText && s.linkTo && (
                  <div className="border-t border-paper/15 pt-4 mt-5">
                    <Link
                      to={s.linkTo}
                      className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/80 hover:text-red transition-colors"
                    >
                      {s.linkText}
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* EU AI Act Article 4 callout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border border-paper/15 border-l-2 border-l-red bg-paper/[0.03] p-7 md:p-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red leading-relaxed">
              {t("legal.label")}
            </p>
          </div>
          <div className="md:col-span-9 space-y-4">
            <p className="text-paper text-[15px] md:text-base leading-relaxed">
              {t("legal.body")}
            </p>
            <Link
              to={t("legal.linkTo")}
              className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-red hover:text-paper transition-colors"
            >
              {t("legal.linkText")}
            </Link>
          </div>
        </div>
      </Section>

      {/* Objection */}
      <Section>
        <SectionHeading
          kicker={t("objection.kicker")}
          title={<>{t("objection.titleStart")} <em className="text-red">{t("objection.titleEm")}</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-2">
          <div className="md:col-span-7 space-y-5 text-paper/80 text-[15px] leading-relaxed">
            {objectionParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <aside className="md:col-span-5">
            <p className="font-display italic text-xl md:text-2xl text-paper leading-snug border-l-2 border-red pl-6 py-2">
              {t("objection.highlight")}
            </p>
          </aside>
        </div>
      </Section>

      {/* Instruments */}
      <Section variant="paper" className="scroll-mt-20">
        <div id="instruments" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-12">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("instruments.kicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              {t("instruments.titleStart")} <em className="text-red">{t("instruments.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ink/70 text-[15px] leading-relaxed">{t("instruments.intro")}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          {instruments.map((i) => (
            <article key={i.title} className="bg-paper p-8 md:p-10 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red">{i.audience}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 bg-ink/5 px-2 py-1">{i.tag}</span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight mb-4">{i.title}</h3>
              <p className="text-ink/70 text-[15px] leading-relaxed mb-6">{i.body}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60 mb-3">Covers</p>
              <ul className="space-y-2 mb-6 flex-1">
                {i.coverage.map((c, ci) => (
                  <li key={ci} className="flex gap-3 text-[14px] text-ink/80 border-b border-ink/10 pb-2">
                    <span className="font-mono text-red text-[12px] flex-shrink-0">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/assessment"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-ink text-paper hover:bg-red font-mono text-[11px] uppercase tracking-[0.2em] px-5 py-3 transition-colors w-full"
              >
                {t("instruments.cardCta")}
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Named programmes */}
      <Section>
        <SectionHeading
          kicker={t("programmes.kicker")}
          title={<>{t("programmes.titleStart")} <em className="text-red">{t("programmes.titleEm")}</em></>}
          intro={t("programmes.intro")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10 mt-8">
          {[programmesVendor, programmesEu].map((group, gi) => (
            <div key={gi} className="bg-background p-7 md:p-9 flex flex-col">
              <h3 className="font-display text-2xl text-paper leading-tight mb-5 pb-4 border-b border-paper/15">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((it, ii) => (
                  <li key={ii} className="border-b border-paper/10 pb-4 last:border-0 last:pb-0">
                    <p className="font-display text-lg text-paper leading-tight mb-1">{it.name}</p>
                    <p className="text-paper/70 text-sm leading-relaxed">{it.what}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/40 mt-6">
          {t("programmes.footnote")}
        </p>
      </Section>

      {/* How we work — 5 steps + Result */}
      <Section>
        <SectionHeading
          kicker={t("process.kicker")}
          title={<>{t("process.titleStart")} <em className="text-red">{t("process.titleEm")}</em></>}
        />
        {steps.map((s, idx) => (
          <NumberedStep key={idx} num={idx + 1} title={s.title}>
            {s.body}
          </NumberedStep>
        ))}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border border-paper/15 border-t-2 border-t-red bg-paper/[0.04] p-7 md:p-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-red">
              {t("process.result.label")}
            </p>
          </div>
          <div className="md:col-span-9">
            <p className="text-paper text-[16px] md:text-[17px] leading-relaxed">
              {t("process.result.body")}
            </p>
          </div>
        </div>
      </Section>

      {/* Our model */}
      <Section variant="paper" bordered={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("model.kicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-6">
              {t("model.titleStart")} <em className="text-red">{t("model.titleEm")}</em>
            </h2>
            <div className="space-y-4 text-ink/80 text-[15px] leading-relaxed">
              {modelParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="md:pt-2">
            <div className="border-t border-ink/15">
              {modelPoints.map((pt, i) => (
                <div key={i} className="py-6 border-b border-ink/15">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2">{pt.label}</p>
                  <p className="text-ink/80 text-[15px] leading-relaxed">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Engine — operational layer */}
      <Section>
        <SectionHeading
          kicker={t("engine.kicker")}
          title={<>{t("engine.titleStart")} <em className="text-red">{t("engine.titleEm")}</em></>}
          intro={t("engine.intro")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10 mt-8">
          {engineItems.map((it, i) => (
            <article key={i} className="bg-background p-7 md:p-8 flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl text-paper leading-tight mb-3">{it.title}</h3>
              <p className="text-paper/70 text-[14px] leading-relaxed">{it.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="darker">
        <SectionHeading
          kicker={t("faq.kicker")}
          title={<>{t("faq.titleStart")} <em className="text-red">{t("faq.titleEm")}</em></>}
        />
        <FAQAccordion items={faqItems} />
      </Section>

      {/* Events bridge */}
      <Section bordered={false}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("eventsBridge.kicker")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-4">
              {t("eventsBridge.titleStart")} <em className="text-red">{t("eventsBridge.titleEm")}</em>
            </h2>
            <p className="text-paper/75 text-[15px] leading-relaxed max-w-2xl">{t("eventsBridge.body")}</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/events"
              className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("eventsBridge.cta")}
            </Link>
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section bordered={false}>
        <Blockquote attribution={t("quote.attribution")}>
          {t("quote.body")}
        </Blockquote>
      </Section>

      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaText={t("cta.ctaText")}
        ctaTo="/assessment"
        note={t("cta.note")}
      />
    </>
  );
};

export default Funding;
