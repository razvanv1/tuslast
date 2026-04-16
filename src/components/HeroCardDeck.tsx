import TarotCard from "./TarotCard";
import cardTool from "@/assets/card-tool.png";
import cardBrain from "@/assets/card-brain.png";
import cardWorkers from "@/assets/card-workers.png";
import cardBubble from "@/assets/card-bubble.png";
import cardEye from "@/assets/card-eye.png";
import cardGears from "@/assets/card-gears.png";
import cardKey from "@/assets/card-key.png";

const cards = [
  { image: cardTool, label: "AI as Weapon", caption: "Card I", rotate: -14, top: "top-2", left: "left-[2%]" },
  { image: cardWorkers, label: "AI as Worker", caption: "Card II", rotate: -7, top: "top-12", left: "left-[16%]" },
  { image: cardBrain, label: "AI as Teacher", caption: "Card III", rotate: -2, top: "top-0", left: "left-[31%]" },
  { image: cardEye, label: "AI as Witness", caption: "Card IV", rotate: 4, top: "top-16", left: "left-[46%]" },
  { image: cardGears, label: "AI as Process", caption: "Card V", rotate: 9, top: "top-4", left: "left-[60%]" },
  { image: cardBubble, label: "AI as Bubble", caption: "Card VI", rotate: 14, top: "top-20", left: "left-[74%]" },
  { image: cardKey, label: "AI as Unlock", caption: "Card VII", rotate: 19, top: "top-2", left: "left-[86%]" },
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
