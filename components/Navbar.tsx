"use client";

import { useState, useEffect } from "react";
import TransitionLink from "./TransitionLink";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Auto-close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Auto-close menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-close menu on window scroll
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => {
      setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleContactClick = () => {
    closeMenu();
    // Wait a brief moment for the drawer to close before scrolling
    setTimeout(() => {
      lenis?.scrollTo("#contact");
    }, 300);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none">
        <nav className="mx-auto w-full max-w-480 flex items-center justify-between py-4 px-4 md:px-8 lg:px-12 text-size-small text-white pointer-events-auto">
          {/* Logo */}
          <TransitionLink
            href="/"
            onClick={closeMenu}
            className="hover:text-zinc-400 transition-colors z-50 pointer-events-auto"
          >
            martí castaño
          </TransitionLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <TransitionLink href="/work" className="hover:text-zinc-400 transition-colors">
              work
            </TransitionLink>
            <TransitionLink href="/about" className="hover:text-zinc-400 transition-colors">
              about me
            </TransitionLink>
            <button
              onClick={() => lenis?.scrollTo("#contact")}
              className="hover:text-zinc-400 transition-colors cursor-pointer"
            >
              start a project
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-zinc-400 transition-colors cursor-pointer focus:outline-none z-50 pointer-events-auto"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Partial Dropdown Mobile Menu (Top Slide Down) */}
      <div
        className={`fixed top-0 left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-md border-b border-zinc-900/80 shadow-2xl z-40 md:hidden flex flex-col pt-20 pb-8 px-6 transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 font-sans text-xl tracking-wide text-zinc-300">
          <TransitionLink
            href="/work"
            onClick={closeMenu}
            className="hover:text-white transition-colors border-b border-zinc-800/30 pb-2"
          >
            work
          </TransitionLink>
          <TransitionLink
            href="/about"
            onClick={closeMenu}
            className="hover:text-white transition-colors border-b border-zinc-800/30 pb-2"
          >
            about me
          </TransitionLink>
          <button
            onClick={handleContactClick}
            className="text-left hover:text-white transition-colors pb-2 cursor-pointer"
          >
            start a project
          </button>
        </div>
      </div>
    </>
  );
}
