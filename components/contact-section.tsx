"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

export function ContactSection() {
  const [language, setLanguage] = useState("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(document.documentElement.lang || "en")
    }

    handleLanguageChange()
    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        alert(language === "en" ? "Message sent successfully!" : "پیام با موفقیت ارسال شد!")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      alert(language === "en" ? "Failed to send message. Please try again." : "ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <section id="contact" className={`py-16 sm:py-20 lg:py-24 bg-background ${language === "fa" ? "font-arabic" : ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4">
            {language === "en" ? "Get in Touch" : "در تماس باشید"}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            {language === "en" ? "Let's Connect" : "بیایید در ارتباط باشیم"}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            {language === "en"
              ? "Interested in collaborations, screenings, or just want to chat about animation? We'd love to hear from you."
              : "علاقه‌مند به همکاری، نمایش، یا فقط می‌خواهید درباره انیمیشن صحبت کنید؟ دوست داریم از شما بشنویم."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-xl sm:text-2xl">
                {language === "en" ? "Send us a Message" : "پیام خود را ارسال کنید"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {language === "en" ? "Name" : "نام"}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={language === "en" ? "Your name" : "نام شما"}
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {language === "en" ? "Email" : "ایمیل"}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={language === "en" ? "your@email.com" : "ایمیل@شما.com"}
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    {language === "en" ? "Subject" : "موضوع"}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={language === "en" ? "What's this about?" : "این درباره چیست؟"}
                    className="h-10 sm:h-11"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {language === "en" ? "Message" : "پیام"}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={language === "en" ? "Tell us more..." : "بیشتر بگویید..."}
                    rows={4}
                    className="resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 h-10 sm:h-11">
                  {language === "en" ? "Send Message" : "ارسال پیام"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                  {language === "en" ? "Contact Information" : "اطلاعات تماس"}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">hello@animefest.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">+93 (728) 958423</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">
                      {language === "en" ? "Los Angeles, CA" : "لس آنجلس، کالیفرنیا"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                  {language === "en" ? "Follow Our Journey" : "سفر ما را دنبال کنید"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0" />
                      <span className="text-sm text-foreground">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                  {language === "en" ? "Festival Screenings" : "نمایش در جشنواره‌ها"}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  {language === "en"
                    ? "Interested in screening our animation at your festival or event? We're always excited to share our work with new audiences."
                    : "علاقه‌مند به نمایش انیمیشن ما در جشنواره یا رویداد خود هستید؟ ما همیشه هیجان‌زده‌ایم که کارمان را با مخاطبان جدید به اشتراک بگذاریم."}
                </p>
                <Button variant="outline" className="w-full bg-transparent h-10 sm:h-11">
                  {language === "en" ? "Request Screening" : "درخواست نمایش"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
