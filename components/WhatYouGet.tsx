"use client";

import { useReveal } from "./useReveal";

const items = [
  "Why you're not getting enough leads",
  "A simple plan to fix it",
  "Where to spend (and where not to)",
  "One step to start today",
];

export default function WhatYouGet() {
  const headRef = useReveal();
  const listRef = useReveal("stagger");

  return (
    <section className="py-20 md:py-24 px-6 border-t border-white/[0.06]">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal flex flex-col md:flex-row md:items-start gap-10 md:gap-24 mb-12"
        >
          <div className="md:w-[220px] shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
            <span className="font-inter text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              The Free Strategy
            </span>
            <span
              className="font-cormorant text-[2.5rem] font-light text-gold/20 leading-none"
              aria-hidden
            >
              02
            </span>
          </div>
          <div className="flex-1">
            <h2
              className="font-cormorant font-light text-white leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              What&apos;s inside your
              <br />
              free strategy
            </h2>
          </div>
        </div>

        <div className="md:pl-[244px]">
          <ul
            ref={listRef as React.RefObject<HTMLUListElement>}
            className="stagger grid sm:grid-cols-2 gap-4"
          >
            {items.map((item, i) => (
              <li
                key={i}
                className="border border-white/[0.07] px-7 py-6 flex gap-5 items-start hover:border-gold/30 transition-colors duration-500"
              >
                <span
                  className="font-cormorant text-[1.5rem] font-light text-gold/35 shrink-0 leading-none mt-0.5"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-inter text-[#E8E8E8]/65 leading-[1.7] text-[0.9375rem]">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
