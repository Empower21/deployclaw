"use client";

import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    tag: "Every 30 min",
    text: "Scans your inbox, flags urgent emails, drafts replies for your review",
  },
  {
    tag: "9:00 AM daily",
    text: "Sends you a briefing: today's meetings, attendee backgrounds, prep notes",
  },
  {
    tag: "On demand",
    text: '"I\'m running 10 min late" → bot emails your next meeting and reschedules',
  },
  {
    tag: "Ongoing",
    text: "Monitors Slack channels, summarizes threads, surfaces what matters",
  },
];

export function AlwaysOn() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            Always On, Always Working
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Unlike ChatGPT or Claude Desktop, your OpenClaw agent runs{" "}
            <strong>24/7 on dedicated infrastructure.</strong>
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            It wakes up every 30 minutes, checks your email, calendar, and
            connected tools — and takes action without you asking.
          </p>
        </motion.div>

        <div className="space-y-4">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.tag}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 text-[11px] text-muted/60 bg-surface-light border border-white/[0.06] px-3 py-1.5 rounded-lg min-w-[100px] text-center">
                {cap.tag}
              </span>
              <p className="text-sm text-muted leading-relaxed pt-1">
                {cap.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted/50 text-sm mt-8"
        >
          You talk to your bot through{" "}
          <strong className="text-foreground">Telegram</strong> (or Slack,
          WhatsApp, Discord) — just like texting an assistant. No technical
          knowledge required.
        </motion.p>
      </div>
    </section>
  );
}
