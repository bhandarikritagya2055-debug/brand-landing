"use client";

interface GoldButtonProps {
  label: string;
  className?: string;
}

export default function GoldButton({ label, className = "" }: GoldButtonProps) {
  return (
    <button
      className={`
        inline-block px-10 py-4 text-sm tracking-widest uppercase font-inter font-medium
        border border-[#C9A961] text-[#C9A961]
        transition-all duration-300 ease-out
        hover:bg-[#C9A961] hover:text-[#0A0A0A]
        hover:shadow-[0_0_28px_rgba(201,169,97,0.35)]
        hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]
        ${className}
      `}
    >
      {label}
    </button>
  );
}
