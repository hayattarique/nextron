/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ENTERPRISE MOTION DESIGN SYSTEM
 * Industrial-Grade Animation Framework for Heavy Engineering Websites
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Design Philosophy:
 * - Controlled, mechanical, precise
 * - Slow and intentional
 * - Never playful or bouncy
 * - Engineered confidence
 * 
 * Performance Requirements:
 * - GPU-accelerated properties only (transform, opacity)
 * - 60fps minimum
 * - Lighthouse score > 90
 */

import { Variants, Transition, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// EASING CURVES - Industrial Precision
// ═══════════════════════════════════════════════════════════════════════════

export const easings = {
  // Primary easing - baseline for all animations
  industrial: [0.4, 0, 0.2, 1] as [number, number, number, number],
  
  // Entrance animations - controlled arrival
  enter: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  
  // Exit animations - clean departure
  exit: [0.4, 0, 1, 1] as [number, number, number, number],
  
  // Mechanical precision - for technical interactions
  mechanical: [0.45, 0.05, 0.55, 0.95] as [number, number, number, number],
  
  // Sharp industrial feel
  sharp: [0.4, 0, 0.6, 1] as [number, number, number, number],
  
  // Smooth professional transition
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

// ═══════════════════════════════════════════════════════════════════════════
// TIMING SYSTEM - Standardized Durations
// ═══════════════════════════════════════════════════════════════════════════

export const durations = {
  instant: 0.2,
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  verySlow: 0.9,
  deliberate: 1.2,
};

// ═══════════════════════════════════════════════════════════════════════════
// STAGGER SYSTEM - Sequential Animation Timing
// ═══════════════════════════════════════════════════════════════════════════

export const staggers = {
  tight: 0.05,
  compact: 0.08,
  normal: 0.1,
  comfortable: 0.12,
  relaxed: 0.15,
  loose: 0.2,
};

// ═══════════════════════════════════════════════════════════════════════════
// MOVEMENT DISTANCES - Controlled Translation Amounts
// ═══════════════════════════════════════════════════════════════════════════

export const distances = {
  minimal: 6,
  subtle: 12,
  normal: 18,
  prominent: 24,
  dramatic: 32,
};

// ═══════════════════════════════════════════════════════════════════════════
// VIEWPORT CONFIGURATION - Scroll Trigger Settings
// ═══════════════════════════════════════════════════════════════════════════

export const viewportConfig = {
  // Standard viewport trigger
  standard: {
    once: true,
    amount: 0.2,
  },
  
  // Early trigger for large sections
  early: {
    once: true,
    amount: 0.1,
  },
  
  // Late trigger for precise timing
  late: {
    once: true,
    amount: 0.3,
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// REUSABLE ANIMATION VARIANTS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * FADE UP - Primary entrance animation
 * Subtle upward movement with opacity fade
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: distances.normal,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.enter,
    },
  },
};

/**
 * FADE IN - Simple opacity transition
 * For elements that shouldn't move
 */
export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

/**
 * SCALE IN - Subtle scale with fade
 * For cards and contained elements
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.industrial,
    },
  },
};

/**
 * FADE DOWN - Downward entrance
 * For dropdown menus and notifications
 */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -distances.subtle,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.enter,
    },
  },
};

/**
 * SLIDE IN LEFT - Horizontal entrance from left
 */
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -distances.prominent,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.enter,
    },
  },
};

/**
 * SLIDE IN RIGHT - Horizontal entrance from right
 */
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: distances.prominent,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.enter,
    },
  },
};

/**
 * STAGGER CONTAINER - Parent container for staggered children
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.normal,
      delayChildren: 0.1,
    },
  },
};

/**
 * STAGGER CONTAINER (FAST) - Tighter stagger timing
 */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.compact,
      delayChildren: 0.05,
    },
  },
};

/**
 * STAGGER CONTAINER (RELAXED) - Slower stagger timing
 */
export const staggerContainerRelaxed: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.comfortable,
      delayChildren: 0.15,
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// MICRO-INTERACTIONS - Hover & Press States
// ═══════════════════════════════════════════════════════════════════════════

/**
 * CARD HOVER - Elevation with subtle lift
 */
export const cardHover = {
  y: -6,
  transition: {
    duration: durations.fast,
    ease: easings.mechanical,
  },
};

/**
 * CARD HOVER (SUBTLE) - Minimal elevation
 */
export const cardHoverSubtle = {
  y: -3,
  transition: {
    duration: durations.fast,
    ease: easings.mechanical,
  },
};

