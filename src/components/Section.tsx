import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Section = ({ children, className, dark }: SectionProps) => (
  <section className={cn(dark ? "bg-dark text-primary-foreground" : "", className)}>
    <div className="max-w-site mx-auto px-[5%] py-16 md:py-20">
      {children}
    </div>
  </section>
);

export default Section;
