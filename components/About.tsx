"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="reveal py-28 md:py-36 px-6"
    >
      <div className="mx-auto max-w-container">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
            About Me
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white mb-8">
            Hi, I&apos;m Kritagya Bhandari.
          </h2>
          <p className="font-inter text-base sm:text-lg text-white/55 leading-relaxed">
            I help businesses get more leads, close more sales, and turn online
            attention into real growth. No guesswork, no fluff — just a clear
            plan that works.
          </p>
        </div>
      </div>
    </section>
  );
}
