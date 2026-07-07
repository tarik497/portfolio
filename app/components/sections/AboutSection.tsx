"use client";

import { motion } from "framer-motion";
import { aboutPoints } from "@/app/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            01 / About
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="section-divider max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I&apos;m a{" "}
              <span style={{ color: "#00d4ff", fontWeight: 600 }}>
                Computer Science student
              </span>{" "}
              with a deep passion for networking and IT infrastructure. My goal
              is to design, deploy, and secure enterprise-grade networks that
              organizations can rely on.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I spend my time working with Cisco equipment simulations, studying
              routing protocols, building real network topologies, and improving
              my cybersecurity knowledge. Every project I take on pushes me
              closer to becoming a world-class network engineer.
            </p>

            <div
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(0,212,255,0.04)",
                border: "1px solid rgba(0,212,255,0.15)",
              }}
            >
              <div
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "#00ff88", fontFamily: "var(--font-jetbrains)" }}
              >
                Core Goal
              </div>
              <p
                className="text-white font-semibold text-base leading-relaxed"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                &ldquo;Build reliable and secure IT infrastructures that power
                organizations and protect their digital assets.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {["Networking", "Cybersecurity", "Linux", "Cisco IOS", "System Admin"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      color: "#94a3b8",
                      fontFamily: "var(--font-jetbrains)",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl card-hover cursor-default"
                style={{
                  background: "rgba(13,20,38,0.8)",
                  border: "1px solid rgba(0,212,255,0.12)",
                }}
              >
                <div className="text-3xl mb-3">{point.icon}</div>
                <h3
                  className="font-bold text-white mb-2 text-sm"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {point.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
