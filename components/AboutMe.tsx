import React from "react";

export default function AboutMe() {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-neutral-700 dark:text-neutral-300 md:flex-row leading-relaxed text-pretty">
      <div className="flex flex-col gap-y-4 [&_strong]:text-yellow-600 dark:[&_strong]:text-green-300 [&_strong]:font-semibold">
        <p>
          I love programming and creating projects that mix frontend, backend, and a touch of artificial intelligence. I’m always experimenting with new things: from <strong>building my own operating system with Arch Linux</strong> to <strong>tinkering with servers and home automation</strong>. I enjoy learning while building practical and fun solutions with technology.
        </p>

        <p>
          I enjoy tackling challenges with <strong>creativity and efficiency</strong>, always aiming for <strong>clean, maintainable code</strong>. I’m particularly passionate about fullstack development, AI applications, and exploring innovative solutions in web and system programming.
        </p>

        <p>
          I’m looking for opportunities where I can <strong>learn, innovate, and contribute to exciting tech projects</strong>. Outside of coding, I love experimenting with home tech projects and learning new tools just for fun.
        </p>
      </div>
    </article>
  );
}
