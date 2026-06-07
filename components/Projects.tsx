import React from "react";
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
} from "./Icons";

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
    image: "",
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
  return (
    <div className="flex flex-col gap-y-16">
      {PROJECTS.map((project, idx) => (
        <article key={idx} className="flex flex-col items-start gap-y-6">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
            {project.title}
          </h3>
          
          {project.image && (
            <div className="w-full overflow-hidden rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-96 object-cover object-top transition duration-500 hover:scale-105"
              />
            </div>
          )}

          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {project.tags.map((tagName, tagIdx) => {
              const tag = TAGS[tagName];
              if (!tag) return null;
              const Icon = tag.icon;
              return (
                <li key={tagIdx}>
                  <span className="flex gap-x-2 items-center border bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 rounded-full px-3 py-1 text-xs font-semibold text-neutral-800 dark:text-neutral-300">
                    <Icon className="w-4 h-4" />
                    {tag.name}
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="text-neutral-700 dark:text-neutral-400 leading-relaxed text-pretty">
            {project.description}
          </p>

          <footer className="flex items-center gap-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-700"
              >
                See Code <GithubIcon className="w-4 h-4 ml-2" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-100 transition dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 dark:hover:bg-neutral-700"
              >
                Preview <PreviewIcon className="w-4 h-4 ml-2" />
              </a>
            )}
          </footer>
        </article>
      ))}
    </div>
  );
}
