"use client";

import { motion } from "framer-motion";

// hero.png natural ratio: 816/1456 = 56.04% (used for the DESKTOP image only).
const PADDING_TOP = "56.04%";

export default function HeroSection() {
  return (
    <motion.section
      id="s-hero"
      // Desktop keeps md:pt-9 so the fixed announcement bar sits above the image.
      // Mobile needs no top offset — the header is in normal flow above it.
      className="scroll-mt-16 md:pt-9"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ───────── MOBILE hero — native text, properly sized (no tiny baked image) ───────── */}
      <div
        className="md:hidden relative overflow-hidden text-center px-6 pt-12 pb-14"
        style={{ background: "#1A0608" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 95% 55% at 50% 22%, rgba(201,169,97,0.13) 0%, transparent 70%)",
          }}
        />
        <div className="relative flex flex-col items-center">
          <p className="font-inter uppercase tracking-[0.28em] text-gold text-[0.7rem] mb-6">
            AI Marketer
          </p>
          <h1
            className="font-cormorant font-light text-cream leading-[1.04] mb-6"
            style={{ fontSize: "clamp(2.75rem, 12vw, 4rem)" }}
          >
            Kritagya
            <br />
            Bhandari
          </h1>
          <p className="font-inter text-cream/60 leading-relaxed text-[0.95rem] max-w-[34ch] mb-3">
            More leads, more sales — growth powered by AI and automation.
          </p>
          <p className="font-inter text-gold/80 uppercase tracking-[0.14em] text-[0.7rem] mb-9">
            Attract · Convert · Scale
          </p>
          <a href="#s-cta" className="btn-gold">
            Get my free strategy
          </a>
          <p className="mt-6 font-inter text-cream/55 text-[0.75rem]">
            Spots are filling. This month is almost full.
          </p>
        </div>
      </div>

      {/* ───────── DESKTOP hero — the full composite image (unchanged) ───────── */}
      <div
        className="hidden md:block relative"
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

        {/* Desktop urgency note — overlaid in the dark band below the button */}
        <p
          className="absolute left-0 right-0 bottom-[2.5%] px-4 text-center font-inter text-cream/85 leading-tight pointer-events-none"
          style={{ fontSize: "clamp(0.6rem, 1.7vw, 0.8rem)" }}
        >
          Spots are filling. This month is almost full.
        </p>
      </div>
    </motion.section>
  );
}
