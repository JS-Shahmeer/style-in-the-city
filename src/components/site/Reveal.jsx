"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Gentle fade-and-rise on scroll, disabled for visitors who prefer less motion. */
export default function Reveal({ children, delay = 0, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
