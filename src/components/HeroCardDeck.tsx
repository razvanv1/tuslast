import TarotCard from "./TarotCard";
import cardTool from "@/assets/card-tool.png";
import cardBrain from "@/assets/card-brain.png";
import cardWorkers from "@/assets/card-workers.png";
import cardBubble from "@/assets/card-bubble.png";
import cardEye from "@/assets/card-eye.png";
import cardGears from "@/assets/card-gears.png";
import cardKey from "@/assets/card-key.png";

const cards = [
  { image: cardTool, label: "Assessment", caption: "Free · 1 session", rotate: -14, top: "top-2", left: "left-[2%]" },
  { image: cardWorkers, label: "AI for Non-Technical People", caption: "Modular · cohort", rotate: -7, top: "top-12", left: "left-[16%]" },
  { image: cardGears, label: "Events & Keynotes", caption: "90 min – 2 days", rotate: -2, top: "top-0", left: "left-[31%]" },
  { image: cardBrain, label: "Funding Structuring", caption: "MDF · grants", rotate: 4, top: "top-16", left: "left-[46%]" },
  { image: cardEye, label: "Unfreeze", caption: "The mechanism", rotate: 9, top: "top-4", left: "left-[60%]" },
  { image: cardKey, label: "Redesign", caption: "Embed AI", rotate: 14, top: "top-20", left: "left-[74%]" },
  { image: cardBubble, label: "Refreeze", caption: "Team-owned", rotate: 19, top: "top-2", left: "left-[86%]" },
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
          />
        </div>
      ))}
    </div>
  </div>
);

export default HeroCardDeck;
