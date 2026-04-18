import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

type ListItem = { label: string; body: string };

const PrivacyPolicy = () => {
  const { t } = useTranslation("legal");
  useEffect(() => {
    document.title = t("privacy.docTitle");
  }, [t]);

  const s3Items = t("privacy.sections.s3.items", { returnObjects: true }) as string[];
  const s4Items = t("privacy.sections.s4.items", { returnObjects: true }) as string[];
  const s5Items = t("privacy.sections.s5.items", { returnObjects: true }) as ListItem[];
  const s8Items = t("privacy.sections.s8.items", { returnObjects: true }) as string[];

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
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s1.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("privacy.sections.s1.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s2.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">
              {t("privacy.sections.s2.controllerLabel")}<br />
              <strong className="text-ink">{t("privacy.sections.s2.name")}</strong><br />
              {t("privacy.sections.s2.address")}<br />
              {t("privacy.sections.s2.email")}<br />
              {t("privacy.sections.s2.phone")}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s3.h")}</h2>
            <ul className="text-ink/75 text-[15px] leading-relaxed space-y-2 list-disc pl-6">
              {s3Items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s4.h")}</h2>
            <ul className="text-ink/75 text-[15px] leading-relaxed space-y-2 list-disc pl-6">
              {s4Items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s5.h")}</h2>
            <ul className="text-ink/75 text-[15px] leading-relaxed space-y-2 list-disc pl-6">
              {s5Items.map((i) => <li key={i.label}><strong>{i.label}</strong>{i.body}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s6.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("privacy.sections.s6.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s7.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("privacy.sections.s7.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s8.h")}</h2>
            <div className="text-ink/75 text-[15px] leading-relaxed">
              <p className="mb-3">{t("privacy.sections.s8.intro")}</p>
              <ul className="space-y-2 list-disc pl-6">
                {s8Items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <p className="mt-4">{t("privacy.sections.s8.outro")}</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s9.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">
              {t("privacy.sections.s9.bodyPre")}<a href="/cookie-policy" className="text-red hover:underline">{t("privacy.sections.s9.linkText")}</a>{t("privacy.sections.s9.bodyPost")}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("privacy.sections.s10.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">
              {t("privacy.sections.s10.intro")}<br />
              {t("privacy.sections.s10.email")}<br />
              {t("privacy.sections.s10.phone")}<br />
              {t("privacy.sections.s10.outro")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
