# AnimeFest - Award-Winning Animation Showcase

A professional, bilingual (English/Persian) website showcasing "The Last Animation" - an award-winning animated short film. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 📸 Screenshots

### Desktop View
![Hero Section](./reimage/Screenshot%202025-10-08%20213916.png)
*Hero section with bilingual support and award showcase*

![Story & Characters](./reimage/Screenshot%202025-10-08%20213957.png)
*Behind-the-scenes story and character profiles*

![Technical Specs](./reimage/Screenshot%202025-10-08%20214027.png)
*Professional technical specifications and festival awards*

![Contact Section](./reimage/Screenshot%202025-10-08%20214100.png)
*Contact form and social media integration*

## 🎬 Features:

### Core Functionality
- **Bilingual Support**: Complete English/Persian (Farsi) translation with RTL support
- **Video Modal**: Integrated video player for animation preview
- **Contact System**: Working contact form with API endpoint
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Theme switching with system preference detection

### Sections
- **Hero Section**: Full-screen slide with animation title and awards
- **Story Section**: Behind-the-scenes content and creative process with 3D character models
- **Team Section**: Meet the creative team with photos and roles
- **Technical Section**: Professional specifications and festival selections
- **Contact Section**: Contact form and social media links
- **Footer**: Quick links and recognition details

### Professional Features
- **3D Character Models**: Interactive 3D models using model-viewer with auto-rotate and camera controls
- **SEO Optimized**: Complete meta tags and Open Graph support
- **Press Kit Download**: Downloadable press materials
- **Festival Awards**: Showcase of international recognition
- **Scroll to Top**: Smooth navigation enhancement
- **Loading Animations**: CSS animations for enhanced UX

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd animation-showcase
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
animation-showcase/
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Main hero section
│   ├── story-section.tsx    # Story and behind-the-scenes
│   ├── characters-3d-section.tsx # 3D character models section
│   ├── team-section.tsx     # Team member profiles
│   ├── technical-section.tsx # Technical specs and awards
│   ├── contact-section.tsx  # Contact form and info
│   ├── footer.tsx           # Site footer
│   ├── video-modal.tsx      # Video player modal
│   └── scroll-to-top.tsx    # Scroll to top button
├── public/
│   ├── models/              # 3D character model files (.glb/.gltf)
│   └── ...                  # Other static assets and images
└── lib/                     # Utility functions
```

## 🌐 Language Support

### Switching Languages
- Click the globe icon (🌐) in the header
- Automatically switches between English and Persian
- RTL layout support for Persian text
- All content translated including:
  - Navigation menus
  - Section headings
  - Award descriptions
  - Contact form labels
  - Footer content

### Adding New Languages
1. Update language state in components
2. Add translation objects
3. Include new font support in `layout.tsx`

## 🎨 Customization

### Content Updates
- **Animation Title**: Update in `hero-section.tsx`
- **Team Members**: Modify team array in `team-section.tsx`
- **Awards**: Update awards list in `hero-section.tsx` and `technical-section.tsx`
- **Contact Info**: Change details in `contact-section.tsx`

### Styling
- **Colors**: Modify Tailwind classes (amber theme currently)
- **Fonts**: Update in `layout.tsx` (Geist Sans + Noto Sans Arabic)
- **Animations**: CSS animations in `globals.css`

### Images
Replace placeholder images in `/public/`:
- `cinematic-hero-background.png` - Hero background
- `animation-preview-frame.png` - Preview thumbnail
- Team member photos (`te1.jpg`, `te2.jpg`, etc.)
- Behind-the-scenes images

## 🔧 Technical Details

### Built With
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **3D Models**: Google Model Viewer for interactive 3D character display
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Noto Sans Arabic
- **Theme**: next-themes for dark/light mode

### Key Dependencies
- `next`: 15.2.4
- `react`: 19
- `typescript`: 5
- `tailwindcss`: 4.1.12
- `lucide-react`: 0.454.0
- `next-themes`: latest

## 📱 Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Festival Submission Ready

This website is specifically designed for film festival submissions with:
- Professional technical specifications
- Downloadable press kit
- High-quality imagery
- Award showcase
- Contact information for programmers
- SEO optimization for discovery

## 📞 Support

For technical support or customization requests, contact the development team through the website's contact form.

## 📄 License

All rights reserved for Animation Studio © 2024

---

**Note**: Replace placeholder content, images, and video URLs with actual animation materials before deployment.