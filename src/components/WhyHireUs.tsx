"use client";

import { motion } from "framer-motion";

export function WhyHireUs() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            Why Teams Hire Us
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-2xl">
            OpenClaw is open-source — you could set it up yourself. But most
            teams need custom integrations beyond the defaults, and even
            experienced engineers spend several hours getting everything wired
            up. Then there&apos;s the ongoing maintenance: updates, drift, broken
            workflows, security patches.
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mt-4">
            We handle all of it — deployed securely from day one, so your team
            gets leverage instead of another project to maintain. It&apos;s the{" "}
            <strong className="text-foreground">Collison Install</strong> — we
            show up and do it for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
