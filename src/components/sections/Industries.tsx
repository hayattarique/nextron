'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplet, Factory, Wind, Zap, Beaker, Settings } from 'lucide-react';
import { industries } from '@/lib/data';
import { easings, durations, staggers, distances } from '@/lib/animations';

const iconMap = {
  Droplet: Droplet,
  Factory: Factory,
  Wind: Wind,
  Zap: Zap,
  Beaker: Beaker,
  Settings: Settings,
};

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggers.tight,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: durations.normal,
        ease: easings.enter,
      },
    },
  };

  return (
    <section id="industries" className="section-padding bg-industrial-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="industrial-grid-bg w-full h-full" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-industrial-blue font-semibold text-sm uppercase tracking-wider">
              Industries We Serve
            </span>
            <h2 className="heading-2 text-white">
              Trusted in Critical Industrial Environments
            </h2>
            <p className="body-large">
              Specialized expertise in high-consequence sectors where safety,
              precision, and reliability are essential to operational success.
            </p>
          </motion.div>

          {/* Industries Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: durations.fast, ease: easings.mechanical },
                  }}
                  className="group cursor-pointer"
                >
                  <motion.div 
                    className="card-industrial h-full relative overflow-hidden"
                    whileHover={{
                      borderColor: 'rgba(37, 99, 235, 0.5)',
                      boxShadow: '0 10px 40px rgba(37, 99, 235, 0.15)',
                      transition: { duration: durations.fast },
                    }}
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-industrial-blue/0 to-industrial-blue/0 group-hover:from-industrial-blue/5 group-hover:to-blue-600/5 transition-all duration-500" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div 
                        className="w-16 h-16 bg-industrial-blue/10 rounded-xl flex items-center justify-center mb-6"
                        whileHover={{ 
                          scale: 1.15,
                          backgroundColor: 'rgba(37, 99, 235, 0.2)',
                          rotate: [0, -3, 3, 0],
                          transition: { duration: durations.fast, ease: easings.mechanical },
                        }}
                      >
                        <Icon className="text-industrial-blue" size={32} />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-industrial-blue transition-colors duration-300">
                        {industry.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {industry.description}
                      </p>

                      {/* Decorative Line */}
                      <motion.div
                        className="h-1 bg-gradient-to-r from-industrial-blue to-blue-600 rounded-full mt-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: '40%' }}
                        viewport={{ once: true }}
                        transition={{ duration: durations.slow, delay: 0.2, ease: easings.mechanical }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Text */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="card-industrial">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Industry-Specific Expertise
                  </h3>
                  <p className="text-gray-400">
                    We understand the unique challenges, regulations, and
                    operational requirements of each sector we serve. Our
                    solutions are engineered to meet industry-specific standards
                    including API, IEC, NEC, ISA, and client specifications.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <button className="btn-secondary whitespace-nowrap">
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
