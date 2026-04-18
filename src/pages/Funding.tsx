import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerFunding from "@/assets/banner-funding.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { Kicker, NumberedStep, SectionHeading } from "@/components/Editorial";

interface Instrument { title: string; audience: string; body: string; tag: string; }
interface Step { title: string; body: string; }

const Funding = () => {
  const { t } = useTranslation("funding");
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const instruments = t("instruments.items", { returnObjects: true }) as Instrument[];
  const steps = t("process.steps", { returnObjects: true }) as Step[];
  const introParagraphs = t("intro.paragraphs", { returnObjects: true }) as string[];
  const resultParagraphs = t("result.paragraphs", { returnObjects: true }) as string[];

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
          description: "Microsoft MDF, AWS partner co-sell, and EU digital grant structuring for AI adoption work.",
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
        secondaryTo="/programmes"
        note={t("hero.note")}
      />

      <Section>
        <SectionHeading
          kicker={t("intro.kicker")}
          title={<>{t("intro.titleStart")} <em className="text-red">{t("intro.titleEm")}</em></>}
          intro={t("intro.intro")}
        />
        <div className="space-y-5 text-paper/80 text-[15px] leading-relaxed max-w-3xl mt-6">
          {introParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          <p className="font-display italic text-xl md:text-2xl text-paper">
            {t("intro.italicStart")} <span className="text-red">{t("intro.italicEm")}</span>
          </p>
        </div>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("instruments.kicker")}</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          {t("instruments.titleStart")} <em className="text-red">{t("instruments.titleEm")}</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {instruments.map((i) => (
            <article key={i.title} className="bg-paper p-8 md:p-10 flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-3">{i.audience}</p>
              <h3 className="font-display text-2xl text-ink leading-tight mb-4">{i.title}</h3>
              <p className="text-ink/70 text-[15px] leading-relaxed flex-1 mb-5">{i.body}</p>
              <div className="border-t border-ink/15 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">{i.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

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
      </Section>

      <Section variant="paper" bordered={false}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> {t("result.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              {t("result.titleStart")} <em className="text-red">{t("result.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-ink/80 text-[15px] leading-relaxed">
            {resultParagraphs.map((p, i) => <p key={i}>{p}</p>)}
            <p className="font-display italic text-xl text-ink">
              {t("result.italicStart")} <span className="text-red">{t("result.italicEm")}</span>
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

export default Funding;
