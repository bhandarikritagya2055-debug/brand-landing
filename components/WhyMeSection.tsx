"use client";

import { motion } from "framer-motion";

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
      className="relative w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src="/whyme.png" alt="Why work with me" className="w-full block" />

      {/* 2×2 grid over card outlines in the image.
          Grid: top 37% → 98%, left 5% → 96%.
          Row 1 / Row 2 split: the gap is at ~67%. Fine-tune if needed. */}
      <div
        className="absolute grid grid-cols-2"
        style={{ top: "37%", left: "5%", right: "4%", bottom: "2%", gap: "2%" }}
      >
        {reasons.map((r) => (
          <div key={r.title} className="flex flex-col justify-center p-[5%]">
            <h3
              className="font-cormorant font-light text-cream leading-snug mb-2"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.2rem)" }}
            >
              {r.title}
            </h3>
            <p
              className="font-inter text-cream/60 leading-relaxed"
              style={{ fontSize: "clamp(0.55rem, 0.95vw, 0.8rem)" }}
            >
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
