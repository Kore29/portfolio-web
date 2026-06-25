import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function Projects() {
  // Group projects into pairs (rows of two) to preserve design layout weights
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <section id="projects" className="w-full">
      <div className="flex flex-col gap-16 w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-6 w-full">
            {row.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group flex flex-col gap-4 ${project.flexClass}`}
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
                  <h3 className="text-xl md:text-2xl xl:text-3xl text-zinc-100 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm xl:text-base text-zinc-500 mt-1">
                    {project.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
