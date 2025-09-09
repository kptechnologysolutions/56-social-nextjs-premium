'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function VideoShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [showVideo, setShowVideo] = useState(false)
  
  // YouTube Video Configuration
  // To add your video:
  // 1. Run: python3 scripts/setup-youtube-video.py
  // 2. Or manually replace the ID below with your YouTube video ID
  const YOUTUBE_VIDEO_ID = "0Mudx4oyM7Q" // 56 Social video from YouTube Shorts
  
  // Check if we have a real YouTube video ID
  const hasYouTubeVideo = true // We have the video ID configured

  useEffect(() => {
    // Auto-show video when scrolled into view
    if (inView && hasYouTubeVideo) {
      setTimeout(() => setShowVideo(true), 500)
    }
  }, [inView, hasYouTubeVideo])

  return (
    <section className="relative bg-gradient-to-b from-cream via-charcoal to-charcoal py-8 md:py-12 lg:py-16" id="video-showcase">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative max-w-[1920px] mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block"
          >
            <h2 className="font-crimson text-5xl lg:text-6xl font-bold text-white mb-4">
              Experience <span className="text-gold">56 Social</span>
            </h2>
            <p className="font-dancing text-2xl lg:text-3xl text-gold">
              Where Mediterranean Meets Modern
            </p>
          </motion.div>
        </div>

        {/* Video Container - Increased sizes for more impact */}
        <div className="px-4 lg:px-8 xl:px-12">
          <div className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden rounded-lg shadow-2xl">
          {hasYouTubeVideo ? (
            /* YouTube Video Embed */
            showVideo ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                title="56 Social Restaurant Ambiance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* Thumbnail with Play Button */
              <div className="relative w-full h-full cursor-pointer group" onClick={() => setShowVideo(true)}>
                <Image
                  src="/images/optimized/56-social-restaurant-interior-shaker-heights.jpg"
                  alt="56 Social Restaurant Interior"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gold/90 backdrop-blur-sm rounded-full p-6"
                  >
                    <Play size={48} className="text-white ml-2" fill="white" />
                  </motion.div>
                </div>
              </div>
            )
          ) : (
            /* Instructions for adding YouTube video */
            <div className="relative w-full h-full">
              <Image
                src="/images/optimized/56-social-restaurant-interior-shaker-heights.jpg"
                alt="56 Social Restaurant Interior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg text-center max-w-md">
                  <Play size={48} className="mx-auto mb-4 text-olive-green" />
                  <h3 className="font-montserrat text-xl font-bold text-charcoal mb-4">
                    YouTube Video Setup
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Run the setup helper:
                  </p>
                  <code className="block bg-gray-100 p-2 rounded text-sm mb-4">
                    python3 scripts/setup-youtube-video.py
                  </code>
                  <p className="text-sm text-gray-500 mb-2">
                    This will guide you through:
                  </p>
                  <ol className="text-left text-gray-600 text-sm space-y-1">
                    <li>• Uploading to YouTube</li>
                    <li>• Getting your video ID</li>
                    <li>• Automatic configuration</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {/* Gradient Overlays */}
          {showVideo && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>
            </>
          )}

          {/* Bottom Text Overlay - Larger text for bigger video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-12 left-12 max-w-3xl z-20 pointer-events-none"
          >
            <h3 className="font-montserrat text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 drop-shadow-2xl">
              Fresh. Local. Unforgettable.
            </h3>
            <p className="text-white/90 text-xl lg:text-2xl drop-shadow-xl">
              Step inside our vibrant space where every meal is a celebration of Mediterranean flavors
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-16 right-8 w-32 h-32 border-2 border-gold/30 rounded-full animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-16 left-8 w-24 h-24 border-2 border-terracotta/30 rounded-full animate-pulse delay-1000 pointer-events-none"></div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <div className="max-w-6xl mx-auto px-4 px-4 py-6">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
              <div>
                <span className="text-gold text-3xl font-bold">56+</span>
                <p className="text-white/70 text-sm">Salad Varieties</p>
              </div>
              <div>
                <span className="text-gold text-3xl font-bold">25+</span>
                <p className="text-white/70 text-sm">Years Experience</p>
              </div>
              <div>
                <span className="text-gold text-3xl font-bold">100%</span>
                <p className="text-white/70 text-sm">Fresh Daily</p>
              </div>
              <div>
                <span className="text-gold text-3xl font-bold">5★</span>
                <p className="text-white/70 text-sm">Guest Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}