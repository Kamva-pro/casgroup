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
      description: 'Honest, transparent business practices'
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
    <section id="values" className="py-20 bg-gradient-to-r from-[#0a1628] via-[#1a2740] to-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Core Values
          </h2>
          <p className="text-gray-300">
            The principles that guide our work and define our commitment to excellence
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
                className="group relative bg-white/5 backdrop-blur-sm hover:bg-white/10 p-6 rounded-xl transition-all duration-300 border border-white/10 hover:border-[#dc2626]/50 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#dc2626] to-[#f97316] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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

                {/* Accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dc2626] to-[#fbbf24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