/**
 * ICON SCALE - Micro animation for icons
 */
export const iconScale = {
  scale: 1.05,
  transition: {
    duration: durations.fast,
    ease: easings.sharp,
  },
};

/**
 * BUTTON HOVER - Primary button interaction
 */
export const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: {
    duration: durations.fast,
    ease: easings.mechanical,
  },
};

/**
 * BUTTON PRESS - Tactile press feedback
 */
export const buttonPress = {
  scale: 0.98,
  y: 0,
  transition: {
    duration: durations.instant,
    ease: easings.sharp,
  },
};

/**
 * GLOW PULSE - Subtle glow animation
 */
export const glowPulse = {
  boxShadow: [
    '0 0 20px rgba(37, 99, 235, 0.2)',
    '0 0 30px rgba(37, 99, 235, 0.3)',
    '0 0 20px rgba(37, 99, 235, 0.2)',
  ],
  transition: {
    duration: durations.deliberate,
    ease: easings.smooth,
  },
};

/**
 * BORDER GLOW - Subtle border accent
 */
export const borderGlow = {
  borderColor: 'rgba(37, 99, 235, 0.5)',
  boxShadow: '0 0 20px rgba(37, 99, 235, 0.1)',
  transition: {
    duration: durations.normal,
    ease: easings.smooth,
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// INPUT & FORM INTERACTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * INPUT FOCUS - Form input focus state
 */
export const inputFocus = {
  scale: 1.005,
  borderColor: 'rgba(37, 99, 235, 0.8)',
  boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)',
  transition: {
    duration: durations.fast,
    ease: easings.smooth,
  },
};

/**
 * LABEL FLOAT - Floating label animation
 */
export const labelFloat: Variants = {
  default: {
    y: 0,
    scale: 1,
    color: '#9ca3af',
  },
  focused: {
    y: -24,
    scale: 0.85,
    color: '#2563eb',
    transition: {
      duration: durations.normal,
      ease: easings.industrial,
    },
  },
};

/**
 * ERROR MESSAGE - Error state fade in
 */
export const errorMessage: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    marginTop: 0,
  },
  visible: {
    opacity: 1,
    height: 'auto',
    marginTop: 4,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// BACKGROUND MOTION - Ambient Movement
// ═══════════════════════════════════════════════════════════════════════════

/**
 * SLOW DRIFT - Ultra-slow background movement
 */
export const slowDrift = {
  x: [0, 10, 0],
  y: [0, 15, 0],
  transition: {
    duration: 25,
    repeat: Infinity,
    ease: easings.smooth,
  },
};

/**
 * PULSE OPACITY - Breathing effect
 */
export const pulseOpacity = {
  opacity: [0.3, 0.5, 0.3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: easings.smooth,
  },
};

/**
 * ROTATE SLOW - Slow rotation for background elements
 */
export const rotateSlow = {
  rotate: [0, 360],
  transition: {
    duration: 30,
    repeat: Infinity,
    ease: 'linear' as const,
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// ACCESSIBILITY - Reduced Motion Support
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Hook to detect user's reduced motion preference
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

/**
 * Get animation props based on reduced motion preference
 */
export function getMotionProps(
  variants: Variants,
  reducedMotion: boolean
): MotionProps {
  if (reducedMotion) {
    return {
      initial: false,
      animate: 'visible',
      variants: {
        hidden: {},
        visible: { opacity: 1 },
      },
    };
  }

  return {
    initial: 'hidden',
    animate: 'visible',
    variants,
  };
}

/**
 * Safe animation wrapper for reduced motion
 */
export function withReducedMotion<T extends Record<string, any>>(
  animation: T,
  reducedMotion: boolean
): T | {} {
  return reducedMotion ? {} : animation;
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO SECTION SPECIFIC
// ═══════════════════════════════════════════════════════════════════════════

/**
 * HERO STAGGER - Controlled sequence for hero elements
 */
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * HERO TITLE - Main headline entrance
 */
export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: distances.normal,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.enter,
    },
  },
};

/**
 * HERO SUBTITLE - Secondary text entrance
 */
export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: distances.subtle,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.enter,
    },
  },
};

/**
 * HERO CTA - Call-to-action entrance
 */
export const heroCTA: Variants = {
  hidden: {
    opacity: 0,
    y: distances.subtle,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.enter,
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// EXPORT CONFIGURATION OBJECT
// ═══════════════════════════════════════════════════════════════════════════

export const motionConfig = {
  easings,
  durations,
  staggers,
  distances,
  viewportConfig,
};

export default motionConfig;
