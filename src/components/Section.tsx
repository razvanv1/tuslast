import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** dark = on-brand black; paper = inverted cream/paper section */
  variant?: "dark" | "paper";
  bordered?: boolean;
}

const Section = ({ children, className, variant = "dark", bordered = true }: SectionProps) => {
  const variantClasses =
    variant === "paper"
      ? "bg-paper text-ink"
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
