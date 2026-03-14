"use client";

import { motion } from "framer-motion";

export function Security() {
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
            Security-First by Design
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-2xl">
            Your bot never sees raw credentials. We use{" "}
            <strong className="text-foreground">Composio</strong> as a security
            middleware layer — all OAuth tokens are managed separately with a
            full audit trail and instant revoke capability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {[
            "Docker sandboxing & firewall hardening",
            "Exec allowlists — only approved commands",
            "Read-only permissions by default",
            "Instant kill switch for any integration",
            "Full audit trail on every action",
            "Expand access gradually as you build trust",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-sm text-muted"
            >
              <span className="text-accent-light text-xs">&#9670;</span>
              {item}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 bg-surface rounded-xl border border-white/[0.06] p-6"
        >
          <h3 className="font-bold text-sm mb-2">Already running OpenClaw?</h3>
          <p className="text-muted text-sm leading-relaxed">
            Many teams come to us with a working install that has security gaps.
            We&apos;ll audit your setup, add Composio for secure OAuth, harden your
            firewall and Docker config, and migrate you to managed care. Same
            pricing —{" "}
            <a
              href="#pricing"
              className="text-accent-light underline underline-offset-2 hover:text-foreground transition-colors"
            >
              book a call
            </a>{" "}
            and we&apos;ll assess what needs fixing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
