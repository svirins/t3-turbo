import type { Metadata, Viewport } from "next";
import { AxiomWebVitals } from "next-axiom";

import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
import { Toaster } from "@acme/ui/toast";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AxiomWebVitals />
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
