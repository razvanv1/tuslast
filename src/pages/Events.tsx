import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerEvents from "@/assets/banner-events.webp";
import partnerLovable from "@/assets/partner-lovable.png";
import partnerHermes from "@/assets/partner-hermes.png";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import { Link } from "@/components/LocalizedLink";
import { Kicker, SectionHeading } from "@/components/Editorial";

interface FormatItem { num: string; title: string; meta: string; body: string; outcome: string; }
interface InsideStep { time: string; title: string; body: string; }
interface Perk { num: string; title: string; body: string; }

const Events = () => {
  const { t } = useTranslation("events");
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const formats = t("formats.items", { returnObjects: true }) as FormatItem[];
  const included = t("included.items", { returnObjects: true }) as string[];
  const insideSteps = t("inside.steps", { returnObjects: true }) as InsideStep[];
  const faqItems = t("faq.items", { returnObjects: true }) as FAQItem[];
  const perks = t("partners.perks", { returnObjects: true }) as Perk[];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Live AI prototyping, keynote, workshop and hackathon facilitation",
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
        secondaryTo="#inside"
        note={t("hero.note")}
      />

      <Section decor="center-burst">
        <div id="partners" className="scroll-mt-20" />
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("partners.kicker")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95] max-w-3xl mx-auto">
            {t("partners.titleStart")} <em className="text-red">{t("partners.titleEm")}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15 border border-paper/15 mb-12">
          <div className="bg-paper p-10 md:p-12 flex flex-col items-center justify-center text-center">
            <img src={partnerLovable} alt="Lovable" width={240} height={60} loading="eager" className="h-10 md:h-12 w-auto object-contain mb-5" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70 max-w-xs">{t("partners.lovable.role")}</p>
          </div>
          <div className="bg-paper p-10 md:p-12 flex flex-col items-center justify-center text-center">
            <img src={partnerHermes} alt="Hermes Agent" width={240} height={60} loading="eager" className="h-10 md:h-12 w-auto object-contain mb-5" />
            <Link to="/hermes" className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70 hover:text-red max-w-xs">
              {t("partners.hermes.role")}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
          {perks.map((p) => (
            <div key={p.num} className="bg-background p-6 md:p-8 border border-paper/10">
              <span className="font-display text-4xl text-red leading-none">{p.num}</span>
              <h3 className="font-display text-xl text-paper leading-tight mt-4 mb-2">{p.title}</h3>
              <p className="text-paper/70 text-[14px] leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <p className="font-display italic text-lg md:text-xl text-paper/75 leading-snug max-w-3xl mx-auto text-center mt-10">
          {t("partners.subline")}
        </p>
      </Section>

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

      <Section variant="paper" className="scroll-mt-20" >
        <div id="inside" className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker>{t("inside.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-6">
              {t("inside.titleStart")} <em className="text-red">{t("inside.titleEm")}</em>
            </h2>
            <p className="text-ink/70 text-[15px] leading-relaxed">{t("inside.intro")}</p>
          </div>
          <div className="md:col-span-8">
            <ol className="border-t border-ink/15">
              {insideSteps.map((step) => (
                <li key={step.time} className="grid grid-cols-12 gap-4 py-6 border-b border-ink/15">
                  <div className="col-span-12 md:col-span-2">
                    <span className="font-mono text-sm tabular-nums text-red">{step.time}</span>
                  </div>
                  <div className="col-span-12 md:col-span-10">
                    <h3 className="font-display text-2xl text-ink leading-tight mb-2">{step.title}</h3>
                    <p className="text-ink/70 text-[15px] leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
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
              <p className="text-ink/70 text-[15px] leading-relaxed mb-5">{f.body}</p>
              <p className="mt-auto pt-4 border-t border-ink/15 font-mono text-[11px] uppercase tracking-[0.15em] text-red leading-relaxed">
                {f.outcome}
              </p>
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

      <Section>
        <SectionHeading
          kicker={t("faq.kicker")}
          title={<>{t("faq.titleStart")} <em className="text-red">{t("faq.titleEm")}</em></>}
        />
        <FAQAccordion items={faqItems} />
      </Section>

      <Section bordered={false}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("funding.kicker")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-4">
              {t("funding.titleStart")} <em className="text-red">{t("funding.titleEm")}</em>
            </h2>
            <p className="text-paper/75 text-[15px] leading-relaxed max-w-2xl">{t("funding.body")}</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/funding"
              className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("funding.cta")}
            </Link>
          </div>
        </div>
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
