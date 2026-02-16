'use client';

import { motion } from 'framer-motion';
import { easings, durations, slowDrift, pulseOpacity } from '@/lib/motion';

/**
 * Industrial Grid Background
 * Subtle animated grid pattern for industrial aesthetic
 * GPU-optimized with transform and opacity only
 */
export function IndustrialGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      {/* Static grid base */}
      <div className="absolute inset-0 industrial-grid-bg" />
      
      {/* Animated grid lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-industrial-blue/30 to-transparent"
          style={{
            left: `${20 + i * 30}%`,
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 2,
            ease: easings.industrial,
          }}
        />
      ))}
    </div>
  );
}

/**
 * Light Beam Scanner
 * Horizontal light sweep effect for hero sections
 */
export function LightBeamScanner() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute h-full w-1 bg-gradient-to-b from-transparent via-industrial-blue/50 to-transparent blur-sm"
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 4,
          delay: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'linear',
        }}
      />
    </div>
  );
}

/**
 * Light Streaks
 * Slow-moving light lines in background
 */
export function LightStreaks() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full bg-gradient-to-r from-transparent via-industrial-blue/20 to-transparent"
          style={{
            top: `${15 + i * 18}%`,
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: '100%',
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

/**
 * Radial Gradient Pulse
 * Subtle pulsing gradient background
 * GPU-optimized breathing effect
 */
export function RadialPulse() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.03), transparent 70%)',
      }}
      animate={pulseOpacity}
    />
  );
}

/**
 * Particle Field
 * Subtle floating particles for depth
 */
export function ParticleField() {
  const particles = [...Array(20)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute bg-industrial-blue/20 rounded-full blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

/**
 * Scanline Effect
 * Subtle horizontal scan for technical feel
 */
export function Scanline() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, transparent 48%, rgba(37, 99, 235, 0.05) 50%, transparent 52%)',
      }}
      animate={{
        y: ['0%', '100%'],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
}

/**
 * Corner Accents
 * Industrial corner brackets
 */
export function CornerAccents() {
  return (
    <>
      {/* Top Left */}
      <motion.div
        className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-industrial-blue/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      {/* Top Right */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-industrial-blue/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      {/* Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-industrial-blue/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      {/* Bottom Right */}
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-industrial-blue/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
    </>
  );
}
