import { useEffect } from "react";

const sections = [
  { h: "1. Introduction", body: <p>The Unlearning School ("we", "us", "our") is committed to protecting the privacy of visitors and users of our website. This Privacy Policy explains how we collect, use, store and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable Romanian data protection laws.</p> },
  { h: "2. Data Controller", body: <p>The data controller responsible for your personal data is:<br /><strong className="text-ink">The Unlearning School</strong><br />Address: 1, Aleea Pasărea în Văzduh, București, Romania<br />Email: hello@unlearning.ro<br />Phone: +40 722 598 346</p> },
  { h: "3. What Data We Collect", body: <ul className="space-y-2 list-disc pl-6"><li>Contact information (name, email, phone) when you submit a form or book a call</li><li>Communication data (messages, inquiries through our contact forms)</li><li>Technical data (IP address, browser type, device, cookies) collected automatically</li><li>Usage data (pages visited, time spent, navigation patterns)</li><li>Newsletter subscription data</li></ul> },
  { h: "4. How We Use Your Data", body: <ul className="space-y-2 list-disc pl-6"><li>Respond to your inquiries and provide requested services</li><li>Schedule and manage working calls</li><li>Send newsletter updates (only with explicit consent)</li><li>Improve our website through analytics</li><li>Comply with legal obligations</li></ul> },
  { h: "5. Legal Basis for Processing", body: <ul className="space-y-2 list-disc pl-6"><li><strong>Consent:</strong> for newsletter and non-essential cookies</li><li><strong>Legitimate interest:</strong> for analytics and service improvement</li><li><strong>Contractual necessity:</strong> for services you have requested</li><li><strong>Legal obligation:</strong> for compliance with applicable laws</li></ul> },
  { h: "6. Data Sharing", body: <p>We do not sell your personal data. We may share data with trusted third-party service providers (email, analytics, scheduling) bound by GDPR-compliant data processing agreements.</p> },
  { h: "7. Data Retention", body: <p>We retain personal data only as long as necessary or required by law. Contact form data is retained up to 2 years. Newsletter data is retained until you unsubscribe.</p> },
  { h: "8. Your Rights", body: <><p className="mb-3">Under the GDPR you have the right to:</p><ul className="space-y-2 list-disc pl-6"><li>Access your personal data</li><li>Rectify inaccurate or incomplete data</li><li>Request erasure ("right to be forgotten")</li><li>Restrict processing of your data</li><li>Object to processing</li><li>Data portability</li><li>Withdraw consent at any time</li></ul><p className="mt-4">To exercise any of these rights, contact us at hello@unlearning.ro.</p></> },
  { h: "9. Cookies", body: <p>Our website uses cookies. See our <a href="/cookie-policy" className="text-red hover:underline">Cookie Policy</a> for details.</p> },
  { h: "10. Contact", body: <p>Questions or rights requests:<br />Email: hello@unlearning.ro<br />Phone: +40 722 598 346<br />You also have the right to lodge a complaint with the Romanian National Supervisory Authority for Personal Data Processing (ANSPDCP).</p> },
];

const PrivacyPolicy = () => {
  useEffect(() => { document.title = "Privacy Policy — The Unlearning School"; }, []);
  return (
    <>
      <section className="bg-background text-paper border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">— Legal</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-4">Privacy Policy.</h1>
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

export default PrivacyPolicy;
