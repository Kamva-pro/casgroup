import { useState, useEffect } from 'react';
import { Menu, X, CheckCircle2, Factory, Phone } from 'lucide-react';
import casLogo from '@/assets/logo-long.png';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'operations', 'values'];
      const scrollPosition = window.scrollY + 60;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
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
    } else {
      window.location.href = import.meta.env.BASE_URL;
    }
    setMobileMenuOpen(false);
  };

  const isDarkSection = currentSection === 'hero' || currentSection === 'operations';
  const textColor = scrolled ? 'text-[#0a1628]' : (isDarkSection ? 'text-white' : 'text-[#0a1628]');
  const hoverColor = 'hover:text-[#dc2626]';

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Info Bar - Marquee */}
      {/* <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628] text-[#fbbf24] py-1.5 overflow-hidden border-b border-[#dc2626]/20 shadow-sm">
        <div className="flex w-max animate-marquee whitespace-nowrap text-xs md:text-sm font-semibold tracking-wide items-center hover:![animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center px-4">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#dc2626]" /> 100% Black Owned</span>
              <span className="flex items-center gap-2"><Factory className="w-4 h-4 text-[#dc2626]" /> Industrial Air & Compressor Specialists</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#dc2626]" /> 24/7 Emergency Service: 053-832-1249</span>
              <span className="text-white/60">|</span>
              <span>admin@casgroup.co.za</span>
              <span className="text-white/60">|</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 lg:px-8 lg:pt-4 pointer-events-none">
        <div
          className={`mx-auto transition-all duration-300 pointer-events-auto w-full lg:max-w-6xl ${scrolled
            ? 'backdrop-blur-xl bg-[#f1f5f9]/95 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] lg:border border-b border-white/40 py-2 lg:rounded-full'
            : 'bg-transparent shadow-none backdrop-blur-none border-transparent py-2 lg:py-4 lg:rounded-full'
            }`}
        >
          <div className="flex items-center justify-between h-12 lg:h-14 px-4 lg:px-8">
            <div className="flex-shrink-0 flex items-center">
              <div className={`transition-all duration-300 ${scrolled ? 'p-1' : 'bg-white/95 px-6 py-1 lg:px-10 lg:py-1.5 rounded-full flex items-center justify-center shadow-md border border-gray-100'}`}>
                <img
                  src={casLogo}
                  alt="Central Air Solutions"
                  className={`w-auto cursor-pointer transition-all duration-300 ${scrolled ? 'h-6 lg:h-7' : 'h-8 lg:h-10'}`}
                  onClick={() => scrollToSection('hero')}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-10">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'operations', label: 'Our Work' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`${textColor} ${hoverColor} cursor-pointer transition-colors duration-200 text-sm font-bold uppercase tracking-wider whitespace-nowrap`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA and Mobile Menu */}
            <div className="flex items-center justify-end w-32 lg:w-40 gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden lg:block cursor-pointer bg-gradient-to-r from-[#dc2626] to-[#f97316] hover:scale-105 transform text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Contact
              </button>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden ${textColor}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 mx-auto max-w-7xl bg-[#f1f5f9]/95 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl pointer-events-auto overflow-hidden">
            <div className="px-6 py-6 space-y-3">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'operations', label: 'Our Work' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-[#0a1628] hover:text-[#dc2626] transition-colors py-3 px-2 font-medium rounded-md hover:bg-white/50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
