import { Link } from "react-router-dom";
import BauhausBackdrop from "@/components/bauhaus/BauhausBackdrop";

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
  banner?: string;
  bannerAlt?: string;
}

const isExternal = (to?: string) => !!to && /^(https?:|tel:|mailto:)/i.test(to);
const isAnchor = (to?: string) => !!to && to.startsWith("#");

const HeroCTA = ({
  to,
  children,
  variant,
}: {
  to: string;
  children: React.ReactNode;
  variant: "primary" | "secondary";
}) => {
  const cls =
    variant === "primary"
      ? "inline-flex items-center px-6 py-3.5 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
      : "inline-flex items-center px-6 py-3.5 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors";
  if (isAnchor(to)) {
    return (
      <button
        type="button"
        onClick={() => document.getElementById(to.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" })}
        className={cls}
      >
        {children}
      </button>
    );
  }
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
};

const PageHero = ({ tag, title, subtitle, ctaText, ctaTo, secondaryText, secondaryTo, note, issue = "The Unlearning School", banner, bannerAlt }: PageHeroProps) => (
  <section className="relative bg-background text-paper border-b-2 border-paper/10 overflow-hidden">
    <BauhausBackdrop variant="corner-tr" blend="screen" />
    <BauhausBackdrop variant="corner-bl" blend="screen" />
    <div className="relative bg-halftone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-8 pb-16 md:pt-12 md:pb-24">

        {tag && (
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-red mb-6">
            {tag}
          </p>
        )}

        {banner && (
          <div className="mb-10 md:mb-12 -mx-6 md:mx-0 overflow-hidden border-y-2 md:border-2 border-paper/15 bg-paper">
            <img
              src={banner}
              alt={bannerAlt || title}
              width={1344}
              height={576}
              className="w-full h-auto block"
            />
          </div>
        )}

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
            <HeroCTA to={ctaTo} variant="primary">{ctaText}</HeroCTA>
          )}
          {secondaryText && secondaryTo && (
            <HeroCTA to={secondaryTo} variant="secondary">{secondaryText}</HeroCTA>
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
