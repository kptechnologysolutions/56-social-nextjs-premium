export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: '56 Social',
  image: 'https://56social.com/images/56-social-logo.png',
  '@id': 'https://56social.com',
  url: 'https://56social.com',
  telephone: '440-684-5600',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3245 Warrensville Center Road',
    addressLocality: 'Shaker Heights',
    addressRegion: 'OH',
    postalCode: '44122',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.4684,
    longitude: -81.5371
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:00',
      closes: '21:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '11:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '22:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '20:00'
    }
  ],
  servesCuisine: ['Mediterranean', 'American', 'Healthy'],
  menu: 'https://56social.com/menu',
  acceptsReservations: 'False',
  hasDelivery: 'True',
  hasTakeaway: 'True',
  founder: [
    {
      '@type': 'Person',
      name: 'Jay Leitson'
    },
    {
      '@type': 'Person',
      name: 'Izzy Schachner'
    }
  ],
  foundingDate: '2024',
  description: 'Fast-casual Mediterranean restaurant in Shaker Heights offering build-your-own salads, wine & beer bar, and full catering services. From the creators of 56 Kitchen, Elle, and Birdigo.',
  sameAs: [
    'https://www.facebook.com/56Kitchen',
    'https://www.instagram.com/56kitchen'
  ]
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: '56 Social',
  description: 'Fast-casual Mediterranean dining in Shaker Heights',
  url: 'https://56social.com',
  logo: 'https://56social.com/images/56-social-logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-440-684-5600',
    contactType: 'customer service',
    areaServed: 'US',
    availableLanguage: 'English'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3245 Warrensville Center Road',
    addressLocality: 'Shaker Heights',
    addressRegion: 'OH',
    postalCode: '44122',
    addressCountry: 'US'
  }
}