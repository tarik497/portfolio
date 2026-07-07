"use client";

import { motion } from "framer-motion";
import { timeline } from "@/app/lib/data";

const typeColors = {
  education: "#00d4ff",
  project: "#00ff88",
  certification: "#fb923c",
  achievement: "#a78bfa",
};

const typeLabels = {
  education: "Education",
  project: "Project",
  certification: "Certification",
  achievement: "Achievement",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
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
            06 / Experience
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-divider max-w-xs" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px timeline-line hidden sm:block"
            style={{ opacity: 0.3 }}
          />

          <div className="space-y-6">
            {timeline.map((item, i) => {
              const color = typeColors[item.type];
              return (
                <motion.div
                  key={`${item.year}-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-5 sm:gap-8"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 hidden sm:flex flex-col items-center" style={{ width: "48px" }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xl z-10"
                      style={{
                        background: `${color}15`,
                        border: `2px solid ${color}50`,
                        boxShadow: `0 0 15px ${color}30`,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 p-5 rounded-2xl mb-2"
                    style={{
                      background: "rgba(13,20,38,0.9)",
                      border: `1px solid ${color}20`,
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{
                          background: `${color}15`,
                          color,
                          fontFamily: "var(--font-jetbrains)",
                          border: `1px solid ${color}30`,
                        }}
                      >
                        {typeLabels[item.type]}
                      </span>
                      <span
                        className="text-xs text-slate-500"
                        style={{ fontFamily: "var(--font-jetbrains)" }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-white mb-1 text-sm"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
