import { Users, Award, Shield, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function CoreValues() {
  const values = [
    {
      icon: Users,
      title: 'Client-First',
      description: 'Your success drives everything we do'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Excellence in every service delivered'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Operating with honesty and delivering on promises consistently'
    },
    {
      icon: Target,
      title: 'Expertise',
      description: 'Deep technical knowledge and experience'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge solutions'
    }
  ];

  return (
    <section id="values" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-3 uppercase">
            Our Core Values
          </h2>
          <p className="text-gray-500">
            The principles that guide our work and define our commitment to engineering excellence
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer bg-white hover:bg-gray-50 p-6 rounded-md transition-all border border-gray-200 hover:border-[#dc2626]/40 hover:shadow-md text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-[#dc2626] rounded-md flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0a1628] mb-2 group-hover:text-[#dc2626] transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
