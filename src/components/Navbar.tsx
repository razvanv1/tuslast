import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.webp";
import { BOOKING_URL } from "@/lib/booking";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link } from "@/components/LocalizedLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const onAssessment = location.pathname === "/assessment" || location.pathname === "/ro/assessment";

  const navLinks = [
    { label: t("nav.aiForWork"), to: "/programmes/ai-for-non-technical-people" },
    { label: t("nav.events"), to: "/events" },
    { label: t("nav.hermes"), to: "/hermes" },
    { label: t("nav.funding"), to: "/funding" },
    { label: t("nav.aiScore"), to: "/ai-adoption-score" },
    { label: t("nav.resources"), to: "/resources" },
    { label: t("nav.about"), to: "/about" },
  ];

  const bookingLabel = t("booking.label");

  const scrollToBook = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const desktopBookingClass =
    "ml-2 inline-flex items-center px-5 py-2.5 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors";
  const mobileBookingClass =
    "mt-4 inline-flex items-center px-5 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em]";

  // Active-state matching: strip the /ro prefix before comparing to canonical path
  const canonicalPath = location.pathname.replace(/^\/ro(\/|$)/, "/").replace(/\/+$/, "") || "/";

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
                canonicalPath === link.to ? "text-red" : "text-paper/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher variant="dark" className="ml-1" />
          {onAssessment ? (
            <button type="button" onClick={scrollToBook} className={desktopBookingClass}>
              {bookingLabel} →
            </button>
          ) : (
            <Link to={BOOKING_URL} className={desktopBookingClass}>
              {bookingLabel} →
            </Link>
          )}
        </div>

        <button
          className="md:hidden p-2 text-paper"
          onClick={() => setOpen(!open)}
          aria-label={t("nav.toggleMenu")}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-paper/10 bg-background px-6 pb-6 pt-2">
          <div className="py-3 border-b border-paper/5">
            <LanguageSwitcher variant="dark" />
          </div>
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
          {onAssessment ? (
            <button
              type="button"
              onClick={() => { setOpen(false); setTimeout(scrollToBook, 50); }}
              className={mobileBookingClass}
            >
              {bookingLabel} →
            </button>
          ) : (
            <Link
              to={BOOKING_URL}
              onClick={() => setOpen(false)}
              className={mobileBookingClass}
            >
              {bookingLabel} →
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
