import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import cardWorkersUrl from "@/assets/card-workers.webp";
import interLatinUrl from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
import dmSerifLatinUrl from "@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2?url";

// Inject LCP preload as early as possible so the hashed asset URL is
// discoverable in the initial document, before React mounts.
const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.href = cardWorkersUrl;
preloadLink.type = "image/webp";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);

// Preload above-the-fold fonts so the browser fetches them in parallel with
// the render-blocking CSS rather than waiting for CSS parse. Shortens the
// critical chain and improves FCP.
[interLatinUrl, dmSerifLatinUrl].forEach((href) => {
  const l = document.createElement("link");
  l.rel = "preload";
  l.as = "font";
  l.type = "font/woff2";
  l.href = href;
  l.crossOrigin = "anonymous";
  document.head.appendChild(l);
});

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Defer-load JetBrains Mono (used only for small uppercase labels) via injected
// <link> rather than an ES import. An ES `import` of a CSS file gets bundled by
// Vite into the render-blocking critical CSS chain even when called inside
// requestIdleCallback. Injecting a <link> at idle keeps it fully off the critical path.
const loadDeferredFonts = () => {
  // Resolve the hashed URL via Vite's asset pipeline without making it render-blocking.
  import("@fontsource/jetbrains-mono/400.css?url").then(({ default: href }) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });
};

if ("requestIdleCallback" in window) {
  (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(loadDeferredFonts, { timeout: 2000 });
} else {
  setTimeout(loadDeferredFonts, 1500);
}
