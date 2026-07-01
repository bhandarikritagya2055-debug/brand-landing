"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I used to just boost random posts, no results. Kritagya fixed that — inquiries come in every week now.",
    name: "Ayush Baral",
  },
  {
    quote:
      "Wasn't sure it'd work. But results came fast — leads started coming in almost immediately.",
    name: "Arun Ramtel",
  },
  {
    quote:
      "No big promises. Just showed me where I was losing money and fixed it.",
    name: "Prabhakar Kafle",
  },
];

export default function TestimonialsSection() {
  return (
    <motion.section
      id="s-testimonials"
      className="scroll-mt-16 px-6 py-12 md:py-28"
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
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
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
