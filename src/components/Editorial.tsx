import { cn } from "@/lib/utils";

/** Editorial paragraph with optional drop cap on first letter */
export const ProseParagraph = ({
  children,
  dropCap,
  className,
}: {
  children: React.ReactNode;
  dropCap?: boolean;
  className?: string;
}) => (
  <p
    className={cn(
      "text-[15px] md:text-base leading-[1.7] text-paper/85 mb-5",
      dropCap &&
        "first-letter:font-display first-letter:text-[88px] first-letter:leading-[0.78] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-red",
      className,
    )}
  >
    {children}
  </p>
);

/** Magazine "byline / kicker" label - red filled badge with paper text */
export const Kicker = ({
  children,
  variant = "red",
}: {
  children: React.ReactNode;
  variant?: "red" | "muted";
}) => (
  <p className="mb-3">
    <span
      className={cn(
        "inline-block font-mono text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 border",
        variant === "red"
          ? "bg-red text-paper border-red"
          : "bg-transparent text-current/40 border-current/20",
      )}
    >
      {children}
    </span>
  </p>
);

/** Magazine section heading */
export const SectionHeading = ({
  kicker,
  title,
  intro,
  align = "left",
}: {
  kicker?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
}) => (
  <header
    className={cn(
      "mb-12 md:mb-16",
      align === "center" && "text-center mx-auto max-w-3xl",
    )}
  >
    {kicker && <Kicker> {kicker}</Kicker>}
    <h2 className="font-display text-4xl md:text-6xl text-current leading-[0.95] max-w-4xl">
      {title}
    </h2>
    {intro && (
      <p className="font-display italic text-lg md:text-xl text-current/70 mt-6 max-w-2xl leading-snug">
        {intro}
      </p>
    )}
  </header>
);

/** Numbered editorial step */
export const NumberedStep = ({
  num,
  title,
  children,
}: {
  num: string | number;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 border-b border-paper/15 group">
    <div className="col-span-2 md:col-span-1">
      <span className="font-display text-4xl md:text-5xl text-red leading-none">
        {String(num).padStart(2, "0")}
      </span>
    </div>
    <div className="col-span-10 md:col-span-3">
      <h3 className="font-display text-2xl md:text-3xl text-paper leading-tight">
        {title}
      </h3>
    </div>
    <div className="col-span-12 md:col-span-8 text-paper/75 text-[15px] leading-relaxed">
      {children}
    </div>
  </div>
);

/** Two-column magazine grid wrapper */
export const TwoColumnGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="md:columns-2 gap-10 text-paper/85 leading-[1.7] text-[15px] md:text-base [&>p]:mb-5 [&>p:first-child]:first-letter:font-display [&>p:first-child]:first-letter:text-[88px] [&>p:first-child]:first-letter:leading-[0.78] [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-3 [&>p:first-child]:first-letter:mt-1 [&>p:first-child]:first-letter:text-red">
    {children}
  </div>
);

/** Sidebar, used to flank an article on desktop */
export const Sidebar = ({
  byline,
  read,
  filed,
}: {
  byline?: string;
  read?: string;
  filed?: string;
}) => (
  <aside className="md:col-span-3 md:sticky md:top-24 md:self-start space-y-6">
    {byline && (
      <div>
        <Kicker variant="muted">Byline</Kicker>
        <p className="font-display text-paper text-xl leading-tight">{byline}</p>
      </div>
    )}
    {read && (
      <div>
        <Kicker variant="muted">Reading time</Kicker>
        <p className="font-mono text-paper/80 text-sm">{read}</p>
      </div>
    )}
    {filed && (
      <div>
        <Kicker variant="muted">Filed under</Kicker>
        <p className="font-mono text-paper/80 text-sm uppercase tracking-wider">{filed}</p>
      </div>
    )}
  </aside>
);
