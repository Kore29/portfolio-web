import React from "react";

const ACHIEVEMENTS = [
  {
    date: "Summer 2025",
    title: "Courses and Certifications",
    description:
      "I have completed a total of 5 courses, from design with Tailwind and pages with React, to backend projects with NodeJs, express and MongoDB, along with some AI tooling with Python.",
    link: "https://www.coursera.org/user/09b51cfaa8a857c4beb926d027c32d85",
  },
  {
    date: "June 2025",
    title: "ProgramaMe Final Contest Madrid",
    description:
      "We reached the final in Madrid, competing at national level, we solved algorithmic challenges with efficient data structures and won the prize for being the fastest solving the first exercise.",
  },
  {
    date: "March 2024",
    title: "HP CodeWars Contest Barcelona",
    description:
      "At the end of high school, we had the opportunity to visit the HP offices and participate in a programming contest.",
  },
];

export default function Achievements() {
  return (
    <ol className="relative border-s border-neutral-300 dark:border-neutral-800 ml-3">
      {ACHIEVEMENTS.map((ach, index) => (
        <li key={index} className="mb-10 last:mb-0 ms-6 relative">
          {/* Timeline Dot */}
          <div className="absolute w-3 h-3 bg-neutral-400 dark:bg-neutral-600 rounded-full -left-[30px] top-1.5 border border-white dark:border-neutral-900" />
          
          <time className="block mb-1 text-sm font-medium leading-none text-neutral-400 dark:text-neutral-500">
            {ach.date}
          </time>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">
            {ach.title}
          </h3>
          <p className="mt-2 text-base font-normal text-neutral-600 dark:text-neutral-400 text-pretty">
            {ach.description}
          </p>
          {ach.link && (
            <a
              href={ach.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 mt-3 text-sm font-semibold text-yellow-600 dark:text-green-300 hover:underline"
            >
              Learn More
              <svg
                className="w-3 h-3 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          )}
        </li>
      ))}
    </ol>
  );
}
