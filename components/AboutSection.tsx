"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  // The cream background lives on this STATIC section so it is always painted.
  // Previously the whole section was a motion element starting at opacity:0 —
  // when the scroll-reveal hadn't fired (unreliable on mobile with the old
  // negative viewport margin) the section was transparent and the dark <body>
  // showed through, making the light About look dark on mobile only. Only the
  // inner content now fades in, with a reliable amount-based trigger.
  return (
    <section
      id="s-about"
      className="scroll-mt-16 px-6 py-12 md:py-28"
      style={{ background: "#EFE3D6" }}
    >
      <motion.div
        className="mx-auto max-w-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-inter uppercase tracking-[0.22em] text-[0.75rem] text-[#B0202F] mb-4">
          About
        </p>
        <h2 className="font-playfair font-bold text-[#2E0A12] leading-[0.95] mb-5 text-4xl sm:text-6xl md:text-7xl lg:text-[6rem]">
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
      </motion.div>
    </section>
  );
}
