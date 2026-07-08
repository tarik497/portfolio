"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects, type Project } from "@/app/lib/data";

const categoryColors: Record<string, string> = {
  Networking: "#00d4ff",
  Infrastructure: "#00ff88",
  Security: "#a78bfa",
  Development: "#fb923c",
};

function ProjectImagePlaceholder({ category, title }: { category: string; title: string }) {
  const color = categoryColors[category] ?? "#00d4ff";
  const icons: Record<string, string> = {
    Networking: "🌐",
    Infrastructure: "🏗️",
    Security: "🔒",
    Development: "💻",
  };
  
  return (
    <div
      className="w-full h-48 flex flex-col items-center justify-center gap-2"
      style={{
        background: `linear-gradient(135deg, ${color}10, ${color}05)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${color}15 1px, transparent 1px), linear-gradient(90deg, ${color}15 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="text-5xl z-10">{icons[category] ?? "📡"}</div>
      <div
        className="text-xs z-10 text-center px-4"
        style={{ color, fontFamily: "var(--font-jetbrains)" }}
      >
        {title}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const color = categoryColors[project.category] ?? "#00d4ff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(13,20,38,0.9)",
        border: `1px solid ${hovered ? color + "50" : "rgba(0,212,255,0.12)"}`,
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${color}18` : "none",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <ProjectImagePlaceholder category={project.category} title={project.title} />
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-semibold"
          style={{
            background: `${color}20`,
            border: `1px solid ${color}40`,
            color,
            fontFamily: "var(--font-jetbrains)",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-black text-white mb-2"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.features.map((f) => (
            <span
              key={f}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: `${color}10`,
                border: `1px solid ${color}25`,
                color: color,
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-xs text-slate-500"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 rounded-xl text-xs font-bold text-center transition-all hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#e2e8f0",
              fontFamily: "var(--font-syne)",
            }}
          >
            GitHub
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-xl text-xs font-bold text-center transition-all hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${color}90, ${color})`,
                color: "#0a0f1e",
                fontFamily: "var(--font-syne)",
              }}
            >
              Live Demo
            </a>
          ) : (
            <span
              className="flex-1 py-2 rounded-xl text-xs font-bold text-center opacity-40 cursor-not-allowed"
              style={{
                background: `${color}20`,
                border: `1px solid ${color}30`,
                color,
                fontFamily: "var(--font-syne)",
              }}
            >
              Simulation
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
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
            04 / Projects
          </div>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider max-w-xs" />
          <p className="text-slate-400 mt-4 max-w-xl">
            A mix of real network infrastructure labs built with Cisco technologies and
            full-stack web applications built with Next.js, TypeScript, and PHP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
