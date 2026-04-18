import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

type CookieType = { h: string; body: string };

const CookiePolicy = () => {
  const { t } = useTranslation("legal");
  useEffect(() => {
    document.title = t("cookies.docTitle");
  }, [t]);

  const cookieTypes = t("cookies.s2.items", { returnObjects: true }) as CookieType[];

  return (
    <>
      <SEO title={t("cookies.seoTitle")} description={t("cookies.seoDescription")} noindex />
      <section className="bg-background text-paper border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("tag")}</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-4">{t("cookies.title")}</h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">{t("lastUpdated")}</p>
        </div>
      </section>
      <section className="bg-paper text-ink">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s1.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s1.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s2.h")}</h2>
            <div className="space-y-4">
              {cookieTypes.map((c) => (
                <div key={c.h} className="border-2 border-ink/15 p-6">
                  <h3 className="font-display text-xl text-ink mb-2">{c.h}</h3>
                  <p className="text-ink/75 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s3.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s3.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s4.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s4.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s5.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s5.body")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s6.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s6.body")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
