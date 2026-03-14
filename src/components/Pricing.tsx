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
            "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.03) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            Pricing
          </p>
        </motion.div>

        {/* Book a call CTA */}
        <motion.a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="block text-center font-semibold py-4 mb-8 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.02]"
        >
          Talk to us — free 15-min strategy call &rarr;
        </motion.a>

        {/* Tier list */}
        <div className="space-y-3 mb-6">
          {TIERS.map((tier, i) => (
            <motion.a
              key={tier.id}
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-between px-6 py-5 rounded-xl border border-white/[0.06] hover:border-accent/30 bg-surface/50 transition-all group cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-sm">{tier.name}</h3>
                  {tier.badge && (
                    <span className="text-[10px] text-accent-light font-semibold bg-accent/15 px-2 py-0.5 rounded uppercase tracking-wider">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted/60 text-xs">{tier.description}</p>
              </div>
              <span className="text-xl font-black shrink-0 ml-4 group-hover:text-accent-light transition-colors">
                {tier.price}
              </span>
            </motion.a>
          ))}

          {/* Add Another Agent */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-between px-6 py-5 rounded-xl border border-white/[0.06] bg-surface/50"
          >
            <div>
              <h3 className="font-bold text-sm">Add Another Agent</h3>
              <p className="text-muted/60 text-xs">CEO, EA, Sales, Finance — deploy your exec team</p>
            </div>
            <div className="text-right shrink-0 ml-4">
              <span className="text-xl font-black">+$1,500</span>
              <span className="text-muted/60 text-sm ml-1">each</span>
            </div>
          </motion.div>
        </div>

        {/* Book a call */}
        <motion.a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="block text-center bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20 mb-8"
        >
          Book a free call &rarr;
        </motion.a>

        {/* Fine print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted/40 text-xs leading-relaxed space-y-2"
        >
          <p>
            One-time setup fee. Most customers deploy on a cloud VPS ($5–10/mo) — we handle setup
            remotely. Mac Mini available for teams that need iMessage integration or prefer local
            hardware (~$600 at cost).
          </p>
          <p>
            Implementation includes 14-day hypercare. Ongoing support requires Managed Care.
          </p>
        </motion.div>

        {/* Satisfaction guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-8 bg-surface rounded-xl border border-white/[0.06] p-6"
        >
          <h3 className="font-bold text-sm mb-1">100% satisfaction guarantee</h3>
          <p className="text-muted text-xs leading-relaxed">
            If you&apos;re not happy with the setup, we&apos;ll refund you — no
            questions asked. We&apos;re here to help, not to nickel and dime.
          </p>
        </motion.div>

        {/* ClawCare / After You Purchase */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-6">
            After You Purchase
          </p>
          <div className="space-y-4">
            {[
              { tag: "Within 48 hrs", text: "We reach out to schedule your kickoff call and create a dedicated Slack channel" },
              { tag: "Kickoff call", text: "20–45 min requirements session: your integrations, workflows, and preferences" },
              { tag: "Setup session", text: "1–3 hr live build: you go live same day with a working bot you can message on Telegram" },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="shrink-0 text-[11px] text-muted/60 bg-surface-light border border-white/[0.06] px-3 py-1.5 rounded-lg min-w-[100px] text-center">
                  {step.tag}
                </span>
                <p className="text-sm text-muted leading-relaxed pt-1">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
