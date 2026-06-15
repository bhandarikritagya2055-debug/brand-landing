"use client";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="mx-auto max-w-container px-6 flex items-center justify-between h-16">
        <span className="font-cormorant text-xl font-medium tracking-wide text-white">
          Kritagya<span className="text-[#C9A961]">.</span>
        </span>
        <a
          href="#hero"
          className="text-xs tracking-widest uppercase text-white/40 hover:text-[#C9A961] transition-colors duration-300"
        >
          Get Free Strategy
        </a>
      </div>
    </header>
  );
}
