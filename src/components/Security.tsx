"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

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
            Your Data Stays Yours
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-2xl">
            Every deployment follows a hardened security baseline. We use
            Composio as a credential isolation layer — your agent never
            touches raw OAuth tokens or API keys directly. Everything runs
            in a sandboxed environment with full audit logging.
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
            "Sandboxed execution with process isolation",
            "Credential-free agent via Composio middleware",
            "Read-only permissions until you say otherwise",
            "One-click revoke on any connected tool",
            "Full audit log of every agent action",
            "Gradual trust expansion — start minimal, grow over time",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 text-sm text-muted"
            >
              <span className="text-accent-light text-xs">{"\u25C6"}</span>
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
          <h3 className="font-bold text-sm mb-2">Already running OpenClaw on your own?</h3>
          <p className="text-muted text-sm leading-relaxed">
            We see a lot of self-managed installs with exposed credentials,
            missing firewalls, and no audit trail. We can audit your setup,
            apply our security baseline, and bring you onto Managed Care —{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline underline-offset-2 hover:text-foreground transition-colors"
            >
              book a call
            </a>{" "}
            and we&apos;ll tell you what needs fixing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
