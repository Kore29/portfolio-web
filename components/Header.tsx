"use client";

import { useState, useMemo, useEffect } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PhoneCall, MoveRight } from "lucide-react";

export default function Header() {

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "unique", "powerful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [titles]);

  return (
    <header className="relative w-full h-screen h-[100dvh] overflow-hidden">
      <AuroraBackground className="bg-zinc-50 dark:bg-neutral-950 text-slate-950 dark:text-white">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-6 items-center justify-center px-4 max-w-4xl text-center select-none z-10"
        >
          {/* Hero Content */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.15] flex flex-col items-center gap-y-2">
            <span className="text-slate-900 dark:text-white/95 drop-shadow-md">Together we build</span>
            <span className="relative block w-full h-[1.1em] overflow-hidden">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-0 right-0 mx-auto font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600 dark:from-green-400 dark:to-emerald-400 drop-shadow-sm"
                  initial={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  animate={
                    titleNumber === index
                      ? {
                          y: "0%",
                          opacity: 1,
                        }
                      : {
                          y: titleNumber > index ? "-100%" : "100%",
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-slate-700 dark:text-neutral-300 max-w-2xl drop-shadow-md px-2">
            Managing a small business today is already tough. Avoid further
            complications by ditching outdated, tedious trade methods. Our
            goal is to streamline SMB trade, making it easier and faster than
            ever.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto px-4">
            <Button size="lg" className="gap-3 text-slate-900 dark:text-white border-slate-200 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 w-full sm:w-auto transition-transform active:scale-95" variant="outline" asChild>
              <a href="mailto:marticastanorodriguez@gmail.com">
                Jump on a call <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-3 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 w-full sm:w-auto transition-transform active:scale-95 shadow-lg" asChild>
              <a href="#projects">
                See my projects <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Floating Navigation */}
        <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
          <nav
            id="header-nav"
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-6 py-2 rounded-full opacity-90 text-sm font-medium transition-all duration-300 border border-neutral-200/40 dark:border-neutral-800/40 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md shadow-sm"
          >
            <a href="/" className="hover:text-yellow-500 dark:hover:text-green-300 transition-colors">Home</a>
            <a href="#achievements" className="hover:text-yellow-500 dark:hover:text-green-300 transition-colors">Achievements</a>
            <a href="#projects" className="hover:text-yellow-500 dark:hover:text-green-300 transition-colors">Projects</a>
            <a href="#about" className="hover:text-yellow-500 dark:hover:text-green-300 transition-colors">About</a>
            <a href="mailto:marticastanorodriguez@gmail.com" className="hover:text-yellow-500 dark:hover:text-green-300 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Bounce scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-y-2 text-white/40 hover:text-white/70 transition-colors select-none">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll Down</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </AuroraBackground>
    </header>
  );
}
