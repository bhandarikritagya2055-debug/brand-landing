"use client";

import GoldButton from "./GoldButton";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,169,97,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="mb-6 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
          Free Business Strategy Session
        </p>

        <h1 className="font-cormorant font-light text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.08] tracking-tight text-white mb-8">
          Get a free business
          <br />
          <span className="text-[#C9A961]">growth strategy</span>
        </h1>

        <p className="font-inter text-base sm:text-lg text-white/55 leading-relaxed max-w-xl mx-auto mb-12">
          A personalized plan to bring you more leads, more sales, and steady
          revenue — built around your business.
        </p>

        <GoldButton label="Get my free strategy" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
