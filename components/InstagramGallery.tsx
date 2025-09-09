'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, MessageCircle, Send, Bookmark, X } from 'lucide-react'

const instagramPosts = [
  { id: 1, image: '/images/56-social-fresh-daily-specials.jpg', likes: 234, caption: 'Fresh daily specials at 56 Social! #ShakerHeights', date: '2 days ago' },
  { id: 2, image: '/images/56-social-mediterranean-food-spread.jpg', likes: 489, caption: 'Mediterranean magic from our kitchen #ClevelandEats', date: '3 days ago' },
  { id: 3, image: '/images/56-social-build-your-own-salad.jpg', likes: 445, caption: 'Build your perfect salad! #56Social', date: '5 days ago' },
  { id: 4, image: '/images/56-social-catering-platters-cleveland.jpg', likes: 321, caption: 'Catering your next event! #ClevelandCatering', date: '1 week ago' },
  { id: 5, image: '/images/56-social-fresh-ingredients-display.jpg', likes: 567, caption: 'Farm fresh ingredients daily #FarmToTable', date: '1 week ago' },
  { id: 6, image: '/images/56-social-wine-bar-selection.jpg', likes: 298, caption: 'Wine Wednesday anyone? #WineBar', date: '2 weeks ago' },
  { id: 7, image: '/images/56-social-happy-hour-specials.jpg', likes: 412, caption: 'Happy Hour 4-7PM daily! #HappyHour', date: '2 weeks ago' },
  { id: 8, image: '/images/56-social-instagram-fresh-salads.jpg', likes: 378, caption: 'Lunch rush ready! #FastCasual', date: '3 weeks ago' },
]

export default function InstagramGallery() {
  const [selectedPost, setSelectedPost] = useState<typeof instagramPosts[0] | null>(null)
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4">
            @56social_shaker
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Follow our culinary journey on Instagram
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer aspect-square"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center gap-4 justify-center mb-2">
                    <div className="flex items-center gap-1">
                      <Heart fill="white" size={20} />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle fill="white" size={20} />
                      <span className="font-semibold">23</span>
                    </div>
                  </div>
                  <p className="text-xs px-4">{post.caption}</p>
                </div>
              </div>

              {/* Instagram Style Corner Icon */}
              <div className="absolute top-2 right-2 text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Send size={20} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://instagram.com/56social_shaker"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span>Follow on Instagram</span>
            <span className="text-2xl">→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image */}
              <div className="md:w-2/3 bg-black flex items-center justify-center">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Details */}
              <div className="md:w-1/3 p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-olive-green to-sage rounded-full"></div>
                    <div>
                      <p className="font-semibold">56social_shaker</p>
                      <p className="text-xs text-gray-500">{selectedPost.date}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedPost(null)}>
                    <X size={24} />
                  </button>
                </div>
                
                <p className="mb-4">{selectedPost.caption}</p>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t">
                  <button
                    onClick={() => handleLike(selectedPost.id)}
                    className="hover:scale-110 transition-transform"
                  >
                    <Heart 
                      size={24} 
                      fill={likedPosts.includes(selectedPost.id) ? 'red' : 'none'}
                      className={likedPosts.includes(selectedPost.id) ? 'text-red-500' : ''}
                    />
                  </button>
                  <button className="hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </button>
                  <button className="hover:scale-110 transition-transform">
                    <Send size={24} />
                  </button>
                  <button className="ml-auto hover:scale-110 transition-transform">
                    <Bookmark size={24} />
                  </button>
                </div>
                
                <p className="text-sm font-semibold mt-3">
                  {selectedPost.likes + (likedPosts.includes(selectedPost.id) ? 1 : 0)} likes
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}