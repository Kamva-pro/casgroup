import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import casLogo from '@/assets/logo-long.png';
import { ProductCategory } from './Products';

interface NavbarProps {
  onSelectCategory?: (category: ProductCategory) => void;
}

export function Navbar({ onSelectCategory }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const productCategories: ProductCategory[] = [
    'Two-Stage Rotary Screw',
    'Variable Speed (VSD)',
    'Full Feature All-In-One',
    'Drill Rigs & Workshop',
    'Air Receivers',
    'Air Dryers & Treatment'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleCategorySelect = (cat: ProductCategory) => {
    onSelectCategory?.(cat);
    scrollToSection('products');
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'baofn-distributor', label: 'About' },
    { id: 'products', label: 'Products', hasDropdown: true },
    { id: 'services', label: 'Service & Support' },
    { id: 'industries', label: 'Industries' },
    { id: 'community', label: 'Community' }
  ];

  return (
    <nav id="main-nav" className="fixed top-0 left-0 right-0 z-40 px-4 lg:px-8 pt-4 pointer-events-none">
      <div
        className={`mx-auto transition-all duration-300 pointer-events-auto w-full lg:max-w-7xl rounded-full ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xl py-2.5 px-6'
            : 'bg-transparent py-3 px-6'
        }`}
      >
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Logo Container: White background box in non-sticky state, transparent in sticky state */}
          <div className="flex-shrink-0 flex items-center">
            <div
              className="cursor-pointer transition-colors"
              onClick={() => scrollToSection('hero')}
            >
              <img
                src={casLogo}
                alt="Central Air Solutions"
                className="h-7 lg:h-8 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-6 lg:gap-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.id} className="relative" onMouseLeave={() => setProductsDropdownOpen(false)}>
                  <button
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-1.5 text-xs lg:text-sm font-bold uppercase tracking-wider cursor-pointer transition-colors ${
                      scrolled
                        ? 'text-[#0a1628] hover:text-[#dc2626]'
                        : 'text-[#0a1628] hover:text-[#dc2626]'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 text-[#0a1628]`} />
                  </button>

                  <AnimatePresence>
                    {productsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl py-2 text-[#0a1628] z-50 shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        {productCategories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => handleCategorySelect(cat)}
                            className="block w-full text-left px-5 py-2.5 text-xs font-bold hover:bg-[#dc2626] hover:text-white transition-colors cursor-pointer"
                          >
                            {cat}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs lg:text-sm font-bold uppercase tracking-wider cursor-pointer transition-colors text-[#0a1628] hover:text-[#dc2626]`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* CTA and Mobile Menu Toggle */}
          <div className="flex items-center justify-end gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block cursor-pointer bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-2.5 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap shadow-md"
            >
              Request Quote
            </motion.button>

            <button
              className="lg:hidden text-[#0a1628] p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`lg:hidden mt-3 mx-2 rounded-3xl pointer-events-auto overflow-hidden shadow-2xl border border-gray-200/50 ${
              scrolled ? 'bg-white text-[#0a1628]' : 'bg-[#0a1628]/95 backdrop-blur-xl text-white'
            }`}
          >
            <div className="px-6 py-5 space-y-3">
              {navItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left font-bold uppercase text-xs tracking-wider py-1.5 cursor-pointer ${
                      scrolled ? 'text-[#0a1628] hover:text-[#dc2626]' : 'text-white hover:text-[#f97316]'
                    }`}
                  >
                    {item.label}
                  </button>
                  {item.hasDropdown && (
                    <div className="pl-4 space-y-2 py-1.5 border-l border-gray-300/40 my-1">
                      {productCategories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => handleCategorySelect(cat)}
                          className={`block w-full text-left text-xs py-1 cursor-pointer ${
                            scrolled ? 'text-gray-700 hover:text-[#dc2626]' : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          • {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="w-full text-center bg-[#dc2626] hover:bg-[#b91c1c] text-white py-3 rounded-full font-bold uppercase text-xs tracking-wider mt-3 shadow-md cursor-pointer"
              >
                Request Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}