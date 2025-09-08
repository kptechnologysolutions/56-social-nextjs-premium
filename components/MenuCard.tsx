'use client';

import { motion } from 'framer-motion';

interface MenuItemProps {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  image?: string;
  dietary?: string[];
}

export default function MenuCard({ name, price, description, featured, image, dietary }: MenuItemProps) {
  return (
    <motion.div 
      className={`card p-6 ${featured ? 'ring-2 ring-[#7d9d3a]' : ''} hover-lift`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {image && (
        <div className="img-zoom h-48 rounded-lg mb-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <div>
          {featured && (
            <span className="inline-block bg-[#7d9d3a] text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
              Signature
            </span>
          )}
          <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
        </div>
        <span className="text-[#c47d5a] font-bold text-lg">{price}</span>
      </div>
      
      <p className="text-gray-600 mb-3">{description}</p>
      
      {dietary && dietary.length > 0 && (
        <div className="flex gap-2 mt-3">
          {dietary.map((item, idx) => (
            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}