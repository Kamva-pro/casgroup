import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';
import {
  ArrowLeft,
  Search,
  X,
  Wind,
  Gauge,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {
  ALL_MODELS_FLAT,
  PRODUCT_FAMILIES,
  ProductCategory,
  ProductFamily,
  ProductModelVariant,
  FlatModelRow
} from '../data/productsData';

export function CatalogPage() {
  const [currentCategory, setCurrentCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [powerFilter, setPowerFilter] = useState<'all' | 'small' | 'medium' | 'large'>('all');

  // Modal quick-view state
  const [modalModel, setModalModel] = useState<{
    family: ProductFamily;
    variant: ProductModelVariant;
  } | null>(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories: ProductCategory[] = [
    'All',
    'Two-Stage Rotary Screw',
    'Variable Speed (VSD)',
    'Full Feature All-In-One',
    'Drill Rigs & Workshop',
    'Air Receivers',
    'Air Dryers & Treatment'
  ];

  // Filtered flat models
  const filteredModels = useMemo(() => {
    return ALL_MODELS_FLAT.filter((item) => {
      // Category filter
      if (currentCategory !== 'All' && item.category !== currentCategory) {
        const fam = PRODUCT_FAMILIES.find((f) => f.id === item.familyId);
        if (!fam || !fam.categoryTags.includes(currentCategory)) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.model.toLowerCase().includes(query);
        const matchesFamily = item.familyName.toLowerCase().includes(query);
        const matchesSeries = item.seriesCode.toLowerCase().includes(query);
        const matchesKw = `${item.powerKw}kw`.includes(query) || `${item.powerKw} kw`.includes(query);
        const matchesCfm = item.flowRateCfm.toLowerCase().includes(query);
        if (!matchesName && !matchesFamily && !matchesSeries && !matchesKw && !matchesCfm) {
          return false;
        }
      }

      // Power filter
      if (powerFilter === 'small' && (item.powerKw <= 0 || item.powerKw > 37)) return false;
      if (powerFilter === 'medium' && (item.powerKw <= 37 || item.powerKw > 110)) return false;
      if (powerFilter === 'large' && item.powerKw <= 110) return false;

      return true;
    });
  }, [currentCategory, searchQuery, powerFilter]);

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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar onSelectCategory={setCurrentCategory} />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Back Navigation & Breadcrumb */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#dc2626] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Hero Header */}
          <div className="mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dc2626] mb-3">
              Full Equipment Sizing & Technical Catalog
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0a1628] uppercase tracking-tight">
              All BAOFN Industrial Products & Specifications
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl text-base sm:text-lg leading-relaxed">
              Complete equipment catalog with motor ratings, pressure ranges, CFM delivery, and dimensions. Select any model to inspect detailed engineering specs or request a commercial quotation.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            {categories.map((cat) => {
              const isSelected = currentCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCurrentCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-white bg-[#dc2626] shadow-sm'
                      : 'text-slate-600 hover:text-[#dc2626] bg-white hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'All Equipment' : cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar & Power Bracket Filter Bar */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm mb-12">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-bold uppercase text-[#0a1628] tracking-tight">
                  Technical Specification & Sizing Sheet
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Showing <strong className="text-slate-800">{filteredModels.length}</strong> equipment configurations
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {/* Search Field */}
                <div className="relative min-w-[260px]">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search model, kW, or CFM..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Power Bracket Filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {(['all', 'small', 'medium', 'large'] as const).map((key) => {
                    const label =
                      key === 'all'
                        ? 'All Sizes'
                        : key === 'small'
                        ? '≤ 37 kW'
                        : key === 'medium'
                        ? '45 – 110 kW'
                        : '> 110 kW';
                    return (
                      <button
                        key={key}
                        onClick={() => setPowerFilter(key)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                          powerFilter === key
                            ? 'bg-[#dc2626] text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Spec Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2 text-left text-xs sm:text-sm">
                <thead className="sticky top-0 bg-white/95 backdrop-blur-md text-xs uppercase tracking-wider text-slate-400 z-10">
                  <tr>
                    <th className="py-3 px-4 font-bold">Model</th>
                    <th className="py-3 px-4 font-bold">Series</th>
                    <th className="py-3 px-4 font-bold">Power</th>
                    <th className="py-3 px-4 font-bold">Pressure</th>
                    <th className="py-3 px-4 font-bold">Air Delivery (FAD)</th>
                    <th className="py-3 px-4 font-bold">Noise / Vessel</th>
                    <th className="py-3 px-4 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredModels.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400">
                        No models found matching your search.
                      </td>
                    </tr>
                  ) : (
                    filteredModels.map((p) => {
                      const fam = PRODUCT_FAMILIES.find((f) => f.id === p.familyId);
                      const variant = fam?.variants.find((v) => v.id === p.modelId);
                      return (
                        <tr
                          key={p.modelId}
                          onClick={() => {
                            if (fam && variant) setModalModel({ family: fam, variant });
                          }}
                          className="group rounded-xl bg-slate-50/80 transition-all hover:bg-red-50/70 cursor-pointer"
                        >
                          <td className="rounded-l-xl py-3.5 px-4 font-extrabold text-[#0a1628] group-hover:text-[#dc2626] transition-colors">
                            {p.model}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 font-medium">
                            {p.seriesCode}
                          </td>
                          <td className="py-3.5 px-4 font-bold text-slate-900">
                            {p.powerKw > 0 ? `${p.powerKw} kW` : 'Vessel'}
                          </td>
                          <td className="py-3.5 px-4 font-mono text-slate-600">
                            {p.pressureBar}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-medium text-slate-900">
                            {p.flowRateCfm || 'Surge Storage'}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500">
                            {p.tankSize || p.noiseDb || '—'}
                          </td>
                          <td className="rounded-r-xl py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => scrollToContact(p.model)}
                              className="text-xs font-bold uppercase tracking-wider text-[#dc2626] hover:text-[#b91c1c] transition-colors cursor-pointer"
                            >
                              Quote →
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Air Receiver Sizing Guide Callout */}
          <div className="rounded-3xl bg-[#0a1628] text-white p-8 sm:p-12 relative overflow-hidden shadow-lg border border-slate-800">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
              <div className="space-y-3 text-center lg:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-[#dc2626]">
                  Engineering Sizing Guideline
                </p>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  Need Help Matching Compressor CFM to Air Receiver Capacity?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                  As a standard industrial guideline, compressed air systems require <strong>1 m³ of receiver capacity per 10 – 12 m³/min</strong> of compressor free air delivery to buffer pneumatic peak demands and prevent excessive compressor motor cycling.
                </p>
              </div>
              <button
                onClick={() => scrollToContact('Air Receiver & System Sizing')}
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-4 rounded-full transition-all whitespace-nowrap cursor-pointer text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-600/30 flex-shrink-0"
              >
                Request Sizing Audit
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Model Detail Modal */}
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
              <button
                onClick={() => setModalModel(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </button>

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
                    Technical Parameters
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Motor Power</span>
                      <span className="font-bold text-[#0a1628]">{modalModel.variant.powerKw} kW ({modalModel.variant.powerHp} HP)</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Pressure</span>
                      <span className="font-bold text-[#0a1628]">{modalModel.variant.pressureBar}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Air Flow (FAD)</span>
                      <span className="font-bold text-[#0a1628]">{modalModel.variant.flowRateCfm}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Noise Level</span>
                      <span className="font-bold text-[#0a1628]">{modalModel.variant.noiseDb || 'Harsh Duty'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {modalModel.family.keyHighlights && (
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

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 text-center sm:text-left">
                  All BAOFN units supplied with South African warranty and field service backup.
                </span>
                <button
                  onClick={() => scrollToContact(modalModel.variant.model)}
                  className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                >
                  Request Pricing & Sizing for {modalModel.variant.model}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
