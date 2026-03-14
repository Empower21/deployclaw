"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

export function Footer() {
  return (
    <footer className="relative py-20 px-6">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Deploy Your
            <span className="text-accent"> AI Assistant</span>?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-md mx-auto">
            Book a free 30-minute consultation. We&apos;ll scope your needs and
            have you live before your next board meeting.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
          >
            Book Your Deploy Now
          </a>
        </motion.div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-accent text-lg font-black">Deploy</span>
              <span className="text-foreground text-lg font-black">Claw</span>
            </div>
            <p className="text-muted/40 text-xs">
              &copy; {new Date().getFullYear()} DeployClaw. All rights reserved.
            </p>
            <div className="flex gap-5 text-muted/40 text-sm">
              <a
                href="https://x.com/deployclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                X / Twitter
              </a>
              <a
                href="https://linkedin.com/company/deployclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
