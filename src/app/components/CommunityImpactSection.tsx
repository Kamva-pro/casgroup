import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, X, ExternalLink } from 'lucide-react';

import tvetPhotoMain from '@/assets/tvet-imgs2.jpeg';
import tvetPhotoCourse from '@/assets/tvet-imgs-3.jpeg';
import tvetPhotoTeam from '@/assets/tvet-imgs.jpeg';
import tvetLetter from '@/assets/tvet-artisan-letter.jpeg';

export function CommunityImpactSection() {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  return (
    <section id="community" className="py-24 bg-slate-50/80 border-t border-slate-200 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading with clean, plain language */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-600">
            Community Support
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 lg:text-4xl tracking-tight">
            Artisan Development in the Northern Cape
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Central Air Solutions sponsors student tuition and practical trade training through our partnership with Northern Cape Urban TVET College in Kimberley.
          </p>
        </div>

        {/* Expansive 2-Column Grid filling the page */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
              <img
                src={tvetPhotoMain}
                alt="Central Air Solutions artisan development partnership with Northern Cape Urban TVET College"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-xs font-semibold">
                Kimberley, Northern Cape
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Vocational Training & Education
                </p>
                <h3 className="mt-2 text-2xl font-black text-slate-900 tracking-tight">
                  Artisan & Technical Skills Development
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  We partner with Northern Cape Urban TVET College to fund student tuition fees and support hands-on technical trade training. This initiative directly assists apprentices completing mechanical, electrical, and fabrication qualifications.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedLetter(tvetLetter)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-red-600" />
                  <span>View Official College Letter →</span>
                </button>
                <span className="text-xs text-slate-400">Verified Partnership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Event Photos + Official Letter Preview (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 2 Side-by-Side Event Photos */}
            <div className="grid grid-cols-2 gap-4 h-48 sm:h-56">
              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
                <img
                  src={tvetPhotoCourse}
                  alt="CAS team and TVET community"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
                <img
                  src={tvetPhotoTeam}
                  alt="NCU TVET College students and instructors"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Official Letter Preview Card */}
            <div
              onClick={() => setSelectedLetter(tvetLetter)}
              className="flex-1 rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:border-red-300 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-28 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-xs relative">
                  <img
                    src={tvetLetter}
                    alt="NCU TVET letter thumbnail"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-md mb-2">
                    Official Document
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-red-600 transition-colors">
                    NCU TVET College Acknowledgement
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    Signed by Acting Principal E. Mokokong, Department of Higher Education & Training.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Click to inspect full document</span>
                <span className="font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                  Open Letter →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Document Viewer */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                  Official College Document
                </p>
                <h4 className="text-xl font-black text-slate-900 mt-1">
                  Northern Cape Urban TVET College Letter
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Official acknowledgement of artisan development contribution · Kimberley
                </p>
              </div>

              <img
                src={selectedLetter}
                alt="NCU TVET College Official Thank You Letter"
                className="w-full h-auto rounded-xl border border-slate-200 shadow-sm"
              />

              <div className="mt-6 flex justify-end">
                <a
                  href={selectedLetter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-red-700 transition-colors"
                >
                  <span>Open Full Resolution File</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
