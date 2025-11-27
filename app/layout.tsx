import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rehobothhaven.co.uk'),
  title: {
    default: 'Rehoboth Haven Care: Nurse-Led Home Care in Medway & Kent',
    template: '%s | Rehoboth Haven Care',
  },
  description: 'Expert, personalised domiciliary care in Medway and Kent. Managed by Registered Nurses with NHS experience. Bringing NHS standards of excellence to your home.',
  keywords: ['domiciliary care Medway', 'home care Kent', 'nurse-led care', 'home care Gillingham', 'home care Rochester', 'home care Chatham', 'dementia care at home Medway', 'in-home care Kent', 'domiciliary care agency Medway', 'personal care at home'],
  authors: [{ name: 'Rehoboth Haven Care' }],
  creator: 'Rehoboth Haven Care',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://rehobothhaven.co.uk',
    siteName: 'Rehoboth Haven Care',
    title: 'Rehoboth Haven Care: Nurse-Led Home Care in Medway & Kent',
    description: 'Expert, personalised domiciliary care in Medway and Kent. Managed by Registered Nurses with NHS experience.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rehoboth Haven Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rehoboth Haven Care: Nurse-Led Home Care in Medway & Kent',
    description: 'Expert, personalised domiciliary care in Medway and Kent. Managed by Registered Nurses with NHS experience.',
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
    // Add Google Search Console verification when available
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="geo.region" content="GB-KEN" />
        <meta name="geo.placename" content="Gillingham" />
        <meta name="geo.position" content="51.388497;0.548252" />
        <meta name="ICBM" content="51.388497, 0.548252" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

