"use client";

import { motion, useReducedMotion } from "motion/react";

type Direction = "up" | "left" | "right" | "scale";

const offsets: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  left: { x: 36 },
  right: { x: -36 },
  scale: { scale: 0.94 },
};

/**
 * Scroll-reveal wrapper. Sequences content into view as the user reaches a
 * section. Collapses to static under prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const from = offsets[direction];
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
