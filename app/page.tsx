import React from "react";
import Header from "@/components/layout/Header";
import VerticalNav from "@/components/layout/VerticalNav";
import AboutMe from "@/components/sections/AboutMe";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <VerticalNav />
      <Header />
      <main className="w-full flex flex-col gap-y-36 pb-32">
      {/* About Section */}
      <section id="about" className="w-full scroll-mt-28">
        <AboutMe />
      </section>

      {/* Projects Section (Wider display for showcase) */}
      <section id="projects" className="max-w-6xl mx-auto px-6 scroll-mt-28 w-full">
        <Projects />
      </section>

      {/* Contact Section (Cozy card area) */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        <Contact />
      </div>
    </main>
    </>
  );
}

