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
import pressureTesting from '@/assets/pressure-testing.jpg';
import air from '@/assets/air.png';

export function Services() {
  const services = [
    {
      icon: Clock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency response for critical industrial operations. Our team is always ready to minimize downtime.',
      image: op7,
      accent: '#f97316'
    },
    {
      icon: Wrench,
      title: 'Maintenance Plans',
      description: 'Customized preventive maintenance programs designed to maximize equipment lifespan and operational efficiency.',
      image: op2,
      accent: '#dc2626'
    },
    {
      icon: ClipboardCheck,
      title: 'Site Inspections',
      description: 'Thorough on-site evaluations of your compressor systems to ensure optimal placement, safety, and operational readiness.',
      image: op20,
      accent: '#3b82f6'
    },
    {
      icon: Gauge,
      title: 'Pressure Testing',
      description: 'Comprehensive pressure testing and certification services ensuring compliance with industry safety standards.',
      image: pressureTesting,
      accent: '#fbbf24'
    },
    {
      icon: Settings,
      title: 'Workshop Overhauls',
      description: 'Complete compressor overhauls and rebuilds in our fully-equipped workshop facility by certified technicians.',
      image: op22,
      accent: '#64748b'
    },
    {
      icon: FileSearch,
      title: 'Air Audits',
      description: 'Detailed air system audits to identify inefficiencies, optimize performance, and reduce operational costs.',
      image: air,
      accent: '#0a1628'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#dc2626]/10 text-[#dc2626] rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From emergency repairs to preventive maintenance, we provide end-to-end services
            for all your industrial air and compressor needs.
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
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-72 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-[50%_30%] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-lg flex items-center justify-center shadow-md"
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
                  <p className="text-gray-600 leading-relaxed">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-[#0a1628] to-[#1a2740] text-white px-8 py-6 sm:py-4 rounded-xl shadow-xl">
            <div className="text-center sm:text-left">
              <p className="font-bold text-lg">Need a custom solution?</p>
              <p className="text-sm text-gray-300">Contact us for tailored industrial air services</p>
            </div>
            <a
              href="tel:053-832-1249"
              className="bg-gradient-to-r from-[#dc2626] to-[#f97316] hover:scale-105 transform px-6 py-3 rounded-lg font-medium transition-all whitespace-nowrap"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}