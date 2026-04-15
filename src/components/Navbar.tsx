import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "For Operations", to: "/for-operations" },
  { label: "For HR & L&D", to: "/for-hr" },
  { label: "For IT & Digital", to: "/for-it" },
  { label: "Programmes", to: "/programmes" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-site mx-auto px-[5%] flex items-center justify-between h-16">
        <Link to="/" className="text-lg font-semibold text-foreground tracking-tight">
          The Unlearning <span className="font-extrabold">School</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors hover:text-foreground ${
                location.pathname === link.to ? "text-foreground font-semibold" : "text-mid"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/assessment"
            className="ml-2 inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            Book Assessment →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-[5%] pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-mid hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/assessment"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded"
          >
            Book Assessment →
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
