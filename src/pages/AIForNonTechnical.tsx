import { useEffect, useState } from "react";
import { Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import bannerAi from "@/assets/ai-for-non-technical-hero.webp";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import { Kicker, SectionHeading, TwoColumnGrid } from "@/components/Editorial";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const tools = [
  "Google AI Studio",
  "ChatGPT",
  "Claude",
  "Google Gemini",
  "Hermes Agent",
  "Lovable",
  "Manus",
  "Microsoft Copilot",
  "Google NotebookLM",
  "Perplexity",
];

const tierProductKeys = ["ai_small_team", "ai_standard", null] as const;
const tierFeatured = [false, true, false];

type ChallengeItem = { tag: string; body: string };
type AudienceItem = { tag: string; items: string[] };
type EntryItem = { name: string; meta: string; body: string };
type SessionItem = {
  title: string;
  body: string;
  topics: string[];
  practice: { h: string; body: string }[];
  useCases: string[];
  outcome: string;
};
type FaqItem = { question: string; answer: string };
type TierItem = {
  tag: string;
  cohort: string;
  price: string;
  perPerson: string;
  bestForItems: string[];
};
type CommercialItem = { h: string; body: string };
type NextItem = { num: string; h: string; body: string };

const AIForNonTechnical = () => {
  const { t, i18n } = useTranslation("programmes");
  const { toast } = useToast();
  const [loadingKey, setLoadingKey] = useState<string | null>(null);

  useEffect(() => {
    document.title = t("seo.docTitle");
  }, [t, i18n.language]);

  const challenges = t("challenges.items", { returnObjects: true }) as ChallengeItem[];
  const audience = t("audience.items", { returnObjects: true }) as AudienceItem[];
  const entries = t("entry.items", { returnObjects: true }) as EntryItem[];
  const sessionsRaw = t("sessions", { returnObjects: true }) as SessionItem[];
  const deliverables = t("deliverables.items", { returnObjects: true }) as string[];
  const includedItems = t("included.items", { returnObjects: true }) as string[];
  const tiersData = t("pricing.tiers", { returnObjects: true }) as TierItem[];
  const commercials = t("commercial.items", { returnObjects: true }) as CommercialItem[];
  const successItems = t("success.items", { returnObjects: true }) as string[];
  const focusItems = t("leadership.focusItems", { returnObjects: true }) as string[];
  const credentialsItems = t("leadership.credentialsItems", { returnObjects: true }) as string[];
  const nextSteps = t("next.items", { returnObjects: true }) as NextItem[];
  const faqList = t("faqList", { returnObjects: true }) as FaqItem[];

  const sessions = sessionsRaw.map((s, i) => ({
    num: String(i + 1).padStart(2, "0"),
    title: s.title,
    body: s.body,
    topics: s.topics,
    practice: s.practice,
    useCases: s.useCases,
    outcome: s.outcome,
  }));

  const curriculumLabels = {
    moduleKicker: (num: string) => t("curriculumLabels.moduleKicker", { num }),
    module: (num: string) => t("curriculumLabels.module", { num }),
    topics: t("curriculumLabels.topics"),
    practice: t("curriculumLabels.practice"),
    useCases: t("curriculumLabels.useCases"),
  };

  const handleCheckout = async (productKey: string) => {
    setLoadingKey(productKey);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { product: productKey },
      });
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (err: any) {
      toast({
        title: t("pricing.checkoutErrorTitle"),
        description: err.message ?? t("pricing.checkoutErrorBody"),
        variant: "destructive",
      });
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
          "@type": "Course",
          name: t("seo.courseName"),
          description: t("seo.courseDescription"),
          provider: { "@type": "Organization", name: "The Unlearning School", url: "https://tuslast.lovable.app/" },
          inLanguage: ["en", "ro"],
          educationalLevel: "Professional",
          teaches: ["AI workflow design", "Prompting", "EU AI Act Article 4 literacy", "Responsible AI use"],
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: ["Onsite", "Online"],
            courseWorkload: "PT2H/PT4D",
          },
          offers: [
            { "@type": "Offer", name: "Small Team (up to 5)", price: "3000", priceCurrency: "EUR" },
            { "@type": "Offer", name: "Standard (up to 10)", price: "5000", priceCurrency: "EUR" },
          ],
        }}
        faq={faqList}
      />
      <PageHero
        tag={t("hero.tag")}
        banner={bannerAi}
        bannerAlt={t("hero.bannerAlt")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.ctaText")}
        ctaTo="#pricing"
        secondaryText={t("hero.secondaryText")}
        secondaryTo="tel:+40722598346"
      />

      <Section>
        <SectionHeading
          kicker={t("challenges.kicker")}
          title={<>{t("challenges.title1")}<em className="text-red">{t("challenges.titleEm")}</em></>}
          intro={t("challenges.intro")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/10 mt-8">
          {challenges.map((c) => (
            <article key={c.tag} className="bg-background p-6 md:p-8 border border-paper/10">
              <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{c.tag}</span></p>
              <p className="text-paper/80 text-[15px] leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>

        <p className="text-paper/70 text-[15px] mt-8 leading-relaxed">
          {t("challenges.footer1")}<span className="text-red">{t("challenges.footerEm")}</span>
        </p>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution={t("objective.attribution")}>
          {t("objective.body")}
        </Blockquote>
      </Section>

      <Section variant="paper">
        <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] bg-red text-paper px-3 py-1.5">{t("audience.kicker")}</span></p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          {t("audience.title1")}<em>{t("audience.titleEm")}</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {audience.map((a) => (
            <article key={a.tag} className="bg-paper p-8 md:p-10">
              <p className="mb-4"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{a.tag}</span></p>
              <ul className="space-y-2 text-ink/80 text-[15px]">
                {a.items.map((it) => (
                  <li key={it} className="flex gap-3 border-b border-ink/10 pb-2 last:border-0">
                    <span className="text-red">→</span><span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="text-ink/70 text-[15px] mt-6 italic font-display">{t("audience.footer")}</p>
      </Section>

      <Section>
        <SectionHeading
          kicker={t("entry.kicker")}
          title={<>{t("entry.title1")}<em className="text-red">{t("entry.titleEm")}</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {entries.map((e) => (
            <article key={e.name} className="bg-background p-8 md:p-10 border border-paper/10">
              <p className="mb-2"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{e.meta}</span></p>
              <h3 className="font-display text-2xl text-paper mb-3">{e.name}</h3>
              <p className="text-paper/75 text-[15px] leading-relaxed">{e.body}</p>
            </article>
          ))}
        </div>
        <p className="text-paper/65 text-[15px] mt-6 italic font-display">{t("entry.footer")}</p>
      </Section>

      <Section variant="darker">
        <SectionHeading
          kicker={t("structure.kicker")}
          title={<>{t("structure.title1")}<em className="text-red">{t("structure.titleEm")}</em></>}
          intro={t("structure.intro")}
        />
        <CurriculumAccordion sessions={sessions} labels={curriculumLabels} />
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> {t("deliverables.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              {t("deliverables.title1")}<em className="text-red">{t("deliverables.titleEm")}</em>
            </h2>
            <p className="text-paper/70 text-[15px] mt-5 leading-relaxed">{t("deliverables.intro")}</p>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-3 border-t border-paper/15">
              {deliverables.map((d, i) => (
                <li key={d} className="flex gap-4 py-3 border-b border-paper/15 text-paper text-[15px]">
                  <span className="font-mono text-red tabular-nums">0{i + 1}</span>
                  <span className="text-paper/85">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Kicker> {t("included.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-5">
              {t("included.title1")}<em className="text-red">{t("included.titleEm")}</em>
            </h2>
            <div className="bg-red text-paper p-6 mt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/80 mb-3"> {t("included.auditTag")}</p>
              <h3 className="font-display text-2xl mb-3">{t("included.auditTitle")}</h3>
              <p className="text-paper/90 text-[14px] leading-relaxed">{t("included.auditBody")}</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-2 border-t-2 border-ink/15">
              {includedItems.map((it) => (
                <li key={it} className="flex gap-3 py-3 border-b border-ink/15 text-ink/85 text-[15px]">
                  <span className="text-red">→</span><span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section>
        <div id="pricing" className="scroll-mt-20">
          <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] bg-red text-paper px-3 py-1.5">{t("pricing.kicker")}</span></p>
          <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-4 max-w-3xl">
            {t("pricing.title1")}<em className="text-red">{t("pricing.titleEm")}</em>
          </h2>
          <p className="font-display italic text-lg md:text-xl text-paper/70 mb-12 max-w-2xl">
            {t("pricing.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiersData.map((tier, idx) => {
              const productKey = tierProductKeys[idx];
              const featured = tierFeatured[idx];
              const isCustomPrice = !productKey;
              return (
                <article
                  key={tier.tag}
                  className={`relative border-2 p-8 md:p-10 ${featured ? "border-red bg-red text-paper" : "border-paper/20 bg-background text-paper"}`}
                >
                  {featured && (
                    <span className="absolute -top-3 left-8 bg-paper text-ink font-mono text-[10px] uppercase tracking-[0.25em] px-3 py-1">{t("pricing.mostPopular")}</span>
                  )}
                  <p className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-2 ${featured ? "text-paper/80" : "text-paper/50"}`}> {tier.tag}</p>
                  <p className={`font-mono text-[11px] uppercase tracking-[0.2em] mb-4 ${featured ? "text-paper/80" : "text-paper/60"}`}>{tier.cohort}</p>
                  <p className="font-display text-6xl mb-1 leading-none">
                    {isCustomPrice ? (
                      <span>{t("pricing.customLabel")}</span>
                    ) : (
                      <>
                        {tier.price}<span className="font-mono text-base align-top opacity-70"> EUR</span>
                      </>
                    )}
                  </p>
                  <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-6 ${featured ? "text-paper/80" : "text-paper/50"}`}>{tier.perPerson}</p>

                  <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-3 ${featured ? "text-paper/80" : "text-paper/60"}`}>{t("pricing.bestFor")}</p>
                  <ul className={`space-y-2 text-sm border-t ${featured ? "border-paper/30" : "border-paper/15"} pt-4 mb-6`}>
                    {tier.bestForItems.map((b) => (
                      <li key={b} className={`border-b pb-2 ${featured ? "border-paper/20 text-paper/95" : "border-paper/10 text-paper/80"}`}>→ {b}</li>
                    ))}
                  </ul>

                  <p className={`text-xs mb-6 ${featured ? "text-paper/85" : "text-paper/65"}`}>
                    {t("pricing.includes")}
                  </p>

                  {productKey ? (
                    <div className="space-y-3">
                      <button
                        onClick={() => handleCheckout(productKey)}
                        disabled={loadingKey === productKey}
                        className={`w-full inline-flex items-center justify-center px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors disabled:opacity-50 ${
                          featured
                            ? "bg-paper text-ink hover:bg-ink hover:text-paper"
                            : "bg-red text-paper hover:bg-paper hover:text-ink"
                        }`}
                      >
                        {loadingKey === productKey ? t("pricing.loading") : t("pricing.payCta")}
                      </button>
                      <Link
                        to="/assessment"
                        className={`block text-center font-mono text-[10px] uppercase tracking-[0.2em] hover:underline ${featured ? "text-paper/90" : "text-paper/60"}`}
                      >
                        {t("pricing.altCta")}
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to="/assessment"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                    >
                      {t("pricing.callCta")}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-10 border-l-4 border-red pl-5 max-w-3xl">
            <p className="mb-2"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{t("pricing.confidence.tag")}</span></p>
            <p className="text-paper/85 text-[15px] leading-relaxed">
              {t("pricing.confidence.body")}
            </p>
          </div>
        </div>
      </Section>

      {/* Self-test teaser */}
      <Section variant="darker" decor="edge-right">
        <AIScoreCTA variant="inline" eyebrow={t("selfTestEyebrow")} />
      </Section>

      {/* Commercial terms */}
      <Section variant="paper">
        <SectionHeading
          kicker={t("commercial.kicker")}
          title={<>{t("commercial.title1")}<em className="text-red">{t("commercial.titleEm")}</em></>}
        />
        <div className="grid md:grid-cols-3 gap-px bg-ink/10 mt-8">
          {commercials.map((c) => (
            <article key={c.h} className="bg-paper p-8">
              <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{c.h}</span></p>
              <p className="text-ink/80 text-[15px] leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          kicker={t("why.kicker")}
          title={<>{t("why.title1")}<em className="text-red">{t("why.titleEm")}</em></>}
          intro={t("why.intro")}
        />
        <p className="font-display italic text-xl md:text-2xl text-paper/80 leading-snug max-w-3xl mt-6">
          {t("why.footer1")}<span className="text-red not-italic">{t("why.footerEm")}</span>
        </p>
      </Section>

      <Section variant="paper">
        <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] bg-red text-paper px-3 py-1.5">{t("success.kicker")}</span></p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-10 max-w-3xl">
          {t("success.title1")}<em className="text-red">{t("success.titleEm")}</em>
        </h2>
        <ul className="space-y-2 border-t-2 border-ink/15 max-w-3xl">
          {successItems.map((it) => (
            <li key={it} className="flex gap-3 py-3 border-b border-ink/15 text-ink/85 text-[15px]">
              <span className="text-red">→</span><span>{it}</span>
            </li>
          ))}
        </ul>
        <p className="text-ink/70 text-[15px] mt-6 italic font-display max-w-3xl">{t("success.footer")}</p>
      </Section>

      {/* Leadership */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Kicker> {t("leadership.kicker")}</Kicker>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95]">
              {t("leadership.name1")}<em className="text-red">{t("leadership.nameEm")}</em>
            </h2>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50 mt-3">{t("leadership.role")}</p>
          </div>
          <div className="md:col-span-8 space-y-4 text-paper/80 text-[15px] leading-relaxed">
            <p>{t("leadership.bio1")}</p>
            <p>{t("leadership.bio2")}</p>
            <TwoColumnGrid>
              <div>
                <p className="mb-2"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{t("leadership.focusTag")}</span></p>
                <ul className="space-y-1 text-paper/85">
                  {focusItems.map((f) => (
                    <li key={f}>→ {f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{t("leadership.credentialsTag")}</span></p>
                <ul className="space-y-1 text-paper/85">
                  {credentialsItems.map((c) => (
                    <li key={c}>→ {c}</li>
                  ))}
                </ul>
              </div>
            </TwoColumnGrid>
            <div className="pt-4 border-t border-paper/15">
              <p className="mb-3"><span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] bg-red text-paper px-3 py-1.5">{t("leadership.toolsTag")}</span></p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/80 border border-paper/25 px-2 py-1">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What happens next */}
      <Section variant="paper">
        <SectionHeading
          kicker={t("next.kicker")}
          title={<>{t("next.title1")}<em className="text-red">{t("next.titleEm")}</em></>}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 mt-8">
          {nextSteps.map((s) => (
            <article key={s.num} className="bg-paper p-8 md:p-10">
              <span className="font-display text-6xl text-red leading-none">{s.num}</span>
              <h3 className="font-display text-2xl text-ink leading-tight mt-4 mb-3">{s.h}</h3>
              <p className="text-ink/75 text-[14px] leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section bordered={false}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("fundingBridge.kicker")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-paper leading-[1.05] mb-4">
              {t("fundingBridge.titleStart")} <em className="text-red">{t("fundingBridge.titleEm")}</em>
            </h2>
            <p className="text-paper/75 text-[15px] leading-relaxed max-w-2xl">{t("fundingBridge.body")}</p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/funding"
              className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("fundingBridge.cta")}
            </Link>
          </div>
        </div>
      </Section>

      <CTASection
        title={t("cta.title")}
        subtitle={t("cta.subtitle")}
        ctaText={t("cta.primary")}
        ctaTo="#pricing"
        secondaryText={t("cta.secondary")}
        secondaryTo="/assessment"
        note={t("cta.note")}
      />
    </>
  );
};

export default AIForNonTechnical;
