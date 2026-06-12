import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-24 w-full">
      <div className="flex flex-col gap-16 w-full">
        {/* Fila 1 */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <Link
            href="/work/lattice"
            className="group flex-[1.5] flex flex-col gap-4"
          >
            <div className="w-full aspect-16/11 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-700 font-mono text-sm tracking-widest uppercase">
                Image lattice
              </span>
            </div>
            <div>
              <h3 className="text-xl text-zinc-100 tracking-tight">Lattice</h3>
              <p className="text-sm text-zinc-500 mt-1">Navegación & AR</p>
            </div>
          </Link>

          <Link href="/work/volta" className="group flex-1 flex flex-col gap-4">
            <div className="w-full aspect-4/5 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-700 font-mono text-sm tracking-widest uppercase">
                Image volta
              </span>
            </div>

            <div>
              <h3 className="text-xl text-zinc-100 tracking-tight">Volta</h3>
              <p className="text-sm text-zinc-500 mt-1">Full-Stack SaaS</p>
            </div>
          </Link>
        </div>

        {/* Fila 2 */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <Link
            href="/work/lattice"
            className="group flex-[1] flex flex-col gap-4"
          >
            <div className="w-full aspect-7/8 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-700 font-mono text-sm tracking-widest uppercase">
                Image Iter
              </span>
            </div>
            <div>
              <h3 className="text-xl text-zinc-100 tracking-tight">Iter</h3>
              <p className="text-sm text-zinc-500 mt-1">Navegación & AR</p>
            </div>
          </Link>

          <Link href="/work/volta" className="group flex-1 flex flex-col gap-4">
            <div className="w-full aspect-6/5 bg-zinc-900/50 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-700 font-mono text-sm tracking-widest uppercase">
                Image Muvv
              </span>
            </div>

            <div>
              <h3 className="text-xl text-zinc-100 tracking-tight">Muvv</h3>
              <p className="text-sm text-zinc-500 mt-1">Full-Stack SaaS</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
