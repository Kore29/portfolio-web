import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import SmoothScrollProvider from "@/context/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

// 1. Configuración de Inter Local
const inter = localFont({
  src: [
    {
      path: "../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Inter-Bold.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

// 2. Configuración de Nohemi Local
const nohemi = localFont({
  src: [
    {
      path: "../fonts/Nohemi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Nohemi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
});

export const metadata: Metadata = {
  title: "Martí Castaño | Fullstack Developer & AI",
  description:
    "Martí Castaño's professional portfolio. Fullstack developer specialized in building web applications, systems automation, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn(
        "font-sans scroll-smooth overscroll-none bg-[#1a1a1a] text-white",
        inter.variable,
        nohemi.variable,
      )}
    >
      <body className="min-h-screen">
        <SmoothScrollProvider>
          <CustomCursor />
          <PageTransition />
          <Navbar />
          <div className="mx-auto w-full max-w-480 px-4 md:px-8 lg:px-12">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
