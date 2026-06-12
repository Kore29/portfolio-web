import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
        "font-sans scroll-smooth overscroll-none bg-stone-950 text-white",
        inter.variable,
      )}
    >
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
