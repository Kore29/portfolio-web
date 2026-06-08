"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);

  const text = "I love programming and creating projects that mix frontend, backend, and a touch of artificial intelligence. I’m always experimenting with new things: from building my own operating system with Arch Linux to tinkering with servers and home automation. I enjoy learning while building practical and fun solutions with technology. \n\n I enjoy tackling challenges with creativity and efficiency, always aiming for clean, maintainable code. I’m looking for opportunities where I can learn, innovate, and contribute to exciting tech projects. Outside of coding, I love experimenting with home tech projects and learning new tools just for fun.";

  // Split paragraphs by double newline, cleaning up whitespace
  const paragraphs = text.split(/\n\s*\n/);

  useGSAP(() => {
    const words = containerRef.current?.querySelectorAll(".reveal-word");
    if (!words || words.length === 0) return;

    gsap.fromTo(
      words,
      { 
        opacity: 0.15
      },
      {
        opacity: 1,
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",    // Animates as the container crosses 75% of viewport
          end: "bottom 70%",   // Finishes as it crosses 70%
          scrub: 0.5,          // Smooth scrubbing synced with scroll
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="flex flex-col gap-y-8 w-full py-2"
    >
      {paragraphs.map((para, pIdx) => {
        // Split paragraph into individual words, filtering out any empty spaces
        const words = para.trim().split(/\s+/);
        return (
          <p 
            key={pIdx} 
            className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed tracking-tight text-neutral-900 dark:text-white select-none text-pretty"
          >
            {words.map((word, wIdx) => (
              <span 
                key={wIdx} 
                className="reveal-word inline-block mr-[0.22em]"
                style={{ opacity: 0.15 }} // Initial fallback style to prevent flickers
              >
                {word}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
