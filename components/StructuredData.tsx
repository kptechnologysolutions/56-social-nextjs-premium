export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "56 Social",
    "description": "European-style café offering leisurely dining, homemade food, and Social Hour daily. Market, bar, café, deli, bakery.",
    "url": "https://56social.com",
    "telephone": "(440) 684-5600",
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
      "latitude": 41.4739,
      "longitude": -81.5371
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "11:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "servesCuisine": ["European", "Mediterranean", "American"],
    "priceRange": "$$",
    "acceptsReservations": "true",
    "menu": "https://56social.com/#menu",
    "image": [
      "https://56social.com/images/56-social-restaurant-interior.jpg",
      "https://56social.com/images/56-social-food.jpg"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1000"
    },
    "hasMenu": {
      "@type": "Menu",
      "name": "56 Social Menu",
      "description": "European café menu with 56+ selections",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Social Hour",
          "description": "Daily 3-6 PM happy hour specials"
        },
        {
          "@type": "MenuSection",
          "name": "Salads",
          "description": "56 varieties of fresh salads"
        },
        {
          "@type": "MenuSection",
          "name": "Market Fresh",
          "description": "Daily baked goods and prepared foods"
        }
      ]
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "WiFi",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Outdoor Seating",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Catering",
        "value": "true"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}