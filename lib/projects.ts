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
    slug: "wasp",
    title: "WASP",
    category: "Incident Management System",
    description: "Web-based incident management system with Node.js and Express, with a multi-database architecture and role-based access control. It allows managing, recording, and tracking IT incidents within a company or institute, with communication between users, technicians, and administrators, as well as reports and statistics.",
    github: "https://github.com/inspedralbes/projecte-1dam-24-25-dam1pj2",
    image: "/work/lattice/BenditoMockup-Free-Phone.jpg",
    tags: ["Express", "Bootstrap", "JavaScript", "SQL", "MongoDB", "Docker"],
    flexClass: "flex-[1.5]",
    aspectClass: "aspect-16/11",
    categories: ["web", "systems"],
  },
  {
    slug: "nutrisalut",
    title: "NutriSalut",
    category: "AI Nutrition Support",
    description: "A nutrition website with an integrated AI assistant that provides personalized diet tips and health advice. Includes informational content on nutrition and wellness, with a responsive design and interactive elements.",
    github: "https://github.com/Kore29/Page-NutriSalut",
    image: "/work/volta/Bendito_Mockup-PSCv1-Free-MacBook_Pro.jpg",
    tags: ["Bootstrap", "JavaScript", "OpenAI API"],
    flexClass: "flex-1",
    aspectClass: "aspect-4/5",
    categories: ["web", "ai"],
  },
  {
    slug: "whale",
    title: "Whale",
    category: "Social Network",
    description: "A social network project built in Java with MySQL. Whale provides essential features such as user profile management, posting, liking, commenting, hashtags, and a simple friends system. The goal is to create a platform inspired by Reddit and Twitter, with room for future improvements.",
    github: "https://github.com/Kore29/Whale",
    image: "/work/iter/BenditoMockup-Free-Macbook_Pro-01.jpg",
    tags: ["Java", "SQL", "Swing / CLI", "Git"],
    flexClass: "flex-1",
    aspectClass: "aspect-7/8",
    categories: ["systems"],
  },
  {
    slug: "web-dev-notes",
    title: "Web Dev Notes",
    category: "Educational Reference",
    description: "A structured notes page covering the basics of HTML, CSS, and a bit of JavaScript. Designed as a quick reference guide for beginners or anyone refreshing front-end fundamentals.",
    github: "https://github.com/Kore29/web-dev-notes",
    image: "/work/muvv/muvv-mockup.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    flexClass: "flex-1",
    aspectClass: "aspect-6/5",
    categories: ["web"],
  },
];
