'use client'

import { useEffect, useRef } from 'react'
import { Edit3, Users, Handshake, ArrowRight, CheckCircle } from 'lucide-react'

export default function ThreeStepSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Timeline animation for steps
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        })

        // Animate steps sequentially
        tl.fromTo('.step-card',
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: 'back.out(1.7)'
          }
        )
        .fromTo('.step-connector',
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: 'power2.out'
          },
          '-=0.4'
        )

        // Hover animations for step cards
        gsap.utils.toArray('.step-card').forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out'
            })
          })

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out'
            })
          })
        })
      }
    }

    initializeAnimations()
  }, [])

  const steps = [
    {
      number: '01',
      icon: Edit3,
      title: 'Post Your Request',
      description: 'Tell us what you want, your budget, and preferences. Add photos or details to help sellers understand your needs.',
      features: [
        'Simple form interface',
        'Budget range selection',
        'Location preferences',
        'Photo uploads',
        'Detailed descriptions'
      ],
      example: 'iPhone 15 Pro, $800-900, New York area'
    },
    {
      number: '02',
      icon: Users,
      title: 'Sellers Compete',
      description: 'Local and online sellers receive your request and compete with their best offers. Watch offers come in real-time.',
      features: [
        'Real-time notifications',
        'Verified seller profiles',
        'Competitive pricing',
        'Instant messaging',
        'Offer comparisons'
      ],
      example: '5 offers received in 3 minutes'
    },
    {
      number: '03',
      icon: Handshake,
      title: 'Choose & Deal',
      description: 'Compare offers, negotiate if needed, and complete your purchase with the best seller. Rate your experience.',
      features: [
        'Smart offer ranking',
        'Negotiation tools',
        'Secure payments',
        'Delivery tracking',
        'Review system'
      ],
      example: 'Save $127 vs retail price'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue text-sm font-medium mb-6">
            🎯 How It Works
          </div>
          <h2 className="section-title">
            Three Simple Steps to Better Deals
          </h2>
          <p className="section-subtitle">
            Our revolutionary process puts you in control and makes deal-hunting effortless. 
            No more endless searching — let the deals come to you.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="flex-1 relative">
                    {/* Step Card */}
                    <div className="step-card card-glass p-8 mx-4 text-center group cursor-pointer">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-6">
                        {step.description}
                      </p>

                      {/* Example */}
                      <div className="bg-dark-accent p-3 rounded-lg mb-4">
                        <div className="text-sm text-primary-cyan font-medium">
                          Example: {step.example}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Connector Arrow */}
                    {index < steps.length - 1 && (
                      <div className="step-connector absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-primary-blue" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="step-card card-glass p-6">
                    <div className="flex items-start space-x-4">
                      {/* Step Number & Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-center">
                          <span className="text-xs text-primary-blue font-bold">
                            STEP {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {step.description}
                        </p>

                        {/* Example */}
                        <div className="bg-dark-accent p-3 rounded-lg mb-4">
                          <div className="text-sm text-primary-cyan font-medium">
                            💡 {step.example}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 gap-2">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="w-px h-8 bg-gradient-primary"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ready to Experience the Future of Shopping?
            </h3>
            <p className="text-gray-400 mb-6">
              Join thousands of smart shoppers who are already saving time and money with BestzDealAi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Try Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
