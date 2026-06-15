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
  const gridRef = useReveal();

  return (
    <section className="py-28 md:py-36 px-6">
      <div className="mx-auto max-w-container">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className="reveal mb-16"
        >
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-[#C9A961] font-inter font-medium">
            Testimonials
          </p>
          <h2 className="font-cormorant font-light text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-white">
            What clients say
          </h2>
        </div>

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="reveal-group grid sm:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="border border-white/8 p-8 md:p-10 bg-white/[0.02] flex flex-col justify-between gap-8"
            >
              <blockquote className="font-inter text-base text-white/65 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-inter text-sm text-[#C9A961] tracking-wide">
                  {t.name}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
