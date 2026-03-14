"use client";

import { motion } from "framer-motion";

const EXAMPLES = [
  {
    label: "Morning brief",
    text: "Your agent sends a daily digest: today's meetings, attendee context, prep notes, and flagged emails.",
  },
  {
    label: "Inbox patrol",
    text: "Scans email every 30 minutes. Urgent items get flagged. Routine replies get drafted for your approval.",
  },
  {
    label: "Quick commands",
    text: "Text it \"reschedule my 2pm\" and it handles the calendar shuffle, emails the other party, and confirms.",
  },
  {
    label: "Background ops",
    text: "Watches your Slack and CRM for signals — overdue deals, unanswered threads, missed follow-ups.",
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
            What Your Agent Actually Does
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            An employee that never clocks out.
          </h2>
          <p className="text-muted text-sm leading-relaxed">
            Unlike ChatGPT or Copilot, your OpenClaw agent runs on dedicated
            infrastructure around the clock. It proactively checks your tools,
            surfaces what matters, and takes action — without you opening a tab.
          </p>
        </motion.div>

        <div className="space-y-4">
          {EXAMPLES.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 text-[11px] text-muted/60 bg-surface-light border border-white/[0.06] px-3 py-1.5 rounded-lg min-w-[110px] text-center">
                {item.label}
              </span>
              <p className="text-sm text-muted leading-relaxed pt-1">
                {item.text}
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
          You interact through{" "}
          <strong className="text-foreground">Telegram, Slack, or WhatsApp</strong>{" "}
          — the same apps you already use. No new software to learn.
        </motion.p>
      </div>
    </section>
  );
}
