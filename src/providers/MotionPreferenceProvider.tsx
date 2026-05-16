'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const MotionPreferenceContext = createContext<boolean>(false);

/**
 * Singleton media query listener for prefers-reduced-motion.
 * Prevents N independent listeners (one per component) by lifting
 * the subscription to a single React context at the root.
 */
export function MotionPreferenceProvider({ children }: { children: ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <MotionPreferenceContext.Provider value={prefersReducedMotion}>
      {children}
    </MotionPreferenceContext.Provider>
  );
}

export function useReducedMotion(): boolean {
  return useContext(MotionPreferenceContext);
}
