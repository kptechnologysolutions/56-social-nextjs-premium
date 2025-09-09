'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Wine, Users, Calendar } from 'lucide-react'

export default function SocialHourSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gradient-to-br from-espresso to-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cafe-brown rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-6">
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-white">Social Hour</h2>
          </div>
          <p className="text-xl sm:text-2xl text-gold font-bold">
            Every Day is a Celebration
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mt-4 max-w-3xl mx-auto px-4">
            Join us daily for our legendary Social Hour featuring special pricing on wine, beer, 
            cocktails, and shareable plates. The perfect way to unwind and connect with friends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {[
            {
              icon: Clock,
              title: 'Daily 3-6 PM',
              description: 'Monday through Friday',
            },
            {
              icon: Wine,
              title: '$5-7 Drinks',
              description: 'Select wines, beers & cocktails',
            },
            {
              icon: Users,
              title: 'Small Plates',
              description: 'Perfect for sharing',
            },
            {
              icon: Calendar,
              title: 'No Reservations',
              description: 'First come, first served',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-charcoal/70 transition-all duration-300 border border-gold/20"
            >
              <item.icon className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button className="bg-gold text-espresso px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
            View Social Hour Menu
          </button>
        </motion.div>
      </div>
    </section>
  )
}