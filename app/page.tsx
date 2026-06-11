"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Calendar, ArrowRight, Download, Globe } from "lucide-react";

// ==========================================
// CONFIGURACIÓN DEL PORTAFOLIO (Estilo Quattro)
// Cambia los valores aquí para personalizar tu sitio
// ==========================================
const PORTFOLIO_DATA = {
  name: "Johnny Quattro",
  roleLine1: "Website Designer",
  roleLine2: "Brand Strategist",
  avatar: "/profile_avatar.png",
  aboutPortrait: "/about_portrait.png",
  location: "London, UK",
  timezone: "CET (GMT +1)",
  status: "AVAILABLE",
  bio: "Johnny helps startups and enterprises create meaningful connections between their products and customers. With a focus on ethical practices, he streamlines publishing workflows and empowers businesses to achieve their goals while fostering lasting customer engagement.",
  
  cvUrl: "#",
  linkedinUrl: "https://linkedin.com",
  twitterUrl: "https://x.com",
  instagramUrl: "https://instagram.com",
  email: "hello@quattro.design",
  bookingUrl: "https://calendly.com",

  services: [
    {
      id: "01",
      name: "Web Design",
      price: "4,000+",
      timeframe: "1 — 3w",
      description: "We'll find the best visual way to export your story into a fine digital experience"
    },
    {
      id: "02",
      name: "Framer Development",
      price: "3,000+",
      timeframe: "1 — 3w",
      description: "Your website is built, optimized, ran by CMS, and one click away from being published"
    },
    {
      id: "03",
      name: "Figma to Framer",
      price: "1,500+",
      timeframe: "< 1w",
      description: "Let's add dynamics to your static figma file. It's live, editable, looks good on any device"
    },
    {
      id: "04",
      name: "Content Strategy",
      price: "2,000+",
      timeframe: "2 — 3w",
      description: "Your copy is straight to the point, keeping a proper tone and structure, seo-ready"
    },
    {
      id: "05",
      name: "Branding and Identity",
      price: "3,500+",
      timeframe: "1 — 2w",
      description: "We'll find the way they know you matching resonance, difference, and value you provide"
    }
  ],

  experience: [
    {
      company: "Quattro Inc.",
      role: "Founder",
      period: "2011 → Now"
    },
    {
      company: "Google",
      role: "Design Lead",
      period: "2011 → 2016"
    },
    {
      company: "Meta",
      role: "Product Designer",
      period: "2016 → 2019"
    },
    {
      company: "PayPal",
      role: "Senior Designer",
      period: "2019 → 2024"
    },
    {
      company: "Hanzo Co.",
      role: "Founder",
      period: "2011 → Now"
    }
  ],

  projects: [
    {
      title: "Remix Supply",
      year: "'24",
      tags: ["DSGN", "DEV", "BRA"],
      image: "/project_remix.png",
      url: "https://remix.supply"
    },
    {
      title: "Nitro",
      year: "'24",
      tags: ["DSGN", "UX"],
      image: "/project_nitro.png",
      url: "https://nitro.example.com"
    },
    {
      title: "Bravo",
      year: "2024",
      tags: ["BRA", "DEV", "UX"],
      image: "/project_bravo.png",
      url: "https://bravo.example.com"
    },
    {
      title: "Hanzo",
      year: "2024",
      tags: ["BRA"],
      image: "/project_hanzo.png",
      url: "https://hanzo.example.com"
    },
    {
      title: "Haze",
      year: "2024",
      tags: ["DSGN", "DEV"],
      image: "/project_haze.png",
      url: "https://haze.example.com"
    }
  ]
};

