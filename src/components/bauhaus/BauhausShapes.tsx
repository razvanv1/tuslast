/**
 * Bauhaus / Kandinsky popsicle shape primitives.
 * All SVGs are inline, decorative (aria-hidden), and use --bau-* tokens.
 * A shared <defs> filter (#bau-shine) applies a subtle glow for the
 * "shiny popsicle" look. Drop the <BauhausDefs/> once near the app root
 * (or inline per-shape — it's cheap and idempotent).
 */
import { cn } from "@/lib/utils";

type ShapeProps = {
  className?: string;
  /** Override default 1.0 opacity (shapes already designed bright). */
  opacity?: number;
};

const shine = "url(#bau-shine)";

/** Shared SVG defs — render once per page (e.g. in App or a layout). */
export const BauhausDefs = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <filter id="bau-shine" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

const baseSvg = (className?: string, opacity = 1) =>
  cn("block", className) + (opacity !== 1 ? "" : "");

/* ---------- Primitives ---------- */

export const CircleStack = ({ className, opacity = 0.9 }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <circle cx="40" cy="42" r="28" fill="hsl(var(--bau-yellow))" filter={shine} />
    <circle cx="62" cy="55" r="22" fill="hsl(var(--bau-pink))" filter={shine} />
    <circle cx="50" cy="50" r="14" fill="hsl(var(--bau-blue))" filter={shine} />
  </svg>
);

export const TriangleGrid = ({ className, opacity = 0.85 }: ShapeProps) => (
  <svg viewBox="0 0 120 80" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <polygon points="10,70 30,15 50,70" fill="hsl(var(--bau-red))" filter={shine} />
    <polygon points="45,70 65,15 85,70" fill="hsl(var(--bau-yellow))" filter={shine} />
    <polygon points="80,70 100,15 120,70" fill="hsl(var(--bau-blue))" filter={shine} />
  </svg>
);

export const HalfMoon = ({ className, opacity = 0.9 }: ShapeProps) => (
  <svg viewBox="0 0 100 60" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <path d="M5 55 A45 45 0 0 1 95 55 Z" fill="hsl(var(--bau-orange))" filter={shine} />
    <circle cx="50" cy="55" r="12" fill="hsl(var(--bau-cyan))" filter={shine} />
  </svg>
);

export const DotGrid = ({ className, opacity = 0.85 }: ShapeProps) => {
  const colors = ["--bau-yellow", "--bau-pink", "--bau-cyan", "--bau-orange", "--bau-purple", "--bau-green"];
  const dots = [];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const c = colors[(x * 3 + y * 5) % colors.length];
      dots.push(<circle key={`${x}-${y}`} cx={6 + x * 12} cy={6 + y * 12} r="3" fill={`hsl(var(${c}))`} filter={shine} />);
    }
  }
  return (
    <svg viewBox="0 0 100 100" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
      {dots}
    </svg>
  );
};

export const DiagonalLines = ({ className, opacity = 0.8 }: ShapeProps) => {
  const colors = ["--bau-purple", "--bau-cyan", "--bau-yellow"];
  return (
    <svg viewBox="0 0 100 100" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1={-20 + i * 18}
          y1={120}
          x2={80 + i * 18}
          y2={-20}
          stroke={`hsl(var(${colors[i % 3]}))`}
          strokeWidth="4"
          filter={shine}
        />
      ))}
    </svg>
  );
};

export const ArcSweep = ({ className, opacity = 0.9 }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <path d="M10 90 A 80 80 0 0 1 90 10" fill="none" stroke="hsl(var(--bau-yellow))" strokeWidth="14" filter={shine} />
    <path d="M25 90 A 65 65 0 0 1 90 25" fill="none" stroke="hsl(var(--bau-pink))" strokeWidth="8" filter={shine} />
  </svg>
);

