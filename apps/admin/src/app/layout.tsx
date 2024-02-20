import "@/styles/globals.css"

import type { Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import { TRPCReactProvider } from "@/trpc/react"

import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/ui/site-header"
import { TailwindIndicator } from "@/components/ui/tailwind-indicator"
import { ThemeProvider } from "@/components/ui/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  themeColor: "black",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TRPCReactProvider>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </TRPCReactProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
