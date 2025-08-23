"use client"

import { useState, useEffect } from "react"

export function Footer() {
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

  return (
    <footer className={`bg-muted/50 border-t border-border py-12 ${language === "fa" ? "font-arabic" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">AnimeFest</h3>
            <p className="text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Creating compelling visual stories that resonate across cultures and inspire audiences worldwide."
                : "خلق داستانهای بصری جذاب که در فرهنگها طنینانداز شده و مخاطبان سراسر جهان را الهام میبخشد."}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {language === "en" ? "Quick Links" : "لینکهای سریع"}
            </h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-accent transition-colors">
                {language === "en" ? "Home" : "خانه"}
              </a>
              <a href="#story" className="block text-muted-foreground hover:text-accent transition-colors">
                {language === "en" ? "Story" : "داستان"}
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-accent transition-colors">
                {language === "en" ? "Contact" : "تماس"}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {language === "en" ? "Recognition" : "افتخارات"}
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{language === "en" ? "Cannes Film Festival - Official Selection" : "جشنواره فیلم کن - انتخاب رسمی"}</p>
              <p>{language === "en" ? "Annecy International Animation Festival" : "جشنواره بینالمللی انیمیشن آنسی"}</p>
              <p>{language === "en" ? "SXSW Film Festival" : "جشنواره فیلم SXSW"}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>{language === "en" ? "© 2024 AnimeFest. All rights reserved." : "© ۲۰۲۴ AnimeFest. تمامی حقوق محفوظ است."}</p>
        </div>
      </div>
    </footer>
  )
}
