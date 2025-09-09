'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = [
    { id: 'breakfast', name: 'Breakfast', time: 'Served 9am-11am daily' },
    { id: 'greens', name: 'Cool Greens' },
    { id: 'specialty', name: 'Specialty Salads' },
    { id: 'toasts', name: 'Toasts' },
    { id: 'handhelds', name: 'Handhelds' },
    { id: 'plates', name: 'Plates' },
    { id: 'flatbreads', name: 'Focaccia Flatbreads' },
  ];

  const menuItems = {
    breakfast: [
      {
        name: 'BREAKFAST SANDO',
        price: '9',
        description: 'scrambled or fried egg, white cheddar, thick cut bacon, smashed avocado, garlic aioli, on brioche bun'
      },
      {
        name: 'JAPANESE MILK BREAD FRENCH TOAST',
        price: '10',
        description: 'fresh berry compote, local maple'
      },
      {
        name: 'THE SCRAMBLE BOWL',
        price: '11',
        description: 'two free range scrambled eggs, 2 potato latkes, bacon or house made sausage, smashed avocado'
      },
      {
        name: '56 SOCIAL LATKES',
        price: '9',
        description: 'house-made apple sauce, sour cream',
        addOn: 'add house made pastrami'
      },
      {
        name: 'GREEK YOGURT BOWL',
        price: '6',
        description: 'greek yogurt, fresh berries, sliced banana, house granola'
      },
    ],
    greens: [
      {
        name: 'CLASSIC CAESAR',
        price: '12',
        description: 'romaine, pecorino, tomato, herb crouton, house caesar'
      },
      {
        name: 'FRENCH KISS',
        price: '14',
        description: 'mixed greens, caramelized pears, crumbled goat cheese, fresh berries, balsamic vinaigrette'
      },
      {
        name: 'HOUSE WEDGE',
        price: '13',
        description: 'iceberg, bacon, pickled red onion, tomato, bleu cheese crumbles, house bleu cheese dressing'
      },
      {
        name: 'CLASSIC FATTOUSH',
        price: '12',
        description: 'romaine, parsley, tomato, cucumber, scallion, radish, spiced & roasted chickpeas, za\'atar pita chips, sumac mint vinaigrette'
      },
      {
        name: 'SOCIAL GREENS',
        price: '12',
        description: 'mixed greens, tomato, cucumber, shredded mozzarella, crispy spiced chickpeas, white french dressing'
      },
      {
        name: 'GREENHOUSE',
        price: '13',
        description: 'romaine, peas, tomato, carrot, scallion, cucumber, radish, pistachio, green goddess dressing'
      },
    ],
    specialty: [
      {
        name: 'THE "ORIGINAL" PEWTER MUG',
        price: '17',
        description: 'chopped iceberg, turkey, turkey "ham", swiss, tomato, garlic vinaigrette',
        featured: true
      },
      {
        name: 'STEAKHOUSE',
        price: '18',
        description: 'romaine, tomato, crispy herb potatoes, balsamic onion, grilled flank steak, pistachio, chimichurri vinaigrette'
      },
      {
        name: 'FAR EAST',
        price: '16',
        description: 'mixed greens, green cabbage, red cabbage, red onion scallion, carrot, grilled chicken, sesame dressing'
      },
      {
        name: 'LA SCALA',
        price: '17',
        description: 'chopped iceberg, italian salami, shredded mozzarella-provolone blend, tomato, banana pepper, crispy chickpeas, red wine vinaigrette'
      },
      {
        name: 'WEST COAST',
        price: '16',
        description: 'mixed greens, quinoa with lemon, peas, strawberry, and mango, almonds, salmon, lemon vinaigrette'
      },
    ],
    toasts: [
      {
        name: 'SWEET & SPICY AVOCADO',
        price: '8',
        description: 'smashed avocado, marinated tomato, radish, spicy sriracha agave drizzle, on toasted harvest grain'
      },
      {
        name: 'TOMATO BASIL',
        price: '8',
        description: 'heirloom tomato, basil, whipped feta, evoo drizzle, on toasted sourdough'
      },
      {
        name: 'SOCIAL PB&J',
        price: '8',
        description: 'peanut butter, house jam, fresh sliced bananas, toasted pistachio, on toasted harvest grain'
      },
      {
        name: 'SMOKED SALMON',
        price: '12',
        description: 'smoked salmon, lemon dill cream cheese, capers, pickled red onion, on za\'atar focaccia'
      },
    ],
    handhelds: [
      {
        name: 'THE SOCIAL CLUB',
        price: '14',
        description: 'roasted turkey, avocado, bacon, LTO, garlic aioli, on house focaccia'
      },
      {
        name: 'CAESAR CHICKEN',
        price: '14',
        description: 'grilled or schnitzel chicken, caesar salad, marinated tomato, on house focaccia'
      },
      {
        name: 'PASTRAMI CUBAN',
        price: '17',
        description: 'house-made pastrami, oven roasted turkey, swiss, pickles, dijon aioli, on pressed house-made za\'atar focaccia'
      },
      {
        name: 'THE 56 SOCIAL BURGER',
        price: '14',
        description: 'house blend patty, tomato, lettuce, onion, swiss, salami, garlic aioli, on brioche bun'
      },
      {
        name: 'BEST BLT',
        price: '11',
        description: 'heirloom tomato, lettuce, thick cut bacon, aioli, basil, avocado, on sourdough'
      },
      {
        name: 'PAN-SEARED SALMON',
        price: '17',
        description: 'salmon, smashed avocado, arugula, dill crema, marinated tomatoes, capers, open face on toasted harvest grain'
      },
    ],
    plates: [
      {
        name: 'GRILLED FLANK STEAK',
        price: '',
        description: 'crispy za\'atar potatoes, green beans with blistered tomatoes, chimichurri'
      },
      {
        name: 'GRILLED CHICKEN BREAST',
        price: '',
        description: 'warm potato salad, arugula, whipped ricotta, crispy onion'
      },
      {
        name: 'BAKED SALMON',
        price: '',
        description: 'pearled couscous with herbs, heirloom tomato salad, grilled lemon'
      },
      {
        name: 'HOUSE-MADE FALAFEL',
        price: '',
        description: 'hummus, tabouleh, tzatziki, olive oil, toasted pita'
      },
    ],
    flatbreads: [
      {
        name: 'MARGHERITA',
        price: '9',
        description: 'heirloom tomato, basil, fresh mozzarella'
      },
      {
        name: 'PISTACHIO & PROSCIUTTO',
        price: '19',
        description: 'prosciutto, whipped feta, toasted pistachio, fresh herbs, hot honey'
      },
      {
        name: 'CARAMELIZED ONION & GOAT CHEESE',
        price: '15',
        description: 'caramelized onion, crumbled goat, arugula, chopped walnut, balsamic drizzle'
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-charcoal mb-4">
            Our <span className="text-olive-green">Menu</span>
          </h2>
          <p className="text-lg text-gray-600">
            Fresh, made-from-scratch Mediterranean cuisine
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-20 bg-white z-20 py-4">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-olive-green text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {menuItems[activeCategory]?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${item.featured ? 'md:col-span-2 bg-olive-green/5 p-6 rounded-lg' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-bold text-lg ${item.featured ? 'text-olive-green' : 'text-charcoal'}`}>
                  {item.name}
                </h3>
                {item.price && (
                  <span className="text-lg font-bold text-olive-green ml-4">
                    ${item.price}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
              {item.addOn && (
                <p className="text-olive-green text-sm mt-1 italic">
                  {item.addOn}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        {activeCategory === 'greens' && (
          <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Add protein to any salad:</span> chicken $6 | flank $7 | salmon $7 | tofu $6
            </p>
            <p className="text-xs text-gray-500 mt-2">
              All salads served with house-made bagel
            </p>
          </div>
        )}

        {activeCategory === 'handhelds' && (
          <div className="text-center mt-8 p-4 bg-gray-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-gray-600">
              All handhelds served with house sumac chips | Add a small caesar or field greens salad for $3.95
            </p>
          </div>
        )}

        {/* Soups Section */}
        {activeCategory === 'breakfast' && (
          <div className="mt-12 border-t pt-8">
            <h3 className="text-2xl font-bold text-center mb-6">Soups</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <h4 className="font-bold text-lg">ROASTED TOMATO BISQUE</h4>
                <p className="text-gray-600 text-sm">with avocado creme</p>
                <p className="text-olive-green font-bold">$5</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-lg">MATZOH BALL</h4>
                <p className="text-gray-600 text-sm">traditional style</p>
                <p className="text-olive-green font-bold">$5</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}