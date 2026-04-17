import { cn } from "@/lib/utils";

interface IssueCardProps {
  number: string;
  title: string;
  body: string;
  href?: string;
  variant?: "default" | "red" | "blue" | "paper";
  className?: string;
}

/** Editorial article card, like a magazine "story tile" */
const IssueCard = ({ number, title, body, href, variant = "default", className }: IssueCardProps) => {
  const variants = {
    default: "bg-background text-paper border-paper/15 hover:border-red",
    red: "bg-red text-paper border-red hover:bg-red/90",
    blue: "bg-blue text-paper border-blue hover:bg-blue/90",
    paper: "bg-paper text-ink border-ink/15 hover:border-red",
  };

  const Inner = (
    <article
      className={cn(
        "group relative border-2 p-7 md:p-9 transition-all duration-300 h-full flex flex-col",
        variants[variant],
        className,
      )}
    >
      <div className="flex items-baseline justify-between mb-6">
        <span className="font-display text-5xl md:text-6xl leading-none opacity-90">{number}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-50">Story</span>
      </div>

      <h3 className="font-display text-2xl md:text-3xl leading-[1.05] mb-4">
        {title}
      </h3>

      <p className={cn(
        "text-sm leading-relaxed flex-1",
        variant === "default" ? "text-paper/70" : variant === "paper" ? "text-ink/70" : "text-paper/85",
      )}>
        {body}
      </p>

      {href && (
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
          Read story <span aria-hidden>→</span>
        </span>
      )}
    </article>
  );

  return Inner;
};

export default IssueCard;
