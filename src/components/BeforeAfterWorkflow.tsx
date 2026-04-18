import { useTranslation } from "react-i18next";
import Section from "@/components/Section";
import { Kicker } from "@/components/Editorial";

interface Side {
  tag: string;
  title: string;
  time: string;
  steps: string[];
  friction: string;
}

/**
 * Reusable Before/After workflow infographic.
 * Two columns — Before (muted) on the left, After (red accent) on the right.
 * Pulls copy from the i18n namespace passed in (default: "home", "beforeAfter").
 */
const BeforeAfterWorkflow = ({
  namespace = "home",
  keyBase = "beforeAfter",
  variant = "dark",
}: {
  namespace?: string;
  keyBase?: string;
  variant?: "dark" | "paper";
}) => {
  const { t } = useTranslation(namespace);
  const before = t(`${keyBase}.before`, { returnObjects: true }) as Side;
  const after = t(`${keyBase}.after`, { returnObjects: true }) as Side;
  const isPaper = variant === "paper";

  return (
    <Section variant={isPaper ? "paper" : "dark"}>
      <div className="grid md:grid-cols-12 gap-10 mb-10">
        <div className="md:col-span-5">
          <Kicker>{t(`${keyBase}.kicker`)}</Kicker>
          <h2 className={`font-display text-4xl md:text-5xl leading-[0.95] ${isPaper ? "text-ink" : "text-paper"}`}>
            {t(`${keyBase}.titleStart`)} <em className="text-red">{t(`${keyBase}.titleEm`)}</em>
          </h2>
        </div>
        <div className="md:col-span-7 flex items-end">
          <p className={`text-[15px] leading-relaxed max-w-xl ${isPaper ? "text-ink/75" : "text-paper/75"}`}>
            {t(`${keyBase}.body`)}
          </p>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-px ${isPaper ? "bg-ink/10" : "bg-paper/15"}`}>
        {/* BEFORE */}
        <article className={`p-8 md:p-10 flex flex-col ${isPaper ? "bg-paper" : "bg-background"}`}>
          <p className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-4 ${isPaper ? "text-ink/50" : "text-paper/40"}`}>
            {before.tag}
          </p>
          <h3 className={`font-display text-2xl md:text-3xl leading-tight mb-2 ${isPaper ? "text-ink/85" : "text-paper/80"}`}>
            {before.title}
          </h3>
          <p className={`font-display text-5xl md:text-6xl leading-none mb-6 ${isPaper ? "text-ink/40" : "text-paper/40"}`}>
            {before.time}
          </p>
          <ol className={`flex-1 mb-6 border-t ${isPaper ? "border-ink/10" : "border-paper/10"}`}>
            {before.steps.map((step, i) => (
              <li key={i} className={`flex gap-4 py-3 border-b ${isPaper ? "border-ink/10 text-ink/75" : "border-paper/10 text-paper/70"} text-[14px] leading-relaxed`}>
                <span className={`font-mono text-[10px] uppercase tracking-[0.2em] shrink-0 pt-1 ${isPaper ? "text-ink/40" : "text-paper/35"}`}>
                  0{i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${isPaper ? "text-ink/45" : "text-paper/40"}`}>
            → {before.friction}
          </p>
        </article>

        {/* AFTER */}
        <article className="p-8 md:p-10 bg-red text-paper flex flex-col">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/80 mb-4">{after.tag}</p>
          <h3 className="font-display text-2xl md:text-3xl text-paper leading-tight mb-2">{after.title}</h3>
          <p className="font-display text-5xl md:text-6xl text-paper leading-none mb-6">{after.time}</p>
          <ol className="flex-1 mb-6 border-t border-paper/25">
            {after.steps.map((step, i) => (
              <li key={i} className="flex gap-4 py-3 border-b border-paper/25 text-paper text-[14px] leading-relaxed">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] shrink-0 pt-1 text-paper/70">
                  0{i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/85">
            → {after.friction}
          </p>
        </article>
      </div>
    </Section>
  );
};

export default BeforeAfterWorkflow;
