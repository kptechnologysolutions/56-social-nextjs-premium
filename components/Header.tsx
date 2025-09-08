'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#4A90E2] text-white py-2 px-4 text-center text-sm md:text-base">
        <p className="font-light">Mediterranean Excellence • Now Open at J. Pistone Legacy Location</p>
      </div>

      {/* Main Header */}
      <header className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-xl py-4' 
          : 'bg-black/40 backdrop-blur-md py-6'
      }`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Nav */}
            <div className="flex items-center space-x-12">
              <div className="flex items-center">
                {/* Logo Image */}
                <Image
                  src="/images/56-social-logo.png"
                  alt="56 Social"
                  width={300}
                  height={100}
                  className="h-24 md:h-28 w-auto object-contain"
                  priority
                />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                <a href="#story" className={`transition-colors font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Our Story</a>
                <a href="#menu" className={`transition-colors font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Menu</a>
                <a href="#gallery" className={`transition-colors font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Gallery</a>
                <a href="#catering" className={`transition-colors font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Catering</a>
                <a href="#contact" className={`transition-colors font-medium ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Visit</a>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="bg-[#4A90E2] text-white px-6 py-2.5 font-medium hover:bg-[#357ABD] transition-all transform hover:scale-105">
                RESERVE TABLE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className={`lg:hidden mt-4 pb-4 border-t pt-4 ${
              isScrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
              <div className="flex flex-col space-y-4">
                <a href="#story" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Our Story</a>
                <a href="#menu" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Menu</a>
                <a href="#gallery" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Gallery</a>
                <a href="#catering" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Catering</a>
                <a href="#contact" className={`transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-[#4A90E2]' : 'text-white hover:text-[#87CEEB]'
                }`}>Visit</a>
                <button className="bg-[#4A90E2] text-white px-6 py-2.5 font-medium hover:bg-[#357ABD] transition-all w-full">
                  RESERVE TABLE
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}