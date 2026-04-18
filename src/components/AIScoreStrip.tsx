import { useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";
import { trackEvent } from "@/lib/analytics";

/**
 * Thin paper band promoting the 2-min AI Adoption Score.
 * Sits directly under the hero — complements (does not replace) hero CTAs.
 */
const AIScoreStrip = () => {
  const { t } = useTranslation("home");
  return (
    <section className="relative bg-paper text-ink border-y-2 border-ink/10 overflow-hidden">
      <div className="absolute inset-0 bg-paper-tex opacity-60 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-6 md:py-7">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red whitespace-nowrap">
              {t("scoreStrip.kicker")}
            </p>
            <p className="font-display text-lg md:text-xl text-ink leading-snug">
              {t("scoreStrip.body")} <em className="text-red not-italic">{t("scoreStrip.bodyEm")}</em>
            </p>
          </div>
          <Link
            to="/ai-adoption-score"
            onClick={() => trackEvent("cta_take_score", { location: "home_strip" })}
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-red transition-colors"
          >
            {t("scoreStrip.button")} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIScoreStrip;
