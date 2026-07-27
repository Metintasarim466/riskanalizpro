export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Risk Analiz",
    url: "https://riskanaliz.com.tr",
    logo: "https://riskanaliz.com.tr/logo.png",
    description:
      "Risk Analiz, finansal risk değerlendirmesi ve kredi analiz hizmetleri sunan dijital platformdur.",
    email: "info@riskanaliz.com.tr",
    sameAs: [],
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