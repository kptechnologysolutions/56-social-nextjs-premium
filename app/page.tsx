'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin,
  Clock,
  Phone,
  Instagram,
  Facebook,
  Mail,
  Heart,
  Calendar,
  Users
} from 'lucide-react';

// Import new components
import HeroCarousel from '@/components/HeroCarousel';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import ChefSection from '@/components/ChefSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import PhotoGalleryMasonry from '@/components/PhotoGalleryMasonry';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Timeline from '@/components/Timeline';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineEvents = [
    {
      year: '1995',
      title: 'Cafe 56 Opens',
      description: 'Jay Leitson pioneers 56 different salads at Eastgate',
      icon: 'location' as const,
      highlight: true
    },
    {
      year: '2012',
      title: 'Partnership Formed',
      description: 'Jay partners with Izzy Schachner',
      icon: 'team' as const
    },
    {
      year: '2015',
      title: '56 Kitchen & Catering',
      description: 'Two locations open plus launch of 56 Catering services',
      icon: 'award' as const
    },
    {
      year: '2018',
      title: 'Elle & Birdigo',
      description: 'Expanding culinary concepts',
      icon: 'location' as const
    },
    {
      year: '2025',
      title: '56 Social Opens',
      description: 'September - Continuing J. Pistone\'s legacy in Shaker Heights',
      icon: 'award' as const,
      highlight: true
    },
    {
      year: '2025',
      title: '56 Tavern @ The Aurora Inn',
      description: 'Newest location at 30 Shawnee Trail, Aurora',
      icon: 'location' as const,
      highlight: true
    }
  ];

  const testimonials = [
    { 
      name: 'Sarah M.', 
      text: 'The best Mediterranean food in Shaker Heights! The Original 56 salad is absolute perfection. Fresh ingredients, amazing flavors, and the staff treats you like family.',
      rating: 5,
      source: 'Google Reviews'
    },
    { 
      name: 'David L.', 
      text: 'So happy they\'re continuing the J. Pistone legacy. This place is already a neighborhood favorite! The breakfast menu is outstanding.',
      rating: 5,
      source: 'Yelp'
    },
    { 
      name: 'Jennifer K.', 
      text: 'Fresh ingredients, amazing flavors, and the nicest staff. The wine selection is thoughtfully curated. Can\'t wait to try everything on the menu!',
      rating: 5,
      source: 'OpenTable'
    },
    {
      name: 'Michael R.',
      text: 'From the creators of 56 Kitchen comes another gem. The Mediterranean platter is enough for two and absolutely delicious.',
      rating: 5,
      source: 'Google Reviews'
    }
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white text-center py-3 text-sm font-medium tracking-wide shadow-md">
        🍴 Now Open! Continuing the J. Pistone Legacy • 3245 Warrensville Center Rd
      </div>

      {/* Header Navigation - Updated with new colors */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-32 md:h-36">
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <img 
                  src="/images/56-social-logo.png" 
                  alt="56 Social Logo" 
                  className="h-28 md:h-32 w-auto transition-transform group-hover:scale-105"
                />
                <span className="text-sm text-[#4A90E2] ml-2" style={{fontFamily: 'Dancing Script, cursive', fontSize: '1.1em', fontWeight: 600}}>
                  Mediterranean Excellence
                </span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#story" className="text-[#2C3E50] hover:text-[#4A90E2] transition font-medium text-sm tracking-wide">
                Our Story
              </Link>
              <Link href="#menu" className="text-[#2C3E50] hover:text-[#4A90E2] transition font-medium text-sm tracking-wide">
                Menu
              </Link>
              <Link href="#gallery" className="text-[#2C3E50] hover:text-[#4A90E2] transition font-medium text-sm tracking-wide">
                Gallery
              </Link>
              <Link href="#catering" className="text-[#2C3E50] hover:text-[#4A90E2] transition font-medium text-sm tracking-wide">
                Catering
              </Link>
              <Link href="#visit" className="text-[#2C3E50] hover:text-[#4A90E2] transition font-medium text-sm tracking-wide">
                Visit
              </Link>
              <button className="btn btn-primary">
                Reserve Table
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Immersive Hero Carousel */}
      <HeroCarousel />

      {/* New Experience Section (replaces video) */}
      <SpecialtiesSection />

      {/* Chef/Story Section */}
      <ChefSection />

      {/* Timeline Section */}
      <section id="timeline" className="section bg-[#F8FAFB]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Our <span className="text-[#4A90E2] font-medium">Journey</span>
            </h2>
            <p className="text-lg text-[#546E7A] max-w-3xl mx-auto">
              From Cafe 56 to 56 Social, a legacy of culinary excellence
            </p>
          </motion.div>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* New Menu Section */}
      <MenuSection />

      {/* New Gallery Section */}
      <div id="gallery">
        <PhotoGalleryMasonry />
      </div>

      {/* Instagram Section - Fixed */}
      <section className="section bg-[#F8FAFB]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Follow <span className="text-gradient-warm font-medium">@56social_shaker</span>
            </h2>
            <p className="text-lg text-[#546E7A]">
              Daily specials, behind-the-scenes, and culinary inspiration
            </p>
          </motion.div>
          
          {/* Instagram Grid - Using existing images as placeholders */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
            {[
              '/images/56-social-mediterranean-cuisine-plated.jpg',
              '/images/56-social-fresh-salad-bar-cleveland.jpg',
              '/images/56-social-build-your-own-salad.jpg',
              '/images/56-social-mediterranean-food-spread.jpg',
              '/images/56-social-vegetarian-options-shaker.jpg',
              '/images/56-social-craft-beverages-ohio.jpg'
            ].map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Instagram post ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="btn btn-primary">
              <Instagram className="w-4 h-4 mr-2" />
              Follow Us on Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="section gradient-warm text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Catering <span className="font-medium">That Celebrates</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we bring the 56 Social experience to you
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Calendar className="w-12 h-12" />,
                title: 'Corporate Events',
                description: 'Impress with fresh Mediterranean options',
                features: ['Lunch boxes', 'Buffet style', 'Full service']
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Special Occasions',
                description: 'Make celebrations memorable',
                features: ['Custom menus', 'Dietary options', 'Staff service']
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Family Gatherings',
                description: 'Sharing brings everyone together',
                features: ['Large portions', 'Mix & match', 'Easy pickup']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 hover:bg-white/20 transition-all"
              >
                <div className="text-white/90 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-white/80 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/70 text-sm">
                      <span className="w-1 h-1 bg-white/70 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-[#4A90E2] px-8 py-4 font-bold hover:bg-[#F8FAFB] transition-all">
              Request Catering Quote
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Community <span className="text-[#4A90E2] font-medium">Love</span>
          </motion.h2>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="section bg-[#F8FAFB]">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Visit <span className="text-[#4A90E2]" style={{fontFamily: 'Dancing Script, cursive', fontSize: '1.2em', fontWeight: 600}}>56 Social</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-light mb-6">Location & Hours</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#4A90E2] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">3245 Warrensville Center Road</p>
                      <p className="text-[#546E7A]">Shaker Heights, OH 44122</p>
                      <p className="text-sm text-[#7A8450] mt-1">Free parking available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#4A90E2] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">(440) 684-5600</p>
                      <p className="text-[#546E7A]">Reservations & Orders</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#4A90E2] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">social@56restaurants.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#4A90E2] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-3">Hours</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-[#546E7A]">Mon-Thu:</span>
                        <span className="font-medium">11AM - 9PM</span>
                        <span className="text-[#546E7A]">Friday:</span>
                        <span className="font-medium">11AM - 10PM</span>
                        <span className="text-[#546E7A]">Saturday:</span>
                        <span className="font-medium">10AM - 10PM</span>
                        <span className="text-[#546E7A]">Sunday:</span>
                        <span className="font-medium">10AM - 8PM</span>
                      </div>
                      <p className="text-sm text-[#4A90E2] mt-3 font-medium">
                        Breakfast: Daily 9AM - 11AM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <button className="btn btn-primary flex-1">
                    Get Directions
                  </button>
                  <button className="btn btn-secondary flex-1">
                    Call Now
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 md:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.3!2d-81.5!3d41.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMwJzAwLjAiTiA4McKwMzAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="shadow-lg"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl font-bold text-[#F4C430]">56</span>
                <span className="text-3xl font-light ml-2">SOCIAL</span>
              </div>
              <p className="text-gray-400">Mediterranean Excellence</p>
              <p className="text-gray-400 text-sm mt-2">Continuing the J. Pistone Legacy</p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-[#4A90E2] rounded-full flex items-center justify-center hover:bg-[#7A8450] transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#4A90E2] rounded-full flex items-center justify-center hover:bg-[#7A8450] transition">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-[#F4C430]">Quick Links</h4>
              <div className="space-y-2">
                <Link href="#menu" className="block text-gray-400 hover:text-[#F4C430] transition">Menu</Link>
                <Link href="#catering" className="block text-gray-400 hover:text-[#F4C430] transition">Catering</Link>
                <Link href="#story" className="block text-gray-400 hover:text-[#F4C430] transition">Our Story</Link>
                <Link href="#visit" className="block text-gray-400 hover:text-[#F4C430] transition">Visit Us</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-[#F4C430]">Hours</h4>
              <div className="space-y-1 text-gray-400 text-sm">
                <p>Mon-Thu: 11AM - 9PM</p>
                <p>Friday: 11AM - 10PM</p>
                <p>Saturday: 10AM - 10PM</p>
                <p>Sunday: 10AM - 8PM</p>
                <p className="mt-3 text-[#F4C430]">Breakfast: 9AM - 11AM</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-[#F4C430]">56 Restaurant Group</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-[#F4C430] transition">56 Kitchen</a>
                <a href="#" className="block text-gray-400 hover:text-[#F4C430] transition">Elle</a>
                <a href="#" className="block text-gray-400 hover:text-[#F4C430] transition">Birdigo</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 <span style={{fontFamily: 'Dancing Script, cursive', fontWeight: 600}}>56 Social</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}