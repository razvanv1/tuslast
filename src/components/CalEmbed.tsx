import { useEffect } from "react";

// Cal.com inline embed loader.
// To wire this to your real Cal account, replace CAL_LINK with "yourname/30min".
const CAL_LINK = "razvan-valceanu/assessment";

declare global {
  interface Window {
    Cal?: ((command: string, ...args: unknown[]) => void) & { ns?: Record<string, unknown> };
  }
}

const CalEmbed = () => {
  useEffect(() => {
    if (window.Cal) return;
    // Official Cal embed snippet (vanilla)
    (function (C: Window, A: string, L: string) {
      const p = function (a: ((command: string, ...args: unknown[]) => void) & { q?: unknown[] }, ar: unknown[]) {
        a.q = a.q || [];
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal!;
          const ar = args;
          if (!(cal as unknown as { loaded?: boolean }).loaded) {
            (cal as unknown as { ns: Record<string, unknown> }).ns = {};
            (cal as unknown as { q: unknown[] }).q = (cal as unknown as { q?: unknown[] }).q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            (cal as unknown as { loaded: boolean }).loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...iargs: unknown[]) {
              p(api as unknown as ((command: string, ...args: unknown[]) => void) & { q?: unknown[] }, iargs);
            };
            const namespace = ar[1] as string;
            (api as unknown as { q: unknown[] }).q = (api as unknown as { q?: unknown[] }).q || [];
            if (typeof namespace === "string") {
              (cal as unknown as { ns: Record<string, unknown> }).ns[namespace] = (cal as unknown as { ns: Record<string, unknown> }).ns[namespace] || api;
              p((cal as unknown as { ns: Record<string, ((command: string, ...args: unknown[]) => void) & { q?: unknown[] } }>).ns[namespace], ar);
              p(cal as unknown as ((command: string, ...args: unknown[]) => void) & { q?: unknown[] }, ["initNamespace", namespace]);
            } else {
              p(cal as unknown as ((command: string, ...args: unknown[]) => void) & { q?: unknown[] }, ar);
            }
            return;
          }
          p(cal as unknown as ((command: string, ...args: unknown[]) => void) & { q?: unknown[] }, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", "assessment", { origin: "https://cal.com" });
    window.Cal!.ns!.assessment &&
      (window.Cal!.ns!.assessment as (command: string, ...args: unknown[]) => void)("inline", {
        elementOrSelector: "#cal-embed-target",
        config: { layout: "month_view", theme: "light" },
        calLink: CAL_LINK,
      });
    (window.Cal!.ns!.assessment as (command: string, ...args: unknown[]) => void)("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      theme: "light",
      cssVarsPerTheme: {
        light: { "cal-brand": "#dc2626" },
      },
    });
  }, []);

  return (
    <div className="border-2 border-ink/15 bg-paper">
      <div
        id="cal-embed-target"
        className="w-full min-h-[640px]"
        style={{ overflow: "scroll" }}
      />
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40 py-4 border-t border-ink/15">
        Powered by Cal.com · {CAL_LINK}
      </p>
    </div>
  );
};

export default CalEmbed;
