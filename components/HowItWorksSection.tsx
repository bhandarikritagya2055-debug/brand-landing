"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Book a call",
    body: "Pick a time and tell me a bit about your business.",
  },
  {
    num: "2",
    title: "We map out the plan",
    body: "I look at where you are now and where the real growth is hiding.",
  },
  {
    num: "3",
    title: "We get to work",
    body: "You get a clear plan, and a partner who'll help you make it happen.",
  },
];

export default function HowItWorksSection() {
  return (
    <motion.section
      id="s-howitworks"
      className="scroll-mt-16 px-6 py-20 md:py-28"
      style={{ background: "#0A0A0A" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-container">
        <p className="font-inter uppercase tracking-[0.22em] text-[0.75rem] text-gold mb-4">
          How It Works
        </p>
        <h2
          className="font-playfair font-normal text-cream leading-[1.05] mb-12"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          Three simple steps
        </h2>

        {/* 1-col mobile · 3-col desktop. Number sits ABOVE the text in normal
            flow — they can never overlap. Thin gold divider between columns. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex flex-col ${
                i > 0 ? "md:pl-10 md:border-l md:border-gold/20" : ""
              } ${i < steps.length - 1 ? "md:pr-10" : ""}`}
            >
              <span
                className="font-playfair font-normal text-gold leading-none mb-5"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
                aria-hidden
              >
                {s.num}
              </span>
              <h3
                className="font-cormorant font-medium text-cream leading-snug mb-2"
                style={{ fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}
              >
                {s.title}
              </h3>
              <p
                className="font-inter text-cream/60 leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
