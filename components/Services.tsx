"use client";

import { useReveal } from "./useReveal";

const services = [
  { name: "Lead Generation", desc: "Turn clicks into customers" },
  { name: "Landing Pages", desc: "Built to convert" },
  { name: "SEO", desc: "Get found on Google" },
  { name: "Content & Email", desc: "Keep buyers coming back" },
  { name: "Meta & Facebook Ads", desc: "Get seen by the right people" },
];

export default function Services() {
  const headRef = useReveal();
  const listRef = useReveal("stagger");

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
              Services
            </span>
            <span
              className="font-cormorant text-[2.5rem] font-light text-gold/20 leading-none"
              aria-hidden
            >
              03
            </span>
          </div>
          <div className="flex-1">
            <h2
              className="font-cormorant font-light text-white leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              What I can do
              <br />
              for your business
            </h2>
          </div>
        </div>

        {/* Service list */}
        <div className="md:pl-[244px]">
          <div
            ref={listRef as React.RefObject<HTMLDivElement>}
            className="stagger"
          >
            {services.map((s) => (
              <div
                key={s.name}
                className="service-item group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-7 border-b border-white/[0.07] cursor-default"
              >
                <h3
                  className="font-cormorant font-light text-white group-hover:text-gold transition-colors duration-300"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-inter text-white/35 sm:text-right"
                  style={{ fontSize: "0.875rem" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
