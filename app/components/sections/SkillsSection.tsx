"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillCategories, type SkillCategory } from "@/app/lib/data";

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span
          className="text-xs text-slate-300"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {name}
        </span>
        <span
          className="text-xs"
          style={{ color, fontFamily: "var(--font-jetbrains)" }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, index }: { cat: SkillCategory; index: number }) {
  const icons: Record<string, string> = {
    network: "🌐",
    cisco: "🔵",
    server: "🖥️",
    code: "💻",
    tools: "🛠️",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl card-hover"
      style={{
        background: "rgba(13,20,38,0.9)",
        border: "1px solid rgba(0,212,255,0.12)",
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{
            background: `${cat.color}15`,
            border: `1px solid ${cat.color}40`,
          }}
        >
          {icons[cat.icon] ?? "⚡"}
        </div>
        <h3
          className="font-bold text-white text-sm"
          style={{ fontFamily: "var(--font-syne)", color: cat.color }}
        >
          {cat.title}
        </h3>
      </div>

      <div>
        {cat.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={cat.color}
            delay={index * 0.05 + i * 0.06}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(0,255,136,0.03) 0%, transparent 70%)",
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
            02 / Skills
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <div className="section-divider max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
