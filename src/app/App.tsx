import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BaofnBanner } from './components/BaofnBanner';
import { Products, ProductCategory } from './components/Products';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Operations } from './components/Operations';
import { CoreValues } from './components/CoreValues';
import { Map } from './components/Map';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('Rotary Screw Compressors');

  const handleCategorySelect = (category: ProductCategory) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onSelectCategory={handleCategorySelect} />
      <main>
        <Hero />
        <BaofnBanner />
        <Products activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <Services />
        <Industries />
        <Operations />
        <CoreValues />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
