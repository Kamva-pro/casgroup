import { motion } from 'framer-motion';
import { ArrowRight, Wind } from 'lucide-react';
import { FlatModelRow } from '../data/productsData';

interface ProductCardProps {
  product: FlatModelRow;
  className?: string;
  onSelect?: (product: FlatModelRow) => void;
  onQuote?: (modelName: string) => void;
}

export function ProductCard({
  product,
  className = '',
  onSelect,
  onQuote
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={() => onSelect?.(product)}
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-xl cursor-pointer ${className}`}
    >
      <div>
        {/* Model Image Stage */}
        <div className="relative h-44 w-full flex items-center justify-center p-3 mb-5 bg-slate-50/80 rounded-xl overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.model}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 select-none drop-shadow-sm"
              draggable={false}
            />
          ) : (
            <Wind className="w-12 h-12 text-slate-300" />
          )}
          <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-white/95 rounded-md border border-slate-200 shadow-2xs">
            {product.seriesCode}
          </span>
        </div>

        {/* Model Info */}
        <p className="text-xs font-bold uppercase tracking-wider text-[#dc2626]">
          {product.badge || product.category}
        </p>

        <h4 className="mt-1 text-xl font-black text-[#0a1628] group-hover:text-[#dc2626] transition-colors line-clamp-1">
          {product.model}
        </h4>

        <p className="mt-2 text-xs font-semibold text-slate-600 flex items-center gap-2">
          <span>{product.powerKw > 0 ? `${product.powerKw} kW (${product.powerHp} HP)` : 'Pressure Vessel'}</span>
          <span>•</span>
          <span>{product.pressureBar}</span>
        </p>

        <p className="mt-1 text-xs text-slate-400 font-mono">
          FAD: {product.flowRateCfm || product.tankSize || 'Surge Vessel'}
        </p>
      </div>

      {/* Footer Action */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
          Click for Specs
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuote?.(product.model);
          }}
          className="rounded-full bg-[#0a1628] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-[#dc2626] shadow-xs cursor-pointer flex items-center gap-1.5"
        >
          <span>Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
