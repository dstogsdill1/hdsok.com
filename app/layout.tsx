import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";

const siteUrl = "https://www.hdsok.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Homeland Development Services, LLC - Commercial Property Maintenance",
    template: "%s | HDS"
  },
  description: "Complete Maintenance & Project Solutions for Commercial Properties. Expert vendor coordination, facility maintenance, HVAC, refrigeration, and CMMS dashboard for grocery stores, retail, and multi-unit properties.",
  keywords: [
    "commercial property maintenance",
    "facility maintenance",
    "vendor management",
    "HVAC services",
    "refrigeration services",
    "CMMS dashboard",
    "grocery store maintenance",
    "retail property maintenance",
    "building maintenance",
    "preventive maintenance",
    "emergency repair services",
    "facility management Oklahoma"
  ],
  authors: [{ name: "Homeland Development Services, LLC" }],
  creator: "Homeland Development Services, LLC",
  publisher: "Homeland Development Services, LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Homeland Development Services, LLC",
    title: "Homeland Development Services, LLC - Commercial Property Maintenance",
    description: "Complete Maintenance & Project Solutions for Commercial Properties. Expert vendor coordination, facility maintenance, and CMMS dashboard.",
    images: [
      {
        url: `${siteUrl}/images/HDS_Logo_Inverted_HighRes.png`,
        width: 1200,
        height: 630,
        alt: "Homeland Development Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeland Development Services, LLC - Commercial Property Maintenance",
    description: "Complete Maintenance & Project Solutions for Commercial Properties",
    images: [`${siteUrl}/images/HDS_Logo_Inverted_HighRes.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Homeland Development Services, LLC",
    "alternateName": "HDS",
    "url": "https://www.hdsok.com",
    "logo": "https://www.hdsok.com/images/HDS_Logo_Inverted_HighRes.png",
    "description": "Complete Maintenance & Project Solutions for Commercial Properties including vendor coordination, facility maintenance, HVAC, and refrigeration services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "OK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-405-777-4156",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.hds.live"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        
        {/* Organization Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
