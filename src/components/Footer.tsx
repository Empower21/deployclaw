"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-12 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-3xl mx-auto">
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to Deploy Your
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              {" "}AI Assistant
            </span>
            ?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-md mx-auto">
            Book a free 15-minute strategy call. We&apos;ll scope your needs and
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

        {/* Contact line */}
        <div className="border-t border-white/5 pt-8 mb-6">
          <p className="text-center text-muted/50 text-sm">
            Questions?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-accent-light transition-colors"
            >
              Book a call
            </a>
            {" "}or DM on{" "}
            <a
              href="https://x.com/amdrautomate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-accent-light transition-colors"
            >
              @amdrautomate
            </a>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-5 text-muted/40 text-xs">
            <a href="#" className="hover:text-foreground underline underline-offset-2 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground underline underline-offset-2 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground underline underline-offset-2 transition-colors">
              Affiliates
            </a>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-muted/50 text-xs">Accepting new clients</span>
          </div>
        </div>

        <p className="text-center text-muted/25 text-[10px] mt-8">
          &copy; {new Date().getFullYear()} DeployClaw by AMDR Automate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
