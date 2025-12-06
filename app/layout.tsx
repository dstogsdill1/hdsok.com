import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import Script from "next/script";
import { SmoothScroller } from "@/components/SmoothScroller";
import { PageTransition } from "@/components/PageTransition";

const siteUrl = "https://www.hdsok.com";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Homeland Development Services | Commercial Facility Management & CMMS Platform",
    template: "%s | HDS"
  },
  description: "HDS provides vendor coordination, facility maintenance, and CMMS dashboard solutions for grocery stores, retail centers, and multi-unit commercial properties. 24/7 emergency dispatch, energy management, and portfolio-wide analytics.",
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
    "facility management Oklahoma",
    "work order management",
    "portfolio management",
    "energy analytics",
    "vendor coordination"
  ],
  authors: [{ name: "Homeland Development Services, LLC", url: siteUrl }],
  creator: "Homeland Development Services, LLC",
  publisher: "Homeland Development Services, LLC",
  category: "Business Services",
  classification: "Facility Management",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/HDS_Logo_Inverted_HighRes.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/images/HDS_Logo_Inverted_HighRes.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Homeland Development Services",
    title: "Homeland Development Services | Commercial Facility Management & CMMS",
    description: "Complete vendor coordination, facility maintenance, and CMMS dashboard solutions for commercial properties. 24/7 dispatch, energy analytics, and portfolio management for 365+ locations.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Homeland Development Services - Commercial Facility Management Platform",
        type: 'image/png',
      },
      {
        url: `${siteUrl}/images/HDS_Logo_Inverted_HighRes.png`,
        width: 512,
        height: 512,
        alt: "HDS Logo",
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HDSLive",
    creator: "@HDSLive",
    title: "Homeland Development Services | Commercial Facility Management",
    description: "Complete vendor coordination, facility maintenance, and CMMS dashboard for commercial properties. 24/7 dispatch, energy analytics, portfolio management.",
    images: {
      url: `${siteUrl}/og-image.png`,
      alt: "Homeland Development Services - Commercial Facility Management Platform",
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  other: {
    'msapplication-TileColor': '#c6ff00',
    'msapplication-config': '/browserconfig.xml',
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
        <SmoothScroller>
          <Layout>
            <PageTransition>{children}</PageTransition>
          </Layout>
        </SmoothScroller>
      </body>
    </html>
  );
}
