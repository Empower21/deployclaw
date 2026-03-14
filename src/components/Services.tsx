"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    icon: "\u26A1",
    title: "Deploy",
    description:
      "We provision your server, install OpenClaw, wire up your email, calendar, CRM, and messaging apps — then hand you a working agent you can text from your phone.",
    points: ["Live in under 48 hours", "Custom workflows built to your ops", "Zero technical lift on your side"],
  },
  {
    icon: "\u26E8",
    title: "Harden",
    description:
      "Every deployment gets a full security pass: sandboxed execution, credential isolation through Composio, firewall lockdown, and minimal-permission defaults.",
    points: ["Credentials never touch the bot directly", "Sandboxed execution environment", "Audit trail on every agent action"],
  },
  {
    icon: "\u2692",
    title: "Maintain",
    description:
      "Tokens expire. APIs change. Models improve. Our Managed Care plans handle monitoring, patching, and workflow tuning so nothing breaks while you sleep.",
    points: ["Proactive monitoring and updates", "Priority response when things drift", "Monthly optimization reports"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            Full-Service Delivery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            From First Call to Fully Operational
          </h2>
          <p className="text-muted text-sm mt-3 max-w-md mx-auto">
            One team handles everything — no handoffs, no finger-pointing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-accent-light text-2xl mb-5 block">
                {pillar.icon}
              </span>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {pillar.description}
              </p>
              <ul className="space-y-2">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="text-accent-light text-xs">{"\u2713"}</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
