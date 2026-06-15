"use client";

import { useEffect, useRef } from "react";

interface Props {
  videoUrl: string;
  whatsappUrl: string;
  calendlyUrl: string;
}

export default function ThanksClient({ videoUrl, whatsappUrl, calendlyUrl }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [heroRef.current, videoRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 150);
    });
  }, []);

  const fadeStyle = {
    opacity: 0,
    transform: "translateY(30px)",
    transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
  } as React.CSSProperties;

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 pt-28 pb-24">
      {/* Subtle glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(201,169,97,0.055) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center">

        {/* ── Hero text ── */}
        <div ref={heroRef} style={fadeStyle}>
          <p className="font-inter text-[0.75rem] uppercase tracking-[0.2em] text-gold mb-7">
            You&apos;re in
          </p>
          <h1
            className="font-cormorant font-light text-white leading-[1.05] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
          >
            Thank you — check
            <br />
            your inbox
          </h1>
          <p
            className="font-inter text-[#E8E8E8]/50 leading-[1.7] max-w-[52ch] mx-auto"
            style={{ fontSize: "1.0625rem" }}
          >
            I&apos;ll be in touch shortly with your personalized strategy.
            In the meantime, watch this quick video to see exactly how I work.
          </p>
        </div>

        {/* ── Video ── */}
        <div
          ref={videoRef}
          style={{ ...fadeStyle, transitionDelay: "0.15s" }}
          className="w-full mt-14"
        >
          <div
            className="relative w-full rounded-[6px] overflow-hidden"
            style={{
              paddingBottom: "56.25%", /* 16:9 */
              border: "1px solid rgba(201,169,97,0.35)",
            }}
          >
            <iframe
              src={videoUrl}
              title="Introduction video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>

        {/* ── CTAs ── */}
        <div
          ref={ctaRef}
          style={{ ...fadeStyle, transitionDelay: "0.3s" }}
          className="mt-14 flex flex-col items-center gap-6"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Message me on WhatsApp
          </a>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[0.8125rem] tracking-wide text-white/35 hover:text-gold transition-colors duration-300"
          >
            Or book a free call
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10 mt-24 w-full max-w-2xl mx-auto border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <a
          href="/"
          className="font-cormorant text-white/25 text-sm hover:text-white/50 transition-colors duration-300"
        >
          Kritagya Bhandari
        </a>
        <span className="font-inter text-white/15 text-xs">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </main>
  );
}
