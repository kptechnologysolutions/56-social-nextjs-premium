'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveMenuModal from './InteractiveMenuModal';
import { Eye, Grid3x3 } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  dietary?: string[];
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const menuCategories: MenuCategory[] = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      items: [
        {
          name: 'Japanese Milk Bread French Toast',
          price: '10',
          description: 'Fresh berry compote, local maple syrup, whipped cream',
          dietary: ['🌱 Vegetarian']
        },
        {
          name: '56 Social Latkes',
          price: '9',
          description: 'House-made apple sauce, sour cream, chives',
          dietary: ['🌱 Vegetarian', '🌾 GF Available']
        },
        {
          name: 'Mediterranean Breakfast Bowl',
          price: '12',
          description: 'Scrambled eggs, feta, olives, tomatoes, warm pita',
          dietary: ['🌱 Vegetarian']
        },
        {
          name: 'Breakfast Sandwich',
          price: '9',
          description: 'Fried egg, white cheddar, bacon, avocado, brioche'
        },
        {
          name: 'Avocado Toast',
          price: '11',
          description: 'Multi-grain bread, poached eggs, cherry tomatoes, microgreens',
          dietary: ['🌱 Vegetarian']
        },
        {
          name: 'Steel Cut Oatmeal',
          price: '8',
          description: 'Fresh berries, honey, toasted almonds',
          dietary: ['🥬 Vegan', '🌾 Gluten-Free']
        }
      ]
    },
    {
      id: 'salads',
      name: 'Signature Salads',
      items: [
        {
          name: 'The Original Pewter Mug',
          price: '17',
          description: 'Chopped iceberg, turkey, swiss, tomato, our famous garlic vinaigrette'
        },
        {
          name: 'Mediterranean Dream',
          price: '15',
          description: 'Mixed greens, feta, olives, cucumber, red onion, lemon oregano dressing',
          dietary: ['🌱 Vegetarian', '🌾 Gluten-Free']
        },
        {
          name: 'Harvest Bounty',
          price: '16',
          description: 'Kale, quinoa, roasted vegetables, tahini dressing',
          dietary: ['🥬 Vegan', '🌾 Gluten-Free']
        },
        {
          name: 'Steakhouse Classic',
          price: '18',
          description: 'Romaine, grilled steak, blue cheese, crispy onions, balsamic'
        },
        {
          name: 'Caesar Supreme',
          price: '14',
          description: 'Romaine, parmesan, house-made croutons, caesar dressing',
          dietary: ['🌱 Vegetarian']
        },
        {
          name: 'Asian Sesame',
          price: '15',
          description: 'Napa cabbage, mandarin oranges, almonds, sesame ginger dressing',
          dietary: ['🥬 Vegan']
        },
        {
          name: 'Build Your Own',
          price: '13+',
          description: 'Choose from 56+ fresh ingredients and house-made dressings'
        }
      ]
    },
    {
      id: 'bowls',
      name: 'Warm Bowls',
      items: [
        {
          name: 'Mediterranean Feast',
          price: '24',
          description: 'Hummus, baba ganoush, falafel, tabbouleh, warm pita bread',
          dietary: ['🌱 Vegetarian', '🥬 Vegan Option']
        },
        {
          name: 'Southwest Fiesta',
          price: '16',
          description: 'Black beans, corn, avocado, pico de gallo, chipotle ranch',
          dietary: ['🌾 Gluten-Free']
        },
        {
          name: 'Power Protein',
          price: '18',
          description: 'Grilled chicken, quinoa, roasted vegetables, tahini',
          dietary: ['🌾 Gluten-Free']
        },
        {
          name: 'Buddha Bowl',
          price: '15',
          description: 'Brown rice, edamame, carrots, cucumber, peanut sauce',
          dietary: ['🥬 Vegan', '🌾 Gluten-Free']
        },
        {
          name: 'Greek Goddess',
          price: '17',
          description: 'Orzo, grilled vegetables, feta, olives, tzatziki',
          dietary: ['🌱 Vegetarian']
        }
      ]
    },
    {
      id: 'sandwiches',
      name: 'Sandwiches & Wraps',
      items: [
        {
          name: 'Falafel Wrap',
          price: '12',
          description: 'House-made falafel, hummus, pickled vegetables, tahini',
          dietary: ['🥬 Vegan']
        },
        {
          name: 'Turkey Club',
          price: '13',
          description: 'Roasted turkey, bacon, lettuce, tomato, avocado aioli'
        },
        {
          name: 'Grilled Vegetable Panini',
          price: '11',
          description: 'Zucchini, peppers, mozzarella, basil pesto',
          dietary: ['🌱 Vegetarian']
        },
        {
          name: 'Chicken Shawarma',
          price: '14',
          description: 'Marinated chicken, pickles, garlic sauce, warm pita'
        },
        {
          name: 'Caprese Sandwich',
          price: '12',
          description: 'Fresh mozzarella, tomatoes, basil, balsamic glaze',
          dietary: ['🌱 Vegetarian']
        }
      ]
    },
    {
      id: 'dinner',
      name: 'Evening Specialties',
      items: [
        {
          name: 'Grilled Lamb Chops',
          price: '32',
          description: 'Herb-crusted, roasted vegetables, mint yogurt sauce',
          dietary: ['🌾 Gluten-Free']
        },
        {
          name: 'Fresh Catch',
          price: '28',
          description: 'Daily selection, lemon butter, seasonal vegetables',
          dietary: ['🌾 Gluten-Free']
        },
        {
          name: 'Vegetable Moussaka',
          price: '19',
          description: 'Layers of eggplant, zucchini, potatoes, béchamel sauce',
          dietary: ['🌱 Vegetarian']
        },
        {
          name: 'Chicken Souvlaki',
          price: '22',
          description: 'Marinated chicken skewers, rice pilaf, tzatziki',
          dietary: ['🌾 Gluten-Free']
        },
        {
          name: 'Beef Kofta',
          price: '24',
          description: 'Spiced ground beef, bulgur wheat, tahini sauce'
        },
        {
          name: 'Seafood Paella',
          price: '26',
          description: 'Saffron rice, shrimp, mussels, chorizo',
          dietary: ['🌾 Gluten-Free']
        }
      ]
    }
  ];

  // Get filtered items
  const displayItems = activeCategory === 'all' 
    ? menuCategories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name })))
    : menuCategories.find(cat => cat.id === activeCategory)?.items.map(item => ({ ...item, category: menuCategories.find(cat => cat.id === activeCategory)?.name })) || [];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C65D00] text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Fresh Daily <span className="text-[#C65D00] font-medium">Selections</span>
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto mb-6">
            Farm-to-table ingredients, Mediterranean recipes, unforgettable flavors
          </p>
          
          {/* Interactive Menu Button */}
          <button
            onClick={() => setIsMenuModalOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A90E2] text-white font-medium hover:bg-[#357ABD] transition-all transform hover:scale-105 hover:shadow-xl"
          >
            <Grid3x3 className="w-5 h-5" />
            Explore Interactive Menu
            <Eye className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2.5 font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-[#C65D00] text-white'
                : 'bg-[#FDF5E6] text-[#6B6B6B] hover:bg-[#C65D00]/10'
            }`}
          >
            All Items
          </button>
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-[#C65D00] text-white'
                  : 'bg-[#FDF5E6] text-[#6B6B6B] hover:bg-[#C65D00]/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {displayItems.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(index * 0.05, 0.3) }}
              className="bg-white border border-[#E8E8E8] p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-medium text-[#2C2C2C] mb-1">
                    {item.name}
                  </h3>
                  {item.category && activeCategory === 'all' && (
                    <span className="text-xs text-[#C65D00] uppercase tracking-wide">
                      {item.category}
                    </span>
                  )}
                </div>
                <span className="text-xl font-bold text-[#C65D00]">
                  ${item.price}
                </span>
              </div>
              
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              
              {item.dietary && (
                <div className="flex flex-wrap gap-2">
                  {item.dietary.map((diet) => (
                    <span key={diet} className="text-xs text-[#7A8450]">
                      {diet}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#6B6B6B] mb-4">
            Looking for our full menu with seasonal specials?
          </p>
          <button className="btn btn-primary">
            Download Full Menu PDF
          </button>
        </motion.div>
      </div>
      
      {/* Interactive Menu Modal */}
      <InteractiveMenuModal 
        isOpen={isMenuModalOpen} 
        onClose={() => setIsMenuModalOpen(false)} 
      />
    </section>
  );
}