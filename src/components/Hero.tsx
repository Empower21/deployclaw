"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

const INTEGRATIONS = [
  "Gmail", "Google Calendar", "Outlook", "Slack", "WhatsApp",
  "Notion", "Google Drive", "Zoom", "HubSpot", "GitHub",
  "Google Sheets", "Salesforce",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.1) 0%, transparent 60%)",
        }}
      />

      {/* Accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 z-10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-accent-light text-xs font-medium tracking-wide uppercase">
            Now Serving East Coast + Caribbean
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6"
        >
          Your Team&apos;s AI Assistant
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Deployed in 48 Hours
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Turnkey OpenClaw deployment for founders and exec teams. We handle
          the install, hardening, integrations, and ongoing care — so you can
          focus on running your business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted/60 mb-10"
        >
          Built for <strong className="text-foreground">4–50+ employee</strong> teams where
          the CEO, CFO, or Head of Sales needs leverage without creating new security risk.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            Book a Free 15-min Call &rarr;
          </a>
          <a
            href="#pricing"
            className="border border-white/10 hover:border-white/20 text-foreground font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5"
          >
            View Pricing
          </a>
        </motion.div>

        {/* Integrations bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-muted/40 text-xs uppercase tracking-widest mr-2">
            Connects to
          </span>
          {INTEGRATIONS.slice(0, 8).map((name) => (
            <span
              key={name}
              className="text-[11px] text-muted/50 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
            >
              {name}
            </span>
          ))}
          <span className="text-[11px] text-accent-light/60 bg-accent/10 border border-accent/15 px-2.5 py-1 rounded-md">
            +{INTEGRATIONS.length - 8},000
          </span>
        </motion.div>
      </div>
    </section>
  );
}
