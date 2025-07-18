import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Your Local Pest Control - Free Inspection & Estimate | (888) 888-8888',
    template: '%s | Serban Local Services'
  },
  description: 'Local pest control experts serving your area. Free inspection & estimate. Call (888) 888-8888 now for immediate service. Trusted local business with 9.6 rating.',
  keywords: [
    'pest control',
    'local pest control',
    'free pest inspection',
    'pest control estimate',
    'bed bugs',
    'rodents',
    'termites',
    'local exterminator',
    'pest control near me'
  ],
  authors: [{ name: 'Serban Local Services' }],
  creator: 'Serban Affiliate Marketing',
  publisher: 'Serban Local Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://serban-affiliate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Your Local Pest Control - Free Inspection & Estimate',
    description: 'Local pest control experts serving your area. Free inspection & estimate. Call (888) 888-8888 now for immediate service.',
    url: 'https://serban-affiliate.com',
    siteName: 'Serban Local Services',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Local Pest Control Professional',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Local Pest Control - Free Inspection & Estimate',
    description: 'Local pest control experts serving your area. Free inspection & estimate.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Your Local Pest Control",
              "description": "Local pest control experts serving your area with free inspections and estimates.",
              "url": "https://serban-affiliate.com",
              "telephone": "+1-888-888-8888",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "YOUR_LATITUDE",
                "longitude": "YOUR_LONGITUDE"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "9.6",
                "reviewCount": "279"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "YOUR_LATITUDE",
                  "longitude": "YOUR_LONGITUDE"
                },
                "geoRadius": "50000"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
