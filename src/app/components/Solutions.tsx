import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Wrench, FileSearch, CheckCircle2, ArrowRight, Gauge, Layers, Sliders, Truck } from 'lucide-react';

export function Solutions() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: FileSearch,
      title: 'Compressed Air System Design',
      description: 'Engineering customized air distribution networks and equipment selection tailored precisely to your CFM flow, pressure requirements, and duty cycle.',
      deliverables: ['Air Demand Profiling', 'Piping Layout Design', 'Receiver & Dryer Sizing', 'Energy Consumption Audits']
    },
    {
      icon: Truck,
      title: 'Industrial Equipment Supply',
      description: 'Direct procurement and supply of official BAOFN rotary screw compressors, VSD units, high-pressure drill rig compressors, and air treatment systems.',
      deliverables: ['BAOFN Compressor Range', 'High-Pressure Air Receivers', 'Refrigerated & Desiccant Dryers', 'Filtration & Water Separators']
    },
    {
      icon: Wrench,
      title: 'Installation & Commissioning',
      description: 'Turnkey site installation and rigorous commissioning by certified technicians to guarantee optimal performance, compliance, and warranty integrity.',
      deliverables: ['Mechanical & Electrical Hookup', 'Piping Network Installation', 'System Parameter Calibration', 'Operator Training & Handover']
    },
    {
      icon: Gauge,
      title: 'Pressure Testing & Audit Compliance',
      description: 'Comprehensive pressure testing, vessel safety inspections, and system performance optimisation to ensure 100% legal compliance and peak efficiency.',
      deliverables: ['Hydrostatic Vessel Testing', 'SANS/ASME Compliance', 'Leak Detection Audits', 'Pressure Drop Minimisation']
    }
  ];

  const journeySteps = [
    { step: '01', title: 'Identify Equipment Need', desc: 'Assess plant flow, pressure & air purity class requirement.' },
    { step: '02', title: 'CAS Equipment Supply', desc: 'Specify & supply the optimal BAOFN compressor system.' },
    { step: '03', title: 'Installation & Commissioning', desc: 'Turnkey integration, pipework, and safety parameter setup.' },
    { step: '04', title: 'Lifecycle Support', desc: 'Preventative maintenance, genuine parts, and pressure testing.' }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0a1628]/5 text-[#0a1628] rounded-full text-sm font-semibold mb-4 border border-[#0a1628]/10">
            <Sliders className="w-4 h-4 text-[#dc2626]" />
            Turnkey Engineering Capability
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6 tracking-tight">
            Compressed Air Systems & Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CAS does not just sell equipment or fix breakdowns — we deliver complete, end-to-end compressed air engineering solutions designed for uninterrupted industrial output.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 border border-gray-200/80 hover:border-[#dc2626]/30 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0a1628] to-[#1e293b] group-hover:from-[#dc2626] group-hover:to-[#f97316] text-white rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-200">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0a1628] mb-3 group-hover:text-[#dc2626] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                    {item.description}
                  </p>

                  <div className="space-y-2 border-t border-gray-200/60 pt-5 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Key Deliverables</div>
                    {item.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#dc2626] flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commercial Proposition Flow Bar (Customer Journey) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#0a1628] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#f97316]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#fbbf24] mb-2 block">
              Our Complete Customer Journey
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Equipment Supply First, Supported Throughout Its Lifecycle
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#f97316] font-mono mb-2 block">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-base text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dc2626] to-[#f97316] hover:scale-105 transform text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>Consult an Air Systems Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
