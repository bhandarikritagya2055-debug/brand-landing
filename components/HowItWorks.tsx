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
  const stepsRef = useReveal("stagger");

  return (
    <section className="py-20 md:py-24 px-6 border-t border-white/[0.06]">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal flex flex-col md:flex-row md:items-start gap-10 md:gap-24 mb-12"
        >
          <div className="md:w-[220px] shrink-0 flex md:flex-col items-center md:items-start gap-4 md:gap-3">
            <span className="font-inter text-[0.75rem] uppercase tracking-[0.2em] text-gold">
              How It Works
            </span>
            <span
              className="font-cormorant text-[2.5rem] font-light text-gold/20 leading-none"
              aria-hidden
            >
              06
            </span>
          </div>
          <div className="flex-1">
            <h2
              className="font-cormorant font-light text-white leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Three steps to
              <br />
              your growth plan
            </h2>
          </div>
        </div>

        <div className="md:pl-[244px]">
          <div
            ref={stepsRef as React.RefObject<HTMLDivElement>}
            className="stagger grid sm:grid-cols-3 gap-8"
          >
            {steps.map((s) => (
              <div key={s.num}>
                <span
                  className="block font-cormorant font-light text-gold/25 leading-none mb-5"
                  style={{ fontSize: "3rem" }}
                  aria-hidden
                >
                  {s.num}
                </span>
                <h3
                  className="font-cormorant font-light text-white mb-2 leading-snug"
                  style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
                >
                  {s.title}
                </h3>
                <p className="font-inter text-[#E8E8E8]/50 leading-[1.7] text-[0.9rem]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
