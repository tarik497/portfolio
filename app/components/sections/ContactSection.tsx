"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { contactInfo } from "@/app/lib/data";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Envoi en cours..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message envoyé ! Je te répondrai bientôt." });
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setStatus({ type: "error", message: data.error ?? "Une erreur est survenue. Réessaie." });
      }
    } catch {
      setStatus({ type: "error", message: "Impossible d'envoyer. Vérifie ta connexion." });
    }
  };

  const contactCards = [
    {
      icon: "📧",
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "#00d4ff",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "tarik-hamraoui",
      href: contactInfo.linkedin,
      color: "#0e76a8",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "tarik497",
      href: contactInfo.github,
      color: "#00ff88",
    },
    {
      icon: "📍",
      label: "Location",
      value: contactInfo.location,
      href: null,
      color: "#a78bfa",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="text-xs tracking-widest uppercase mb-2"
            style={{ color: "#00d4ff", fontFamily: "var(--font-jetbrains)" }}
          >
            07 / Contact
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-divider max-w-xs" />
          <p className="text-slate-400 mt-4 max-w-lg">
            Interested in working together or have a networking challenge? I&apos;d love to
            hear from you. Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-4 rounded-2xl card-hover"
                  style={{
                    background: "rgba(13,20,38,0.9)",
                    border: "1px solid rgba(0,212,255,0.12)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                    style={{
                      background: `${card.color}15`,
                      border: `1px solid ${card.color}40`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div
                    className="text-xs text-slate-500 mb-1"
                    style={{ fontFamily: "var(--font-jetbrains)" }}
                  >
                    {card.label}
                  </div>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline transition-colors"
                      style={{ color: card.color, fontFamily: "var(--font-jetbrains)" }}
                    >
                      {card.value}
                    </a>
                  ) : (
                    <span
                      className="text-sm font-medium"
                      style={{ color: card.color, fontFamily: "var(--font-jetbrains)" }}
                    >
                      {card.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl space-y-4"
              style={{
                background: "rgba(13,20,38,0.9)",
                border: "1px solid rgba(0,212,255,0.12)",
              }}
            >
              <div>
                <label
                  className="block text-xs font-medium mb-2 text-slate-300"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all focus:ring-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,212,255,0.18)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-medium mb-2 text-slate-300"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,212,255,0.18)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-medium mb-2 text-slate-300"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none resize-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,212,255,0.18)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                />
              </div>

              {status.type !== "idle" && (
                <div
                  className="text-sm px-4 py-3 rounded-xl"
                  style={{
                    background:
                      status.type === "success"
                        ? "rgba(0,255,136,0.1)"
                        : status.type === "error"
                        ? "rgba(239,68,68,0.1)"
                        : "rgba(0,212,255,0.1)",
                    border: `1px solid ${
                      status.type === "success"
                        ? "rgba(0,255,136,0.3)"
                        : status.type === "error"
                        ? "rgba(239,68,68,0.3)"
                        : "rgba(0,212,255,0.3)"
                    }`,
                    color:
                      status.type === "success"
                        ? "#00ff88"
                        : status.type === "error"
                        ? "#ef4444"
                        : "#00d4ff",
                    fontFamily: "var(--font-jetbrains)",
                  }}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full py-3 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #00ff88)",
                  color: "#0a0f1e",
                  fontFamily: "var(--font-syne)",
                }}
              >
                {status.type === "loading" ? "Envoi en cours..." : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
