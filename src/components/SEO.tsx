import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

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
  const url = `${SITE_URL}${pathname}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;

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
      <meta name="geo.placename" content="Bucharest" />
      <meta name="ICBM" content="44.4268,26.1025" />
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_GB" />
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
