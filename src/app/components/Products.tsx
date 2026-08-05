import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, PhoneCall, ShieldCheck, Zap, ArrowRight, Gauge, Layers, Wind } from 'lucide-react';

// Air Receivers images
import airReceiver1 from '@/assets/Air Receivers/Air Receiver 1.png';
import airReceiverMain from '@/assets/Air Receivers/Air Receiver.png';
import airReceiver2 from '@/assets/Air Receivers/Air Receiver2.png';

// Oil Free Compressors images
import rsvt400vsd from '@/assets/Oil Free Compressors/RSVT400VSD/RSVT400VSD.png';

// Oil Injected Compressors images
import dz10 from '@/assets/Oil Injected Compressors/Drill Rigs/DZ10/DZ10.png';
import rs3 from '@/assets/Oil Injected Compressors/Drill Rigs/RS3/RS3.png';
import rs11ff from '@/assets/Oil Injected Compressors/Full Feature/RS11 VSD FF/RS11VSDFF.png';
import rs75ff from '@/assets/Oil Injected Compressors/Full Feature/RS7.5 VSD FF/RS7.5VSDFF.png';
import sm3hp from '@/assets/Oil Injected Compressors/SM3HP/SM3HP.png';
import rs22vsd from '@/assets/Oil Injected Compressors/Single Stage VSD/RS22VSD/RS22VSD.png';

interface Product {
  id: string;
  title: string;
  category: 'Air Receivers' | 'Oil Free Compressors' | 'Oil Injected Compressors';
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  badgeColor: string;
  specs: string[];
}

