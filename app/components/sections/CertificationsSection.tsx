"use client";

import { motion } from "framer-motion";
import { certifications, type Certification } from "@/app/lib/data";

function StatusBadge({ status }: { status: Certification["status"] }) {
  const map = {
    earned: { label: "Earned", bg: "rgba(0,255,136,0.12)", color: "#00ff88", border: "rgba(0,255,136,0.3)" },
    "in-progress": { label: "In Progress", bg: "rgba(251,146,60,0.12)", color: "#fb923c", border: "rgba(251,146,60,0.3)" },
    planned: { label: "Planned", bg: "rgba(148,163,184,0.1)", color: "#94a3b8", border: "rgba(148,163,184,0.2)" },
  };
  const s = map[status];
  return (
    <span
      className="text-xs font-semibold px-2.5 py-1 rounded-full"
      style={{
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
        fontFamily: "var(--font-jetbrains)",
      }}
    >
      {s.label}
    </span>
  );
}

function CertCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative p-6 rounded-2xl card-hover overflow-hidden"
      style={{
        background: "rgba(13,20,38,0.9)",
        border: "1px solid rgba(0,212,255,0.12)",
      }}
    >
      {/* Glow accent */}
      <div
        className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${cert.badgeColor}80, ${cert.badgeColor}20)` }}
      />

      <div className="flex items-start justify-between mb-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
          style={{
            background: `${cert.badgeColor}18`,
            border: `1px solid ${cert.badgeColor}40`,
          }}
        >
          {cert.icon}
        </div>
        <StatusBadge status={cert.status} />
      </div>

      <h3
        className="text-lg font-black text-white mb-1"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {cert.title}
      </h3>
      <p
        className="text-sm mb-4"
        style={{ color: cert.badgeColor, fontFamily: "var(--font-jetbrains)" }}
      >
        {cert.issuer}
      </p>

      {cert.date && (
        <div
          className="text-xs text-slate-500 flex items-center gap-1"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          📅 Completed {cert.date}
        </div>
      )}

      {cert.status === "in-progress" && (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-slate-500 mb-1.5" style={{ fontFamily: "var(--font-jetbrains)" }}>
            <span>Progress</span>
            <span style={{ color: "#fb923c" }}>65%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              className="h-full rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "65%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ background: "linear-gradient(90deg, #fb923c99, #fb923c)", boxShadow: "0 0 8px #fb923c60" }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
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
            03 / Certifications
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            My <span className="gradient-text">Credentials</span>
          </h2>
          <div className="section-divider max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
