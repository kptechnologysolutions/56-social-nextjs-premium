'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Clock, Menu, X, ChevronUp } from 'lucide-react'

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [navHidden, setNavHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavHidden(true)
      } else {
        setNavHidden(false)
      }
      
      setIsScrolled(currentScrollY > 50)
      setShowBackToTop(currentScrollY > 500)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating Quick Actions Bar */}
      <AnimatePresence>
        {isScrolled && !navHidden && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-full shadow-2xl px-6 py-3 flex items-center gap-6">
              <a
                href="tel:4406845600"
                className="flex items-center gap-2 text-charcoal hover:text-olive-green transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm font-medium">Call</span>
              </a>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <a
                href="https://maps.google.com/?q=3245+Warrensville+Center+Road+Shaker+Heights+OH"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-charcoal hover:text-olive-green transition-colors"
              >
                <MapPin size={18} />
                <span className="text-sm font-medium">Directions</span>
              </a>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <button className="flex items-center gap-2 text-charcoal hover:text-olive-green transition-colors">
                <Clock size={18} />
                <span className="text-sm font-medium">Open Now</span>
              </button>
              
              <div className="w-px h-6 bg-gray-300"></div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-olive-green text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                Order Online
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 bg-olive-green text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:bg-olive-green/90 transition-all"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Reservation Widget */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-30"
      >
        <motion.button
          whileHover={{ x: -5 }}
          className="bg-gold text-charcoal px-3 py-8 rounded-l-2xl shadow-2xl writing-vertical font-semibold"
        >
          RESERVE TABLE
        </motion.button>
      </motion.div>
    </>
  )
}