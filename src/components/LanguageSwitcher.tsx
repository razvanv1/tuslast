import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  /** "dark" = light text on dark bg (navbar). "light" = dark text on light bg. */
  variant?: "dark" | "light";
  className?: string;
}

const LanguageSwitcher = ({ variant = "dark", className = "" }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.startsWith("ro") ? "ro" : "en";

  const change = (lng: "en" | "ro") => {
    if (lng === current) return;
    void i18n.changeLanguage(lng);
  };

  const base =
    "font-mono text-[11px] uppercase tracking-[0.2em] transition-colors px-1.5 py-1";
  const activeColor = "text-red";
  const idleColor = variant === "dark" ? "text-paper/55 hover:text-paper" : "text-ink/55 hover:text-ink";
  const sep = variant === "dark" ? "text-paper/25" : "text-ink/25";

  return (
    <div className={`inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={() => change("en")}
        aria-label={t("language.switchTo", { lang: "English" })}
        aria-pressed={current === "en"}
        className={`${base} ${current === "en" ? activeColor : idleColor}`}
      >
        EN
      </button>
      <span className={`font-mono text-[11px] ${sep}`}>/</span>
      <button
        type="button"
        onClick={() => change("ro")}
        aria-label={t("language.switchTo", { lang: "Română" })}
        aria-pressed={current === "ro"}
        className={`${base} ${current === "ro" ? activeColor : idleColor}`}
      >
        RO
      </button>
    </div>
  );
};

export default LanguageSwitcher;
