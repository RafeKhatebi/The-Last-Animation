"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun, Globe, Film } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState("en")
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg shadow-primary/5'
        : 'bg-background/60 backdrop-blur-lg border-b border-border/20'
        } ${language === "fa" ? "font-arabic" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-amber-400 to-amber-600 p-2 rounded-lg overflow-hidden">
                <img
                  src="/gf.png"
                  alt="Logo"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-cover"
                />
              </div>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent tracking-tight">
              {language === "en" ? "Novatech" : "نواتیک"}
            </div>
          </div>

          <nav className={`hidden md:flex items-center bg-card/30 backdrop-blur-sm rounded-full px-6 py-2 border border-border/20 ${language === "fa" ? "space-x-reverse space-x-8" : "space-x-8"}`}>
            {[
              { href: "#home", en: "Home", fa: "خانه" },
              { href: "#story", en: "Story", fa: "داستان" },
              { href: "#team", en: "Team", fa: "تیم" },
              { href: "#contact", en: "Contact", fa: "تماس" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm lg:text-base font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 py-2 px-3 rounded-full hover:bg-primary/10 group"
              >
                {language === "en" ? item.en : item.fa}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
              </a>
            ))}
          </nav>

          <div className={`flex items-center bg-card/30 backdrop-blur-sm rounded-full p-1 border border-border/20 ${language === "fa" ? "space-x-reverse space-x-1" : "space-x-1"}`}>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 relative z-10" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 z-10" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
              onClick={toggleLanguage}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              <Globe className={`h-5 w-5 transition-all duration-300 relative z-10 ${language === 'fa' ? 'rotate-180' : 'rotate-0'}`} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300 group relative overflow-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              <div className="relative z-10">
                <Menu className={`h-5 w-5 transition-all duration-300 ${isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`} />
                <X className={`absolute top-0 left-0 h-5 w-5 transition-all duration-300 ${isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"}`} />
              </div>
            </Button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="py-4 border-t border-border/30">
            <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-4 border border-border/20">
              <div className="flex flex-col space-y-2">
                {[
                  { href: "#home", en: "Home", fa: "خانه" },
                  { href: "#story", en: "Story", fa: "داستان" },
                  { href: "#team", en: "Team", fa: "تیم" },
                  { href: "#contact", en: "Contact", fa: "تماس" },
                ].map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-xl hover:scale-105 transform opacity-0 animate-slide-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === "en" ? item.en : item.fa}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
