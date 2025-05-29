'use client'

import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection'
import ThreeStepSection from '@/components/sections/ThreeStepSection'
import FeaturePreviewSection from '@/components/sections/FeaturePreviewSection'
import CompetitorComparisonSection from '@/components/sections/CompetitorComparisonSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ValuePropositionSection from '@/components/sections/ValuePropositionSection'
import FeatureHighlightsSection from '@/components/sections/FeatureHighlightsSection'
import PricingSection from '@/components/sections/PricingSection'
import TrustElementsSection from '@/components/sections/TrustElementsSection'
import EarlyAdopterSection from '@/components/sections/EarlyAdopterSection'

export default function HomePage() {
  useEffect(() => {
    // Initialize GSAP animations and effects
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)
        
        // Global scroll-triggered animations
        gsap.utils.toArray('.fade-in-up').forEach((element) => {
          gsap.fromTo(element, 
            { 
              opacity: 0, 
              y: 50 
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })

        // Parallax effects for sections
        gsap.utils.toArray('.parallax-element').forEach((element) => {
          gsap.to(element, {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          })
        })
      }
    }

    initializeAnimations()
  }, [])

  return (
    <main className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section - Critical for first impression */}
      <HeroSection />
      
      {/* Core Sections - Sequential development */}
      <ProblemSolutionSection />
      <ThreeStepSection />
      <FeaturePreviewSection />
      <CompetitorComparisonSection />
      <TestimonialsSection />
      <ValuePropositionSection />
      <FeatureHighlightsSection />
      <PricingSection />
      <TrustElementsSection />
      <EarlyAdopterSection />
      
      <Footer />
    </main>
  )
}