// Componentes de iconos de marcas inline ya que las versiones modernas de lucide-react no los exportan
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      if (scrollable > 0) {
        setScrollProgress(scrolled / scrollable);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans flex flex-col items-center">
      {/* ==========================================
          NAVBAR (Sticky at root level for page-wide persistence)
          ========================================== */}
      <header className="w-full sticky top-0 bg-transparent z-50 transition-all duration-300">
        <div className="w-full max-w-[1100px] mx-auto px-6 md:px-0 py-4 md:py-6 flex items-center justify-between">
          <a href="#" className="font-sans font-bold text-lg md:text-xl text-white tracking-tight shrink-0">
            {PORTFOLIO_DATA.name}
          </a>
          <div className="hidden md:block flex-grow h-[1px] bg-[#292929] mx-12 relative overflow-hidden shrink-0">
            <div 
              id="scroll-progress-line" 
              className="absolute left-0 top-0 h-full w-full bg-white origin-left transition-transform duration-75 ease-out"
              style={{ transform: `scaleX(${scrollProgress})` }}
            />
          </div>
          <nav className="flex items-center gap-8 md:gap-12 font-sans text-sm font-medium text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors duration-200">Work</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </nav>
        </div>
      </header>

      {/* Contenedor principal sin bordes laterales molestos y con ancho máximo generoso */}
      <div className="w-full max-w-[1100px] px-6 md:px-0 flex flex-col">

        {/* ==========================================
            HOME / HERO SECTION (Screenshot 15.02.16 & 15.13.51)
            ========================================== */}
        <section className="min-h-[15vh] flex flex-col gap-12 pt-8 pb-12">
          
          {/* Avatar e Intro en la parte superior izquierda */}
          <div className="flex items-start gap-5 max-w-xl mb-100">
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 bg-zinc-900 relative z-10">
                <img src={PORTFOLIO_DATA.avatar} alt="Avatar" className="w-full h-full object-cover grayscale brightness-90 contrast-125" />
              </div>
            </div>
            <div className="font-mono text-[12px] md:text-[13px] text-[#808080] leading-[1.65] font-normal tracking-wide normal-case mt-1.5">
              I Connect with creators and builders <br />
              to design and develop Framer websites <br />
              reaching goals and delivering the message
            </div>
          </div>

          {/* Gran título del Hero */}
          <div className="">
            <h1 className="text-[52px] sm:text-7xl md:text-[92px] font-bold tracking-[-0.04em] text-white leading-[1.02] font-sans select-none">
              {PORTFOLIO_DATA.roleLine1} <br />
              <span className="text-[#333] font-normal">and</span> {PORTFOLIO_DATA.roleLine2}
            </h1>
          </div>

          {/* Footer de información con líneas separadoras horizontales */}
          <div className="flex items-center w-full font-mono text-[10px] md:text-[15px] text-[#808080] py-6 uppercase tracking-widest">
            <span className="shrink-0">{PORTFOLIO_DATA.location}</span>
            <div className="flex-grow h-[1px] bg-zinc-700 mx-6" />
            <span className="shrink-0">{PORTFOLIO_DATA.timezone}</span>
            <div className="flex-grow h-[1px] bg-zinc-700 mx-6" />
            <span className="shrink-0 flex items-center gap-2 text-[#00e5a3] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a3] shrink-0" />
              {PORTFOLIO_DATA.status}
            </span>
          </div>
        </section>

        {/* ==========================================
            ABOUT ME SECTION (Screenshot 15.02.30)
            ========================================== */}
        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-7 flex flex-col justify-between min-h-[350px]">
            <p className="text-xl sm:text-2xl md:text-3xl font-normal text-zinc-200 leading-relaxed font-sans">
              {PORTFOLIO_DATA.bio}
            </p>
            <div className="flex items-center gap-12 font-mono text-xs tracking-widest uppercase mt-12 md:mt-24">
              <a href={PORTFOLIO_DATA.bookingUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                BOOK A CALL <span className="text-zinc-700">↗</span>
              </a>
              <a href={PORTFOLIO_DATA.twitterUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 font-bold">
                X <span className="text-zinc-700">↗</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-end">
            <div className="relative w-full aspect-[4/5] max-w-[420px] overflow-hidden rounded border border-zinc-900 bg-zinc-950">
              <img src={PORTFOLIO_DATA.aboutPortrait} alt="Johnny Portrait" className="w-full h-full object-cover grayscale contrast-110 brightness-95" />
            </div>
          </div>
        </section>

        {/* ==========================================
            PROJECTS SECTION (Screenshot 15.39.15)
            ========================================== */}
      </div> {/* Cierre del primer contenedor centrado */}

      <section id="work" className="w-full border-t border-zinc-900 bg-black">
        <div className="flex flex-col">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`w-full flex justify-center border-b border-zinc-900 transition-colors duration-350 ${
                idx % 2 === 0 ? "bg-[#0d0d0d]" : "bg-black"
              }`}
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[1100px] px-6 md:px-0 py-16 md:py-20 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
              >
                <div className="flex-1 flex flex-col justify-between pr-8 md:pr-16 min-h-[110px]">
                  <h3 className="text-3xl md:text-[42px] font-bold text-white tracking-tight mb-6 font-sans group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center w-full gap-4">
                    <div className="flex gap-2 shrink-0">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="border border-zinc-850 text-zinc-500 rounded-full px-3.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-zinc-950/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Línea animada: se expande de izquierda a derecha al hacer hover */}
                    <div className="flex-grow h-[1px] bg-zinc-900/60 opacity-0 w-0 group-hover:w-full group-hover:opacity-100 transition-all duration-500 mx-2" />
                    <span className="font-mono text-zinc-500 text-sm shrink-0 uppercase tracking-widest">{project.year}</span>
                  </div>
                </div>
                
                <div className="shrink-0 mt-6 md:mt-0 relative overflow-hidden rounded border border-zinc-900 w-full md:w-[320px] aspect-[16/10] bg-zinc-950">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500" 
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reapertura del contenedor centrado para las secciones siguientes */}
      <div className="w-full max-w-[1100px] px-6 md:px-0 flex flex-col">

        {/* ==========================================
            EXPERIENCE SECTION (Screenshot 15.03.01)
            ========================================== */}
        <section className="py-24 border-t border-zinc-900 flex flex-col gap-12">
          
          {/* Headline superior */}
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-semibold text-zinc-500 leading-tight max-w-3xl font-sans">
            I have <span className="text-white font-bold">11 years of experience</span> running successful design practices together with startups and top brands.
          </h2>

          {/* Grilla con links a la izquierda y tabla a la derecha */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
            
            {/* Links a la izquierda */}
            <div className="md:col-span-4 flex md:flex-col justify-start md:justify-end gap-6 md:gap-4 pb-2">
              <a href={PORTFOLIO_DATA.cvUrl} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-bold">
                DOWNLOAD CV <span className="text-zinc-700">📄</span>
              </a>
              <a href={PORTFOLIO_DATA.linkedinUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-bold">
                CONNECT WITH LINKEDIN <span className="text-zinc-700">↗</span>
              </a>
            </div>

            {/* Listado de experiencia a la derecha */}
            <div className="md:col-span-8 border-t border-zinc-900">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="grid grid-cols-3 py-6 border-b border-zinc-900 items-center text-xs sm:text-sm md:text-base">
                  <span className="font-bold text-white">{exp.company}</span>
                  <span className="text-zinc-500 font-sans">{exp.role}</span>
                  <span className="text-zinc-500 font-mono text-right text-xs md:text-sm">{exp.period}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==========================================
            SERVICES SECTION (Screenshot 15.03.16)
            ========================================== */}
        <section id="services" className="py-24">
          
          {/* Header de la sección */}
          <div className="flex items-center w-full mb-16">
            <h2 className="text-3xl font-bold font-sans text-white shrink-0">
              Services <span className="text-zinc-500 font-normal">and Capabilities</span>
            </h2>
          </div>

          {/* Grilla horizontal de 5 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-5 border-l border-r border-t border-b border-zinc-900 divide-y md:divide-y-0 md:divide-x divide-zinc-900 bg-zinc-950/10">
            {PORTFOLIO_DATA.services.map((service, idx) => (
              <div 
                key={idx} 
                className="flex flex-col justify-between p-6 md:p-8 min-h-[380px] hover:bg-zinc-900/10 transition-colors duration-300"
              >
                {/* Badges de precio/tiempo a la izquierda y número identificador a la derecha */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[9px] text-zinc-500 border border-zinc-850 px-2 py-0.5 rounded tracking-wider bg-zinc-950/50 self-start">
                      {service.price}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 border border-zinc-850 px-2 py-0.5 rounded tracking-wider bg-zinc-950/50 self-start">
                      {service.timeframe}
                    </span>
                  </div>
                  <span className="font-mono text-[44px] font-bold text-zinc-800/40 select-none leading-none -mt-2">
                    {service.id}
                  </span>
                </div>

                {/* Texto inferior */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-white font-sans mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[11px] leading-relaxed text-zinc-400 font-sans">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            CONTACT SECTION (Screenshot 15.03.25)
            ========================================== */}
        <section id="contact" className="flex flex-col">
          
          <h2 className="text-[44px] sm:text-6xl md:text-[88px] font-bold tracking-tight mb-100 font-sans select-none">
            <span className="text-zinc-800 font-normal">Let's</span> Connect
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl font-normal text-zinc-400 leading-relaxed max-w-2xl mb-16 font-sans">
            Feel free to contact me if having any questions. <br />
            I'm available for new projects or just for chatting.
          </p>

          {/* Tres botones gigantescos horizontales */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-zinc-900 divide-y md:divide-y-0 md:divide-x divide-zinc-900">
            <a 
              href={PORTFOLIO_DATA.bookingUrl} 
              target="_blank" 
              rel="noreferrer"
              className="py-12 md:py-16 text-center text-sm md:text-base font-medium text-white hover:bg-zinc-900/20 transition-all font-sans cursor-pointer uppercase tracking-wider block"
            >
              Book a Call
            </a>
            <a 
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="py-12 md:py-16 text-center text-sm md:text-base font-medium text-white hover:bg-zinc-900/20 transition-all font-sans cursor-pointer uppercase tracking-wider block"
            >
              Send an Email
            </a>
            <a 
              href={PORTFOLIO_DATA.twitterUrl} 
              target="_blank" 
              rel="noreferrer"
              className="py-12 md:py-16 text-center text-sm md:text-base font-medium text-white hover:bg-zinc-900/20 transition-all font-sans cursor-pointer uppercase tracking-wider block"
            >
              Follow on X
            </a>
          </div>

          {/* Pie de página con copyright y redes */}
          <footer className="flex items-center justify-between py-12 font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-12">
            <span>Quattro, {new Date().getFullYear()}</span>
            
            <div className="flex items-center gap-6">
              <a href={PORTFOLIO_DATA.twitterUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.linkedinUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={PORTFOLIO_DATA.instagramUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </footer>

        </section>

      </div>
    </div>
  );
}
