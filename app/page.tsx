'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import StorySection from '@/components/StorySection';
import FeaturesSection from '@/components/FeaturesSection';
import SocialHourSection from '@/components/SocialHourSection';
import SaladsShowcase from '@/components/SaladsShowcase';
import MenuSection from '@/components/MenuSection';
import RestaurantGallery from '@/components/RestaurantGallery';
import InstagramGallery from '@/components/InstagramGallery';
import CateringSection from '@/components/CateringSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CommunitySection from '@/components/CommunitySection';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <FloatingNav />
      <Hero />
      <StatsBar />
      <StorySection />
      <FeaturesSection />
      <SocialHourSection />
      <SaladsShowcase />
      <MenuSection />
      <RestaurantGallery />
      <InstagramGallery />
      <CateringSection />
      <TestimonialsSection />
      <CommunitySection />
      <Footer />
    </>
  );
}