export const SquareStack = ({ className, opacity = 0.85 }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <rect x="10" y="10" width="70" height="70" fill="hsl(var(--bau-blue))" filter={shine} />
    <rect x="22" y="22" width="50" height="50" fill="hsl(var(--bau-orange))" filter={shine} />
    <rect x="34" y="34" width="30" height="30" fill="hsl(var(--bau-pink))" filter={shine} />
  </svg>
);

export const CrossHair = ({ className, opacity = 0.9 }: ShapeProps) => (
  <svg viewBox="0 0 100 100" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <line x1="50" y1="5" x2="50" y2="95" stroke="hsl(var(--bau-red))" strokeWidth="5" filter={shine} />
    <line x1="5" y1="50" x2="95" y2="50" stroke="hsl(var(--bau-red))" strokeWidth="5" filter={shine} />
    <circle cx="50" cy="50" r="18" fill="hsl(var(--bau-yellow))" filter={shine} />
    <circle cx="50" cy="50" r="6" fill="hsl(var(--bau-black))" />
  </svg>
);

export const WaveLines = ({ className, opacity = 0.85 }: ShapeProps) => (
  <svg viewBox="0 0 200 60" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <defs>
      <linearGradient id="bau-wave" x1="0%" x2="100%">
        <stop offset="0%" stopColor="hsl(var(--bau-cyan))" />
        <stop offset="100%" stopColor="hsl(var(--bau-pink))" />
      </linearGradient>
    </defs>
    {[10, 25, 40].map((y, i) => (
      <path
        key={i}
        d={`M0 ${y} Q 50 ${y - 8} 100 ${y} T 200 ${y}`}
        fill="none"
        stroke="url(#bau-wave)"
        strokeWidth="3"
        filter={shine}
      />
    ))}
  </svg>
);

/* ---------- Compositions (Kandinsky-style mini scenes) ---------- */

export const CompositionA = ({ className, opacity = 0.9 }: ShapeProps) => (
  <svg viewBox="0 0 160 160" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <circle cx="55" cy="55" r="38" fill="hsl(var(--bau-yellow))" filter={shine} />
    <polygon points="80,30 130,30 105,90" fill="hsl(var(--bau-red))" filter={shine} />
    <rect x="90" y="95" width="50" height="50" fill="hsl(var(--bau-blue))" filter={shine} />
    <line x1="10" y1="140" x2="150" y2="20" stroke="hsl(var(--bau-black))" strokeWidth="2" />
    <circle cx="30" cy="130" r="10" fill="hsl(var(--bau-pink))" filter={shine} />
  </svg>
);

export const CompositionB = ({ className, opacity = 0.9 }: ShapeProps) => (
  <svg viewBox="0 0 160 160" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <path d="M20 140 A 100 100 0 0 1 140 20" fill="none" stroke="hsl(var(--bau-orange))" strokeWidth="10" filter={shine} />
    <circle cx="120" cy="50" r="22" fill="hsl(var(--bau-cyan))" filter={shine} />
    <rect x="30" y="80" width="40" height="40" fill="hsl(var(--bau-yellow))" filter={shine} />
    <polygon points="80,90 110,90 95,130" fill="hsl(var(--bau-purple))" filter={shine} />
    <circle cx="140" cy="130" r="8" fill="hsl(var(--bau-pink))" filter={shine} />
  </svg>
);

export const CompositionC = ({ className, opacity = 0.9 }: ShapeProps) => (
  <svg viewBox="0 0 160 160" className={baseSvg(className)} style={{ opacity }} aria-hidden="true" role="presentation">
    <rect x="10" y="10" width="60" height="100" fill="hsl(var(--bau-pink))" filter={shine} />
    <circle cx="110" cy="50" r="35" fill="hsl(var(--bau-green))" filter={shine} />
    <polygon points="80,90 150,90 115,150" fill="hsl(var(--bau-yellow))" filter={shine} />
    <line x1="0" y1="120" x2="160" y2="120" stroke="hsl(var(--bau-blue))" strokeWidth="4" />
    <circle cx="40" cy="140" r="12" fill="hsl(var(--bau-orange))" filter={shine} />
  </svg>
);
