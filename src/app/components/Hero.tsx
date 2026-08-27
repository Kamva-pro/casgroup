import { ArrowRight, Settings, Award, Wrench, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '@/assets/automated-factory-employee-manages-industrial-automation-system.jpg';

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
        className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#0a1628] overflow-hidden pt-24 pb-20"
      >
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Industrial Plant Operations"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/90 to-[#0a1628]/70" />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6 text-left"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight font-['Plus_Jakarta_Sans']">
              Industrial Compressed Air <br />
              <span className="text-[#f97316]">
                Solutions & Supply
              </span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Central Air Solutions (CAS) supplies industrial compressed-air equipment and engineers end-to-end solutions for mining, manufacturing, agriculture, and engineering applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('products')}
                className="w-full sm:w-auto cursor-pointer bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-3"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto cursor-pointer bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/25 backdrop-blur-md"
              >
                <Settings className="w-5 h-5 text-[#f97316]" />
                <span>Request a Quote</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Ticker Bar Docked to Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#dc2626] text-white py-3 overflow-hidden">
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
