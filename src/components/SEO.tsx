import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getAlternates } from "@/lib/routes";

const SITE_URL = "https://tuslast.lovable.app";
const SITE_NAME = "The Unlearning School";
const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/12b5078b-0bb6-44f1-90f5-47cddf33235c";
const DEFAULT_DESCRIPTION =
  "Behaviour change practice for AI adoption. We redesign workflows so non-technical teams actually use the AI tools you deployed. Romania & EU.";

type FAQ = { question: string; answer: string };

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  faq?: FAQ[];
  /** Optional extra JSON-LD blobs (e.g. Course, Service, Article) */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
  publishedTime,
  modifiedTime,
  author = "Răzvan Vâlceanu",
  noindex = false,
  faq,
  jsonLd,
}: SEOProps) => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const { en: enUrl, ro: roUrl, current } = getAlternates(pathname);
  const lang = current;
  const url = current === "ro" ? roUrl : enUrl;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} - ${SITE_NAME}`;
  const placename = lang === "ro" ? "București, România" : "Bucharest, Romania";

  const extraLd: Record<string, unknown>[] = [];
  if (faq && faq.length) {
    extraLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  // Auto BreadcrumbList for non-home pages (Google rich results + AEO)
  const cleanPath = pathname.replace(/^\/(en|ro)(?=\/|$)/, "") || "/";
  if (cleanPath !== "/" && cleanPath !== "") {
    const segments = cleanPath.split("/").filter(Boolean);
    const homeUrl = lang === "ro" ? `${SITE_URL}/ro` : SITE_URL;
    extraLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
        ...segments.map((seg, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          item: `${homeUrl}/${segments.slice(0, i + 1).join("/")}`,
        })),
      ],
    });
  }

  if (jsonLd) {
    if (Array.isArray(jsonLd)) extraLd.push(...jsonLd);
    else extraLd.push(jsonLd);
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
      )}

      {/* Geo / locale (GEO) */}
      <meta name="geo.region" content="RO" />
      <meta name="geo.placename" content={placename} />
      <meta name="geo.position" content="44.4268;26.1025" />
      <meta name="ICBM" content="44.4268, 26.1025" />
      <meta name="audience" content="business" />
      <meta httpEquiv="content-language" content={lang} />
      <meta name="language" content={lang === "ro" ? "Romanian" : "English"} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="ro" href={roUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <html lang={lang} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={lang === "ro" ? "ro_RO" : "en_GB"} />
      <meta property="og:locale:alternate" content={lang === "ro" ? "en_GB" : "ro_RO"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && <meta property="article:author" content={author} />}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* LinkedIn-specific (uses OG, plus author) */}
      <meta name="linkedin:author" content={author} />

      {/* AEO / Answer engines */}
      <meta name="application-name" content={SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

      {/* Per-page JSON-LD (FAQ, Course, etc.) */}
      {extraLd.map((blob, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(blob)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
