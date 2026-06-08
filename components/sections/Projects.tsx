"use client";

import React, { useRef } from "react";
import {
  GithubIcon,
  PreviewIcon,
  ExpressIcon,
  BootstrapIcon,
  JavascriptIcon,
  SqlIcon,
  MongodbIcon,
  DockerIcon,
  JavaIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
} from "@/components/Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TAGS: Record<string, { name: string; icon: React.ComponentType<{ className?: string }> }> = {
  Express: { name: "Express", icon: ExpressIcon },
  Bootstrap: { name: "Bootstrap", icon: BootstrapIcon },
  JavaScript: { name: "JavaScript", icon: JavascriptIcon },
  SQL: { name: "SQL", icon: SqlIcon },
  MongoDB: { name: "MongoDB", icon: MongodbIcon },
  Docker: { name: "Docker", icon: DockerIcon },
  Java: { name: "Java", icon: JavaIcon },
  HTML: { name: "HTML", icon: HtmlIcon },
  CSS: { name: "CSS", icon: CssIcon },
  TailWind: { name: "TailWind", icon: TailwindIcon },
};

const PROJECTS = [
  {
    title: "WASP - Page Incidents Manager",
    description:
      "Web-based incident management system con Node.js y Express, con arquitectura multi-base de datos y control de acceso basado en roles. Permite gestionar, registrar y seguir incidencias informáticas dentro de una empresa o instituto, con comunicación entre usuarios, técnicos y administradores, además de reportes y estadísticas.",
    link: "",
    github: "https://github.com/inspedralbes/projecte-1dam-24-25-dam1pj2",
    image: "/projects/wasp.webp",
    tags: ["Express", "Bootstrap", "JavaScript", "SQL", "MongoDB", "Docker"],
  },
  {
    title: "NutriSalut - Page with AI support",
    description:
      "A nutrition website with an integrated AI assistant that provides personalized diet tips and health advice. Includes informational content on nutrition and wellness, with a responsive design and interactive elements.",
    link: "",
    github: "https://github.com/Kore29/Page-NutriSalut",
    image: "/projects/nutrisalut.webp",
    tags: ["Bootstrap", "JavaScript"],
  },
  {
    title: "Whale",
    description:
      "A social network project built in Java with MySQL. Whale is in its early stages and aims to provide essential features such as user profile management, posting, liking, commenting, hashtags, and a simple friends system. The goal is to create a platform inspired by Reddit and Twitter, with room for future improvements and unique features.",
    link: "",
    github: "https://github.com/Kore29/Whale",
    image: "", // We can use an inline placeholder icon or styling for this card
    tags: ["Java", "SQL"],
  },
  {
    title: "Web Dev Notes",
    description:
      "A structured notes page covering the basics of HTML, CSS, and a bit of JavaScript. Designed as a quick reference guide for beginners or anyone refreshing front-end fundamentals.",
    link: "",
    github: "https://github.com/your-username/web-dev-notes",
    image: "/projects/pagenotes.webp",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const articles = containerRef.current?.querySelectorAll(".project-card");
    if (!articles) return;

    articles.forEach((article) => {
      const fromDirection = article.getAttribute("data-direction");
      
      gsap.fromTo(
        article,
        {
          opacity: 0,
          y: 40,
          x: fromDirection === "left" ? -30 : fromDirection === "right" ? 30 : 0,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col gap-y-24 w-full overflow-hidden py-4">
      {PROJECTS.map((project, idx) => {
        const isEven = idx % 2 === 0;
        const direction = isEven ? "left" : "right";

        return (
          <article
            key={idx}
            data-direction={direction}
            className={`project-card flex flex-col gap-8 lg:gap-12 w-full lg:flex-row items-center justify-between ${
              isEven ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image / Graphic Block */}
            <div className="w-full lg:w-3/5 flex-shrink-0">
              {project.image ? (
                <div className="group relative w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-md bg-neutral-100 dark:bg-neutral-900/50 transition duration-500 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700">
                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-neutral-900/5 dark:bg-neutral-900/10 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 sm:h-80 md:h-96 object-cover object-top transition duration-700 ease-out group-hover:scale-103"
                  />
                </div>
              ) : (
                /* Interactive Placeholder for projects without images */
                <div className="w-full h-56 sm:h-80 md:h-96 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30 text-neutral-400 dark:text-neutral-600 p-8 text-center select-none group">
                  <div className="p-4 rounded-full bg-neutral-200/50 dark:bg-neutral-800/40 text-neutral-600 dark:text-neutral-400 mb-4 transition duration-300 group-hover:scale-110">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-neutral-700 dark:text-neutral-300 mb-1">Codebase Only Project</h4>
                  <p className="text-xs max-w-xs leading-relaxed text-neutral-400 dark:text-neutral-500">
                    This project focuses primarily on terminal utilities, algorithms, or backend integrations.
                  </p>
                </div>
              )}
            </div>

            {/* Info / Description Block */}
            <div className="w-full lg:w-2/5 flex flex-col items-start gap-y-5">
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {project.title}
              </h3>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {project.tags.map((tagName, tagIdx) => {
                  const tag = TAGS[tagName];
                  if (!tag) return null;
                  const Icon = tag.icon;
                  return (
                    <li key={tagIdx}>
                      <span className="flex gap-x-1.5 items-center border bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800/80 rounded-full px-2.5 py-1 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                        {tag.name}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed text-pretty">
                {project.description}
              </p>

              {/* Links */}
              <footer className="flex items-center gap-x-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:text-neutral-900 transition-all dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white active:scale-95 shadow-sm"
                  >
                    See Code <GithubIcon className="w-3.5 h-3.5 ml-2" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:text-neutral-900 transition-all dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white active:scale-95 shadow-sm"
                  >
                    Preview <PreviewIcon className="w-3.5 h-3.5 ml-2" />
                  </a>
                )}
              </footer>
            </div>
          </article>
        );
      })}
    </div>
  );
}
