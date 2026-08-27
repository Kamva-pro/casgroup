import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import teamImage from '@/assets/team.jpeg';

export function BaofnBanner() {
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1628] tracking-tight leading-tight font-['Plus_Jakarta_Sans'] uppercase">
              ABOUT <span className="text-[#f97316]">US</span>
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>Central Air Solutions (CAS) was established in 2014 in South Africa and provides comprehensive supply, installation, servicing, maintenance, repairs, and pressure testing of air compressor systems across the industrial, agricultural, and mining sectors.</p>
              <p>We are a proudly South African company, fully registered and compliant on the National Treasury Central Supplier Database (CSD). Central Air Solutions is 100% black-owned, a Level 1 B-BBEE contributor, and an empowering supplier offering 135% procurement recognition.</p>
              <p>As an authorized distributor of BAOFN compressors, CAS supplies globally competitive, energy-efficient compressor systems known for reliable performance, low maintenance costs, and readily available spares.</p>
              <p>Our operations are supported by a fully equipped workshop facility that allows us to maintain stockholding of critical spares and fast-moving components. This ensures minimal downtime and responsive turnaround times for our clients. Our qualified technical team operates on a 24/7 standby basis to support clients in time-sensitive and production-critical environments, maintaining all major brands.</p>
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

          {/* Right Column: Team Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 w-full flex flex-col items-center">
              <img
                src={teamImage}
                alt="Central Air Solutions Team"
                className="max-h-96 w-full object-cover rounded-md mb-3"
              />
              <p className="text-xs text-gray-500 text-center font-mono">
                Central Air Solutions Technical & Management Team
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
