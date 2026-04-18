import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import roCommon from "./locales/ro/common.json";
import roHome from "./locales/ro/home.json";

const STORAGE_KEY = "tus-lang";

const stored =
  typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
const initial = stored === "ro" || stored === "en" ? stored : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, home: enHome },
    ro: { common: roCommon, home: roHome },
  },
  lng: initial,
  fallbackLng: "en",
  defaultNS: "common",
  ns: ["common", "home"],
  interpolation: { escapeValue: false },
  returnNull: false,
});

if (typeof document !== "undefined") {
  document.documentElement.lang = initial;
}

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;
export { STORAGE_KEY as LANG_STORAGE_KEY };
