"use client";

import { useRef } from "react";
import TransitionLink from "@/components/TransitionLink";
import Image from "next/image";
import { projects } from "@/lib/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Group projects into pairs (rows of two) to preserve design layout weights
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  useGSAP(
    () => {
      // Only run on desktop/tablet devices with 2-column layout
      if (window.matchMedia("(min-width: 768px)").matches) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        // Left column projects slide up slightly on scroll down
        tl.fromTo(
          ".project-left",
          { y: 80 },
          { y: -80, ease: "none" },
          0
        );

        // Right column projects slide down slightly on scroll down
        tl.fromTo(
          ".project-right",
          { y: -80 },
          { y: 80, ease: "none" },
          0
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section id="projects" className="w-full" ref={containerRef}>
      <div className="flex flex-col gap-16 w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-6 w-full">
            {row.map((project, colIndex) => (
              <TransitionLink
                key={project.slug}
                href={`/work/${project.slug}`}
                data-cursor="project"
                className={`group flex flex-col gap-4 md:cursor-none ${project.flexClass} ${
                  colIndex === 0 ? "project-left" : "project-right"
                }`}
              >
                <div className={`relative w-full ${project.aspectClass} overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-zinc-100 text-size-medium">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-size-small mt-1">
                    {project.category}
                  </p>
                </div>
              </TransitionLink>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
