import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image 
              src="/images/56-social-logo.png" 
              alt="56 Social" 
              width={200}
              height={50}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Fast Casual Mediterranean cuisine in the heart of Shaker Heights. Fresh, locally-sourced ingredients meet authentic Mediterranean flavors.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com/56social" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/56social" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#catering" className="hover:text-white transition-colors">Catering</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Monday - Thursday: 4PM - 11PM</p>
                  <p>Friday - Saturday: 4PM - 2AM</p>
                  <p>Sunday: 11AM - 10PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>3245 Warrensville Center Road<br />Shaker Heights, OH 44122</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>(440) 684-5600</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>social@56restaurants.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 56 Social. All rights reserved. Part of the 56 Restaurant Group.</p>
        </div>
      </div>
    </footer>
  );
}