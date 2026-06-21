"use client";

import { motion } from "framer-motion";

// about.png natural ratio: 932/1330 = 70.08%
// Show top 47% only — bottom 53% is blank cream. Crop it.
// Container padding-top = 47% × 70.08% = 32.94%
const PADDING_TOP = "32.94%";

export default function AboutSection() {
  return (
    <motion.section
      id="s-about"
      className="relative scroll-mt-16"
      style={{
        backgroundImage: "url(/about.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        paddingTop: PADDING_TOP,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
