import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="pt-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group mb-8 text-lg"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          back to work
        </Link>
      </div>

      <PageHeader title={project.title.toLowerCase()} />

      <div className="w-full relative aspect-[16/9] overflow-hidden mb-16 rounded-xl border border-zinc-800 shadow-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
        {/* Project Info Panel */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div>
            <h2 className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
              Category
            </h2>
            <p className="text-zinc-100 text-lg">
              {project.category}
            </p>
          </div>
          <div>
            <h2 className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.github && (
            <div>
              <h2 className="text-zinc-500 text-sm uppercase tracking-wider mb-2">
                Code Repository
              </h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-200 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1"
              >
                view on github
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Detailed Description */}
        <div className="lg:col-span-2 flex flex-col gap-6 text-zinc-300 text-lg leading-relaxed font-sans">
          <h2 className="text-zinc-100 font-nohemi text-2xl tracking-tight mb-2">
            Project Overview
          </h2>
          <p>{project.description}</p>
        </div>
      </div>

      <Contact />
    </main>
  );
}
