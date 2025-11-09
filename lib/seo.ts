import { DefaultSeoProps } from 'next-seo'
import type { Metadata } from 'next'

export const defaultSEO: DefaultSeoProps = {
  defaultTitle: 'Rehoboth Haven Care: Nurse-Led Home Care in Medway & Kent',
  titleTemplate: '%s | Rehoboth Haven Care',
  description: 'Expert, personalised domiciliary care in Medway and Kent. Managed by Registered Nurses with NHS experience. CQC registered. Bringing NHS standards of excellence to your home.',
  canonical: 'https://rehobothhaven.co.uk',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://rehobothhaven.co.uk',
    siteName: 'Rehoboth Haven Care',
    title: 'Rehoboth Haven Care: Nurse-Led Home Care in Medway & Kent',
    description: 'Expert, personalised domiciliary care in Medway and Kent. Managed by Registered Nurses with NHS experience. CQC registered.',
    images: [
      {
        url: 'https://rehobothhaven.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rehoboth Haven Care',
      },
    ],
  },
  twitter: {
    handle: '@rehobothhaven',
    site: '@rehobothhaven',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'geo.region',
      content: 'GB-KEN',
    },
    {
      name: 'geo.placename',
      content: 'Gillingham',
    },
    {
      name: 'geo.position',
      content: '51.388497;0.548252',
    },
    {
      name: 'ICBM',
      content: '51.388497, 0.548252',
    },
  ],
}

export interface PageSEOProps {
  title: string
  description: string
  path?: string
  image?: string
  noindex?: boolean
}

export function generatePageSEO({ title, description, path, image, noindex = false }: PageSEOProps): Metadata {
  const url = path ? `https://rehobothhaven.co.uk${path}` : 'https://rehobothhaven.co.uk'
  
  return {
    title,
    description,
    metadataBase: new URL('https://rehobothhaven.co.uk'),
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      title,
      description,
      url,
      images: image 
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'en_GB',
      siteName: 'Rehoboth Haven Care',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

