"use client";

import { motion } from "framer-motion";

const PHONE = "9761673867";
// Explicit mutable tuple — Framer Motion's `ease` type rejects a readonly
// (`as const`) tuple under strict type-checking, which would fail `next build`.
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Step = {
  n: string;
  emoji: string;
  title: string;
  text: string;
  side: "right" | "left";
  badge: "gold" | "burgundy";
};

const steps: Step[] = [
  {
    n: "1",
    emoji: "📧",
    title: "Check Your Inbox",
    text: "I've sent your free strategy straight to your email. It should land within a minute or two.",
    side: "right",
    badge: "gold",
  },
  {
    n: "2",
    emoji: "📥",
    title: "Landed in Promotions?",
    text: "Gmail sometimes files it there by mistake. Drag it into Primary once, and you'll always see what I send you.",
    side: "left",
    badge: "burgundy",
  },
  {
    n: "3",
    emoji: "📅",
    title: "Book Your Call",
    text: "Open the email and click the link inside — it takes you straight to my calendar. Pick any time that works for you.",
    side: "right",
    badge: "gold",
  },
];

function StitchedDetail({ align }: { align: "start" | "end" }) {
  return (
    <div
      className={`mb-5 flex flex-col gap-2 items-center ${
        align === "start" ? "md:items-start" : "md:items-end"
      }`}
      aria-hidden
    >
      <div className="h-px w-20 bg-[#C9A961]/50" />
      <div className="flex gap-1.5">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-[#C9A961]/30" />
        ))}
      </div>
    </div>
  );
}

function StepCard({ step }: { step: Step }) {
  const isRight = step.side === "right";
  const badge =
    step.badge === "gold"
      ? { bg: "#C9A961", color: "#0A0A0A" }
      : { bg: "#6B1626", color: "#EFE3D6" };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: isRight ? 64 : -64 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, ease: EASE }}
    >
      {/* Shifted container — zigzag on desktop, centered on mobile */}
      <div
        className={`w-full max-w-[620px] mx-auto ${
          isRight ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
        }`}
      >
        <StitchedDetail align={isRight ? "start" : "end"} />

        {/* Pill — badge fused to the outer end */}
        <div
          className={`flex items-stretch rounded-[2.25rem] overflow-hidden border border-[#C9A961]/15 bg-[#1a1a1a] ${
            isRight ? "" : "flex-row-reverse"
          }`}
          style={{ boxShadow: "0 26px 60px rgba(0,0,0,0.5)" }}
        >
          {/* Body */}
          <div
            className={`flex-1 flex items-center gap-5 px-7 py-7 md:px-10 md:py-9 ${
              isRight ? "flex-row text-left" : "flex-row-reverse text-right"
            }`}
          >
            <span className="text-3xl md:text-[2.5rem] shrink-0" aria-hidden>
              {step.emoji}
            </span>
            <div>
              <h3 className="font-inter font-semibold text-cream text-[1.15rem] md:text-[1.35rem] leading-snug mb-1.5">
                {step.title}
              </h3>
              <p className="font-inter text-cream/60 text-[0.9rem] md:text-[1rem] leading-relaxed">
                {step.text}
              </p>
            </div>
          </div>

          {/* Number badge — the numeral is the focal element */}
          <div
            className="shrink-0 flex items-center justify-center w-24 md:w-32"
            style={{ background: badge.bg }}
          >
            <span
              className="font-playfair font-medium leading-none"
              style={{ color: badge.color, fontSize: "clamp(3rem, 7vw, 4.5rem)" }}
            >
              {step.n}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ThanksClient() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-cream font-inter overflow-x-hidden">
      {/* ───────── HERO ───────── */}
      <section className="relative px-6 pt-28 pb-14 md:pt-40 md:pb-16 text-center">
        {/* Soft radial gold glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 68% 60% at 50% 34%, rgba(201,169,97,0.13) 0%, transparent 66%)",
          }}
        />
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h1
            className="font-playfair font-normal leading-[1.02] text-cream"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            You&apos;re In!
          </h1>
          <p
            className="font-playfair italic text-gold leading-[1.1] mt-2"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
          >
            Get My Free Strategy
          </p>
          <p
            className="font-inter text-cream/55 mt-7"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Here&apos;s exactly what happens next 👇
          </p>
        </motion.div>
      </section>

      {/* ───────── DECORATIVE DIVIDER (hero → steps) ───────── */}
      <motion.div
        className="flex items-center justify-center gap-3 px-6 py-8 md:py-12"
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-[#C9A961]/45" />
        <span
          className="h-2.5 w-2.5 rotate-45 bg-[#C9A961]"
          style={{ boxShadow: "0 0 14px rgba(201,169,97,0.55)" }}
        />
        <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-[#C9A961]/45" />
      </motion.div>

      {/* ───────── NEXT STEPS (zigzag) ───────── */}
      <section className="px-6 pt-8 pb-28 md:pb-36">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-inter uppercase tracking-[0.3em] text-gold text-[0.78rem] mb-20">
            Next Steps
          </p>
          <div className="flex flex-col gap-20 md:gap-28">
            {steps.map((s) => (
              <StepCard key={s.n} step={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BOTTOM CTA ───────── */}
      <section className="px-6 pb-28 md:pb-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="font-inter uppercase tracking-[0.3em] text-gold text-[0.75rem] mb-5">
            Contact
          </p>
          <a
            href={`tel:${PHONE}`}
            className="font-playfair font-bold text-cream hover:text-gold transition-colors duration-300 inline-block leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
          >
            {PHONE}
          </a>
        </motion.div>
      </section>
    </main>
  );
}
