import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import { Link } from "@/components/LocalizedLink";

const TermsAndConditions = () => {
  const { t } = useTranslation("legal");
  useEffect(() => {
    document.title = t("terms.docTitle");
  }, [t]);

  const s4Items = t("terms.sections.s4.items", { returnObjects: true }) as string[];
  // s7 has a Privacy Policy link in the middle; render it manually.
  // All other sections render as plain {h, body}.
  const plainKeys = ["s1", "s2", "s3", "s5", "s6", "s8", "s9", "s10"] as const;

  return (
    <>
      <SEO title={t("terms.seoTitle")} description={t("terms.seoDescription")} noindex />
      <section className="bg-background text-paper border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("tag")}</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-4">{t("terms.title")}</h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">{t("lastUpdated")}</p>
        </div>
      </section>
      <section className="bg-paper text-ink">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-10">
          {/* s1, s2, s3 */}
          {(["s1", "s2", "s3"] as const).map((k) => (
            <div key={k}>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t(`terms.sections.${k}.h`)}</h2>
              <p className="text-ink/75 text-[15px] leading-relaxed">{t(`terms.sections.${k}.body`)}</p>
            </div>
          ))}
          {/* s4 - bullet list */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("terms.sections.s4.h")}</h2>
            <ul className="text-ink/75 text-[15px] leading-relaxed space-y-2 list-disc pl-6">
              {s4Items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          {/* s5, s6 */}
          {(["s5", "s6"] as const).map((k) => (
            <div key={k}>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t(`terms.sections.${k}.h`)}</h2>
              <p className="text-ink/75 text-[15px] leading-relaxed">{t(`terms.sections.${k}.body`)}</p>
            </div>
          ))}
          {/* s7 - privacy policy link inline */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("terms.sections.s7.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">
              {t("terms.sections.s7.bodyPre")}
              <Link to="/privacy-policy" className="text-red hover:underline">
                {t("terms.sections.s7.linkText")}
              </Link>
              {t("terms.sections.s7.bodyPost")}
            </p>
          </div>
          {/* s8, s9, s10 */}
          {(["s8", "s9", "s10"] as const).map((k) => (
            <div key={k}>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t(`terms.sections.${k}.h`)}</h2>
              <p className="text-ink/75 text-[15px] leading-relaxed">{t(`terms.sections.${k}.body`)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
