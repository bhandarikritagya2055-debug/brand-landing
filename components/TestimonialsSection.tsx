"use client";

import { motion } from "framer-motion";

/* The image shows 3 cream cards — we use 3 testimonials */
const testimonials = [
  {
    quote: "I was just boosting posts before and getting nothing. Kritagya set up a proper system and now I actually get inquiries every week.",
    name: "Ayush Baral",
  },
  {
    quote: "Honestly I didn't expect much but the landing page he made got me 12 leads in the first 10 days. Worth it.",
    name: "Arun Ramtel",
  },
  {
    quote: "He doesn't just talk big. He showed me exactly where I was wasting money on ads and fixed it.",
    name: "Prabhakar Kafle",
  },
];

export default function TestimonialsSection() {
  return (
    <motion.section
      id="s-testimonials"
      className="relative w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src="/testimonials.png" alt="Testimonials — What clients say" className="w-full block" />

      {/* Text overlays inside the 3 cream cards in the image.
          Cards: top 52% → 95%, left 5% → 95%.
          Fine-tune if needed. */}
      <div
        className="absolute grid grid-cols-3"
        style={{ top: "52%", left: "5.5%", right: "5.5%", bottom: "5%", gap: "2%" }}
      >
        {testimonials.map((t) => (
          <div key={t.name} className="flex flex-col justify-between p-[5%]">
            <p
              className="font-inter leading-relaxed text-[#3D0C18]"
              style={{ fontSize: "clamp(0.6rem, 1.05vw, 0.875rem)" }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <p
              className="font-inter font-semibold text-[#7A1020] mt-auto pt-3"
              style={{ fontSize: "clamp(0.5rem, 0.85vw, 0.75rem)", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              — {t.name}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
