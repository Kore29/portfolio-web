import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="pt-32 pb-32 w-full">
      {/* Visual CTA Banner */}
      <div className="relative w-full py-16 md:py-24 mb-16">
        <div className="flex flex-row items-center justify-between w-full mx-auto gap-2 sm:gap-4 md:gap-8">
          {/* Left Side: GET IN */}
          <div className="leading-none">
            <h2 className="text-[9vw] sm:text-[10vw] md:text-[11vw] font-nohemi tracking-tighter text-zinc-100 whitespace-nowrap select-none">
              get in
            </h2>
          </div>

          {/* Center: GIF Animation */}
          <div className="w-40 h-40 md:w-[450px] md:h-[450px] overflow-hidden flex-shrink-0 relative shadow-2xl">
            <Image
              src="/contact-animation.gif"
              alt="Contact Animation"
              fill
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: TOUCH */}
          <div className="leading-none">
            <h2 className="text-[9vw] sm:text-[10vw] md:text-[11vw] font-nohemi tracking-tighter text-zinc-100 whitespace-nowrap select-none">
              touch
            </h2>
          </div>
        </div>
      </div>

      {/* Footer Info Column */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 pt-16 border-t border-zinc-800">
        {/* Info Column */}
        <div className="flex flex-col gap-2 text-size-small max-w-full">
          <p className="text-zinc-100 break-all">
            email:{" "}
            <a
              href="mailto:marticastanorodriguez@gmail.com"
              className="hover:text-zinc-400 transition-colors"
            >
              marticastanorodriguez@gmail.com
            </a>
          </p>
          <p className="text-zinc-100">based in: Barcelona, Spain</p>
          <p className="text-zinc-100">
            available for: freelance projects & full-time
          </p>
        </div>

        {/* Links Group */}
        <div className="flex gap-12 sm:gap-20 md:gap-32 text-size-small">
          {/* Pages Column */}
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 mb-2">pages</span>
            <Link
              href="/"
              className="text-zinc-100 hover:text-zinc-400 transition-colors"
            >
              home
            </Link>
            <Link
              href="/about"
              className="text-zinc-100 hover:text-zinc-400 transition-colors"
            >
              about
            </Link>
            <Link
              href="/work"
              className="text-zinc-100 hover:text-zinc-400 transition-colors"
            >
              work
            </Link>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col gap-2">
            <span className="text-zinc-500 mb-2">socials</span>
            <a
              href="https://github.com/Kore29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-zinc-400 transition-colors"
            >
              github
            </a>
            <a
              href="https://www.coursera.org/user/09b51cfaa8a857c4beb926d027c32d85"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-zinc-400 transition-colors"
            >
              coursera
            </a>
            <a
              href="#"
              className="text-zinc-100 hover:text-zinc-400 transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
