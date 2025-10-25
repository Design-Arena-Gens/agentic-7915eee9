"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ChevronRight, Camera, Layers, ScrollText, Shapes, Zap } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const parallaxX = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main className="relative mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section id="hero" ref={heroRef} className="relative pt-40 pb-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            aria-hidden
            className="absolute -top-24 -left-16 size-[40rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 60%)", y: parallaxY }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-24 top-20 size-[36rem] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.22), transparent 60%)", x: parallaxX }}
          />
        </div>

        <div className="text-center flex flex-col items-center gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide">
              <Sparkles className="size-3" />
              LIVE DEMO
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-3xl grad"
          >
            Motion that delights, informs, and performs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-white/70 max-w-2xl text-balance"
          >
            A highly-detailed playground of animation techniques: parallax, scroll reveals, physics-based interactions, morphing, and tasteful micro-animations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <a href="#showcase" className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 hover:bg-white/25 transition-colors">
              Explore Showcase <ChevronRight className="size-4" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 hover:bg-white/5 transition-colors">
              Learn Techniques
            </a>
          </motion.div>
        </div>

        {/* Floating cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{ Icon: Camera, title: "Parallax", desc: "Depth through layered motion" }, { Icon: Layers, title: "Morph", desc: "Fluid shape transitions" }, { Icon: ScrollText, title: "Scroll", desc: "Storytelling on scroll" }].map((card, index) => (
            <motion.div
              key={card.title}
              className="glass rounded-xl p-5"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/10">
                  <card.Icon className="size-5" />
                </span>
                <div>
                  <p className="font-medium">{card.title}</p>
                  <p className="text-sm text-white/60">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE GRID */}
      <section id="features" className="py-20">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <motion.div className="glass rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold mb-2">Scroll Reveal Orchestrations</h2>
            <p className="text-white/70 mb-6">Batch entrances with staggering and spring physics for a buttery, guided reveal.</p>
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-24 rounded-xl bg-white/5"
                  initial={{ opacity: 0, y: 24, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 300, damping: 22 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div className="glass rounded-2xl p-6 overflow-hidden relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-semibold mb-2">Magnetic CTA</h2>
            <p className="text-white/70 mb-6">Buttons that attract the cursor subtly, hinting interactivity without being distracting.</p>
            <MagneticButton>Hover me</MagneticButton>
            <div className="absolute -bottom-10 -right-10 opacity-30">
              <Zap className="size-40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="showcase" className="py-20">
        <h2 className="text-3xl font-semibold mb-8">Showcase</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <motion.article
              key={item.title}
              className="glass rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.98, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="aspect-video relative">
                <motion.div
                  className="absolute inset-0"
                  initial={{ backgroundPosition: "0% 50%" }}
                  whileHover={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  style={{ backgroundImage: item.gradient, backgroundSize: "200% 100%" }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="get-started" className="py-16">
        <div className="glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-white/70">Ready to add motion to your product?</p>
            <p className="text-lg font-medium">Clone this template and customize.</p>
          </div>
          <a href="https://nextjs.org" className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-4 py-2 hover:bg-white/25 transition-colors">
            Get Started <ChevronRight className="size-4" />
          </a>
        </div>
        <p className="text-center text-xs text-white/40 mt-6">Built with Next.js, Tailwind v4, and Framer Motion.</p>
      </footer>
    </main>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <motion.button
      ref={ref}
      className="relative inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm hover:bg-white/15 transition-colors overflow-hidden"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.setProperty("--tx", `${x / 12}px`);
        el.style.setProperty("--ty", `${y / 12}px`);
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty("--tx", `0px`);
        el.style.setProperty("--ty", `0px`);
      }}
      style={{ transform: "translate(var(--tx, 0px), var(--ty, 0px))" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

const showcaseItems = [
  {
    title: "Glass Morphism",
    desc: "Frosted panels over animated gradients.",
    gradient: "linear-gradient(90deg, rgba(124,58,237,0.5), rgba(6,182,212,0.5))",
  },
  {
    title: "Parallax Layers",
    desc: "Depth with reactive motion.",
    gradient: "linear-gradient(90deg, rgba(14,165,233,0.5), rgba(236,72,153,0.5))",
  },
  {
    title: "Reveal Grid",
    desc: "Staggered entries for guided focus.",
    gradient: "linear-gradient(90deg, rgba(34,197,94,0.5), rgba(234,179,8,0.5))",
  },
  {
    title: "Magnetic CTA",
    desc: "Cursor-aware interactions.",
    gradient: "linear-gradient(90deg, rgba(236,72,153,0.5), rgba(251,146,60,0.5))",
  },
  {
    title: "Morphing Shapes",
    desc: "Organic transitions.",
    gradient: "linear-gradient(90deg, rgba(168,85,247,0.5), rgba(99,102,241,0.5))",
  },
  {
    title: "Kinetic Typography",
    desc: "Type that moves with meaning.",
    gradient: "linear-gradient(90deg, rgba(20,184,166,0.5), rgba(59,130,246,0.5))",
  },
] as const;
