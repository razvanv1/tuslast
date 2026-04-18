import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAssessment from "./locales/en/assessment.json";
import enScore from "./locales/en/score.json";
import enProgrammes from "./locales/en/programmes.json";
import enEvents from "./locales/en/events.json";
import enFunding from "./locales/en/funding.json";
import enHermes from "./locales/en/hermes.json";
import enResources from "./locales/en/resources.json";
import enAbout from "./locales/en/about.json";
import enLegal from "./locales/en/legal.json";
import enMisc from "./locales/en/misc.json";
import roCommon from "./locales/ro/common.json";
import roHome from "./locales/ro/home.json";
import roAssessment from "./locales/ro/assessment.json";
import roScore from "./locales/ro/score.json";
import roProgrammes from "./locales/ro/programmes.json";
import roEvents from "./locales/ro/events.json";
import roFunding from "./locales/ro/funding.json";
import roHermes from "./locales/ro/hermes.json";
import roResources from "./locales/ro/resources.json";
import roAbout from "./locales/ro/about.json";
import roLegal from "./locales/ro/legal.json";
import roMisc from "./locales/ro/misc.json";

const STORAGE_KEY = "tus-lang";

const detectBrowserLang = (): "en" | "ro" => {
  if (typeof navigator === "undefined") return "en";
  const langs = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);
  for (const l of langs) {
    const code = l.toLowerCase().split("-")[0];
    if (code === "ro") return "ro";
    if (code === "en") return "en";
  }
  return "en";
};

const stored =
  typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
const initial = stored === "ro" || stored === "en" ? stored : detectBrowserLang();

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      assessment: enAssessment,
      score: enScore,
      programmes: enProgrammes,
      events: enEvents,
      funding: enFunding,
      hermes: enHermes,
      resources: enResources,
      about: enAbout,
      legal: enLegal,
      misc: enMisc,
    },
    ro: {
      common: roCommon,
      home: roHome,
      assessment: roAssessment,
      score: roScore,
      programmes: roProgrammes,
      events: roEvents,
      funding: roFunding,
      hermes: roHermes,
      resources: roResources,
      about: roAbout,
      legal: roLegal,
      misc: roMisc,
    },
  },
  lng: initial,
  fallbackLng: "en",
  defaultNS: "common",
  ns: ["common", "home", "assessment", "score", "programmes", "events", "funding", "hermes", "resources", "about", "legal", "misc"],
  interpolation: { escapeValue: false },
  returnNull: false,
  returnObjects: true,
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
