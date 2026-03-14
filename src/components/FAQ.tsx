"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What is OpenClaw?",
    a: "An open-source AI assistant that runs on dedicated infrastructure — a cloud server or a Mac Mini in your office. It connects to your email, calendar, CRM, and messaging tools, then works around the clock: triaging your inbox, prepping meetings, drafting replies, and automating repetitive workflows. Think of it as a digital team member that never sleeps.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We handle every aspect of setup — infrastructure, security, integrations, and configuration. After deployment, you interact with your agent through Telegram, Slack, or WhatsApp — the same apps you already use. Many of our clients are non-technical founders and executives.",
  },
  {
    q: "Why not just use ChatGPT or Claude?",
    a: "Chat tools are reactive — they wait for you to open a tab and type a prompt. OpenClaw is proactive: it runs 24/7, monitors your tools in the background, and takes action without you asking. Plus, your data stays on your own infrastructure — nothing goes to a third-party cloud.",
  },
  {
    q: "Can I just set it up myself?",
    a: "You can — it's open source. But between Docker setup, API key management, OAuth configuration, firewall hardening, and wiring up integrations, most teams spend 40–80 hours before they have something production-ready. We've done this hundreds of times and can get you live in under 48 hours.",
  },
  {
    q: "Do you work with Caribbean businesses?",
    a: "Yes — we're the only OpenClaw deployment service with on-the-ground presence in the Caribbean. We offer in-person setup in Jamaica, The Bahamas, Trinidad, and Barbados. Remote deployments work the same everywhere — same tools, same support, same turnaround.",
  },
  {
    q: "What happens after the initial setup?",
    a: "Every deployment includes a hypercare period (14–60 days depending on your tier) where we actively tune workflows and fix issues. After that, our Managed Care plans provide ongoing monitoring, updates, and priority support — or you can run it independently with the documentation we provide.",
  },
  {
    q: "Can multiple people on my team use it?",
    a: "Yes. OpenClaw supports multiple concurrent users. For larger teams, we often deploy separate agents for different roles — a CEO agent handling email and calendar, a Sales agent managing CRM and outreach, a Finance agent tracking invoices. Each agent has its own identity and permissions.",
  },
  {
    q: "What's your refund policy?",
    a: "Full refund within 14 days of deployment if you're not satisfied — no questions asked. We're confident in our work, and we'd rather earn your trust than hold you to a contract.",
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
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Questions We Hear Often
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-surface rounded-xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <span
                  className={`text-accent-light text-lg shrink-0 transition-transform duration-200 ${
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
