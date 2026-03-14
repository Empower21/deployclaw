"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Book a Call",
    description: "30-minute consultation to understand your team's needs and choose the right deployment tier.",
  },
  {
    step: "02",
    title: "We Ship or Visit",
    description: "Remote? We ship a pre-configured Mac Mini. On-site? We fly to your office and set up in person.",
  },
  {
    step: "03",
    title: "Deploy in 48hrs",
    description: "OpenClaw installed, configured with your documents, and your team trained — all in under 48 hours.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Post-deploy support included. Add ClawCare for 24/7 monitoring, updates, and priority response.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent/60 text-xs tracking-[6px] uppercase mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <span className="text-accent/20 text-5xl font-black leading-none select-none">
                {item.step}
              </span>
              <div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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
