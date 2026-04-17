const Blockquote = ({ children, attribution }: { children: React.ReactNode; attribution?: string }) => (
  <figure className="my-12 max-w-3xl">
    <blockquote className="font-display text-3xl md:text-5xl leading-[1.05] text-paper">
      <span className="text-red text-6xl leading-none mr-1 align-top">"</span>
      <em className="not-italic">{children}</em>
      <span className="text-red text-6xl leading-none ml-1 align-top">"</span>
    </blockquote>
    {attribution && (
      <figcaption className="mt-6 border-t border-paper/15 pt-4">
        <span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] bg-red text-paper px-3 py-1.5">
          {attribution}
        </span>
      </figcaption>
    )}
  </figure>
);

export default Blockquote;
