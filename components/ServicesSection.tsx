"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

// services.png natural ratio: 830/1330 = 62.41%
// Show 96% height (trim tiny bottom gap). padding-top = 96% × 62.41% = 59.91%
// Overlay recalculated: original_pct × 62.41% / 59.91%
//   top  46% → 46 × 62.41/59.91 = 48%
//   bottom 5% → stays 5%
const PADDING_TOP = "59.91%";

const services = [
  { name: "Lead Generation",   desc: "Turn clicks into customers" },
  { name: "Landing Pages",     desc: "Built to convert" },
  { name: "SEO",               desc: "Get found on Google" },
  { name: "Content & Email",   desc: "Keep buyers coming back" },
  { name: "Meta & Facebook Ads", desc: "Get seen by the right people" },
];

export default function ServicesSection() {
  return (
    <motion.section
      id="s-services"
      className="relative scroll-mt-16"
      style={{
        backgroundImage: "url(/services.png)",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        paddingTop: PADDING_TOP,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 5 tilt cards over the rounded-rectangle outlines in the image */}
      <div
        className="absolute grid grid-cols-5"
        style={{ top: "48%", left: "4%", right: "4%", bottom: "5%", gap: "1.8%" }}
      >
        {services.map((s) => (
          <TiltCard key={s.name} className="w-full h-full" intensity={8}>
            <div className="group w-full h-full rounded-xl flex flex-col justify-end p-[6%] transition-all duration-300 hover:bg-gold/5 hover:ring-1 hover:ring-gold/40">
              <p
                className="font-inter font-semibold text-cream/90 leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontSize: "clamp(0.65rem, 1.1vw, 0.9rem)" }}
              >
                {s.name}
              </p>
              <p
                className="font-inter text-cream/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontSize: "clamp(0.55rem, 0.85vw, 0.72rem)" }}
              >
                {s.desc}
              </p>
            </div>
          </TiltCard>
        ))}
      </div>
    </motion.section>
  );
}
