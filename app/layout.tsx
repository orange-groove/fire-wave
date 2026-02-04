import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Zilla_Slab } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "../components/Nav";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: "Zalando Sans Expanded" doesn't appear to be available in next/font/google
// Using Zilla Slab as an alternative expanded font, or you can add it via CSS link
const zillaSlab = Zilla_Slab({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fire Wave Sound | Recording Studio & Live Sound in Richmond Hill, GA",
  description: "Professional recording studio in Richmond Hill, GA offering audio recording, mixing, mastering, and live sound production for bands, artists, and events throughout Coastal Georgia.",
  keywords: ["recording studio", "Richmond Hill GA", "live sound", "mixing", "mastering", "Savannah", "Coastal Georgia", "audio production"],
  authors: [{ name: "Fire Wave Sound" }],
  creator: "Fire Wave Sound",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Fire Wave Sound | Recording Studio & Live Sound",
    description: "Professional recording studio offering audio recording, mixing, mastering, and live sound production in Richmond Hill, GA",
    url: "https://www.firewave912.com",
    siteName: "Fire Wave Sound",
    images: [
      {
        url: 'https://www.firewave912.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fire Wave Sound - Recording Studio & Live Sound Production',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fire Wave Sound | Recording Studio & Live Sound",
    description: "Professional recording studio offering audio recording, mixing, mastering, and live sound production in Richmond Hill, GA",
    images: ['https://www.firewave912.com/og-image.jpg'],
    creator: '@firewavestudio',
  },
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
  alternates: {
    canonical: 'https://www.firewave912.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LBR84B2YMN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LBR84B2YMN');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.firewave912.com",
              "name": "Fire Wave Sound",
              "description": "Professional recording studio offering audio recording, mixing, mastering, and live sound production in Richmond Hill, GA",
              "url": "https://www.firewave912.com",
              "logo": "https://firewave912.com/logo.png",
              "image": "https://firewave912.com/og-image.jpg",
              "telephone": "",
              "email": "info@firewave912.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Richmond Hill",
                "addressRegion": "GA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.9382,
                "longitude": -81.3054
              },
              "areaServed": ["Richmond Hill", "Savannah", "Coastal Georgia"],
              "priceRange": "$$",
              "openingHours": "Mo-Su",
              "sameAs": [
                "https://www.instagram.com/firewavestudio912/",
                "https://www.facebook.com/profile.php?id=61578999137660"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Recording Studio Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Audio Recording",
                      "description": "Professional recording sessions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mixing & Mastering",
                      "description": "Professional mixing and mastering services"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Live Sound Production",
                      "description": "Live audio for events and concerts"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
