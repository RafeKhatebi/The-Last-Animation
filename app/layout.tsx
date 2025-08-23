import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Noto_Sans_Arabic } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Last Animation - Award-Winning Short Film | AnimeFest",
  description: "An award-winning animated short film that transcends boundaries. Selected for Cannes, Annecy, and 15+ international festivals. Watch the visual masterpiece now.",
  keywords: "animation, short film, award-winning, Cannes, Annecy, film festival, visual storytelling, animated movie",
  authors: [{ name: "AnimeFest Studio" }],
  creator: "AnimeFest Studio",
  publisher: "AnimeFest Studio",
  openGraph: {
    title: "The Last Animation - Award-Winning Short Film",
    description: "A visual masterpiece that transcends boundaries and touches the soul. Selected for 15+ international film festivals.",
    url: "https://your-domain.com",
    siteName: "AnimeFest",
    images: [
      {
        url: "/animation-preview-frame.png",
        width: 1200,
        height: 630,
        alt: "The Last Animation - Preview Frame",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Animation - Award-Winning Short Film",
    description: "A visual masterpiece selected for Cannes, Annecy, and 15+ international festivals.",
    images: ["/animation-preview-frame.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  --font-arabic: ${notoSansArabic.variable};
}
        `}</style>
      </head>
      <body className={notoSansArabic.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
