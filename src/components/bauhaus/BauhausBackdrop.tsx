import { cn } from "@/lib/utils";
import {
  CircleStack, TriangleGrid, HalfMoon, DotGrid, DiagonalLines,
  ArcSweep, SquareStack, CrossHair, WaveLines,
  CompositionA, CompositionB, CompositionC,
} from "./BauhausShapes";

type Variant = "corner-tl" | "corner-tr" | "corner-bl" | "corner-br" | "edge-right" | "edge-left" | "scattered" | "center-burst";

interface BauhausBackdropProps {
  variant?: Variant;
  /** Blend mode: "screen" for dark sections, "multiply" for paper sections. */
  blend?: "screen" | "multiply" | "normal";
  className?: string;
}

/**
 * Decorative backdrop. Renders absolute-positioned, pointer-events-none
 * Bauhaus shapes in the chosen layout. Drop inside a `relative` parent.
 */
const BauhausBackdrop = ({ variant = "scattered", blend = "screen", className }: BauhausBackdropProps) => {
  const blendClass =
    blend === "screen" ? "mix-blend-screen" : blend === "multiply" ? "mix-blend-multiply" : "";

  const wrap = cn(
    "pointer-events-none absolute inset-0 overflow-hidden select-none",
    blendClass,
    className
  );

  switch (variant) {
    case "corner-tl":
      return (
        <div className={wrap} aria-hidden="true">
          <CompositionA className="absolute -top-8 -left-8 w-64 md:w-80" opacity={0.85} />
          <DotGrid className="absolute top-40 left-6 w-36 hidden md:block" opacity={0.75} />
        </div>
      );
    case "corner-tr":
      return (
        <div className={wrap} aria-hidden="true">
          <CompositionB className="absolute -top-6 -right-6 w-72 md:w-96" opacity={0.9} />
          <DiagonalLines className="absolute top-48 right-12 w-40 hidden md:block" opacity={0.7} />
        </div>
      );
    case "corner-bl":
      return (
        <div className={wrap} aria-hidden="true">
          <CompositionC className="absolute -bottom-8 -left-8 w-64 md:w-80" opacity={0.85} />
          <CrossHair className="absolute bottom-36 left-14 w-32 hidden md:block" opacity={0.8} />
        </div>
      );
    case "corner-br":
      return (
        <div className={wrap} aria-hidden="true">
          <ArcSweep className="absolute -bottom-10 -right-10 w-72 md:w-96" opacity={0.8} />
          <SquareStack className="absolute bottom-24 right-36 w-36 hidden md:block" opacity={0.75} />
        </div>
      );
    case "edge-right":
      return (
        <div className={wrap} aria-hidden="true">
          <CircleStack className="absolute top-1/4 -right-10 w-56 md:w-72" opacity={0.8} />
          <WaveLines className="absolute bottom-1/4 right-6 w-52 hidden md:block" opacity={0.7} />
        </div>
      );
    case "edge-left":
      return (
        <div className={wrap} aria-hidden="true">
          <TriangleGrid className="absolute top-1/3 -left-6 w-56 md:w-72" opacity={0.8} />
          <HalfMoon className="absolute bottom-1/4 left-10 w-44 hidden md:block" opacity={0.75} />
        </div>
      );
    case "center-burst":
      return (
        <div className={wrap} aria-hidden="true">
          <ArcSweep className="absolute top-10 left-1/2 -translate-x-1/2 w-96 md:w-[32rem]" opacity={0.6} />
          <DotGrid className="absolute bottom-10 left-12 w-40 hidden md:block" opacity={0.65} />
          <SquareStack className="absolute top-1/2 right-12 w-36 hidden md:block" opacity={0.75} />
        </div>
      );
    case "scattered":
    default:
      return (
        <div className={wrap} aria-hidden="true">
          <CircleStack className="absolute -top-6 -right-6 w-52 md:w-64" opacity={0.8} />
          <SquareStack className="absolute bottom-8 -left-6 w-44 md:w-56" opacity={0.75} />
          <DotGrid className="absolute top-1/2 right-1/4 w-36 hidden md:block" opacity={0.65} />
          <DiagonalLines className="absolute -bottom-4 right-1/3 w-44 hidden md:block" opacity={0.6} />
        </div>
      );
  }
};

export default BauhausBackdrop;
