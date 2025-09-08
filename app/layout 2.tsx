import type { Metadata } from 'next'
import { Crimson_Text, Montserrat, Dancing_Script } from 'next/font/google'
import './globals.css'

// Mediterranean serif font for headings
const crimson = Crimson_Text({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
})

// Clean sans-serif for body text
const montserrat = Montserrat({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

// Elegant script for accents
const dancing = Dancing_Script({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://56social.com'),
  title: '56 Social | Fast Casual Mediterranean | Shaker Heights, OH',
  description: 'Now Open! 56 Social brings fast-casual Mediterranean dining to Shaker Heights. Build-your-own salads, wine & beer bar, full catering. From the creators of 56 Kitchen, Elle & Birdigo. 3245 Warrensville Center Road.',
  keywords: '56 Social, Mediterranean restaurant, Shaker Heights restaurant, fast casual dining, build your own salad, Jay Leitson, Izzy Schachner, 56 Kitchen, Elle restaurant, Birdigo, J. Pistone Market, Warrensville Center Road, Cleveland restaurants, Ohio restaurants, catering Shaker Heights',
  openGraph: {
    title: '56 Social | Fast Casual Mediterranean | Now Open',
    description: 'Fresh, made-from-scratch Mediterranean dining in Shaker Heights. Build-your-own salads, wine & beer bar, catering.',
    url: 'https://56social.com',
    siteName: '56 Social',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/images/56-social-logo.png',
      width: 1200,
      height: 630,
      alt: '56 Social Restaurant',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '56 Social | Now Open in Shaker Heights',
    description: 'Fast-casual Mediterranean from the creators of 56 Kitchen, Elle & Birdigo',
    images: ['/images/56-social-logo.png'],
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
    <html lang="en" className={`${montserrat.variable} ${crimson.variable} ${dancing.variable}`}>
      <body className="font-montserrat">{children}</body>
    </html>
  )
}