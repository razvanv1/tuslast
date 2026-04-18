import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
  /** Optional category label, used when items are grouped. */
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /** When true, items are grouped by `category` with section headings. */
  grouped?: boolean;
}

/**
 * Editorial LMS-style FAQ accordion. Same visual language as
 * CurriculumAccordion: red accent stripe, glow on open, smooth grid-row
 * height transition, monospace kickers. Designed for dark sections.
 */
const FAQAccordion = ({ items, grouped = false }: FAQAccordionProps) => {
  const { i18n } = useTranslation();
  const faqLabel = i18n.language === "ro" ? "Întrebare" : "FAQ";
  const [openKey, setOpenKey] = useState<string | null>(items[0] ? `0-${items[0].q}` : null);

  const groups = grouped
    ? items.reduce<Record<string, FAQItem[]>>((acc, item) => {
        const k = item.category ?? "General";
        (acc[k] ||= []).push(item);
        return acc;
      }, {})
    : { __flat: items };

  let runningIndex = 0;

  return (
    <div className="mt-10 space-y-10">
      {Object.entries(groups).map(([groupName, groupItems]) => (
        <div key={groupName}>
          {grouped && (
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px flex-1 bg-paper/15" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red whitespace-nowrap">
                {groupName}
              </p>
              <span className="h-px flex-1 bg-paper/15" />
            </div>
          )}

          <div className="space-y-3">
            {groupItems.map((f) => {
              const idx = runningIndex++;
              const key = `${idx}-${f.q}`;
              const isOpen = openKey === key;
              return (
                <article
                  key={key}
                  className={`relative overflow-hidden border transition-all duration-300 rounded-lg ${
                    isOpen
                      ? "border-red/40 bg-gradient-to-br from-paper/[0.04] to-paper/[0.01] shadow-[0_20px_60px_-30px_hsl(var(--red)/0.4)]"
                      : "border-paper/10 bg-paper/[0.02] hover:border-paper/25 hover:bg-paper/[0.04]"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
                      isOpen ? "bg-red" : "bg-paper/15"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="w-full flex items-center gap-4 md:gap-5 text-left px-5 md:px-7 py-5 md:py-6 group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full font-mono text-[11px] font-bold transition-all ${
                        isOpen
                          ? "bg-red text-paper shadow-[0_6px_18px_-6px_hsl(var(--red)/0.7)]"
                          : "bg-paper/10 text-paper/70 group-hover:bg-paper/20"
                      }`}
                    >
                      <HelpCircle size={16} strokeWidth={2.5} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-red/80 mb-1">
                        {faqLabel} · {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display text-lg md:text-xl text-paper leading-snug">
                        {f.q}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`flex-shrink-0 text-paper/60 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-red" : "group-hover:text-paper"
                      }`}
                      size={22}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-7 pb-6 md:pb-7 pt-1 pl-[68px] md:pl-[76px]">
                        <p className="text-paper/80 text-[14px] md:text-[15px] leading-relaxed max-w-3xl whitespace-pre-line">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
