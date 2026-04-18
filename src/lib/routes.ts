/**
 * Centralised route map for the bilingual site.
 * EN paths are the canonical (no prefix). RO paths mirror them under /ro/.
 * Used by SEO (hreflang), sitemap, and the language switcher.
 */
export const ROUTES: { en: string; ro: string }[] = [
  { en: "/", ro: "/ro" },
  { en: "/programmes/ai-for-non-technical-people", ro: "/ro/programmes/ai-for-non-technical-people" },
  { en: "/ai-adoption-score", ro: "/ro/ai-adoption-score" },
  { en: "/assessment", ro: "/ro/assessment" },
  { en: "/events", ro: "/ro/events" },
  { en: "/funding", ro: "/ro/funding" },
  { en: "/hermes", ro: "/ro/hermes" },
  { en: "/resources", ro: "/ro/resources" },
  { en: "/about", ro: "/ro/about" },
  { en: "/privacy-policy", ro: "/ro/privacy-policy" },
  { en: "/cookie-policy", ro: "/ro/cookie-policy" },
  { en: "/terms-and-conditions", ro: "/ro/terms-and-conditions" },
  { en: "/payment-success", ro: "/ro/payment-success" },
  { en: "/payment-canceled", ro: "/ro/payment-canceled" },
];

export const SITE_URL = "https://tuslast.lovable.app";

/** Given any pathname, return its EN canonical and RO counterpart. */
export const getAlternates = (pathname: string): { en: string; ro: string; current: "en" | "ro" } => {
  const isRo = pathname === "/ro" || pathname.startsWith("/ro/");
  const enPath = isRo ? pathname.replace(/^\/ro(\/|$)/, "/").replace(/\/+$/, "") || "/" : pathname;
  const match = ROUTES.find((r) => r.en === enPath);
  if (match) {
    return { en: `${SITE_URL}${match.en}`, ro: `${SITE_URL}${match.ro}`, current: isRo ? "ro" : "en" };
  }
  // Unknown route — mirror it
  const ro = enPath === "/" ? "/ro" : `/ro${enPath}`;
  return { en: `${SITE_URL}${enPath}`, ro: `${SITE_URL}${ro}`, current: isRo ? "ro" : "en" };
};
