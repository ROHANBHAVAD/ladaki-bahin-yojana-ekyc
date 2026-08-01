import { Helmet } from "react-helmet-async";

export default function StructuredData({
  _type = "website",
  pageName,
  pageDescription,
  pageUrl,
}) {
  const websiteUrl =
    import.meta.env.VITE_SITE_URL || "https://mahayojanaguide.com";
  const normalizedWebsiteUrl = websiteUrl.replace(/\/$/, "");

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maha Yojana Guide",
    url: normalizedWebsiteUrl,
    logo: `${normalizedWebsiteUrl}/favicon.svg`,
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maha Yojana Guide",
    url: normalizedWebsiteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${normalizedWebsiteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName,
    description: pageDescription,
    url: `${normalizedWebsiteUrl}${pageUrl}`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organization)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(website)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(webpage)}
      </script>
    </Helmet>
  );
}