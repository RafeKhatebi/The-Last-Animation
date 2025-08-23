"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Film, Award, Calendar, Globe, Download } from "lucide-react"

export function TechnicalSection() {
  const [language, setLanguage] = useState<"en" | "fa">("en")

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(document.documentElement.lang === "fa" ? "fa" : "en")
    }

    handleLanguageChange()
    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] })

    return () => observer.disconnect()
  }, [])

  const content = {
    en: {
      title: "Technical Specifications & Awards",
      subtitle: "Professional details for festival submission",
      runtime: "Runtime",
      format: "Format",
      resolution: "Resolution",
      aspectRatio: "Aspect Ratio",
      frameRate: "Frame Rate",
      audioFormat: "Audio Format",
      language: "Language",
      subtitles: "Subtitles",
      awards: "Awards & Recognition",
      festivals: "Festival Selections",
      downloadPress: "Download Press Kit",
      specifications: {
        runtime: "12 minutes 30 seconds",
        format: "ProRes 422 HQ / H.264",
        resolution: "4K (3840×2160)",
        aspectRatio: "16:9",
        frameRate: "24 fps",
        audioFormat: "5.1 Surround Sound",
        language: "Persian with English Subtitles",
        subtitles: "Available in 8 languages",
      },
      awardsList: [
        "Best Animation - Tehran International Film Festival 2024",
        "Audience Choice Award - Animation Festival 2024",
        "Excellence in Storytelling - Digital Arts Festival",
      ],
      festivalsList: [
        "Cannes Film Festival - Short Film Corner",
        "Annecy International Animation Festival",
        "Ottawa International Animation Festival",
        "Zagreb World Festival of Animated Film",
      ],
    },
    fa: {
      title: "مشخصات فنی و جوایز",
      subtitle: "جزئیات حرفه‌ای برای ارسال به جشنواره",
      runtime: "مدت زمان",
      format: "فرمت",
      resolution: "رزولوشن",
      aspectRatio: "نسبت تصویر",
      frameRate: "نرخ فریم",
      audioFormat: "فرمت صدا",
      language: "زبان",
      subtitles: "زیرنویس",
      awards: "جوایز و افتخارات",
      festivals: "انتخاب جشنواره‌ها",
      downloadPress: "دانلود کیت مطبوعاتی",
      specifications: {
        runtime: "۱۲ دقیقه و ۳۰ ثانیه",
        format: "ProRes 422 HQ / H.264",
        resolution: "4K (3840×2160)",
        aspectRatio: "16:9",
        frameRate: "24 fps",
        audioFormat: "صدای فراگیر ۵.۱",
        language: "فارسی با زیرنویس انگلیسی",
        subtitles: "موجود در ۸ زبان",
      },
      awardsList: [
        "بهترین انیمیشن - جشنواره بین‌المللی فیلم تهران ۲۰۲۴",
        "جایزه انتخاب تماشاگران - جشنواره انیمیشن ۲۰۲۴",
        "برتری در داستان‌سرایی - جشنواره هنرهای دیجیتال",
      ],
      festivalsList: [
        "جشنواره فیلم کن - بخش فیلم کوتاه",
        "جشنواره بین‌المللی انیمیشن آنسی",
        "جشنواره بین‌المللی انیمیشن اتاوا",
        "جشنواره جهانی فیلم انیمیشن زاگرب",
      ],
    },
  }

  const t = content[language]

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 ${language === "fa" ? "font-arabic" : ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Technical Specifications */}
          <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Film className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">{t.title.split(" & ")[0]}</h3>
              </div>

              <div className="space-y-4">
                {Object.entries(t.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="font-medium text-foreground mb-1 sm:mb-0">
                      {t[key as keyof typeof t] as string}:
                    </span>
                    <Badge variant="secondary" className="self-start sm:self-center">
                      {value}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Awards & Festivals */}
          <div className="space-y-6">
            {/* Awards */}
            <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Award className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{t.awards}</h3>
                </div>

                <div className="space-y-3">
                  {t.awardsList.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 hover:bg-amber-500/10 transition-colors"
                    >
                      <Award className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">{award}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Festival Selections */}
            <Card className="p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">{t.festivals}</h3>
                </div>

                <div className="space-y-3">
                  {t.festivalsList.map((festival, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">{festival}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Download Press Kit */}
        <div className="text-center mt-12">
          <a 
            href="/press-kit.pdf" 
            download="AnimeFest-Press-Kit.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold">{t.downloadPress}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
