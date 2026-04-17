import { useEffect } from "react";
import SEO from "@/components/SEO";

const sections = [
  { h: "1. Introduction", body: <p>These Terms and Conditions govern your use of The Unlearning School website and services. By accessing or using our website, you agree to be bound by these terms.</p> },
  { h: "2. Services", body: <p>We provide consulting, training, and program design services in funding intelligence, AI adoption, execution readiness, proposal support, and academy design. Specific scope and terms are agreed individually with each client.</p> },
  { h: "3. Intellectual Property", body: <p>All content on this website is the property of The Unlearning School and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.</p> },
  { h: "4. User Responsibilities", body: <ul className="space-y-2 list-disc pl-6"><li>Provide accurate and complete information when submitting forms</li><li>Not use the website for any unlawful purpose</li><li>Not interfere with the proper functioning of the website</li><li>Respect intellectual property rights of The Unlearning School</li></ul> },
  { h: "5. Working Calls", body: <p>The initial 30-minute working call is provided free of charge. Subsequent engagements are subject to separate agreements. We reserve the right to reschedule or cancel calls with reasonable notice.</p> },
  { h: "6. Limitation of Liability", body: <p>The Unlearning School provides services on an "as is" basis. We do not guarantee specific outcomes. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages.</p> },
  { h: "7. External Links", body: <p>Our website may contain links to third-party websites. We are not responsible for their content, privacy policies, or practices.</p> },
  { h: "8. Governing Law", body: <p>These Terms are governed by the laws of Romania. Disputes shall be resolved by the competent courts in Bucharest, Romania.</p> },
  { h: "9. Changes to These Terms", body: <p>We reserve the right to modify these Terms at any time. Changes will be posted with an updated revision date. Continued use of the website constitutes acceptance.</p> },
  { h: "10. Contact", body: <p>Questions: hello@unlearning.ro.</p> },
];

const TermsAndConditions = () => {
  useEffect(() => { document.title = "Terms & Conditions, The Unlearning School"; }, []);
  return (
    <>
      <SEO title="Terms & Conditions" description="Terms and conditions for The Unlearning School services and website." noindex />
      <section className="bg-background text-paper border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4"> Legal</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-4">Terms & Conditions.</h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-paper text-ink">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">{s.h}</h2>
              <div className="text-ink/75 text-[15px] leading-relaxed">{s.body}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
