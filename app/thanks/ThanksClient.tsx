"use client";

import { motion } from "framer-motion";

interface Props {
  videoUrl: string;
}

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
    title: "Check your email",
    text: "My email is already in your inbox. Open your Gmail now.",
    side: "right",
    badge: "gold",
  },
  {
    n: "2",
    emoji: "📥",
    title: "Drag Promotions → Primary",
    text: "If the email landed in your Promotions tab, drag it to Primary — so you never miss my emails.",
    side: "left",
    badge: "burgundy",
  },
  {
    n: "3",
    emoji: "📅",
    title: "Book your free call",
    text: "Inside the email is my Calendly link. Click it and pick a time for your free strategy call.",
    side: "right",
    badge: "gold",
  },
];

function StitchedDetail({ align }: { align: "start" | "end" }) {
  return (
    <div
      className={`mb-4 flex flex-col gap-1.5 items-center ${
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
          className={`flex items-stretch rounded-[2rem] overflow-hidden border border-[#C9A961]/20 bg-[#1a1a1a] ${
            isRight ? "" : "flex-row-reverse"
          }`}
          style={{ boxShadow: "0 22px 55px rgba(0,0,0,0.55)" }}
        >
          {/* Body */}
          <div
            className={`flex-1 flex items-center gap-4 px-6 py-6 md:px-8 ${
              isRight ? "flex-row text-left" : "flex-row-reverse text-right"
            }`}
          >
            <span className="text-3xl md:text-4xl shrink-0" aria-hidden>
              {step.emoji}
            </span>
            <div>
              <h3 className="font-inter font-semibold text-cream text-[1.05rem] md:text-[1.2rem] leading-snug mb-1">
                {step.title}
              </h3>
              <p className="font-inter text-cream/55 text-[0.875rem] md:text-[0.95rem] leading-relaxed">
                {step.text}
              </p>
            </div>
          </div>

          {/* Number badge */}
          <div
            className="shrink-0 flex items-center justify-center w-20 md:w-28"
            style={{ background: badge.bg }}
          >
            <span
              className="font-playfair leading-none"
              style={{ color: badge.color, fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}
            >
              {step.n}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ThanksClient({ videoUrl }: Props) {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-cream font-inter overflow-x-hidden">
      {/* ───────── HERO ───────── */}
      <section className="relative px-6 pt-24 pb-14 md:pt-32 md:pb-16 text-center">
        {/* Soft radial gold glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 28%, rgba(201,169,97,0.11) 0%, transparent 66%)",
          }}
        />
        <motion.div
          className="relative mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <h1
            className="font-playfair font-normal leading-[1.05] text-cream"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Thank You! 🎉
          </h1>
          <p
            className="font-playfair font-normal leading-[1.12] text-cream mt-3"
            style={{ fontSize: "clamp(1.6rem, 4.2vw, 3rem)" }}
          >
            You&apos;re in — <span className="italic text-gold">Get My Free Strategy</span>
          </p>
          <p
            className="font-inter text-cream/55 mt-6"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
          >
            Just 3 quick steps left 👇
          </p>
        </motion.div>
      </section>

      {/* ───────── VIDEO ───────── */}
      <motion.section
        className="px-6 mb-24 md:mb-32"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-2xl overflow-hidden border border-[#C9A961]/40"
            style={{
              boxShadow:
                "0 0 55px rgba(201,169,97,0.15), 0 24px 60px rgba(0,0,0,0.55)",
            }}
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={videoUrl}
                title="Welcome video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ───────── NEXT STEPS (zigzag) ───────── */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-inter uppercase tracking-[0.28em] text-gold text-[0.75rem] mb-16">
            Next Steps
          </p>
          <div className="flex flex-col gap-16 md:gap-20">
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
          <p
            className="font-inter text-cream/80 mb-6"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
          >
            Want to talk right away?
          </p>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-gold text-[#0A0A0A] font-inter font-semibold px-8 py-4 text-[0.95rem] tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(201,169,97,0.5)]"
          >
            📞 Call {PHONE}
          </a>
        </motion.div>
      </section>
    </main>
  );
}
