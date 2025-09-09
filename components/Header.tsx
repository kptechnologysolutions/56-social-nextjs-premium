'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#experience', label: 'Experience' },
    { href: '#story', label: 'Our Story' },
    { href: '#salads', label: '56 Salads' },
    { href: '#menu', label: 'Menu' },
    { href: '#catering', label: 'Catering' },
    { href: '#visit', label: 'Visit' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cream shadow-lg py-3 border-b border-cafe-brown/20' : 'bg-cream/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="font-playfair text-3xl sm:text-4xl font-bold text-espresso">
                <span className="text-burgundy">56</span>
              </span>
              <span className="font-playfair text-2xl sm:text-3xl font-bold text-espresso ml-1 sm:ml-2">SOCIAL</span>
              <span className="hidden sm:inline text-xs text-burgundy ml-2 font-medium">Eat • Drink • Gather</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-espresso hover:text-burgundy transition-colors duration-300 font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Order Online Button */}
          <div className="hidden lg:block">
            <Link
              href="https://order.online/store/56-social-shaker-heights"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-burgundy text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-burgundy/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-espresso hover:text-burgundy transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-espresso hover:text-burgundy transition-colors duration-300 font-medium text-sm py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://order.online/store/56-social-shaker-heights"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-burgundy text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-burgundy/90 transition-all duration-300 inline-block text-center mt-2"
              >
                Order Online
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}