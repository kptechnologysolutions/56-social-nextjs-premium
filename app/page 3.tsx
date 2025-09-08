import Header from '@/components/Header'
import HeroSplit from '@/components/HeroSplit'
import VideoShowcase from '@/components/VideoShowcase'
import FloatingNav from '@/components/FloatingNav'
import StorySection from '@/components/StorySection'
import FeaturesSection from '@/components/FeaturesSection'
import MenuCards from '@/components/MenuCards'
import SaladsShowcase from '@/components/SaladsShowcase'
import RestaurantGallery from '@/components/RestaurantGallery'
import InstagramGallery from '@/components/InstagramGallery'
import CateringSection from '@/components/CateringSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <FloatingNav />
      <main>
        <HeroSplit />
        <VideoShowcase />
        <StorySection />
        <FeaturesSection />
        <MenuCards />
        <SaladsShowcase />
        <RestaurantGallery />
        <InstagramGallery />
        <CateringSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  )
}