"use client";

import { motion } from "framer-motion";
import { TIERS, CLAWCARE, CALENDLY_URL } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(239,68,68,0.03) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent/60 text-xs tracking-[6px] uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose Your Deployment
          </h2>
          <p className="text-muted text-sm mt-3 max-w-md mx-auto">
            One-time setup fee. No hidden costs. ClawCare optional.
          </p>
        </motion.div>

        {/* Main tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                tier.highlight
                  ? "bg-gradient-to-b from-red-600 to-red-800 shadow-2xl shadow-accent/20 ring-2 ring-red-400/50 md:scale-105"
                  : "bg-surface border border-white/5"
              }`}
            >
              {tier.badge && (
                <div className="bg-red-400 text-red-950 text-[10px] font-bold uppercase tracking-widest text-center py-1.5">
                  {tier.badge}
                </div>
              )}

              <div className="p-7">
                <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black">{tier.price}</span>
                  <span className="text-muted text-sm">one-time</span>
                </div>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    tier.highlight ? "text-red-100/80" : "text-muted"
                  }`}
                >
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        tier.highlight ? "text-red-50/90" : "text-muted"
                      }`}
                    >
                      <span
                        className={`mt-0.5 text-xs ${
                          tier.highlight ? "text-red-200" : "text-accent"
                        }`}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-semibold text-sm py-3 rounded-full transition-all ${
                    tier.highlight
                      ? "bg-white text-red-700 hover:bg-red-50"
                      : "bg-accent hover:bg-accent-dark text-white"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ClawCare add-on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-2xl border border-white/5 p-8 md:flex md:items-center md:justify-between md:gap-8"
        >
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold">{CLAWCARE.name}</h3>
              <span className="text-accent text-xs font-medium bg-accent/10 px-2.5 py-0.5 rounded-full">
                Add-on
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-lg">
              {CLAWCARE.description}
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <div>
              <span className="text-2xl font-black">{CLAWCARE.price}</span>
              <span className="text-muted text-sm">{CLAWCARE.period}</span>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent/30 hover:border-accent text-accent font-semibold text-sm px-6 py-3 rounded-full transition-all hover:bg-accent/10"
            >
              {CLAWCARE.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
