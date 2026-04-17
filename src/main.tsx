import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Defer-load non-critical font weights after first paint so they don't block FCP/LCP
const loadDeferredFonts = () => {
  void import("@fontsource/inter/500.css");
  void import("@fontsource/inter/600.css");
  void import("@fontsource/inter/800.css");
  void import("@fontsource/dm-serif-display/400-italic.css");
  void import("@fontsource/jetbrains-mono/400.css");
  void import("@fontsource/jetbrains-mono/500.css");
  void import("@fontsource/jetbrains-mono/700.css");
};

if ("requestIdleCallback" in window) {
  (window as any).requestIdleCallback(loadDeferredFonts, { timeout: 2000 });
} else {
  setTimeout(loadDeferredFonts, 1500);
}
