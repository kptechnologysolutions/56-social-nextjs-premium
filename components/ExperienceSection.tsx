'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={sectionRef} className="relative min-h-[40vh] overflow-hidden bg-[#2C2C2C]">
      {/* Background Image with Subtle Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <img
          src="/images/56-social-restaurant-interior-shaker-heights.jpg"
          alt="56 Social Restaurant Atmosphere"
          className="w-full h-[120%] object-cover"
        />
        {/* Warm Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#C73E1D]/40 via-[#2C2C2C]/60 to-[#2C2C2C]/80"></div>
      </motion.div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 min-h-[40vh] flex items-center"
        style={{ opacity }}
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Experience <span className="text-[#F4C430] font-medium">56 Social</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-12">
              Where Mediterranean tradition meets modern culinary artistry
            </p>
          </motion.div>

          {/* Simplified Stats - More Elegant */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: '56', label: 'Signature Dishes', suffix: '' },
              { value: '25', label: 'Years of Excellence', suffix: '+' },
              { value: '100', label: 'Fresh Daily', suffix: '%' },
              { value: '5', label: 'Star Reviews', suffix: '★' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-light text-[#F4C430] mb-2">
                  {stat.value}
                  <span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}