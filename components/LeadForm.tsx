"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LeadForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      router.push("/thanks");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-md mx-auto flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="lead-name"
          className="font-inter text-[0.7rem] uppercase tracking-[0.18em] text-white/40"
        >
          Your name
        </label>
        <input
          id="lead-name"
          type="text"
          autoComplete="name"
          placeholder="Rajesh Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          className="
            w-full bg-transparent border border-white/12 rounded-[6px]
            px-5 py-4 font-inter text-[0.9375rem] text-white placeholder:text-white/20
            focus:outline-none focus:border-gold/60
            transition-colors duration-300
            disabled:opacity-50
          "
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="lead-email"
          className="font-inter text-[0.7rem] uppercase tracking-[0.18em] text-white/40"
        >
          Your email
        </label>
        <input
          id="lead-email"
          type="email"
          autoComplete="email"
          placeholder="rajesh@yourbusiness.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="
            w-full bg-transparent border border-white/12 rounded-[6px]
            px-5 py-4 font-inter text-[0.9375rem] text-white placeholder:text-white/20
            focus:outline-none focus:border-gold/60
            transition-colors duration-300
            disabled:opacity-50
          "
        />
      </div>

      {error && (
        <p className="font-inter text-[0.8125rem] text-red-400/80">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          mt-2 btn-gold w-full justify-center
          disabled:opacity-50 disabled:pointer-events-none
        "
      >
        {loading ? "Sending…" : "Get my free strategy"}
      </button>
    </form>
  );
}
