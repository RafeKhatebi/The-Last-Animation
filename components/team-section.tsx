"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function TeamSection() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(document.documentElement.lang || "en")
    }

    // Listen for language changes
    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] })

    // Initial check
    handleLanguageChange()

    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: language === "en" ? "Shah " : "شاه میر",
      role: language === "en" ? "Director & Animator" : "کارگردان و انیماتور",
      image: "/te1.jpg",
    },
    {
      name: language === "en" ? "Michael Chen" : "مایکل چن",
      role: language === "en" ? "Character Designer" : "طراح شخصیت",
      image: "/te3.jpg",
    },
    {
      name: language === "en" ? "Emma Rodriguez" : "اما رودریگز",
      role: language === "en" ? "Sound Designer" : "طراح صدا",
      image: "/te4.jpg",
    },
    {
      name: language === "en" ? "David Kim" : "دیوید کیم",
      role: language === "en" ? "Producer" : "تهیه کننده",
      image: "/professional-male-film-producer.png",
    },
  ]

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {language === "en" ? "Our Creative Team" : "تیم خلاق ما"}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {language === "en"
              ? "Meet the talented individuals who brought this animation to life through their passion and expertise."
              : "با افراد با استعدادی آشنا شوید که این انیمیشن را با اشتیاق و تخصص خود زنده کردند."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/50"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-full mx-auto w-24 h-24 sm:w-32 sm:h-32">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-sm sm:text-base text-accent font-medium">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
