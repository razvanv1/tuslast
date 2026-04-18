import { useTranslation } from "react-i18next";

/**
 * Returns a function that prefixes EN-canonical paths with /ro when
 * the current language is RO. Use for every internal <Link to>.
 *
 *   const lp = useLocalizedPath();
 *   <Link to={lp("/about")}>About</Link>
 */
export const useLocalizedPath = () => {
  const { i18n } = useTranslation();
  const isRo = i18n.language?.startsWith("ro");
  return (path: string): string => {
    if (!isRo) return path;
    if (path === "/") return "/ro";
    if (path.startsWith("/ro/") || path === "/ro") return path;
    if (!path.startsWith("/")) return path; // external (mailto:, tel:, https://)
    return `/ro${path}`;
  };
};
