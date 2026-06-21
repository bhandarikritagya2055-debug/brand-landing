"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "s-hero",         label: "Hero" },
  { id: "s-about",        label: "About" },
  { id: "s-services",     label: "Services" },
  { id: "s-testimonials", label: "Testimonials" },
  { id: "s-whyme",        label: "Why Me" },
  { id: "s-howitworks",   label: "How It Works" },
  { id: "s-faq",          label: "FAQ" },
  { id: "s-cta",          label: "Get Started" },
];

export default function ScrollDots() {
  const [active, setActive] = useState("s-hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex"
    >
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={label}
          className="group flex items-center justify-end gap-2 focus:outline-none"
        >
          <span
            className="font-inter text-[10px] text-white/40 group-hover:text-gold transition-all duration-300 opacity-0 group-hover:opacity-100 tracking-wider uppercase"
          >
            {label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "w-2 h-2 bg-gold"
                : "w-1.5 h-1.5 bg-white/25 group-hover:bg-white/60"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
