import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import StructuredData from '@/components/StructuredData'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  weight: ['400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://56social.com'),
  title: '56 Social | European-Style Café & Market | Shaker Heights, OH',
  description: 'European-style café offering leisurely dining, homemade food, Social Hour daily. Market, bar, café, deli, bakery - your neighborhood gathering place in Shaker Heights.',
  keywords: 'European café, Shaker Heights restaurant, 56 Social, Social Hour, homemade food, leisurely dining, wine bar, catering, coffee shop, neighborhood café, J. Pistone Market',
  openGraph: {
    title: '56 Social | Fast Casual Mediterranean',
    description: 'Fresh Mediterranean cuisine in Shaker Heights. Build-your-own salads, wine bar, and catering services.',
    url: 'https://56social.com',
    siteName: '56 Social',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/56-social-og.jpg',
        width: 1200,
        height: 630,
        alt: '56 Social Restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '56 Social | Fast Casual Mediterranean',
    description: 'Fresh Mediterranean cuisine in Shaker Heights',
    images: ['/images/56-social-og.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}