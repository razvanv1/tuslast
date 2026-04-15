const Blockquote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 text-mid italic text-base leading-relaxed max-w-2xl">
    {children}
  </blockquote>
);

export default Blockquote;
