export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  learnMoreUrl?: string;
}

export const experiences: Experience[] = [
  {
    company: "Courses and Certifications",
    role: "Independent Study",
    period: "Summer 2025",
    description: "Completed a total of 5 courses, covering UI design with Tailwind, frontend development with React, backend systems using Node.js, Express, and MongoDB, alongside AI and machine learning toolsets using Python.",
    learnMoreUrl: "#"
  },
  {
    company: "ProgramaMe Final Contest Madrid",
    role: "National Finalist & Winner",
    period: "June 2025",
    description: "Reached the national final in Madrid, competing at a high level. Solved complex algorithmic challenges using efficient data structures, and won the special prize for being the fastest team to solve the first programming exercise.",
  },
  {
    company: "HP CodeWars Contest Barcelona",
    role: "Contestant",
    period: "March 2024",
    description: "Participated in the HP CodeWars competitive programming contest in Barcelona at the end of high school, visiting the HP offices and solving algorithmic problems in a collaborative team setting.",
  }
];
