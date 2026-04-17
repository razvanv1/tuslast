import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If the URL has a hash, try to scroll to the matching element.
    // We retry briefly because the target section may be lazy-loaded.
    if (hash) {
      const id = hash.replace("#", "");
      let attempts = 0;
      const maxAttempts = 20; // ~1s at 50ms

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        attempts += 1;
        if (attempts < maxAttempts) {
          window.setTimeout(tryScroll, 50);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      tryScroll();
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
