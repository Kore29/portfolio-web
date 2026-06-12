import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  return (
    <main>
      <PageHeader
        title="martí castaño"
        subtitle="i design strategic brand identities that help small businesses and startups stand out and connect with their customers."
      />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
