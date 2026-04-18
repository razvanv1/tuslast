import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import ScrollReveal from "@/components/ScrollReveal";

interface AIScoreCTAProps {
  /** Visual mode. "band" = full editorial band; "inline" = compact inline card. */
  variant?: "band" | "inline";
  /** Optional eyebrow override */
  eyebrow?: string;
}

const AIScoreCTA = ({ variant = "band", eyebrow }: AIScoreCTAProps) => {
  const { t } = useTranslation();
  const eyebrowText = eyebrow ?? t("aiScoreCta.eyebrow");

  if (variant === "inline") {
    return (
      <div className="border-2 border-paper/15 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2">{eyebrowText}</p>
          <p className="font-display text-2xl md:text-3xl text-paper leading-tight">
            {t("aiScoreCta.inline.title")} <em className="text-red">{t("aiScoreCta.inline.titleEm")}</em>
          </p>
          <p className="text-paper/70 text-sm mt-2 max-w-xl">
            {t("aiScoreCta.inline.body")}
          </p>
        </div>
        <Link
          to="/ai-adoption-score"
          className="shrink-0 inline-flex items-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
        >
          {t("aiScoreCta.inline.button")}
        </Link>
      </div>
    );
  }

  return (
    <section className="relative bg-paper text-ink border-y-2 border-ink/10 overflow-hidden">
      <div className="absolute inset-0 bg-paper-tex opacity-60 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <ScrollReveal>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">{eyebrowText}</p>
              <h2 className="font-display text-4xl md:text-6xl text-ink leading-[0.95] mb-5">
                {t("aiScoreCta.band.title")} <em className="text-red">{t("aiScoreCta.band.titleEm")}</em>
              </h2>
              <p className="font-display italic text-xl md:text-2xl text-ink/70 max-w-2xl leading-snug">
                {t("aiScoreCta.band.body")}
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <Link
                to="/ai-adoption-score"
                className="inline-flex items-center justify-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors"
              >
                {t("aiScoreCta.band.button")}
              </Link>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                {t("aiScoreCta.band.note")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AIScoreCTA;
