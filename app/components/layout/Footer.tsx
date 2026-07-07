"use client";

import { contactInfo } from "@/app/lib/data";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t py-12"
      style={{ borderColor: "rgba(0,212,255,0.12)", background: "#070c18" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div
              className="text-2xl font-black mb-3"
              style={{ fontFamily: "var(--font-syne)", color: "#00d4ff" }}
            >
              TH<span style={{ color: "#00ff88" }}>.</span>dev
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Network Engineer &amp; Full-Stack Developer building secure
              infrastructures and modern web applications.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { href: contactInfo.github, icon: "GH", title: "GitHub" },
                { href: contactInfo.linkedin, icon: "in", title: "LinkedIn" },
                { href: `mailto:${contactInfo.email}`, icon: "@", title: "Email" },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                  style={{
                    background: "rgba(0,212,255,0.08)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#00d4ff",
                    fontFamily: "var(--font-jetbrains)",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-widest"
              style={{ color: "#00d4ff", fontFamily: "var(--font-syne)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span style={{ color: "#00ff88" }}>›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-widest"
              style={{ color: "#00d4ff", fontFamily: "var(--font-syne)" }}
            >
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📧 {contactInfo.email}</li>
              <li>📍 {contactInfo.location}</li>
              <li>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  🐙 github.com/tarik497
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(0,212,255,0.08)" }}
        >
          <p
            className="text-slate-500 text-xs"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            © {year} Tarik Hamraoui. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js 15 + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
