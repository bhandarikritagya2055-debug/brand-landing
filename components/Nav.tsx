"use client";

import { useEffect, useState } from "react";
import { socialLinks, SocialIconsRow } from "./SocialIcons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      // Mobile: in normal flow so [announcement bar][nav] stack as one clean
      // header unit, with the hero flowing naturally below — no overlap, no
      // magic-number offset. Desktop: fixed overlay exactly as before.
      className={`relative z-50 transition-all duration-500 border-b border-transparent backdrop-blur-md md:fixed md:top-0 md:left-0 md:right-0 ${
        scrolled || menuOpen ? "nav-scrolled" : ""
      }`}
    >
      {/* Announcement bar — sits above the nav row, both stacked inside the fixed header */}
      <div className="w-full bg-[#0A0A0A]">
        <div className="relative mx-auto max-w-container px-4 flex flex-col items-center justify-center gap-1 py-2 md:h-9 md:flex-row md:gap-0 md:py-0">
          <p className="font-inter text-cream text-center leading-tight tracking-[0.05em] text-[0.7rem] md:text-[0.8rem]">
            This month&apos;s slots are almost gone — Claim yours today
          </p>
          <a
            href="#s-cta"
            onClick={() => setMenuOpen(false)}
            className="font-inter text-gold whitespace-nowrap leading-tight tracking-[0.05em] text-[0.7rem] md:text-[0.8rem] hover:opacity-80 transition-opacity duration-200 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2"
          >
            Book now &rarr;
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-container px-4 sm:px-6 flex items-center h-16 gap-3 sm:gap-6">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Kritagya Bhandari"
          className="h-10 w-auto shrink-0"
        />

        {/* Social icons — desktop only, centered */}
        <SocialIconsRow className="hidden md:flex flex-1 justify-center" />

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto md:ml-0 shrink-0">
          {/* CTA button — compact on mobile */}
          <a
            href="#s-cta"
            className="btn-gold !px-3.5 !py-2 !text-[10px] sm:!px-5 sm:!py-2.5 sm:!text-[11px]"
            onClick={() => setMenuOpen(false)}
          >
            Get my free strategy
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-[5px] text-cream/80 hover:text-gold transition-colors"
          >
            <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — social links */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-white/[0.06] bg-[#0A0A0A]/95 ${
          menuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-3 text-cream/70 hover:text-gold transition-colors duration-200 border-b border-white/[0.04] last:border-0"
            >
              <Icon />
              <span className="font-inter text-sm tracking-wide">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
