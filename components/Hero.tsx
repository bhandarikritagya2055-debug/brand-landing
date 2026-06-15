"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16"
    >
      {/* Radial glow behind headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 48%, rgba(201,169,97,0.07) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p
          className="mb-8 font-inter uppercase tracking-[0.2em] text-[0.75rem] text-gold"
          style={{ opacity: 0.9 }}
        >
          Free Business Strategy Session
        </p>

        <h1
          className="font-cormorant font-light text-white mb-8 leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
        >
          Get a free business
          <br />
          <span className="text-gold">growth strategy</span>
        </h1>

        <p
          className="font-inter text-white/55 leading-[1.7] max-w-[52ch] mx-auto mb-14"
          style={{ fontSize: "1.125rem" }}
        >
          A personalized plan to bring you more leads, more sales, and steady
          revenue — built around your business.
        </p>

        <a href="#get-strategy" className="btn-gold">
          Get my free strategy
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ opacity: 0.25 }}
      >
        <span className="font-inter text-[10px] tracking-[0.3em] uppercase text-white">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
