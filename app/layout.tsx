import type { Metadata } from "next"

import { OutfitFont } from "@/lib/fonts"

import "@/styles/globals.css"
import NextTopLoader from "nextjs-toploader"

import { cn } from "@/lib/utils"
import { Header } from "@/components/header/header"
import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata: Metadata = {
  title: "Framer Motion Animation",
  description: "Framer Motion Animation",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto min-h-lvh font-outfit antialiased",
          OutfitFont.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextTopLoader
            color="hsl(var(--primary))"
            height={2}
            showSpinner={false}
          />
          <Header />
          <div className="container flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
