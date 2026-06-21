"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CTASection() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) { setError("Please fill in both fields."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Something went wrong."); return; }
      router.push("/thanks");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass = `
    w-full bg-[#111111] border border-white/10 rounded-[4px]
    px-4 py-3.5 font-inter text-[0.9375rem] text-cream
    placeholder:text-cream/20
    focus:outline-none focus:border-gold/70
    transition-colors duration-300 disabled:opacity-50
  `;

  return (
    <motion.section
      id="s-cta"
      className="scroll-mt-16 relative py-24 md:py-32 px-6"
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
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Ready to grow your business?
          </h2>

          <p
            className="font-inter text-cream/50 leading-[1.7] mb-10"
            style={{ fontSize: "1rem" }}
          >
            Let&apos;s make a plan that brings you more leads and sales.
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 text-left">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cta-name"
                className="font-inter text-[0.7rem] uppercase tracking-[0.16em] text-cream/35"
              >
                Your name
              </label>
              <input
                id="cta-name"
                type="text"
                autoComplete="name"
                placeholder="Rajesh Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="cta-email"
                className="font-inter text-[0.7rem] uppercase tracking-[0.16em] text-cream/35"
              >
                Your email
              </label>
              <input
                id="cta-email"
                type="email"
                autoComplete="email"
                placeholder="rajesh@yourbusiness.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className={inputClass}
              />
            </div>

            {error && (
              <p className="font-inter text-[0.8125rem] text-red-400/80">{error}</p>
            )}

            <button type="submit" disabled={loading} className="btn-burgundy mt-2">
              {loading ? "Sending…" : "Get my free strategy"}
            </button>
          </form>
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
