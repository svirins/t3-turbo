import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AxiomWebVitals } from "next-axiom";

import { Footer } from "~/components/footer";
import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/styles/globals.css";

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
  title: "NA Belarus Locator",
  description: "Simple app to locate NA meetings in Belarus",
  openGraph: {
    title: "NA Belarus Locator",
    description: "Simple app to locate NA meetings in Belarus",
    url: "https://na-locator.vercel.app/",
    siteName: "NA Belarus Locator",
  },
  twitter: {
    card: "summary_large_image",
    site: "@svirins",
    creator: "@svirins",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable} suppressHydrationWarning>
      <AxiomWebVitals />
      <body className="mx-auto min-h-screen max-w-2xl  font-sans antialiased">
        <TRPCReactProvider>
          <main className="flex h-dvh flex-col">
            {children}
            <Footer />
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
