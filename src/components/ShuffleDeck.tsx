import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState } from "react";
import cardTool from "@/assets/card-tool.png";
import cardBrain from "@/assets/card-brain.png";
import cardWorkers from "@/assets/card-workers.png";
import cardBubble from "@/assets/card-bubble.png";
import cardEye from "@/assets/card-eye.png";
import cardGears from "@/assets/card-gears.png";
import cardKey from "@/assets/card-key.png";

const DECK = [
  { image: cardTool, label: "AI as Weapon", caption: "Card I" },
  { image: cardWorkers, label: "AI as Worker", caption: "Card II" },
  { image: cardBrain, label: "AI as Teacher", caption: "Card III" },
  { image: cardEye, label: "AI as Witness", caption: "Card IV" },
  { image: cardGears, label: "AI as Process", caption: "Card V" },
  { image: cardBubble, label: "AI as Bubble", caption: "Card VI" },
  { image: cardKey, label: "AI as Unlock", caption: "Card VII" },
];

interface DeckCardProps {
  image: string;
  label: string;
  caption: string;
  index: number;          // 0 = top of stack
  total: number;
  onSwipe: () => void;
}

const DeckCard = ({ image, label, caption, index, total, onSwipe }: DeckCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-25, 0, 25]);
  const opacity = useTransform(x, [-320, -180, 0, 180, 320], [0, 1, 1, 1, 0]);

  // Stack offset behind the top card
  const stackOffset = index * 6;
  const stackRotate = index === 0 ? 0 : (index % 2 === 0 ? -2 : 2) * (index * 0.6);
  const scale = 1 - index * 0.03;
  const isTop = index === 0;

  const handleDragEnd = (_: unknown, info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }) => {
    const swipe = Math.abs(info.offset.x) > 140 || Math.abs(info.velocity.x) > 500;
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

  return (
    <motion.figure
      drag={isTop ? "x" : false}
      dragElastic={0.5}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      style={{
        x,
        y,
        rotate: isTop ? rotate : stackRotate,
        opacity: isTop ? opacity : 1,
        zIndex: total - index,
        cursor: isTop ? "grab" : "default",
      }}
      whileDrag={{ cursor: "grabbing", scale: 1.04 }}
      initial={{ scale: scale * 0.92, y: stackOffset + 20, opacity: 0 }}
      animate={{ scale, y: stackOffset, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 left-1/2 -translate-x-1/2 bg-paper p-3 pb-12 card-shadow select-none w-[260px] md:w-[300px] lg:w-[320px]"
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
      <figcaption className="absolute bottom-3 left-3 right-3 text-center pointer-events-none">
        <p className="font-display text-ink text-xl md:text-2xl leading-none uppercase tracking-tight">{label}</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50 mt-1">{caption}</p>
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
    <div className="relative w-full flex flex-col items-center">
      <div className="relative w-[260px] md:w-[300px] lg:w-[320px] h-[420px] md:h-[480px] lg:h-[510px]">
        {order.map((cardIdx, position) => {
          const card = DECK[cardIdx];
          // Only render top 4 for performance
          if (position > 3) return null;
          return (
            <DeckCard
              key={cardIdx}
              image={card.image}
              label={card.label}
              caption={card.caption}
              index={position}
              total={4}
              onSwipe={cycle}
            />
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={cycle}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60 hover:text-red transition-colors flex items-center gap-2"
          aria-label="Previous card"
        >
          <span aria-hidden>←</span> Drag or tap
        </button>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red tabular-nums">
          {String(order.indexOf(topIdx) + 1).padStart(2, "0")} / {String(DECK.length).padStart(2, "0")}
        </span>
        <button
          onClick={cycle}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/60 hover:text-red transition-colors flex items-center gap-2"
          aria-label="Next card"
        >
          Next card <span aria-hidden>→</span>
        </button>
      </div>

      {/* Live caption */}
      <p className="font-display italic text-paper/70 text-lg md:text-xl mt-4 text-center max-w-md">
        Now drawing: <span className="text-red not-italic">{top.label}</span>
      </p>
    </div>
  );
};

export default ShuffleDeck;
