import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';

import op7 from '@/assets/operation-7.jpg';
import op2 from '@/assets/operation-14.jpg';
import op21 from '@/assets/op21.jpeg';
import op20 from '@/assets/op20.jpeg';
import op22 from '@/assets/op22.jpeg';
import pressureTesting from '@/assets/pressure-testing.png';
import air from '@/assets/air-aud.png';

export function Services() {
  const services = [
    {
      title: 'Preventative Maintenance Contracts',
      // description: 'Scheduled maintenance agreements engineered to protect your BAOFN and industrial compressor investments, ensuring maximum uptime and efficiency.',
      image: op2,
      objectPosition: '50% 20%',
    },
    {
      title: 'Compressor Servicing & Overhauls',
      // description: 'Complete element overhauls, airend rebuilds, and preventive servicing conducted in our certified workshop and field support units.',
      image: op22,
      objectPosition: '25% 15%',
    },
    {
      title: 'Breakdown Repairs & Field Response',
      // description: 'Rapid field technical response for industrial breakdowns to diagnose issues, restore air pressure, and resume plant production quickly.',
      image: op7,
      objectPosition: '50% 65%',
    },
    {
      title: 'Pressure Testing',
      // description: 'Certified pressure vessel testing, safety valve recalibration, and legal compliance inspections for all compressed air receivers.',
      image: pressureTesting,
      objectPosition: '50% 60%',
    },
    {
      title: 'System Audits',
      // description: 'Comprehensive flow, pressure drop, and air quality audits to identify energy leaks and optimize compressor system operation.',
      image: air,
      objectPosition: '50% 70%',
    },
    {
      title: 'Site Inspections',
      // description: 'Direct access to OEM spare parts, air filters, oil separators, line valves, and lubricants to maintain warranty protection.',
      image: op21,
      objectPosition: '50% 15%',
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
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
            Engineering & Field Capability
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1628] uppercase tracking-tight">
            Technical Support & Compressor Servicing
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Every equipment installation is backed by CAS technical capability. We support your compressed-air investment through preventative maintenance, overhauls, emergency breakdown repairs, pressure vessel testing, and genuine OEM parts.
          </p>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {services.map((s, i) => {
            const isFeatured = i === 0;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl shadow-sm border border-slate-200/80 bg-slate-900 transition-all duration-300 hover:shadow-xl ${isFeatured
                  ? 'md:col-span-2 md:row-span-2 min-h-[380px] lg:min-h-[460px]'
                  : 'min-h-[220px] lg:min-h-[240px]'
                  }`}
              >
                {/* Background Image with Hover Scale */}
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ objectPosition: s.objectPosition || 'center' }}
                />

                {/* Ambient Deep Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/95 group-hover:via-black/50" />

                {/* Content Overlay */}
                <div className="relative z-10 flex h-full flex-col justify-end p-6 lg:p-8">
                  <div className="mb-2">
                    {/* <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                      {s.category}
                    </span> */}
                  </div>

                  <h3
                    className={`font-black text-white leading-tight ${isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl max-w-xl' : 'text-lg lg:text-xl'
                      }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`text-white/80 leading-relaxed text-sm mt-2 transition-all duration-300 ${isFeatured
                      ? 'max-w-xl text-base text-white/90'
                      : 'line-clamp-2 group-hover:line-clamp-none text-xs sm:text-sm'
                      }`}
                  >
                    {/* {s.description} */}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA with Micro-interactions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-slate-200 text-[#0a1628] p-6 sm:px-10 sm:py-6 rounded-2xl shadow-sm max-w-4xl mx-auto w-full">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-lg sm:text-xl uppercase tracking-tight text-[#0a1628]">
                Need a custom technical support contract?
              </h4>
              <p className="text-sm text-slate-500 mt-1">
                Contact our Kimberley workshop for tailored industrial air service contracts and 24/7 breakdown coverage.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="tel:053-832-1249"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 shadow-md hover:shadow-lg shadow-red-600/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call 053-832-1249</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}