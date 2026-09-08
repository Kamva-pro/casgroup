import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
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
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash || location.hash;
      if (!hash) return;
      const id = hash.replace('#', '');

      const attemptScroll = (count = 0) => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else if (count < 6) {
          setTimeout(() => attemptScroll(count + 1), 100);
        }
      };

      attemptScroll(0);
      setTimeout(() => attemptScroll(0), 200);
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [location.pathname, location.hash]);

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
