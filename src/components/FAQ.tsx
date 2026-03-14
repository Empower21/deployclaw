"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is OpenClaw?",
    a: "OpenClaw is an open-source AI assistant that runs entirely on a Mac Mini in your office. It can answer questions, draft documents, analyze data, and automate tasks — all without sending your data to any cloud service.",
  },
  {
    q: "Why on-premise instead of cloud AI?",
    a: "Cloud AI services (ChatGPT, Claude, etc.) send your data to external servers. OpenClaw keeps everything on YOUR hardware. This is critical for law firms, healthcare, finance, and any business handling sensitive information.",
  },
  {
    q: "What hardware do I need?",
    a: "Just a Mac Mini (M2 or newer) and an internet connection for updates. We can source the hardware for you or configure one you already own. The Mac Mini runs 24/7 as a local AI server your team accesses via browser.",
  },
  {
    q: "How long does deployment take?",
    a: "48 hours from the moment we start. Remote deployments include shipping time (2-3 business days). On-site deployments are completed the same day we arrive.",
  },
  {
    q: "Do I need technical staff to maintain it?",
    a: "No. That's what ClawCare is for. We handle monitoring, updates, and support so you don't need any technical expertise on your team. Without ClawCare, we provide a handoff guide.",
  },
  {
    q: "Can multiple team members use it?",
    a: "Yes. OpenClaw supports multiple concurrent users on your local network. During setup, we configure access for your entire team and provide individual training.",
  },
  {
    q: "What's your refund policy?",
    a: "30-day money-back guarantee on all deployment tiers. If OpenClaw doesn't meet your expectations within the first 30 days, we'll refund the full deployment fee. Hardware costs are non-refundable.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent/60 text-xs tracking-[6px] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-surface rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <span
                  className={`text-accent text-lg shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
