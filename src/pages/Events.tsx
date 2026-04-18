import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerEvents from "@/assets/banner-events.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { Kicker, SectionHeading } from "@/components/Editorial";

interface FormatItem { num: string; title: string; meta: string; body: string; }

const Events = () => {
  const { t } = useTranslation("events");
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const formats = t("formats.items", { returnObjects: true }) as FormatItem[];
  const included = t("included.items", { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "AI keynote, workshop and hackathon facilitation",
          provider: { "@type": "Organization", name: "The Unlearning School" },
          areaServed: ["RO", "EU"],
        }}
      />
      <PageHero
        tag={t("hero.tag")}
        banner={bannerEvents}
        bannerAlt={t("hero.bannerAlt")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.ctaText")}
        ctaTo="/assessment"
        secondaryText={t("hero.secondaryText")}
        secondaryTo="/programmes"
        note={t("hero.note")}
      />

      <Section>
        <SectionHeading
          kicker={t("intro.kicker")}
          title={<>{t("intro.titleStart")} <em className="text-red">{t("intro.titleEm")}</em></>}
          intro={t("intro.intro")}
        />
        <p className="font-display italic text-xl md:text-2xl text-paper/80 leading-snug max-w-3xl mt-6">
          {t("intro.pullQuoteStart")} <span className="text-red not-italic">{t("intro.pullQuoteEm")}</span> {t("intro.pullQuoteEnd")}
        </p>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("formats.kicker")}</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          {t("formats.titleStart")} <em className="text-red">{t("formats.titleEm")}</em> {t("formats.titleEnd")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {formats.map((f) => (
            <article key={f.num} className="bg-paper p-8 md:p-10 flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-6xl text-red leading-none">{f.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 text-right">{f.meta}</span>
              </div>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{f.title}</h3>
              <p className="text-ink/70 text-[15px] leading-relaxed">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> {t("included.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              {t("included.titleStart")} <em className="text-red">{t("included.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-3 border-t border-paper/15">
              {included.map((it, i) => (
                <li key={it} className="flex gap-4 py-3 border-b border-paper/15 text-paper text-[15px]">
                  <span className="font-mono text-red tabular-nums">0{i + 1}</span>
                  <span className="text-paper/85">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Kicker> {t("pricing.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              {t("pricing.titleStart")} <em className="text-red">{t("pricing.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-ink/80 text-[16px] leading-relaxed mb-5">
              {t("pricing.body")}
            </p>
            <p className="font-display italic text-lg text-ink/70">
              {t("pricing.italic")}
            </p>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution={t("quote.attribution")}>
          {t("quote.body")}
        </Blockquote>
      </Section>

      <AIScoreCTA />

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

export default Events;
