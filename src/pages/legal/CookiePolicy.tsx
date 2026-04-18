import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

type ServiceItem = { h: string; type: string; body: string };
type TypeItem = { h: string; body: string };

const CookiePolicy = () => {
  const { t } = useTranslation("legal");
  useEffect(() => {
    document.title = t("cookies.docTitle");
  }, [t]);

  const cookieTypes = t("cookies.s5items", { returnObjects: true }) as TypeItem[];
  const services = t("cookies.s6items", { returnObjects: true }) as ServiceItem[];
  const rights = t("cookies.s9items", { returnObjects: true }) as string[];

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
          {/* Intro paragraph */}
          <p className="text-ink/75 text-[15px] leading-relaxed italic border-l-2 border-red pl-5">
            {t("cookies.intro")}
          </p>

          {/* s1 — s4 plain sections */}
          {(["s1", "s2", "s3", "s4"] as const).map((k) => (
            <div key={k}>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t(`cookies.${k}.h`)}</h2>
              <p className="text-ink/75 text-[15px] leading-relaxed">{t(`cookies.${k}.body`)}</p>
            </div>
          ))}

          {/* s5 — types of cookies */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s5h")}</h2>
            <div className="space-y-4">
              {cookieTypes.map((c) => (
                <div key={c.h} className="border-2 border-ink/15 p-6">
                  <h3 className="font-display text-xl text-ink mb-2">{c.h}</h3>
                  <p className="text-ink/75 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* s6 — services placed */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s6h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed mb-5">{t("cookies.s6intro")}</p>
            <div className="space-y-4">
              {services.map((s) => (
                <div key={s.h} className="border-2 border-ink/15 p-6">
                  <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                    <h3 className="font-display text-xl text-ink">{s.h}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-red">{s.type}</p>
                  </div>
                  <p className="text-ink/75 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* s7 — consent */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s7.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s7.body")}</p>
          </div>

          {/* s8 — managing cookies */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s8.h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s8.body")}</p>
          </div>

          {/* s9 — GDPR rights */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s9h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed mb-4">{t("cookies.s9intro")}</p>
            <ul className="text-ink/75 text-[15px] leading-relaxed space-y-2 list-disc pl-6 mb-4">
              {rights.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <p className="text-ink/75 text-[15px] leading-relaxed">{t("cookies.s9outro")}</p>
          </div>

          {/* s10 — contact */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{t("cookies.s10h")}</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed mb-4">{t("cookies.s10intro")}</p>
            <div className="border-2 border-ink/15 p-6 space-y-1 text-[15px] text-ink/85">
              <p className="font-display text-lg text-ink mb-2">{t("cookies.s10company")}</p>
              <p>{t("cookies.s10address")}</p>
              <p>{t("cookies.s10website")}</p>
              <p>{t("cookies.s10email")}</p>
              <p>{t("cookies.s10phone")}</p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50 mt-6">
              {t("cookies.s10sync")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
