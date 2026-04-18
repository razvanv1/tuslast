import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import lcpCardUrl from "@/assets/card-assessment.webp";
import interLatinUrl from "@fontsource/inter/files/inter-latin-400-normal.woff2?url";
import dmSerifLatinUrl from "@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2?url";
import jetbrainsMonoUrl from "@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2?url";

// Inject LCP preload as early as possible so the hashed asset URL is
// discoverable in the initial document, before React mounts.
const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.href = lcpCardUrl;
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

// Defer-load JetBrains Mono (used only for small uppercase labels). Inject the
// @font-face rule directly with the woff2 URL to skip the intermediate CSS file
// that would otherwise extend the critical request chain (document → JS → CSS → woff2).
const loadDeferredFonts = () => {
  const style = document.createElement("style");
  style.textContent = `@font-face{font-family:'JetBrains Mono';font-style:normal;font-weight:400;font-display:swap;src:url('${jetbrainsMonoUrl}') format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}`;
  document.head.appendChild(style);
};

if ("requestIdleCallback" in window) {
  (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(loadDeferredFonts, { timeout: 2000 });
} else {
  setTimeout(loadDeferredFonts, 1500);
}
