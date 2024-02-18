import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AxiomWebVitals } from "next-axiom";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';

import { Navbar } from "~/components/navbar";
import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";
import Providers from '~/app/providers'
import "~/styles/globals.css";

import { Footer } from "~/components/footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://na-locator.vercel.app/"
      : "http://localhost:3000",
  ),
  title: "Локатор групп 🙋‍♂️🙋‍♀️",
  description: "Простое приложение для поиска групп и собраний в Беларуси 🙋‍♂️🙋‍♀️",
  openGraph: {
    title: "Локатор групп Беларуси",
    description:
      "Простое приложение для поиска групп и собраний в Беларуси",
    url: "https://na-locator.vercel.app/",
    siteName: "Локатор групп Беларуси",
    // images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@anonymous",
    creator: "@anonymous",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable}`} suppressHydrationWarning>
      <AxiomWebVitals />
      <body className="mx-auto min-h-lvh   max-w-2xl font-sans antialiased">
        <TRPCReactProvider>
          <Providers>
            <Toaster position="top-center" />
            <Navbar />
            <main className="px-2">{children}</main>
            <Footer />
            <Analytics />
          </Providers>
        </TRPCReactProvider>
      </body>
    </html>
  );
}


