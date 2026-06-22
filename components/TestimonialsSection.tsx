"use client";

import { motion } from "framer-motion";

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
      className="scroll-mt-16 px-6 py-20 md:py-28"
      style={{ background: "#1A0608" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-container">
        <p className="font-inter uppercase tracking-[0.22em] text-[0.75rem] text-[#B0202F] mb-4">
          Results
        </p>
        <h2
          className="font-playfair font-bold text-cream leading-[1.02] mb-12"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          What clients say
        </h2>

        {/* 1-col mobile · 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between gap-6 rounded-lg bg-cream border-t-[3px] border-[#B0202F] p-6 md:p-7"
            >
              <blockquote
                className="font-inter text-[#3D0C18] leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.0625rem)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="font-inter font-semibold text-[#7A1020] uppercase tracking-[0.1em] text-[0.75rem]">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
