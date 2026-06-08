import React from "react";

export default function Footer({ id }: { id?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id={id}
      className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"
    >
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4 border-t border-gray-200 dark:border-neutral-800">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          &copy; {currentYear}{" "}
          <a className="hover:underline font-semibold" href="/">
            Kore
          </a>
          .
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0 gap-x-6">
          <li>
            <a href="#about" className="hover:underline">
              About me
            </a>
          </li>
          <li>
            <a href="mailto:marticastanorodriguez@gmail.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
