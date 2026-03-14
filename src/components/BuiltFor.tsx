"use client";

import { motion } from "framer-motion";

const USE_CASES = [
  {
    title: "Small Business Owners",
    description: "Automate the admin that eats your mornings — inbox, scheduling, follow-ups",
  },
  {
    title: "Growing Teams (10–50)",
    description: "Give each department its own AI agent: sales, ops, finance, leadership",
  },
  {
    title: "Caribbean Enterprises",
    description: "First-mover AI advantage in a region with zero other providers",
  },
  {
    title: "Non-Technical Leaders",
    description: "Get the leverage of AI without learning Docker, APIs, or config files",
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
            Who This Is For
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {USE_CASES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-5 py-4 rounded-xl border border-white/[0.06] bg-surface/50"
            >
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-muted/60 text-xs leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
