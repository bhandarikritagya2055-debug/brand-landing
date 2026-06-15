"use client";

import { useReveal } from "./useReveal";

const steps = [
  {
    num: "01",
    title: "Book a call",
    body: "Pick a time and tell me a bit about your business.",
  },
  {
    num: "02",
    title: "We map out the plan",
    body: "I look at where you are now and where the real growth is hiding.",
  },
  {
    num: "03",
    title: "We get to work",
    body: "You get a clear plan, and a partner who'll help you make it happen.",
  },
];

export default function HowItWorks() {
  const headRef = useReveal();
  const stepsRef = useReveal();

  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-16"
        >
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
            How It Works
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white">
            Three steps to
            <br />
            your growth plan
          </h2>
        </div>

        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          className="reveal-group grid md:grid-cols-3 gap-8"
        >
          {steps.map((s) => (
            <div key={s.num} className="relative pl-0">
              <div className="mb-6">
                <span className="font-cormorant text-6xl font-light text-[#C9A961] opacity-40">
                  {s.num}
                </span>
              </div>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-white mb-3">
                {s.title}
              </h3>
              <p className="font-inter text-sm text-white/50 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
