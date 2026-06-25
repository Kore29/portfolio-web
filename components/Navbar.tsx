"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const lenis = useLenis();

  return (
    <header className="bg-[#1a1a1a] fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto w-full max-w-[1440px] flex items-center justify-between py-4 px-4 md:px-8 lg:px-12 text-2xl tracking-tight">
        <Link href="/" className="hover:text-zinc-400 transition-colors">martí castaño</Link>
        <Link href="/work" className="hover:text-zinc-400 transition-colors">work</Link>
        <Link href="/about" className="hover:text-zinc-400 transition-colors">about me</Link>
        <button 
          onClick={() => lenis?.scrollTo("#contact")}
          className="hover:text-zinc-400 transition-colors"
        >
          start a project
        </button>
      </nav>
    </header>
  );
}
