import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-4 text-2xl">
        <Link href="/">martí castaño</Link>
        <Link href="/work">work</Link>
        <Link href="/about">about me</Link>
        <Link href="#contact">start a project</Link>
      </nav>
    </header>
  );
}
