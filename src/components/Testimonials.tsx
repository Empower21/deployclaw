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
    text: "I wasted 80 hours and $800 setting up OpenClaw — so you don't have to.",
    author: "@jordymaui",
    source: "X / Twitter",
    sourceUrl: "https://x.com/jordymaui/status/2023421221744877903",
  },
  {
    text: "Finally set up OpenClaw today and am completely blown away! This is the closest to experiencing an AI enabled future! Truly a game changer!",
    author: "@kailazh",
    source: "X / Twitter",
    sourceUrl: "https://x.com/kailazh/status/2010296143922758133",
  },
  {
    text: "Most people who try OpenClaw bounce off the install, not the functionality. The setup involves Docker, API keys, channel auth, and gateway config.",
    author: "HN commenter",
    source: "Hacker News",
    sourceUrl: "https://news.ycombinator.com/item?id=46838946",
  },
  {
    text: "OpenClaw is absolute game changer for me. The amount of things I done from my phone just during my breakfast is absolutely breathtaking.",
    author: "@chrisdietr",
    source: "X / Twitter",
  },
  {
    text: "Every self-install I've seen has security gaps: exposed credentials, no audit trail, no sandbox. The installation is straightforward; the hardening is where most teams need help.",
    author: "OpenClaw community member",
    source: "r/selfhosted",
    sourceUrl: "https://reddit.com/r/selfhosted",
  },
  {
    text: "I submitted my first app to Apple for review mostly through OpenClaw using Telegram — amazing not having to be at my computer to iterate.",
    author: "Anonymous developer",
    source: "OpenClaw Showcase",
    sourceUrl: "https://openclaw.ai/showcase",
  },
  {
    text: "When it works, it's impressive, but when it fails, it burns time and tokens. Best viewed as a powerful experiment rather than a dependable worker — unless someone hardens it for you.",
    author: "Reviewer",
    source: "Hackceleration",
    sourceUrl: "https://hackceleration.com/openclaw-review/",
  },
  {
    text: "Your context and skills live on YOUR computer, not a walled garden. It's open source. Growing community building skills.",
    author: "OpenClaw community member",
    source: "OpenClaw Shoutouts",
    sourceUrl: "https://openclaw.ai/shoutouts",
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
