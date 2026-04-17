import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "AI for Non-Technical People", to: "/programmes/ai-for-non-technical-people" },
  { label: "Events", to: "/events" },
  { label: "Funding", to: "/funding" },
  { label: "Resources", to: "/resources" },
  { label: "Hermes Agent", to: "/hermes" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b-2 border-paper/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="The Unlearning School"
            width={406}
            height={203}
            decoding="async"
            className="h-[58px] md:h-[67px] w-auto object-contain invert brightness-200"
          />
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-6 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-red ${
                location.pathname === link.to ? "text-red" : "text-paper/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/assessment"
            className="ml-2 inline-flex items-center px-5 py-2.5 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
          >
            Assessment →
          </Link>
        </div>

        <button className="md:hidden p-2 text-paper" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-paper/10 bg-background px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70 hover:text-red border-b border-paper/5"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/assessment"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center px-5 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em]"
          >
            Assessment →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
