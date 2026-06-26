"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/lib/projects";

const categories = ["all", "web", "systems", "ai"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.categories.includes(selectedCategory));

  return (
    <main className="min-h-screen">
      <PageHeader title="selected work" />

      {/* Inline category filters */}
      <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 pb-10 text-size-medium font-sans">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`transition-colors font-normal cursor-pointer ${
              selectedCategory === cat
                ? "text-zinc-100 font-normal"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Symmetric 2-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full mb-32">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            data-cursor="project"
            className="group flex flex-col gap-4 w-full md:cursor-none"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-zinc-800 shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-zinc-100 font-normal tracking-tight text-size-medium">
                {project.title.toLowerCase()}
              </h3>
              <p className="text-zinc-500 text-size-small font-sans">
                {project.category.toLowerCase()}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Contact />
    </main>
  );
}
