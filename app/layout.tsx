import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import OrganizationSchema from "@/components/seo/OrganizationSchema";
//import WebSiteSchema from "@/components/seo/WebSiteSchema";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riskanaliz.com.tr"),

  title: {
    default: "Risk Analiz",
    template: "%s | Risk Analiz",
  },

  description:
    "Risk Analiz; kredi uygunluğu, finansal risk değerlendirmesi, banka karşılaştırmaları ve risk skoru analizleri sunan dijital finans platformudur.",

  keywords: [
    "Risk Analiz",
    "Risk Skoru",
    "Finansal Risk",
    "Kredi Analizi",
    "Kredi Notu",
    "Banka Karşılaştırma",
    "Kredi Başvurusu",
    "Finans",
    "Risk Yönetimi",
    "Finansal Analiz",
  ],

  authors: [
    {
      name: "Risk Analiz",
      url: "https://riskanaliz.com.tr",
    },
  ],

  creator: "Risk Analiz",

  publisher: "Risk Analiz",

  applicationName: "Risk Analiz",

  category: "Finance",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://riskanaliz.com.tr",
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://riskanaliz.com.tr",
    siteName: "Risk Analiz",
    title: "Risk Analiz",
    description:
      "Finansal riskinizi analiz edin, kredi uygunluğunuzu değerlendirin ve bilinçli finansal kararlar alın.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Risk Analiz",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Risk Analiz",
    description:
      "Türkiye'nin yeni nesil finansal risk analiz platformu.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#030712] text-white antialiased">
         
        {/*<OrganizationSchema />

         <WebSiteSchema />*/}
       
        {children}
      </body>
    </html>
  );
}