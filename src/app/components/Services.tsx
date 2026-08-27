import { Clock, Wrench, Gauge, Settings, FileSearch, ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import op7 from '@/assets/operation-7.jpg';
import op2 from '@/assets/operation-14.jpg';
import op4 from '@/assets/operation-4.jpg';
import op5 from '@/assets/operation-5.jpg';
import op16 from '@/assets/operation-16.jpg';
import op20 from '@/assets/op20.jpeg';
import op21 from '@/assets/op21.jpeg';
import op22 from '@/assets/op22.jpeg';
import op23 from '@/assets/op23.jpeg';
import pressureTesting from '@/assets/pressure-testing.png';
import air from '@/assets/air-aud.png';


export function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Preventative Maintenance Contracts',
      description: 'Scheduled maintenance agreements engineered to protect your BAOFN and industrial compressor investments, ensuring maximum uptime and efficiency.',
      image: op2,
      accent: '#dc2626'
    },
    {
      icon: Settings,
      title: 'Compressor Servicing & Overhauls',
      description: 'Complete element overhauls, airend rebuilds, and preventive servicing conducted in our certified workshop and field support units.',
      image: op22,
      accent: '#64748b'
    },
    {
      icon: Clock,
      title: 'Breakdown Repairs & Field Response',
      description: 'Rapid field technical response for industrial breakdowns to diagnose issues, restore air pressure, and resume plant production quickly.',
      image: op7,
      accent: '#f97316'
    },
    {
      icon: Gauge,
      title: 'Pressure Testing & Safety Inspection',
      description: 'Certified pressure vessel testing, safety valve recalibration, and legal compliance inspections for all compressed air receivers.',
      image: pressureTesting,
      accent: '#fbbf24'
    },
    {
      icon: FileSearch,
      title: 'Compressed Air System Audits',
      description: 'Comprehensive flow, pressure drop, and air quality audits to identify energy leaks and optimize compressor system operation.',
      image: air,
      accent: '#0a1628'
    },
    {
      icon: ClipboardCheck,
      title: 'Genuine Parts & Accessories',
      description: 'Direct access to OEM spare parts, air filters, oil separators, line valves, and lubricants to maintain warranty protection.',
      image: op20,
      accent: '#3b82f6'
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6 tracking-tight uppercase font-['Plus_Jakarta_Sans']">
            Technical Support & Compressor Maintenance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every equipment installation is backed by CAS technical capability. We support your compressed-air investment through preventative maintenance, overhauls, breakdown repairs, pressure testing, and genuine parts supply.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer bg-white rounded-md overflow-hidden border border-gray-200"
              >
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-[50%_30%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0a1628]/60" />
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-md flex items-center justify-center"
                    style={{ backgroundColor: service.accent }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#dc2626] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-[#0a1628] text-white px-8 py-6 sm:py-4 rounded-md border border-white/10">
            <div className="text-center sm:text-left">
              <p className="font-bold text-lg font-['Plus_Jakarta_Sans'] uppercase">Need a custom technical support plan?</p>
              <p className="text-sm text-gray-300">Contact us for tailored industrial air service contracts</p>
            </div>
            <a
              href="tel:053-832-1249"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}