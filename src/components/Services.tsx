"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "🚀",
    title: "Deploy",
    description:
      "We configure OpenClaw on a Mac Mini, ship it to you (or bring it ourselves), and get your team live in under 48 hours.",
    points: ["Pre-configured hardware", "Custom AI training on your docs", "Zero downtime setup"],
  },
  {
    icon: "🔒",
    title: "Secure",
    description:
      "Your data never leaves your building. No cloud. No third-party servers. Complete privacy by design.",
    points: ["On-premise only — no cloud", "Network security audit included", "HIPAA & SOC2 friendly"],
  },
  {
    icon: "🛠️",
    title: "Maintain",
    description:
      "ClawCare keeps your AI assistant running smoothly with 24/7 monitoring, updates, and priority support.",
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
          <p className="text-accent/60 text-xs tracking-[6px] uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Deploy. Secure. Maintain.
          </h2>
          <p className="text-muted text-sm mt-3 max-w-md mx-auto">
            End-to-end AI deployment — from hardware to ongoing support
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
              <span className="text-4xl mb-5 block">{service.icon}</span>
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
                    <span className="text-accent text-xs">✓</span>
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
