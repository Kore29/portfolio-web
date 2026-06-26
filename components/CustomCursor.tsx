"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with hover support
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position off-screen and hide native cursor where data-cursor is present
    gsap.set(cursor, { xPercent: -50, yPercent: -50, width: 64, height: 64 });

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Handle hover states on elements with data-cursor="project"
    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(cursor, {
        width: 144,
        height: 144,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(cursor, {
        width: 64,
        height: 64,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const updateListeners = () => {
      const targets = document.querySelectorAll('[data-cursor="project"]');
      targets.forEach((target) => {
        target.addEventListener("mouseenter", handleMouseEnter);
        target.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    // Initialize listeners
    updateListeners();

    // Use MutationObserver to handle dynamically loaded elements or route changes
    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
      const targets = document.querySelectorAll('[data-cursor="project"]');
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="fixed top-0 left-0 w-16 h-16 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999] flex items-center justify-center overflow-hidden hidden md:flex"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <span
        className={`text-lg text-black font-sans tracking-wider whitespace-nowrap transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        see more
      </span>
    </div>
  );
}
