import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import cardWorkers from "@/assets/card-workers.png";
import cardEvents from "@/assets/card-events.png";
import cardFunding from "@/assets/card-funding.png";
import cardAssessment from "@/assets/card-assessment.png";

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
      }}
      whileDrag={{ cursor: "grabbing", scale: 1.04 }}
      initial={{ scale: scale * 0.92, y: stackOffset + 20, opacity: 0 }}
      animate={{ scale, y: stackOffset, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 inset-x-0 mx-auto bg-paper p-3 pb-20 card-shadow select-none w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] max-w-full"
    >
      <div className="aspect-[3/4] overflow-hidden bg-paper-dim pointer-events-none">
        <img
          src={image}
          alt={label}
          loading="lazy"
          width={512}
          height={704}
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <figcaption className="absolute bottom-0 left-0 right-0 bg-ink text-paper px-3 py-3 text-center pointer-events-none">
        <p className="font-display text-paper text-base sm:text-lg md:text-xl leading-tight">{label}</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-red mt-1">{caption}</p>
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
      <div className="relative mx-auto w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[510px] max-w-full">
        {order.map((cardIdx, position) => {
          const card = DECK[cardIdx];
          if (position > 3) return null;
          return (
            <DeckCard
              key={cardIdx}
              image={card.image}
              label={card.label}
              caption={card.caption}
              href={card.href}
              index={position}
              total={4}
              onSwipe={cycle}
            />
          );
        })}
      </div>

      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-paper/45 mt-6 text-center">
        Tap to open · Swipe to shuffle
      </p>

      <div className="flex items-center gap-4 sm:gap-6 mt-3">
        <button
          onClick={cycle}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60 hover:text-red transition-colors flex items-center gap-2"
          aria-label="Previous card"
        >
          <span aria-hidden>←</span> Prev
        </button>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red tabular-nums">
          {String(order.indexOf(topIdx) + 1).padStart(2, "0")} / {String(DECK.length).padStart(2, "0")}
        </span>
        <button
          onClick={cycle}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60 hover:text-red transition-colors flex items-center gap-2"
          aria-label="Next card"
        >
          Next <span aria-hidden>→</span>
        </button>
      </div>

      <p className="font-display italic text-paper/70 text-lg md:text-xl mt-4 text-center max-w-md px-4">
        Now drawing: <span className="text-red not-italic">{top.label}</span>
      </p>
    </div>
  );
};

export default ShuffleDeck;
