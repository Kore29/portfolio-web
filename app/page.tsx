"use client";

import React, { useRef } from "react";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Animate all section headings to fade & slide up
    const headers = mainRef.current?.querySelectorAll("h2");
    headers?.forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="w-full flex flex-col gap-y-36 pb-32">
      {/* About Section (Left-aligned text block within shared grid layout) */}
      <section id="about" className="max-w-6xl mx-auto px-6 scroll-mt-28 w-full">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8 opacity-0">
          About Me
        </h2>
        <div className="max-w-3xl w-full">
          <AboutMe />
        </div>
      </section>

      {/* Projects Section (Wider display for showcase) */}
      <section id="projects" className="max-w-6xl mx-auto px-6 scroll-mt-28 w-full">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-12 opacity-0">
          Featured Projects
        </h2>
        <Projects />
      </section>

      {/* Skills Section (Balanced grid) */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <Skills />
      </div>

      {/* Contact Section (Cozy card area) */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <Contact />
      </div>
    </main>
  );
}

