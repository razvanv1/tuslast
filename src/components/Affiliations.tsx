import Section from "@/components/Section";

const institutional = [
  { name: "Pact for Skills", org: "European Commission" },
  { name: "EPALE", org: "Adult Learning in Europe" },
  { name: "Enterprise Europe Network", org: "SME Support Network" },
  { name: "Community for Educational Innovation", org: "Erasmus+ Initiative, DG EAC" },
];

const ecosystem = [
  { name: "Google for Startups", org: "Founder community" },
  { name: "Lovable Ambassador", org: "AI builder network" },
  { name: "DEEP Ecosystems", org: "Startup ecosystem intelligence" },
];

interface AffiliationsProps {
  /** "paper" = cream bg / ink text · "dark" = default dark bg */
  variant?: "paper" | "dark";
}

const Affiliations = ({ variant = "paper" }: AffiliationsProps) => {
  const isPaper = variant === "paper";
  const textMain = isPaper ? "text-ink" : "text-paper";
  const textMuted = isPaper ? "text-ink/65" : "text-paper/65";
  const textFaint = isPaper ? "text-ink/45" : "text-paper/45";
  const border = isPaper ? "border-ink/15" : "border-paper/15";
  const cardBg = isPaper ? "bg-paper" : "bg-background";
  const stamp = isPaper ? "bg-ink text-paper" : "bg-paper text-ink";

  return (
    <Section variant={variant === "paper" ? "paper" : "dark"} decor="edge-right">
      {/* Header — authority statement */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
        <div className="md:col-span-4">
          <p className={`font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4`}>
            Affiliations & Networks
          </p>
          <div className={`inline-flex items-center gap-3 ${stamp} px-3 py-1.5 mb-6`}>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Verified</span>
            <span className="font-mono text-[9px] tracking-[0.2em] opacity-70">EU · 2025</span>
          </div>
          <h2 className={`font-display text-4xl md:text-5xl ${textMain} leading-[0.95]`}>
            Connected to <em className="text-red">major European</em> organizations, learning networks, and innovation initiatives.
          </h2>
        </div>
        <div className={`md:col-span-8 md:border-l ${border} md:pl-10 flex items-center`}>
          <p className={`text-[15px] leading-relaxed ${textMuted} max-w-2xl`}>
            The work is informed by participation in selected memberships, networks, and initiatives connected to <span className={textMain}>education, skills, innovation, entrepreneurship, and the future of work</span>. None of this is sponsorship — these are working affiliations that keep the practice grounded in current European policy and ecosystem reality.
          </p>
        </div>
      </div>

      {/* Institutional grid */}
      <div className={`border-t-2 border-b-2 ${border} divide-y ${border}`}>
        <div className="grid grid-cols-12 py-3">
          <p className={`col-span-12 font-mono text-[10px] uppercase tracking-[0.3em] ${textFaint}`}>
            01 — Institutional · Policy & learning networks
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {institutional.map((item, i) => (
            <div
              key={item.name}
              className={`flex items-baseline gap-5 p-6 md:p-7 ${i < institutional.length - 1 ? `border-b ${border}` : ""} ${i % 2 === 0 ? `md:border-r ${border}` : ""}`}
            >
              <span className="font-mono text-red text-[11px] tabular-nums tracking-[0.15em] pt-1">
                0{i + 1}
              </span>
              <div className="flex-1">
                <p className={`font-display text-2xl md:text-[28px] ${textMain} leading-tight`}>
                  {item.name}
                </p>
                <p className={`font-mono text-[10px] uppercase tracking-[0.25em] ${textFaint} mt-2`}>
                  {item.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className={`font-mono text-[10px] uppercase tracking-[0.25em] ${textFaint} mt-4 mb-16`}>
        Selected memberships, networks, and initiatives relevant to our work.
      </p>

      {/* Ecosystem block */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
        <div className="md:col-span-4">
          <p className={`font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4`}>
            02 — Builder ecosystems
          </p>
          <h3 className={`font-display text-3xl md:text-4xl ${textMain} leading-tight`}>
            Connected to <em className="text-red">startup and technology</em> ecosystems.
          </h3>
        </div>
        <div className={`md:col-span-8 md:border-l ${border} md:pl-10 flex items-center`}>
          <p className={`text-[15px] leading-relaxed ${textMuted} max-w-2xl`}>
            The work is also shaped through selected startup and builder ecosystems that keep the company close to <span className={textMain}>practical AI workflows, current product thinking, and fast-moving technology communities</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-current/10">
        {ecosystem.map((item, i) => (
          <article key={item.name} className={`${cardBg} p-7 md:p-8 border-2 ${border}`}>
            <span className="font-mono text-red text-[11px] tabular-nums tracking-[0.15em]">
              0{i + 1}
            </span>
            <p className={`font-display text-2xl md:text-3xl ${textMain} leading-tight mt-4`}>
              {item.name}
            </p>
            <p className={`font-mono text-[10px] uppercase tracking-[0.25em] ${textFaint} mt-3`}>
              {item.org}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Affiliations;
