"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/data/pricing";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5">
          <span className="text-accent-light text-2xl font-black tracking-tight">
            Deploy
          </span>
          <span className="text-foreground text-2xl font-black tracking-tight">
            Claw
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#pricing" className="hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#areas" className="hover:text-foreground transition-colors">
            Service Areas
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Book Now
        </a>
      </div>
    </motion.nav>
  );
}
