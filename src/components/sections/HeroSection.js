'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Zap, Target, Users } from 'lucide-react'

export default function HeroSection() {
  const heroRef = useRef(null)
  const [typedText, setTypedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  
  const fullText = "You post it. They deal it."
  
  useEffect(() => {
    // Typing animation
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    // GSAP animations
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        
        // Hero entrance animation
        const tl = gsap.timeline({ delay: 0.5 })
        
        tl.fromTo('.hero-title', 
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        .fromTo('.hero-subtitle',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo('.hero-cta',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.3'
        )
        .fromTo('.hero-stats',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.2'
        )

        // Floating animation for demo preview
        gsap.to('.floating-demo', {
          y: -20,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1
        })

        // Particle animation
        gsap.to('.particle', {
          y: -100,
          opacity: 0,
          duration: 3,
          ease: 'power2.out',
          stagger: 0.2,
          repeat: -1,
          repeatDelay: 1
        })
      }
    }

    initializeAnimations()
  }, [])

  const stats = [
    { icon: Target, value: '70%', label: 'Better Deals' },
    { icon: Users, value: '2.3min', label: 'Avg Response' },
    { icon: Zap, value: '10x', label: 'Faster Matching' }
  ]

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Matrix Grid */}
        <div className="matrix-bg absolute inset-0 opacity-30"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-primary-blue rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-purple/10"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Tagline */}
            <div className="hero-title mb-6">
              <div className="inline-block px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue text-sm font-medium mb-6">
                🚀 The Future of Deal Hunting is Here
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Smart Shopping</span>
                <br />
                <span className="text-gradient">Starts Here</span>
              </h1>
            </div>

            {/* Typing Effect Subtitle */}
            <div className="hero-subtitle mb-8">
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                {typedText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </p>
              <p className="text-lg text-gray-400 max-w-2xl">
                The AI-powered reverse marketplace where buyers post what they want, 
                and local or online sellers compete to offer the best deal.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/demo"
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 group"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Try Live Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link
                href="/signup"
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
              >
                <span>Get Early Access</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Demo Preview */}
          <div className="relative">
            <div className="floating-demo">
              {/* Demo Interface Mockup */}
              <div className="card-glass p-6 max-w-md mx-auto">
                <div className="mb-4">
                  <div className="text-sm text-primary-blue font-medium mb-2">
                    Live Demo Preview
                  </div>
                  <div className="text-lg font-semibold text-white mb-3">
                    "Looking for iPhone 15 Pro"
                  </div>
                  <div className="text-sm text-gray-400 mb-4">
                    Budget: $800-900 • Location: New York
                  </div>
                </div>

                {/* Simulated Offers */}
                <div className="space-y-3">
                  {[
                    { seller: 'TechStore NYC', price: '$849', rating: 4.9, time: '2 min ago' },
                    { seller: 'Apple Reseller', price: '$875', rating: 4.8, time: '3 min ago' },
                    { seller: 'Local Electronics', price: '$829', rating: 4.7, time: '5 min ago' }
                  ].map((offer, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-dark-accent rounded-lg border border-white/10 hover:border-primary-blue/30 transition-colors duration-300"
                    >
                      <div>
                        <div className="font-medium text-white text-sm">{offer.seller}</div>
                        <div className="text-xs text-gray-400">⭐ {offer.rating} • {offer.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary-cyan">{offer.price}</div>
                        <button className="text-xs text-primary-blue hover:text-primary-cyan transition-colors duration-300">
                          View Offer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-400 mb-2">3 offers received in 5 minutes</div>
                  <div className="w-full bg-dark-accent rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-blue/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
