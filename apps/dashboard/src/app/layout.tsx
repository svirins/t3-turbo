import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'StabilityPro',
  description: 'Saas product for HSS business owners'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className="min-h-screen bg-background font-sans antialiased __variable_725fdb"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
