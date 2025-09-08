'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Salad, Coffee, Wine, Utensils } from 'lucide-react';

const specialties = [
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Japanese Milk Bread French Toast",
    description: "Fresh berry compote, local maple syrup, whipped cream - Our breakfast signature",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop"
  },
  {
    icon: <Salad className="w-8 h-8" />,
    title: "The Original Pewter Mug",
    description: "Chopped iceberg, turkey, swiss, tomato with our famous garlic vinaigrette",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=600&fit=crop"
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Artisan Coffee & Lattes",
    description: "Lavender lattes, cappuccinos, and specialty coffee drinks made to perfection",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop"
  },
  {
    icon: <Wine className="w-8 h-8" />,
    title: "Mediterranean Specialties",
    description: "Falafel, shawarma, hummus plates, and authentic Mediterranean dishes",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop"
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF9F6] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C65D00] text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Specialties
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            What Makes Us <span className="text-[#C65D00] font-medium">Special</span>
          </h2>
          <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
            From build-your-own salads to craft cocktails and Mediterranean favorites
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={specialty.image}
                    alt={specialty.title}
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 text-[#C65D00] z-10">
                    {specialty.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#36454F] mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-[#5D6D7E] text-sm leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-[#7A8450] text-white py-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-[#D4A574]">56+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Fresh Ingredients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4A574]">25+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4A574]">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Made Fresh Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#D4A574]">5★</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Customer Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}