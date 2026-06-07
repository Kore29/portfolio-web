import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Kore's Portfolio - Web & Mobile Developer",
  description:
    "Hire Kore to build your next web or mobile app. Passionate about creating unique and engaging applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ scrollBehavior: "smooth" }} className={cn("font-sans", inter.variable)}>
      <body className="relative min-h-screen text-black dark:text-white bg-zinc-50 dark:bg-neutral-950">
        {/* Subtle static radial gradient background */}
        <div
          className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full
             bg-zinc-50 dark:bg-neutral-950
             bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119,153,199,0.15),rgba(255,255,255,0))]
             dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(119,153,199,0.15),rgba(255,255,255,0))]"
        />
        <Header />
        {children}
        <Footer id="contact" />
      </body>
    </html>
  );
}
