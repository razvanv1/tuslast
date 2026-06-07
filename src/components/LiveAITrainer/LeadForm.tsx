import { useState } from "react";
import type { LeadData } from "./types";
import { useCopy } from "./copy";

interface LeadFormProps {
  onSubmit: (data: LeadData) => void;
  submitting: boolean;
}

const EMPLOYEE_OPTIONS: LeadData["employees"][] = ["1-10", "11-50", "51-200", "200+"];

const inputClass =
  "w-full bg-transparent border-b border-ink/30 py-2.5 text-ink placeholder:text-ink/35 focus:border-red focus:outline-none transition-colors";
const labelClass =
  "block font-mono text-[10px] uppercase tracking-[0.25em] text-ink/60 mb-1";

const LeadForm = ({ onSubmit, submitting }: LeadFormProps) => {
  const t = useCopy();
  const [data, setData] = useState<LeadData>({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "11-50",
    consent: false,
  });

  const valid =
    data.name.trim() &&
    /\S+@\S+\.\S+/.test(data.email) &&
    data.company.trim() &&
    data.role.trim() &&
    data.consent;

  const set = <K extends keyof LeadData>(k: K, v: LeadData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (valid && !submitting) onSubmit(data);
      }}
      className="border-t border-ink/15 pt-6 mt-6 space-y-5"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-red">
        {t.lead.eyebrow}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="lf-name" className={labelClass}>{t.lead.name}</label>
          <input id="lf-name" className={inputClass} value={data.name}
            onChange={(e) => set("name", e.target.value)} required />
        </div>
        <div>
          <label htmlFor="lf-email" className={labelClass}>{t.lead.email}</label>
          <input id="lf-email" type="email" className={inputClass} value={data.email}
            onChange={(e) => set("email", e.target.value)} required />
        </div>
        <div>
          <label htmlFor="lf-company" className={labelClass}>{t.lead.company}</label>
          <input id="lf-company" className={inputClass} value={data.company}
            onChange={(e) => set("company", e.target.value)} required />
        </div>
        <div>
          <label htmlFor="lf-role" className={labelClass}>{t.lead.role}</label>
          <input id="lf-role" className={inputClass} value={data.role}
            onChange={(e) => set("role", e.target.value)} required />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="lf-emp" className={labelClass}>{t.lead.employees}</label>
          <select id="lf-emp" className={inputClass}
            value={data.employees}
            onChange={(e) => set("employees", e.target.value as LeadData["employees"])}>
            {EMPLOYEE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <label className="flex items-start gap-3 text-ink/70 text-[13px] leading-snug cursor-pointer">
        <input type="checkbox" className="mt-1 accent-red"
          checked={data.consent}
          onChange={(e) => set("consent", e.target.checked)} />
        <span>{t.lead.consent}</span>
      </label>
      <button
        type="submit"
        disabled={!valid || submitting}
        className="inline-flex items-center px-7 py-4 bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-red transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {submitting ? t.lead.submitting : t.lead.submit}
      </button>
    </form>
  );
};

export default LeadForm;
