"use client";

import { motion } from "framer-motion";
import { SocialIconsRow } from "./SocialIcons";
import FlodeskInlineForm from "./FlodeskInlineForm";

export default function CTASection() {
  return (
    <motion.section
      id="s-cta"
      className="scroll-mt-16 relative py-14 md:py-32 px-6"
      style={{ background: "#0A0A0A" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative z-10 mx-auto max-w-container">
        <div className="max-w-md mx-auto text-center">
          <p
            className="font-inter uppercase tracking-[0.22em] text-gold mb-6"
            style={{ fontSize: "0.75rem" }}
          >
            Get Started
          </p>

          <h2
            className="font-playfair font-normal text-cream leading-[1.08] mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
          >
            Ready to grow your business?
          </h2>

          <p
            className="font-inter text-cream/50 leading-[1.7] mb-6"
            style={{ fontSize: "1rem" }}
          >
            Let&apos;s make a plan that brings you more leads and sales.
          </p>

          <p
            className="font-inter font-medium text-cream mb-8"
            style={{ fontSize: "1rem" }}
          >
            One call could change everything for your business.
          </p>

          {/* Flodesk inline form — replaces the old signup form */}
          <FlodeskInlineForm />
        </div>

        {/* Social icons — bottom of page */}
        <div className="mt-16 flex justify-center">
          <SocialIconsRow />
        </div>

        {/* Footer */}
        <div className="mt-20 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-cormorant text-cream/20 text-sm">Kritagya Bhandari</span>
          <span className="font-inter text-cream/15 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </div>
    </motion.section>
  );
}
