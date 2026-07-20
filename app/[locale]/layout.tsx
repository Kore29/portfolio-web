import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import SmoothScrollProvider from "@/context/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

// 1. Configuración de Inter Local
const inter = localFont({
  src: [
    {
      path: "../../fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Inter-Bold.woff2",
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
      path: "../../fonts/Nohemi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Nohemi-Bold.woff",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Martí Castaño | Fullstack Developer & AI",
    description:
      "Fullstack developer specialized in building web applications, systems automation, and AI-powered software solutions.",
    siteName: "Martí Castaño Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martí Castaño | Fullstack Developer & AI",
    description:
      "Fullstack developer specialized in building web applications, systems automation, and AI-powered software solutions.",
  },
};

// Generar rutas estáticas para compilación
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming locale is supported
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Activa la renderización estática en el servidor para el locale actual
  setRequestLocale(locale);

  // Obtener mensajes de traducción
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={cn(
        "font-sans scroll-smooth overscroll-none bg-[#1a1a1a] text-white",
        inter.variable,
        nohemi.variable,
      )}
    >
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <SmoothScrollProvider>
            <CustomCursor />
            <PageTransition />
            <Navbar />
            <div className="mx-auto w-full max-w-480 px-4 md:px-8 lg:px-12">
              {children}
            </div>
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
