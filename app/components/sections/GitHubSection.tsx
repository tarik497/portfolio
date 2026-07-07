"use client";

import { motion } from "framer-motion";
import { githubStats } from "@/app/lib/data";

function StatCard({ value, label, icon, delay }: { value: number | string; label: string; icon: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-2xl text-center card-hover"
      style={{
        background: "rgba(13,20,38,0.9)",
        border: "1px solid rgba(0,212,255,0.12)",
      }}
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div
        className="text-3xl font-black mb-1 stat-number"
        style={{ color: "#00d4ff", fontFamily: "var(--font-syne)" }}
      >
        {value}
      </div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  );
}

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 relative">
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
            05 / GitHub
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            GitHub <span className="gradient-text">Statistics</span>
          </h2>
          <div className="section-divider max-w-xs" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard value={githubStats.contributions} label="Contributions" icon="📊" delay={0} />
          <StatCard value={githubStats.repositories} label="Repositories" icon="📁" delay={0.1} />
          <StatCard value={githubStats.stars} label="Stars Earned" icon="⭐" delay={0.2} />
          <StatCard value={githubStats.followers} label="Followers" icon="👥" delay={0.3} />
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 rounded-2xl"
          style={{
            background: "rgba(13,20,38,0.9)",
            border: "1px solid rgba(0,212,255,0.12)",
          }}
        >
          <h3
            className="font-bold text-white mb-5 text-sm"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Languages Used
          </h3>
          
          {/* Bar */}
          <div className="flex rounded-full overflow-hidden h-3 mb-5">
            {githubStats.languages.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ background: lang.color, height: "100%" }}
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {githubStats.languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: lang.color }}
                />
                <span
                  className="text-xs text-slate-400"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {lang.name}
                </span>
                <span
                  className="text-xs"
                  style={{ color: lang.color, fontFamily: "var(--font-jetbrains)" }}
                >
                  {lang.percent}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-center"
        >
          <a
            href={`https://github.com/${githubStats.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e2e8f0",
              fontFamily: "var(--font-syne)",
            }}
          >
            🐙 View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
