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
}

const PageHero = ({ tag, title, subtitle, ctaText, ctaTo, secondaryText, secondaryTo, note }: PageHeroProps) => (
  <section className="bg-background">
    <div className="max-w-site mx-auto px-[5%] pt-16 pb-12 md:pt-24 md:pb-16">
      {tag && (
        <p className="text-xs font-semibold tracking-widest text-mid uppercase mb-4">{tag}</p>
      )}
      <h1 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight max-w-3xl mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base md:text-lg text-mid max-w-2xl mb-8 leading-relaxed">{subtitle}</p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        {ctaText && ctaTo && (
          <Link
            to={ctaTo}
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            {ctaText}
          </Link>
        )}
        {secondaryText && secondaryTo && (
          <Link
            to={secondaryTo}
            className="inline-flex items-center px-6 py-3 border border-foreground text-foreground font-semibold rounded hover:bg-muted transition-colors"
          >
            {secondaryText}
          </Link>
        )}
      </div>
      {note && (
        <p className="text-xs text-mid mt-4">{note}</p>
      )}
    </div>
  </section>
);

export default PageHero;
