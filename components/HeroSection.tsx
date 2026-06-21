"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="s-hero"
      className="relative w-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src="/hero.png" alt="Kritagya Bhandari — AI Marketer" className="w-full block" />

      {/* Invisible button overlay — positioned over "GET MY FREE STRATEGY" in the image.
          Adjust top/left/width/height if the image renders at a different size. */}
      <a
        href="#s-cta"
        aria-label="Get my free strategy"
        className="absolute"
        style={{ top: "83%", left: "44%", width: "37%", height: "10%" }}
      />
    </motion.section>
  );
}
