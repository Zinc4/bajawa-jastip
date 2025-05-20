import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Bajawa Jastip - Your Trusted Delivery Service",
    default: "Bajawa Jastip - Your Trusted Delivery Service",
  },
  description:
    "Bajawa Jastip provides reliable delivery services including regular delivery, electronics shipping, and document handling across Indonesia.",
  keywords: [
    "jastip",
    "delivery service",
    "indonesia shipping",
    "document handling",
    "electronics shipping",
  ],
  authors: [{ name: "Bajawa Jastip" }],
  creator: "Bajawa Jastip",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bajawajastip.com",
    title: "Bajawa Jastip - Your Trusted Delivery Service",
    description: "Reliable delivery services across Indonesia",
    siteName: "Bajawa Jastip",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://bajawajastip.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Bajawa Jastip",
              image: "https://bajawajastip.com/images/logo.png",
              "@id": "https://bajawajastip.com",
              url: "https://bajawajastip.com",
              telephone: "+6281234567890",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jalan Utama No. 123",
                addressLocality: "Jakarta",
                postalCode: "12345",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.2088,
                longitude: 106.8456,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.facebook.com/bajawajastip",
                "https://www.instagram.com/bajawajastip",
                "https://twitter.com/bajawajastip",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

import "./globals.css";
