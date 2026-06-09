"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Floating, FloatingElement } from "@/components/ui/parallax-floating";

const PROJECTS = [
  {
    slug: "wasp",
    title: "WASP - Page Incidents Manager",
    description:
      "Web-based incident management system con Node.js y Express, con arquitectura multi-base de datos y control de acceso basado en roles. Permite gestionar, registrar y seguir incidencias informáticas dentro de una empresa o instituto, con comunicación entre usuarios, técnicos y administradores, además de reportes y estadísticas.",
    image: "/projects/wasp.webp",
  },
  {
    slug: "nutrisalut",
    title: "NutriSalut - Page with AI support",
    description:
      "A nutrition website with an integrated AI assistant that provides personalized diet tips and health advice. Includes informational content on nutrition and wellness, with a responsive design and interactive elements.",
    image: "/projects/nutrisalut.webp",
  },
  {
    slug: "whale",
    title: "Whale",
    description:
      "A social network project built in Java with MySQL. Whale is in its early stages and aims to provide essential features such as user profile management, posting, liking, commenting, hashtags, and a simple friends system. The goal is to create a platform inspired by Reddit and Twitter, with room for future improvements and unique features.",
    image: "",
  },
  {
    slug: "web-dev-notes",
    title: "Web Dev Notes",
    description:
      "A structured notes page covering the basics of HTML, CSS, and a bit of JavaScript. Designed as a quick reference guide for beginners or anyone refreshing front-end fundamentals.",
    image: "/projects/pagenotes.webp",
  },
];

export default function Projects() {
  return (
    <div className="w-full py-12">
      {/* Desktop Mode - Floating Parallax Showcase */}
      <div className="hidden lg:flex relative w-full h-[650px] overflow-hidden items-center justify-center select-none">
        
        {/* Central Title Statement */}
        <motion.div
          className="z-50 text-center items-center flex flex-col pointer-events-none select-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.88, delay: 0.5 }}
        >
          <h2 className="text-6xl md:text-8xl z-50 text-neutral-900 dark:text-white font-serif italic tracking-tight">
            projects.
          </h2>
        </motion.div>

        {/* Floating Canvas */}
        <Floating sensitivity={-0.8} className="overflow-hidden">
          
          {/* Slot 0: WASP (Small Square, top-left) */}
          <FloatingElement depth={0.5} className="top-[14%] left-[10%]">
            <Link href="/projects/wasp" className="block">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                src={PROJECTS[0].image}
                alt={PROJECTS[0].title}
                className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-none shadow-md border border-neutral-200/10 hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </Link>
          </FloatingElement>

          {/* Slot 1: NutriSalut (Medium Square, top-mid-left) */}
          <FloatingElement depth={1} className="top-[15%] left-[28%]">
            <Link href="/projects/nutrisalut" className="block">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                src={PROJECTS[1].image}
                alt={PROJECTS[1].title}
                className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-none shadow-md border border-neutral-200/10 hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </Link>
          </FloatingElement>

          {/* Slot 2: Whale (Vertical Rectangle, top-mid-right) */}
          <FloatingElement depth={2} className="top-[10%] left-[58%]">
            <Link href="/projects/whale" className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-28 h-40 md:w-40 md:h-52 bg-gradient-to-br from-blue-600 to-indigo-900 flex flex-col items-center justify-center text-white hover:scale-105 duration-200 cursor-pointer transition-transform rounded-none shadow-lg border border-white/10 p-3"
              >
                <span className="text-4xl md:text-5xl">🐋</span>
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mt-2">Whale</span>
              </motion.div>
            </Link>
          </FloatingElement>

          {/* Slot 3: Web Dev Notes (Medium-Large Square, top-right) */}
          <FloatingElement depth={1} className="top-[12%] left-[78%]">
            <Link href="/projects/web-dev-notes" className="block">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                src={PROJECTS[3].image}
                alt={PROJECTS[3].title}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-none shadow-md border border-neutral-200/10 hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </Link>
          </FloatingElement>

          {/* Slot 4: WASP (Large Square, mid-left) */}
          <FloatingElement depth={1} className="top-[42%] left-[6%]">
            <Link href="/projects/wasp" className="block">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                src={PROJECTS[0].image}
                alt={PROJECTS[0].title}
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-none shadow-md border border-neutral-200/10 hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </Link>
          </FloatingElement>

          {/* Slot 5: Web Dev Notes (Vertical Rectangle, bottom-right) */}
          <FloatingElement depth={2} className="top-[68%] left-[74%]">
            <Link href="/projects/web-dev-notes" className="block">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                src={PROJECTS[3].image}
                alt={PROJECTS[3].title}
                className="w-28 h-28 md:w-36 md:h-48 object-cover rounded-none shadow-md border border-neutral-200/10 hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </Link>
          </FloatingElement>

          {/* Slot 6: Whale (Large Vertical Card, bottom-left) */}
          <FloatingElement depth={4} className="top-[66%] left-[18%]">
            <Link href="/projects/whale" className="block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-40 md:w-52 h-44 md:h-56 bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-center text-white hover:scale-105 duration-200 cursor-pointer transition-transform rounded-none shadow-lg border border-white/10 p-4"
              >
                <span className="text-5xl">🐋</span>
                <span className="text-xs font-bold tracking-widest uppercase mt-2">Whale App</span>
              </motion.div>
            </Link>
          </FloatingElement>

          {/* Slot 7: NutriSalut (Medium-Large Square, bottom-mid-right) */}
          <FloatingElement depth={1} className="top-[76%] left-[46%]">
            <Link href="/projects/nutrisalut" className="block">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src={PROJECTS[1].image}
                alt={PROJECTS[1].title}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-none shadow-md border border-neutral-200/10 hover:scale-105 duration-200 cursor-pointer transition-transform"
              />
            </Link>
          </FloatingElement>
        </Floating>
      </div>

      {/* Mobile Mode - Standard Responsive Grid/List */}
      <div className="flex lg:hidden flex-col gap-y-8 w-full py-4">
        {PROJECTS.map((project, idx) => (
          <Link href={`/projects/${project.slug}`} key={idx} className="block group">
            <div
              className="flex flex-col gap-y-4 p-5 rounded-none border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950/20 shadow-sm active:scale-98 transition-transform"
            >
              {/* Visual Thumbnail */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 sm:h-52 object-cover rounded-none border border-neutral-100 dark:border-neutral-800"
                />
              ) : (
                <div className="w-full h-44 sm:h-52 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-none flex flex-col items-center justify-center text-white p-4">
                  <span className="text-4xl">🐋</span>
                  <span className="text-xs font-bold tracking-widest uppercase mt-2">Whale</span>
                </div>
              )}

              {/* Info details */}
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-yellow-500 dark:group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed text-pretty mt-1">
                  {project.description}
                </p>
                <span className="text-xs font-semibold text-yellow-500 dark:text-green-400 mt-2 block group-hover:underline">
                  View details &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
