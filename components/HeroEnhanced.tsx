'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Star, Clock, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HeroEnhanced() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  
  const [currentImage, setCurrentImage] = useState(0)
  const heroImages = [
    {
      src: '/images/56-social-fresh-salad-bar-cleveland.jpg',
      alt: 'Fresh Salad Bar at 56 Social',
      position: 'center center'
    },
    {
      src: '/images/56-social-mediterranean-food-spread.jpg',
      alt: 'Mediterranean Food Spread',
      position: 'center center'
    },
    {
      src: '/images/56-social-build-your-own-salad.jpg',
      alt: 'Build Your Own Salad Station',
      position: 'center center'
    },
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Animated Background Images with Better Positioning */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-all duration-2000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: 'cover',
                backgroundPosition: image.position,
              }}
            >
              {/* Multiple gradient overlays for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
              
              {/* Vignette effect */}
              <div className="absolute inset-0" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
              }}></div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Animated Dots Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-gold w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center text-white max-w-6xl mx-auto px-4"
        style={{ opacity }}
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-gold/30"
        >
          <Star className="text-gold" size={20} />
          <span className="text-sm font-semibold text-gold">NOW OPEN • SHAKER HEIGHTS</span>
          <Star className="text-gold" size={20} />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-crimson mb-6">
            <span className="text-7xl md:text-9xl font-bold text-gold drop-shadow-2xl block mb-2">
              56
            </span>
            <span className="text-5xl md:text-7xl font-bold tracking-wider block text-white drop-shadow-lg">
              SOCIAL
            </span>
            <span className="text-2xl md:text-3xl font-light italic text-gold/90 block mt-4">
              Fast Casual Mediterranean
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Where <span className="text-gold font-semibold">25+ years</span> of culinary excellence
          meets the <span className="text-gold font-semibold">beloved legacy</span> of J. Pistone Market
        </motion.p>

        {/* Quick Info Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <Clock className="inline mr-2" size={18} />
            <span className="text-sm">Open Daily 11AM</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <MapPin className="inline mr-2" size={18} />
            <span className="text-sm">3245 Warrensville Center Rd</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gold text-charcoal px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            Explore Menu
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a
            href="#catering"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            Catering Services
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-xs mb-2">SCROLL TO EXPLORE</span>
          <ChevronDown size={24} />
        </div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold/30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-gold/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/30"></div>
    </section>
  )
}