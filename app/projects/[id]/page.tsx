import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    slug: "wasp",
    title: "WASP - Page Incidents Manager",
    description:
      "Web-based incident management system con Node.js y Express, con arquitectura multi-base de datos y control de acceso basado en roles. Permite gestionar, registrar y seguir incidencias informáticas dentro de una empresa o instituto, con comunicación entre usuarios, técnicos y administradores, además de reportes y estadísticas.",
    link: "",
    github: "https://github.com/inspedralbes/projecte-1dam-24-25-dam1pj2",
    image: "/projects/wasp.webp",
    tags: ["Express", "Bootstrap", "JavaScript", "SQL", "MongoDB", "Docker"],
  },
  {
    slug: "nutrisalut",
    title: "NutriSalut - Page with AI support",
    description:
      "A nutrition website with an integrated AI assistant that provides personalized diet tips and health advice. Includes informational content on nutrition and wellness, with a responsive design and interactive elements.",
    link: "",
    github: "https://github.com/Kore29/Page-NutriSalut",
    image: "/projects/nutrisalut.webp",
    tags: ["Bootstrap", "JavaScript"],
  },
  {
    slug: "whale",
    title: "Whale",
    description:
      "A social network project built in Java with MySQL. Whale is in its early stages and aims to provide essential features such as user profile management, posting, liking, commenting, hashtags, and a simple friends system. The goal is to create a platform inspired by Reddit and Twitter, with room for future improvements and unique features.",
    link: "",
    github: "https://github.com/Kore29/Whale",
    image: "",
    tags: ["Java", "SQL"],
  },
  {
    slug: "web-dev-notes",
    title: "Web Dev Notes",
    description:
      "A structured notes page covering the basics of HTML, CSS, and a bit of JavaScript. Designed as a quick reference guide for beginners or anyone refreshing front-end fundamentals.",
    link: "",
    github: "https://github.com/Kore29/web-dev-notes",
    image: "/projects/pagenotes.webp",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col items-center py-20 px-6">
      <div className="max-w-4xl w-full flex flex-col gap-y-10">
        
        {/* Back Button */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-semibold text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors group"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">&larr;</span>
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="flex flex-col gap-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-white">
            {project.title}
          </h1>
        </div>

        {/* Project Visual Container */}
        <div className="w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md bg-neutral-100 dark:bg-neutral-900/50">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[500px] object-cover object-top"
            />
          ) : (
            <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-blue-600 to-indigo-900 flex flex-col items-center justify-center text-white p-8">
              <span className="text-7xl sm:text-8xl">🐋</span>
              <span className="text-xl sm:text-2xl font-black tracking-widest uppercase mt-4">Whale</span>
            </div>
          )}
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mt-4">
          
          {/* Left Details Block: Info */}
          <div className="md:col-span-2 flex flex-col gap-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              Project Description
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-450 leading-relaxed text-pretty">
              {project.description}
            </p>
          </div>

          {/* Right Details Block: Metadata & Tech */}
          <div className="flex flex-col gap-y-6 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 backdrop-blur-sm shadow-sm">
            
            {/* Tech Stack */}
            <div className="flex flex-col gap-y-3">
              <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tagName) => {
                  const tag = TAGS[tagName];
                  if (!tag) return null;
                  const Icon = tag.icon;
                  return (
                    <span
                      key={tagName}
                      className="flex gap-x-1.5 items-center border bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-full px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {tag.name}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Link Actions */}
            <div className="flex flex-col gap-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                Project Links
              </span>
              <div className="flex flex-col gap-y-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:text-neutral-900 transition-all dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white shadow-sm active:scale-[0.98]"
                  >
                    View Code on GitHub <GithubIcon className="w-4 h-4 ml-2" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 hover:text-neutral-900 transition-all dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-white shadow-sm active:scale-[0.98]"
                  >
                    Preview Live Demo <PreviewIcon className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.slug,
  }));
}
