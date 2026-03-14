"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(239,68,68,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(239,68,68,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Red accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 z-10"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-xs font-medium tracking-wide uppercase">
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
          <span className="text-accent">Deployed in 48 Hours</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          OpenClaw on your own hardware. No cloud dependency. No data leaks.
          We handle everything — you just run your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            Book Your Deploy
          </a>
          <a
            href="#pricing"
            className="border border-white/10 hover:border-white/20 text-foreground font-semibold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/5"
          >
            View Pricing
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-muted/60 text-sm mt-8"
        >
          From $3,997 &middot; 30-day money-back guarantee &middot; No recurring fees required
        </motion.p>
      </div>
    </section>
  );
}
