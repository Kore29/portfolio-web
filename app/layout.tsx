import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Inter, Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Portfolio — Dark Minimalist",
  description: "A sleek, responsive, and minimalist portfolio site inspired by Quattro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark font-sans scroll-smooth", inter.variable, spaceMono.variable)}>
      <body className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}


