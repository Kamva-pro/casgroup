import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function CatalogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center pt-28 pb-20 px-6">
        <div className="mb-8 w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Main Site</span>
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#0a1628]">
            Coming <span className="text-[#dc2626]">Soon</span>
          </h1>
        </div>
      </main>

      <Footer />
    </div>
  );
}
