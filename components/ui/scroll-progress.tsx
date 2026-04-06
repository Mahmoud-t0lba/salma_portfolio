"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.25,
  });

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[linear-gradient(90deg,rgba(49,92,128,0.12),rgba(49,92,128,0.96),rgba(25,52,80,0.58))]"
        style={{ scaleX }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3 origin-left bg-[linear-gradient(90deg,rgba(49,92,128,0.08),rgba(49,92,128,0.28),rgba(25,52,80,0.08))] blur-md"
        style={{ scaleX }}
      />
    </>
  );
}
