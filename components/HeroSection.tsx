"use client";

import { motion } from "framer-motion";

// hero.png natural ratio: 816/1456 = 56.04%
// Shown at 100% height — no crop needed.
const PADDING_TOP = "56.04%";

export default function HeroSection() {
  return (
    <motion.section
      id="s-hero"
      // Mobile: header is in normal flow above this section, so the hero needs
      // no top offset and the face is never hidden. Small bottom padding gives
      // the in-flow urgency note room before the next section.
      // Desktop: shift down by the 36px bar height (md:pt-9) so the fixed nav
      // overlaps the hero exactly as before.
      className="scroll-mt-16 pt-0 pb-3 md:pt-9 md:pb-0"
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

        {/* Desktop urgency note — overlaid in the dark band below the button */}
        <p
          className="hidden md:block absolute left-0 right-0 bottom-[2.5%] px-4 text-center font-inter text-cream/85 leading-tight pointer-events-none"
          style={{ fontSize: "clamp(0.6rem, 1.7vw, 0.8rem)" }}
        >
          Spots are filling. This month is almost full.
        </p>
      </div>

      {/* Mobile urgency note — in normal flow directly below the image (and so
          below the GET MY FREE STRATEGY button), fully inside the hero section */}
      <p className="md:hidden mt-2 px-4 text-center font-inter text-cream/85 text-[0.75rem] leading-tight">
        Spots are filling. This month is almost full.
      </p>
    </motion.section>
  );
}
