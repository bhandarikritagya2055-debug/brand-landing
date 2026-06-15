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
  const gridRef = useReveal("stagger");

  return (
    <section className="py-20 md:py-24 px-6 border-t border-white/[0.06]">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal flex flex-col md:flex-row md:items-start gap-10 md:gap-24 mb-12"
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

        <div className="md:pl-[244px]">
          <div
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className="stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((s) => (
              <div
                key={s.name}
                className="service-item group border border-white/[0.07] px-6 py-6 hover:border-gold/30 transition-colors duration-500 cursor-default"
              >
                <h3
                  className="font-cormorant font-light text-white mb-2 group-hover:text-gold transition-colors duration-300 leading-snug"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}
                >
                  {s.name}
                </h3>
                <p className="font-inter text-white/35 text-[0.8125rem]">
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
