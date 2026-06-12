import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";

export default function WorkPage() {
  return (
    <main>
      <PageHeader title="selected work" />
      <Projects />
      <Contact />
    </main>
  );
}
