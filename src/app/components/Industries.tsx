import { motion } from 'framer-motion';
import { Pickaxe, Factory, Tractor, Utensils, Wrench, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export function Industries() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const industries = [
    {
      icon: Pickaxe,
      title: 'Mining & Quarrying',
      description: 'Heavy-duty high-pressure mobile and skid-mounted compressors designed for drill rigs, underground ventilation, open-cast exploration, and harsh dusty environments.',
      features: ['High CFM & Bar Output', 'Drill Rig Air Systems', 'Dust & Thermal Protection']
    },
    {
      icon: Factory,
      title: 'Manufacturing & Processing',
      description: 'Continuous 100% duty cycle rotary screw and Variable Speed Drive (VSD) systems powering industrial automation, pneumatic machinery, and plant air networks.',
      features: ['Energy-Efficient VSD', 'Constant Line Pressure', 'Minimal Operational Downtime']
    },
    {
      icon: Tractor,
      title: 'Agriculture & Agro-Processing',
      description: 'Reliable air solutions for grain handling, crop sorting, pneumatic conveying, and farm maintenance machinery operating under demanding seasonal schedules.',
      features: ['Rugged Reliability', 'Low Maintenance Overhead', 'Portable & Fixed Air Options']
    },
    {
      icon: Utensils,
      title: 'Food Processing & Pharma',
      description: '100% oil-free ISO 8573-1 Class 0 certified air compressors guaranteeing zero risk of air contamination in sensitive product and packaging environments.',
      features: ['ISO Class 0 Air Pureness', 'Hygienic System Design', 'Strict Standard Compliance']
    },
    {
      icon: Wrench,
      title: 'Engineering & Heavy Fabrication',
      description: 'High-capacity compressed air systems for shot blasting, structural welding, laser cutting, pneumatic tool operation, and heavy vessel fabrication.',
      features: ['High Capacity Air Tanks', 'Pneumatic Tool Lines', 'Air Dryer Integration']
    },
    {
      icon: Building2,
      title: 'Industrial Workshops & Commercial',
      description: 'Compact rotary screw and receiver-mounted packages offering whisper-quiet operation and reliable air supply for commercial facilities and workshop environments.',
      features: ['Compact Footprint', 'Low Noise Levels', 'Simple Serviceability']
    }
  ];

  return (
    <section id="industries" className="py-24 bg-[#0a1628] text-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase font-['Plus_Jakarta_Sans']">
            Industries We Supply & Serve
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Central Air Solutions provides air compressor equipment, system engineering, and servicing tailored to the operational demands of key industrial sectors.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 hover:border-[#f97316]/50 rounded-md p-7 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-md bg-[#dc2626] text-white flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#fbbf24] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4">
                  {ind.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f97316] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Callout box for Procurement / Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#102036] border border-white/10 rounded-md p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans'] uppercase">
              Procurement & Engineering Inquiries
            </h3>
            <p className="text-gray-300 text-sm md:text-base max-w-2xl">
              Are you an industrial plant manager, procurement officer, or mining engineer looking for equipment specifications and commercial quotes?
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="cursor-pointer bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider transition-colors whitespace-nowrap flex items-center gap-2"
          >
            <span>Request Commercial Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
