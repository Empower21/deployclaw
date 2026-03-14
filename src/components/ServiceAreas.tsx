"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

interface City {
  name: string;
  tag: "In-person & remote" | "Remote";
}

const CITIES: City[] = [
  { name: "Atlanta, GA", tag: "In-person & remote" },
  { name: "Miami, FL", tag: "In-person & remote" },
  { name: "Kingston, Jamaica", tag: "In-person & remote" },
  { name: "New York City", tag: "Remote" },
  { name: "Washington, DC", tag: "Remote" },
  { name: "Charlotte, NC", tag: "Remote" },
  { name: "Houston, TX", tag: "Remote" },
  { name: "Nassau, Bahamas", tag: "Remote" },
  { name: "London, UK", tag: "Remote" },
  { name: "Toronto, Canada", tag: "Remote" },
];

export function ServiceAreas() {
  return (
    <section id="areas" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent/60 text-xs tracking-[6px] uppercase mb-3">
            Available Worldwide
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            We Come to You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CITIES.map((city, i) => (
            <motion.a
              key={city.name}
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/[0.06] hover:border-white/15 bg-surface/50 transition-all group cursor-pointer"
            >
              <span className="font-semibold text-sm group-hover:text-foreground transition-colors">
                {city.name}
              </span>
              <span
                className={`text-[11px] px-2.5 py-1 rounded-full ${
                  city.tag === "In-person & remote"
                    ? "text-accent/80 bg-accent/10 border border-accent/20"
                    : "text-muted/60 bg-white/[0.03] border border-white/[0.06]"
                }`}
              >
                {city.tag}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted/50 text-sm mt-8"
        >
          We deploy remotely worldwide. Don&apos;t see your city?{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
          >
            Book a call
          </a>
          {" "}&mdash; we&apos;re happy to help.
        </motion.p>
      </div>
    </section>
  );
}
