"use client";

import React from "react";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-5 sticky top-0 z-50 w-full mx-auto xl:w-[1120px]">
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
    </header>
  );
}
