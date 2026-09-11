import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  PhoneCall,
  Wind,
  Gauge,
  Search,
  CheckCircle2,
  Eye,
  X,
  Layers,
  Sparkles
} from 'lucide-react';
import {
  PRODUCT_FAMILIES,
  ALL_MODELS_FLAT,
  ProductCategory,
  ProductFamily,
  ProductModelVariant,
  FlatModelRow
} from '../data/productsData';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { ProductFilmstripScroll } from './ProductFilmstripScroll';

export type { ProductCategory };

interface ProductsProps {
  activeCategory?: ProductCategory;
  onCategoryChange?: (category: ProductCategory) => void;
}

// Spotlight showcase series configurations — verified against baofn.co.za
const SPOTLIGHT_SERIES = [
  {
    id: 'two-stage-fixed-speed',
    name: 'Two Stage Fixed Speed',
    fullName: 'Two Stage Fixed Speed Compressors',
    subtitle: 'Screw Compressors · 15 kW to 550 kW',
    description: 'Official BAOFN specifications for every two stage fixed speed compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    stat1Label: 'Motor Range',
    stat1Value: '15 – 550 kW',
    stat2Label: 'Outlet Range',
    stat2Value: 'G1 1/4 – DN150',
    stat3Label: 'Max Weight',
    stat3Value: '12,000 kg',
    familyId: 'two-stage-fixed-speed'
  },
  {
    id: 'two-stage-vsd',
    name: 'Two Stage VSD',
    fullName: 'Two Stage VSD Compressors',
    subtitle: 'Screw Compressors · 22 kW to 315 kW',
    description: 'Official BAOFN specifications for every two stage vsd compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    stat1Label: 'Motor Range',
    stat1Value: '22 – 315 kW',
    stat2Label: 'Outlet Range',
    stat2Value: 'G1 1/2 – DN125',
    stat3Label: 'Max Weight',
    stat3Value: '9,150 kg',
    familyId: 'two-stage-vsd'
  },
  {
    id: 'single-stage-vsd',
    name: 'Single Stage VSD',
    fullName: 'Single Stage VSD Compressors',
    subtitle: 'Screw Compressors · 7.5 kW to 75 kW',
    description: 'Official BAOFN specifications for every single stage vsd compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    stat1Label: 'Motor Range',
    stat1Value: '7.5 – 75 kW',
    stat2Label: 'Outlet Range',
    stat2Value: 'G 3/4 – G2 1/2',
    stat3Label: 'Max Weight',
    stat3Value: '1,390 kg',
    familyId: 'single-stage-vsd'
  },
  {
    id: 'oil-free',
    name: 'Oil Free Compressors',
    fullName: 'Oil Free Compressors',
    subtitle: 'Oil Free · 15 kW to 945 kW',
    description: 'Official BAOFN specifications for every oil free compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    stat1Label: 'Motor Range',
    stat1Value: '15 – 945 kW',
    stat2Label: 'Outlet Range',
    stat2Value: 'G1 1/4 – DN150',
    stat3Label: 'Max Weight',
    stat3Value: '22,010 kg',
    familyId: 'oil-free-rsvt'
  },
  {
    id: 'portable-compressors',
    name: 'Portable Compressors',
    fullName: 'Portable Compressors',
    subtitle: 'Portable · 8 to 25 Bar · 58 (80) to 310 (410) Diesel Power',
    description: 'Official BAOFN specifications for every portable compressors model — backed by the only OEM warranty on BAOFN units in South Africa.',
    stat1Label: 'Diesel Power',
    stat1Value: '58 – 310 kW',
    stat2Label: 'Pressure Range',
    stat2Value: '8 – 25 Bar',
    stat3Label: 'FAD Range',
    stat3Value: '8 – 40 m³/min',
    familyId: 'portable-compressors'
  },
  {
    id: 'drill-rigs',
    name: 'Drill Rigs',
    fullName: 'Drill Rigs',
    subtitle: 'Drill Rigs · 3 kW to 11 kW · 8 Bar',
    description: 'Official BAOFN specifications for every drill rigs model — backed by the only OEM warranty on BAOFN units in South Africa.',
    stat1Label: 'Motor Power',
    stat1Value: '3 – 11 kW',
    stat2Label: 'Working Pressure',
    stat2Value: '8 Bar',
    stat3Label: 'Air Volume',
    stat3Value: '0.42 – 1.7 m³/min',
    familyId: 'drill-rigs'
  },
  {
    id: 'air-receivers',
    name: 'Air Receivers & Vessels',
    fullName: 'Industrial Air Pressure Vessels',
    subtitle: 'ASME / SANS 347 Certified Pressure Vessels (500L – 10,000L+)',
    description: 'Certified industrial pressure vessels designed to SANS 347 pressure vessel standards for volume buffering and moisture separation.',
    stat1Label: 'Capacity Range',
    stat1Value: '500L – 10,000L+',
    stat2Label: 'Pressure Rating',
    stat2Value: '11 – 40 Bar',
    stat3Label: 'Certification',
    stat3Value: 'SANS 347 / ASME',
    familyId: 'certified-air-receivers'
  }
];

