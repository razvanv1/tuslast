import { useEffect } from "react";
import SEO from "@/components/SEO";

const cookieTypes = [
  { h: "Essential Cookies", body: "Necessary for the website to function. Page navigation, secure areas. The website cannot function properly without them." },
  { h: "Analytics Cookies", body: "Help us understand how visitors interact with the site by collecting and reporting information anonymously." },
  { h: "Functional Cookies", body: "Enable enhanced functionality and personalisation, such as remembering your cookie consent preferences." },
];

const CookiePolicy = () => {
  useEffect(() => { document.title = "Cookie Policy, The Unlearning School"; }, []);
  return (
    <>
      <SEO title="Cookie Policy" description="Cookies used on The Unlearning School website." noindex />
      <section className="bg-background text-paper border-b-2 border-paper/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4"> Legal</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-4">Cookie Policy.</h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">Last updated: March 2026</p>
        </div>
      </section>
      <section className="bg-paper text-ink">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">1. What Are Cookies</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">Cookies are small text files stored on your device when you visit a website. They help the site function, provide analytics, and remember your preferences.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              {cookieTypes.map((c) => (
                <div key={c.h} className="border-2 border-ink/15 p-6">
                  <h3 className="font-display text-xl text-ink mb-2">{c.h}</h3>
                  <p className="text-ink/75 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">3. Third-Party Cookies</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">Some cookies are set by third-party services (scheduling tools, embedded content, analytics providers). These third parties have their own privacy policies governing their cookies.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">4. Managing Cookies</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">When you first visit, you see a consent banner allowing you to accept or decline non-essential cookies. You can change preferences at any time by clearing browser cookies or via your browser settings.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">5. Your Consent</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">Clicking "Accept all" consents to non-essential cookies as described. Essential cookies do not require consent.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink mb-4">6. Contact</h2>
            <p className="text-ink/75 text-[15px] leading-relaxed">Questions about our use of cookies: hello@unlearning.ro.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
