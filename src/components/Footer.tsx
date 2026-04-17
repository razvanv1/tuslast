import { Link } from "react-router-dom";
import logo from "@/assets/logo@2x.webp";

const programmes = [
  { label: "AI for Non-Technical People", to: "/programmes/ai-for-non-technical-people" },
  { label: "Hermes Agent", to: "/hermes" },
  { label: "Events & Keynotes", to: "/events" },
  { label: "Funding", to: "/funding" },
  { label: "Assessment", to: "/assessment" },
];

const masthead = [
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/the-unlearning-school",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/theunlearningschool",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/the.unlearning.school",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/message/SZZCJNB5GSGJP1?autoload=1&app_absent=0",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
];

const Footer = () => (
  <footer className="bg-background border-t-2 border-paper/10">
    <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16">
      {/* Newsletter band */}
      <div className="border-2 border-paper/15 p-8 md:p-12 mb-16">
        <form
          action="https://unlearning.us8.list-manage.com/subscribe/post"
          method="post"
          target="_blank"
          noValidate
          className="grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3">The Unlearning Pill, Newsletter</p>
            <h3 className="font-display text-3xl md:text-5xl text-paper leading-[0.95] mb-3">
              Signal, <em className="text-red">not noise.</em>
            </h3>
            <p className="text-paper/70 text-sm max-w-xl leading-relaxed">
              Monthly dispatch on funding intelligence, AI at work, execution friction, academy building, and the future of work. No spam, unsubscribe anytime.
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              name="EMAIL"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border-2 border-paper/20 px-4 py-3 text-paper placeholder:text-paper/65 font-mono text-sm focus:outline-none focus:border-red transition-colors"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 bg-red text-paper font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-colors whitespace-nowrap"
            >
              Subscribe →
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
        <div className="col-span-2 md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red mb-3"> Contact</p>
          <ul className="space-y-2 text-paper/80 text-sm">
            <li><a href="mailto:hello@unlearning.ro" className="hover:text-red transition-colors">hello@unlearning.ro</a></li>
            <li><a href="tel:+40722598346" className="hover:text-red transition-colors">+40 722 598 346</a></li>
            <li className="text-paper/60">1, Aleea Pasărea în Văzduh, București, RO</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/65 mb-4">Programmes</p>
          <ul className="space-y-2 text-paper/80 text-sm">
            {programmes.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-red transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/65 mb-4">Company</p>
          <ul className="space-y-2 text-paper/80 text-sm">
            {masthead.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-red transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/65 mb-4">Legal</p>
          <ul className="space-y-2 text-paper/80 text-sm mb-6">
            {legal.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-red transition-colors">{l.label}</Link></li>
            ))}
          </ul>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/65 mb-3">Follow</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center border border-paper/20 text-paper/60 hover:text-red hover:border-red transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Massive brand block */}
      <div className="mt-16 overflow-hidden text-center flex flex-col items-center gap-8">
        <img
          src={logo}
          alt="The Unlearning School"
          width={406}
          height={203}
          loading="lazy"
          decoding="async"
          className="w-full max-w-4xl h-auto invert brightness-200 select-none pointer-events-none"
          aria-hidden="true"
        />
        <div className="space-y-6">
          <p className="font-display text-2xl md:text-4xl text-red italic">
            What is learned can be unlearned.
          </p>
          <p className="text-paper/70 max-w-2xl mx-auto leading-relaxed md:text-lg">
            The Unlearning School builds programs, systems and useful ways of working for teams dealing with projects funding pressure, AI adoption, digital change and the future of work.
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-paper/10 pt-8 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/65">
          © {new Date().getFullYear()} The Unlearning School. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
