import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { Kicker, SectionHeading } from "@/components/Editorial";

interface EntryItem { tag: string; desc: string; }
interface FormatItem { name: string; desc: string; }

const Resources = () => {
  const { t, i18n } = useTranslation("resources");
  useEffect(() => { document.title = t("documentTitle"); }, [t]);

  const entryPaths = t("entry.items", { returnObjects: true }) as EntryItem[];
  const contentTypes = t("formats.items", { returnObjects: true }) as FormatItem[];
  const topics = t("topics.items", { returnObjects: true }) as string[];
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
          kicker={t("entry.kicker")}
          title={<>{t("entry.titleStart")} <em className="text-red">{t("entry.titleEm")}</em></>}
        />
        <div className="grid md:grid-cols-2 gap-px bg-paper/10">
          {entryPaths.map((s) => (
            <article key={s.tag} className="bg-background p-8 md:p-10 border-2 border-paper/15">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("entry.ifLabel")} {s.tag}</p>
              <p className="text-paper/80 text-[15px] leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Kicker> {t("formats.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              {t("formats.titleStart")} <em className="text-red">{t("formats.titleEm")}</em>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-ink/10">
          {contentTypes.map((f, i) => (
            <article key={f.name} className="bg-paper p-8 border-2 border-ink/10">
              <span className="font-display text-5xl text-red leading-none">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl text-ink mt-4 mb-2">{f.name}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading kicker={t("topics.kicker")} title={<>{t("topics.titleStart")} <em className="text-red">{t("topics.titleEm")}</em></>} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10">
          {topics.map((tp) => (
            <div key={tp} className="bg-background border-2 border-paper/15 p-6 hover:border-red transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-2"> {t("topics.topicLabel")}</p>
              <p className="font-display text-lg text-paper leading-tight">{tp}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="paper" bordered={false}>
        <div className="max-w-3xl mx-auto text-center">
          <Kicker> {t("newsletter.kicker")}</Kicker>
          <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-6">
            {t("newsletter.titleStart")} <em className="text-red">{t("newsletter.titleEm")}</em>
          </h2>
          <p className="text-ink/75 text-[15px] leading-relaxed mb-8">
            {t("newsletter.body")}
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2 mb-10 border-t-2 border-ink/15">
            {newsletterBullets.map((b, i) => (
              <li key={b} className="flex gap-4 py-3 border-b border-ink/15 text-ink text-[15px]">
                <span className="font-mono text-red">0{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@unlearning.ro?subject=Subscribe%20to%20The%20Unlearning%20Pill"
            className="inline-flex items-center px-7 py-4 bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-red transition-colors"
          >
            {t("newsletter.button")}
          </a>
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
