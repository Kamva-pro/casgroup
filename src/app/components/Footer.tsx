import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import casLogo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0a1628] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="inline-block bg-white/95 p-2 rounded-xl shadow-md border border-gray-100 mb-6">
              <img
                src={casLogo}
                alt="Central Air Solutions"
                className="h-10 md:h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Industrial Air & Compressor Specialists serving the mining and agricultural
              sectors with 24/7 technical support and engineering-driven solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#fbbf24]">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#dc2626] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Physical Address</p>
                  <p className="text-gray-300 text-sm">
                    4 Cabinet Street<br />
                    Kimdustria, Kimberley
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#dc2626] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:053-832-1249"
                    className="text-gray-300 text-sm hover:text-[#dc2626] transition-colors"
                  >
                    053-832-1249
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#dc2626] mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:admin@casgroup.co.za"
                    className="text-gray-300 text-sm hover:text-[#dc2626] transition-colors"
                  >
                    admin@casgroup.co.za
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#fbbf24]">Our Services</h3>
            <ul className="space-y-3">
              {[
                '24/7 Emergency Service',
                'Maintenance Plans',
                'Pressure Testing',
                'Workshop Overhauls',
                'Air Audits',
                'Field Services',
                'SANAS Compliance'
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#dc2626] rounded-full" />
                  <button
                    onClick={() => {
                      const element = document.getElementById('services');
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 text-sm hover:text-[#dc2626] transition-colors cursor-pointer text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Central Air Solutions (CAS) PTY LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>
                Developed by{' '}
                <a
                  href="https://kamva-pro.github.io/kamvelihle-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#dc2626] transition-colors hover:underline"
                >
                  Kamvelihle
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
