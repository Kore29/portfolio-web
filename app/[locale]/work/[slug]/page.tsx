import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  routing.locales.forEach((locale) => {
    projects.forEach((project) => {
      params.push({ locale, slug: project.slug });
    });
  });
  return params;
}

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations("Projects");
  const title = t(`${project.slug}.title`);
  const category = t(`${project.slug}.category`);
  const description = t(`${project.slug}.description`);

  return (
    <main className="min-h-screen">
      <PageHeader title={title.toLowerCase()} marquee={true} />

      <div className="w-full relative aspect-[16/9] overflow-hidden mb-16 rounded-xl border border-zinc-800 shadow-2xl">
        <Image
          src={project.image}
          alt={title}
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
            <h2 className="text-zinc-500 text-size-small uppercase tracking-wider mb-2">
              {t("detail.category")}
            </h2>
            <p className="text-zinc-100 text-size-small">
              {category}
            </p>
          </div>
          <div>
            <h2 className="text-zinc-500 text-size-small uppercase tracking-wider mb-2">
              {t("detail.technologies")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-size-small rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.github && (
            <div>
              <h2 className="text-zinc-500 text-size-small uppercase tracking-wider mb-2">
                {t("detail.repository")}
              </h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-200 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1 text-size-small"
              >
                {t("detail.viewGithub")}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Detailed Description */}
        <div className="lg:col-span-2 flex flex-col gap-6 text-zinc-300 text-size-small font-sans">
          <h2 className="text-zinc-100 font-nohemi text-size-medium tracking-tight mb-2">
            {t("detail.overview")}
          </h2>
          <p>{description}</p>
        </div>
      </div>

      <Contact />
    </main>
  );
}
