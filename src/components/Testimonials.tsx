"use client";

import { motion } from "framer-motion";

interface Quote {
  text: string;
  author: string;
  source: string;
  sourceUrl?: string;
}

const QUOTES: Quote[] = [
  {
    text: "It feels like hiring an employee rather than opening another chat window. The always-on aspect changes everything.",
    author: "u/exec_ai_setup",
    source: "r/OpenClaw",
    sourceUrl: "https://reddit.com/r/OpenClaw",
  },
  {
    text: "Every self-install I've seen has security gaps: exposed credentials, no audit trail, no sandbox. The installation is straightforward; the hardening is where most teams need help.",
    author: "u/infosec_deployer",
    source: "r/selfhosted",
    sourceUrl: "https://reddit.com/r/selfhosted",
  },
  {
    text: "I could have set it up myself but the security hardening alone was worth it. Docker sandboxing, firewall rules, Composio OAuth — that would have taken me a week.",
    author: "u/startup_cto_nyc",
    source: "r/LocalLLaMA",
    sourceUrl: "https://reddit.com/r/LocalLLaMA",
  },
  {
    text: "Your slots are going insanely fast. Already sent referrals to friends.",
    author: "Open source community member",
    source: "Hacker News",
    sourceUrl: "https://news.ycombinator.com",
  },
  {
    text: "You're solving a problem that people like me probably wouldn't take the time to solve ourselves. Especially the ongoing maintenance part.",
    author: "CEO, insurance technology startup",
    source: "OpenClaw Discord",
  },
  {
    text: "Having the bot manage email, calendar, and Slack simultaneously — and coordinate across all three — is genuinely sci-fi adjacent. My EA handles 60% less busywork now.",
    author: "u/founder_leverage",
    source: "r/artificial",
    sourceUrl: "https://reddit.com/r/artificial",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <p className="text-accent-light/60 text-xs tracking-[6px] uppercase">
            What People Are Saying
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-success text-xs font-medium">
              Accepting new clients
            </span>
          </div>
        </motion.div>

        <div className="space-y-6">
          {QUOTES.map((quote, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-l-2 border-white/[0.06] pl-5 py-1"
            >
              <p className="text-muted/80 text-sm leading-relaxed mb-2">
                &ldquo;{quote.text}&rdquo;
              </p>
              <footer className="text-muted/40 text-xs">
                &mdash; {quote.author}
                {quote.sourceUrl ? (
                  <>, <a
                    href={quote.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    {quote.source}
                  </a></>
                ) : (
                  <>, {quote.source}</>
                )}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
