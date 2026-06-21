"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "Is it really free?",      a: "Yes. A full plan, no cost." },
  { q: "How long is the call?",   a: "About 1 hour." },
  { q: "Will I understand it?",   a: "Yes. Easy words, nothing hard." },
  { q: "What happens after?",     a: "You get your plan. It's yours to use." },
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
    <div className="border-b border-[#B0202F]/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span
          className="font-playfair font-normal text-cream group-hover:text-[#C9A961] transition-colors duration-300 pr-8 leading-snug"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 text-[#B0202F] text-2xl font-light leading-none transition-transform duration-500 ${
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
        <p className="font-inter text-cream/60 leading-[1.7] text-[0.9375rem] pb-6">
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
      className="py-24 md:py-32 px-6"
      style={{ background: "#2E0A12" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <p
            className="font-inter uppercase tracking-[0.22em] mb-6"
            style={{ fontSize: "0.75rem", color: "#B0202F" }}
          >
            FAQ
          </p>
          <h2
            className="font-playfair font-normal text-cream mb-14 leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Quick answers
          </h2>
          <div className="border-t border-[#B0202F]/30">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
