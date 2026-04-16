interface MarqueeProps {
  items: string[];
}

const Marquee = ({ items }: MarqueeProps) => {
  const doubled = [...items, ...items];
  return (
    <div className="bg-red text-paper border-y-2 border-paper/10 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((it, i) => (
          <span key={i} className="font-display text-3xl md:text-5xl mx-8 inline-flex items-center gap-8">
            {it}
            <span className="text-paper/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
