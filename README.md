# StelTech - Kids Coding Education Website Template

A modern, animated landing page template built for coding education platforms targeting children and parents. Features smooth animations, responsive design, and a playful yet professional aesthetic.

## 🎯 Perfect For
- Coding bootcamps for kids
- Online programming courses
- Educational technology startups
- Tutoring services
- STEM education platforms

## ✨ Features

### 🎨 Design & UI
- **Modern Brutalist Design** - Bold borders, vibrant colors, and playful shadows
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Powered by Framer Motion for engaging user experience
- **Kid-Friendly Aesthetics** - Colorful, fun, and approachable design language

### 🚀 Technical Features
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Professional animations and transitions
- **React 19** - Latest React features
- **Performance Optimized** - Fast loading and smooth interactions

### 📱 Sections Included
1. **Hero Section** - Eye-catching introduction with animated stats
2. **Features Section** - Highlight your platform's key benefits
3. **Courses Section** - Showcase different programming courses
4. **Pricing Section** - Clear pricing plans with feature comparisons
5. **Testimonials Section** - Student and parent testimonials
6. **Community Section** - Call-to-action for community engagement
7. **Responsive Header** - Animated navigation with mobile menu

### 🎭 Animation Features
- Scroll-triggered animations
- Hover effects and micro-interactions
- Staggered element reveals
- Smooth page transitions
- Mobile-optimized animations

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Package Manager:** npm/pnpm

## 📦 What's Included

```
steltech/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   └── SectionWrapper.tsx
│   ├── CommunitySection.tsx
│   ├── CoursesSection.tsx
│   ├── FeaturesSection.tsx
│   ├── HeroSection.tsx
│   ├── PricingSection.tsx
│   ├── SlackButton.tsx
│   └── TestimonialsSection.tsx
├── public/
│   └── image.png
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Extract the template files**
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🎨 Customization Guide

### Colors & Branding
The template uses a consistent color scheme that's easy to customize:

**Primary Colors (in Tailwind CSS):**
- Primary Pink: `#df15bc`
- Background: `#eee4ec`
- Cards: `#ffffff`
- Text: `#000000`

**To change colors:**
1. Update the color values in your components
2. Modify Tailwind classes like `text-[#df15bc]` to your brand colors

### Content Customization

**Hero Section:**
- Update the main headline and subtitle
- Replace the hero image in `/public/image.png`
- Modify the statistics numbers

**Features Section:**
- Edit the features array with your platform's benefits
- Update icons (using emoji or replace with icon components)
- Customize descriptions

**Courses Section:**
- Modify the courses array with your actual courses
- Update age ranges, durations, and project examples
- Customize pricing and course levels

**Pricing Section:**
- Update pricing plans and features
- Modify currency and pricing structure
- Add or remove features from each plan

**Testimonials:**
- Replace with real testimonials from your students/parents
- Update names, ages, and project descriptions
- Add more testimonials as needed

### Styling Customization

**Fonts:**
The template uses system fonts. To add custom fonts:
1. Import fonts in `app/layout.tsx`
2. Update Tailwind config for font families

**Animations:**
- Modify animation delays in Framer Motion props
- Adjust animation durations and easing
- Add new animation variants as needed

## 📱 Responsive Design

The template is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

All animations are optimized for mobile performance.

## 🔧 Advanced Customization

### Adding New Sections
1. Create a new component in `/components/`
2. Add `'use client'` directive if using animations
3. Import and use in `app/page.tsx`
4. Wrap with `SectionWrapper` for scroll animations

### SEO Optimization
- Update metadata in `app/layout.tsx`
- Add proper alt tags to images
- Customize page titles and descriptions

### Performance Tips
- Optimize images using Next.js Image component
- Lazy load heavy components
- Use React.memo for expensive components

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify:** Works out of the box
- **Railway:** Supports Next.js
- **DigitalOcean:** App Platform compatible

## 📄 License

This template is licensed for commercial use. You can:
- ✅ Use for client projects
- ✅ Modify and customize
- ✅ Create multiple websites
- ❌ Resell as a template
- ❌ Claim as your own work

## 🆘 Support

For questions about customization or setup:
- Check the documentation above
- Review Next.js and Tailwind CSS docs
- Common issues are usually related to Node.js version or package installation

## 🎉 Credits

Built with modern web technologies:
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- Lucide for beautiful icons

---

**Happy coding! 🚀**

*Transform your coding education platform with this professional, animated template.*