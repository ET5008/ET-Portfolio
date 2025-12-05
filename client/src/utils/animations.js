/**
 * Animation Utilities for Portfolio V2
 * Centralized animation configurations for Framer Motion
 */

// Version transition animation (used in VersionRouter)
export const versionTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.5, ease: 'easeInOut' }
};

// Fade in from below
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Fade in from above
export const fadeInDown = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Fade in from left
export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Fade in from right
export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

// Simple fade in
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

// Scale in animation
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

// Stagger children animation (for lists)
export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover lift effect
export const hoverLift = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.05, y: -5 },
  transition: { duration: 0.2, ease: 'easeOut' }
};

// Pulse animation (for status indicators)
export const pulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1]
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

// Page transition (for route changes)
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

// Modal animations
export const modalOverlay = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};

export const modalContent = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 },
  transition: { duration: 0.3, ease: 'easeOut' }
};

// Easing functions
export const easings = {
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  sharp: [0.4, 0, 0.6, 1],
  bounce: [0.68, -0.55, 0.265, 1.55]
};

// Duration presets (in seconds)
export const durations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  verySlow: 0.7
};

/**
 * Create a stagger animation with custom delay
 * @param {number} delay - Delay between each child (in seconds)
 * @returns {Object} Stagger animation configuration
 */
export function createStagger(delay = 0.1) {
  return {
    animate: {
      transition: {
        staggerChildren: delay
      }
    }
  };
}

/**
 * Create a delayed animation
 * @param {Object} animation - Base animation object
 * @param {number} delay - Delay in seconds
 * @returns {Object} Animation with delay
 */
export function withDelay(animation, delay) {
  return {
    ...animation,
    transition: {
      ...animation.transition,
      delay
    }
  };
}
