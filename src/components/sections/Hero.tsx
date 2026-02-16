'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { IndustrialGrid, LightBeamScanner, LightStreaks } from '@/components/ui/AnimatedBackgrounds';
import { 
  heroStagger, 
  heroTitle, 
  heroSubtitle, 
  heroCTA,
  buttonHover,
  buttonPress,
  easings,
  durations,
  staggers,
  distances,
  slowDrift,
  useReducedMotion,
} from '@/lib/motion';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-industrial-dark">
      {/* Industrial Animated Backgrounds */}
      <IndustrialGrid />
      <LightBeamScanner />
      <LightStreaks />
      
      {/* Animated Gradient Orbs - GPU-optimized */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-industrial-blue/20 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          x: [0, mousePosition.x * 0.3, 0],
          y: [0, mousePosition.y * 0.3, 0],
        }}
        transition={{ 
          duration: 25,
          ease: easings.smooth,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        animate={prefersReducedMotion ? {} : {
          x: [0, -mousePosition.x * 0.3, 0],
          y: [0, -mousePosition.y * 0.3, 0],
        }}
        transition={{ 
          duration: 30,
          ease: easings.smooth,
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Subtitle */}
            <motion.div
              variants={heroSubtitle}
              className="inline-block"
            >
              <motion.span 
                className="px-4 py-2 bg-industrial-slate/50 backdrop-blur-sm border border-industrial-blue/30 rounded-full text-industrial-blue text-sm font-medium inline-block"
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.02,
                  borderColor: 'rgba(37, 99, 235, 0.5)',
                  transition: { duration: durations.fast, ease: easings.mechanical },
                }}
              >
                Trusted Engineering Partner since 1995
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={heroTitle}
              className="heading-1 text-white"
            >
              Power. Precision.{' '}
              <span className="gradient-text">Performance.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={heroSubtitle}
              className="body-large max-w-3xl mx-auto"
            >
              Electrical & Instrumentation Excellence for Critical Industries
            </motion.p>

            <motion.p
              variants={heroSubtitle}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Delivering comprehensive E&I solutions for oil & gas,
              petrochemical, and power generation facilities with unwavering
              commitment to safety, quality, and operational excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroCTA}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-lg px-8 py-4"
                whileHover={prefersReducedMotion ? {} : { 
                  ...buttonHover,
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                }}
                whileTap={prefersReducedMotion ? {} : buttonPress}
              >
                Request Consultation
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#services')}
                className="btn-secondary text-lg px-8 py-4"
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.02,
                  borderColor: 'rgba(37, 99, 235, 0.8)',
                  transition: { duration: durations.fast, ease: easings.mechanical },
                }}
                whileTap={prefersReducedMotion ? {} : buttonPress}
              >
                View Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={heroCTA}
              className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto"
            >
              {[
                { value: '30+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Delivered' },
                { value: '99.8%', label: 'Uptime Achieved' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={`space-y-2 ${i === 1 ? 'border-x border-industrial-steel/30' : ''}`}
                  initial={{ opacity: 0, y: distances.subtle }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: durations.slow,
                    delay: 0.8 + (i * staggers.compact),
                    ease: easings.enter,
                  }}
                >
                  <motion.div 
                    className="heading-3 gradient-text"
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.05,
                      transition: { duration: durations.fast, ease: easings.sharp },
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Premium Engineering */}
      <motion.button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-industrial-blue transition-colors cursor-pointer group"
        animate={prefersReducedMotion ? {} : {
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: easings.smooth,
        }}
        whileHover={prefersReducedMotion ? {} : {
          scale: 1.1,
          transition: { duration: durations.fast, ease: easings.mechanical },
        }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : {
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: easings.smooth,
          }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
