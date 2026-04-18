import TarotCard from "./TarotCard";
import cardTool from "@/assets/card-tool.webp";
import cardBrain from "@/assets/card-brain.webp";
import cardWorkers from "@/assets/card-workers.webp";
import cardBubble from "@/assets/card-bubble.webp";
import cardEye from "@/assets/card-eye.webp";
import cardGears from "@/assets/card-gears.webp";
import cardKey from "@/assets/card-key.webp";

const cards = [
  { image: cardTool, label: "AI Adoption Call", caption: "Free · 30 min · Score", rotate: -14, top: "top-2", left: "left-[1%]" },
  { image: cardEye, label: "AI Adoption Score", caption: "2 min · Instant result", rotate: -9, top: "top-14", left: "left-[13%]", to: "/ai-adoption-score" },
  { image: cardWorkers, label: "AI for Work", caption: "Modular · cohort", rotate: -4, top: "top-1", left: "left-[26%]" },
  { image: cardGears, label: "Events & Keynotes", caption: "90 min – 2 days", rotate: 1, top: "top-12", left: "left-[39%]" },
  { image: cardBrain, label: "Funding Structuring", caption: "MDF · grants", rotate: 6, top: "top-2", left: "left-[52%]" },
  { image: cardKey, label: "Redesign", caption: "Embed AI", rotate: 11, top: "top-16", left: "left-[66%]" },
  { image: cardBubble, label: "Refreeze", caption: "Team-owned", rotate: 16, top: "top-3", left: "left-[80%]" },
];

const HeroCardDeck = () => (
  <div className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] mb-8">
    {/* desktop: scattered */}
    <div className="hidden md:block absolute inset-0">
      {cards.map((c, i) => (
        <div key={c.label} className={`absolute ${c.top} ${c.left}`}>
          <TarotCard
            image={c.image}
            label={c.label}
            caption={c.caption}
            rotate={c.rotate}
            delay={0.08 * i}
            priority={i === 1}
          />
        </div>
      ))}
    </div>
    {/* mobile: horizontal scroll */}
    <div className="md:hidden flex gap-4 overflow-x-auto pb-6 px-2 -mx-6 snap-x snap-mandatory scrollbar-hide">
      {cards.map((c, i) => (
        <div key={c.label} className="snap-center shrink-0 first:pl-4">
          <TarotCard
            image={c.image}
            label={c.label}
            caption={c.caption}
            rotate={i % 2 === 0 ? -3 : 3}
            delay={0.05 * i}
            priority={i === 1}
          />
        </div>
      ))}
    </div>
  </div>
);

export default HeroCardDeck;
