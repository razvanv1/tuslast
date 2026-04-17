import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TarotCardProps {
  image: string;
  label: string;
  caption?: string;
  rotate?: number;
  className?: string;
  delay?: number;
  priority?: boolean;
}

const TarotCard = ({ image, label, caption, rotate = 0, className, delay = 0, priority = false }: TarotCardProps) => (
  <motion.figure
    initial={priority ? false : { opacity: 0, y: 40, rotate: rotate - 10 }}
    animate={{ opacity: 1, y: 0, rotate }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ rotate: 0, y: -12, scale: 1.04, zIndex: 50, transition: { duration: 0.4 } }}
    className={cn(
      "relative bg-paper p-3 pb-12 card-shadow cursor-pointer select-none",
      "w-[180px] md:w-[220px] lg:w-[240px]",
      className,
    )}
    style={{ transformOrigin: "center bottom" }}
  >
    <div className="aspect-[3/4] overflow-hidden bg-paper-dim">
      <img
        src={image}
        alt={label}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        decoding="async"
        width={512}
        height={704}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
    <figcaption className="absolute bottom-3 left-3 right-3 text-center">
      <p className="font-display text-ink text-base md:text-lg leading-none uppercase tracking-tight">{label}</p>
      {caption && (
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-ink/50 mt-1">{caption}</p>
      )}
    </figcaption>
  </motion.figure>
);

export default TarotCard;
