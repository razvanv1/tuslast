import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { Kicker, SectionHeading } from "@/components/Editorial";
import { Link } from "@/components/LocalizedLink";

interface LibraryItem {
  kicker: string;
  title: string;
  excerpt: string;
  readTime: number;
  to: string;
}

const Resources = () => {
  const { t, i18n } = useTranslation("resources");
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const libraryItems = t("library.items", { returnObjects: true }) as LibraryItem[];
  const newsletterBullets = t("newsletter.bullets", { returnObjects: true }) as string[];
  const playbookBullets = t("playbook.bullets", { returnObjects: true }) as string[];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "The Unlearning Pill - Resources",
          description: t("seo.description"),
          inLanguage: i18n.language?.startsWith("ro") ? "ro" : "en",
          isPartOf: { "@type": "WebSite", name: "The Unlearning School", url: "https://tuslast.lovable.app/" },
        }}
      />
      <PageHero
        tag={t("hero.tag")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.ctaText")}
        ctaTo="mailto:hello@unlearning.ro?subject=Subscribe%20to%20The%20Unlearning%20Pill"
        secondaryText={t("hero.secondaryText")}
        secondaryTo="/assessment"
      />

      <AIScoreCTA />

      <Section bordered={false}>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("playbook.tag")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95] mb-5">
              {t("playbook.titleStart")} <em className="text-red">{t("playbook.titleEm")}</em>
            </h2>
            <p className="text-paper/75 text-[15px] leading-relaxed mb-6 max-w-lg">
              {t("playbook.body")}
            </p>
            <ul className="text-paper/70 text-sm space-y-2 mb-8 border-t border-paper/15 pt-5">
              {playbookBullets.map((b, i) => (
                <li key={i} className={i < playbookBullets.length - 1 ? "border-b border-paper/15 pb-2" : "pb-2"}>→ {b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={i18n.language?.startsWith("ro") ? "/resources/ai-literacy-playbook-ro.html" : "/resources/ai-literacy-playbook.html"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
              >
                {t("playbook.button")}
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-5">
              {t("playbook.footnote")}
            </p>
          </div>

          <div className="md:col-span-7 flex justify-center md:justify-end">
            <a
              href={i18n.language?.startsWith("ro") ? "/resources/ai-literacy-playbook-ro.html" : "/resources/ai-literacy-playbook.html"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-paper p-3 pb-16 card-shadow w-[280px] sm:w-[340px] md:w-[400px] max-w-full transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden bg-paper-dim relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red/10 via-transparent to-ink/20" aria-hidden />
                <div className="relative z-10 p-6 flex flex-col h-full text-ink">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-red">
                    <span className="w-1.5 h-1.5 bg-red rounded-full" />
                    {t("playbook.card.kicker")}
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/50 mt-1">{t("playbook.card.edition")}</p>
                  <div className="mt-auto">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/40 mb-3">{t("playbook.card.playbookNum")}</p>
                    <h3 className="font-display text-3xl md:text-4xl leading-[0.95] text-ink">
                      {t("playbook.card.titleStart")} <em className="text-red">{t("playbook.card.titleEm")}</em>
                    </h3>
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink/50 mt-4">
                      {t("playbook.card.audience")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-3 right-3 bg-ink text-paper px-3 py-3 text-center">
                <p className="font-display text-paper text-base md:text-lg leading-tight">{t("playbook.card.ribbonTitle")}</p>
                <p className="inline-block bg-paper px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-red mt-1">{t("playbook.card.ribbonBadge")}</p>
              </div>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker={t("library.kicker")}
          title={<>{t("library.titleStart")} <em className="text-red">{t("library.titleEm")}</em></>}
        />
        <p className="text-paper/70 text-[15px] max-w-2xl mb-10 -mt-4">{t("library.subtitle")}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10">
          {libraryItems.map((item) => (
            <div
              key={item.to}
              aria-disabled="true"
              className="bg-background border-2 border-paper/15 p-7 md:p-8 flex flex-col opacity-60 cursor-not-allowed"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{item.kicker}</p>
              <h3 className="font-display text-2xl md:text-[26px] text-paper leading-[1.1] mb-3">
                {item.title}
              </h3>
              <p className="text-paper/70 text-sm leading-relaxed mb-6">{item.excerpt}</p>
              <div className="mt-auto pt-4 border-t border-paper/15 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
                <span>{item.readTime} {t("library.readTime")}</span>
                <span className="text-paper/40">{i18n.language?.startsWith("ro") ? "În curând" : "Coming soon"}</span>
              </div>
            </div>
          ))}
        </div>
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

export default Resources;
