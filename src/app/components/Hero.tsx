import { ArrowRight, Settings, Award, Wrench, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.png';

export function Hero() {
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
    <>
      <section
        id="hero"
        className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center bg-[#070e1b] overflow-hidden pt-28 pb-24"
      >
        {/* Background Image & Multi-layer Industrial Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Industrial Compressed Air Plant"
            className="w-full h-full object-cover object-center opacity-45 scale-105 transform transition-transform duration-1000"
          />
          {/* Radial Center Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-950/40 via-[#070e1b]/80 to-[#070e1b]" />
          {/* Top to Bottom Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070e1b]/90 via-[#070e1b]/70 to-[#070e1b]" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-7 text-center mx-auto flex flex-col items-center justify-center"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-inner text-white text-xs font-semibold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
              <span>Authorized BAOFN Distributor & Engineering Partner</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight font-['Plus_Jakarta_Sans']">
              Industrial Compressed Air <br />
              <span className="bg-gradient-to-r from-[#f97316] via-[#fb923c] to-[#f97316] bg-clip-text text-transparent">
                Solutions & Supply
              </span>
            </h1>

            {/* Subhead Paragraph */}
            <p className="text-base md:text-xl text-gray-300 max-w-2xl leading-relaxed text-center font-normal">
              Central Air Solutions (CAS) supplies industrial compressed-air equipment and engineers end-to-end solutions for mining, manufacturing, agriculture, and engineering applications.
            </p>

            {/* Highlights row */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 text-xs font-medium text-gray-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97316]" /> Level 1 B-BBEE Contributor
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97316]" /> 24/7 Technical Standby Support
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97316]" /> Turnkey Systems & Pressure Testing
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('products')}
                className="w-full sm:w-auto cursor-pointer bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/40 flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto cursor-pointer bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/25 backdrop-blur-md hover:scale-105 active:scale-95"
              >
                <Settings className="w-5 h-5 text-[#f97316]" />
                <span>Request a Quote</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Ticker Bar Docked to Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#dc2626] text-white py-3 overflow-hidden shadow-2xl">
          <div className="flex w-max animate-marquee2 whitespace-nowrap text-xs md:text-sm font-extrabold uppercase tracking-widest items-center">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10 items-center px-6">
                <span className="flex items-center gap-2"><Award className="w-4 h-4 text-[#fbbf24]" /> BAOFN Official Distributor</span>
                <span className="flex items-center gap-2"><Settings className="w-4 h-4 text-[#fbbf24]" /> Equipment Supply & Integration</span>
                <span className="flex items-center gap-2"><Wrench className="w-4 h-4 text-[#fbbf24]" /> Installation & Commissioning</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#fbbf24]" /> Pressure Testing & Certification</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#fbbf24]" /> Lifecycle After-Sales Support</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee2 {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </>
  );
}
