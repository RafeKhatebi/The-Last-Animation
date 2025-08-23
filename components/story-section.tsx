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
      value: language === "en" ? "Hand-crafted" : "دستساز",
    },
    {
      icon: Film,
      label: language === "en" ? "Festivals" : "جشنوارهها",
      value: language === "en" ? "25+ selections" : "۲۵+ انتخاب",
    },
  ]

  const characters = [
    {
      name: language === "en" ? "Aria" : "آریا",
      description:
        language === "en"
          ? "A brave young dreamer who discovers the power of imagination and leads the journey through mystical realms."
          : "رویاپردازی شجاع که قدرت تخیل را کشف می‌کند و سفر را در قلمروهای اسرارآمیز رهبری می‌کند.",
      image: "/cc1.jpg",
    },
    {
      name: language === "en" ? "Echo" : "پژواک",
      description:
        language === "en"
          ? "A mysterious guardian spirit who guides lost souls and protects the balance between worlds."
          : "روح نگهبان اسرارآمیز که ارواح گمشده را راهنمایی کرده و تعادل بین جهان‌ها را حفظ می‌کند.",
      image: "/cc2.jpg",
    },
    {
      name: language === "en" ? "Sage" : "حکیم",
      description:
        language === "en"
          ? "An ancient wise mentor whose knowledge spans centuries and holds the key to understanding the past."
          : "مربی حکیم باستانی که دانشش قرن‌ها را در بر می‌گیرد و کلید درک گذشته را در اختیار دارد.",
      image: "/cc3.jpg",
    },
    {
      name: language === "en" ? "Luna" : "لونا",
      description:
        language === "en"
          ? "A playful companion with the ability to transform emotions into beautiful light patterns."
          : "همراهی بازیگوش با توانایی تبدیل احساسات به الگوهای نوری زیبا.",
      image: "/cc4.jpg",
    },
    {
      name: language === "en" ? "Shadow" : "سایه",
      description:
        language === "en"
          ? "A conflicted antagonist who represents doubt and fear, yet holds unexpected depth and redemption."
          : "آنتاگونیست متضادی که نماینده تردید و ترس است، اما عمق و رستگاری غیرمنتظره‌ای دارد.",
      image: "/cc6.jpg",
    },
    {
      name: language === "en" ? "Phoenix" : "ققنوس",
      description:
        language === "en"
          ? "A majestic creature symbolizing rebirth and hope, appearing at the story's most crucial moments."
          : "موجودی باشکوه که نماد تولد دوباره و امید است و در حساس‌ترین لحظات داستان ظاهر می‌شود.",
      image: "/cc5.jpg",
    },
  ]

  return (
    <section
      id="story"
      className={`py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20 ${language === "fa" ? "font-arabic" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge
            variant="outline"
            className="mb-4 sm:mb-6 border-primary text-primary px-4 py-2 text-sm sm:text-base"
          >
            {language === "en" ? "Our Story" : "داستان ما"}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            {language === "en" ? "Behind the Animation" : "پشت صحنه انیمیشن"}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            {language === "en"
              ? "Discover the creative process and artistic vision that brought this award-winning animation to life, from initial concept to international recognition."
              : "فرآیند خلاقانه و چشم‌انداز هنری که این انیمیشن برنده جوایز را زنده کرد، از مفهوم اولیه تا شناخت بین‌المللی را کشف کنید."}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-card/50 border-border/50 hover:bg-card/80 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-primary mx-auto mb-3 sm:mb-4" />
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm lg:text-base text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">
            {language === "en" ? "Meet the Characters" : "آشنایی با شخصیت‌ها"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {characters.map((character, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-card/40 backdrop-blur-sm border-border/30 hover:bg-card/60 hover:border-accent/40 hover:scale-105 group rounded-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={character.image || "/placeholder.svg?height=200&width=200"}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 sm:p-5">
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 text-center">{character.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-center">{character.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 lg:p-12 bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8">
              {language === "en" ? "The Creative Journey" : "سفر خلاقانه"}
            </h3>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-muted-foreground space-y-4 sm:space-y-6">
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