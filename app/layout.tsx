import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "56 Social Cafe & Catering | Mediterranean Restaurant Shaker Heights",
  description: "Fresh, locally-sourced Mediterranean dining in Shaker Heights. Opening August 23, 2025. Experience authentic Mediterranean cuisine with Ohio farm-to-table ingredients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "56 Social",
    "description": "Fast Casual Mediterranean Restaurant in Shaker Heights, Ohio",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://56-social-nextjs.vercel.app",
    "telephone": "+14406845600",
    "email": "social@56restaurants.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3245 Warrensville Center Road",
      "addressLocality": "Shaker Heights",
      "addressRegion": "OH",
      "postalCode": "44122",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.4654,
      "longitude": -81.5387
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "16:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "16:00",
        "closes": "02:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "22:00"
      }
    ],
    "servesCuisine": ["Mediterranean", "Middle Eastern", "Greek"],
    "priceRange": "$$",
    "acceptsReservations": true,
    "menu": "https://56-social-nextjs.vercel.app/#menu",
    "image": [
      "https://56-social-nextjs.vercel.app/images/56-social-restaurant-interior-shaker-heights.jpg",
      "https://56-social-nextjs.vercel.app/images/56-social-dining-room-mediterranean-restaurant.jpg"
    ],
    "sameAs": [
      "https://www.instagram.com/56social",
      "https://www.facebook.com/56social"
    ]
  };

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}