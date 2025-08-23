"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Palette, Film } from "lucide-react"
import { useState, useEffect } from "react"

export function StorySection() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(document.documentElement.lang || "en")
    }

    handleLanguageChange()
    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] })

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      icon: Clock,
      label: language === "en" ? "Duration" : "مدت زمان",
      value: language === "en" ? "15 minutes" : "۱۵ دقیقه",
    },
    {
      icon: Users,
      label: language === "en" ? "Team Size" : "اندازه تیم",
      value: language === "en" ? "12 artists" : "۱۲ هنرمند",
    },
    {
      icon: Palette,
      label: language === "en" ? "Art Style" : "سبک هنری",
      value: language === "en" ? "Hand-crafted" : "دست‌ساز",
    },
    {
      icon: Film,
      label: language === "en" ? "Festivals" : "جشنواره‌ها",
      value: language === "en" ? "25+ selections" : "۲۵+ انتخاب",
    },
  ]

  const behindScenes = [
    {
      title: language === "en" ? "Concept Art" : "هنر مفهومی",
      description:
        language === "en"
          ? "Initial sketches and character designs that shaped the visual narrative."
          : "طرح‌های اولیه و طراحی شخصیت‌هایی که روایت بصری را شکل دادند.",
      image: "/animation-concept-sketches.png",
    },
    {
      title: language === "en" ? "Animation Process" : "فرآیند انیمیشن",
      description:
        language === "en"
          ? "Frame-by-frame animation bringing characters to life with fluid motion."
          : "انیمیشن فریم به فریم که شخصیت‌ها را با حرکت روان زنده می‌کند.",
      image: "/animation-frames-storyboard.png",
    },
    {
      title: language === "en" ? "Sound Design" : "طراحی صدا",
      description:
        language === "en"
          ? "Crafting the perfect audio landscape to complement the visual story."
          : "خلق منظره صوتی کامل برای تکمیل داستان بصری.",
      image: "/sound-mixing-studio.png",
    },
  ]

  return (
    <section
      id="story"
      className={`py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800 ${language === "fa" ? "font-arabic" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge
            variant="outline"
            className="mb-4 sm:mb-6 border-amber-400 text-amber-400 px-4 py-2 text-sm sm:text-base"
          >
            {language === "en" ? "Our Story" : "داستان ما"}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {language === "en" ? "Behind the Animation" : "پشت صحنه انیمیشن"}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed px-4">
            {language === "en"
              ? "Discover the creative process and artistic vision that brought this award-winning animation to life, from initial concept to international recognition."
              : "فرآیند خلاقانه و چشم‌انداز هنری که این انیمیشن برنده جوایز را زنده کرد، از مفهوم اولیه تا شناخت بین‌المللی را کشف کنید."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-amber-400 mx-auto mb-3 sm:mb-4" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm lg:text-base text-amber-200">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {behindScenes.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600 hover:scale-105 group backdrop-blur-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg?height=300&width=400"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-amber-100 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 lg:p-12 bg-slate-800/60 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              {language === "en" ? "The Creative Journey" : "سفر خلاقانه"}
            </h3>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-amber-100 space-y-4 sm:space-y-6">
              {language === "en" ? (
                <>
                  <p>
                    This animation began as a simple sketch in a coffee shop, inspired by the interplay of light and
                    shadow on a rainy afternoon. What started as a personal artistic exploration evolved into a
                    compelling narrative that resonates with audiences across cultures and languages.
                  </p>
                  <p>
                    Over the course of 18 months, our dedicated team of artists, animators, and sound designers worked
                    tirelessly to craft every frame with meticulous attention to detail. The result is a visual poem
                    that speaks to the universal human experience of growth, change, and discovery.
                  </p>
                  <p>
                    The animation has been selected for over 15 international film festivals, earning recognition for
                    its innovative storytelling techniques and stunning visual artistry. Each screening brings new
                    perspectives and interpretations, proving that great art transcends boundaries.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    این انیمیشن به عنوان یک طرح ساده در یک کافه شروع شد، الهام گرفته از تعامل نور و سایه در یک بعدازظهر
                    بارانی. آنچه به عنوان یک کاوش هنری شخصی شروع شد، به روایتی جذاب تبدیل شد که با مخاطبان در فرهنگ‌ها و
                    زبان‌های مختلف طنین‌انداز می‌شود.
                  </p>
                  <p>
                    در طول ۱۸ ماه، تیم متعهد ما از هنرمندان، انیماتورها و طراحان صدا بی‌وقفه کار کردند تا هر فریم را با
                    دقت فوق‌العاده به جزئیات بسازند. نتیجه شعری بصری است که از تجربه جهانی انسان از رشد، تغییر و کشف
                    می‌گوید.
                  </p>
                  <p>
                    این انیمیشن برای بیش از ۱۵ جشنواره فیلم بین‌المللی انتخاب شده و به خاطر تکنیک‌های نوآورانه داستان‌گویی
                    و هنر بصری خیره‌کننده‌اش شناخته شده است. هر نمایش دیدگاه‌ها و تفسیرهای جدیدی به همراه می‌آورد و ثابت
                    می‌کند که هنر بزرگ از مرزها فراتر می‌رود.
                  </p>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
