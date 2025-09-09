'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const galleryImages = [
  { src: '/images/56-social-restaurant-interior-shaker-heights.jpg', alt: '56 Social Restaurant Interior in Shaker Heights', category: 'ambiance' },
  { src: '/images/56-social-dining-room-mediterranean-restaurant.jpg', alt: 'Mediterranean Restaurant Dining Room at 56 Social', category: 'ambiance' },
  { src: '/images/56-social-fresh-salad-bar-cleveland.jpg', alt: 'Fresh Salad Bar at 56 Social Cleveland', category: 'food' },
  { src: '/images/56-social-build-your-own-salad.jpg', alt: 'Build Your Own Salad Station', category: 'food' },
  { src: '/images/56-social-mediterranean-food-spread.jpg', alt: 'Mediterranean Food Spread for Catering', category: 'food' },
  { src: '/images/56-social-catering-platters-cleveland.jpg', alt: 'Catering Platters from 56 Social Cleveland', category: 'catering' },
  { src: '/images/56-social-wine-bar-selection.jpg', alt: 'Wine Bar Selection at 56 Social', category: 'drinks' },
  { src: '/images/56-social-craft-beverages-ohio.jpg', alt: 'Craft Beverages and Beer Selection', category: 'drinks' },
  { src: '/images/56-social-outdoor-seating-patio.jpg', alt: 'Outdoor Patio Seating Area', category: 'ambiance' },
  { src: '/images/56-social-mediterranean-cuisine-plated.jpg', alt: 'Mediterranean Cuisine Beautifully Plated', category: 'food' },
  { src: '/images/56-social-team-catering-events.jpg', alt: 'Corporate Team Catering Events', category: 'catering' },
  { src: '/images/56-social-family-dining-shaker-heights.jpg', alt: 'Family Dining in Shaker Heights', category: 'ambiance' },
]

export default function RestaurantGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'ambiance', label: 'Ambiance' },
    { id: 'food', label: 'Our Food' },
    { id: 'drinks', label: 'Beverages' },
    { id: 'catering', label: 'Catering' },
  ]
  
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section className="section-padding bg-gradient-to-b from-white to-sand/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-charcoal mb-4">Experience 56 Social</h2>
          <p className="text-lg text-gray-600">
            A glimpse into our fast-casual Mediterranean experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-olive-green text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/images/56-social-fresh-salad-bar-cleveland.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Visit us to experience the full ambiance and flavors
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="https://maps.google.com/?q=3245+Warrensville+Center+Road+Shaker+Heights+OH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-olive-green text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Directions
            </a>
            <button className="border-2 border-olive-green text-olive-green px-6 py-3 rounded-full font-semibold hover:bg-olive-green hover:text-white transition-all duration-300">
              View Full Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}