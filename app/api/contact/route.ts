import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // اینجا میتوانید ایمیل ارسال کنید یا در دیتابیس ذخیره کنید
    // مثال: ارسال به سرویس ایمیل یا ذخیره در دیتابیس
    
    console.log('Contact form submission:', { name, email, subject, message })
    
    // شبیه‌سازی ارسال موفق
    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}