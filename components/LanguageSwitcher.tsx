"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "es" ? "en" : "es";
    startTransition(() => {
      // next-intl's wrapped router.replace automatically handles the locale change
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={`hover:text-zinc-400 transition-colors uppercase font-sans text-size-small tracking-wider cursor-pointer focus:outline-none ${
        isPending ? "opacity-50 pointer-events-none" : ""
      }`}
      aria-label="Toggle language"
    >
      {currentLocale === "es" ? "en" : "es"}
    </button>
  );
}
