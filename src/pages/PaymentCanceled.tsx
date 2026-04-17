import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Section from "@/components/Section";

const PaymentCanceled = () => {
  useEffect(() => {
    document.title = "Payment canceled, The Unlearning School";
  }, []);

  return (
    <>
      <SEO
        title="Payment canceled — The Unlearning School"
        description="Your checkout was canceled. No charge was made. You can resume any time."
      />
      <Section>
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">Payment canceled</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-6">
            Nothing <em className="text-red">charged.</em>
          </h1>
          <p className="text-paper/80 text-[16px] leading-relaxed mb-8">
            Your checkout was canceled. No payment was processed. If something blocked you or you'd like to talk first, we're happy to.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/programmes/ai-for-non-technical-people"
              className="inline-flex items-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              Back to programme →
            </Link>
            <Link
              to="/assessment"
              className="inline-flex items-center px-6 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              Book a meeting instead
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PaymentCanceled;
