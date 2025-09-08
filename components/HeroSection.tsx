'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden mt-8">
      {/* Hero Image - Using regular img for now to ensure it loads */}
      <div className="absolute inset-0">
        <img
          src="/images/56-social-restaurant-interior-shaker-heights.jpg"
          alt="56 Social Restaurant Interior"
          className="w-full h-full object-cover"
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-[#87CEEB] text-sm font-medium tracking-[0.2em] uppercase mb-6"
            >
              Mediterranean • Fresh • Local
            </motion.span>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"
            >
              Welcome to
              <span className="block text-[#87CEEB] mt-2" style={{fontFamily: 'Dancing Script, cursive', fontSize: '1.3em', fontWeight: 600}}>56 Social</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed"
            >
              Where Cleveland\'s freshest ingredients meet Mediterranean tradition
            </motion.p>

            {/* Location & Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 mb-10 text-white/80"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#4A90E2]" />
                <span className="text-sm">Shaker Heights</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#4A90E2]" />
                <span className="text-sm">Open Daily 11AM</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#menu"
                className="btn btn-primary group"
              >
                View Menu
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#reservations"
                className="btn btn-secondary text-white border-white hover:bg-white hover:text-[#4A90E2]"
              >
                Reserve a Table
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}