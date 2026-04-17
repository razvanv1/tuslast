import { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Section from "@/components/Section";

const PaymentSuccess = () => {
  useEffect(() => {
    document.title = "Payment received, The Unlearning School";
  }, []);

  return (
    <>
      <SEO
        title="Payment received — The Unlearning School"
        description="Your enrolment is confirmed. We'll be in touch shortly to schedule the first session."
      />
      <Section>
        <div className="max-w-2xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-4">Payment received</p>
          <h1 className="font-display text-5xl md:text-7xl text-paper leading-[0.95] mb-6">
            You're <em className="text-red">in.</em>
          </h1>
          <p className="text-paper/80 text-[16px] leading-relaxed mb-4">
            Thank you. Your payment has been confirmed and a receipt has been sent to your email.
          </p>
          <p className="text-paper/80 text-[16px] leading-relaxed mb-8">
            We'll reach out within 1 business day at the email you used at checkout to schedule the kick-off conversation and align on dates, participants, and tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              Back to home →
            </Link>
            <a
              href="mailto:hello@unlearning.ro"
              className="inline-flex items-center px-6 py-3 border border-paper/40 text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PaymentSuccess;
