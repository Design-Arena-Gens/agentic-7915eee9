"use client";

import { AnimatePresence, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </MotionConfig>
  );
}
