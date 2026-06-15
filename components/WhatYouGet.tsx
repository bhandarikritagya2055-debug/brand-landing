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
  const listRef = useReveal();

  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-16"
        >
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
            The Free Strategy
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white">
            What&apos;s inside your
            <br />
            free strategy
          </h2>
        </div>

        <ul
          ref={listRef as React.RefObject<HTMLUListElement>}
          className="reveal-group grid sm:grid-cols-2 gap-6"
        >
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-5 border border-white/8 p-8 bg-white/[0.02]"
            >
              <span className="mt-1 font-cormorant text-2xl text-[#C9A961] font-light shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-inter text-base text-white/75 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
