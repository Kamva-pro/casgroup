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
    <section id="values" className="py-20 bg-[#0a1628]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans'] uppercase">
            Our Core Values
          </h2>
          <p className="text-gray-300">
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
                className="group relative cursor-pointer bg-white/5 hover:bg-white/10 p-6 rounded-md transition-colors border border-white/10 hover:border-[#dc2626]/50 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-[#dc2626] rounded-md flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#fbbf24] transition-colors">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400">
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
