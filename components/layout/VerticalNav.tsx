"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SEGMENTS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = ["home", "about", "projects", "contact"];

export default function VerticalNav() {
  const [milestonePercentages, setMilestonePercentages] = useState<number[]>([0, 0.25, 0.5, 0.75, 1.0]);
  const [scrollYProgress, setScrollYProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const elements = SECTION_IDS.map((id) => document.getElementById(id));
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const maxScroll = docHeight - viewportHeight;

      if (maxScroll <= 0) return;

      // 1. Get absolute offset positions of sections
      const offsets = SECTION_IDS.map((id, index) => {
        if (index === 0) return 0;
        const el = elements[index];
        if (!el) {
          // Distribute evenly if elements are not rendered yet
          return maxScroll * (index / (SECTION_IDS.length - 1));
        }
        return el.offsetTop;
      });

      // Force last offset to match exactly the scrollable height
      offsets[offsets.length - 1] = maxScroll;

      // 2. Map offsets to normalized percentages (0 to 1)
      const percentages = offsets.map((offset) => Math.min(1, Math.max(0, offset / maxScroll)));
      
      // Save 6 milestones (0.0 to 1.0)
      setMilestonePercentages([...percentages, 1.0]);

      // 3. Set overall scroll progress (0 to 1)
      setScrollYProgress(Math.min(1, Math.max(0, scrollY / maxScroll)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    // Initial calculation
    handleScroll();

    // Re-run after a small delay to ensure Next.js has completed layout renders
    const timer = setTimeout(handleScroll, 150);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Find which segment range contains the current scroll position
  let activeSegmentIndex = 0;
  for (let i = 0; i < SEGMENTS.length; i++) {
    const start = milestonePercentages[i];
    const end = milestonePercentages[i + 1] ?? 1.0;
    if (scrollYProgress >= start && scrollYProgress <= end) {
      activeSegmentIndex = i;
      break;
    }
  }

  // Force last segment if user is at the very bottom
  if (scrollYProgress >= 0.99) {
    activeSegmentIndex = SEGMENTS.length - 1;
  }

  const BAR_HEIGHT = 440; // Total height of progress bar in pixels

  return (
    <div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end pointer-events-none">
      <div 
        className="relative w-[180px] flex justify-end pointer-events-auto"
        style={{ height: `${BAR_HEIGHT}px` }}
      >
        
        {/* Background Unfilled Line */}
        <div className="absolute right-[5px] top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800/60 rounded-full" />

        {/* Proportional Progress Fill */}
        <div className="absolute right-[5px] top-0 bottom-0 w-[2px] rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-neutral-900 dark:bg-white origin-top"
            style={{ height: "100%" }}
            animate={{ scaleY: scrollYProgress }}
            transition={{ type: "spring", stiffness: 85, damping: 15, mass: 0.5 }}
          />
        </div>

        {/* 5 Milestone boundaries (Plus indicators placed proportionally at the start of each section) */}
        {SECTION_IDS.map((sectionId, idx) => {
          const percentage = milestonePercentages[idx] ?? 0;
          const isReached = scrollYProgress >= percentage - 0.01;

          return (
            <motion.div
              key={sectionId}
              className="absolute right-0 flex items-center cursor-pointer py-1 z-10"
              animate={{
                top: `${percentage * BAR_HEIGHT}px`,
              }}
              style={{
                y: "-50%",
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              onClick={() => scrollToSection(sectionId)}
            >
              {/* Plus indicator mark */}
              <div
                className={`w-[12px] h-[12px] flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  isReached
                    ? "text-neutral-900 dark:text-white font-bold scale-110"
                    : "text-neutral-300 dark:text-neutral-700 hover:text-neutral-500"
                }`}
              >
                +
              </div>
            </motion.div>
          );
        })}

        {/* 5 Segment Labels (Placed in the middle of each bar segment proportionally) */}
        {SEGMENTS.map((segment, index) => {
          const isActive = activeSegmentIndex === index;
          
          const startPct = milestonePercentages[index] ?? 0;
          const endPct = milestonePercentages[index + 1] ?? 1.0;
          const centerPct = (startPct + endPct) / 2;

          return (
            <motion.div
              key={segment.id}
              className="absolute right-0 flex items-center cursor-pointer group/label justify-end w-full"
              animate={{
                top: `${centerPct * BAR_HEIGHT}px`,
              }}
              style={{
                y: "-50%",
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              onClick={() => scrollToSection(segment.id)}
            >
              {/* Label container next to the bar */}
              <div className="relative mr-5 flex flex-col items-end select-none">
                <motion.span
                  className={`text-xs whitespace-nowrap px-2.5 py-1 rounded border transition-all duration-300 ${
                    isActive
                      ? "font-bold text-neutral-900 dark:text-white bg-white/95 dark:bg-neutral-900/95 border-neutral-200 dark:border-neutral-800 shadow-sm opacity-100"
                      : "font-medium text-neutral-400 dark:text-neutral-500 bg-white/50 dark:bg-neutral-900/50 border-neutral-100 dark:border-neutral-900 opacity-0 group-hover/label:opacity-100 pointer-events-none"
                  }`}
                  animate={{
                    x: isActive ? 0 : 6,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                >
                  {segment.label}
                </motion.span>
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
