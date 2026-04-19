import { useEffect } from "react";
import { Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import ShuffleDeck from "@/components/ShuffleDeck";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import AIScoreStrip from "@/components/AIScoreStrip";
import Affiliations from "@/components/Affiliations";
import ScrollReveal from "@/components/ScrollReveal";


import FounderBio from "@/components/FounderBio";
import Testimonials from "@/components/Testimonials";
import partnerLovable from "@/assets/partner-lovable.png";
import partnerHermes from "@/assets/partner-hermes.png";
import { trackEvent } from "@/lib/analytics";

const Index = () => {
  const { t } = useTranslation("home");

  const stats = [
    { value: t("stats.s1.value"), label: t("stats.s1.label") },
    { value: t("stats.s2.value"), label: t("stats.s2.label") },
    { value: t("stats.s3.value"), label: t("stats.s3.label") },
  ];

  const patternRows = t("pattern.rows", { returnObjects: true }) as Array<{ week: string; text: string }>;
  const audience = t("audience.items", { returnObjects: true }) as Array<{ role: string; situation: string; result: string }>;
  const ladderItems = t("ladder.items", { returnObjects: true }) as Array<{ tag: string; title: string; body: string; cta: string }>;
  const ladderHrefs = [
    "/programmes/ai-for-non-technical-people",
    "/events",
    "/funding",
  ];
  const credibility = t("credibility.items", { returnObjects: true }) as Array<{ tag: string; title: string; body: string }>;
  const faq = t("faq", { returnObjects: true }) as Array<{ question: string; answer: string }>;

  useEffect(() => {
    document.title = t("meta.title");
  }, [t]);

  return (
    <>
      <SEO
        title={t("meta.title")}
        description={t("meta.description")}
        keywords={t("meta.keywords")}
        faq={faq}
      />
      {/* HERO */}
      <section className="relative bg-background border-b-2 border-paper/10 overflow-x-clip">
        <div className="bg-halftone">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-8 md:pt-10">
            <div className="relative z-10 mb-6 md:mb-8 max-w-4xl">
              <h1 className="font-display text-2xl md:text-[34px] lg:text-[40px] leading-[1.15] text-paper/85 tracking-tight">
                {t("hero.headlinePart1")}{" "}
                <em className="text-red not-italic font-normal">{t("hero.headlineEm")}</em>
              </h1>
            </div>

            <ShuffleDeck />

            <div className="max-w-3xl mt-10 mb-16">
              <p className="font-display italic text-xl md:text-2xl text-paper/85 leading-snug mb-8">
                {t("hero.subPart1")}{" "}
                <span className="text-red not-italic">{t("hero.subEm")}</span>{" "}
                {t("hero.subPart2")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/programmes/ai-for-non-technical-people#pricing"
                  onClick={() => trackEvent("cta_buy_training", { location: "hero" })}
                  className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                >
                  {t("hero.primaryCta")}
                </Link>
                <Link
                  to="/assessment"
                  onClick={() => trackEvent("cta_book_call", { location: "hero" })}
                  className="inline-flex items-center px-7 py-4 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                >
                  {t("hero.secondaryCta")}
                </Link>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-6">
                {t("hero.note")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thin AI Score promo strip directly under hero */}
      <AIScoreStrip />

      {/* STATS strip */}
      <section className="bg-background border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((s, i) => (
            <ScrollReveal key={s.value} className={i < 2 ? "md:border-r border-paper/10 md:pr-10" : ""}>
              <p className="font-display text-6xl md:text-7xl text-red leading-none mb-3">{s.value}</p>
              <p className="text-paper/70 text-sm leading-relaxed max-w-xs">{s.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why adoption stalls */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("pattern.eyebrow")}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">{t("pattern.subEyebrow")}</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl md:text-6xl text-paper leading-[1] mb-8 max-w-3xl">
              {t("pattern.title")}
            </h2>
            <p className="text-paper/80 text-[15px] leading-relaxed max-w-2xl mb-10">
              {t("pattern.body")}
            </p>

            <div className="border-t border-paper/15">
              {patternRows.map((row) => (
                <div key={row.week} className="grid grid-cols-12 gap-4 py-5 border-b border-paper/15">
                  <div className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.2em] text-red">{row.week}</div>
                  <div className="col-span-9 md:col-span-10 text-paper/80 text-[15px] leading-relaxed">{row.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution={t("premise.attribution")}>
          {t("premise.quote")}
        </Blockquote>
      </Section>

      {/* WHO THIS IS FOR */}
      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("audience.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-12 max-w-3xl">
          {t("audience.title")} <em>{t("audience.titleEm")}</em>
        </h2>

        <div className="space-y-0 border-t border-ink/15">
          {audience.map((a, i) => (
            <ScrollReveal key={a.role}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-ink/15 group hover:bg-ink/[0.02] transition-colors">
                <div className="md:col-span-1">
                  <span className="font-display text-3xl text-red">0{i + 1}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-display text-2xl text-ink leading-tight">{a.role}</h3>
                </div>
                <div className="md:col-span-4 text-ink/70 text-[15px] leading-relaxed">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/40 mb-2">{t("audience.situationLabel")}</p>
                  {a.situation}
                </div>
                <div className="md:col-span-4 text-ink text-[15px] leading-relaxed">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-red mb-2">{t("audience.resultLabel")}</p>
                  {a.result}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mt-10 font-mono text-[11px] uppercase tracking-[0.2em]">
          <Link to="/programmes/ai-for-non-technical-people" className="text-ink hover:text-red transition-colors">{t("audience.linkProgramme")}</Link>
          <Link to="/assessment" className="text-ink hover:text-red transition-colors">{t("audience.linkAssessment")}</Link>
        </div>
      </Section>

      {/* THE PROGRAMS */}
      <Section>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("ladder.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-12 max-w-3xl">
          {t("ladder.title")} <em className="text-red">{t("ladder.titleEm")}</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {ladderItems.map((l, i) => {
            const highlight = i === 0;
            return (
              <article
                key={l.title}
                className={`p-8 md:p-10 flex flex-col ${highlight ? "bg-red text-paper" : "bg-background text-paper"}`}
              >
                <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-4 ${highlight ? "text-paper/80" : "text-red"}`}>
                  {l.tag}
                </p>
                <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4">{l.title}</h3>
                <p className={`text-[14px] leading-relaxed flex-1 mb-6 ${highlight ? "text-paper/90" : "text-paper/75"}`}>
                  {l.body}
                </p>
                <Link
                  to={ladderHrefs[i]}
                  className={`font-mono text-[10px] uppercase tracking-[0.25em] inline-flex items-center gap-2 hover:gap-3 transition-all ${highlight ? "text-paper" : "text-red"}`}
                >
                  {l.cta} →
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      {/* PRICING - 2 entry points with "what you get" tables */}
      <Section variant="darker">
        <div id="pricing" className="scroll-mt-20" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("pricing.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95]">
              {t("pricing.title")} <em className="text-red">{t("pricing.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-7 flex items-end">
            <p className="text-paper/75 text-[15px] leading-relaxed max-w-xl">{t("pricing.body")}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-paper/15 border border-paper/15">
          {(["training", "hermes"] as const).map((key) => {
            const card = t(`pricing.${key}`, { returnObjects: true }) as {
              tag: string; from: string; price: string; unit: string; title: string;
              tableHeader: { col1: string; col2: string };
              rows: Array<{ label: string; value: string }>;
              footnote: string; cta: string; secondary: string;
            };
            const primaryHref = key === "training" ? "/programmes/ai-for-non-technical-people#pricing" : "/hermes#install";
            const secondaryHref = key === "training" ? "/programmes/ai-for-non-technical-people" : "/hermes";
            const event = key === "training" ? "cta_buy_training" : "cta_install_hermes";
            return (
              <article key={key} className="bg-background p-8 md:p-10 flex flex-col">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-6">{card.tag}</p>
                <div className="mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-1">{card.from}</p>
                  <p className="font-display text-5xl md:text-6xl text-paper leading-none">{card.price}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 mt-2">{card.unit}</p>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-paper leading-tight mb-6">{card.title}</h3>

                {/* "What you get" mini-table */}
                <table className="w-full mb-6 border-t border-paper/15">
                  <thead>
                    <tr>
                      <th className="text-left font-mono text-[9px] uppercase tracking-[0.25em] text-paper/45 py-2.5 pr-3 border-b border-paper/15">{card.tableHeader.col1}</th>
                      <th className="text-left font-mono text-[9px] uppercase tracking-[0.25em] text-paper/45 py-2.5 border-b border-paper/15">{card.tableHeader.col2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.rows.map((r) => (
                      <tr key={r.label} className="border-b border-paper/10 last:border-b-0">
                        <td className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/65 py-2.5 pr-3 align-top w-[42%]">{r.label}</td>
                        <td className="text-paper text-[13px] leading-snug py-2.5 align-top">{r.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mb-6 flex-1">{card.footnote}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={primaryHref}
                    onClick={() => trackEvent(event, { location: "home_pricing" })}
                    className="inline-flex items-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
                  >
                    {card.cta}
                  </Link>
                  <Link to={secondaryHref} className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70 hover:text-red transition-colors">
                    {card.secondary}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60 mt-8">
          <Link to="/assessment" className="hover:text-red transition-colors">{t("pricing.scope")}</Link>
        </p>
      </Section>

      {/* The mechanism */}
      <Section variant="paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("mechanism.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
              {t("mechanism.title")} <em className="text-red">{t("mechanism.titleEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-ink/80 text-[16px] leading-relaxed mb-5">
              {t("mechanism.body")}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
              {t("mechanism.footnote")}
            </p>
          </div>
        </div>
      </Section>

      {/* Credibility */}
      <Section>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> {t("credibility.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-6xl text-paper leading-[0.95] mb-12 max-w-3xl">
          {t("credibility.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-paper/10">
          {credibility.map((c) => (
            <article key={c.tag} className="bg-background p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-4">{c.tag}</p>
              <h3 className="font-display text-2xl text-paper leading-tight mb-3">{c.title}</h3>
              <p className="text-paper/70 text-sm leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* NEW - Founder mini-bio */}
      <FounderBio />

      {/* NEW - Testimonials */}
      <Testimonials />

      {/* PARTNERS - external endorsement */}
      <Section variant="paper">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("partners.eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-6">
            {t("partners.title")} <em className="text-red">{t("partners.titleEm")}</em>
          </h2>
          <p className="text-ink/75 text-[15px] leading-relaxed">{t("partners.body")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10 max-w-4xl mx-auto">
          <div className="bg-paper p-10 flex flex-col items-center justify-center text-center">
            <img src={partnerLovable} alt="Lovable" width={480} height={120} loading="lazy" decoding="async" className="h-24 md:h-28 w-auto object-contain mb-6" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">{t("partners.lovableRole")}</p>
          </div>
          <div className="bg-paper p-10 flex flex-col items-center justify-center text-center">
            <img src={partnerHermes} alt="Hermes Agent" width={480} height={120} loading="lazy" decoding="async" className="h-24 md:h-28 w-auto object-contain mb-6" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">{t("partners.hermesRole")}</p>
          </div>
        </div>

        <p className="text-center mt-8">
          <Link to="/events#partners" className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70 hover:text-red transition-colors">
            {t("partners.link")}
          </Link>
        </p>
      </Section>

      <Affiliations variant="paper" />

      <AIScoreCTA />

      <CTASection
        title={t("finalCta.title")}
        subtitle={t("finalCta.subtitle")}
        ctaText={t("finalCta.cta")}
        ctaTo="/programmes/ai-for-non-technical-people#pricing"
        secondaryText={t("finalCta.secondary")}
        secondaryTo="/assessment"
        note={t("finalCta.note")}
      />
    </>
  );
};

export default Index;
