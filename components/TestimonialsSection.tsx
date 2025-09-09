'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    title: 'Shaker Heights Resident',
    text: 'So excited to have 56 Social in the neighborhood! The salads are incredible and it\'s wonderful to see this space continue to serve our community.',
    rating: 5,
  },
  {
    name: 'Michael R.',
    title: 'Corporate Client',
    text: 'The catering for our office lunch was perfect. Fresh, delicious, and everyone found something they loved from the 56 varieties!',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    title: 'Regular Customer',
    text: 'Love the fast-casual concept. I can grab a healthy lunch quickly or sit and enjoy a glass of wine with friends. Best of both worlds!',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-charcoal mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-600">
            Join our growing community of satisfied customers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-current" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-12 h-12 text-olive-green/10" />
                <p className="text-gray-700 mb-8 leading-relaxed text-lg italic relative z-10 pl-8">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <p className="font-bold text-charcoal text-lg">{testimonial.name}</p>
                <p className="text-sm text-olive-green font-medium">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}