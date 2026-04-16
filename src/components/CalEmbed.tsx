import { useEffect } from "react";

// Cal.com inline embed.
// Replace CAL_LINK with your real Cal.com event link, e.g. "yourname/30min".
const CAL_LINK = "razvan-valceanu/assessment";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

const CalEmbed = () => {
  useEffect(() => {
    // Inject Cal embed script once
    if (!window.Cal) {
      // Vanilla loader (adapted from Cal.com docs)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) {
          a.q = a.q || [];
          a.q.push(ar);
        };
        const d = C.document;
        C.Cal =
          C.Cal ||
          function () {
            // eslint-disable-next-line prefer-rest-params
            const cal = C.Cal;
            // eslint-disable-next-line prefer-rest-params
            const ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api: any = function () {
                // eslint-disable-next-line prefer-rest-params
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else {
                p(cal, ar);
              }
              return;
            }
            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");
    }

    window.Cal("init", "assessment", { origin: "https://cal.com" });
    window.Cal.ns.assessment("inline", {
      elementOrSelector: "#cal-embed-target",
      config: { layout: "month_view", theme: "light" },
      calLink: CAL_LINK,
    });
    window.Cal.ns.assessment("ui", {
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