export function Products() {
  const [activeTab, setActiveTab] = useState<'All' | 'Air Receivers' | 'Oil Free Compressors' | 'Oil Injected Compressors'>('All');

  const products: Product[] = [
    // Air Receivers
    {
      id: 'air-receiver-vertical',
      title: 'Vertical Industrial Air Receiver',
      category: 'Air Receivers',
      subtitle: 'Pressure Vessel Tank',
      description: 'High-capacity vertical air storage vessels engineered to absorb pressure surges, equalize air flow, and optimize air compressor efficiency.',
      image: airReceiverMain,
      badge: 'Air Storage',
      badgeColor: '#3b82f6',
      specs: ['Certified Pressure Tested', 'Heavy-Duty Steel', 'Corrosion-Resistant Coating', 'Safety Relief Valve Ready']
    },
    {
      id: 'air-receiver-high-cap',
      title: 'High-Capacity Air Storage Tank',
      category: 'Air Receivers',
      subtitle: 'Heavy-Duty Pressure Receiver',
      description: 'Industrial-grade air storage solution designed for heavy compressed air demand, ensuring stable line pressure and reduced compressor cycle frequency.',
      image: airReceiver1,
      badge: 'Pressure Vessel',
      badgeColor: '#0284c7',
      specs: ['ASME / SANS Compliant', 'Multi-Port Outlets', 'Drain Valve Assembly', 'Low Maintenance']
    },
    {
      id: 'air-receiver-duo',
      title: 'Dual-Stage Air Receiver Unit',
      category: 'Air Receivers',
      subtitle: 'Buffer & Storage Vessel',
      description: 'Robust receiver system built for harsh industrial environments, providing vital buffer capacity during high peak air demand.',
      image: airReceiver2,
      badge: 'Heavy Industrial',
      badgeColor: '#1d4ed8',
      specs: ['High Pressure Rating', 'Vibration Resistant', 'Easy Inspection Access', 'Long Lifespan']
    },

    // Oil Free Compressors
    {
      id: 'rsvt-400-vsd',
      title: 'RSVT 400 VSD Oil-Free Compressor',
      category: 'Oil Free Compressors',
      subtitle: '100% Pure Compressed Air',
      description: 'State-of-the-art oil-free rotary screw compressor with Variable Speed Drive technology. Delivers 100% ISO Class 0 pure air for critical industrial applications.',
      image: rsvt400vsd,
      badge: '100% Oil-Free (Class 0)',
      badgeColor: '#10b981',
      specs: ['ISO 8573-1 Class 0 Certified', 'Variable Speed Drive (VSD)', 'Maximum Energy Savings', 'Pharma & Food Grade Approved']
    },

    // Oil Injected Compressors
    {
      id: 'rs-vsd-full-feature',
      title: 'RS VSD Full Feature Compressor',
      category: 'Oil Injected Compressors',
      subtitle: 'Integrated Dryer & Air Package',
      description: 'All-in-one industrial rotary screw compressor with integrated refrigerated air dryer and precision filtration for clean, dry air.',
      image: rs11ff,
      badge: 'Full Feature Package',
      badgeColor: '#dc2626',
      specs: ['Integrated Refrigerated Dryer', 'Variable Speed Drive (VSD)', 'Compact Footprint', 'Plug & Play Installation']
    },
    {
      id: 'rs-22-vsd',
      title: 'RS22 VSD Rotary Screw Compressor',
      category: 'Oil Injected Compressors',
      subtitle: 'Single-Stage VSD Series',
      description: 'High-performance oil-injected rotary screw compressor engineered for continuous heavy-duty industrial operations with dynamic energy savings.',
      image: rs22vsd,
      badge: 'Energy Saver VSD',
      badgeColor: '#f97316',
      specs: ['Variable Speed Drive', 'Ultra-Quiet Operation', 'Direct Drive System', 'Smart Microprocessor Control']
    },
    {
      id: 'dz10-drill-rig',
      title: 'DZ10 Heavy-Duty Drill Rig Compressor',
      category: 'Oil Injected Compressors',
      subtitle: 'Mining & Quarrying Series',
      description: 'Ruggedized high-pressure compressor built specifically for drilling rigs, mining exploration, and harsh outdoor field operations.',
      image: dz10,
      badge: 'Mining & Drill Rig',
      badgeColor: '#b45309',
      specs: ['Extreme Environment Ready', 'High CFM & Bar Output', 'Heavy Diesel / Industrial Engine', 'Shock & Dust Protection']
    },
    {
      id: 'rs3-drill-rig',
      title: 'RS3 Portable Drill Rig Compressor',
      category: 'Oil Injected Compressors',
      subtitle: 'High Output Portable Unit',
      description: 'Heavy-duty high-pressure mobile air compressor engineered for maximum uptime and reliability on demanding drill sites.',
      image: rs3,
      badge: 'High Pressure Drill',
      badgeColor: '#d97706',
      specs: ['High CFM Delivery', 'Heavy Skid Chassis', 'Superior Thermal Management', 'Easy Field Maintenance']
    },
    {
      id: 'sm-3hp-compact',
      title: 'SM 3HP Industrial Screw Compressor',
      category: 'Oil Injected Compressors',
      subtitle: 'Compact Rotary Screw',
      description: 'Efficient and compact rotary screw compressor ideal for small-to-medium workshops requiring continuous commercial compressed air supply.',
      image: sm3hp,
      badge: 'Workshop Series',
      badgeColor: '#64748b',
      specs: ['Continuous 100% Duty Cycle', 'Low Noise Emissions', 'Energy Efficient Motor', 'Simple Serviceability']
    },
    {
      id: 'rs75-full-feature',
      title: 'RS 7.5 VSD FF Compact System',
      category: 'Oil Injected Compressors',
      subtitle: 'Integrated Air System',
      description: 'Compact Full Feature rotary screw unit featuring smart VSD control and integrated air treatment for reliable industrial air.',
      image: rs75ff,
      badge: 'Compact Full Feature',
      badgeColor: '#ef4444',
      specs: ['Inverter Driven (VSD)', 'Built-in Air Dryer', 'Low Operating Costs', 'Digital Touch Display']
    }
  ];

  const filteredProducts = activeTab === 'All'
    ? products
    : products.filter(p => p.category === activeTab);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const tabs: Array<'All' | 'Air Receivers' | 'Oil Free Compressors' | 'Oil Injected Compressors'> = [
    'All',
    'Air Receivers',
    'Oil Free Compressors',
    'Oil Injected Compressors'
  ];

  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0a1628_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#dc2626]/10 text-[#dc2626] rounded-full text-sm font-semibold mb-4 border border-[#dc2626]/20">
            <Wind className="w-4 h-4" />
            Equipment & Products Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6 tracking-tight">
            Industrial Air Compressors & Receivers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our premium range of air receivers, 100% oil-free compressors, and heavy-duty oil-injected rotary screw systems available for purchase with dedicated engineering support.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm ${
                activeTab === tab
                  ? 'bg-[#0a1628] text-white shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-[#dc2626] border border-gray-200'
              }`}
            >
              {tab === 'All' ? 'All Products' : tab}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-72 bg-gradient-to-br from-gray-100 to-gray-50 p-6 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-md"
                    />
                    
                    {/* Badge */}
                    <span
                      className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white rounded-md shadow"
                      style={{ backgroundColor: product.badgeColor }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      {product.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#dc2626] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>

                    {/* Specs / Features */}
                    <div className="space-y-2 mb-6">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                          <ShieldCheck className="w-4 h-4 text-[#dc2626] flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0 border-t border-gray-100 bg-gray-50/50 mt-auto">
                  <button
                    onClick={scrollToContact}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#dc2626] to-[#f97316] hover:from-[#b91c1c] hover:to-[#ea580c] text-white py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-98 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Contact for Price</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-[#0a1628] rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10"
        >
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Zap className="w-6 h-6 text-[#fbbf24]" />
              Need Custom Compressor Specifications or Sizing?
            </h3>
            <p className="text-gray-300 text-sm max-w-2xl">
              Our engineering specialists provide tailored compressed air audits, custom receiver sizing, and competitive quotes for all industrial setups.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="bg-white text-[#0a1628] hover:bg-[#fbbf24] hover:text-[#0a1628] font-bold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md whitespace-nowrap cursor-pointer text-sm uppercase tracking-wider"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
