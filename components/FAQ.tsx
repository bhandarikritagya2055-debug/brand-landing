"use client";

import { useState, useRef, useEffect } from "react";
import { useReveal } from "./useReveal";

const faqs = [
  { q: "Is it really free?", a: "Yes. A full plan, no cost." },
  { q: "How long is the call?", a: "About 1 hour." },
  { q: "Will I understand it?", a: "Yes. Easy words, nothing hard." },
  { q: "What happens after?", a: "You get your plan. It's yours to use." },
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
    <div className="border-b border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span
          className="font-cormorant font-light text-white group-hover:text-gold transition-colors duration-300 pr-8 leading-snug"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.375rem)" }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 text-gold font-light text-xl leading-none transition-transform duration-500 ${
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
          className="font-inter text-[#E8E8E8]/50 leading-[1.7] pb-7"
          style={{ fontSize: "0.9375rem" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="py-[8rem] md:py-[10rem] px-6 border-t border-white/[0.06]">
      <div className="mx-auto max-w-container">
        {/* Header row */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal flex flex-col md:flex-row md:items-start gap-12 md:gap-24 mb-16 md:mb-20"
        >
          <div className="md:w-[220px] shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
            <span className="font-inter text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              FAQ
            </span>
            <span
              className="font-cormorant text-[2.5rem] font-light text-gold/20 leading-none"
              aria-hidden
            >
              07
            </span>
          </div>
          <div className="flex-1">
            <h2
              className="font-cormorant font-light text-white leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Common questions
            </h2>
          </div>
        </div>

        {/* Accordion */}
        <div className="md:pl-[244px]">
          <div
            ref={listRef as React.RefObject<HTMLDivElement>}
            className="reveal max-w-[65ch] border-t border-white/[0.07]"
          >
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
