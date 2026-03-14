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
    text: "Finally set up OpenClaw today and am completely blown away! This is the closest to experiencing an AI enabled future! Truly a game changer!",
    author: "@kailazh",
    source: "X / Twitter",
    sourceUrl: "https://x.com/kailazh/status/2010296143922758133",
  },
  {
    text: "OpenClaw is absolute game changer for me. The amount of things I done from my phone just during my breakfast is absolutely breathtaking.",
    author: "@chrisdietr",
    source: "X / Twitter",
  },
  {
    text: "I submitted my first app to Apple for review mostly through OpenClaw using Telegram — amazing not having to be at my computer to iterate.",
    author: "Anonymous developer",
    source: "OpenClaw Showcase",
    sourceUrl: "https://openclaw.ai/showcase",
  },
  {
    text: "Your context and skills live on YOUR computer, not a walled garden. It's open source. Growing community building skills.",
    author: "OpenClaw community member",
    source: "OpenClaw Shoutouts",
    sourceUrl: "https://openclaw.ai/shoutouts",
  },
  {
    text: "Finally got around to fully configuring my OpenClaw instance, and it's so so good. Even at the most basic level, being able to spin up agents to implement features from my phone is mind-blowing.",
    author: "@cnlinkcnlink",
    source: "X / Twitter",
  },
  {
    text: "My personal bot has replaced at least half the apps I used to operate myself.",
    author: "OpenClaw user",
    source: "OpenClaw Showcase",
    sourceUrl: "https://openclaw.ai/showcase",
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
            From the OpenClaw Community
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
