import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Award, Zap, Cpu, Gauge, Wind, Layers } from 'lucide-react';

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

  const baofnCategories = [
    { name: 'Rotary Screw Compressors', desc: 'Heavy-duty continuous output', icon: Cpu },
    { name: 'Variable Speed (VSD)', desc: 'Dynamic energy optimization', icon: Zap },
    { name: 'Oil-Free Compressors', desc: '100% ISO Class 0 pure air', icon: Wind },
    { name: 'Portable / Diesel Units', desc: 'Rigged for mining & field drillers', icon: Gauge },
    { name: 'Air Receivers & Vessels', desc: 'Certified industrial pressure tanks', icon: Layers }
  ];

  return (
    <section id="baofn-distributor" className="relative bg-gradient-to-b from-[#0a1628] via-[#0f2038] to-[#0a1628] text-white py-20 border-b border-white/10 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#dc2626]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#f97316]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Commercial Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-r from-[#dc2626]/20 to-[#f97316]/20 border border-[#f97316]/40 rounded-full">
              <Award className="w-4 h-4 text-[#f97316]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#fbbf24]">
                Authorised Commercial Equipment Brand
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              BAOFN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fbbf24]">DISTRIBUTOR</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-normal">
              Central Air Solutions is an official BAOFN distributor supplying premier industrial compressed-air equipment across our target markets, with local technical support, complete system integration, and lifecycle maintenance.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="group cursor-pointer bg-gradient-to-r from-[#dc2626] to-[#f97316] hover:scale-105 transform text-white px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl"
              >
                <span>Explore BAOFN Range</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
              >
                Request Product Pricing
              </button>
            </div>
          </motion.div>

          {/* Right Column: BAOFN Equipment Range Showcase Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#f97316]" />
                  Full Equipment Supply Portfolio
                </h3>
                <span className="text-xs text-gray-400 font-mono">Factory Warranted</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {baofnCategories.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => scrollToSection('products')}
                      className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#f97316]/40 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className="w-8 h-8 rounded-lg bg-[#f97316]/20 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-sm text-white group-hover:text-[#fbbf24] transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 pl-11">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 text-center text-xs text-gray-400 italic">
                All BAOFN equipment comes with genuine spare parts support and technical commissioning by CAS engineers.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
