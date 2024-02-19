import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { TRPCReactProvider } from "~/trpc/react";
import "~/styles/globals.css";


const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
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
    <html lang="ru" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="mx-auto min-h-lvh   max-w-2xl font-sans antialiased">
        <TRPCReactProvider>
            <Toaster position="top-center" />
            <main className="">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}


