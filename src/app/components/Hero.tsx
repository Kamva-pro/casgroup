import { ArrowRight, Phone, ShieldCheck, Wrench, Clock, Award, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

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
        className="relative min-h-[85vh] lg:min-h-[100vh] flex items-center justify-center bg-[#0a1628] overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={`${import.meta.env.BASE_URL}mining-video-6.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay to preserve the #0a1628 feel and ensure text readability */}
          <div className="absolute inset-0 bg-[#0a1628]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/80 to-transparent" />
        </div>

        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#dc2626] rounded-full blur-[120px] opacity-10" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Subheadline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs md:text-sm font-semibold text-[#fbbf24] uppercase tracking-widest mb-4">
              Authorised BAOFN Distributor & Equipment Supplier
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight uppercase tracking-tight">
              Industrial Compressed Air <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-[#fbbf24]">
                Solutions & Supply
              </span>
            </h1>

            {/* Commercial Positioning Subheadline */}
            <p className="text-lg md:text-2xl text-gray-200 font-semibold max-w-4xl mx-auto tracking-wide">
              BAOFN Distributor &nbsp;|&nbsp; Compressors &nbsp;|&nbsp; Air Dryers &nbsp;|&nbsp; Air Treatment &nbsp;|&nbsp; Installation &nbsp;|&nbsp; Service
            </p>

            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Central Air Solutions (CAS) supplies industrial compressed-air equipment and engineers end-to-end solutions for mining, manufacturing, agriculture, and engineering applications.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('products')}
                className="group cursor-pointer bg-gradient-to-r from-[#dc2626] to-[#f97316] hover:scale-105 transform text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
              >
                <span>View Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border border-white/30"
              >
                <Settings className="w-5 h-5 text-[#f97316]" />
                <span>Request a Quote</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Moving Bar Docked to Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-[#dc2626] via-[#ea580c] to-[#f97316] text-white py-3 overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
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
