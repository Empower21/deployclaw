"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

interface CityPageProps {
  city: string;
  data: {
    name: string;
    region: string;
    tag: string;
    description: string;
    highlights: string[];
  };
}

export function CityPage({ city, data }: CityPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full">
        {/* Back link */}
        <a
          href="/"
          className="text-muted/50 text-sm hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back to DeployClaw
        </a>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
        >
          <span className="text-accent-light text-xs font-medium tracking-wide">
            {data.tag}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-black mb-4"
        >
          OpenClaw Deployment in{" "}
          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
            {city}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted text-sm leading-relaxed mb-8"
        >
          {data.description}
        </motion.p>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 mb-10"
        >
          {data.highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm text-muted"
            >
              <span className="text-accent-light text-xs">{"\u2713"}</span>
              {h}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="block text-center bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/20"
        >
          Book a free call &rarr;
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted/40 text-xs mt-4"
        >
          Next available: today &middot; We schedule across all time zones
        </motion.p>
      </div>
    </div>
  );
}
