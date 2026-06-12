import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import SmoothScrollProvider from "@/context/SmoothScrollProvider";
import Navbar from "@/components/Navbar";

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
  title: "Portfolio Martí",
  description: "portfolio description.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans scroll-smooth overscroll-none bg-[#1a1a1a] text-white",
        inter.variable,
        nohemi.variable,
      )}
    >
      <body className="min-h-screen">
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
