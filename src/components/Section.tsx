import { cn } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";
import BauhausBackdrop from "@/components/bauhaus/BauhausBackdrop";

type DecorVariant =
  | "corner-tl" | "corner-tr" | "corner-bl" | "corner-br"
  | "edge-right" | "edge-left" | "scattered" | "center-burst";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** dark = matte charcoal; darker = matte deep; graphite = cool dark grey; slate = neutral mid-dark; paper = inverted cream */
  variant?: "dark" | "darker" | "graphite" | "slate" | "paper";
  bordered?: boolean;
  /** Bauhaus decorative backdrop. "none" disables. Defaults rotate by variant. */
  decor?: DecorVariant | "none";
}

// Stable rotation so consecutive sections don't repeat the same composition.
const decorRotation: DecorVariant[] = [
  "corner-tr", "edge-left", "scattered", "corner-bl", "edge-right", "corner-tl", "center-burst", "corner-br",
];
let decorCounter = 0;

const Section = ({ children, className, variant = "dark", bordered = true, decor }: SectionProps) => {
  const variantClasses =
    variant === "paper"
      ? "bg-paper text-ink"
      : variant === "darker"
      ? "bg-section-darker text-paper"
      : variant === "graphite"
      ? "bg-section-graphite text-paper"
      : variant === "slate"
      ? "bg-section-slate text-paper"
      : "bg-background text-paper";

  const resolvedDecor: DecorVariant | "none" =
    decor ?? decorRotation[decorCounter++ % decorRotation.length];
  const blend = variant === "paper" ? "multiply" : "screen";

  return (
    <section className={cn("relative overflow-hidden", variantClasses, bordered && "border-b-2 border-paper/10", className)}>
      {resolvedDecor !== "none" && <BauhausBackdrop variant={resolvedDecor} blend={blend} />}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <ScrollReveal>{children}</ScrollReveal>
      </div>
    </section>
  );
};

export default Section;
