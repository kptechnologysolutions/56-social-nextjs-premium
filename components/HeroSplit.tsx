'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSplit() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const images = [
    {
      src: '/images/optimized/56-social-team-catering-events.jpg',
      alt: '56 Social team and catering events',
      focus: 'center center'
    },
    {
      src: '/images/optimized/56-social-catering-platters-cleveland.jpg',
      alt: 'Catering platters at 56 Social Cleveland',
      focus: 'center center'
    },
    {
      src: '/images/optimized/56-social-family-dining-shaker-heights.jpg',
      alt: 'Family dining at 56 Social Shaker Heights',
      focus: 'center center'
    },
    {
      src: '/images/optimized/56-social-instagram-mediterranean-bowls.jpg',
      alt: 'Mediterranean bowls from 56 Social',
      focus: 'center center'
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1">
        <div className="max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold border border-gold/30">
              NOW OPEN IN SHAKER HEIGHTS
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-crimson text-7xl lg:text-8xl font-bold text-charcoal mb-2">
              <span className="text-gold text-8xl lg:text-9xl">56</span>
            </h1>
            <h2 className="font-montserrat text-5xl lg:text-6xl font-bold text-charcoal mb-4 tracking-wider">
              SOCIAL
            </h2>
            <p className="font-dancing text-3xl text-olive-green mb-6">
              Fast Casual Mediterranean
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg mb-8 leading-relaxed"
          >
            Experience the legacy of 25+ years of culinary excellence. 
            From the creators of 56 Kitchen, Elle & Birdigo, now serving 
            fresh, made-from-scratch Mediterranean cuisine in the beloved 
            former J. Pistone Market location.
          </motion.p>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3 mb-8"
          >
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-olive-green" size={20} />
              <span>3245 Warrensville Center Road</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Clock className="text-olive-green" size={20} />
              <span>Open Daily 11AM • Wine & Beer Available</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-olive-green" size={20} />
              <a href="tel:4406845600" className="hover:text-olive-green transition-colors">
                (440) 684-5600
              </a>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-olive-green text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              View Menu
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#catering"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-olive-green text-olive-green px-6 py-3 rounded-full font-semibold hover:bg-olive-green hover:text-white transition-all duration-300"
            >
              Catering Services
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Image Gallery */}
      <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto order-1 lg:order-2">
        {/* Main Image Display */}
        <div className="relative h-full overflow-hidden">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: index === currentImage ? 1 : 0,
                scale: index === currentImage ? 1 : 1.1
              }}
              transition={{ duration: 1 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={index === 0}
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: img.focus }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          ))}
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-charcoal">
              {currentImage + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}