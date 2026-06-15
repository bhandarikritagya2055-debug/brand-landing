"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent backdrop-blur-md ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="mx-auto max-w-container px-6 flex items-center justify-between h-[64px]">
        <span className="font-cormorant text-[1.1rem] font-light tracking-wide text-white/90">
          Kritagya Bhandari
        </span>
        <a href="#get-strategy" className="btn-gold text-[11px] py-3 px-5">
          Get my free strategy
        </a>
      </div>
    </header>
  );
}
