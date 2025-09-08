'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
}

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const images: GalleryImage[] = [
    { src: '/images/56-social-mediterranean-cuisine-plated.jpg', alt: 'Mediterranean Platter', category: 'food', featured: true },
    { src: '/images/56-social-fresh-salad-bar-cleveland.jpg', alt: 'Fresh Salad Bar', category: 'food' },
    { src: '/images/56-social-dining-room-mediterranean-restaurant.jpg', alt: 'Dining Room', category: 'interior' },
    { src: '/images/56-social-build-your-own-salad.jpg', alt: 'Build Your Own Salad', category: 'food' },
    { src: '/images/56-social-outdoor-seating-patio.jpg', alt: 'Outdoor Patio', category: 'interior' },
    { src: '/images/56-social-mediterranean-food-spread.jpg', alt: 'Mediterranean Spread', category: 'food', featured: true },
    { src: '/images/56-social-craft-beverages-ohio.jpg', alt: 'Craft Beverages', category: 'drinks' },
    { src: '/images/56-social-family-dining-shaker-heights.jpg', alt: 'Family Dining', category: 'moments' }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'food', label: 'Cuisine' },
    { id: 'interior', label: 'Ambiance' },
    { id: 'drinks', label: 'Beverages' },
    { id: 'moments', label: 'Moments' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Taste the <span className="text-[#C73E1D] font-medium">Experience</span>
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Every dish is crafted with passion, presented with pride
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? 'text-white bg-[#C73E1D]'
                  : 'text-[#6B6B6B] bg-transparent border border-[#E8E8E8] hover:border-[#C73E1D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Grid Gallery */}
        <div className="editorial-grid editorial-grid-asymmetric">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={`editorial-image group cursor-pointer ${
                image.featured ? 'featured' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                image.featured ? 'aspect-[4/3]' : 'aspect-square'
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  quality={75}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover Overlay with Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-light mb-1">{image.alt}</h3>
                    <p className="text-white/70 text-sm uppercase tracking-wider">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="text-[#C73E1D] font-medium hover:text-[#8F5A3A] transition-colors">
            Follow us on Instagram for daily specials →
          </button>
        </motion.div>
      </div>
    </section>
  );
}