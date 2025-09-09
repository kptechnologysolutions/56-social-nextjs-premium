'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Leaf, Flame, Award } from 'lucide-react'

const menuCategories = [
  {
    title: 'Signature Salads',
    icon: Leaf,
    color: 'from-olive-green to-sage',
    items: [
      { name: 'The Original 56', price: '$12.95', tags: ['Popular', 'Vegetarian'] },
      { name: 'Mediterranean Classic', price: '$13.95', tags: ['Gluten-Free'] },
      { name: 'Harvest Cobb', price: '$15.95', tags: ['Protein-Rich'] },
    ]
  },
  {
    title: 'Warm Bowls',
    icon: Flame,
    color: 'from-terracotta to-orange-400',
    items: [
      { name: 'Ancient Grains Power', price: '$15.95', tags: ['Vegan'] },
      { name: 'Mediterranean Chicken', price: '$16.95', tags: ['Popular'] },
      { name: 'Falafel Bowl', price: '$14.95', tags: ['Vegetarian'] },
    ]
  },
  {
    title: 'Chef Specials',
    icon: Award,
    color: 'from-gold to-yellow-400',
    items: [
      { name: 'Daily Market Fish', price: 'Market Price', tags: ['Fresh Daily'] },
      { name: 'Lamb Shawarma Plate', price: '$18.95', tags: ['House Special'] },
      { name: 'Vegetable Tagine', price: '$13.95', tags: ['Vegan', 'Spicy'] },
    ]
  },
]

export default function MenuCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <section className="section-padding bg-gradient-to-b from-sand/20 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-charcoal mb-4">
            Fresh Daily Menu
          </h2>
          <p className="text-lg text-gray-600">
            Made from scratch with locally sourced ingredients
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-lg p-2">
            {menuCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === index
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{category.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {menuCategories[selectedCategory].items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Section */}
                <div className="h-48 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${menuCategories[selectedCategory].color}`}></div>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-white text-6xl"
                    animate={{ 
                      scale: hoveredCard === index ? 1.2 : 1,
                      rotate: hoveredCard === index ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                  </motion.div>
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Plus className="text-white" size={32} />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-xl text-charcoal">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-olive-green">
                      {item.price}
                    </span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-sand/50 text-xs font-medium rounded-full text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Add Button */}
                  <motion.button
                    className="mt-4 w-full bg-gradient-to-r from-olive-green to-sage text-white py-2 rounded-full font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0,
                      y: hoveredCard === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Quick Add
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-charcoal text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            View Complete Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}