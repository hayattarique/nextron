'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Target, Users } from 'lucide-react';
import { 
  staggerContainer,
  fadeUp,
  iconScale,
  easings,
  durations,
  viewportConfig,
  useReducedMotion,
} from '@/lib/motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportConfig.standard);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding bg-industrial-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="industrial-grid-bg w-full h-full" />
      </div>

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
              About Nextron
            </span>
            <h2 className="heading-2 text-white">
              Engineered for Excellence in Critical Environments
            </h2>
            <p className="body-large">
              Three decades of proven expertise delivering mission-critical
              electrical and instrumentation solutions for the world&apos;s most
              demanding industrial operations.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Who We Are */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={prefersReducedMotion ? {} : {
                    backgroundColor: 'rgba(37, 99, 235, 0.15)',
                    transition: { duration: durations.fast, ease: easings.mechanical },
                  }}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : {
                      ...iconScale,
                      rotate: [0, -5, 5, 0],
                    }}
                  >
                    <Building2 className="text-industrial-blue" size={24} />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Who We Are
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Nextron Electrical & Instrumentation is a specialized
                      engineering contractor dedicated to delivering
                      comprehensive E&I solutions for oil & gas, petrochemical,
                      and power generation industries.
                    </p>
                    <p>
                      Founded on principles of technical excellence and safety
                      leadership, we have established ourselves as a trusted
                      partner for complex electrical and instrumentation
                      projects where precision, reliability, and compliance are
                      non-negotiable.
                    </p>
                    <p>
                      Our team combines deep industry knowledge with
                      cutting-edge technical capabilities to support the entire
                      project lifecycle—from initial design and engineering
                      through installation, commissioning, and long-term
                      maintenance support.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - What We Do */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-start space-x-4">
                <motion.div 
                  className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={prefersReducedMotion ? {} : {
                    backgroundColor: 'rgba(37, 99, 235, 0.15)',
                    transition: { duration: durations.fast, ease: easings.mechanical },
                  }}
                >
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : {
                      ...iconScale,
                      rotate: [0, -5, 5, 0],
                    }}
                  >
                    <Target className="text-industrial-blue" size={24} />
                  </motion.div>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    What We Do
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      We deliver end-to-end electrical and instrumentation
                      services tailored to the unique demands of heavy
                      industrial environments:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 bg-industrial-blue rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong className="text-white">Electrical Systems:</strong> Complete
                          power distribution, motor control, VFD integration,
                          and emergency power solutions
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 bg-industrial-blue rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong className="text-white">Instrumentation:</strong> Process
                          measurement, control valves, analytical systems, and
                          DCS/PLC/SCADA integration
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 bg-industrial-blue rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong className="text-white">Commissioning:</strong> Systematic
                          pre-commissioning, loop checks, FAT/SAT, and startup
                          support services
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 bg-industrial-blue rounded-full mt-2 flex-shrink-0" />
                        <span>
                          <strong className="text-white">Maintenance:</strong> Planned
                          preventive programs, turnaround support, and 24/7
                          emergency response
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Industries Served Preview */}
          <motion.div variants={fadeUp} className="pt-8">
            <div className="flex items-start space-x-4">
              <motion.div 
                className="w-12 h-12 bg-industrial-blue/10 rounded-lg flex items-center justify-center flex-shrink-0"
                whileHover={{
                  backgroundColor: 'rgba(37, 99, 235, 0.15)',
                  transition: { duration: durations.fast },
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <Users className="text-industrial-blue" size={24} />
                </motion.div>
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Industries We Serve
                </h3>
                <p className="text-gray-300 mb-4">
                  We specialize in high-consequence environments where safety,
                  reliability, and regulatory compliance are paramount:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    'Oil & Gas Production',
                    'Petroleum Refineries',
                    'Gas Processing & LNG',
                    'Power Generation',
                    'Petrochemical Plants',
                    'Heavy Manufacturing',
                  ].map((industry, index) => (
                    <motion.div
                      key={index}
                      className="px-4 py-3 bg-industrial-slate/30 border border-industrial-steel/30 rounded-lg text-gray-300 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 0.8 + index * 0.1,
                          duration: durations.normal,
                          ease: easings.enter,
                        }
                      } : {}}
                      whileHover={{
                        y: -4,
                        borderColor: 'rgba(37, 99, 235, 0.5)',
                        backgroundColor: 'rgba(37, 99, 235, 0.05)',
                        transition: { duration: durations.fast, ease: easings.mechanical },
                      }}
                    >
                      {industry}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
