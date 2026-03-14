"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "1",
    title: "Strategy call",
    description: "15 minutes. We map your tools, understand your workflows, and figure out where an AI agent creates the most leverage for your team.",
  },
  {
    step: "2",
    title: "Build and ship",
    description: "We provision your infrastructure, install OpenClaw, connect your integrations, apply our security baseline, and hand you a working agent — typically same day.",
  },
  {
    step: "3",
    title: "Tune and support",
    description: "For the first 14–60 days (depending on your tier), we actively refine workflows, expand permissions as trust builds, and fix anything that surfaces.",
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
            Three Steps to Live
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
