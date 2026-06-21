"use client";

import { motion } from "framer-motion";

// whyme.png natural ratio: 768/1330 = 57.74%
// Show 97% height. padding-top = 97% × 57.74% = 56.01%
// Overlay recalculated: original_pct × 57.74% / 56.01%
//   top  37% → 37 × 57.74/56.01 = 38.1% ≈ 38%
//   bottom 2% → stays ~2%
const PADDING_TOP = "56.01%";

const reasons = [
  {
    title: "You'll always have me in your corner.",
    body: "I don't juggle a hundred clients. When we work together, it feels like I'm part of your team — your wins are my wins.",
  },
  {
    title: "I'm here for sales, not show.",
    body: "Likes are nice, but I care about what actually grows your business — real leads, real customers.",
  },
  {
    title: "No confusing talk, promise.",
    body: "I'll explain everything in plain, simple words. You'll never feel lost or out of the loop.",
  },
  {
    title: "I know how business works here in Nepal.",
    body: "I get our market, our people, and what actually gets them to buy.",
  },
];

export default function WhyMeSection() {
  return (
    <motion.section
      id="s-whyme"
      className="relative scroll-mt-16"
      style={{
        backgroundImage: "url(/whyme.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        paddingTop: PADDING_TOP,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 2×2 grid over the card outlines in the image */}
      <div
        className="absolute grid grid-cols-2"
        style={{ top: "38%", left: "5%", right: "4%", bottom: "2%", gap: "2%" }}
      >
        {reasons.map((r) => (
          <div key={r.title} className="flex flex-col justify-center px-[6%] py-[4%]">
            <h3
              className="font-cormorant font-light text-cream leading-snug mb-2"
              style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.35rem)" }}
            >
              {r.title}
            </h3>
            <p
              className="font-inter text-cream/65 leading-relaxed"
              style={{ fontSize: "clamp(0.7rem, 1.05vw, 0.875rem)" }}
            >
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
