import { useCopy } from "./copy";

const BREVO_URL = "https://meet.brevo.com/razvan-valceanu";

const Confirmation = () => {
  const t = useCopy();
  return (
    <div className="p-8 md:p-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red mb-4">
        {t.confirm.eyebrow}
      </p>
      <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">
        {t.confirm.title}
      </h3>
      <p className="text-ink/75 text-[15px] leading-relaxed mb-8 max-w-lg">
        {t.confirm.bodyPre}
        <em className="text-red not-italic">{t.confirm.bodyEm}</em>
        {t.confirm.bodyPost}
      </p>
      <a
        href={BREVO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-7 py-4 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink transition-colors"
      >
        {t.confirm.cta}
      </a>
    </div>
  );
};

export default Confirmation;
