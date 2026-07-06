import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations("Home");

  return (
    <main>
      <PageHeader
        title="martí castaño"
        subtitle={t("subtitle")}
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
