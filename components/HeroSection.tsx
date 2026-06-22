"use client";

import { motion } from "framer-motion";

// hero.png natural ratio: 816/1456 = 56.04%
// Shown at 100% height — no crop needed.
const PADDING_TOP = "56.04%";

export default function HeroSection() {
  return (
    <motion.section
      id="s-hero"
      // Mobile: clear the full fixed header (announcement bar + nav) so the
      // face isn't hidden. Desktop: shift down by the 36px bar height (md:pt-9)
      // so the nav still overlaps the hero exactly as before, with the red bar
      // filling the space directly above the image.
      className="scroll-mt-16 pt-[128px] md:pt-9"
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

        {/* Urgency note — anchored to the bottom of the image so it can never
            overflow into the next section. Sits in the dark band below the button. */}
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
