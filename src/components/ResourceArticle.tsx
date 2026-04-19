import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import { Kicker } from "@/components/Editorial";
import { Link } from "@/components/LocalizedLink";

interface ArticleSection { heading: string; body: string; }

interface ResourceArticleProps {
  /** key under resources.articles, e.g. "euAiActArticle4" */
  articleKey: string;
  /** EN-canonical path of this article (used for canonical URL) */
  canonicalPath: string;
}

/**
 * Shared editorial template for stub resource articles.
 * Each article supplies only its i18n payload — layout & chrome live here.
 */
const ResourceArticle = ({ articleKey, canonicalPath }: ResourceArticleProps) => {
  const { t, i18n } = useTranslation("resources");
  const base = `articles.${articleKey}`;

  useEffect(() => {
    document.title = t(`${base}.docTitle`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleKey, i18n.language]);

  const sectionsRaw = t(`${base}.sections`, { returnObjects: true, defaultValue: [] });
  const sections: ArticleSection[] = Array.isArray(sectionsRaw) ? (sectionsRaw as ArticleSection[]) : [];
  const takeaway = t(`${base}.takeaway`);
  const tag = t(`${base}.tag`);
  const readTime = t(`${base}.readTime`);

  return (
    <>
      <SEO
        title={t(`${base}.seo.title`)}
        description={t(`${base}.seo.description`)}
        keywords={t(`${base}.seo.keywords`)}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: t(`${base}.seo.title`),
          description: t(`${base}.seo.description`),
          author: { "@type": "Person", name: "Răzvan Vâlceanu" },
          publisher: { "@type": "Organization", name: "The Unlearning School" },
          inLanguage: i18n.language?.startsWith("ro") ? "ro" : "en",
          mainEntityOfPage: `https://tuslast.lovable.app${canonicalPath}`,
        }}
      />
      <PageHero
        tag={tag}
        title={t(`${base}.hero.title`)}
        subtitle={t(`${base}.hero.subtitle`)}
        ctaText={t("article.ctaText")}
        ctaTo="/assessment"
        secondaryText={t("article.backToResources")}
        secondaryTo="/resources"
        note={`${readTime} · ${t("article.fileLabel")}`}
      />

      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <aside className="md:col-span-3 md:sticky md:top-24 md:self-start space-y-6">
            <div>
              <Kicker variant="muted">{t("article.filedUnder")}</Kicker>
              <p className="font-mono text-paper/80 text-sm uppercase tracking-wider">{tag}</p>
            </div>
            <div>
              <Kicker variant="muted">{t("article.readTime")}</Kicker>
              <p className="font-mono text-paper/80 text-sm">{readTime}</p>
            </div>
          </aside>

          <article className="md:col-span-9 space-y-8">
            <p className="font-display italic text-2xl md:text-3xl text-paper/85 leading-snug">
              {t(`${base}.lead`)}
            </p>

            {sections.map((s, i) => (
              <div key={i} className="border-t border-paper/15 pt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">
                  {String(i + 1).padStart(2, "0")} · {t("article.sectionLabel")}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-paper leading-tight mb-4">
                  {s.heading}
                </h2>
                <p className="text-paper/80 text-[15px] md:text-base leading-relaxed whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            ))}

            <div className="border-t-2 border-red pt-6 mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("article.takeawayLabel")}</p>
              <p className="font-display text-2xl md:text-3xl text-paper leading-tight">
                {takeaway}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              <Link
                to="/assessment"
                className="inline-flex items-center px-6 py-3.5 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
              >
                {t("article.ctaText")} →
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center px-6 py-3.5 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
              >
                ← {t("article.backToResources")}
              </Link>
            </div>
          </article>
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

export default ResourceArticle;
