"use client";

import { useReveal } from "./useReveal";

const testimonials = [
  {
    quote:
      "I was just boosting posts before and getting nothing. Kritagya set up a proper system and now I actually get inquiries every week.",
    name: "Ayush Baral",
  },
  {
    quote:
      "Honestly I didn't expect much but the landing page he made got me 12 leads in the first 10 days. Worth it.",
    name: "Arun Ramtel",
  },
  {
    quote:
      "He doesn't just talk big. He showed me exactly where I was wasting money on ads and fixed it.",
    name: "Prabhakar Kafle",
  },
  {
    quote:
      "Easy to work with and explains everything in simple words. My sales are better than last year.",
    name: "Chetan Pun",
  },
];

export default function Testimonials() {
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
              Testimonials
            </span>
            <span
              className="font-cormorant text-[2.5rem] font-light text-gold/20 leading-none"
              aria-hidden
            >
              04
            </span>
          </div>
          <div className="flex-1">
            <h2
              className="font-cormorant font-light text-white leading-[1.1] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              What clients say
            </h2>
          </div>
        </div>

        <div className="md:pl-[244px]">
          <div
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className="stagger grid sm:grid-cols-2 gap-x-10 gap-y-10"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="border-t border-gold/35 pt-7 flex flex-col justify-between gap-6"
              >
                <blockquote className="font-inter text-[#E8E8E8]/60 leading-[1.7] text-[0.9375rem]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="font-inter text-[0.75rem] tracking-[0.14em] uppercase text-gold">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
