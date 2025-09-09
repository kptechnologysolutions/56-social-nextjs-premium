'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const salads = [
  {
    id: 1,
    name: 'The Original 56',
    description: 'Mixed greens, 5 vegetables, 6 toppings - our founding salad from Cafe 56',
    price: '$12.95',
    category: 'signature',
    icon: '',
    image: '/images/56-social-build-your-own-salad.jpg',
    alt: 'The Original 56 Salad - Build Your Own at 56 Social Shaker Heights',
  },
  {
    id: 2,
    name: 'Mediterranean Classic',
    description: 'Romaine, feta, olives, cucumbers, tomatoes, house-made Greek dressing',
    price: '$13.95',
    category: 'original',
    icon: '',
    image: '/images/56-social-mediterranean-food-spread.jpg',
    alt: 'Mediterranean Classic Salad with Feta and Olives',
  },
  {
    id: 3,
    name: 'Harvest Cobb',
    description: 'Mixed greens, turkey, bacon, egg, avocado, blue cheese',
    price: '$15.95',
    category: 'original',
    icon: '',
    image: '/images/56-social-fresh-salad-bar-cleveland.jpg',
    alt: 'Harvest Cobb Salad with Fresh Ingredients',
  },
  {
    id: 4,
    name: 'Asian Sesame',
    description: 'Napa cabbage, mandarin oranges, crispy noodles, sesame ginger dressing',
    price: '$13.95',
    category: 'original',
    icon: '',
    image: '/images/56-social-vegetarian-options-shaker.jpg',
    alt: 'Asian Sesame Salad - Vegetarian Option',
  },
  {
    id: 5,
    name: 'Southwest Fiesta',
    description: 'Romaine, black beans, corn, avocado, tortilla strips, chipotle ranch',
    price: '$14.95',
    category: 'signature',
    icon: '',
    image: '/images/56-social-fresh-daily-specials.jpg',
    alt: 'Southwest Fiesta Salad - Daily Special',
  },
  {
    id: 6,
    name: 'Power Protein',
    description: 'Quinoa, chickpeas, grilled chicken, kale, tahini dressing',
    price: '$16.95',
    category: 'signature',
    icon: '',
    image: '/images/56-social-mediterranean-cuisine-plated.jpg',
    alt: 'Power Protein Bowl with Quinoa and Chickpeas',
  },
]

const categories = [
  { id: 'all', name: 'All Favorites' },
  { id: 'original', name: 'Original Classics' },
  { id: 'signature', name: 'New Signatures' },
]

export default function SaladsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredSalads = selectedCategory === 'all' 
    ? salads 
    : salads.filter(salad => salad.category === selectedCategory)

  return (
    <section id="salads" className="section-padding bg-sand relative overflow-hidden">
      {/* Background 56 */}
      <div className="absolute -top-20 -right-20 text-white/10 font-crimson text-[20rem] font-bold select-none">
        56
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-charcoal mb-4">Customer Favorites</h2>
          <p className="text-lg text-terracotta italic">
            Bringing back the beloved originals from Cafe 56, plus new Mediterranean creations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-olive-green text-white'
                  : 'bg-white text-olive-green border-2 border-olive-green hover:bg-olive-green hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Salads Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSalads.map((salad, index) => (
            <motion.div
              key={salad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                {salad.image ? (
                  <img 
                    src={salad.image} 
                    alt={salad.alt || `${salad.name} at 56 Social Mediterranean Restaurant`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-olive-green to-sage flex items-center justify-center text-6xl">
                    {salad.icon}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-crimson text-xl font-bold text-charcoal">
                    {salad.name}
                  </h3>
                  <span className="bg-terracotta text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {salad.category.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{salad.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-olive-green">{salad.price}</span>
                  <button className="text-terracotta font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Customize <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-olive-green text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            View Full Menu
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Plus daily specials and seasonal creations
          </p>
        </div>
      </div>
    </section>
  )
}