"use client";

import { useReveal } from "./useReveal";

const services = [
  {
    name: "Lead Generation",
    desc: "Turn clicks into customers",
  },
  {
    name: "Landing Pages",
    desc: "Built to convert",
  },
  {
    name: "SEO",
    desc: "Get found on Google",
  },
  {
    name: "Content & Email",
    desc: "Keep buyers coming back",
  },
  {
    name: "Meta & Facebook Ads",
    desc: "Get seen by the right people",
  },
];

export default function Services() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-16"
        >
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
            Services
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white">
            What I can do
            <br />
            for your business
          </h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal-group divide-y divide-white/8"
        >
          {services.map((s) => (
            <div
              key={s.name}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-7 transition-colors duration-300 hover:bg-white/[0.015] px-1"
            >
              <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-white group-hover:text-[#C9A961] transition-colors duration-300">
                {s.name}
              </h3>
              <p className="font-inter text-sm text-white/40 sm:text-right">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
