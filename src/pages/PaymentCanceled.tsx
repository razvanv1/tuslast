import { useEffect } from "react";
import { Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import Section from "@/components/Section";

const PaymentCanceled = () => {
  const { t } = useTranslation("misc");
  useEffect(() => {
    document.title = t("paymentCanceled.docTitle");
  }, [t]);

  return (
    <>
      <SEO title={t("paymentCanceled.seoTitle")} description={t("paymentCanceled.seoDescription")} />
      <Section>
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("paymentCanceled.tag")}</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-6">
            {t("paymentCanceled.titlePre")}<em className="text-red">{t("paymentCanceled.titleEm")}</em>
          </h1>
          <p className="text-paper/80 text-[16px] leading-relaxed mb-8">{t("paymentCanceled.body")}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/programmes/ai-for-non-technical-people"
              className="inline-flex items-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("paymentCanceled.ctaProgramme")}
            </Link>
            <Link
              to="/assessment"
              className="inline-flex items-center px-6 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("paymentCanceled.ctaAssessment")}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PaymentCanceled;
