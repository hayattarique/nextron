'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Award, BadgeCheck, Eye, Handshake } from 'lucide-react';
import { commitments } from '@/lib/data';
import { 
  staggerContainerRelaxed,
  fadeUp,
  slideInLeft,
  iconScale,
  easings,
  durations,
  viewportConfig,
  useReducedMotion,
} from '@/lib/motion';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Award: Award,
  BadgeCheck: BadgeCheck,
  Eye: Eye,
  Handshake: Handshake,
};

export default function Commitment() {
  const ref = useRef(null);
  const isInView = useInView(ref, viewportConfig.standard);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-industrial-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="industrial-grid-bg w-full h-full" />
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-industrial-blue/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainerRelaxed}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-industrial-blue font-semibold text-sm uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="heading-2 text-white">
              Built on Principles That Matter
            </h2>
            <p className="body-large">
              Our values aren&apos;t just words—they&apos;re the foundation of every
              project we deliver and every relationship we build.
            </p>
          </motion.div>

          {/* Commitments List */}
          <div className="max-w-5xl mx-auto space-y-6">
            {commitments.map((commitment, index) => {
              const Icon = iconMap[commitment.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={commitment.id}
                  variants={slideInLeft}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.01,
                    x: 4,
                    transition: { duration: durations.fast, ease: easings.mechanical },
                  }}
                  className="group"
                >
                  <motion.div 
                    className="card-industrial relative overflow-hidden"
                    whileHover={{
                      borderColor: 'rgba(37, 99, 235, 0.5)',
                      boxShadow: '0 10px 40px rgba(37, 99, 235, 0.15)',
                      transition: { duration: durations.fast },
                    }}
                  >
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-industrial-blue/0 to-industrial-blue/0 group-hover:from-industrial-blue/5 group-hover:to-transparent transition-all duration-500" />

                    <div
                      className={`flex flex-col md:flex-row gap-6 items-start ${
                        isEven ? '' : 'md:flex-row-reverse'
                      } relative z-10`}
                    >
                      {/* Icon Side */}
                      <div className="flex-shrink-0">
                        <motion.div 
                          className="w-20 h-20 bg-gradient-to-br from-industrial-blue/20 to-blue-600/10 rounded-2xl flex items-center justify-center"
                          whileHover={{ 
                            scale: 1.15,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: durations.fast, ease: easings.mechanical },
                          }}
                        >
                          <Icon className="text-industrial-blue" size={36} />
                        </motion.div>
                      </div>

                      {/* Content Side */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-industrial-blue transition-colors duration-300">
                            {commitment.title}
                          </h3>
                          <motion.div
                            className="h-px flex-1 bg-gradient-to-r from-industrial-blue/50 to-transparent"
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: durations.slow, delay: 0.2, ease: easings.mechanical }}
                          />
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <motion.div variants={fadeUp} className="pt-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-industrial-blue/20 to-blue-600/20 border border-industrial-blue/30 rounded-xl">
                <p className="text-white text-lg font-semibold">
                  &quot;Engineering excellence through integrity, safety, and client
                  partnership&quot;
                </p>
              </div>
              <p className="text-gray-400">
                These commitments guide every aspect of our work—from initial
                engineering through project execution and long-term support.
                They&apos;re not aspirations; they&apos;re our standard operating
                procedure.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
