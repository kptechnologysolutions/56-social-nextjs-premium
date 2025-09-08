'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Info, MapPin, Users, Coffee, Utensils } from 'lucide-react';

interface TourStop {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string[];
  icon: React.ReactNode;
}

export default function VirtualTour() {
  const [currentStop, setCurrentStop] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const tourStops: TourStop[] = [
    {
      id: 'entrance',
      name: 'Welcome Entrance',
      description: 'Step into our warm Mediterranean-inspired space',
      image: '/images/optimized/56-social-restaurant-interior-shaker-heights.jpg',
      details: [
        'Original J. Pistone Legacy location',
        'Mediterranean-inspired decor',
        'Natural light-filled space',
        'Wheelchair accessible'
      ],
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 'main-dining',
      name: 'Main Dining Area',
      description: 'Comfortable seating for families and friends',
      image: '/images/optimized/56-social-dining-room-mediterranean-restaurant.jpg',
      details: [
        'Seats up to 80 guests',
        'Flexible table arrangements',
        'Perfect for groups',
        'Ambient Mediterranean lighting'
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'coffee-bar',
      name: 'Artisan Coffee Bar',
      description: 'Watch our baristas craft your perfect beverage',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
      details: [
        'Specialty coffee drinks',
        'Famous Lavender Lattes',
        'Fresh-baked pastries',
        'Morning rush express service'
      ],
      icon: <Coffee className="w-6 h-6" />
    },
    {
      id: 'kitchen-view',
      name: 'Open Kitchen Concept',
      description: 'See our chefs prepare your meal with care',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
      details: [
        'Watch meals being prepared',
        'Fresh ingredients daily',
        'Mediterranean cooking techniques',
        'Allergen-conscious preparation'
      ],
      icon: <Utensils className="w-6 h-6" />
    },
    {
      id: 'patio',
      name: 'Outdoor Patio',
      description: 'Al fresco dining in Shaker Heights',
      image: '/images/optimized/56-social-outdoor-seating-patio.jpg',
      details: [
        'Seasonal outdoor seating',
        'Pet-friendly area',
        'Heated during cooler months',
        'Perfect for sunny days'
      ],
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 'private-dining',
      name: 'Private Event Space',
      description: 'Host your special occasions with us',
      image: '/images/optimized/56-social-team-catering-events.jpg',
      details: [
        'Accommodates 30 guests',
        'Perfect for celebrations',
        'Custom catering menus',
        'AV equipment available'
      ],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % tourStops.length);
  };

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FAF9F6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#4A90E2] text-sm font-medium tracking-widest uppercase mb-4 block">
            Virtual Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Take a <span className="text-[#4A90E2] font-medium">Virtual Tour</span>
          </h2>
          <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
            Explore our beautiful space from the comfort of your home
          </p>
        </motion.div>

        {/* Tour Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tour Stops Navigation */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-medium mb-4 text-[#36454F]">Tour Stops</h3>
              <div className="space-y-2">
                {tourStops.map((stop, index) => (
                  <motion.button
                    key={stop.id}
                    onClick={() => setCurrentStop(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      currentStop === index
                        ? 'bg-[#4A90E2] text-white shadow-lg'
                        : 'bg-white hover:bg-gray-50 text-gray-700'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${currentStop === index ? 'text-white' : 'text-[#4A90E2]'}`}>
                        {stop.icon}
                      </div>
                      <div>
                        <div className="font-medium">{stop.name}</div>
                        <div className={`text-sm ${currentStop === index ? 'text-white/80' : 'text-gray-500'}`}>
                          Stop {index + 1} of {tourStops.length}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Tour Progress */}
              <div className="mt-6 p-4 bg-[#7A8450]/10 rounded-lg">
                <div className="flex justify-between text-sm text-[#7A8450] mb-2">
                  <span>Tour Progress</span>
                  <span>{Math.round(((currentStop + 1) / tourStops.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-[#7A8450] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStop + 1) / tourStops.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Main Tour View */}
            <div className="lg:col-span-2">
              <motion.div
                key={currentStop}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-96 group">
                  <Image
                    src={tourStops[currentStop].image}
                    alt={tourStops[currentStop].name}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevStop}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextStop}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Fullscreen Button */}
                  <button
                    onClick={() => setIsFullscreen(true)}
                    className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>

                  {/* Info Badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                      <h3 className="text-xl font-medium mb-1">{tourStops[currentStop].name}</h3>
                      <p className="text-sm text-gray-600">{tourStops[currentStop].description}</p>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-4">
                    <Info className="w-5 h-5 text-[#4A90E2] mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">About this area</h4>
                      <ul className="space-y-2">
                        {tourStops[currentStop].details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-[#7A8450] mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors">
                      Book a Table Here
                    </button>
                    <button className="flex-1 py-2 border-2 border-[#4A90E2] text-[#4A90E2] rounded-lg hover:bg-[#4A90E2] hover:text-white transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Tour Controls */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={prevStop}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#4A90E2] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous Stop
                </button>
                
                <div className="flex gap-2">
                  {tourStops.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStop(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentStop === index
                          ? 'w-8 bg-[#4A90E2]'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStop}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#4A90E2] transition-colors"
                >
                  Next Stop
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-light mb-4">
            Ready to Experience It <span className="text-[#4A90E2] font-medium">In Person?</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Nothing beats the real experience. Join us for a meal today!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-[#4A90E2] text-white font-medium hover:bg-[#357ABD] transition-all">
              Reserve Your Table
            </button>
            <button className="px-8 py-3 border-2 border-[#4A90E2] text-[#4A90E2] font-medium hover:bg-[#4A90E2] hover:text-white transition-all">
              Get Directions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}