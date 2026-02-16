'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, ShieldCheck, Award, FileCheck, Clipboard, Clock } from 'lucide-react';
import { whyChooseItems } from '@/lib/data';
import { easings, durations, staggers, distances, progressiveStagger } from '@/lib/animations';

const iconMap = {
  Shield: Shield,
  ShieldCheck: ShieldCheck,
  Award: Award,
  FileCheck: FileCheck,
  Clipboard: Clipboard,
  Clock: Clock,
};

export default function WhyChoose() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggers.normal,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: distances.normal },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: durations.slow,
        ease: easings.enter,
      },
    },
  };

  return (
    <section id="why-choose" className="section-padding bg-industrial-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-industrial-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
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
              Why Choose Nextron
            </span>
            <h2 className="heading-2 text-white">
              Your Trusted Partner in Critical Operations
            </h2>
            <p className="body-large">
              Three decades of proven performance delivering mission-critical
              E&I solutions with unwavering commitment to excellence.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    y: -6,
                    transition: { duration: durations.fast, ease: easings.mechanical },
                  }}
                  className="group"
                >
                  <motion.div 
                    className="card-industrial h-full relative overflow-hidden"
                    whileHover={{
                      borderColor: 'rgba(37, 99, 235, 0.5)',
                      boxShadow: '0 10px 40px rgba(37, 99, 235, 0.15)',
                      transition: { duration: durations.fast },
                    }}
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-industrial-blue/0 to-industrial-blue/0 group-hover:from-industrial-blue/10 group-hover:to-blue-600/5 transition-all duration-500" />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon and Stats */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className="w-14 h-14 bg-industrial-blue/10 rounded-xl flex items-center justify-center"
                          variants={progressiveStagger.icon}
                          whileHover={{
                            scale: 1.15,
                            backgroundColor: 'rgba(37, 99, 235, 0.2)',
                            rotate: [0, -5, 5, 0],
                            transition: { duration: durations.fast, ease: easings.mechanical },
                          }}
                        >
                          <Icon className="text-industrial-blue" size={28} />
                        </motion.div>
                        {item.stats && (
                          <div className="px-3 py-1 bg-industrial-slate/50 rounded-full">
                            <span className="text-industrial-blue font-bold text-sm">
                              {item.stats}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <motion.h3 
                          variants={progressiveStagger.title}
                          className="text-xl font-bold text-white mb-3 group-hover:text-industrial-blue transition-colors duration-300"
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p 
                          variants={progressiveStagger.description}
                          className="text-gray-400 leading-relaxed"
                        >
                          {item.description}
                        </motion.p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="mt-6">
                        <motion.div
                          className="h-1 bg-gradient-to-r from-industrial-blue to-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '60%' }}
                          viewport={{ once: true }}
                          transition={{ duration: durations.slow, delay: 0.3, ease: easings.mechanical }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <motion.div variants={itemVariants} className="pt-8">
            <div className="bg-gradient-to-r from-industrial-slate/30 to-industrial-slate/10 border border-industrial-blue/30 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="heading-3 text-white">
                    Experience the Nextron Difference
                  </h3>
                  <p className="text-gray-300">
                    Partner with a team that understands the critical nature of
                    your operations. Our proven track record speaks to our
                    commitment to safety, quality, and operational excellence.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-1">
                        Zero
                      </div>
                      <div className="text-gray-400 text-sm">
                        Lost Time Incidents
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold gradient-text mb-1">
                        100%
                      </div>
                      <div className="text-gray-400 text-sm">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    Request Consultation
                  </button>
                  <button className="btn-secondary flex-1">
                    Download Brochure
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
