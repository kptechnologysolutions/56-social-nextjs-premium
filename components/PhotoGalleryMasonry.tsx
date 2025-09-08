'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Share2 } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  size: 'small' | 'medium' | 'large' | 'tall';
}

const galleryImages: GalleryImage[] = [
  // Breakfast Items
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop', alt: 'Japanese Milk Bread French Toast', category: 'cuisine', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop', alt: '56 Social Latkes', category: 'cuisine', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=800&fit=crop', alt: 'Mediterranean Breakfast Bowl', category: 'cuisine', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&h=600&fit=crop', alt: 'Avocado Toast', category: 'cuisine', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&h=600&fit=crop', alt: 'Steel Cut Oatmeal', category: 'cuisine', size: 'medium' },
  
  // Signature Salads
  { src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=800&fit=crop', alt: 'The Original Pewter Mug', category: 'cuisine', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop', alt: 'Mediterranean Dream Salad', category: 'cuisine', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&h=600&fit=crop', alt: 'Caesar Supreme', category: 'cuisine', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&h=1000&fit=crop', alt: 'Harvest Bounty', category: 'cuisine', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&h=600&fit=crop', alt: 'Steakhouse Classic', category: 'cuisine', size: 'medium' },
  
  // Beverages
  { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop', alt: 'Lavender Latte', category: 'drinks', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop', alt: 'Artisan Coffee', category: 'drinks', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1497534547324-0ebb3842e5d5?w=600&h=600&fit=crop', alt: 'Cappuccino', category: 'drinks', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1553484604-9f524520c793?w=800&h=600&fit=crop', alt: 'Fresh Juice Bar', category: 'drinks', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=600&fit=crop', alt: 'Specialty Tea', category: 'drinks', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&h=800&fit=crop', alt: 'Fresh Smoothies', category: 'drinks', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=800&fit=crop', alt: 'Iced Coffee', category: 'drinks', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&h=600&fit=crop', alt: 'Coffee Service', category: 'drinks', size: 'medium' },
  
  // Interior & Atmosphere (keeping some originals that work)
  { src: '/images/56-social-restaurant-interior-shaker-heights.jpg', alt: 'Restaurant Interior', category: 'ambiance', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=800&fit=crop', alt: 'Elegant Dining Room', category: 'ambiance', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&h=800&fit=crop', alt: 'Modern Restaurant Design', category: 'ambiance', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop', alt: 'Cozy Seating Area', category: 'ambiance', size: 'medium' },
  { src: '/images/56-social-outdoor-seating-patio.jpg', alt: 'Outdoor Patio', category: 'ambiance', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop', alt: 'Restaurant Bar', category: 'ambiance', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=600&fit=crop', alt: 'Table Setting', category: 'ambiance', size: 'small' },
  
  // Events & People
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&h=800&fit=crop', alt: 'Catering Service', category: 'moments', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&h=800&fit=crop', alt: 'Chef at Work', category: 'moments', size: 'tall' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop', alt: 'Fresh Ingredients', category: 'moments', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop', alt: 'Family Gathering', category: 'moments', size: 'large' },
  
  // Additional Mediterranean Dishes
  { src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=600&fit=crop', alt: 'Falafel Plate', category: 'social', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&h=600&fit=crop', alt: 'Hummus & Pita', category: 'social', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1593967858208-67ddb5b4c406?w=600&h=600&fit=crop', alt: 'Shawarma Wrap', category: 'social', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=600&h=800&fit=crop', alt: 'Mediterranean Mezze', category: 'social', size: 'tall' },
];

const categories = [
  { id: 'all', label: 'All Photos', icon: '📸' },
  { id: 'cuisine', label: 'Our Cuisine', icon: '🍽️' },
  { id: 'drinks', label: 'Beverages', icon: '🍹' },
  { id: 'ambiance', label: 'Ambiance', icon: '✨' },
  { id: 'moments', label: 'Moments', icon: '🎉' },
  { id: 'social', label: 'Social', icon: '📱' }
];

export default function PhotoGalleryMasonry() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const toggleLike = (imageSrc: string) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageSrc)) {
        newSet.delete(imageSrc);
      } else {
        newSet.add(imageSrc);
      }
      return newSet;
    });
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small': return 'col-span-1 row-span-1';
      case 'medium': return 'col-span-1 md:col-span-2 row-span-1';
      case 'large': return 'col-span-1 md:col-span-2 row-span-1 md:row-span-2';
      case 'tall': return 'col-span-1 row-span-2';
      default: return 'col-span-1 row-span-1';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFB]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-light mb-4">
            Visual <span className="text-[#4A90E2]" style={{fontFamily: 'Dancing Script, cursive', fontWeight: 600}}>Journey</span>
          </h2>
          <p className="text-lg text-[#546E7A] max-w-2xl mx-auto">
            Explore the beauty, flavors, and moments that make 56 Social special
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-[#4A90E2] text-white shadow-lg'
                  : 'bg-white text-[#546E7A] hover:bg-[#E8F4FD] border border-[#E8F4FD]'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
              <span className="ml-2 text-sm opacity-70">
                ({category.id === 'all' ? galleryImages.length : galleryImages.filter(img => img.category === category.id).length})
              </span>
            </motion.button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${selectedCategory}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.02,
                  layout: { duration: 0.3 }
                }}
                className={`${getSizeClasses(image.size)} relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-medium text-sm mb-2">{image.alt}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(image.src);
                          }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition"
                        >
                          <Heart 
                            className={`w-4 h-4 ${
                              likedImages.has(image.src) ? 'fill-red-500 text-red-500' : 'text-white'
                            }`}
                          />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-light text-[#4A90E2]">{galleryImages.length}+</div>
            <div className="text-sm text-[#546E7A] uppercase tracking-wide mt-2">Beautiful Moments</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#7A8450]">56+</div>
            <div className="text-sm text-[#546E7A] uppercase tracking-wide mt-2">Unique Dishes</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#E07B39]">100%</div>
            <div className="text-sm text-[#546E7A] uppercase tracking-wide mt-2">Fresh Daily</div>
          </div>
          <div>
            <div className="text-4xl font-light text-[#F4C430]">5★</div>
            <div className="text-sm text-[#546E7A] uppercase tracking-wide mt-2">Guest Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg">
                <p className="text-white text-lg font-medium mb-2">{selectedImage.alt}</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleLike(selectedImage.src)}
                    className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition flex items-center gap-2"
                  >
                    <Heart className={`w-5 h-5 ${
                      likedImages.has(selectedImage.src) ? 'fill-red-500 text-red-500' : 'text-white'
                    }`} />
                    <span className="text-white">Like</span>
                  </button>
                  <button className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-white" />
                    <span className="text-white">Share</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}