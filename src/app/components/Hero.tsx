import { ArrowRight, Settings, Award, Wrench, ShieldCheck, Clock } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import compressorImg from '@/assets/Oil Injected Compressors/SM3HP/SM3HP.png';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // 3D tilt tracking
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 30 });
  const scale = useSpring(1, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };

  return (
    <>
      <section id="hero" className="relative bg-white overflow-hidden flex flex-col" style={{ minHeight: '100svh' }}>

        {/* Red left border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#dc2626] z-20" />

        {/* Content — split grid, vertically centered, with top padding for navbar clearance */}
        <div className="flex-1 grid lg:grid-cols-2" style={{ paddingTop: '80px' }}>

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0a1628] leading-[1.0] tracking-tight mb-6">
              Industrial<br />
              Compressed<br />
              Air Solutions.
            </h1>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mb-10">
              We supply, install and service compressed air systems for mining, manufacturing,
              agriculture and engineering across South Africa. Since 2014.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <button
                onClick={() => scrollToSection('products')}
                className="cursor-pointer bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-4 rounded-md font-semibold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                View Products
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer border border-gray-300 hover:border-gray-400 text-[#0a1628] px-7 py-4 rounded-md font-semibold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4 text-[#dc2626]" />
                Get a Quote
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-black text-[#0a1628]">10+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years active</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#0a1628]">L1</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">B-BBEE rating</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#0a1628]">24/7</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Technical support</p>
              </div>
            </div>
          </motion.div>

          {/* Right: 3D interactive compressor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex items-center justify-center bg-[#f6f7f9] py-12 px-8 lg:px-14"
          >
            {/* Decorative circles */}
            <div className="absolute bottom-[-40px] right-[-40px] w-64 h-64 rounded-full bg-[#dc2626]/6 pointer-events-none" />
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#0a1628]/5 pointer-events-none" />

            {/* 3D tilt wrapper */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-lg cursor-pointer"
              style={{ perspective: '800px' }}
            >
              <motion.div
                style={{ rotateX, rotateY, scale, transformStyle: 'preserve-3d' }}
                className="relative"
              >
                {/* Shadow under image — lifts with tilt */}
                <div
                  className="absolute inset-x-8 bottom-0 h-12 bg-black/15 blur-2xl rounded-full"
                  style={{ transform: 'translateZ(-30px) translateY(20px)' }}
                />
                <img
                  src={compressorImg}
                  alt="BAOFN SM3HP Air Compressor"
                  className="relative w-full drop-shadow-xl select-none"
                  draggable={false}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Ticker */}
        <div className="relative z-10 bg-[#0a1628] py-3 overflow-hidden flex-shrink-0">
          <div className="flex w-max animate-hero-ticker whitespace-nowrap text-xs font-bold uppercase tracking-widest items-center text-white">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center px-10">
                <span className="flex items-center gap-2"><Award className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" /> BAOFN Authorized Distributor</span>
                <span className="flex items-center gap-2"><Settings className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" /> Equipment Supply & Installation</span>
                <span className="flex items-center gap-2"><Wrench className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" /> Workshop & Field Servicing</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" /> Pressure Testing & Certification</span>
                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" /> After-Sales Support</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes hero-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-hero-ticker {
          animation: hero-ticker 30s linear infinite;
        }
      `}</style>
    </>
  );
}
