/**
 * Enterprise Motion Design System
 * Industrial-grade animation constants for precision and consistency
 */

// EASING CURVES - Mechanical, Engineered Feel
export const easings = {
  // Primary easing for most transitions - smooth and controlled
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  // For entrances - slightly more emphasis
  enter: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  // For exits - quick and clean
  exit: [0.4, 0, 1, 1] as [number, number, number, number],
  // For mechanical precision
  mechanical: [0.45, 0.05, 0.55, 0.95] as [number, number, number, number],
  // Sharp and industrial
  sharp: [0.4, 0, 0.6, 1] as [number, number, number, number],
};

// TIMING - Consistent durations across the website
export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  verySlow: 1.0,
};

// STAGGER DELAYS - For sequential animations
export const staggers = {
  tight: 0.05,
  normal: 0.1,
  relaxed: 0.15,
  loose: 0.2,
};

// DISTANCES - Movement amounts in pixels
export const distances = {
  subtle: 10,
  normal: 20,
  prominent: 30,
};

// SECTION REVEAL ANIMATION - Used across all sections
export const sectionReveal = {
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

// FADE IN - Simple opacity fade
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

// CARD HOVER - Elevation with shadow
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: {
    duration: durations.fast,
    ease: easings.mechanical,
  },
};

// ICON SCALE - Subtle icon animation
export const iconScale = {
  scale: 1.05,
  transition: {
    duration: durations.fast,
    ease: easings.sharp,
  },
};

// BUTTON HOVER - Micro-interaction
export const buttonHover = {
  scale: 1.02,
  y: -1,
  transition: {
    duration: durations.fast,
    ease: easings.mechanical,
  },
};

// BUTTON PRESS - Tactile feedback
export const buttonPress = {
  scale: 0.98,
  y: 1,
  transition: {
    duration: 0.15,
    ease: easings.sharp,
  },
};

// CONTAINER STAGGER - For staggered children
export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggers.normal,
      delayChildren: 0.1,
    },
  },
};

// ITEM VARIANTS - Individual items in staggered container
export const itemVariants = {
  hidden: {
    opacity: 0,
    y: distances.normal,
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

// SLIDE IN FROM LEFT
export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -distances.prominent,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.enter,
    },
  },
};

// SLIDE IN FROM RIGHT
export const slideInRight = {
  hidden: {
    opacity: 0,
    x: distances.prominent,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.enter,
    },
  },
};

// PROGRESSIVE STAGGER - Icon → Title → Description
export const progressiveStagger = {
  icon: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: durations.fast,
        ease: easings.mechanical,
      },
    },
  },
  title: {
    hidden: { opacity: 0, y: distances.subtle },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.normal,
        ease: easings.enter,
        delay: 0.1,
      },
    },
  },
  description: {
    hidden: { opacity: 0, y: distances.subtle },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: durations.normal,
        ease: easings.enter,
        delay: 0.2,
      },
    },
  },
};

// ACCORDION EXPANSION
export const accordionVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

// INPUT FOCUS - Form field animation
export const inputFocus = {
  scale: 1.005,
  transition: {
    duration: durations.fast,
    ease: easings.smooth,
  },
};

// GLOW PULSE - Subtle glow effect
export const glowPulse = {
  boxShadow: [
    '0 0 0px rgba(37, 99, 235, 0)',
    '0 0 20px rgba(37, 99, 235, 0.3)',
    '0 0 0px rgba(37, 99, 235, 0)',
  ],
  transition: {
    duration: 2,
    ease: easings.smooth,
    repeat: Infinity,
  },
};
