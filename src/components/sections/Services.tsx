'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap, Gauge, Play, Wrench, ChevronDown, Check } from 'lucide-react';
import { services } from '@/lib/data';
import { 
  staggerContainer,
  fadeUp,
  cardHover,
  iconScale,
  buttonHover,
  buttonPress,
  easings,
  durations,
  viewportConfig,
  useReducedMotion,
} from '@/lib/motion';
import { RadialPulse } from '@/components/ui/AnimatedBackgrounds';

const iconMap = {
  Zap: Zap,
  Gauge: Gauge,
  Play: Play,
  Wrench: Wrench,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportConfig.standard);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="section-padding bg-industrial-dark relative overflow-hidden">
      {/* Background Elements */}
      <RadialPulse />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-industrial-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-industrial-blue font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="heading-2 text-white">
              Comprehensive E&I Solutions for Critical Operations
            </h2>
            <p className="body-large">
              From design through lifecycle support, we deliver integrated
              electrical and instrumentation services that ensure safety,
              reliability, and performance.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const isExpanded = expandedService === service.id;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  whileHover={prefersReducedMotion ? {} : cardHover}
                  className="group h-full"
                >
                  <motion.div 
                    className="card-industrial h-full relative overflow-hidden"
                    whileHover={prefersReducedMotion ? {} : {
                      borderColor: 'rgba(37, 99, 235, 0.5)',
                      boxShadow: '0 10px 40px rgba(37, 99, 235, 0.15)',
                      transition: { duration: durations.fast, ease: easings.mechanical },
                    }}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-14 h-14 bg-industrial-blue/10 rounded-xl flex items-center justify-center flex-shrink-0"
                          whileHover={prefersReducedMotion ? {} : {
                            ...iconScale,
                            backgroundColor: 'rgba(37, 99, 235, 0.2)',
                            rotate: [0, -5, 5, 0],
                          }}
                        >
                          <Icon className="text-industrial-blue" size={28} />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-industrial-blue transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Service Details - Always Visible Core Info */}
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Key Services:
                        </h4>
                        <ul className="space-y-2">
                          {service.details.slice(0, 3).map((detail, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start space-x-2 text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ 
                                delay: idx * 0.05,
                                duration: durations.normal,
                                ease: easings.industrial,
                              }}
                            >
                              <Check
                                size={16}
                                className="text-industrial-blue mt-0.5 flex-shrink-0"
                              />
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable Content with AnimatePresence */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: 'auto', 
                              opacity: 1,
                            }}
                            exit={{ 
                              height: 0, 
                              opacity: 0,
                            }}
                            transition={{ 
                              duration: durations.normal,
                              ease: easings.industrial,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 space-y-4 border-t border-industrial-steel/30">
                              {/* Remaining Details */}
                              {service.details.length > 3 && (
                                <ul className="space-y-2">
                                  {service.details.slice(3).map((detail, idx) => (
                                    <motion.li
                                      key={idx}
                                      className="flex items-start space-x-2 text-gray-300 text-sm"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ 
                                        delay: idx * 0.05,
                                        duration: durations.normal,
                                        ease: easings.industrial,
                                      }}
                                    >
                                      <Check
                                        size={16}
                                        className="text-industrial-blue mt-0.5 flex-shrink-0"
                                      />
                                      <span>{detail}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              )}

                              {/* Capabilities */}
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-3">
                                  Technical Capabilities:
                                </h4>
                                <div className="grid gap-2">
                                  {service.capabilities.map((capability, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="px-3 py-2 bg-industrial-slate/30 rounded-lg text-gray-300 text-sm"
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ 
                                        delay: idx * 0.05,
                                        duration: durations.normal,
                                        ease: easings.industrial,
                                      }}
                                    >
                                      {capability}
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Expand/Collapse Button */}
                      <motion.button
                        onClick={() => toggleService(service.id)}
                        className="flex items-center space-x-2 text-industrial-blue hover:text-blue-400 transition-colors duration-300 text-sm font-medium mt-4"
                        whileHover={prefersReducedMotion ? {} : { 
                          x: 4, 
                          transition: { duration: durations.fast, ease: easings.mechanical } 
                        }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                      >
                        <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: durations.fast, ease: easings.mechanical }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeUp}
            className="text-center pt-8"
          >
            <p className="text-gray-400 mb-6">
              Need a custom solution? We design and execute tailored E&I
              projects to meet your specific operational requirements.
            </p>
            <motion.button 
              className="btn-primary"
              whileHover={prefersReducedMotion ? {} : { 
                ...buttonHover,
                boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
              }}
              whileTap={prefersReducedMotion ? {} : buttonPress}
            >
              Discuss Your Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
