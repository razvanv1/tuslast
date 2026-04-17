import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import cardWorkersUrl from "@/assets/card-workers.webp";

// Inject LCP preload as early as possible so the hashed asset URL is
// discoverable in the initial document, before React mounts.
const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.href = cardWorkersUrl;
preloadLink.type = "image/webp";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Defer-load only the non-critical font weights actually used after first paint.
// Inter 400/700 + DM Serif 400 are inlined in index.css. Italic is disabled globally,
// and shadcn's font-medium/semibold gracefully falls back to 400/700 with font-display:swap.
const loadDeferredFonts = () => {
  void import("@fontsource/jetbrains-mono/400.css");
};

if ("requestIdleCallback" in window) {
  (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(loadDeferredFonts, { timeout: 2000 });
} else {
  setTimeout(loadDeferredFonts, 1500);
}
