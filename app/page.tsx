import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  return (
    <main>
      <PageHeader
        title="martí castaño"
        subtitle="i build fullstack web applications, automate systems, and develop AI-powered software solutions."
      />
      <div className="flex flex-col">
        <div className="mt-32">
          <Projects />
        </div>
        <div className="mt-32">
          <About />
        </div>
        <div className="mt-32">
          <Contact />
        </div>
      </div>
    </main>
  );
}
