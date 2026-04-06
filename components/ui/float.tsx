"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
};

export function Float({
  children,
  className,
  delay = 0,
  duration = 7.2,
  distance = 12,
}: FloatProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className}>
      <motion.div
        animate={{
          y: [0, -distance, 0],
          rotate: [0, 0.75, 0, -0.45, 0],
          scale: [1, 1.008, 1],
        }}
        transition={{
          duration,
          ease: [0.42, 0, 0.18, 1],
          repeat: Number.POSITIVE_INFINITY,
          delay,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
