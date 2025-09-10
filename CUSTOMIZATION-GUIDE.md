# 🎨 StelTech Template - Customization Guide

This guide covers advanced customization options for the StelTech kids coding education website template.

## 🎯 Brand Customization

### Changing Colors Throughout the Site

**Method 1: Find and Replace (Quick)**
1. Open your code editor's find/replace function
2. Replace `#df15bc` with your primary color
3. Replace `#eee4ec` with your background color
4. Replace `bg-[#df15bc]` with `bg-[#YOURCOLOR]`

**Method 2: Tailwind Config (Advanced)**
```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
        background: '#your-background-color',
      }
    }
  }
}
```

### Logo Integration
1. Add your logo to `public/logo.png`
2. Update `components/common/Header.tsx`:
```tsx
// Replace the text logo with image
<Image 
  src="/logo.png" 
  alt="Your Company" 
  width={120} 
  height={40}
/>
```

## 📝 Content Customization

### Hero Section Deep Dive
```tsx
// components/HeroSection.tsx

// Update main headline
<h1 className="hero-title">
  YOUR CUSTOM{" "}
  <span className="text-[#df15bc]">HEADLINE</span>, 
  YOUR TAGLINE HERE
</h1>

// Update statistics
const stats = [
  { number: "100+", label: "Your Metric" },
  { number: "5000+", label: "Another Metric" },
  { number: "99%", label: "Success Rate" },
];
```

### Features Section Customization
```tsx
// components/FeaturesSection.tsx

const features = [
  {
    icon: "🎮", // Use emoji or replace with <Icon />
    title: "Your Feature Title",
    description: "Detailed description of your feature",
    color: "bg-[#ff6b6b]" // Custom color for each feature
  },
  // Add more features...
];
```

### Courses Section Adaptation
```tsx
// components/CoursesSection.tsx

const courses = [
  {
    title: "Your Course Name",
    description: "Course description...",
    age: "Ages 8-12", // Adjust age ranges
    duration: "6 weeks", // Your timeline
    level: "Beginner",
    color: "bg-[#ff6b6b]",
    projects: ["Project 1", "Project 2", "Project 3"]
  },
  // Customize for your offerings...
];
```

### Pricing Section Updates
```tsx
// components/PricingSection.tsx

const plans = [
  {
    name: "Basic Plan",
    price: "$99/month", // Your pricing
    description: "Perfect for beginners",
    features: [
      "Feature 1",
      "Feature 2", 
      // Add your features...
    ],
    popular: false // Set true for highlighted plan
  }
];
```

## 🎭 Animation Customization

### Adjusting Animation Timing
```tsx
// Slower animations
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }} // Increased from 0.8
>

// Staggered delays
{items.map((item, index) => (
  <motion.div
    key={index}
    transition={{ delay: index * 0.2 }} // Adjust stagger timing
  >
))}
```

### Custom Animation Variants
```tsx
// Create reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Use in components
<motion.div {...fadeInUp}>
  Your content
</motion.div>
```

### Hover Effects Customization
```tsx
// Custom hover animations
<motion.div
  whileHover={{ 
    scale: 1.05, 
    rotate: 2,
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  }}
  transition={{ duration: 0.3 }}
>
```

## 🖼️ Image and Media Customization

### Replacing the Hero Image
1. Add your image to `public/` folder
2. Update the import and usage:
```tsx
import yourHeroImage from "@/public/your-hero-image.jpg";

<motion.img
  src={yourHeroImage.src}
  alt="Your description"
  className="w-full h-full object-cover"
/>
```

### Adding Background Patterns
```tsx
// Add to any section
<section className="py-20 bg-gradient-to-br from-purple-400 to-pink-400">
  {/* Or use background images */}
  <div className="bg-[url('/pattern.svg')] bg-repeat">
```

### Icon Customization
Replace emoji icons with Lucide React icons:
```tsx
import { Code, Users, Trophy } from 'lucide-react';

// Replace emoji with icon component
<div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center">
  <Code size={32} className="text-white" />
</div>
```

## 📱 Layout Customization

### Adding New Sections
1. Create new component:
```tsx
// components/NewSection.tsx
'use client';

import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';

const NewSection = () => {
  return (
    <SectionWrapper>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Your content */}
        </div>
      </section>
    </SectionWrapper>
  );
};

export default NewSection;
```

2. Add to main page:
```tsx
// app/page.tsx
import NewSection from '@/components/NewSection';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <NewSection /> {/* Your new section */}
      <CoursesSection />
      {/* ... */}
    </>
  );
}
```

### Modifying Grid Layouts
```tsx
// Change from 3 columns to 4
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

// Responsive grid with different breakpoints
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

## 🎨 Advanced Styling

### Custom CSS Classes
Add to `app/globals.css`:
```css
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

### Custom Button Styles
```tsx
// Create variant buttons
const buttonVariants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
};

<button className={`px-6 py-3 rounded-lg transition-all ${buttonVariants.primary}`}>
```

## 🔧 Functionality Enhancements

### Adding Contact Forms
```tsx
// components/ContactForm.tsx
'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      {/* Add more fields... */}
    </form>
  );
};
```

### Adding Modal/Popup Components
```tsx
// components/Modal.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
```

## 📊 SEO and Performance

### Meta Tags Customization
```tsx
// app/layout.tsx
export const metadata = {
  title: 'Your Company - Kids Coding Education',
  description: 'Your custom description here...',
  keywords: 'coding, kids, education, programming',
  openGraph: {
    title: 'Your Company',
    description: 'Your description',
    images: ['/og-image.jpg'],
  },
};
```

### Performance Optimizations
```tsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});

// Optimize images
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## 🎯 Industry-Specific Adaptations

### For Different Education Types

**Music Education:**
- Change colors to musical themes (purple, gold)
- Replace coding icons with music notes
- Update course names to instruments/theory

**Art Classes:**
- Use artistic color palettes
- Replace with art supply icons
- Update projects to art portfolios

**STEM Programs:**
- Use science-themed colors
- Add lab equipment icons
- Update to science experiments

### Age Group Adaptations

**Younger Kids (5-8):**
- Larger, more colorful elements
- Simpler language
- More playful animations

**Teenagers (13-18):**
- More sophisticated design
- Professional language
- Career-focused content

## 🚀 Advanced Features

### Adding Dark Mode
```tsx
// Add to tailwind.config.ts
module.exports = {
  darkMode: 'class',
  // ...
}

// Create theme toggle
const [darkMode, setDarkMode] = useState(false);

<div className={darkMode ? 'dark' : ''}>
  <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
    {/* Your content */}
  </div>
</div>
```

### Internationalization (i18n)
```tsx
// Create language files
const translations = {
  en: {
    hero: {
      title: "Shape Your Future",
      subtitle: "Discover the fun of coding..."
    }
  },
  es: {
    hero: {
      title: "Forma Tu Futuro",
      subtitle: "Descubre la diversión de programar..."
    }
  }
};
```

This customization guide should help you adapt the template to any coding education business or similar service. The key is to maintain the playful, professional aesthetic while making it uniquely yours!

**Happy customizing! 🎨**