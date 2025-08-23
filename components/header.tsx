"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Globe } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState("en")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fa" : "en"
    setLanguage(newLang)
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr"
    document.documentElement.lang = newLang
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300 ${language === "fa" ? "font-arabic" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground tracking-tight">AnimeFest</div>

          <nav
            className={`hidden md:flex items-center ${language === "fa" ? "space-x-reverse space-x-6 lg:space-x-8" : "space-x-6 lg:space-x-8"}`}
          >
            {[
              { href: "#home", en: "Home", fa: "خانه" },
              { href: "#story", en: "Story", fa: "داستان" },
              { href: "#team", en: "Team", fa: "تیم" },
              { href: "#contact", en: "Contact", fa: "تماس" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm lg:text-base text-foreground/80 hover:text-foreground transition-all duration-200 hover:scale-105 relative group py-2"
              >
                {language === "en" ? item.en : item.fa}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div
            className={`flex items-center ${language === "fa" ? "space-x-reverse space-x-1 sm:space-x-2" : "space-x-1 sm:space-x-2"}`}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-accent/10 transition-all duration-200 hover:scale-105"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-accent/10 transition-all duration-200 hover:scale-105"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-full hover:bg-accent/10 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative">
                <Menu
                  className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`absolute top-0 left-0 h-4 w-4 sm:h-5 sm:w-5 transition-all duration-200 ${isMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </div>
            </Button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="py-4 border-t border-border/50">
            <div className="flex flex-col space-y-1">
              {[
                { href: "#home", en: "Home", fa: "خانه" },
                { href: "#story", en: "Story", fa: "داستان" },
                { href: "#team", en: "Team", fa: "تیم" },
                { href: "#contact", en: "Contact", fa: "تماس" },
              ].map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-foreground/80 hover:text-foreground hover:bg-accent/5 transition-all duration-200 py-3 px-2 rounded-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === "en" ? item.en : item.fa}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
