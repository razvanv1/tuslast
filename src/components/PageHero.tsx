import { Link } from "react-router-dom";

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaTo?: string;
  secondaryText?: string;
  secondaryTo?: string;
  note?: string;
  issue?: string;
}

const PageHero = ({ tag, title, subtitle, ctaText, ctaTo, secondaryText, secondaryTo, note, issue = "The Unlearning School" }: PageHeroProps) => (
  <section className="relative bg-background text-paper border-b-2 border-paper/10 overflow-hidden">
    <div className="bg-halftone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.3em] text-paper/50 border-b border-paper/15 pb-4 mb-10">
          <span>{issue}</span>
          {tag && <span className="text-red">{tag}</span>}
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-paper leading-[0.92] max-w-5xl mb-8">
          {title}
        </h1>

        {subtitle && (
          <p className="font-display italic text-lg md:text-2xl text-paper/80 max-w-3xl mb-10 leading-snug">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {ctaText && ctaTo && (
            <Link
              to={ctaTo}
              className="inline-flex items-center px-6 py-3.5 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {ctaText}
            </Link>
          )}
          {secondaryText && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center px-6 py-3.5 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {secondaryText}
            </Link>
          )}
        </div>

        {note && (
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 mt-6">{note}</p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
