"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/app/lib/data";

const roles = [
  "Network Engineer",
  "Full-Stack Developer",
  "Master's Graduate",
  "Cybersecurity Enthusiast",
];

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts]);

  return (
    <span>
      <span style={{ color: "#00d4ff" }}>{displayed}</span>
      <span className="cursor" style={{ color: "#00ff88" }}>|</span>
    </span>
  );
}

// Deterministic pseudo-random seeded by index to avoid hydration mismatch
function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function ParticleField() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const particles = Array.from({ length: 60 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: seededRand(i * 7) > 0.8 ? "3px" : "2px",
            height: seededRand(i * 13) > 0.8 ? "3px" : "2px",
            background: i % 3 === 0 ? "#00d4ff" : i % 3 === 1 ? "#00ff88" : "#1d6fa4",
            left: `${seededRand(i * 3) * 100}%`,
            top: `${seededRand(i * 5) * 100}%`,
            opacity: seededRand(i * 11) * 0.6 + 0.1,
            animation: `float ${3 + seededRand(i * 17) * 4}s ease-in-out ${seededRand(i * 19) * 3}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

function HexNode({ x, y, size = 40, delay = 0 }: { x: string; y: string; size?: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0.08, 0.2, 0.08], scale: 1 }}
      transition={{ duration: 3, delay, repeat: Infinity, repeatType: "reverse" }}
      className="absolute"
      style={{ left: x, top: y, width: size, height: size }}
    >
      <svg viewBox="0 0 40 40" fill="none">
        <polygon
          points="20,2 37,11 37,29 20,38 3,29 3,11"
          stroke="#00d4ff"
          strokeWidth="1"
          fill="rgba(0,212,255,0.05)"
        />
      </svg>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,255,136,0.05) 0%, transparent 60%)",
        }}
      />

      <ParticleField />

      {/* Decorative hex nodes */}
      <HexNode x="5%" y="15%" size={60} delay={0} />
      <HexNode x="88%" y="10%" size={48} delay={0.5} />
      <HexNode x="92%" y="75%" size={70} delay={1} />
      <HexNode x="2%" y="70%" size={52} delay={1.5} />
      <HexNode x="45%" y="5%" size={40} delay={0.8} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6"
              style={{
                background: "rgba(0,255,136,0.1)",
                border: "1px solid rgba(0,255,136,0.3)",
                color: "#00ff88",
                fontFamily: "var(--font-jetbrains)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="text-slate-400 text-sm mb-2 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Hello, I&apos;m
              </div>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none mb-2"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <span className="text-white">Tarik</span>
                <br />
                <span className="gradient-text">Hamraoui</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl font-semibold mt-4 mb-2"
              style={{ fontFamily: "var(--font-syne)", minHeight: "2rem" }}
            >
              <TypewriterText texts={roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #00ff88)",
                  color: "#0a0f1e",
                  fontFamily: "var(--font-syne)",
                }}
              >
                View Projects
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 glass-light"
                style={{
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "#00d4ff",
                  fontFamily: "var(--font-syne)",
                }}
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#e2e8f0",
                  fontFamily: "var(--font-syne)",
                }}
              >
                Contact Me
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex gap-6 mt-10"
            >
              {[
                { value: "3+", label: "Projects" },
                { value: "2+", label: "Certifications" },
                { value: "100%", label: "Dedicated" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-black text-glow"
                    style={{ fontFamily: "var(--font-syne)", color: "#00d4ff" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center relative"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full"
                style={{
                  border: "1px solid transparent",
                  borderTopColor: "#00d4ff",
                  borderRightColor: "transparent",
                  borderBottomColor: "#00ff88",
                  borderLeftColor: "transparent",
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-full"
                style={{
                  border: "1px dashed rgba(0,212,255,0.2)",
                }}
              />

              {/* Profile image container */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden float-anim"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,255,136,0.1))",
                  border: "3px solid rgba(0,212,255,0.4)",
                  boxShadow: "0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(0,212,255,0.1)",
                }}
              >
                {/* Placeholder avatar */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{ background: "linear-gradient(135deg, #0d1426 0%, #111827 100%)" }}
                >
                  <div
                    className="text-7xl font-black"
                    style={{ fontFamily: "var(--font-syne)", color: "#00d4ff" }}
                  >
                    TH
                  </div>
                  <div
                    className="text-xs tracking-widest"
                    style={{ color: "#00ff88", fontFamily: "var(--font-jetbrains)" }}
                  >
                    NET.ADMIN
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-6 top-8 px-3 py-2 rounded-xl text-xs font-semibold glass"
                style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", fontFamily: "var(--font-jetbrains)", whiteSpace: "nowrap" }}
              >
                🌐 CCNA
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-6 bottom-16 px-3 py-2 rounded-xl text-xs font-semibold glass"
                style={{ border: "1px solid rgba(0,255,136,0.3)", color: "#00ff88", fontFamily: "var(--font-jetbrains)", whiteSpace: "nowrap" }}
              >
                🔒 Cybersecurity
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -right-6 bottom-8 px-3 py-2 rounded-xl text-xs font-semibold glass"
                style={{ border: "1px solid rgba(167,139,250,0.3)", color: "#a78bfa", fontFamily: "var(--font-jetbrains)", whiteSpace: "nowrap" }}
              >
                💻 Web Development
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500" style={{ fontFamily: "var(--font-jetbrains)" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(0,212,255,0.3)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "#00d4ff" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
