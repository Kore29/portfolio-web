"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const lenis = useLenis();

  return (
    <header className="bg-[#1a1a1a] fixed top-0 left-0 right-0 z-50 ">
      <nav className="flex items-center justify-between px-8 py-4 text-2xl">
        <Link href="/">martí castaño</Link>
        <Link href="/work">work</Link>
        <Link href="/about">about me</Link>
        <button onClick={() => lenis?.scrollTo("#contacto")}>
          start a project
        </button>
      </nav>
    </header>
  );
}
