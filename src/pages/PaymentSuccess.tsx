import { useEffect } from "react";
import { Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import Section from "@/components/Section";

const PaymentSuccess = () => {
  const { t } = useTranslation("misc");
  useEffect(() => {
    document.title = t("paymentSuccess.docTitle");
  }, [t]);

  return (
    <>
      <SEO title={t("paymentSuccess.seoTitle")} description={t("paymentSuccess.seoDescription")} />
      <Section>
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{t("paymentSuccess.tag")}</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-6">
            {t("paymentSuccess.titlePre")}<em className="text-red">{t("paymentSuccess.titleEm")}</em>
          </h1>
          <p className="text-paper/80 text-[16px] leading-relaxed mb-4">{t("paymentSuccess.p1")}</p>
          <p className="text-paper/80 text-[16px] leading-relaxed mb-8">{t("paymentSuccess.p2")}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("paymentSuccess.ctaHome")}
            </Link>
            <a
              href="mailto:hello@unlearning.ro"
              className="inline-flex items-center px-6 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("paymentSuccess.ctaEmail")}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PaymentSuccess;
