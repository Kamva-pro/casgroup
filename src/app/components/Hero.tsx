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
        className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#0a1628] overflow-hidden"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Industrial Air & <br />
              <span className="text-[#f97316]">Compressor Specialists</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              24/7 Technical Support | Engineering-Driven Solutions
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Serving the mining and agricultural sectors with precision, integrity, and expertise since 2014.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="group cursor-pointer bg-gradient-to-r from-[#dc2626] to-[#f97316] hover:scale-105 transform text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get Emergency Service
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:053-832-1249"
                className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border border-white/20"
              >
                <Phone className="w-5 h-5" />
                053-832-1249
              </a>
            </div>


          </motion.div>
        </div>
        {/* Moving Bar Docked to Bottom of Hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-[#dc2626] to-[#f97316] text-white py-2.5 overflow-hidden shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
          <div className="flex w-max animate-marquee2 whitespace-nowrap text-sm font-bold uppercase tracking-wider items-center">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center px-6">
                <span className="flex items-center gap-2"><Award className="w-4 h-4" /> 12+ Years Experience</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Support Available</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 100% Client Satisfaction</span>
                <span className="flex items-center gap-2"><Wrench className="w-4 h-4" /> 500+ Projects Completed</span>
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
