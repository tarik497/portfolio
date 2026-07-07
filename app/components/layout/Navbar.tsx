"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certs" },
  { href: "#projects", label: "Projects" },
  // { href: "#github", label: "GitHub" },
  { href: "#experience", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,255,136,0.15))",
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "#00d4ff",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                TH
              </div>
              <span
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#00d4ff" }}
                className="text-sm tracking-wider group-hover:text-white transition-colors"
              >
                TH<span style={{ color: "#00ff88" }}>.</span>dev
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActive(link.href)}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    active === link.href
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "var(--font-jetbrains)", fontSize: "0.72rem" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #00ff88)",
                  color: "#0a0f1e",
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                }}
              >
                Hire Me
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
                aria-label="Toggle menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-t"
            style={{ borderColor: "rgba(0,212,255,0.12)" }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => { setActive(link.href); setMobileOpen(false); }}
                  className="px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  <span style={{ color: "#00d4ff" }}>~/</span>{link.label.toLowerCase()}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
