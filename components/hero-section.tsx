"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState, useEffect } from "react"
import { VideoModal } from "@/components/video-modal"

export function HeroSection() {
  const [language, setLanguage] = useState("en")
  const [showVideoModal, setShowVideoModal] = useState(false)

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(document.documentElement.lang || "en")
    }

    handleLanguageChange()
    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="h-screen p-2 sm:p-4 lg:p-5 pt-15 sm:pt-20 lg:pt-20">
      <div className="h-full relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{
            backgroundImage: `url(/bg2.jpg')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 via-orange-800/25 to-red-900/35" />

        <div
          className={`h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative z-10 ${language === "fa" ? "font-arabic" : ""}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 sm:mb-8 lg:mb-18">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight tracking-wide drop-shadow-2xl">
                {language === "en" ? (
                  <span className="animate-fade-in-up block pt-12">
                    <span className="text-white">THE LAST</span>{" "}
                    <span className="text-amber-300">ANIMATION</span>
                  </span>
                ) : (
                  <div className="pt-12">
                    <span className="animate-fade-in-up mb-2 sm:mb-4">آخرین</span>
                    <span className="text-amber-300 animate-fade-in-up animation-delay-200">انیمیشن </span>
                  </div>
                )}
              </h1>
            </div>

            {/* <p className="text-sm sm:text-base md:text-lg lg:text-xl text-amber-100 mb-8 sm:mb-10 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-light italic px-4 drop-shadow-lg animate-fade-in-up animation-delay-400">
              {language === "en"
                ? '"A visual masterpiece that transcends boundaries and touches the soul"'
                : '"شاهکاری بصری که از مرزها فراتر رفته و روح را لمس می‌کند"'}
            </p> */}

            <div className="animate-fade-in-up animation-delay-1000 mb-8 sm:mb-10 lg:mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-2xl border-2 border-amber-400/50 hover:border-amber-300/70 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/25 active:scale-95"
                onClick={() => setShowVideoModal(true)}
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 mr-2 sm:mr-3" />
                {language === "en" ? "Watch Animation" : "تماشای انیمیشن"}
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10 max-w-5xl mx-auto px-4 animate-fade-in-up animation-delay-1200">
              {[
                { name: "CANNES", year: "2024", type: language === "en" ? "WINNER" : "برنده" },
                { name: "ANNECY", year: "2024", type: language === "en" ? "SELECTION" : "انتخاب شده" },
                { name: "SIGGRAPH", year: "2024", type: language === "en" ? "WINNER" : "برنده" },
                { name: "OTTAWA", year: "2024", type: language === "en" ? "SELECTION" : "انتخاب شده" },
                { name: "HIROSHIMA", year: "2024", type: language === "en" ? "WINNER" : "برنده" },
                { name: "ANIMAFEST", year: "2024", type: language === "en" ? "SELECTION" : "انتخاب شده" },
              ].map((award, index) => (
                <div
                  key={index}
                  className="bg-black/20 backdrop-blur-sm border border-amber-400/30 rounded-xl p-2 sm:p-3 lg:p-4 text-center hover:bg-black/30 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                >
                  <div className="text-amber-300 text-xs sm:text-sm font-semibold mb-1">{award.type}</div>
                  <div className="text-white text-xs sm:text-sm lg:text-base font-bold">{award.name}</div>
                  <div className="text-amber-200 text-xs">{award.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl="https://www.youtube.com/shorts/QE8EBWPLOUs"
        title={language === "en" ? "The Last Animation" : "آخرین انیمیشن"}
      />
    </section>
  )
}
