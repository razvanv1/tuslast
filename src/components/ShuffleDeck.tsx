import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cardWorkers from "@/assets/card-workers.webp";
import cardEvents from "@/assets/card-events.webp";
import cardFunding from "@/assets/card-funding.webp";
import cardAssessment from "@/assets/card-assessment.webp";

const DECK = [
  { image: cardWorkers, label: "AI for Non-Technical People", caption: "Modular · cohort", href: "/programmes/ai-for-non-technical-people" },
  { image: cardEvents, label: "Events & Keynotes", caption: "90 min – 2 days", href: "/events" },
  { image: cardFunding, label: "MDF, Funding & Grants", caption: "Vendor MDF · EU grants", href: "/funding" },
  { image: cardAssessment, label: "AI Adoption Gap Assessment", caption: "Free · 1 session", href: "/assessment" },
];

interface DeckCardProps {
  image: string;
  label: string;
  caption: string;
  href: string;
  index: number;
  total: number;
  onSwipe: () => void;
}

const DeckCard = ({ image, label, caption, href, index, total, onSwipe }: DeckCardProps) => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-25, 0, 25]);
  const opacity = useTransform(x, [-320, -180, 0, 180, 320], [0, 1, 1, 1, 0]);
  const draggedRef = useRef(false);

  const stackOffset = index * 6;
  const stackRotate = index === 0 ? 0 : (index % 2 === 0 ? -2 : 2) * (index * 0.6);
  const scale = 1 - index * 0.03;
  const isTop = index === 0;

  // When card position in stack changes (after a swipe cycles the deck),
  // snap x/y back to 0 so a previously-swiped card reappears in the stack.
  // Skip on first mount and defer to next frame to avoid forced reflow during commit.
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    if (!isTop) {
      const raf = requestAnimationFrame(() => {
        x.set(0);
        y.set(0);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [index, isTop, x, y]);

  const handleDragStart = () => {
    draggedRef.current = false;
  };

  const handleDrag = (_: unknown, info: { offset: { x: number; y: number } }) => {
    if (Math.abs(info.offset.x) > 6 || Math.abs(info.offset.y) > 6) {
      draggedRef.current = true;
    }
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }) => {
    const swipe = Math.abs(info.offset.x) > 80 || Math.abs(info.velocity.x) > 300;
    if (swipe && isTop) {
      const dir = info.offset.x > 0 ? 1 : -1;
      animate(x, dir * 600, { duration: 0.35, ease: "easeOut" });
      animate(y, info.offset.y + 60, { duration: 0.35 });
      setTimeout(onSwipe, 300);
    } else {
      animate(x, 0, { type: "spring", stiffness: 260, damping: 22 });
      animate(y, 0, { type: "spring", stiffness: 260, damping: 22 });
    }
  };

  const handleTap = () => {
    if (!isTop) return;
    if (draggedRef.current) return;
    navigate(href);
  };

  return (
    <motion.figure
      drag={isTop ? true : false}
      dragElastic={0.6}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onClick={handleTap}
      style={{
        x,
        y,
        rotate: isTop ? rotate : stackRotate,
        opacity: isTop ? opacity : 1,
        zIndex: total - index,
        cursor: isTop ? "grab" : "default",
        touchAction: isTop ? "none" : "auto",
        willChange: isTop ? "transform" : "auto",
        contain: "layout paint size style",
        backfaceVisibility: "hidden",
      }}
      whileDrag={{ cursor: "grabbing", scale: 1.04 }}
      initial={isTop ? { scale, y: stackOffset, opacity: 1 } : { scale: scale * 0.92, y: stackOffset + 20, opacity: 0 }}
      animate={{ scale, y: stackOffset, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 inset-x-0 mx-auto bg-paper p-3 pb-20 card-shadow select-none w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px] max-w-full"
    >
      <div className="aspect-[3/4] overflow-hidden bg-paper-dim pointer-events-none">
        <img
          src={image}
          alt={label}
          loading={index <= 1 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : index === 1 ? "high" : "auto"}
          decoding="async"
          width={512}
          height={704}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <figcaption className="absolute bottom-0 left-0 right-0 bg-ink text-paper px-3 py-3 text-center pointer-events-none">
        <p className="font-display text-paper text-base sm:text-lg md:text-xl leading-tight">{label}</p>
        <p className="inline-block bg-paper px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-red mt-1">{caption}</p>
      </figcaption>
    </motion.figure>
  );
};

const ShuffleDeck = () => {
  const [order, setOrder] = useState<number[]>(DECK.map((_, i) => i));

  const cycle = () => setOrder((prev) => [...prev.slice(1), prev[0]]);
  const topIdx = order[0];
  const top = DECK[topIdx];

  return (
    <div className="relative w-full flex flex-col items-center mx-auto">
      <div
        className="relative mx-auto w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px] h-[460px] sm:h-[540px] md:h-[640px] lg:h-[700px] max-w-full"
        style={{ contain: "layout paint size style" }}
      >
        {order.map((cardIdx, position) => {
          const card = DECK[cardIdx];
          if (position > 2) return null;
          return (
            <DeckCard
              key={cardIdx}
              image={card.image}
              label={card.label}
              caption={card.caption}
              href={card.href}
              index={position}
              total={3}
              onSwipe={cycle}
            />
          );
        })}
      </div>

      <div className="mt-8 inline-flex items-center gap-2 border border-red/60 px-4 py-2 rounded-full">
        <span aria-hidden className="text-red animate-pulse text-base leading-none">↔</span>
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-paper/85">
          Tap to open · Swipe to shuffle
        </p>
      </div>

      <div className="flex items-center gap-4 sm:gap-8 mt-6">
        <button
          onClick={cycle}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-paper border border-paper/40 px-4 py-2 hover:bg-red hover:text-paper hover:border-red transition-colors flex items-center gap-2"
          aria-label="Previous card"
        >
          <span aria-hidden>←</span> Prev
        </button>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-3xl md:text-4xl text-red tabular-nums leading-none">
            {String(topIdx + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50 tabular-nums">
            / {String(DECK.length).padStart(2, "0")}
          </span>
        </div>
        <button
          onClick={cycle}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-paper border border-paper/40 px-4 py-2 hover:bg-red hover:text-paper hover:border-red transition-colors flex items-center gap-2"
          aria-label="Next card"
        >
          Next <span aria-hidden>→</span>
        </button>
      </div>

      <div className="flex gap-1.5 mt-4" aria-hidden>
        {DECK.map((_, i) => (
          <span
            key={i}
            className={`h-1 w-8 transition-colors ${i === topIdx ? "bg-red" : "bg-paper/15"}`}
          />
        ))}
      </div>

      <p className="font-display italic text-paper/85 text-2xl md:text-3xl mt-6 text-center max-w-md px-4 flex items-center justify-center gap-3">
        <span className="text-red animate-pulse not-italic" aria-hidden>•</span>
        Now drawing: <span className="text-red not-italic">{top.label}</span>
      </p>
    </div>
  );
};

export default ShuffleDeck;
