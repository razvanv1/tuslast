import { useTranslation } from "react-i18next";
import Section from "@/components/Section";
import { Kicker } from "@/components/Editorial";

interface Tile {
  sector: string;
  metric: string;
  outcome: string;
  context: string;
}

/**
 * Anonymised case-study tiles — no client logos (we don't publish names),
 * but real shape: sector chip, big metric, outcome, context.
 */
const CaseStudyTiles = () => {
  const { t } = useTranslation("home");
  const tiles = t("cases.items", { returnObjects: true }) as Tile[];
  if (!Array.isArray(tiles) || tiles.length === 0) return null;

  return (
    <Section variant="paper">
      <div className="grid md:grid-cols-12 gap-10 mb-10">
        <div className="md:col-span-6">
          <Kicker>{t("cases.kicker")}</Kicker>
          <h2 className="font-display text-4xl md:text-5xl text-ink leading-[0.95]">
            {t("cases.titleStart")} <em className="text-red">{t("cases.titleEm")}</em>
          </h2>
        </div>
        <div className="md:col-span-6 flex items-end">
          <p className="text-ink/70 text-[15px] leading-relaxed max-w-xl">{t("cases.body")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ink/10">
        {tiles.map((tile, i) => (
          <article key={i} className="bg-paper p-6 md:p-7 flex flex-col">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-red mb-4 leading-tight">
              {tile.sector}
            </p>
            <p className="font-display text-4xl md:text-5xl text-ink leading-none mb-3">
              {tile.metric}
            </p>
            <p className="font-display text-base text-ink leading-tight mb-3 flex-1">
              {tile.outcome}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50 mt-auto pt-3 border-t border-ink/10">
              {tile.context}
            </p>
          </article>
        ))}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/55 mt-6">
        {t("cases.footnote")}
      </p>
    </Section>
  );
};

export default CaseStudyTiles;
