import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section = ({ children, className, dark }: SectionProps) => (
  <section className={cn(dark ? "bg-dark text-primary-foreground" : "", className)}>
    <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
      <ScrollReveal>{children}</ScrollReveal>
    </div>
  </section>
);

export default Section;
