"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is it really free?",    a: "Yes. A full plan, no cost." },
  { q: "How long is the call?", a: "About 1 hour." },
  { q: "Will I understand it?", a: "Yes. Easy words, nothing hard." },
  { q: "What happens after?",   a: "You get your plan. It's yours to use." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.style.maxHeight = open ? `${el.scrollHeight}px` : "0px";
  }, [open]);

  return (
    <div className="border-b border-[#0A0A0A]/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span
          className="font-playfair font-bold text-[#0A0A0A] group-hover:text-[#B0202F] transition-colors duration-300 pr-8 leading-snug"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 text-[#0A0A0A] text-2xl font-bold leading-none transition-transform duration-500 ${
            open ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: "0px" }}
      >
        <p
          className="font-inter text-[#0A0A0A]/70 leading-[1.7] pb-6"
          style={{ fontSize: "0.9375rem" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <motion.section
      id="s-faq"
      className="scroll-mt-16 py-24 md:py-32 px-6"
      style={{ background: "#2E0A12" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <p
            className="font-inter uppercase tracking-[0.22em] mb-5"
            style={{ fontSize: "0.75rem", color: "#B0202F" }}
          >
            FAQ
          </p>
          <h2
            className="font-playfair font-normal text-cream mb-12 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Quick answers
          </h2>
          {/* Bold black divider at top */}
          <div className="border-t-2 border-[#0A0A0A]/50">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
