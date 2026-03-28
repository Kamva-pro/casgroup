import Masonry from 'react-responsive-masonry';
import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import teamIndoor from '@/assets/team-indoor.jpg';
import teamOutdoor from '@/assets/team-outdoor.jpg';
import officeWork from '@/assets/office-work.jpg';
import op1 from '@/assets/operation-1.jpg';
import op2 from '@/assets/operation-2.jpg';
import op3 from '@/assets/operation-3.jpg';
import op4 from '@/assets/operation-4.jpg';
import op5 from '@/assets/operation-5.jpg';
import op6 from '@/assets/operation-6.jpg';
import op8 from '@/assets/operation-8.jpg';
import op9 from '@/assets/operation-9.jpg';
import op10 from '@/assets/operation-10.jpg';
import op11 from '@/assets/operation-11.jpg';
import op12 from '@/assets/operation-12.jpg';
import op13 from '@/assets/operation-13.jpg';
import op14 from '@/assets/operation-14.jpg';
import op15 from '@/assets/operation-15.jpg';
import op16 from '@/assets/operation-16.jpg';
import op17 from '@/assets/operation-17.jpg';
import op18 from '@/assets/operation-18.jpg';
import op19 from '@/assets/operation-19.jpg';

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  const startAnimation = () => {
    // If it already animated, don't restart
    if (count > 0) return;
    
    let start = 0;
    const duration = 2500; // 2.5 seconds
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
  };

  return (
    <motion.span 
      onViewportEnter={startAnimation}
      viewport={{ once: true, amount: "some" }}
      className="inline-block tabular-nums"
    >
      {count}{suffix}
    </motion.span>
  );
}

export function Operations() {
  const images = [
    {
      src: op8,
      alt: 'Industrial Air System',
      caption: 'Main Plant Operations'
    },
    {
      src: op9,
      alt: 'Compressor Maintenance',
      caption: 'Routine Servicing'
    },
    {
      src: op10,
      alt: 'System Installation',
      caption: 'Phase 1 Installation'
    },
    {
      src: op11,
      alt: 'Control Panels',
      caption: 'Advanced Control Systems'
    },
    {
      src: op12,
      alt: 'Piping Layout',
      caption: 'Precision Piping'
    },
    {
      src: op13,
      alt: 'Large Scale Compressor',
      caption: 'Industrial Units'
    },
    {
      src: op14,
      alt: 'Quality Check',
      caption: 'Quality Assurance'
    },
    {
      src: op15,
      alt: 'Project Completion',
      caption: 'Mining Project Lead'
    },
    {
      src: op16,
      alt: 'Team Collaboration',
      caption: 'On-site Technical Support'
    },
    {
      src: op17,
      alt: 'Workshop Tools',
      caption: 'Specialized Workshop Tools'
    },
    {
      src: op18,
      alt: 'Final Inspection',
      caption: 'Safety Inspections'
    },
    {
      src: op19,
      alt: 'Agricultural Unit',
      caption: 'Farmer Support Systems'
    }
  ];

  return (
    <section id="operations" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #1a2740 25%, transparent 25%, transparent 75%, #1a2740 75%, #1a2740), linear-gradient(45deg, #1a2740 25%, transparent 25%, transparent 75%, #1a2740 75%, #1a2740)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#dc2626]/20 text-[#fbbf24] rounded-full text-sm font-medium mb-4">
            Our Operations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Team & Fleet in Action
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A glimpse into our operations, showcasing our dedicated team, modern fleet, 
            and state-of-the-art facilities serving industries across the region.
          </p>
        </motion.div>

        {/* Masonry Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Masonry columnsCount={3} gutter="16px">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{image.caption}</p>
                  </div>
                </div>
                {/* Accent border on hover */}
                <div className="absolute inset-0 border-2 border-[#dc2626] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            ))}
          </Masonry>
        </motion.div>

        {/* Bottom stat bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10"
        >
          {[
            { label: 'Field Technicians', end: 15, suffix: '+' },
            { label: 'Years Experience', end: 10, suffix: '+' },
            { label: 'Workshop Bays', end: 4, suffix: '' },
            { label: 'Active Clients', end: 50, suffix: '+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#fbbf24] mb-2">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
