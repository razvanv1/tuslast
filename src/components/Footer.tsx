import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="max-w-site mx-auto px-[5%] py-12">
      <div className="mb-6">
        <span className="text-lg font-semibold text-foreground tracking-tight">
          The Unlearning <span className="font-extrabold">School</span>
        </span>
        <p className="text-sm text-mid mt-1">
          Behaviour change practice for AI adoption.<br />Romania &amp; EU.
        </p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mid mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <Link to="/for-operations" className="hover:text-foreground">For Operations</Link>
        <Link to="/for-hr" className="hover:text-foreground">For HR &amp; L&amp;D</Link>
        <Link to="/for-it" className="hover:text-foreground">For IT &amp; Digital</Link>
        <Link to="/programmes" className="hover:text-foreground">Programmes</Link>
        <Link to="/about" className="hover:text-foreground">About</Link>
        <Link to="/assessment" className="hover:text-foreground">Book Assessment</Link>
      </div>
      <p className="text-xs text-mid">
        contact@unlearning.ro
      </p>
      <p className="text-xs text-mid mt-2">
        © 2026 The Unlearning School · Privacy Policy
      </p>
    </div>
  </footer>
);

export default Footer;
