import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"

import { TRPCReactProvider } from "@/trpc/react";
import "@/styles/globals.css";


const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});



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
    <html lang="ru"  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )} suppressHydrationWarning>
      <body>
        <TRPCReactProvider>
            <main className="">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}


