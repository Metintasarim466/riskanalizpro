export default function WebSiteSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Risk Analiz",
    url: "https://riskanaliz.com.tr",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://riskanaliz.com.tr/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}