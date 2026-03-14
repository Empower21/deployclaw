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
            The DIY Problem
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-2xl">
            OpenClaw is open-source. Anyone can install it. But between Docker
            configuration, API key management, OAuth flows, firewall rules, and
            the dozen integrations that make it actually useful — most teams
            burn 40–80 hours before they have something production-ready.
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-2xl mt-4">
            Then there&apos;s the ongoing upkeep: tokens expire, integrations
            drift, models update. We take all of that off your plate so your
            team gets the leverage of AI without adopting a new side project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
