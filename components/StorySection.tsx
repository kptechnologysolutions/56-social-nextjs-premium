'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function StorySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    'Locally Sourced',
    'Made From Scratch',
    'Fast Casual Service',
    'Full Bar & Catering',
  ]

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-crimson text-5xl lg:text-6xl font-bold text-charcoal mb-4">
              25+ Years of Culinary Excellence
            </h2>
            <h3 className="font-montserrat text-2xl lg:text-3xl text-charcoal mb-6">
              Jay Leitson & Izzy Schachner
            </h3>
            <p className="font-dancing text-2xl text-olive-green mb-4">
              From Cafe 56 (1995) to 56 Social (2024)
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Jay Leitson's journey began in 1995 with Cafe 56 at Eastgate, pioneering 
              56 different salads. In 2012, he partnered with Izzy Schachner. Together 
              they created 56 Kitchen (2 locations), Elle, and Birdigo. Now at 56 Social, 
              they're continuing the J. Pistone Market's 23-year legacy.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-olive-green rounded-full flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[500px] lg:h-[600px] shadow-2xl">
              <Image
                src="/images/optimized/56_Social_Inside-optimized.jpg"
                alt="56 Social Restaurant Interior - Modern Mediterranean dining space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 bg-terracotta text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl"
            >
              <span className="font-crimson text-4xl font-bold">56</span>
              <span className="text-xs">VARIETIES</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}