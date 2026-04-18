import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Link } from "@/components/LocalizedLink";

/**
 * Desktop hover-dropdown / mobile click-dropdown for the Programmes group.
 * Active when current path is one of the grouped routes.
 */
const ProgrammesDropdown = ({ onItemClick }: { onItemClick?: () => void }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  const items = [
    { label: t("nav.aiForWork"), to: "/programmes/ai-for-non-technical-people" },
    { label: t("nav.hermes"), to: "/hermes" },
    { label: t("nav.events"), to: "/events" },
    { label: t("nav.funding"), to: "/funding" },
  ];

  const canonicalPath = location.pathname.replace(/^\/ro(\/|$)/, "/").replace(/\/+$/, "") || "/";
  const groupActive = items.some((it) => canonicalPath === it.to);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-red flex items-center gap-1.5 ${
          groupActive ? "text-red" : "text-paper/70"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {t("nav.programmes")}
        <span aria-hidden className={`text-[8px] transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div
          className="absolute left-0 top-full pt-3 z-50 min-w-[260px]"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-background border-2 border-paper/15 shadow-2xl">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => { setOpen(false); onItemClick?.(); }}
                className={`block px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] border-b border-paper/10 last:border-b-0 transition-colors hover:bg-red hover:text-paper ${
                  canonicalPath === it.to ? "text-red bg-paper/5" : "text-paper/80"
                }`}
              >
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgrammesDropdown;
