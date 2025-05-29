'use client'

import { useEffect, useRef } from 'react'
import { Check, X, Zap, Target, Users, Brain, Clock, Shield } from 'lucide-react'

export default function CompetitorComparisonSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Table animation
        gsap.fromTo('.comparison-table',
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

        // Row animations
        gsap.fromTo('.table-row',
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.comparison-table',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Highlight our column
        gsap.fromTo('.our-column',
          { scale: 0.95, opacity: 0.8 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: '.comparison-table',
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    initializeAnimations()
  }, [])

  const competitors = [
    {
      name: 'Traditional Marketplaces',
      examples: 'Amazon, eBay, Facebook',
      logo: '🛒',
      color: 'gray'
    },
    {
      name: 'Price Comparison',
      examples: 'Google Shopping, PriceGrabber',
      logo: '📊',
      color: 'blue'
    },
    {
      name: 'Service Platforms',
      examples: 'Fiverr, TaskRabbit',
      logo: '🔧',
      color: 'green'
    },
    {
      name: 'BestzDealAi',
      examples: 'Our Revolutionary Platform',
      logo: '⚡',
      color: 'primary',
      isOurs: true
    }
  ]

  const features = [
    {
      category: 'Core Approach',
      icon: Target,
      items: [
        {
          feature: 'Buyer-Initiated Requests',
          values: [false, false, true, true] // Traditional, Price Comparison, Service Platforms, Us
        },
        {
          feature: 'Seller Competition',
          values: [false, false, true, true]
        },
        {
          feature: 'Real-Time Offers',
          values: [false, false, false, true]
        }
      ]
    },
    {
      category: 'AI & Technology',
      icon: Brain,
      items: [
        {
          feature: 'AI-Powered Matching',
          values: [false, false, false, true]
        },
        {
          feature: 'Smart Deal Ranking',
          values: [false, true, false, true]
        },
        {
          feature: 'Predictive Pricing',
          values: [false, false, false, true]
        }
      ]
    },
    {
      category: 'User Experience',
      icon: Users,
      items: [
        {
          feature: 'One-Post Multiple Offers',
          values: [false, false, false, true]
        },
        {
          feature: 'Negotiation Tools',
          values: [false, false, true, true]
        },
        {
          feature: 'Local + Online Sellers',
          values: [true, true, false, true]
        }
      ]
    },
    {
      category: 'Efficiency',
      icon: Clock,
      items: [
        {
          feature: 'Time to Best Deal',
          values: ['Hours', 'Minutes', 'Hours', '< 3 min']
        },
        {
          feature: 'Effort Required',
          values: ['High', 'Medium', 'Medium', 'Low']
        },
        {
          feature: 'Deal Quality',
          values: ['Variable', 'Good', 'Variable', 'Excellent']
        }
      ]
    }
  ]

  const advantages = [
    {
      icon: Zap,
      title: 'Revolutionary Approach',
      description: 'First true buyer-initiated marketplace where sellers compete for your business'
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Smart algorithms that learn your preferences and find the best value deals'
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get multiple competitive offers in minutes, not hours of searching'
    },
    {
      icon: Shield,
      title: 'Verified Quality',
      description: 'All sellers are verified with ratings, reviews, and trust scores'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-dark-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-cyan/10 border border-primary-cyan/20 rounded-full text-primary-cyan text-sm font-medium mb-6">
            🏆 Competitive Advantage
          </div>
          <h2 className="section-title">
            Why We're Different
          </h2>
          <p className="section-subtitle">
            See how BestzDealAi revolutionizes deal-hunting compared to traditional platforms. 
            We're not just better — we're completely different.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table overflow-x-auto mb-16">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 mb-6">
              <div className="text-left">
                <h3 className="text-lg font-bold text-white">Features</h3>
              </div>
              {competitors.map((competitor, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 rounded-lg ${
                    competitor.isOurs 
                      ? 'our-column bg-gradient-primary text-white' 
                      : 'bg-dark-accent text-gray-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{competitor.logo}</div>
                  <div className="font-bold text-sm">{competitor.name}</div>
                  <div className="text-xs opacity-75">{competitor.examples}</div>
                </div>
              ))}
            </div>

            {/* Feature Categories */}
            {features.map((category, categoryIndex) => {
              const CategoryIcon = category.icon
              return (
                <div key={categoryIndex} className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <CategoryIcon className="w-5 h-5 text-primary-blue" />
                    <h4 className="text-lg font-semibold text-white">{category.category}</h4>
                  </div>
                  
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="table-row grid grid-cols-5 gap-4 py-3 border-b border-white/10">
                      <div className="text-gray-300 font-medium">
                        {item.feature}
                      </div>
                      {item.values.map((value, valueIndex) => (
                        <div key={valueIndex} className="text-center">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <Check className={`w-5 h-5 mx-auto ${
                                valueIndex === 3 ? 'text-green-400' : 'text-gray-400'
                              }`} />
                            ) : (
                              <X className="w-5 h-5 mx-auto text-red-400" />
                            )
                          ) : (
                            <span className={`text-sm ${
                              valueIndex === 3 ? 'text-primary-cyan font-bold' : 'text-gray-400'
                            }`}>
                              {value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Advantages */}
        <div className="fade-in-up">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Our Unique Advantages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <div key={index} className="feature-card group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {advantage.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up">
          <div className="card-glass p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Experience the BestzDealAi Difference
            </h3>
            <p className="text-gray-400 mb-6">
              Don't just take our word for it. Try our revolutionary platform and see 
              why thousands of smart shoppers are making the switch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue">70%</div>
                <div className="text-sm text-gray-400">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-cyan">23%</div>
                <div className="text-sm text-gray-400">Better Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-purple">2.3min</div>
                <div className="text-sm text-gray-400">Avg Response</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Try Live Demo
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
