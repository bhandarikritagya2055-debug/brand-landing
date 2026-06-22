"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="s-about"
      className="scroll-mt-16 px-6 py-20 md:py-28"
      style={{ background: "#EFE3D6" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-container">
        <p className="font-inter uppercase tracking-[0.22em] text-[0.75rem] text-[#B0202F] mb-4">
          About
        </p>
        <h2
          className="font-playfair font-bold text-[#2E0A12] leading-[0.95] mb-5"
          style={{ fontSize: "clamp(2.75rem, 9vw, 6rem)" }}
        >
          ABOUT
        </h2>
        <p
          className="font-inter font-medium text-[#2E0A12] mb-6"
          style={{ fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)" }}
        >
          Not just marketing. AI-powered growth.
        </p>
        <div className="w-16 h-px bg-[#B0202F] mb-8" />
        <p
          className="font-inter text-[#2E0A12]/70 leading-[1.7] max-w-[58ch]"
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.0625rem)" }}
        >
          I&apos;m Kritagya Bhandari, an AI marketer. I use AI tools and systems
          to help businesses get more leads and close more sales — faster and
          cheaper than old-school marketing. No guesswork, no fluff, just a clear
          plan that works.
        </p>
      </div>
    </motion.section>
  );
}
