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
  title: "Fire Wave Studios",
  description: "Fire Wave Studios is a recording studio in Richmond Hill, GA. We offer a range of services from recording to mixing and mastering.",
  icons: {
    icon: '/logo.webp',
    shortcut: '/logo.webp',
    apple: '/logo.webp',
  },
  openGraph: {
    title: "Fire Wave Studios",
    description: "Professional audio recording, mixing, and mastering services in Richmond Hill, GA",
    url: "https://firewave912.com",
    siteName: "Fire Wave Studios",
    images: [
      {
        url: 'https://firewave912.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Fire Wave Studios',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fire Wave Studios",
    description: "Professional audio recording, mixing, and mastering services in Richmond Hill, GA",
    images: ['https://firewave912.com/logo.png'],
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
