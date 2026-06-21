"use client";

import { motion } from "framer-motion";

// testimonials.png natural ratio: 784/1456 = 53.85%
// Show 92% height (trim small bottom gap). padding-top = 92% × 53.85% = 49.54%
// Overlay recalculated: original_pct × 53.85% / 49.54%
//   top  52% → 52 × 53.85/49.54 = 56.5% ≈ 57%
//   bottom 5% → stays 5%
const PADDING_TOP = "49.54%";

const testimonials = [
  {
    quote:
      "I was just boosting posts before and getting nothing. Kritagya set up a proper system and now I actually get inquiries every week.",
    name: "Ayush Baral",
  },
  {
    quote:
      "Honestly I didn't expect much but the landing page he made got me 12 leads in the first 10 days. Worth it.",
    name: "Arun Ramtel",
  },
  {
    quote:
      "He doesn't just talk big. He showed me exactly where I was wasting money on ads and fixed it.",
    name: "Prabhakar Kafle",
  },
];

export default function TestimonialsSection() {
  return (
    <motion.section
      id="s-testimonials"
      className="relative scroll-mt-16"
      style={{
        backgroundImage: "url(/testimonials.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        paddingTop: PADDING_TOP,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Text inside the 3 cream cards — dark maroon to read on cream background */}
      <div
        className="absolute grid grid-cols-3"
        style={{ top: "57%", left: "5.5%", right: "5.5%", bottom: "5%", gap: "2%" }}
      >
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col justify-between px-[6%] py-[4%]">
            <p
              className="font-inter text-[#3D0C18] leading-relaxed"
              style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <p
              className="font-inter font-semibold text-[#7A1020] mt-3"
              style={{
                fontSize: "clamp(0.6rem, 0.9vw, 0.78rem)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              — {t.name}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