export function Products({ activeCategory, onCategoryChange }: ProductsProps) {
  const [internalCategory, setInternalCategory] = useState<ProductCategory>('All');
  const currentCategory = activeCategory !== undefined ? activeCategory : internalCategory;

  // 5a Spotlight active series tab
  const [activeSpotlightId, setActiveSpotlightId] = useState(SPOTLIGHT_SERIES[0].id);

  // Quick-view modal state
  const [modalModel, setModalModel] = useState<{
    family: ProductFamily;
    variant: ProductModelVariant;
  } | null>(null);

  const handleCategoryChange = (cat: ProductCategory) => {
    setInternalCategory(cat);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  const currentSpotlight = useMemo(() => {
    const s = SPOTLIGHT_SERIES.find((item) => item.id === activeSpotlightId) || SPOTLIGHT_SERIES[0];
    const family = PRODUCT_FAMILIES.find((f) => f.id === s.familyId) || PRODUCT_FAMILIES[0];
    const heroVariant = family.variants[family.defaultVariantIndex] || family.variants[0];
    return {
      ...s,
      modelCount: family.variants.length,
      image: heroVariant?.image,
      modelName: heroVariant?.model,
      family
    };
  }, [activeSpotlightId]);

  const scrollToContact = (modelName?: string) => {
    setModalModel(null);
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

      const subjectInput = document.querySelector<HTMLInputElement>(
        '#contact input[name="subject"], #contact input[name="interest"]'
      );
      if (subjectInput && modelName) {
        subjectInput.value = `Enquiry: BAOFN ${modelName}`;
      }
    }
  };



  return (
    <section id="products" className="pt-24 pb-24 relative overflow-hidden">
      {/* Soft Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header: Clean Typographic Hierarchy, No Pill Badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dc2626] mb-3">
            Authorized BAOFN Industrial Equipment Catalog
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1628] uppercase tracking-tight">
            BAOFN Compressors <span className="text-[#dc2626]">& Compressed Air Systems</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Engineered for high-efficiency continuous duty. We supply, commission, and maintain heavy-duty two-stage screw units, variable speed (VSD) compressors, drill rig systems, and certified pressure vessels across Southern Africa.
          </p>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* 5a. SPOTLIGHT SECTION: One Large Interactive Showcase Panel  */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-50/90 to-white p-6 sm:p-10 shadow-sm relative overflow-hidden mb-20"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />

          {/* Series Tabs with Sliding Underline - Responsive wrapping, no overflow scrollbar */}
          <div className="flex flex-wrap items-center justify-start sm:justify-center gap-x-6 sm:gap-x-8 gap-y-3 pb-3 border-b border-slate-200 mb-8">
            {SPOTLIGHT_SERIES.map((series) => {
              const isActive = activeSpotlightId === series.id;
              return (
                <button
                  key={series.id}
                  onClick={() => setActiveSpotlightId(series.id)}
                  className={`relative pb-3 text-xs sm:text-sm font-bold tracking-wide cursor-pointer transition-colors ${
                    isActive ? 'text-[#dc2626]' : 'text-slate-400 hover:text-slate-700'
                  }`}
                >
                  {series.name}
                  {isActive && (
                    <motion.div
                      layoutId="spotlight-tab-underline"
                      className="absolute -bottom-px left-0 right-0 h-[2.5px] bg-[#dc2626]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Crossfading Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpotlight.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr]"
            >
              {/* Left Product Image Stage with Slow Continuous Float */}
              <div className="relative flex items-center justify-center p-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative flex items-center justify-center w-full"
                >
                  {currentSpotlight.image ? (
                    <img
                      src={currentSpotlight.image}
                      alt={currentSpotlight.fullName}
                      className="max-h-[320px] sm:max-h-[360px] w-auto max-w-full object-contain drop-shadow-2xl select-none"
                    />
                  ) : (
                    <div className="h-64 w-64 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <Wind className="w-16 h-16" />
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Right Details & Big Specs */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#dc2626]">
                  {currentSpotlight.subtitle}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1628] leading-tight">
                  {currentSpotlight.fullName}
                </h3>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentSpotlight.description}
                </p>

                {/* 3 Key Specs Shown Large */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-y border-slate-200/80 py-6">
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#dc2626] tracking-tight">
                      {currentSpotlight.stat1Value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {currentSpotlight.stat1Label}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#dc2626] tracking-tight">
                      {currentSpotlight.stat2Value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {currentSpotlight.stat2Label}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-black text-[#dc2626] tracking-tight">
                      {currentSpotlight.stat3Value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {currentSpotlight.stat3Label}
                    </p>
                  </div>
                </div>

                {/* Spotlight Actions */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const family = currentSpotlight.family;
                      const variant = family.variants[family.defaultVariantIndex] || family.variants[0];
                      if (family && variant) {
                        setModalModel({ family, variant });
                      }
                    }}
                    className="cursor-pointer rounded-full bg-[#dc2626] px-7 py-3.5 font-bold text-xs sm:text-sm uppercase tracking-wider text-white shadow-lg shadow-red-600/20 transition hover:bg-[#b91c1c] hover:shadow-red-600/40"
                  >
                    View {currentSpotlight.name} Models →
                  </motion.button>
                  <motion.button
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToContact(currentSpotlight.name)}
                    className="cursor-pointer rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-700 transition hover:bg-slate-50 hover:border-slate-400"
                  >
                    Request Series Quote
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>{/* /max-w-7xl (first) */}

      {/* ------------------------------------------------------------- */}
      {/* 4b. FEATURED SHOWCASE: Pinned Horizontal Scroll (Full Width)  */}
      {/* ------------------------------------------------------------- */}
      <ProductFilmstripScroll
        products={ALL_MODELS_FLAT}
        onQuote={(modelName) => scrollToContact(modelName)}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 mt-20">
        {/* ------------------------------------------------------------- */}
        {/* Air Receiver Sizing Guide Callout (Clean Refactored Card)    */}
        {/* ------------------------------------------------------------- */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="rounded-3xl bg-[#0a1628] text-white p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 text-center lg:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-[#dc2626]">
                Air Receiver Sizing Guideline
              </p>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                Need Help Matching Compressor CFM to Air Receiver Capacity?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                As a standard industrial guideline, compressed air systems require <strong>1 m³ of receiver capacity per 10 – 12 m³/min</strong> of compressor free air delivery to buffer pneumatic peak demands and prevent excessive compressor motor cycling. Our technical engineers calculate your exact plant requirements.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToContact('Air Receiver & System Sizing')}
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-4 rounded-full transition-all whitespace-nowrap cursor-pointer text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 flex-shrink-0"
            >
              Request Sizing Audit
            </motion.button>
          </div>
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* Full Specification Modal (Interactive Engineering Deep Dive) */}
        {/* ------------------------------------------------------------- */}
        <AnimatePresence>
          {modalModel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalModel(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setModalModel(null)}
                  className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="pb-6 border-b border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#dc2626]">
                    {modalModel.family.seriesCode} · {modalModel.family.category}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a1628] mt-1">
                    BAOFN {modalModel.variant.model}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1">
                    {modalModel.family.subtitle}
                  </p>
                </div>

                {/* Modal Body */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6 items-center">
                  <div className="h-56 bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                    {modalModel.variant.image ? (
                      <img
                        src={modalModel.variant.image}
                        alt={modalModel.variant.model}
                        className="max-h-full max-w-full object-contain drop-shadow-md"
                      />
                    ) : (
                      <Wind className="w-16 h-16 text-slate-300" />
                    )}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official BAOFN Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                      {modalModel.variant.powerKw !== undefined && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Motor</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.powerKw} kW</span>
                        </div>
                      )}
                      {modalModel.variant.dieselPower && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Diesel Power</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.dieselPower} kW (HP)</span>
                        </div>
                      )}
                      {modalModel.variant.powerW !== undefined && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Power</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.powerW} W</span>
                        </div>
                      )}
                      {modalModel.variant.outlet && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Outlet</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.outlet}</span>
                        </div>
                      )}
                      {modalModel.variant.connection && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Connection</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.connection}</span>
                        </div>
                      )}
                      {modalModel.variant.weightKg && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Weight</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.weightKg}</span>
                        </div>
                      )}
                      {modalModel.variant.dimensions && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Dimensions</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.dimensions}</span>
                        </div>
                      )}
                      {modalModel.variant.pressureBar && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Pressure</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.pressureBar}</span>
                        </div>
                      )}
                      {modalModel.variant.flowRateM3 && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Volume / FAD</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.flowRateM3}</span>
                        </div>
                      )}
                      {modalModel.variant.flowRateNm3 && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">FAD</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.flowRateNm3}</span>
                        </div>
                      )}
                      {modalModel.variant.gas && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Refrigerant Gas</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.gas}</span>
                        </div>
                      )}
                      {modalModel.variant.pressureDrop && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Pressure Drop</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.pressureDrop}</span>
                        </div>
                      )}
                      {modalModel.variant.type && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Type</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.type}</span>
                        </div>
                      )}
                      {modalModel.variant.tankSize && (
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Storage Tank</span>
                          <span className="font-bold text-[#0a1628]">{modalModel.variant.tankSize}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                {modalModel.family.keyHighlights && modalModel.family.keyHighlights.length > 0 && (
                  <div className="mb-6 bg-slate-50 p-4 rounded-2xl">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Engineering Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {modalModel.family.keyHighlights.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#dc2626] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Modal Footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 text-center sm:text-left">
                    All BAOFN units supplied with South African warranty and field service backup.
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToContact(modalModel.variant.model)}
                    className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    Request Technical Datasheet for {modalModel.variant.model}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
