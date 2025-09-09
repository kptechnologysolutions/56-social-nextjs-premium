'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Coffee, Croissant, Wine } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-cream via-white to-cream/50">
      {/* European Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238b6f47' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              
              <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-espresso mb-2 tracking-tight">
                <span className="text-burgundy">56</span>
              </h1>
              <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-espresso tracking-tight">
                SOCIAL
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-cafe-brown font-medium mt-4">
                Leisurely Café & Market
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-espresso/80 mb-6 md:mb-8 max-w-xl leading-relaxed"
            >
              Experience the charm of a relaxed café where time slows down. Savor high-quality ingredients and homemade food. Stay awhile — chat, work, or simply enjoy. <span className="font-bold text-burgundy">Social Hour</span> daily!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-8 text-gray-600"
            >
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="p-2 bg-cafe-brown/10 rounded-full">
                  <MapPin className="w-5 h-5 text-cafe-brown" />
                </div>
                <span className="font-medium text-espresso">3245 Warrensville Center Road</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="p-2 bg-burgundy/10 rounded-full">
                  <Wine className="w-5 h-5 text-burgundy" />
                </div>
                <span className="font-medium text-espresso">Social Hour Daily • Wine • Beer • Small Plates</span>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                <div className="p-2 bg-cafe-brown/10 rounded-full">
                  <Phone className="w-5 h-5 text-cafe-brown" />
                </div>
                <span className="font-medium text-espresso">(440) 684-5600</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-burgundy text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-burgundy/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base sm:text-lg">
                View Menu →
              </button>
              <button className="bg-transparent border-2 border-burgundy text-burgundy px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-burgundy hover:text-white transition-all duration-300 text-base sm:text-lg">
                Join Social Hour
              </button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/56-social-fresh-daily-specials.jpg"
                alt="56 Social Fresh Daily Specials"
                fill
                className="object-cover"
                priority
              />
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-gold text-espresso px-6 py-3 rounded-lg font-bold text-base shadow-xl">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5" />
                  <span>NOW OPEN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}