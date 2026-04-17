import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Convert render-blocking <link rel="stylesheet"> tags injected by Vite into
// non-blocking preloads with a synchronous swap-on-load. The full CSS still
// applies before paint of any styled element, but the parser is no longer
// blocked waiting on the network round-trip — improves FCP/LCP.
const nonBlockingCss = (): Plugin => ({
  name: "non-blocking-css",
  apply: "build",
  enforce: "post",
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet"(?:\s+crossorigin)?\s+href="([^"]+)">/g,
      (_m, href) =>
        `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`,
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), nonBlockingCss()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return;
          if (id.includes("react-dom") || id.includes("/react/") || id.includes("scheduler") || id.includes("react-router")) {
            return "react-vendor";
          }
          if (id.includes("framer-motion") || id.includes("motion-dom") || id.includes("motion-utils")) {
            return "motion-vendor";
          }
          if (id.includes("@radix-ui") || id.includes("@tanstack")) {
            return "ui-vendor";
          }
        },
      },
    },
  },
}));
