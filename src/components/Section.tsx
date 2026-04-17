import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** dark = base grey; darker = deeper recessed grey; graphite = lighter cool grey with sheen; paper = inverted cream */
  variant?: "dark" | "darker" | "graphite" | "paper";
  bordered?: boolean;
}

const Section = ({ children, className, variant = "dark", bordered = true }: SectionProps) => {
  const variantClasses =
    variant === "paper"
      ? "bg-paper text-ink"
      : variant === "darker"
      ? "bg-section-darker text-paper"
      : variant === "graphite"
      ? "bg-section-graphite text-paper"
      : "bg-background text-paper";
  return (
    <section className={cn(variantClasses, bordered && "border-b-2 border-paper/10", className)}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <ScrollReveal>{children}</ScrollReveal>
      </div>
    </section>
  );
};

export default Section;

