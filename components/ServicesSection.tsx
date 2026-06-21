"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const services = [
  { name: "Lead Generation", desc: "Turn clicks into customers" },
  { name: "Landing Pages",   desc: "Built to convert" },
  { name: "SEO",             desc: "Get found on Google" },
  { name: "Content & Email", desc: "Keep buyers coming back" },
  { name: "Meta & Facebook Ads", desc: "Get seen by the right people" },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="s-services"
      className="relative w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <img src="/services.png" alt="Services — What I help with" className="w-full block" />

      {/* 5 tilt cards over the card row in the image.
          Cards occupy: top 46% → 93%, left 4% → 96%.
          Fine-tune these values if needed. */}
      <div
        className="absolute grid grid-cols-5"
        style={{ top: "46%", left: "4%", right: "4%", bottom: "5%", gap: "1.8%" }}
      >
        {services.map((s) => (
          <TiltCard
            key={s.name}
            className="w-full h-full rounded-xl"
            intensity={8}
          >
            {/* Invisible by default — the image shows the card outlines.
                On hover, a faint gold highlight appears. */}
            <div className="w-full h-full rounded-xl transition-all duration-300 hover:bg-gold/5 hover:ring-1 hover:ring-gold/40 flex flex-col justify-end p-[6%]">
              <p className="font-inter font-semibold text-[clamp(0.55rem,1.1vw,0.85rem)] text-cream leading-snug opacity-0 group-hover:opacity-100 transition-opacity">
                {s.name}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </motion.section>
  );
}
