import React from "react";
import Achievements from "@/components/Achievements";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import { TrophyIcon, PersonIcon, CodeIcon } from "@/components/Icons";

export default function Page() {
  return (
    <>
      {/* Hero Aurora Background Section */}
      <main className="max-w-2xl md:max-w-3xl lg:max-w-[740px] mx-auto px-6 pb-24 mt-10">
      {/* Achievements */}
      <section id="achievements" className="py-12 md:py-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 flex gap-x-3 items-center text-neutral-900 dark:text-white">
          <TrophyIcon className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
          Achievements
        </h2>
        <Achievements />
      </section>

      {/* About Me */}
      <section id="about" className="py-12 md:py-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 flex gap-x-3 items-center text-neutral-900 dark:text-white">
          <PersonIcon className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
          About me
        </h2>
        <AboutMe />
      </section>

      {/* Projects */}
      <section id="projects" className="py-12 md:py-16 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 flex gap-x-3 items-center text-neutral-900 dark:text-white">
          <CodeIcon className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
          Projects
        </h2>
        <Projects />
      </section>
      </main>
    </>
  );
}
