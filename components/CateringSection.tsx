'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const cateringOptions = [
  {
    icon: '',
    title: 'Corporate Catering',
    description: 'Impress clients and energize your team with our fresh, healthy options. Individual boxes or buffet style.',
    link: 'View Corporate Menu',
    image: '/images/56-social-team-catering-events.jpg',
    alt: 'Corporate Catering Services by 56 Social Cleveland',
  },
  {
    icon: '',
    title: 'Special Events',
    description: 'Weddings, birthdays, celebrations - we\'ll create a custom menu that makes your event unforgettable.',
    link: 'Plan Your Event',
    image: '/images/56-social-catering-platters-cleveland.jpg',
    alt: 'Special Event Catering - Weddings and Celebrations',
  },
  {
    icon: '',
    title: 'Picnic Style',
    description: 'Perfect for outdoor gatherings. Pre-packaged meals with all the fixings for a perfect picnic.',
    link: 'Order Picnic Package',
    image: '/images/56-social-outdoor-seating-patio.jpg',
    alt: 'Picnic Style Catering for Outdoor Events',
  },
]

export default function CateringSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="catering" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-charcoal mb-4">Catering That Celebrates</h2>
          <p className="text-lg text-gray-600">
            From office lunches to wedding receptions, we bring 56 Social to you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cateringOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-cream rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-terracotta transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"></div>
              
              {option.image ? (
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.alt || `${option.title} - 56 Social Shaker Heights`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-olive-green to-sage"></div>
              )}
              <div className="p-8 text-center">
              <h3 className="font-crimson text-2xl font-bold text-olive-green mb-4">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>
              <a
                href="#"
                className="text-terracotta font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                {option.link} <ArrowRight size={16} />
              </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-olive-green to-aegean-blue rounded-3xl p-8 text-white text-center"
        >
          <h3 className="font-crimson text-3xl font-bold mb-4">
            Planning a Large Event?
          </h3>
          <p className="text-lg mb-6">
            Let our catering specialists create a custom menu for your special occasion
          </p>
          <button className="bg-white text-olive-green px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            Get Catering Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}