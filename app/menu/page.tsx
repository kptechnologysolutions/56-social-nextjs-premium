'use client';

import { menuData } from '@/data/menu';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Leaf } from 'lucide-react';

export default function MenuPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#7d9d3a] to-[#6b8533] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl">Fresh, Local, Mediterranean</p>
          </div>
        </div>

        {/* Breakfast Section */}
        <section className="py-12 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{menuData.breakfast.title}</h2>
              <p className="text-lg text-gray-600 flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                {menuData.breakfast.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {menuData.breakfast.items.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-xl font-bold text-[#c47d5a]">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  {item.addon && <p className="text-sm text-[#7d9d3a] mt-2 italic">{item.addon}</p>}
                </div>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Breakfast Sides</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {menuData.breakfast.sides.map((side, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-gray-700">{side.name}</p>
                    <p className="text-[#c47d5a] font-bold">${side.price} {side.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cool Greens */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{menuData.coolGreens.title}</h2>
              <p className="text-gray-600">{menuData.coolGreens.subtitle}</p>
              <p className="text-sm text-[#7d9d3a] mt-2">{menuData.coolGreens.addProtein}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.coolGreens.items.map((item, idx) => (
                <div key={idx} className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-xl font-bold text-[#c47d5a]">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Salads */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{menuData.specialtySalads.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.specialtySalads.items.map((item, idx) => (
                <div key={idx} className={`bg-white p-6 rounded-lg shadow-sm ${item.featured ? 'ring-2 ring-[#7d9d3a]' : ''}`}>
                  {item.featured && <span className="inline-block bg-[#7d9d3a] text-white px-3 py-1 rounded-full text-sm mb-2">Signature</span>}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-xl font-bold text-[#c47d5a]">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Toasts */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{menuData.toasts.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.toasts.items.map((item, idx) => (
                <div key={idx} className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-xl font-bold text-[#c47d5a]">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Handhelds */}
        <section className="py-12 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{menuData.handhelds.title}</h2>
              <p className="text-gray-600 text-sm">{menuData.handhelds.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.handhelds.items.map((item, idx) => (
                <div key={idx} className={`bg-white p-6 rounded-lg shadow-sm ${item.featured ? 'ring-2 ring-[#c47d5a]' : ''}`}>
                  {item.featured && <span className="inline-block bg-[#c47d5a] text-white px-3 py-1 rounded-full text-sm mb-2">House Specialty</span>}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-xl font-bold text-[#c47d5a]">${item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  {item.addon && <p className="text-sm text-[#7d9d3a] mt-2 italic">{item.addon}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plates */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{menuData.plates.title}</h2>
              <p className="text-gray-600 text-sm">{menuData.plates.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.plates.items.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flatbreads */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">{menuData.flatbreads.title}</h2>
              <p className="text-gray-600 text-sm">{menuData.flatbreads.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuData.flatbreads.items.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-xl font-bold text-[#c47d5a]">
                      {typeof item.price === 'number' ? `$${item.price}` : item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deli Favorites */}
        <section className="py-12 bg-[#3a4d6b] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2">{menuData.deliFavorites.title}</h2>
              <p className="text-sm opacity-90">{menuData.deliFavorites.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {menuData.deliFavorites.items.map((item, idx) => (
                <div key={idx} className={`text-center p-4 rounded-lg ${item.featured ? 'bg-white/10' : ''}`}>
                  {item.featured && <span className="inline-block bg-[#c47d5a] px-3 py-1 rounded-full text-sm mb-2">House-Made</span>}
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soups */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{menuData.soups.title}</h2>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {menuData.soups.items.map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  {item.price && <span className="text-xl font-bold text-[#c47d5a]">${item.price}</span>}
                  {item.description && <p className="text-gray-600 text-sm mt-1">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beverages */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{menuData.beverages.title}</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {menuData.beverages.items.map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dietary Notes */}
        <section className="py-8 bg-[#7d9d3a] text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-8 mb-4">
              <span className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Vegetarian Options Available
              </span>
              <span className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Vegan Options Available
              </span>
              <span className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Gluten Free Options Available
              </span>
            </div>
            <p className="text-sm opacity-90">
              Consumer advisory: consumption of undercooked meat, poultry, eggs, or seafood may increase the risk of food-borne illness
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}