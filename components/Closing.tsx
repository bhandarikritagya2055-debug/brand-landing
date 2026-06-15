"use client";

import { useReveal } from "./useReveal";
import GoldButton from "./GoldButton";

export default function Closing() {
  const ref = useReveal();

  return (
    <section className="py-28 md:py-40 px-6">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="reveal mx-auto max-w-container text-center"
      >
        {/* Decorative top line */}
        <div className="flex items-center gap-4 justify-center mb-14">
          <div className="h-px w-16 bg-[#C9A961]/30" />
          <div className="h-1 w-1 rounded-full bg-[#C9A961]" />
          <div className="h-px w-16 bg-[#C9A961]/30" />
        </div>

        <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
          Ready to Grow
        </p>

        <h2 className="font-cormorant font-light text-5xl sm:text-6xl md:text-7xl leading-[1.08] text-white mb-6">
          Ready to grow
          <br />
          your business?
        </h2>

        <p className="font-inter text-base sm:text-lg text-white/50 leading-relaxed max-w-md mx-auto mb-12">
          Let&apos;s make a plan that brings you more leads and sales.
        </p>

        <GoldButton label="Get my free strategy" />

        {/* Footer note */}
        <p className="mt-16 font-inter text-xs text-white/20 tracking-wider">
          &copy; {new Date().getFullYear()} Kritagya Bhandari. All rights reserved.
        </p>
      </div>
    </section>
  );
}
