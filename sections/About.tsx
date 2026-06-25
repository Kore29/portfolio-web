"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Registramos el plugin para que GSAP pueda leer el scroll del navegador
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLHeadingElement>(null);

  const phrase =
    "i'm Martí Castaño, a fullstack developer who loves creating projects that mix frontend, backend, and artificial intelligence. I'm always experimenting with new things: from building my own operating system with Arch Linux to tinkering with servers, home automation, and writing clean, efficient code.";

  useGSAP(
    () => {
      gsap.to(".word", {
        color: "#f4f4f5",
        opacity: 1,
        stagger: 0.05,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          end: "center center",
          scrub: 1,
        },
      });
    },
    { scope: container },
  );

  return (
    <section id="about" className="flex flex-col">
      {/* Main animated heading */}
      <h2
        ref={container}
        className="text-4xl md:text-5xl font-sans leading-tight tracking-tight"
      >
        {phrase.split(" ").map((word, index) => (
          <span key={index} className="word text-zinc-700 opacity-30">
            {word}{" "}
          </span>
        ))}
      </h2>

      {/* 3-Column Bottom Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-20">
        {/* Column 1: Black box instead of photo */}
        <div className="bg-zinc-950 rounded-lg aspect-square w-full border border-zinc-900 relative shadow-2xl flex items-center justify-center">
          <div className="text-zinc-800 font-sans text-xs">photo placeholder</div>
        </div>

        {/* Column 2: why work with me / code approach */}
        <div className="flex flex-col justify-between h-full gap-6">
          <div className="flex flex-col">
            <span className="text-sm text-zinc-500 font-sans">
              my approach to code
            </span>
            <p className="text-zinc-300 font-sans mt-3 leading-relaxed text-sm">
              i enjoy tackling challenges with creativity and efficiency, always aiming for clean, maintainable code. i'm particularly passionate about fullstack development, AI applications, and exploring innovative solutions in web and system programming.
            </p>
          </div>
          <a
            href="#"
            className="w-fit px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium rounded transition-colors font-sans text-center"
          >
            download resume
          </a>
        </div>

        {/* Column 3: when i'm not coding */}
        <div className="flex flex-col">
          <span className="text-sm text-zinc-500 font-sans">
            when i'm not coding
          </span>
          <p className="text-zinc-300 font-sans mt-3 leading-relaxed text-sm">
            outside of coding, i love experimenting with home tech projects, tinkering with servers and home automation, and learning new tools just for fun. you'll always find me exploring new technologies or tweaking my custom Arch Linux installation.
          </p>
        </div>
      </div>
    </section>
  );
}
