'use client';

import { motion } from 'framer-motion';

export default function StatsBar() {
  const stats = [
    { number: '56+', label: 'Menu Selections' },
    { number: 'Daily', label: 'Social Hour' },
    { number: '100%', label: 'Made Fresh' },
    { number: '5★', label: 'Neighborhood Favorite' },
  ];

  return (
    <section className="bg-gradient-to-r from-espresso to-cafe-brown py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gold mb-2 group-hover:text-cream transition-colors">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-cream/80 uppercase tracking-wider font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}