import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Blockquote from "@/components/Blockquote";
import CTASection from "@/components/CTASection";
import AIScoreCTA from "@/components/AIScoreCTA";
import Affiliations from "@/components/Affiliations";
import { Kicker, NumberedStep, SectionHeading, Sidebar, TwoColumnGrid } from "@/components/Editorial";
import razvanPhoto from "@/assets/razvan-valceanu.jpg";

type Step = { title: string; body: string };
type TrackItem = { tag: string; title: string; body: string };

const About = () => {
  const { t } = useTranslation("about");
  useEffect(() => {
    document.title = t("docTitle");
  }, [t]);

  const steps = t("mechanism.steps", { returnObjects: true }) as Step[];
  const beforeItems = t("redesign.before.items", { returnObjects: true }) as string[];
  const afterItems = t("redesign.after.items", { returnObjects: true }) as string[];
  const trackItems = t("track.items", { returnObjects: true }) as TrackItem[];

  return (
    <>
      <SEO
        title={t("seo.title")}
        description={t("seo.description")}
        keywords={t("seo.keywords")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "The Unlearning School",
          founder: { "@type": "Person", name: "Răzvan Vâlceanu" },
          description: t("seo.description"),
          areaServed: ["RO", "EU"],
          url: "https://tuslast.lovable.app/about",
        }}
      />
      <PageHero
        tag={t("hero.tag")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        ctaText={t("hero.cta")}
        ctaTo="/assessment"
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Sidebar byline={t("founding.byline")} read={t("founding.read")} filed={t("founding.filed")} />
          <div className="md:col-span-9">
            <SectionHeading
              kicker={t("founding.kicker")}
              title={<>{t("founding.titlePre")}<em className="text-red">{t("founding.titleEm")}</em></>}
            />
            <TwoColumnGrid>
              <p>{t("founding.p1")}</p>
              <p>{t("founding.p2")}</p>
            </TwoColumnGrid>
          </div>
        </div>
      </Section>

      <Section bordered={false}>
        <Blockquote attribution={t("blockquote.attribution")}>
          {t("blockquote.body")}
        </Blockquote>
      </Section>

      <Section>
        <SectionHeading
          kicker={t("mechanism.kicker")}
          title={<>{t("mechanism.titlePre")}<em className="text-red">{t("mechanism.titleEm")}</em></>}
          intro={t("mechanism.intro")}
        />
        {steps.map((s, i) => (
          <NumberedStep key={s.title} num={i + 1} title={s.title}>
            {s.body}
          </NumberedStep>
        ))}
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("redesign.tag")}</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-6 max-w-3xl">
          {t("redesign.title")}
        </h2>
        <p className="text-ink/75 text-[15px] leading-relaxed max-w-2xl mb-10">
          {t("redesign.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          <article className="bg-paper p-8 md:p-10">
            <Kicker variant="muted">{t("redesign.before.tag")}</Kicker>
            <h3 className="font-display text-2xl text-ink mb-5">{t("redesign.before.title")}</h3>
            <ul className="space-y-2 text-ink/75 text-[15px]">
              {beforeItems.map((item) => (
                <li key={item} className="border-b border-ink/10 pb-2">{item}</li>
              ))}
              <li className="pt-2 font-display italic text-ink">{t("redesign.before.time")}</li>
            </ul>
          </article>
          <article className="bg-red text-paper p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80 mb-3">{t("redesign.after.tag")}</p>
            <h3 className="font-display text-2xl mb-5">{t("redesign.after.title")}</h3>
            <ul className="space-y-2 text-paper/90 text-[15px]">
              {afterItems.map((item) => (
                <li key={item} className="border-b border-paper/20 pb-2">{item}</li>
              ))}
              <li className="pt-2 font-display italic text-paper">{t("redesign.after.time")}</li>
            </ul>
          </article>
        </div>

        <p className="text-ink/75 text-[15px] leading-relaxed max-w-3xl mt-8">
          {t("redesign.outroPre")}<span className="text-red font-medium">{t("redesign.outroEm")}</span>
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="relative max-w-[280px]">
              <div className="overflow-hidden border-2 border-paper/20 bg-paper">
                <img src={razvanPhoto} alt="Răzvan Vâlceanu" loading="lazy" width={600} height={800} className="w-full aspect-[3/4] object-cover object-top" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-red text-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em]">
                {t("founder.label")}
              </div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95] mt-6">
              {t("founder.namePre")}<em className="text-red">{t("founder.nameEm")}</em>
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-paper/80 text-[15px] leading-relaxed">
            <p><strong className="text-paper">Răzvan Vâlceanu</strong> {t("founder.p1Pre")}</p>
            <p>{t("founder.p2Pre")}<strong className="text-paper">Bitdefender</strong>{t("founder.p2Mid")}<strong className="text-paper">University of Life Sciences Timisoara</strong>{t("founder.p2End")}</p>
            <p>{t("founder.p3Pre")}<span className="text-red">{t("founder.p3Em")}</span></p>
            <a
              href="https://www.linkedin.com/in/razvanvalceanu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-red hover:border-red transition-colors"
            >
              {t("founder.linkedin")}
            </a>
          </div>
        </div>
      </Section>

      <Section variant="paper">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">{t("track.tag")}</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95] mb-12 max-w-3xl">
          {t("track.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
          {trackItems.map((c) => (
            <article key={c.tag} className="bg-paper p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-4">{c.tag}</p>
              <h3 className="font-display text-2xl text-ink leading-tight mb-3">{c.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Affiliations variant="dark" />

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

export default About;
