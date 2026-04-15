import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaTo: string;
  note?: string;
  dark?: boolean;
}

const CTASection = ({ title, subtitle, ctaText, ctaTo, note, dark }: CTASectionProps) => (
  <section className={dark ? "bg-dark" : "bg-background"}>
    <div className="max-w-site mx-auto px-[5%] py-16 md:py-20 text-center">
      <ScrollReveal>
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${dark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-base mb-8 max-w-xl mx-auto ${dark ? "text-gray-300" : "text-mid"}`}>
            {subtitle}
          </p>
        )}
        <Link
          to={ctaTo}
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
        >
          {ctaText}
        </Link>
        {note && (
          <p className={`text-xs mt-4 ${dark ? "text-gray-400" : "text-mid"}`}>{note}</p>
        )}
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
