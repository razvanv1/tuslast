import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "tus-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const show = () => setTimeout(() => setVisible(true), 3000);
      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(show);
      } else {
        show();
      }
    }
  }, []);

  const close = (value: "accepted" | "declined") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-paper border-t-2 border-ink/15">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-2"> Cookies</p>
          <p className="text-ink/80 text-sm leading-relaxed max-w-3xl">
            We use essential cookies to make this site work and analytics cookies to understand how it is used. See our{" "}
            <Link to="/cookie-policy" className="text-red hover:underline">Cookie Policy</Link> and{" "}
            <Link to="/privacy-policy" className="text-red hover:underline">Privacy Policy</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => close("declined")}
            className="px-5 py-2.5 border border-ink/40 text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
          >
            Essential only
          </button>
          <button
            onClick={() => close("accepted")}
            className="px-5 py-2.5 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper transition-colors"
          >
            Accept all
          </button>
          <button
            onClick={() => close("declined")}
            aria-label="Close"
            className="p-2 text-ink/50 hover:text-ink transition-colors"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
