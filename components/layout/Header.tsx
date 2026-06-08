"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/background-aurora";
import Home from "@/components/sections/Home";

export default function Header() {
  return (
    <header id="home" className="relative w-full h-screen h-[100dvh] overflow-hidden scroll-mt-0">
      <AuroraBackground className="bg-zinc-50 dark:bg-neutral-950 text-slate-950 dark:text-white">
        {/* Home Hero Content */}
        <Home />

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
