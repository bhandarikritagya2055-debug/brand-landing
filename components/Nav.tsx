"use client";

import { useEffect, useState } from "react";

const INSTAGRAM_URL = "https://www.instagram.com/bhandari_kritagya";
const WHATSAPP_URL  = "https://wa.me/9779761673867";
const FACEBOOK_URL  = "https://www.facebook.com/share/1GWgnrDbLs/";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px]">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-[18px] h-[18px]">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialLinks = [
  { href: INSTAGRAM_URL, label: "Instagram", Icon: InstagramIcon },
  { href: WHATSAPP_URL,  label: "WhatsApp",  Icon: WhatsAppIcon  },
  { href: FACEBOOK_URL,  label: "Facebook",  Icon: FacebookIcon  },
];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent backdrop-blur-md ${
        scrolled || menuOpen ? "nav-scrolled" : ""
      }`}
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 flex items-center h-16 gap-3 sm:gap-6">
        {/* Name */}
        <span className="font-cormorant text-base sm:text-[1.1rem] font-light tracking-wide text-white/90 shrink-0 whitespace-nowrap">
          Kritagya Bhandari
        </span>

        {/* Social icons — desktop only, centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-5">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-cream/55 hover:text-gold hover:scale-110 transition-all duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>

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
