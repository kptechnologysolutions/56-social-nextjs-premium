'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone, Calendar } from 'lucide-react';

const heroSlides = [
  {
    // Actual 56 Social restaurant photo
    image: '/images/56-social-hero-welcome.jpg',
    title: 'Welcome to 56 Social',
    subtitle: 'Cafe & Catering • Shaker Heights',
    description: 'Continuing the J. Pistone Legacy with Mediterranean-inspired cuisine',
    position: 'center center'
  },
  {
    // Breakfast - Japanese Milk Bread French Toast
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1600&h=900&fit=crop',
    title: 'Breakfast All Day',
    subtitle: 'Japanese Milk Bread French Toast • Latkes • Mediterranean Bowls',
    description: 'Start your day with our signature breakfast selections',
    position: 'center center'
  },
  {
    // The Original Pewter Mug Salad
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&h=900&fit=crop',
    title: 'Signature Salads',
    subtitle: 'The Original Pewter Mug • Mediterranean Dream • Caesar Supreme',
    description: 'Fresh, locally-sourced ingredients with our famous garlic vinaigrette',
    position: 'center 40%'
  },
  {
    // Mediterranean Sandwiches/Wraps
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1600&h=900&fit=crop',
    title: 'Sandwiches & Wraps',
    subtitle: 'Mediterranean • Falafel • Shawarma • Grilled Chicken',
    description: 'Handcrafted sandwiches with house-made spreads',
    position: 'center center'
  },
  {
    // Artisan Coffee & Beverages
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&h=900&fit=crop',
    title: 'Coffee & Beverages',
    subtitle: 'Lavender Lattes • Fresh Juices • Specialty Teas',
    description: 'Artisan coffee and handcrafted beverages',
    position: 'center 45%'
  },
  {
    // Beautiful catering spread & events
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&h=900&fit=crop',
    title: 'Catering Services',
    subtitle: 'Corporate Events • Family Gatherings • Special Occasions',
    description: 'Let us cater your next event with Mediterranean excellence',
    position: 'center center'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[100vh] md:h-[90vh] lg:h-[85vh] min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
            style={{ objectPosition: heroSlides[currentSlide].position }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
          {/* Enhanced Gradient Overlays for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle overall darkening */}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-[#4A90E2]/20 backdrop-blur-md border border-[#87CEEB]/30 text-[#87CEEB] text-sm font-medium tracking-wider uppercase mb-6 rounded-full"
              >
                Now Open at J. Pistone Legacy Location
              </motion.span>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-tight"
              >
                {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i}>
                    {word === '56' || word === 'Social' ? (
                      <span style={{fontFamily: 'Dancing Script, cursive', fontWeight: 600}} className="text-[#87CEEB]">
                        {word}{' '}
                      </span>
                    ) : (
                      <>{word} </>
                    )}
                  </span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-[#F4C430] font-light mb-4"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* Info Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6 mb-10 text-white/80"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F4C430]" />
                  <span className="text-sm">Shaker Heights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F4C430]" />
                  <span className="text-sm">Open Daily 11AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#F4C430]" />
                  <span className="text-sm">(440) 684-5600</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <button className="px-8 py-4 bg-[#4A90E2] text-white font-medium hover:bg-[#357ABD] transition-all transform hover:scale-105 hover:shadow-xl">
                  <Calendar className="inline-block w-5 h-5 mr-2" />
                  Reserve Your Table
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-[#4A90E2] transition-all">
                  Explore Our Menu
                </button>
                <button className="px-8 py-4 bg-[#7A8450]/80 text-white font-medium hover:bg-[#7A8450] transition-all">
                  Order Catering
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-12 h-2 bg-[#4A90E2]'
                : 'w-8 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}