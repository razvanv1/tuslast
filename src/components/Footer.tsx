import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-background border-t-2 border-paper/10">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">Vol. 01 — The AI Unlearning Issue</p>
          <h3 className="font-display text-4xl md:text-5xl text-paper leading-[0.95] mb-4">
            Stop training. <em className="text-red">Start unlearning.</em>
          </h3>
          <p className="text-paper/60 text-sm max-w-md leading-relaxed">
            We help organisations close the gap between AI deployment and AI usage — one redesigned process at a time. Romania &amp; EU.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">Sections</p>
          <ul className="space-y-2 text-paper/80 text-sm">
            <li><Link to="/for-operations" className="hover:text-red transition-colors">For Operations</Link></li>
            <li><Link to="/for-hr" className="hover:text-red transition-colors">For HR &amp; L&amp;D</Link></li>
            <li><Link to="/for-it" className="hover:text-red transition-colors">For IT &amp; Digital</Link></li>
            <li><Link to="/programmes" className="hover:text-red transition-colors">Programmes</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/40 mb-4">Masthead</p>
          <ul className="space-y-2 text-paper/80 text-sm">
            <li><Link to="/about" className="hover:text-red transition-colors">About</Link></li>
            <li><Link to="/assessment" className="hover:text-red transition-colors">Book Assessment</Link></li>
            <li><a href="mailto:contact@unlearning.ro" className="hover:text-red transition-colors">contact@unlearning.ro</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10 pt-6 flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
        <span>© {new Date().getFullYear()} The Unlearning School · EU</span>
        <span>Issue 04 · Printed on the open web</span>
      </div>
    </div>
  </footer>
);

export default Footer;
