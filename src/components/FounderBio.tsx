import { useTranslation } from "react-i18next";
import Section from "@/components/Section";
import { Kicker } from "@/components/Editorial";
import founderPortrait from "@/assets/founder-portrait.png";
import { trackEvent } from "@/lib/analytics";

/**
 * Home-page founder block. Wired-editorial split with photo on a paper card.
 * Full bio lives on /about — this is the condensed pitch + LinkedIn CTA.
 */
const FounderBio = () => {
  const { t } = useTranslation("home");
  const bullets = t("founder.bullets", { returnObjects: true }) as string[];

  return (
    <Section variant="dark">
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <div className="relative bg-paper p-3 card-shadow w-full max-w-[340px] mx-auto md:mx-0">
            <div className="aspect-[4/5] overflow-hidden bg-paper-dim">
              <img
                src={founderPortrait}
                alt="Răzvan Vâlceanu, founder of The Unlearning School"
                width={680}
                height={850}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-red text-paper px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em]">
              {t("founder.label")}
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <Kicker>{t("founder.kicker")}</Kicker>
          <h2 className="font-display text-4xl md:text-5xl text-paper leading-[0.95] mb-5">
            {t("founder.titleStart")} <em className="text-red">{t("founder.titleEm")}</em>
          </h2>
          <p className="font-display italic text-xl md:text-2xl text-paper/85 leading-snug mb-6 max-w-2xl">
            {t("founder.lead")}
          </p>
          <p className="text-paper/75 text-[15px] leading-relaxed mb-6 max-w-2xl">
            {t("founder.body")}
          </p>
          <ul className="border-t border-paper/15 max-w-2xl mb-8">
            {bullets.map((b, i) => (
              <li key={i} className="border-b border-paper/15 py-3 text-paper/80 text-[14px] leading-relaxed flex gap-4">
                <span className="font-mono text-red text-[10px] uppercase tracking-[0.25em] shrink-0 pt-0.5">0{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/razvanvalceanu/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("cta_view_resource", { location: "founder_bio_linkedin" })}
              className="inline-flex items-center px-6 py-3.5 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("founder.linkedin")} →
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3.5 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              {t("founder.aboutCta")} →
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FounderBio;
