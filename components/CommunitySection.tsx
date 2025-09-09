'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    text: "The perfect European café experience. I bring my laptop and stay for hours — the atmosphere is perfect for working or meeting friends.",
    author: 'Sarah M.',
    role: 'Shaker Heights Resident',
  },
  {
    text: "Everything is made from scratch with high-quality ingredients. You can taste the difference in every bite. This is real food, made with care.",
    author: 'Michael R.',
    role: 'Daily Customer',
  },
  {
    text: "Finally, a true neighborhood gathering place! Whether I'm grabbing morning coffee, lunch with colleagues, or Social Hour with friends — 56 Social is my go-to.",
    author: 'Jennifer L.',
    role: 'Local Professional',
  },
]

export default function CommunitySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="community" className="section-padding bg-gradient-to-br from-olive-green/5 to-aegean-blue/5">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-charcoal mb-4">Community Love</h2>
          <p className="text-lg text-gray-600">
            Continuing the tradition of bringing people together
          </p>
        </motion.div>

        {/* Legacy Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-olive-green text-white rounded-3xl p-8 md:p-12 text-center mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="font-dancing text-3xl mb-4">In Honor of J. Pistone Market</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              For 25 years, J. Pistone served this community with love and dedication. 
              We're proud to continue that legacy while adding our own chapter to this beloved location.
            </p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Quote className="text-olive-green mb-4" size={32} />
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-charcoal">{testimonial.author}</p>
                <p className="text-sm text-terracotta">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="font-crimson text-3xl font-bold text-charcoal mb-6">
            Follow Our Journey
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-olive-green to-sage rounded-xl flex items-center justify-center text-white text-4xl"
              >
                📷
              </div>
            ))}
          </div>
          <button className="bg-terracotta text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            @56social_shaker
          </button>
        </motion.div>
      </div>
    </section>
  )
}