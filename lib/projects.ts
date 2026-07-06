export interface Project {
  slug: string;
  github?: string;
  image: string;
  tags: string[];
  flexClass: string;
  aspectClass: string;
  categories: string[];
}

export const projects: Project[] = [
  {
    slug: "lattice",
    github: "https://github.com/lattice-product-team/app_lattice_project",
    image: "/work/lattice/lattice-preview.webp",
    tags: [
      "React Native",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MapLibre GL",
    ],
    flexClass: "flex-[1.5]",
    aspectClass: "aspect-[16/11]",
    categories: ["web", "systems"],
  },
  {
    slug: "volta",
    github: "https://github.com/Kore29/volta",
    image: "/work/volta/volta-preview.webp",
    tags: ["Next.js", "WhatsApp-web.js", "Puppeteer", "PostgreSQL", "Docker"],
    flexClass: "flex-1",
    aspectClass: "aspect-[4/5]",
    categories: ["web", "systems"],
  },
  {
    slug: "iter-ecosystem",
    github: "https://github.com/is-product-team/iter-ecosystem-enginy",
    image: "/work/iter/iter-preview.webp",
    tags: [
      "Next.js",
      "Inteligencia Artificial",
      "Procesamiento de Lenguaje Natural",
      "Reconocimiento de Voz",
      "Visión por Computador",
    ],
    flexClass: "flex-1",
    aspectClass: "aspect-[7/8]",
    categories: ["web", "systems", "ai"],
  },
  {
    slug: "muvv",
    github: "https://github.com/Kore29/muvv-realtime-exercice-web",
    image: "/work/muvv/muvv-preview.webp",
    tags: ["Vue.js", "TensorFlow.js", "WebSockets", "Node.js", "MySQL"],
    flexClass: "flex-1",
    aspectClass: "aspect-[6/5]",
    categories: ["web", "ai"],
  },
];
