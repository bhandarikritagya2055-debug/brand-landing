"use client";

import { useReveal } from "./useReveal";

const reasons = [
  {
    title: "You'll always have me in your corner.",
    body: "I don't juggle a hundred clients. When we work together, it really feels like I'm part of your team — your wins are my wins.",
  },
  {
    title: "I'm here for sales, not show.",
    body: "Likes are nice, but I care about the stuff that actually grows your business — real leads, real customers.",
  },
  {
    title: "No confusing talk, promise.",
    body: "I'll explain everything in plain, simple words. You'll never feel lost or out of the loop.",
  },
  {
    title: "I know how business works here in Nepal.",
    body: "I get our market, our people, and what actually gets them to buy.",
  },
];

export default function WhyMe() {
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
              Why Me
            </span>
            <span
              className="font-cormorant text-[2.5rem] font-light text-gold/20 leading-none"
              aria-hidden
            >
              05
            </span>
          </div>
          <div className="flex-1">
            <h2
              className="font-cormorant font-light text-white leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              What sets this
              <br />
              partnership apart
            </h2>
          </div>
        </div>

        <div className="md:pl-[244px]">
          <div
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className="stagger grid sm:grid-cols-2 gap-x-10 gap-y-9"
          >
            {reasons.map((r) => (
              <div key={r.title}>
                <h3
                  className="font-cormorant font-light text-white mb-3 leading-[1.2]"
                  style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
                >
                  {r.title}
                </h3>
                <p className="font-inter text-[#E8E8E8]/50 leading-[1.7] text-[0.9rem]">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
