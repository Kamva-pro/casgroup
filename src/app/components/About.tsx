import { Award, Users, Target, Shield } from 'lucide-react';
import teamPhoto from '@/assets/operation-17.jpg';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Established 2014',
      description: 'Over a decade of excellence in industrial air solutions'
    },
    {
      icon: Users,
      title: '100% Black-Owned',
      description: 'Proudly contributing to economic transformation'
    },
    {
      icon: Target,
      title: 'Specialized Services',
      description: 'Expert support for mining and agricultural sectors'
    },
    {
      icon: Shield,
      title: 'Pressure Testing',
      description: 'Certified Excellence'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px]"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#dc2626] to-[#f97316] rounded-2xl opacity-20 blur-xl" />
            <img
              src={teamPhoto}
              alt="CAS Team"
              className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            {/* Accent corner */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#dc2626] to-[#f97316] rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[#dc2626]/10 text-[#dc2626] rounded-full text-sm font-medium mb-4">
                About Central Air Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
                Engineering-Driven Excellence Since 2014
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Central Air Solutions (CAS) PTY LTD is a proudly 100% black-owned company specializing industrial, and
                agricultural sectors with unwavering commitment to quality, safety, and innovation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white cursor-pointer p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#dc2626] to-[#f97316] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1628] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4">
              <div className="bg-[#0a1628] cursor-pointer text-white p-6 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626]/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                <p className="text-lg font-medium relative z-10">
                  "Delivering reliability and excellence to our clients through cutting-edge technology
                  and unmatched technical expertise."
                </p>
                <p className="text-[#fbbf24] mt-2 font-medium relative z-10">— CAS Leadership Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
