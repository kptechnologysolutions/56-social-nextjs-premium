'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Leaf, Heart } from 'lucide-react';

export default function ChefSection() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C73E1D] text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Meet the <span className="text-[#C73E1D] font-medium">Creators</span>
            </h2>
            
            <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
              <p className="text-lg font-light">
                <span className="text-[#2C2C2C] font-medium">Jay Leitson</span> and <span className="text-[#2C2C2C] font-medium">Izzy Schachner</span> bring 
                over 50 years of combined culinary expertise to 56 Social.
              </p>
              
              <p>
                Jay's journey began in 1995 with Cafe 56, where he pioneered the concept of 56 different salads. 
                His passion for fresh, local ingredients has been the cornerstone of every restaurant since.
              </p>
              
              <p>
                Izzy brings a refined palate and operational excellence, having transformed the Cleveland 
                dining scene with innovative concepts that blend tradition with modern culinary techniques.
              </p>
              
              <p className="text-[#C73E1D] font-medium italic">
                "We're honored to continue the J. Pistone legacy in this beloved Shaker Heights location, 
                bringing our Mediterranean-inspired cuisine to a community that values quality and authenticity."
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#F4C430] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2C2C2C]">Award-Winning</h4>
                  <p className="text-sm text-[#6B6B6B]">Cleveland's Best Salad 5 Years Running</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#F4C430] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2C2C2C]">Family Owned</h4>
                  <p className="text-sm text-[#6B6B6B]">Three generations of excellence</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-[#F4C430] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2C2C2C]">Farm Partners</h4>
                  <p className="text-sm text-[#6B6B6B]">Local Ohio farms & suppliers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#F4C430] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2C2C2C]">Community First</h4>
                  <p className="text-sm text-[#6B6B6B]">Supporting local since 1995</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Chef/Team Image */}
            <div className="relative overflow-hidden h-[500px]">
              <Image
                src="/images/img-dining-room.jpg"
                alt="Jay Leitson and Izzy Schachner - 56 Social Interior"
                fill
                loading="lazy"
                quality={75}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay with Quote */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <blockquote className="text-white">
                  <p className="text-lg font-light italic mb-2">
                    "Every dish tells a story of tradition, innovation, and love for great food."
                  </p>
                  <cite className="text-[#F4C430] text-sm font-medium not-italic">
                    — Jay Leitson & Izzy Schachner, Founders
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* Restaurant Group Badge */}
            <div className="absolute -top-4 -right-4 bg-[#D4A574] text-white p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-xs uppercase tracking-wide">Concepts</div>
                <div className="text-xs mt-1">56 Restaurant Group</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Restaurant Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-12 border-t border-[#E8E8E8]"
        >
          <h3 className="text-center text-2xl font-light mb-8 text-[#2C2C2C]">
            Part of the <span className="text-[#C73E1D] font-medium">56 Restaurant Group</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: '56 Kitchen', location: '2 Locations', year: '2015' },
              { name: '56 Catering', location: 'Online Orders', year: '2015' },
              { name: 'Elle', location: 'Chagrin Falls', year: '2018' },
              { name: 'Birdigo', location: 'Beachwood', year: '2019' },
              { name: '56 Social', location: 'Shaker Heights', year: '2025' },
              { name: '56 Tavern', location: 'Aurora Inn', year: '2025' }
            ].map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <h4 className="text-lg font-medium text-[#2C2C2C] group-hover:text-[#C73E1D] transition-colors">
                  {restaurant.name}
                </h4>
                <p className="text-sm text-[#6B6B6B]">{restaurant.location}</p>
                <p className="text-xs text-[#C73E1D] mt-1">Since {restaurant.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}