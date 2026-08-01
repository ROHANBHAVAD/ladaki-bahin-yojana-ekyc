import { Helmet } from "react-helmet-async";

const DEFAULT_SITE_URL = "https://mahayojanaguide.com";

export default function SEO({
  title,
  description,
  keywords = "",
  image = "/og-image.svg",
  url = "",
  type = "website",
}) {
  const siteName = "Maha Yojana Guide";
  const siteUrl =
    import.meta.env.VITE_SITE_URL ||
    (typeof window !== "undefined" ? window.location.origin : DEFAULT_SITE_URL);
  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
  const normalizedPath = url.startsWith("/") ? url : `/${url}`;
  const canonical = url ? `${normalizedSiteUrl}${normalizedPath}` : normalizedSiteUrl;
  const imageUrl = image.startsWith("http")
    ? image
    : `${normalizedSiteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#2563eb" />
      {import.meta.env.VITE_GOOGLE_SITE_VERIFICATION ? (
        <meta
          name="google-site-verification"
          content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION}
        />
      ) : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}