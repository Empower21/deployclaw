"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "\u26A1",
    title: "Deploy",
    description:
      "We configure OpenClaw on a VPS or Mac Mini, connect your tools, set up Docker sandboxing, firewall rules, and cron jobs. You go live same day.",
    points: ["Turnkey setup — zero config on your end", "Custom AI training on your docs", "Email, calendar & Slack wired on day one"],
  },
  {
    icon: "\u25C6",
    title: "Harden",
    description:
      "Composio OAuth middleware so your bot never touches raw credentials. Docker sandbox, exec allowlists, and read-only permissions by default.",
    points: ["Bot never sees raw credentials", "Full audit trail on every action", "HIPAA & SOC2 friendly architecture"],
  },
  {
    icon: "\u2699",
    title: "Maintain",
    description:
      "OAuth tokens expire, integrations break, workflows drift. ClawCare keeps everything running so your team doesn't have to think about it.",
    points: ["Automatic OpenClaw updates", "24/7 uptime monitoring", "< 2hr priority response"],
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
            Turnkey Service
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Deploy. Harden. Maintain.
          </h2>
          <p className="text-muted text-sm mt-3 max-w-md mx-auto">
            End-to-end AI deployment — from hardware to ongoing managed care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-surface rounded-2xl p-8 border border-white/5 hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-accent-light text-2xl mb-5 block">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.points.map((point) => (
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
