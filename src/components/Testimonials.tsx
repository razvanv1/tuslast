import { useTranslation } from "react-i18next";
import Section from "@/components/Section";
import { Kicker } from "@/components/Editorial";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsProps {
  /** i18n namespace + key path returning Testimonial[] (default: "home", "testimonials.items"). */
  namespace?: string;
  itemsKey?: string;
  kickerKey?: string;
  titleStartKey?: string;
  titleEmKey?: string;
  variant?: "paper" | "dark";
}

/**
 * Editorial pull-quote testimonials. No stars, no avatars — Wired-style:
 * big italic display quote, mono attribution. 3-up grid on desktop, stacked on mobile.
 */
const Testimonials = ({
  namespace = "home",
  itemsKey = "testimonials.items",
  kickerKey = "testimonials.kicker",
  titleStartKey = "testimonials.titleStart",
  titleEmKey = "testimonials.titleEm",
  variant = "paper",
}: TestimonialsProps) => {
  const { t } = useTranslation(namespace);
  const items = t(itemsKey, { returnObjects: true }) as Testimonial[];
  if (!Array.isArray(items) || items.length === 0) return null;

  const isPaper = variant === "paper";
  const textPrimary = isPaper ? "text-ink" : "text-paper";
  const textBorder = isPaper ? "border-ink/15" : "border-paper/15";
  const accentBg = isPaper ? "bg-ink/10" : "bg-paper/10";
  const cardBg = isPaper ? "bg-paper" : "bg-background";

  return (
    <Section variant={isPaper ? "paper" : "dark"}>
      <div className="grid md:grid-cols-12 gap-10 mb-12">
        <div className="md:col-span-5">
          <Kicker>{t(kickerKey)}</Kicker>
          <h2 className={`font-display text-4xl md:text-5xl ${textPrimary} leading-[0.95]`}>
            {t(titleStartKey)} <em className="text-red">{t(titleEmKey)}</em>
          </h2>
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-px ${accentBg}`}>
        {items.map((it, i) => (
          <article key={i} className={`${cardBg} p-8 md:p-10 flex flex-col`}>
            <span className="font-display text-6xl text-red leading-none mb-4" aria-hidden>"</span>
            <blockquote className={`font-display italic text-xl md:text-2xl ${textPrimary} leading-snug flex-1`}>
              {it.quote}
            </blockquote>
            <footer className={`mt-6 pt-4 border-t ${textBorder}`}>
              <p className={`font-mono text-[10px] uppercase tracking-[0.25em] ${textPrimary}`}>
                {it.name}
              </p>
              <p className={`font-mono text-[10px] uppercase tracking-[0.2em] ${isPaper ? "text-ink/55" : "text-paper/55"} mt-1`}>
                {it.role}
              </p>
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
