import { motion } from 'framer-motion';
import compressorImg from '@/assets/Oil Injected Compressors/SM3HP/SM3HP.png';
import { fadeUp, staggerContainer } from '@/lib/motion';

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

  return (
    <section id="hero" className="relative overflow-hidden bg-white flex flex-col justify-between" style={{ minHeight: '100svh' }}>
        {/* Soft ambient blurred gradient glow behind the compressor image (replaces flat strip) */}
        <div className="pointer-events-none absolute right-[-10%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-400/25 via-red-500/10 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute left-[-5%] top-1/4 h-[380px] w-[380px] rounded-full bg-red-500/5 blur-3xl" />

        <div className="flex-1 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-[1.1fr_1fr] w-full">
          {/* Left Text Block */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="show"
          >
            {/* Small uppercase kicker label in plain text — no badge border/background */}
            <motion.p
              variants={fadeUp}
              className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dc2626]"
            >
              Authorized BAOFN Distributor & Service Center
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0a1628]"
            >
              Industrial Compressed <span className="text-[#dc2626]">Air Solutions.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-gray-500"
            >
              We supply, install and service high-efficiency compressed air systems for mining,
              manufacturing, agriculture, engineering, and industrials at large in the Northern
              Cape Region and across neighbouring provinces.
            </motion.p>

            {/* Interactive Action Buttons with Micro-interactions */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('products')}
                className="cursor-pointer rounded-full bg-[#dc2626] px-8 py-3.5 font-bold text-sm uppercase tracking-wider text-white shadow-lg shadow-red-600/20 transition hover:shadow-red-600/40 hover:bg-[#b91c1c]"
              >
                View Products →
              </motion.button>
              <motion.button
                whileHover={{ y: -2, scale: 1.02, borderColor: '#9ca3af' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer rounded-full border border-slate-300 bg-white px-8 py-3.5 font-bold text-sm uppercase tracking-wider text-[#0a1628] transition hover:bg-slate-50"
              >
                Get a Quote
              </motion.button>
            </motion.div>

            {/* Stat row: no boxes/borders, just a clean rule + numbers */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-8 sm:gap-12 border-t border-slate-200 pt-6"
            >
              {[
                ['10+', 'Years Active'],
                ['L1', 'B-BBEE Rating'],
                ['24/7', 'Technical Support']
              ].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-black text-[#0a1628]">{num}</p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-slate-400">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Product Image with Slow Continuous Float Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            {/* Soft ground blur reflection */}
            <motion.div
              animate={{
                scaleX: [1, 0.88, 1],
                scaleY: [1, 0.84, 1],
                opacity: [0.25, 0.15, 0.25]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-6 h-10 w-3/4 rounded-full bg-black/20 blur-xl pointer-events-none"
            />

            <motion.img
              src={compressorImg}
              alt="BAOFN SM3HP industrial compressor"
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative z-10 mx-auto w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl select-none"
              draggable={false}
            />
          </motion.div>
        </div>
      </section>
    );
  }
