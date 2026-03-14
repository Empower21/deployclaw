"use client";

import { motion } from "framer-motion";

const US_CITIES = [
  "Atlanta, GA",
  "Miami, FL",
  "New York, NY",
  "Washington, DC",
  "Charlotte, NC",
  "Houston, TX",
  "Philadelphia, PA",
  "Orlando, FL",
];

const CARIBBEAN = [
  "Kingston, Jamaica",
  "Nassau, Bahamas",
  "Grand Cayman",
  "Port of Spain, Trinidad",
  "Bridgetown, Barbados",
  "Hamilton, Bermuda",
  "Montego Bay, Jamaica",
  "Freeport, Bahamas",
];

export function ServiceAreas() {
  return (
    <section id="areas" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-accent/60 text-xs tracking-[6px] uppercase mb-3">
            Coverage
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            From Buckhead to Montego Bay
          </h2>
          <p className="text-muted text-sm mt-3 max-w-lg mx-auto">
            On-site deployments available across the US East Coast and Caribbean.
            Remote deployments ship anywhere.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* US Cities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-2xl border border-white/5 p-8"
          >
            <h3 className="text-lg font-bold mb-1">United States</h3>
            <p className="text-accent text-xs font-medium mb-5">On-Site Deploy — $4,997</p>
            <div className="grid grid-cols-2 gap-3">
              {US_CITIES.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {city}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Caribbean */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface rounded-2xl border border-white/5 p-8"
          >
            <h3 className="text-lg font-bold mb-1">Caribbean</h3>
            <p className="text-accent text-xs font-medium mb-5">Island Deploy — $5,997</p>
            <div className="grid grid-cols-2 gap-3">
              {CARIBBEAN.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {city}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Remote callout */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted/60 text-sm mt-8"
        >
          Don&apos;t see your city? Remote Deploy ships anywhere for $3,997.
        </motion.p>
      </div>
    </section>
  );
}
