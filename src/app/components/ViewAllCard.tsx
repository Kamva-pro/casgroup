import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

interface ViewAllCardProps {
  href?: string;
  className?: string;
}

export function ViewAllCard({ href = '/products/catalog', className = '' }: ViewAllCardProps) {
  return (
    <Link to={href} className={`shrink-0 block no-underline select-none ${className}`}>
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="flex h-[70vh] w-[78vw] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-red-500/40 bg-slate-900/95 p-8 sm:p-12 text-center transition-all duration-300 hover:border-red-500 hover:bg-slate-900 sm:w-[55vw] lg:w-[42vw] shadow-2xl group cursor-pointer"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 text-red-500 shadow-sm border border-red-500/30 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
          <Layers className="h-8 w-8" />
        </div>
        <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">View All Products</p>
        <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed">
          Browse the complete 35+ BAOFN equipment catalog, sizing charts, and full technical specifications
        </p>
        <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30 transition group-hover:bg-red-500">
          See Full Catalog →
        </span>
      </motion.div>
    </Link>
  );
}
