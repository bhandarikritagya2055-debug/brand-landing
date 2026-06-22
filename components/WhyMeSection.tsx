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
      className="scroll-mt-16 px-6 py-20 md:py-28"
      style={{ background: "#0A0A0A" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-container">
        <p className="font-inter uppercase tracking-[0.22em] text-[0.75rem] text-gold mb-4">
          Why Me
        </p>
        <h2
          className="font-playfair font-normal text-cream leading-[1.05] mb-12"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          Why work with me
        </h2>

        {/* 1-col mobile · 2-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-lg border border-cream/15 p-6 md:p-8 flex flex-col"
            >
              {/* Diamond + line at top */}
              <div className="flex items-center gap-2 mb-5">
                <span className="block w-2 h-2 rotate-45 bg-[#B0202F]" aria-hidden />
                <span className="block w-6 h-px bg-[#B0202F]" aria-hidden />
              </div>
              {/* Title directly below */}
              <h3
                className="font-cormorant font-medium text-cream leading-snug mb-2"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
              >
                {r.title}
              </h3>
              {/* Description directly below */}
              <p
                className="font-inter text-cream/60 leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)" }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
