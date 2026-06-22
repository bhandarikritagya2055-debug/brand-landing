"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const services = [
  { name: "Lead Generation",     desc: "Turn clicks into customers" },
  { name: "Landing Pages",       desc: "Built to convert" },
  { name: "SEO",                 desc: "Get found on Google" },
  { name: "Content & Email",     desc: "Keep buyers coming back" },
  { name: "Meta & Facebook Ads", desc: "Get seen by the right people" },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="s-services"
      className="scroll-mt-16 px-6 py-20 md:py-28"
      style={{ background: "#1A0608" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-container">
        <p className="font-inter uppercase tracking-[0.22em] text-[0.75rem] text-[#B0202F] mb-4">
          Services
        </p>
        <h2
          className="font-playfair font-normal text-cream leading-[1.05] mb-12"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          What I help with
        </h2>

        {/* 2-col mobile (5th centered) · 5-col desktop · compact cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <TiltCard
              key={s.name}
              intensity={8}
              className={`h-full ${
                i === 4 ? "col-span-2 w-1/2 mx-auto md:col-span-1 md:w-full md:mx-0" : ""
              }`}
            >
              <div className="group h-full rounded-xl border border-cream/20 bg-cream/[0.02] p-5 flex flex-col gap-1.5 transition-all duration-300 hover:border-gold/50 hover:bg-gold/[0.04] md:min-h-[150px]">
                <span
                  className="font-cormorant text-gold/40 leading-none mb-1"
                  style={{ fontSize: "1.5rem" }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-inter font-semibold text-cream leading-snug text-[0.95rem]">
                  {s.name}
                </h3>
                <p className="font-inter text-cream/55 leading-snug text-[0.8125rem]">
                  {s.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
