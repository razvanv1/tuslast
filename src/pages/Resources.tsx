import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { SectionHeading } from "@/components/Editorial";
import { Link } from "@/components/LocalizedLink";

interface EventItem {
  date: string;
  name: string;
  context: string;
  linkLabel: string;
  url: string;
}

interface CheapAiItem {
  name: string;
  what: string;
  url: string;
}

interface CheapAiGroup {
  title: string;
  blurb: string;
  items: CheapAiItem[];
}

const Resources = () => {
  const { t, i18n } = useTranslation("resources");
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const playbookBullets = t("playbook.bullets", { returnObjects: true }) as string[];
  const events = t("events.items", { returnObjects: true }) as EventItem[];
  const cheapAiGroups = t("cheapAi.groups", { returnObjects: true }) as CheapAiGroup[];

  const playbookHref = i18n.language?.startsWith("ro")
    ? "/resources/ai-literacy-playbook-ro.html"
    : "/resources/ai-literacy-playbook.html";

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "The Unlearning School - Resources",
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
        ctaTo={playbookHref}
        secondaryText={t("hero.secondaryText")}
        secondaryTo="/assessment"
      />

      <AIScoreCTA />

      <Section variant="paper" bordered={false}>
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("playbook.tag")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-5">
              {t("playbook.titleStart")} <em className="text-red">{t("playbook.titleEm")}</em>
            </h2>
            <p className="text-ink/75 text-[15px] leading-relaxed mb-6 max-w-lg">
              {t("playbook.body")}
            </p>
            <ul className="text-ink/75 text-sm space-y-2 mb-8 border-t border-ink/15 pt-5">
              {playbookBullets.map((b, i) => (
                <li key={i} className={i < playbookBullets.length - 1 ? "border-b border-ink/15 pb-2" : "pb-2"}>→ {b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={playbookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors"
              >
                {t("playbook.button")}
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 mt-5">
              {t("playbook.footnote")}
            </p>
          </div>

          <div className="md:col-span-7 flex justify-center md:justify-end">
            <a
              href={playbookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block bg-background p-3 pb-16 card-shadow w-[280px] sm:w-[340px] md:w-[400px] max-w-full transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden bg-section-darker relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red/20 via-transparent to-paper/10" aria-hidden />
                <div className="relative z-10 p-6 flex flex-col h-full text-paper">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-red">
                    <span className="w-1.5 h-1.5 bg-red rounded-full" />
                    {t("playbook.card.kicker")}
                  </div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-paper/50 mt-1">{t("playbook.card.edition")}</p>
                  <div className="mt-auto">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-paper/40 mb-3">{t("playbook.card.playbookNum")}</p>
                    <h3 className="font-display text-3xl md:text-4xl leading-[0.95] text-paper">
                      {t("playbook.card.titleStart")} <em className="text-red">{t("playbook.card.titleEm")}</em>
                    </h3>
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-paper/50 mt-4">
                      {t("playbook.card.audience")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-3 right-3 bg-paper text-ink px-3 py-3 text-center border-t border-ink/10">
                <p className="font-display text-ink text-base md:text-lg leading-tight">{t("playbook.card.ribbonTitle")}</p>
                <p className="inline-block bg-ink px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-red mt-1">{t("playbook.card.ribbonBadge")}</p>
              </div>
            </a>
          </div>
        </div>
      </Section>

      {/* Events */}
      <Section variant="paper">
        <SectionHeading
          kicker={t("events.kicker")}
          title={<>{t("events.titleStart")} <em className="text-red">{t("events.titleEm")}</em></>}
        />
        <p className="text-ink/70 text-[15px] max-w-2xl mb-10 -mt-4">{t("events.subtitle")}</p>

        {events.length === 0 ? (
          <div className="border-2 border-ink/15 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-ink/70 text-[15px] max-w-xl">{t("events.emptyState")}</p>
            <Link
              to="/assessment"
              className="inline-flex items-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors whitespace-nowrap"
            >
              {t("events.emptyCta")}
            </Link>
          </div>
        ) : (
          <ul className="border-t-2 border-ink/15">
            {events.map((ev, i) => (
              <li
                key={i}
                className="grid md:grid-cols-12 gap-4 md:gap-6 py-7 border-b-2 border-ink/15 group"
              >
                <div className="md:col-span-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-red">{ev.date}</p>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-[28px] text-ink leading-[1.1] mb-2">{ev.name}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">{ev.context}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <a
                    href={ev.url}
                    target={ev.url.startsWith("http") ? "_blank" : undefined}
                    rel={ev.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.25em] text-ink hover:text-red transition-colors"
                  >
                    {ev.linkLabel}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* Free opportunities & bonus credits */}
      <Section variant="paper">
        <SectionHeading
          kicker={t("cheapAi.kicker")}
          title={<>{t("cheapAi.titleStart")} <em className="text-red">{t("cheapAi.titleEm")}</em></>}
        />
        <p className="text-ink/70 text-[15px] max-w-2xl mb-12 -mt-4">{t("cheapAi.subtitle")}</p>

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {cheapAiGroups.map((group, gi) => (
            <div key={gi} className="bg-paper p-7 md:p-8">
              <h3 className="font-display text-2xl md:text-[26px] text-ink leading-[1.1] mb-2">{group.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-6">{group.blurb}</p>
              <ul className="space-y-4 border-t border-ink/15 pt-5">
                {group.items.map((item, ii) => (
                  <li key={ii} className="border-b border-ink/10 pb-4 last:border-0 last:pb-0">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <span className="font-display text-lg text-ink group-hover:text-red transition-colors leading-tight">
                          {item.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40 group-hover:text-red transition-colors shrink-0">→</span>
                      </div>
                      <p className="text-ink/70 text-sm leading-relaxed">{item.what}</p>
                    </a>
                  </li>
                ))}
              </ul>
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
