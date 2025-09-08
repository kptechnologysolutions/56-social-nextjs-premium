'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Filter, Info, ShoppingBag, Clock, Flame, Leaf, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  dietary?: string[];
  calories?: string;
  prepTime?: string;
  spicy?: boolean;
  popular?: boolean;
  category: string;
}

interface InteractiveMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveMenuModal({ isOpen, onClose }: InteractiveMenuModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cart, setCart] = useState<MenuItem[]>([]);

  // Enhanced menu with images
  const menuItems: MenuItem[] = [
    // Breakfast
    {
      id: 'french-toast',
      name: 'Japanese Milk Bread French Toast',
      price: '10',
      description: 'Our signature breakfast! Thick-cut Japanese milk bread, fresh berry compote, local maple syrup, whipped cream',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop',
      dietary: ['Vegetarian'],
      calories: '580',
      prepTime: '15 min',
      popular: true,
      category: 'breakfast'
    },
    {
      id: 'latkes',
      name: '56 Social Latkes',
      price: '9',
      description: 'Crispy potato pancakes served with house-made apple sauce, sour cream, fresh chives',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop',
      dietary: ['Vegetarian', 'GF Available'],
      calories: '420',
      prepTime: '12 min',
      category: 'breakfast'
    },
    {
      id: 'med-breakfast',
      name: 'Mediterranean Breakfast Bowl',
      price: '12',
      description: 'Scrambled eggs, creamy feta, Kalamata olives, sun-dried tomatoes, warm pita',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop',
      dietary: ['Vegetarian'],
      calories: '490',
      prepTime: '10 min',
      category: 'breakfast'
    },
    
    // Salads
    {
      id: 'pewter-mug',
      name: 'The Original Pewter Mug',
      price: '17',
      description: 'Our legendary chopped salad! Iceberg lettuce, turkey, swiss cheese, tomatoes, our famous garlic vinaigrette',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
      dietary: ['GF Available'],
      calories: '380',
      prepTime: '8 min',
      popular: true,
      category: 'salads'
    },
    {
      id: 'med-dream',
      name: 'Mediterranean Dream',
      price: '15',
      description: 'Mixed greens, feta, olives, cucumber, red onion, lemon oregano dressing',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop',
      dietary: ['Vegetarian', 'Gluten-Free'],
      calories: '320',
      prepTime: '5 min',
      category: 'salads'
    },
    {
      id: 'harvest',
      name: 'Harvest Bounty',
      price: '16',
      description: 'Kale, quinoa, roasted seasonal vegetables, creamy tahini dressing',
      image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=600&h=400&fit=crop',
      dietary: ['Vegan', 'Gluten-Free'],
      calories: '410',
      prepTime: '10 min',
      category: 'salads'
    },
    
    // Sandwiches
    {
      id: 'falafel-wrap',
      name: 'Falafel Wrap',
      price: '12',
      description: 'House-made falafel, hummus, pickled vegetables, tahini sauce',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop',
      dietary: ['Vegan'],
      calories: '520',
      prepTime: '12 min',
      spicy: true,
      category: 'sandwiches'
    },
    {
      id: 'shawarma',
      name: 'Chicken Shawarma',
      price: '14',
      description: 'Marinated chicken, pickles, garlic sauce, warm pita bread',
      image: 'https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=600&h=400&fit=crop',
      dietary: [],
      calories: '580',
      prepTime: '15 min',
      popular: true,
      category: 'sandwiches'
    },
    
    // Warm Bowls
    {
      id: 'med-feast',
      name: 'Mediterranean Feast',
      price: '24',
      description: 'Hummus, baba ganoush, falafel, tabbouleh, warm pita bread - perfect for sharing!',
      image: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=600&h=400&fit=crop',
      dietary: ['Vegetarian', 'Vegan Option'],
      calories: '780',
      prepTime: '18 min',
      popular: true,
      category: 'bowls'
    },
    {
      id: 'power-protein',
      name: 'Power Protein Bowl',
      price: '18',
      description: 'Grilled chicken, quinoa, roasted vegetables, tahini drizzle',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop',
      dietary: ['Gluten-Free'],
      calories: '620',
      prepTime: '14 min',
      category: 'bowls'
    },
    
    // Beverages
    {
      id: 'lavender-latte',
      name: 'Lavender Latte',
      price: '6',
      description: 'House-made lavender syrup, espresso, steamed milk',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop',
      dietary: ['Vegetarian'],
      calories: '180',
      prepTime: '5 min',
      popular: true,
      category: 'beverages'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', icon: '🍳' },
    { id: 'salads', name: 'Salads', icon: '🥗' },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
    { id: 'bowls', name: 'Warm Bowls', icon: '🍲' },
    { id: 'beverages', name: 'Beverages', icon: '☕' }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full md:w-[90%] lg:w-[85%] bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between p-6">
                <div>
                  <h2 className="text-3xl font-light">
                    Interactive <span className="text-[#4A90E2] font-medium">Menu</span>
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">Click any item for details • Add to cart for catering</p>
                </div>
                <div className="flex items-center gap-4">
                  {cart.length > 0 && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#4A90E2] text-white rounded-full">
                      <ShoppingBag className="w-5 h-5" />
                      <span className="font-medium">{cart.length}</span>
                    </div>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="px-6 pb-4">
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search menu items..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4A90E2]"
                    />
                  </div>
                  <button className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    <span>Filters</span>
                  </button>
                </div>

                {/* Categories */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-[#4A90E2] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-2">{cat.icon}</span>
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Grid */}
            <div className="p-6 overflow-y-auto" style={{ height: 'calc(100% - 200px)' }}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
                    onClick={() => setSelectedItem(item)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.popular && (
                        <div className="absolute top-3 left-3 px-3 py-1 bg-[#F4C430] text-white text-xs font-medium rounded-full">
                          Popular
                        </div>
                      )}
                      {item.spicy && (
                        <div className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full">
                          <Flame className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium text-gray-900 flex-1">{item.name}</h3>
                        <span className="text-xl font-bold text-[#4A90E2]">${item.price}</span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        {item.prepTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.prepTime}
                          </div>
                        )}
                        {item.calories && (
                          <div>{item.calories} cal</div>
                        )}
                        {item.dietary && item.dietary.length > 0 && (
                          <div className="flex items-center gap-1">
                            <Leaf className="w-3 h-3 text-green-600" />
                            {item.dietary[0]}
                          </div>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(item);
                        }}
                        className="mt-4 w-full py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Add to Catering Order
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Item Detail Modal */}
            <AnimatePresence>
              {selectedItem && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20 flex items-center justify-center p-6"
                  onClick={() => setSelectedItem(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative h-64">
                      <Image
                        src={selectedItem.image}
                        alt={selectedItem.name}
                        fill
                        className="object-cover"
                      />
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-medium mb-2">{selectedItem.name}</h3>
                          <div className="flex gap-2">
                            {selectedItem.dietary?.map((diet) => (
                              <span key={diet} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                {diet}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-3xl font-bold text-[#4A90E2]">${selectedItem.price}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                      
                      <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200">
                        {selectedItem.prepTime && (
                          <div className="text-center">
                            <Clock className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                            <div className="text-sm font-medium">{selectedItem.prepTime}</div>
                            <div className="text-xs text-gray-500">Prep Time</div>
                          </div>
                        )}
                        {selectedItem.calories && (
                          <div className="text-center">
                            <Info className="w-6 h-6 mx-auto mb-1 text-gray-400" />
                            <div className="text-sm font-medium">{selectedItem.calories}</div>
                            <div className="text-xs text-gray-500">Calories</div>
                          </div>
                        )}
                        {selectedItem.spicy && (
                          <div className="text-center">
                            <Flame className="w-6 h-6 mx-auto mb-1 text-red-500" />
                            <div className="text-sm font-medium">Spicy</div>
                            <div className="text-xs text-gray-500">Heat Level</div>
                          </div>
                        )}
                      </div>
                      
                      <button
                        onClick={() => {
                          addToCart(selectedItem);
                          setSelectedItem(null);
                        }}
                        className="mt-6 w-full py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Add to Catering Order
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}