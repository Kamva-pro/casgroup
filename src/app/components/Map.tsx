import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function Map() {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center mb-8">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center justify-center p-3 bg-[#dc2626]/10 text-[#dc2626] rounded-xl mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0a1628] mb-4">
                Find Us in Kimberley
              </h2>
              <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                Our headquarters is positioned to provide rapid industrial air and compressor solutions to the region. Connect with us at our facility.
              </p>
            </div>
            <div className="w-full md:w-auto flex-shrink-0">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center md:text-left">
                <p className="font-bold text-[#0a1628] text-lg mb-2">Physical Address</p>
                <p className="text-gray-600">4 Cabinet Street</p>
                <p className="text-gray-600">Kimdustria, Kimberley, 8301</p>
              </div>
            </div>
          </div>
          
          <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.7766!2d24.764!3d-28.738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ0JzE2LjgiUyAyNMKwNDUnNTAuNCJF!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Central Air Solutions Location"
              className="absolute inset-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
