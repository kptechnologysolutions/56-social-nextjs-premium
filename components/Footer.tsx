import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-crimson text-3xl font-bold mb-4">
              <span className="text-gold">56</span> SOCIAL
            </h3>
            <p className="text-gray-400 mb-4">Fast Casual Mediterranean</p>
            <p className="text-sm text-gray-500">
              Part of the 56 Restaurant Group
              <br />
              56 Kitchen (2 locations) • Elle • Birdigo • 56 Social
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Est. 2024 | Formerly J. Pistone Market
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-4">Visit Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-gold" />
                <div>
                  3245 Warrensville Center Road
                  <br />
                  Shaker Heights, OH 44122
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-gold" />
                <a href="tel:4406845600" className="hover:text-gold transition-colors">
                  (440) 684-5600
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gold" />
                <a href="mailto:social@56restaurants.com" className="hover:text-gold transition-colors">
                  social@56restaurants.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11AM - 9PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>11AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10AM - 8PM</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gold font-semibold">Wine & Beer Available</p>
                <p className="text-sm text-gray-500 mt-1">Fast Casual Service</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-4">Connect</h4>
            <p className="text-gray-400 mb-4">
              Follow our restaurant group
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto py-6 px-4 text-center text-sm text-gray-500">
          <p>© 2024 56 Social by Jay Leitson & Izzy Schachner | Continuing the Legacy Since 1995</p>
        </div>
      </div>
    </footer>
  )
}