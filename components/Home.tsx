import React from "react";
import { LinkedinIcon, GithubIcon, MailIcon } from "./Icons";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src="https://www.altermattlab.ch/wp-content/uploads/2020/02/Screen-Shot-2020-02-06-at-19.37.30-500x500.png"
          alt="Kore's profile picture"
          className="rounded-full w-28 h-28 -rotate-6 brightness-95 shadow-md border-2 border-neutral-300 dark:border-neutral-700 object-cover"
        />
        <div className="flex flex-col gap-y-3 text-center sm:text-left">
          <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-bold tracking-tight">
            Hey, My name is Kore
          </h1>
          <div>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
              Available for work & internships
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 leading-relaxed [&>strong]:text-yellow-600 dark:[&>strong]:text-green-300 [&>strong]:font-semibold">
        Currently pursuing a professional degree in <strong>Multiplatform Application Development</strong> with specialization in Artificial Intelligence, in Barcelona, Spain. Enjoying programming and developing web applications and personal projects, both frontend and backend.
      </p>

      <nav className="flex flex-wrap gap-4 mt-6">
        <a
          href="https://www.linkedin.com/in/marti-casta%C3%B1o-rodriguez-77a54a341/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 dark:border-neutral-700 flex justify-center items-center gap-x-2 py-2 px-4 text-xs md:text-sm bg-neutral-100/50 dark:bg-neutral-800/50 hover:scale-105 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <LinkedinIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" /> Linkedin
        </a>
        <a
          href="https://github.com/Kore29"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 dark:border-neutral-700 flex justify-center items-center gap-x-2 py-2 px-4 text-xs md:text-sm bg-neutral-100/50 dark:bg-neutral-800/50 hover:scale-105 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <GithubIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" /> Github
        </a>
        <a
          href="mailto:marticastanorodriguez@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-neutral-300 dark:border-neutral-700 flex justify-center items-center gap-x-2 py-2 px-4 text-xs md:text-sm bg-neutral-100/50 dark:bg-neutral-800/50 hover:scale-105 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
        >
          <MailIcon className="w-5 h-5 text-neutral-700 dark:text-neutral-300" /> marticastanorodriguez@gmail.com
        </a>
      </nav>
    </div>
  );
}
