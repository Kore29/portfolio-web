export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
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
    title: "Lattice",
    category:
      "Sistema de mapas y navegación inteligente para festivales y eventos masivos.",
    description:
      "Es una plataforma diseñada para que los asistentes a grandes festivales y eventos no se pierdan y los organizadores puedan gestionar todo sin problemas. Incluye una aplicación móvil con un mapa interactivo muy fluido que guía a las personas en tiempo real indicando rutas accesibles a pie. También cuenta con un panel web para los organizadores, que funciona como un centro de control desde donde pueden ver mapas de calor con las zonas más aglomeradas y coordinar los accesos de forma eficiente.",
    github: "https://github.com/lattice-product-team/app_lattice_project",
    image: "/work/lattice/Lattice.jpg",
    tags: [
      "React Native",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MapLibre GL",
    ],
    flexClass: "flex-[1.5]",
    aspectClass: "aspect-16/11",
    categories: ["web", "systems"],
  },
  {
    slug: "volta",
    title: "Volta",
    category:
      "Gestión de citas y envío automático de recordatorios por WhatsApp para negocios.",
    description:
      "Es una herramienta digital pensada para que los comercios locales y empresas gestionen de forma centralizada sus calendarios, clientes y los servicios que ofrecen. Su principal ventaja es que cuenta con un asistente automático que revisa la agenda y envía recordatorios de las citas a los clientes directamente por WhatsApp. Además, incluye un sistema de seguridad legal que detecta si un cliente ha dado su permiso para recibir mensajes, asegurando que el negocio cumpla estrictamente con las leyes de protección de datos.",
    github: "https://github.com/Kore29/volta",
    image: "/work/volta/LSVZUytX1xG.png",
    tags: ["Next.js", "WhatsApp-web.js", "Puppeteer", "PostgreSQL", "Docker"],
    flexClass: "flex-1",
    aspectClass: "aspect-4/5",
    categories: ["web", "systems"],
  },
  {
    slug: "iter-ecosystem",
    title: "Iter Ecosystem",
    category:
      "Plataforma inteligente para la organización y evaluación de talleres educativos.",
    description:
      "Un sistema integral creado para automatizar por completo la organización de cursos y talleres escolares. Cuenta con herramientas inteligentes que distribuyen de forma automática y óptima a los alumnos en las clases. También incluye tecnologías avanzadas capaces de escuchar la voz de los estudiantes para evaluar sus competencias e incluso un lector visual inteligente que comprueba de forma automática que las firmas en los convenios educativos impresos sean correctas.",
    github: "https://github.com/is-product-team/iter-ecosystem-enginy",
    image: "/work/iter/Iter.jpg",
    tags: [
      "Next.js",
      "Inteligencia Artificial",
      "Procesamiento de Lenguaje Natural",
      "Reconocimiento de Voz",
      "Visión por Computador",
    ],
    flexClass: "flex-1",
    aspectClass: "aspect-7/8",
    categories: ["web", "systems", "ai"],
  },
  {
    slug: "muvv",
    title: "Muvv",
    category:
      "Aplicación web de ejercicio y fitness multijugador en tiempo real.",
    description:
      "Es un juego y red social enfocado al deporte en el que los usuarios pueden entrenar y competir con amigos desde casa. Al activar la cámara web, el sistema utiliza una tecnología inteligente que reconoce los movimientos del cuerpo para contar las flexiones o sentadillas de forma interactiva. Permite crear salas virtuales para hacer ejercicio en grupo, seguir rutinas prediseñadas, ver un historial de mejoras del perfil y competir en clasificaciones globales en tiempo real.",
    github: "https://github.com/Kore29/muvv-realtime-exercice-web",
    image: "/work/muvv/Muvv.jpg",
    tags: ["Vue.js", "TensorFlow.js", "WebSockets", "Node.js", "MySQL"],
    flexClass: "flex-1",
    aspectClass: "aspect-6/5",
    categories: ["web", "ai"],
  },
];
