import type { Metadata } from "next"

import { OutfitFont } from "@/lib/fonts"

import "./globals.css"
import { cn } from "@/lib/utils"

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
          "container mx-auto px-4 font-outfit antialiased",
          OutfitFont.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
