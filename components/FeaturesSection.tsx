'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Users, Sparkles, Truck, Award, Heart } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Stay Awhile',
    description: 'Leisurely dining where you can work, chat, or read for hours',
    color: 'bg-french-blue',
  },
  {
    icon: Users,
    title: 'Social Hour Daily',
    description: 'Join our legendary happy hour with friends & neighbors',
    color: 'bg-burgundy',
  },
  {
    icon: Sparkles,
    title: 'Homemade Everything',
    description: 'High-quality ingredients, scratch-made daily with care',
    color: 'bg-olive-green',
  },
  {
    icon: Truck,
    title: 'Market & Catering',
    description: 'Grab-and-go prepared foods or full-service catering',
    color: 'bg-gold',
  },
  {
    icon: Award,
    title: 'Comfort & Quality',
    description: 'Hearty, homemade food in a comfortable setting',
    color: 'bg-cafe-brown',
  },
  {
    icon: Heart,
    title: 'Morning to Night',
    description: 'Coffee & pastries to wine & small plates',
    color: 'bg-espresso',
  },
]

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gradient-to-b from-white to-cream/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-espresso mb-4">A Different Kind of Café Experience</h2>
          <p className="text-base sm:text-lg text-cafe-brown max-w-2xl mx-auto">
            High-quality ingredients, homemade food, and a comfortable space to linger — this is your neighborhood's living room
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className={`${feature.color} p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-charcoal mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-espresso to-charcoal rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2 text-gold">25+</p>
              <p className="text-sm text-white font-medium">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 text-gold">4</p>
              <p className="text-sm text-white font-medium">Restaurant Locations</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 text-gold">1000s</p>
              <p className="text-sm text-white font-medium">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2 text-gold">56</p>
              <p className="text-sm text-white font-medium">Original Salad Recipes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}