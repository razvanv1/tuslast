import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerAssessment from "@/assets/banner-assessment.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import { Kicker, NumberedStep, SectionHeading, Sidebar } from "@/components/Editorial";
import AIScoreCTA from "@/components/AIScoreCTA";
import { CALENDAR_URL } from "@/lib/booking";
import { Link } from "@/components/LocalizedLink";

const Assessment = () => {
  const { t } = useTranslation("assessment");

  useEffect(() => {
    document.title = t("seo.docTitle");
  }, [t]);

  const personas = t("personas.items", { returnObjects: true }) as {
    num: string; tag: string; title: string; desc: string;
  }[];
  const receiveItems = t("receive.items", { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: t("seo.schemaName"),
          description: t("seo.schemaDescription"),
          url: "https://tuslast.lovable.app/assessment",
          provider: { "@type": "Organization", name: "The Unlearning School" },
        }}
      />
      <PageHero
        tag={t("hero.tag")}
        banner={bannerAssessment}
        bannerAlt={t("hero.bannerAlt")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.ctaText")}
        ctaTo="#book"
        note={t("hero.note")}
      />

      <Section variant="darker" decor="edge-left">
        <AIScoreCTA variant="inline" eyebrow={t("selfTest")} />
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar />
          <div className="md:col-span-9">
            <SectionHeading
              kicker={t("covers.kicker")}
              title={<>{t("covers.title1")}<em className="text-red">{t("covers.titleEm")}</em></>}
            />
            <NumberedStep num={1} title={t("covers.step1Title")}>
              {t("covers.step1Body")}
            </NumberedStep>
            <NumberedStep num={2} title={t("covers.step2Title")}>
              {t("covers.step2Body")}
            </NumberedStep>
            <NumberedStep num={3} title={t("covers.step3Title")}>
              {t("covers.step3Body")}
            </NumberedStep>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> {t("receive.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              {t("receive.title1")}<em className="text-red">{t("receive.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-ink/80 text-[15px] leading-relaxed mb-6">
              {t("receive.intro")}
            </p>
            <ul className="space-y-3 mb-8 border-t-2 border-ink/15">
              {receiveItems.map((item, i) => (
                <li key={i} className="flex gap-4 py-3 border-b border-ink/15 text-ink text-[15px]">
                  <span className="font-mono text-red">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-display italic text-xl text-ink/75 leading-snug">
              {t("receive.footer1")}<span className="text-red not-italic">{t("receive.footerEm")}</span>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker={t("personas.kicker")}
          title={<>{t("personas.title1")}<em className="text-red">{t("personas.titleEm")}</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {personas.map((p) => (
            <article key={p.num} className="bg-background p-8 md:p-10 border-2 border-paper/15">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-6xl text-red leading-none">{p.num}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">{p.tag}</span>
              </div>
              <h3 className="font-display text-2xl text-paper leading-tight mb-3">{p.title}</h3>
              <p className="text-paper/70 text-sm leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper" bordered={false}>
        <div id="book" className="scroll-mt-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("booking.kicker")}</p>
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-4 max-w-3xl">
            {t("booking.title1")}<em className="text-red">{t("booking.titleEm")}</em>
          </h2>
          <p className="font-display italic text-lg md:text-xl text-ink/65 mb-10 max-w-2xl">
            {t("booking.subtitle")}
          </p>

          <div className="border-2 border-ink/15 bg-paper p-10 md:p-14 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("booking.directKicker")}</p>
            <p className="font-display text-2xl md:text-3xl text-ink leading-snug mb-8 max-w-xl mx-auto">
              {t("booking.directBody")}
            </p>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors"
            >
              {t("booking.directButton")}
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mt-6 max-w-md mx-auto">
              {t("booking.directNote")}
            </p>
            <Link
              to="/ai-adoption-score"
              className="inline-flex items-center mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-red hover:text-ink transition-colors border-b border-red/40 hover:border-ink pb-0.5"
            >
              {t("booking.selfServeLink")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-ink/75 text-[14px]">
            <p><strong className="text-ink">{t("booking.before")}</strong>{t("booking.beforeBody")}</p>
            <p><strong className="text-ink">{t("booking.after")}</strong>{t("booking.afterBody")}</p>
          </div>

          <p className="text-sm text-ink/60 mt-8">
            {t("booking.emailLine")}
            <a
              href="mailto:hello@unlearning.ro?subject=AI%20Adoption%20Call"
              className="text-red font-medium hover:underline"
            >
              hello@unlearning.ro
            </a>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-2">
              {t("booking.emailSubject")}
            </span>
          </p>
        </div>
      </Section>

      <Section variant="darker" decor="edge-left">
        <AIScoreCTA variant="inline" eyebrow={t("preview")} />
      </Section>

      <Section bordered={false}>
        <Blockquote attribution={t("quote.attribution")}>
          {t("quote.body")}
        </Blockquote>
      </Section>
    </>
  );
};

export default Assessment;
