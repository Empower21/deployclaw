"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "1",
    title: "Kickoff call",
    description: "We discuss your goals, map your integrations (email, calendar, CRM, messaging), and plan your agent's workflows. You tell us what to automate — we handle the rest.",
  },
  {
    step: "2",
    title: "Deploy & harden",
    description: "We set up your VPS or Mac Mini, install OpenClaw, configure Composio for secure OAuth, connect your tools, set up Docker sandboxing, firewall rules, and cron jobs. You go live same day.",
  },
  {
    step: "3",
    title: "14-day hypercare",
    description: "We tune workflows, expand permissions as you build trust, fix edge cases, and make sure everything runs smoothly. Dedicated Slack channel for direct support.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            How It Works
          </p>
        </motion.div>

        <div className="space-y-8">
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <span className="text-accent-light/30 text-3xl font-black leading-none select-none pt-1">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
