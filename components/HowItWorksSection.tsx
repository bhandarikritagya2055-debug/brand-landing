"use client";

import { motion } from "framer-motion";

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
      className="relative w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src="/howitworks.png" alt="How it works — Three simple steps" className="w-full block" />

      {/* Step text overlays sit below the gold numbers (1 / 2 / 3) in the image.
          Numbers are at ~y 38-60%; text goes in the lower half.
          3 equal columns with thin gold dividers between them. */}
      <div
        className="absolute grid grid-cols-3"
        style={{ top: "60%", left: "0", right: "0", bottom: "3%" }}
      >
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="flex flex-col justify-start px-[7%] pt-[3%]"
          >
            <h3
              className="font-cormorant font-light text-cream leading-snug mb-2"
              style={{ fontSize: "clamp(0.7rem, 1.3vw, 1.1rem)" }}
            >
              {s.title}
            </h3>
            <p
              className="font-inter text-cream/55 leading-relaxed"
              style={{ fontSize: "clamp(0.5rem, 0.9vw, 0.75rem)" }}
            >
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
