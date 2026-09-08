import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

const values = [
  {
    title: 'Client-First',
    desc: 'Your success drives everything we do in plant design and emergency support.'
  },
  {
    title: 'Quality Assurance',
    desc: 'Excellence in every compressed air installation and overhaul delivered.'
  },
  {
    title: 'Integrity',
    desc: 'Operating with honesty and delivering on technical promises consistently.'
  },
  {
    title: 'Expertise',
    desc: 'Deep engineering knowledge and certified compressor technical experience.'
  },
  {
    title: 'Innovation',
    desc: 'Embracing cutting-edge VSD efficiency and modern pneumatic solutions.'
  }
];

export function CoreValues() {
  return (
    <section id="values" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dc2626] mb-3">
            Guiding Engineering Principles
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1628] uppercase tracking-tight">
            Our Core Values
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
            The principles that guide our work and define our commitment to operational reliability and engineering excellence.
          </p>
        </motion.div>

        {/* Connected Horizontal Timeline */}
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative mt-8 pt-4"
        >
          {/* Connecting Line across markers */}
          <div className="absolute left-8 right-8 top-[36px] hidden h-[2px] bg-slate-200 md:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-start md:items-center text-left md:text-center transition-transform"
              >
                {/* Numbered Sequence Badge */}
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-black text-[#dc2626] ring-4 ring-red-50 border border-red-200 shadow-sm transition-all group-hover:scale-110 group-hover:ring-red-100 group-hover:bg-[#dc2626] group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0a1628] group-hover:text-[#dc2626] transition-colors mb-2">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
