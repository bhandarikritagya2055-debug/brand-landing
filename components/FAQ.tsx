"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";

const faqs = [
  {
    q: "Is it really free?",
    a: "Yes. A full plan, no cost.",
  },
  {
    q: "How long is the call?",
    a: "About 1 hour.",
  },
  {
    q: "Will I understand it?",
    a: "Yes. Easy words, nothing hard.",
  },
  {
    q: "What happens after?",
    a: "You get your plan. It's yours to use.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group focus:outline-none"
        aria-expanded={open}
      >
        <span className="font-cormorant text-xl sm:text-2xl font-light text-white group-hover:text-[#C9A961] transition-colors duration-300 pr-6">
          {q}
        </span>
        <span
          className={`shrink-0 text-[#C9A961] text-xl font-light transition-transform duration-300 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          open ? "max-h-40 pb-7" : "max-h-0"
        }`}
      >
        <p className="font-inter text-sm text-white/50 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-16"
        >
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
            FAQ
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white">
            Common questions
          </h2>
        </div>

        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className="reveal max-w-2xl"
        >
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
