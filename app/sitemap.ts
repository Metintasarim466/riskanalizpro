import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://riskanaliz.com.tr";

  return [
    {
      url,
      priority: 1,
      changeFrequency: "daily",
    },

    {
      url: `${url}/hakkimizda`,
      priority: 0.8,
    },

    {
      url: `${url}/iletisim`,
      priority: 0.8,
    },

    {
      url: `${url}/kvkk`,
      priority: 0.3,
    },

    {
      url: `${url}/gizlilik-politikasi`,
      priority: 0.3,
    },

    {
      url: `${url}/kullanim-kosullari`,
      priority: 0.3,
    },

    {
      url: `${url}/cerez-politikasi`,
      priority: 0.3,
    },
  ];
}