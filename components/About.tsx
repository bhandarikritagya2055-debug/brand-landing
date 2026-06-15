"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="py-20 md:py-24 px-6 border-t border-white/[0.06]">
      <div className="mx-auto max-w-container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal flex flex-col md:flex-row md:items-start gap-10 md:gap-24"
        >
          <div className="md:w-[220px] shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
            <span className="font-inter text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              About
            </span>
            <span
              className="font-cormorant text-[2.5rem] font-light text-gold/20 leading-none"
              aria-hidden
            >
              01
            </span>
          </div>

          <div className="flex-1">
            <h2
              className="font-cormorant font-light text-white mb-5 leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Hi, I&apos;m Kritagya Bhandari.
            </h2>
            <p
              className="font-inter text-[#E8E8E8]/60 leading-[1.7] max-w-[60ch]"
              style={{ fontSize: "1.125rem" }}
            >
              I&apos;m an AI marketer. I use AI tools and systems to help
              businesses get more leads and close more sales — faster and
              cheaper than old-school marketing. No guesswork, no fluff, just a
              clear plan that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
