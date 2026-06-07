import type { ScoreResult } from "./types";
import { useCopy } from "./copy";

interface ScorePanelProps {
  step: number;
  result: ScoreResult | null;
  partial: { workflowFit?: number };
}

const ScorePanel = ({ step, result, partial }: ScorePanelProps) => {
  const t = useCopy();
  const rows = [
    { key: "workflowFit" as const, unlocksAt: 2, ...t.rows.workflowFit },
    { key: "dataSafety" as const, unlocksAt: 3, ...t.rows.dataSafety },
    { key: "promptQuality" as const, unlocksAt: 4, ...t.rows.promptQuality },
    { key: "aiUsage" as const, unlocksAt: 5, ...t.rows.aiUsage },
  ];

  return (
    <aside className="border-2 border-ink/15 bg-paper">
      <div className="px-6 py-4 border-b border-ink/15 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60">
          {t.outcomePreview}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/40">
          {result ? t.unlocked : t.locked}
        </p>
      </div>
      <div className="divide-y divide-ink/10">
        {rows.map((row) => {
          const unlocked = step >= row.unlocksAt;
          let value: number | null = null;
          if (result) value = result.metrics[row.key];
          else if (unlocked && row.key === "workflowFit" && partial.workflowFit != null) {
            value = partial.workflowFit;
          }
          return (
            <div
              key={row.key}
              className={`px-6 py-5 transition-opacity duration-500 ${
                unlocked ? "opacity-100" : "opacity-40"
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red">
                  {row.label}
                </p>
                <p
                  className={`font-display text-4xl leading-none ${
                    value != null ? "text-ink" : "text-ink/25"
                  }`}
                >
                  {value != null ? value : "— —"}
                </p>
              </div>
              <p className="text-ink/60 text-[13px] leading-snug mt-2">{row.caption}</p>
            </div>
          );
        })}
      </div>
      {result && (
        <div className="px-6 py-5 border-t-2 border-ink/15 bg-ink text-paper">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-paper/60 mb-2">
            {t.category}
          </p>
          <p className="font-display text-2xl leading-tight">{result.category}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mt-4 mb-1">
            {t.recommendation}
          </p>
          <p className="font-display text-xl leading-tight">{result.recommendation}</p>
        </div>
      )}
    </aside>
  );
};

export default ScorePanel;
