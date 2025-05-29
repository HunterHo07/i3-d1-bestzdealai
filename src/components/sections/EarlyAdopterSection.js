'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Rocket, Gift, Crown, Star, ArrowRight, Mail, 
  CheckCircle, Clock, Users, Zap 
} from 'lucide-react'

export default function EarlyAdopterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(1)
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Section entrance animation
        gsap.fromTo('.early-adopter-content',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Level cards animation
        gsap.fromTo('.level-card',
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.levels-container',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Floating particles animation
        gsap.to('.floating-particle', {
          y: -20,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.3
        })
      }
    }

    initializeAnimations()
  }, [])

  const earlyAdopterLevels = [
    {
      level: 1,
      title: 'Pioneer',
      icon: Rocket,
      description: 'Be among the first 1,000 users',
      benefits: [
        'Lifetime 50% discount',
        'Exclusive beta access',
        'Direct founder feedback',
        'Pioneer badge & recognition'
      ],
      spots: '847 / 1,000',
      color: 'blue',
      cta: 'Join as Pioneer'
    },
    {
      level: 2,
      title: 'VIP Member',
      icon: Crown,
      description: 'First 5,000 premium users',
      benefits: [
        'Lifetime 30% discount',
        'Priority customer support',
        'Early feature access',
        'VIP community access'
      ],
      spots: '3,241 / 5,000',
      color: 'purple',
      cta: 'Become VIP Member'
    },
    {
      level: 3,
      title: 'Early Bird',
      icon: Gift,
      description: 'First 10,000 general users',
      benefits: [
        'Lifetime 20% discount',
        'Free premium trial',
        'Community access',
        'Early bird rewards'
      ],
      spots: '7,892 / 10,000',
      color: 'cyan',
      cta: 'Get Early Access'
    }
  ]

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Simulate email submission
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  const getColorClasses = (color) => {
    const colors = {
      blue: 'border-primary-blue bg-primary-blue/10 text-primary-blue',
      purple: 'border-primary-purple bg-primary-purple/10 text-primary-purple',
      cyan: 'border-primary-cyan bg-primary-cyan/10 text-primary-cyan'
    }
    return colors[color] || colors.blue
  }

  const getButtonClasses = (color) => {
    const colors = {
      blue: 'bg-gradient-to-r from-primary-blue to-primary-cyan',
      purple: 'bg-gradient-to-r from-primary-purple to-primary-blue',
      cyan: 'bg-gradient-to-r from-primary-cyan to-primary-blue'
    }
    return colors[color] || colors.blue
  }

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-primary-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-purple/5"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="early-adopter-content text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue text-sm font-medium mb-6">
            🚀 Limited Time Opportunity
          </div>
          <h2 className="section-title">
            Join the Revolution Early
          </h2>
          <p className="section-subtitle">
            Be part of the future of shopping. Early adopters get exclusive benefits, 
            lifetime discounts, and direct access to shape the platform.
          </p>
        </div>

        {/* Early Adopter Levels */}
        <div className="levels-container mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {earlyAdopterLevels.map((level, index) => {
              const Icon = level.icon
              const isSelected = currentLevel === level.level
              
              return (
                <div 
                  key={index}
                  className={`level-card card-glass p-6 cursor-pointer transition-all duration-300 ${
                    isSelected 
                      ? 'border-2 border-primary-blue glow-effect scale-105' 
                      : 'border border-white/10 hover:border-primary-blue/30'
                  }`}
                  onClick={() => setCurrentLevel(level.level)}
                >
                  {/* Level Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold border ${getColorClasses(level.color)}`}>
                      Level {level.level}
                    </div>
                    <div className="text-xs text-gray-400">
                      {level.spots} spots left
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full border-2 ${getColorClasses(level.color)} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {level.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {level.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-dark-accent rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getButtonClasses(level.color)}`}
                        style={{ width: `${(parseInt(level.spots.split(' / ')[0].replace(',', '')) / parseInt(level.spots.split(' / ')[1].replace(',', ''))) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mt-1 text-center">
                      {level.spots} spots remaining
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 ${getButtonClasses(level.color)}`}>
                    {level.cta}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Email Signup */}
        <div className="early-adopter-content max-w-2xl mx-auto mb-16">
          <div className="card-glass p-8 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Secure Your Spot Now
            </h3>
            <p className="text-gray-400 mb-6">
              Enter your email to reserve your early adopter status and receive 
              exclusive updates about our launch.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue transition-colors duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  <Mail className="w-5 h-5" />
                  <span>Reserve My Spot</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">
                  Success! Check your email for confirmation.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Urgency Indicators */}
        <div className="early-adopter-content grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-glass p-6 text-center">
            <Clock className="w-8 h-8 text-primary-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">72 hours</div>
            <div className="text-sm text-gray-400">Until price increase</div>
          </div>

          <div className="card-glass p-6 text-center">
            <Users className="w-8 h-8 text-primary-cyan mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">2,847</div>
            <div className="text-sm text-gray-400">People joined today</div>
          </div>

          <div className="card-glass p-6 text-center">
            <Zap className="w-8 h-8 text-primary-purple mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">Launch</div>
            <div className="text-sm text-gray-400">Coming January 2025</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="early-adopter-content text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Don't Miss Out on the Future of Shopping
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Join thousands of smart shoppers who are already saving time and money. 
              The revolution starts with early adopters like you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 group">
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Join the Revolution</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
