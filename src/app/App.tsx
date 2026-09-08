import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BaofnBanner } from './components/BaofnBanner';
import { CredentialsSection } from './components/CredentialsSection';
import { Products, ProductCategory } from './components/Products';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Operations } from './components/Operations';
import { CommunityImpactSection } from './components/CommunityImpactSection';
import { CoreValues } from './components/CoreValues';
import { Map } from './components/Map';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');

  const handleCategorySelect = (category: ProductCategory) => {
    setActiveCategory(category);
  };

  return (
    <div id="page-background" className="min-h-screen overflow-x-hidden bg-white">
      <Navbar onSelectCategory={handleCategorySelect} />
      <main>
        <Hero />
        <BaofnBanner />
        <CredentialsSection />
        <Products activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <Services />
        <Industries />
        <Operations />
        <CommunityImpactSection />
        <CoreValues />
        <Map />
      </main>
      <Footer />
    </div>
  );
}
