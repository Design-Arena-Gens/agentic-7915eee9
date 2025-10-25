"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, GalleryVerticalEnd, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="glass rounded-xl px-4 py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              initial={{ rotate: -10, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="p-2 rounded-lg bg-white/5"
            >
              <Sparkles className="size-5 text-white/80" />
            </motion.span>
            <span className="font-semibold tracking-tight">Motion Playground</span>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {[
              { href: "#hero", label: "Hero" },
              { href: "#gallery", label: "Gallery" },
              { href: "#features", label: "Features" },
              { href: "#showcase", label: "Showcase" },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          <motion.a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Rocket className="size-4" />
            Get Started
          </motion.a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
    </header>
  );
}
