import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaTo: string;
  secondaryText?: string;
  secondaryTo?: string;
  note?: string;
  dark?: boolean;
}

const CTASection = ({ title, subtitle, ctaText, ctaTo, secondaryText, secondaryTo, note }: CTASectionProps) => (
  <section className="relative bg-paper text-ink border-y-2 border-ink/10 overflow-hidden">
    <div className="absolute inset-0 bg-paper-tex opacity-60 pointer-events-none" />
    <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <ScrollReveal>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-6"> The Final Word</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-ink leading-[0.95] max-w-4xl mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="font-display italic text-xl md:text-2xl text-ink/70 max-w-2xl mb-10 leading-snug">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to={ctaTo}
            className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors"
          >
            {ctaText}
          </Link>
          {secondaryText && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center px-7 py-4 border border-ink/40 text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
            >
              {secondaryText}
            </Link>
          )}
        </div>
        {note && (
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 mt-6">{note}</p>
        )}
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
