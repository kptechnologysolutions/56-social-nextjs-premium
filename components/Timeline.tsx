'use client';

import { motion } from 'framer-motion';
import { Calendar, Award, MapPin, Users } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: 'calendar' | 'award' | 'location' | 'team';
  highlight?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  const getIcon = (iconType?: string) => {
    switch(iconType) {
      case 'award': return <Award className="w-5 h-5" />;
      case 'location': return <MapPin className="w-5 h-5" />;
      case 'team': return <Users className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7d9d3a] via-[#c8a574] to-[#c47d5a]"></div>
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} ml-20 md:ml-0`}>
              <div className={`${event.highlight ? 'bg-gradient-to-r from-[#7d9d3a]/10 to-[#c8a574]/10 p-6 rounded-2xl' : ''}`}>
                <span className="text-[#c47d5a] font-bold text-lg">{event.year}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
            
            {/* Center Icon */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 bg-white border-4 border-[#7d9d3a] rounded-full p-3 shadow-lg">
              <div className="text-[#7d9d3a]">
                {getIcon(event.icon)}
              </div>
            </div>
            
            {/* Spacer for opposite side */}
            <div className="hidden md:block flex-1"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}