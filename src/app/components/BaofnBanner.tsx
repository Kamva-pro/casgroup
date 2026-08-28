import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import teamImage from '@/assets/team.jpeg';
import team2Image from '@/assets/team-2.jpeg';

const teamImages = [
  { src: teamImage, alt: "Central Air Solutions Team" },
  { src: team2Image, alt: "Central Air Solutions Operations" },
];

export function BaofnBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
    }, 4000);

    return () => clearInterval(timer);
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
  };

  return (
    <section id="baofn-distributor" className="relative bg-white text-[#0a1628] py-20 border-b border-gray-200 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Commercial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1628] tracking-tight leading-tight uppercase">
              ABOUT <span className="text-[#f97316]">US</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>Central Air Solutions (CAS) was started in 2014 out of a genuine need for reliable, hands-on compressed air services in South Africa. We supply, install and maintain air compressor systems for clients in mining, manufacturing, agriculture and engineering.</p>
              <p>We are a proudly South African company, 100% black-owned and a Level 1 B-BBEE contributor with 135% procurement recognition. We are fully registered on the National Treasury CSD and compliant across all sectors we work in.</p>
              <p>As an authorized BAOFN distributor, we stock energy-efficient compressor systems backed by readily available spares and real technical support from people who know the equipment.</p>
              <p>Our workshop carries critical spares for fast turnaround. Our technicians are on standby 24/7 for breakdowns and production-critical situations, and we work across all major brands, not just our own.</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="cursor-pointer bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3.5 rounded-md font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-3"
              >
                <span>Explore BAOFN Range</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-[#0a1628] border border-gray-300 px-7 py-3.5 rounded-md font-bold text-sm uppercase tracking-wider transition-colors"
              >
                Request Product Pricing
              </button>
            </div>
          </motion.div>

          {/* Right Column: Auto Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[440px] overflow-hidden rounded-md shadow-md">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={teamImages[currentImageIndex].src}
                  alt={teamImages[currentImageIndex].alt}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

