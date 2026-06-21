"use client";

import { motion } from "framer-motion";

// howitworks.png natural ratio: 768/1330 = 57.74%
// Show 90% height (trim empty bottom ~10%). padding-top = 90% × 57.74% = 51.97%
// Overlay recalculated: original_pct × 57.74% / 51.97%
//   top  60% → 60 × 57.74/51.97 = 66.7% ≈ 67%
//   bottom 3% → stays 3%
const PADDING_TOP = "51.97%";

const steps = [
  {
    title: "Book a call",
    body: "Pick a time and tell me a bit about your business.",
  },
  {
    title: "We map out the plan",
    body: "I look at where you are now and where the real growth is hiding.",
  },
  {
    title: "We get to work",
    body: "You get a clear plan, and a partner who'll help you make it happen.",
  },
];

export default function HowItWorksSection() {
  return (
    <motion.section
      id="s-howitworks"
      className="relative scroll-mt-16"
      style={{
        backgroundImage: "url(/howitworks.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        paddingTop: PADDING_TOP,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Step text beneath the gold numbers 1 / 2 / 3 in the image */}
      <div
        className="absolute grid grid-cols-3"
        style={{ top: "67%", left: "0", right: "0", bottom: "3%" }}
      >
        {steps.map((s) => (
          <div key={s.title} className="flex flex-col justify-start px-[7%] pt-[2%]">
            <h3
              className="font-cormorant font-light text-cream leading-snug mb-2"
              style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.25rem)" }}
            >
              {s.title}
            </h3>
            <p
              className="font-inter text-cream/60 leading-relaxed"
              style={{ fontSize: "clamp(0.65rem, 1vw, 0.85rem)" }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
