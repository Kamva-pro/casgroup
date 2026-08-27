import { motion } from 'framer-motion';
import { ArrowLeft, Construction } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-[#dc2626]/10 rounded-md flex items-center justify-center mx-auto mb-6">
            <Construction className="w-12 h-12 text-[#dc2626]" />
          </div>
          <h1 className="text-7xl font-black text-[#0a1628] mb-4 font-['Plus_Jakarta_Sans']">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-['Plus_Jakarta_Sans'] uppercase">Page Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable. Let's get you back on track.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md font-bold transition-colors text-sm uppercase tracking-wider"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
