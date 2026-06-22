"use client";

import { motion } from "framer-motion";

// hero.png natural ratio: 816/1456 = 56.04%
// Shown at 100% height — no crop needed.
const PADDING_TOP = "56.04%";

export default function HeroSection() {
  return (
    <motion.section
      id="s-hero"
      // Mobile: offset below the fixed nav (~64px bar) so the face isn't
      // hidden behind it. Desktop unchanged (md:pt-0).
      className="scroll-mt-16 pt-[76px] md:pt-0"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative"
        style={{
          backgroundImage: "url(/hero.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          paddingTop: PADDING_TOP,
        }}
      >
        {/* Invisible clickable area over "GET MY FREE STRATEGY" button in image */}
        <a
          href="#s-cta"
          aria-label="Get my free strategy"
          className="absolute cursor-pointer"
          style={{ top: "83%", left: "44%", width: "37%", height: "10%" }}
        />
      </div>
    </motion.section>
  );
}
