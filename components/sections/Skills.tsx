"use client";

import React, { useRef } from "react";
import { 
  JavascriptIcon, 
  HtmlIcon, 
  CssIcon, 
  TailwindIcon, 
  BootstrapIcon,
  ExpressIcon,
  SqlIcon,
  MongodbIcon,
  JavaIcon,
  DockerIcon
} from "@/components/Icons";
import { Terminal, Server, Layout } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-blue-500/5 to-indigo-500/5 border-blue-500/10 dark:border-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    skills: [
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-emerald-500/5 to-green-500/5 border-emerald-500/10 dark:border-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    skills: [
      { name: "Express.js", icon: ExpressIcon },
      { name: "Java", icon: JavaIcon },
      { name: "SQL", icon: SqlIcon },
      { name: "MongoDB", icon: MongodbIcon },
    ],
  },
  {
    title: "DevOps & Systems",
    icon: Terminal,
    color: "from-amber-500/5 to-orange-500/5 border-amber-500/10 dark:border-amber-500/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    skills: [
      { name: "Docker", icon: DockerIcon },
      { name: "Arch Linux", icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2.69l-10 17.31h20l-10-17.31zm0 3.88l6.88 11.92h-13.76l6.88-11.92z"/>
        </svg>
      )},
      { name: "Git & GitHub", icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      )},

    ],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".skill-card");
    if (!cards) return;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="skills" className="w-full py-16 scroll-mt-28">
      <div ref={containerRef} className="flex flex-col gap-y-12">

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={catIdx}
                className="skill-card flex flex-col gap-6 p-6 rounded-2xl border bg-gradient-to-br bg-white dark:bg-neutral-950/20 backdrop-blur-md shadow-sm opacity-0"
                style={{ contentVisibility: "auto" }}
              >
                {/* Header */}
                <div className="flex items-center gap-x-3">
                  <div className={`p-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 shadow-sm ${category.iconColor}`}>
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-y-3">
                  {category.skills.map((skill, skillIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skillIdx}
                        className="flex items-center gap-x-3 p-3 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/50 hover:bg-white dark:hover:bg-neutral-900 transition-colors duration-300"
                      >
                        <div className="w-6 h-6 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                          <SkillIcon className="w-5 h-5 object-contain" />
                        </div>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
