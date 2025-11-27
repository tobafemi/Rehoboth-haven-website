import { LocalBusiness, WithContext } from 'schema-dts'

export const localBusinessSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://rehobothhaven.co.uk/#organization',
  name: 'Rehoboth Haven Care',
  description: 'Nurse-led domiciliary care agency providing expert, personalised home care in Medway and Kent. Managed by Registered Nurses with NHS experience.',
  url: 'https://rehobothhaven.co.uk',
  telephone: '+447883669445',
  email: 'rehobothaven@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '99 Academy Drive',
    addressLocality: 'Gillingham',
    addressRegion: 'Kent',
    postalCode: 'ME7 3EG',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.388497,
    longitude: 0.548252,
  },
  priceRange: '$$',
  image: 'https://rehobothhaven.co.uk/og-image.jpg',
  sameAs: [
    // Add social media links when available
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Rochester',
    },
    {
      '@type': 'City',
      name: 'Chatham',
    },
    {
      '@type': 'City',
      name: 'Gillingham',
    },
    {
      '@type': 'City',
      name: 'Strood',
    },
    {
      '@type': 'City',
      name: 'Rainham',
    },
    {
      '@type': 'State',
      name: 'Kent',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

