/**
 * Lightweight analytics helper. Wraps Plausible if loaded, otherwise no-ops.
 * Add the Plausible script to index.html with your domain to start collecting.
 *
 * Usage:
 *   import { trackEvent } from "@/lib/analytics";
 *   trackEvent("cta_book_call", { location: "navbar" });
 */

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

export type AnalyticsEvent =
  | "cta_buy_training"
  | "cta_book_call"
  | "cta_take_score"
  | "cta_install_hermes"
  | "cta_funding_call"
  | "cta_view_resource"
  | "cta_newsletter";

export const trackEvent = (
  name: AnalyticsEvent,
  props?: Record<string, string | number | boolean>,
): void => {
  try {
    if (typeof window === "undefined") return;
    window.plausible?.(name, props ? { props } : undefined);
  } catch {
    // Swallow analytics errors — never block UX.
  }
};
