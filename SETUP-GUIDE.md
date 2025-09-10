# 🚀 StelTech Template - Complete Setup Guide

This guide will help you get the StelTech kids coding education website template up and running quickly.

## 📋 Prerequisites

Before you begin, make sure you have:

- **Node.js 18 or higher** - [Download here](https://nodejs.org/)
- **Code editor** - VS Code recommended
- **Git** (optional but recommended)
- **Basic knowledge** of React/Next.js (helpful but not required)

## 🔧 Step-by-Step Setup

### Step 1: Extract and Navigate
```bash
# Extract the downloaded zip file
# Navigate to the project folder
cd steltech-template
```

### Step 2: Install Dependencies
```bash
# Using npm (recommended)
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install
```

### Step 3: Start Development Server
```bash
# Using npm
npm run dev

# OR using yarn
yarn dev

# OR using pnpm
pnpm dev
```

### Step 4: View Your Site
Open your browser and go to: `http://localhost:3000`

You should see the StelTech website running! 🎉

## 🎨 Quick Customization

### Change Your Brand Colors
1. Open any component file (e.g., `components/HeroSection.tsx`)
2. Find color classes like `text-[#df15bc]`
3. Replace `#df15bc` with your brand color
4. Update `bg-[#eee4ec]` for background colors

### Update Content
1. **Hero Section**: Edit `components/HeroSection.tsx`
   - Change the main headline
   - Update statistics numbers
   - Replace hero image in `public/image.png`

2. **Features**: Edit `components/FeaturesSection.tsx`
   - Modify the `features` array
   - Update titles and descriptions

3. **Courses**: Edit `components/CoursesSection.tsx`
   - Update the `courses` array
   - Change age ranges and pricing

4. **Pricing**: Edit `components/PricingSection.tsx`
   - Modify pricing plans
   - Update features lists

### Replace Images
1. Add your images to the `public/` folder
2. Update image imports in components
3. Use Next.js Image component for optimization

## 🚀 Deployment Options

### Option 1: Vercel (Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically!

### Option 2: Netlify
1. Build your project: `npm run build`
2. Drag the `out` folder to [netlify.com](https://netlify.com)
3. Your site is live!

### Option 3: Traditional Hosting
1. Run: `npm run build`
2. Upload the generated files to your hosting provider

## 🛠️ Common Issues & Solutions

### Issue: "Module not found" errors
**Solution:** Make sure you ran `npm install` and all dependencies are installed.

### Issue: Animations not working
**Solution:** Check that components using Framer Motion have `'use client'` at the top.

### Issue: Styles not loading
**Solution:** Ensure Tailwind CSS is properly configured in `tailwind.config.ts`.

### Issue: Build errors
**Solution:** 
- Check Node.js version (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors

## 📱 Testing Responsiveness

Test your site on different screen sizes:
1. Open browser developer tools (F12)
2. Click the device toggle button
3. Test on mobile, tablet, and desktop views

## 🎯 Customization Tips

### Adding New Sections
1. Create a new component in `components/`
2. Add `'use client'` if using animations
3. Import in `app/page.tsx`
4. Wrap with `SectionWrapper` for scroll animations

### Modifying Animations
- Adjust `duration` values in Framer Motion props
- Change `delay` values for staggered animations
- Modify `whileHover` effects for interactions

### SEO Optimization
1. Update `app/layout.tsx` metadata
2. Add proper alt tags to images
3. Use semantic HTML elements

## 📊 Performance Tips

- **Images**: Use Next.js Image component
- **Fonts**: Preload important fonts
- **Code**: Remove unused components
- **Build**: Run `npm run build` to check bundle size

## 🔍 File Structure Explained

```
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── common/         # Shared components
│   └── [sections]      # Page sections
├── public/            # Static assets
└── package.json       # Dependencies
```

## 🎨 Design System

### Colors Used
- **Primary**: `#df15bc` (Pink)
- **Background**: `#eee4ec` (Light pink)
- **Cards**: `#ffffff` (White)
- **Text**: `#000000` (Black)
- **Accents**: Various bright colors for features

### Typography
- **Headings**: Bold, large sizes
- **Body**: Clean, readable fonts
- **Buttons**: Medium weight, clear labels

### Spacing
- **Sections**: `py-20` (80px vertical padding)
- **Cards**: `p-8` (32px padding)
- **Gaps**: `gap-8` (32px between elements)

## 🚀 Next Steps

1. **Customize content** to match your business
2. **Update colors** to your brand palette
3. **Add your images** and replace placeholders
4. **Test thoroughly** on different devices
5. **Deploy** to your preferred platform
6. **Set up analytics** (Google Analytics, etc.)

## 📞 Need Help?

If you run into issues:
1. Check this guide first
2. Review error messages carefully
3. Search for solutions online
4. Check Next.js and Tailwind documentation

## 🎉 You're Ready!

Your StelTech template is now set up and ready for customization. Take your time to explore the code and make it your own!

**Happy building! 🚀**