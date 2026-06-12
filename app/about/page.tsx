import AboutSection from "@/sections/About";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="about me" />
      <AboutSection />
      <Contact />
    </main>
  );
}
