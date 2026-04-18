import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import { Link } from "@/components/LocalizedLink";

type DefItem = { label: string; body: string };

const PrivacyPolicy = () => {
  const { t } = useTranslation("legal");
  useEffect(() => {
    document.title = t("privacy.docTitle");
  }, [t]);

  const s1Items = t("privacy.sections.s1.items", { returnObjects: true }) as DefItem[];
  const s2Items = t("privacy.sections.s2.items", { returnObjects: true }) as string[];
  const s3Items = t("privacy.sections.s3.items", { returnObjects: true }) as string[];
  const s4Items = t("privacy.sections.s4.items", { returnObjects: true }) as string[];
  const s6Items = t("privacy.sections.s6.items", { returnObjects: true }) as string[];
  const s9Items = t("privacy.sections.s9.items", { returnObjects: true }) as string[];
  const s10Items = t("privacy.sections.s10.items", { returnObjects: true }) as string[];

  const renderListSection = (
    key: string,
    items: string[],
    opts: { intro?: boolean; outro?: boolean } = { intro: true }
  ) => (
    <div>
      <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t(`privacy.sections.${key}.h`)}</h2>
      <div className="text-ink/75 text-[15px] leading-relaxed">
        {opts.intro && <p className="mb-3">{t(`privacy.sections.${key}.intro`)}</p>}
        <ul className="space-y-2 list-disc pl-6">
          {items.map((i) => <li key={i}>{i}</li>)}
        </ul>
        {opts.outro && <p className="mt-4">{t(`privacy.sections.${key}.outro`)}</p>}
      </div>
    </div>
  );

  return (
    <>
      <SEO title={t("privacy.seoTitle")} description={t("privacy.seoDescription")} noindex />
      <section className="bg-background text-paper border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("tag")}</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-4">{t("privacy.title")}</h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">{t("lastUpdated")}</p>
        </div>
      </section>
      <section className="bg-paper text-ink">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-10">
          <p className="text-ink/75 text-[15px] leading-relaxed italic">{t("privacy.intro")}</p>

          {/* s1 - Definitions (label + body list) */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s1.h")}</h2>
            <ul className="text-ink/75 text-[15px] leading-relaxed space-y-2 list-disc pl-6">
              {s1Items.map((i) => <li key={i.label}><strong className="text-ink">{i.label}</strong>{i.body}</li>)}
            </ul>
          </div>

          {renderListSection("s2", s2Items)}
          {renderListSection("s3", s3Items, { intro: true, outro: true })}
          {renderListSection("s4", s4Items, { intro: true, outro: true })}

          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s5.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("privacy.sections.s5.body")}</p>
          </div>

          {renderListSection("s6", s6Items)}

          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s7.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("privacy.sections.s7.body")}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s8.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">
              {t("privacy.sections.s8.body")}<br />
              <strong className="text-ink">{t("privacy.sections.s8.email")}</strong>
            </p>
          </div>

          {renderListSection("s9", s9Items, { intro: true, outro: true })}
          {renderListSection("s10", s10Items, { intro: true, outro: true })}

          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s11.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("privacy.sections.s11.body")}</p>
            <p className="text-ink/60 text-[13px] mt-3">
              <Link to="/cookie-policy" className="text-red hover:underline">{t("privacy.sections.s10.h")}</Link>
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s12.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">
              {t("privacy.sections.s12.intro")}<br />
              <strong className="text-ink">{t("privacy.sections.s12.name")}</strong><br />
              {t("privacy.sections.s12.address")}<br />
              {t("privacy.sections.s12.phone")}<br />
              {t("privacy.sections.s12.email")}
            </p>
            <p className="text-ink/60 text-[13px] mt-4">{t("privacy.sections.s12.outro")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
