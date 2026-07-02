import Image from "next/image";
import Contact from "@/sections/Contact";
import PageHeader from "@/components/PageHeader";
import { experiences } from "@/lib/experience";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHeader title="about me" />

      {/* Profile Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8 mb-24">
        {/* Left: Bio text */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-300 text-size-small font-sans">
          <p>
            {"i'm"} martí castaño, a fullstack developer who loves creating projects that mix frontend, backend, and artificial intelligence.
          </p>
          <p>
            {"i'm"} always experimenting with new things: from building my own operating system with Arch Linux to tinkering with servers, home automation, and writing clean, efficient code.
          </p>
          <p>
            i enjoy tackling challenges with creativity and efficiency, always aiming for clean, maintainable code. when {"i'm"} not coding, {"you'll"} find me exploring new tech or tweaking my custom setups.
          </p>
          <a
            href="#"
            className="w-fit px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-size-small font-normal rounded transition-colors font-sans mt-2"
          >
            download resume
          </a>
        </div>
        {/* Right: Portrait Image */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden rounded-xl border border-zinc-800 shadow-2xl">
          <Image
            src="/me/IMG_2843.jpeg"
            alt="Martí Castaño"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 400px"
            className="object-cover transition-all duration-700"
          />
        </div>
      </div>

      {/* Experience Timeline Section */}
      <section className="mb-32">
        <h2 className="font-nohemi text-4xl md:text-5xl lg:text-6xl font-normal leading-[0.8] tracking-tight text-zinc-100 mb-12">
          my experience
        </h2>
        <div className="flex flex-col border-t border-zinc-800">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-zinc-800 font-sans items-start"
            >
              {/* Left Column: Organization & Role */}
              <div className="md:col-span-4 flex flex-col gap-1">
                <h3 className="text-zinc-100 font-normal text-size-medium">
                  {exp.company.toLowerCase()}
                </h3>
                <span className="text-zinc-500 text-size-small">{exp.role.toLowerCase()}</span>
              </div>
              {/* Center Column: Description */}
              <div className="md:col-span-5 text-zinc-300 text-size-small">
                <p>{exp.description}</p>
                {exp.learnMoreUrl && (
                  <a
                    href={exp.learnMoreUrl}
                    className="inline-block mt-3 text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white text-size-small"
                  >
                    learn more...
                  </a>
                )}
              </div>
              {/* Right Column: Period */}
              <div className="md:col-span-3 md:text-right text-zinc-100 font-normal text-size-small pt-1">
                {exp.period.toLowerCase()}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Contact />
    </main>
  );
}
