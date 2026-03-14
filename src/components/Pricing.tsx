"use client";

import { motion } from "framer-motion";
import { TIERS, ADDONS, MANAGED_CARE, CALENDLY_URL } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            Investment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Pick the Right Fit for Your Team
          </h2>
          <p className="text-muted text-sm mt-3 max-w-lg mx-auto">
            One-time setup. 100% satisfaction guarantee. Remote deployments are the same price
            everywhere — we work across time zones daily.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                tier.badge
                  ? "bg-gradient-to-b from-violet-900/80 to-violet-950/80 ring-1 ring-violet-500/30 shadow-xl shadow-accent/10"
                  : "bg-surface border border-white/[0.06]"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] text-white font-bold bg-accent px-3 py-1 rounded-full uppercase tracking-wider">
                    {tier.badge}
                  </span>
                </div>
              )}

              <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-0.5 mb-4">
                <span className="text-3xl font-black">{tier.price}</span>
                {tier.suffix && (
                  <span className="text-muted text-lg font-bold">{tier.suffix}</span>
                )}
              </div>
              <p className={`text-sm leading-relaxed mb-6 ${
                tier.badge ? "text-violet-200/70" : "text-muted/70"
              }`}>
                {tier.description}
              </p>

              <ul className="space-y-2.5 mb-7">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${
                    tier.badge ? "text-violet-100/80" : "text-muted"
                  }`}>
                    <span className={`mt-0.5 text-xs ${
                      tier.badge ? "text-violet-300" : "text-accent-light"
                    }`}>{"\u2713"}</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center font-semibold text-sm py-3 rounded-full transition-all ${
                  tier.badge
                    ? "bg-white text-violet-900 hover:bg-violet-50"
                    : "bg-accent/10 text-accent-light hover:bg-accent/20 border border-accent/20"
                }`}
              >
                Get started &rarr;
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-5">
            Add-Ons
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ADDONS.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.06] bg-surface/50"
              >
                <div>
                  <p className="font-semibold text-sm">{addon.name}</p>
                  <p className="text-muted/50 text-xs">{addon.note}</p>
                </div>
                <span className="font-bold text-sm shrink-0 ml-4">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Managed Care */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-2">
            Managed Care
          </p>
          <p className="text-muted/50 text-xs mb-5">
            Every deployment includes hypercare. For ongoing coverage, pick a care plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {MANAGED_CARE.map((plan) => (
              <div
                key={plan.name}
                className="px-5 py-4 rounded-xl border border-white/[0.06] bg-surface/50"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-bold text-sm">{plan.name}</h4>
                  <span className="text-accent-light font-bold text-sm">{plan.price}</span>
                </div>
                <p className="text-muted/50 text-xs leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-surface rounded-xl border border-white/[0.06] p-6 text-center"
        >
          <p className="font-bold text-sm mb-1">100% satisfaction guarantee</p>
          <p className="text-muted/60 text-xs">
            Not the right fit? Full refund within 14 days of deployment. No questions, no hassle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
