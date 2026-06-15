// ============================================
// FRAMER MOTION ANIMATION VARIANTS
// Reusable animation system for by.lebo
// ============================================

// --- Fade & Rise ---
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Slide ---
export const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Stagger Container ---
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// --- Scale ---
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Hover effects (for use with whileHover / whileTap) ---
export const hoverLift = {
  y: -6,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

export const hoverScale = {
  scale: 1.04,
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

export const tapScale = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

// --- Card hover ---
export const cardHover = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(48,113,247,0)' },
  hover: {
    y: -8,
    boxShadow: '0 24px 64px rgba(48,113,247,0.15)',
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Text character reveal ---
export const charReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Section reveal (scroll-triggered wrapper) ---
export const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Parallax motion config helper ---
// Usage: useTransform(scrollYProgress, [0, 1], [0, amount])
export const parallaxConfig = {
  slow: 0.3,
  medium: 0.5,
  fast: 0.8,
};

// --- Magnetic button (applies to initial/animate) ---
// Used programmatically in MagneticButton.jsx
export const magneticSpring = {
  type: 'spring',
  stiffness: 350,
  damping: 25,
  mass: 0.5,
};

// --- Line draw (for SVG paths) ---
export const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

// --- Shimmer (for loading / progress) ---
export const shimmer = {
  hidden: { x: '-100%' },
  visible: {
    x: '100%',
    transition: { duration: 1.2, repeat: Infinity, ease: 'linear' },
  },
};

// --- Combined page entrance (for layout-level) ---
export const pageEntrance = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};
