import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface LangRouteProps {
  lang: "en" | "ro";
  children: ReactNode;
}

/**
 * Forces the i18n language based on URL prefix.
 * Wraps every <Route> element so /ro/* renders in RO and / (EN) in EN
 * regardless of stored preference. The user's manual switcher choice still
 * persists in localStorage but URL wins while on a prefixed route.
 */
const LangRoute = ({ lang, children }: LangRouteProps) => {
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== lang) {
      void i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
  return <>{children}</>;
};

export default LangRoute;
