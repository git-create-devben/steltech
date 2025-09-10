import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CoursesSection from '@/components/CoursesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import CommunitySection from '@/components/CommunitySection'
import Footer from '@/components/common/Footer'
import SectionWrapper from '@/components/common/SectionWrapper'
import React from 'react'

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <section id="home">
        <HeroSection />
      </section>
      <SectionWrapper>
        <section id="features">
          <FeaturesSection />
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <section id="courses">
          <CoursesSection />
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <section id="pricing">
          <PricingSection />
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <section id="community">
          <CommunitySection />
        </section>
      </SectionWrapper>
      <Footer />
    </div>
  )
}

export default LandingPage
