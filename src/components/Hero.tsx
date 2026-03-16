"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

const CONNECTS_TO = [
  "Gmail", "Outlook", "Google Calendar", "Slack", "WhatsApp",
  "Notion", "HubSpot", "Google Sheets", "GitHub", "Zoom",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.1) 0%, transparent 60%)",
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-violet-600 z-10"
      />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-accent-light text-xs font-medium tracking-wide uppercase">
            Deploying worldwide — East Coast US + Caribbean specialists
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6"
        >
          Stop Managing Tools.
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            Start Managing Outcomes.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          We deploy OpenClaw — a private AI agent that lives on your own
          infrastructure, connects to your existing tools, and works around
          the clock. No cloud dependency. No data leaving your control.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm text-muted/60 mb-10"
        >
          Designed for <strong className="text-foreground">founders, exec teams, and growing businesses</strong> that
          want AI leverage without the learning curve or security trade-offs.
        </motion.p>

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
            Book a Free Strategy Call &rarr;
          </a>
          <a
            href="#pricing"
            className="border border-white/10 hover:border-white/20 text-foreground font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5"
          >
            See Pricing
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-muted/40 text-xs uppercase tracking-widest mr-2">
            Connects to
          </span>
          {CONNECTS_TO.map((name) => (
            <span
              key={name}
              className="text-[11px] text-muted/50 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
            >
              {name}
            </span>
          ))}
          <span className="text-[11px] text-accent-light/60 bg-accent/10 border border-accent/15 px-2.5 py-1 rounded-md">
            +10,000 via Composio
          </span>
        </motion.div>
      </div>
    </section>
  );
}
