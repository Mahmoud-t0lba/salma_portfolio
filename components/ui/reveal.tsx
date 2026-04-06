"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "bottom" | "left" | "right" | "scale";
  amount?: number;
  blur?: number;
};

const directions = {
  bottom: { x: 0, y: 28, scale: 0.978 },
  left: { x: -34, y: 0, scale: 0.982 },
  right: { x: 34, y: 0, scale: 0.982 },
  scale: { x: 0, y: 0, scale: 0.94 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  from = "bottom",
  amount = 0.14,
  blur = 12,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const direction = directions[from];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction.x,
        y: direction.y,
        scale: direction.scale,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{
        delay,
        x: { type: "spring", stiffness: 120, damping: 20, mass: 0.75 },
        y: { type: "spring", stiffness: 120, damping: 20, mass: 0.75 },
        scale: { type: "spring", stiffness: 140, damping: 18, mass: 0.72 },
        opacity: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
        filter: { duration: 0.64, ease: [0.22, 1, 0.36, 1] },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
