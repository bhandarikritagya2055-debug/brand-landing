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
  const gridRef = useReveal();

  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-16"
        >
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
            Why Me
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white">
            What sets this
            <br />
            partnership apart
          </h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal-group grid sm:grid-cols-2 gap-px bg-white/8"
        >
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-[#0A0A0A] p-8 md:p-10"
            >
              <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-white mb-4 leading-snug">
                {r.title}
              </h3>
              <p className="font-inter text-sm text-white/50 leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
