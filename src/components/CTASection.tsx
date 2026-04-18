import { Link } from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
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

const isExternal = (to: string) => /^https?:\/\//i.test(to);

const PrimaryCTA = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const cls =
    "inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors";
  return isExternal(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  ) : (
    <Link to={to} className={cls}>{children}</Link>
  );
};

const SecondaryCTA = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const cls =
    "inline-flex items-center px-7 py-4 border border-ink/40 text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors";
  return isExternal(to) ? (
    <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  ) : (
    <Link to={to} className={cls}>{children}</Link>
  );
};

const CTASection = ({ title, subtitle, ctaText, ctaTo, secondaryText, secondaryTo, note }: CTASectionProps) => {
  const { t } = useTranslation();
  return (
  <section className="relative bg-paper text-ink border-y-2 border-ink/10 overflow-hidden">
    <div className="absolute inset-0 bg-paper-tex opacity-60 pointer-events-none" />
    <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
      <ScrollReveal>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-6"> {t("cta.eyebrow")}</p>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-ink leading-[0.95] max-w-4xl mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="font-display italic text-xl md:text-2xl text-ink/70 max-w-2xl mb-10 leading-snug">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <PrimaryCTA to={ctaTo}>{ctaText}</PrimaryCTA>
          {secondaryText && secondaryTo && (
            <SecondaryCTA to={secondaryTo}>{secondaryText}</SecondaryCTA>
          )}
        </div>
        {note && (
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50 mt-6">
            {note.split(/(\S+@\S+\.\S+|\+?\d[\d\s().-]{6,}\d)/g).map((part, i) => {
              if (/^\S+@\S+\.\S+$/.test(part)) {
                return <a key={i} href={`mailto:${part}`} className="text-red hover:underline">{part}</a>;
              }
              if (/^\+?\d[\d\s().-]{6,}\d$/.test(part)) {
                return <a key={i} href={`tel:${part.replace(/[^\d+]/g, "")}`} className="text-red hover:underline">{part}</a>;
              }
              return <span key={i}>{part}</span>;
            })}
          </p>
        )}
      </ScrollReveal>
    </div>
  </section>
  );
};

export default CTASection;
