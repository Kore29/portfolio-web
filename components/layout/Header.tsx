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

      </AuroraBackground>
    </header>
  );
}
