"use client";

import { useReveal } from "./useReveal";
import LeadForm from "./LeadForm";

export default function Closing() {
  const ref = useReveal();

  return (
    <section
      id="get-strategy"
      className="py-[8rem] md:py-[10rem] px-6 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="reveal text-center max-w-lg mx-auto"
        >
          <p className="font-inter text-[0.75rem] uppercase tracking-[0.2em] text-gold mb-8">
            Get started
          </p>

          <h2
            className="font-cormorant font-light text-white leading-[1.05] tracking-[-0.02em] mb-5"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}
          >
            Ready to grow
            <br />
            your business?
          </h2>

          <p
            className="font-inter text-[#E8E8E8]/45 leading-[1.7] mb-14"
            style={{ fontSize: "1.0625rem" }}
          >
            Enter your details and I&apos;ll send you a personalized plan —
            more leads, more sales, no guesswork.
          </p>

          <LeadForm />
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-white/30 text-sm">
            Kritagya Bhandari
          </span>
          <span className="font-inter text-white/20 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
