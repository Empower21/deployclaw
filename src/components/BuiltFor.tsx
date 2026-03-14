"use client";

import { motion } from "framer-motion";

const PERSONAS = [
  {
    title: "CEOs & Founders",
    description: "Email triage, scheduling, investor updates",
  },
  {
    title: "Exec Teams",
    description: "CFO, Head of Sales, EA — each gets their own agent",
  },
  {
    title: "Agencies & Studios",
    description: "Client workflows, reporting, project management",
  },
  {
    title: "Investors & VCs",
    description: "Deal flow tracking, portfolio updates, LP comms",
  },
];

export function BuiltFor() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            Built For
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PERSONAS.map((persona, i) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-5 py-4 rounded-xl border border-white/[0.06] bg-surface/50"
            >
              <h3 className="font-bold text-sm mb-1">{persona.title}</h3>
              <p className="text-muted/60 text-xs leading-relaxed">
                {persona.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
