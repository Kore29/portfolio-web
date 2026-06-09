"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "600"],
});

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Indicator refs
  const ind22Ref = useRef<HTMLSpanElement>(null);
  const ind24Ref = useRef<HTMLSpanElement>(null);
  const ind29Ref = useRef<HTMLSpanElement>(null);

  // Right image block ref
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const imgMainRef = useRef<HTMLImageElement>(null);

  // Helper to split text into word spans for smooth individual reveals
  const renderWords = (text: string, highlightWords: string[] = []) => {
    return text.split(" ").map((word, idx) => {
      const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      const isHighlighted = highlightWords.includes(cleanWord.toLowerCase());
      return (
        <span 
          key={idx} 
          className={`reveal-word inline-block mr-[0.25em] opacity-15 blur-none lg:blur-[8px] transition-all duration-300 ${
            isHighlighted 
              ? `${playfair.className} italic font-semibold text-white` 
              : "text-neutral-300"
          }`}
        >
          {word}
        </span>
      );
    });
  };

  useGSAP(() => {
    if (!containerRef.current || !triggerRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop: Scroll-triggered word reveals (Unblur and fade word-by-word)
    mm.add("(min-width: 1024px)", () => {
      const words = containerRef.current?.querySelectorAll(".reveal-word");
      if (!words) return;

      // Animates each word individually as it rolls past the 80% to 65% viewport markers
      words.forEach(word => {
        gsap.to(word, {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: word,
            start: "top 80%",
            end: "top 65%",
            scrub: true,
          }
        });
      });

      // Animate the indicators next to their respective paragraphs
      const animateIndicator = (indRef: React.RefObject<HTMLSpanElement | null>, triggerEl: string) => {
        if (!indRef.current) return;
        gsap.to(indRef.current, {
          opacity: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 80%",
            end: "top 65%",
            scrub: true,
          }
        });
      };

      animateIndicator(ind22Ref, "#about-text");
      animateIndicator(ind24Ref, "#about-sub");
      animateIndicator(ind29Ref, ".about-version");

      // Animate the photo parallax and unblur
      const photo = imgMainRef.current;
      const photoWrap = imgContainerRef.current;
      if (photo && photoWrap) {
        const photoTl = gsap.timeline({
          scrollTrigger: {
            trigger: photoWrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });

        // Parallax vertical movement
        photoTl.fromTo(photo, { y: "-15%" }, { y: "15%", ease: "none" }, 0);
        // Fade in and unblur
        photoTl.fromTo(photo, 
          { opacity: 0, filter: "blur(20px)" }, 
          { opacity: 1, filter: "blur(0px)", ease: "none", duration: 0.35 }, 
          0
        );
      }
    });

    // Mobile/Tablet: No blur animations for CPU performance, simpler scroll reveals
    mm.add("(max-width: 1023px)", () => {
      const words = containerRef.current?.querySelectorAll(".reveal-word");
      if (!words) return;

      words.forEach(word => {
        gsap.to(word, {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: word,
            start: "top 85%",
            end: "top 70%",
            scrub: true,
          }
        });
      });

      const photo = imgMainRef.current;
      const photoWrap = imgContainerRef.current;
      if (photo && photoWrap) {
        gsap.fromTo(photo, 
          { opacity: 0 }, 
          { 
            opacity: 1, 
            ease: "none", 
            scrollTrigger: {
              trigger: photoWrap,
              start: "top 90%",
              end: "top 65%",
              scrub: true,
            }
          }
        );
      }
    });

    return () => mm.revert();
  }, { scope: triggerRef });

  return (
    <div 
      ref={triggerRef} 
      className="w-full bg-neutral-950 text-white overflow-hidden relative select-none"
    >
      <div 
        ref={containerRef} 
        className="max-w-6xl mx-auto px-6 w-full relative z-10 py-32 lg:py-48"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start w-full relative">
          
          {/* Left Column - Text content & inline milestone indicators */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[400px]">
            
            {/* Paragraph 1 */}
            <div 
              id="about-text" 
              className="relative pl-16 sm:pl-24 text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-neutral-100 leading-[1.45] text-pretty"
            >
              {/* Indicator (22) */}
              <span 
                ref={ind22Ref} 
                className="absolute left-0 top-2 font-mono text-sm sm:text-base text-neutral-500 select-none opacity-20 lg:opacity-0 lg:blur-[4px]"
              >
                (22)
              </span>
              {renderWords(
                "As a creative developer, I craft tailor-made web experiences, blending technical precision and emotion.",
                ["creative", "developer", "emotion"]
              )}
            </div>

            {/* Paragraph 2 */}
            <div 
              id="about-sub" 
              className="relative pl-16 sm:pl-24 mt-16 text-lg sm:text-xl font-light leading-relaxed text-neutral-400 text-pretty"
            >
              {/* Indicator (24) */}
              <span 
                ref={ind24Ref} 
                className="absolute left-0 top-1.5 font-mono text-sm sm:text-base text-neutral-500 select-none opacity-20 lg:opacity-0 lg:blur-[4px]"
              >
                (24)
              </span>
              {renderWords(
                "My name is Martí. A passionate developer and creator, I build memorable digital experiences, always seeking the symbiosis between art and information.",
                []
              )}
            </div>

            {/* Version & SVG Indicator */}
            <div className="relative pl-16 sm:pl-24 mt-16 flex items-center gap-x-2 text-neutral-500 font-mono text-sm">
              {/* Indicator (29) */}
              <span 
                ref={ind29Ref} 
                className="absolute left-0 top-0.5 font-mono text-sm sm:text-base text-neutral-500 select-none opacity-20 lg:opacity-0 lg:blur-[4px]"
              >
                (29)
              </span>
              <div className="about-version flex items-center gap-x-2 text-lg">
                <svg 
                  className="w-5 h-5 text-neutral-500" 
                  viewBox="0 0 84 85"
                  fill="currentColor"
                >
                  <path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/>
                </svg>
                {renderWords("V3.0", [])}
              </div>
            </div>

          </div>

          {/* Right Column - Portrait & Spotlight (Capsule curves - Breton style) */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full h-full min-h-[400px] lg:min-h-[500px]">
            {/* Red circular spotlight background */}
            <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-red-600/20 blur-[100px] sm:blur-[120px] z-0 pointer-events-none" />
            
            {/* Image Container (Capsule shape curved left, flat right on desktop; curved top on mobile) */}
            <div 
              ref={imgContainerRef}
              className="relative w-[300px] h-[360px] sm:w-[380px] sm:h-[450px] lg:w-[450px] lg:h-[540px] overflow-hidden z-10 bg-neutral-900 border border-neutral-800/40 rounded-[150px_150px_0_0] lg:rounded-[270px_0_0_270px] shadow-2xl"
            >
              {/* Portrait Image */}
              <Image
                ref={imgMainRef}
                src="/marti_portrait.png"
                alt="Marti Portrait"
                fill
                priority
                className="object-cover scale-125"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



