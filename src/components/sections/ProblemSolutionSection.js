'use client'

import { useEffect, useRef } from 'react'
import { Clock, Search, TrendingDown, Target, Zap, Users, CheckCircle } from 'lucide-react'

export default function ProblemSolutionSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Split-screen animation
        gsap.fromTo('.problem-side',
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        gsap.fromTo('.solution-side',
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Staggered problem items
        gsap.fromTo('.problem-item',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.problem-items',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Staggered solution items
        gsap.fromTo('.solution-item',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.solution-items',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    initializeAnimations()
  }, [])

  const problems = [
    {
      icon: Clock,
      title: 'Time-Consuming Search',
      description: 'Spending hours comparing prices across multiple platforms and stores',
      stat: '70% of shoppers visit 3+ sites before buying'
    },
    {
      icon: Search,
      title: 'Limited Visibility',
      description: 'Small and local sellers struggle to reach potential customers online',
      stat: '85% of local businesses lack online presence'
    },
    {
      icon: TrendingDown,
      title: 'Seller-Centric Markets',
      description: 'Existing marketplaces prioritize sellers, not buyer needs and preferences',
      stat: 'No major buyer-first platform exists'
    }
  ]

  const solutions = [
    {
      icon: Target,
      title: 'Buyer-First Approach',
      description: 'You post what you want, sellers come to you with competitive offers',
      benefit: 'Save 3+ hours per purchase'
    },
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms match you with the best sellers based on value and trust',
      benefit: 'Get 23% better deals on average'
    },
    {
      icon: Users,
      title: 'Real-Time Competition',
      description: 'Multiple sellers compete for your business with live offers and negotiations',
      benefit: 'Receive offers in under 3 minutes'
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-dark-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="section-title">
            The Problem We're Solving
          </h2>
          <p className="section-subtitle">
            Shopping shouldn't be a time-consuming hunt. We're flipping the script 
            to put buyers first and make deal-hunting effortless.
          </p>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Problem Side */}
          <div className="problem-side">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
                😤 Current Problems
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Why Shopping Sucks Today
              </h3>
              <p className="text-gray-400">
                The current marketplace model is broken and inefficient for buyers
              </p>
            </div>

            <div className="problem-items space-y-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon
                return (
                  <div key={index} className="problem-item card-glass p-6 border-l-4 border-red-500/50">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-red-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {problem.title}
                        </h4>
                        <p className="text-gray-400 mb-3">
                          {problem.description}
                        </p>
                        <div className="text-sm text-red-400 font-medium">
                          📊 {problem.stat}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Solution Side */}
          <div className="solution-side">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
                ✨ Our Solution
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                How BestzDealAi Fixes This
              </h3>
              <p className="text-gray-400">
                A revolutionary approach that puts buyers in control
              </p>
            </div>

            <div className="solution-items space-y-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <div key={index} className="solution-item card-glass p-6 border-l-4 border-green-500/50 hover:border-primary-blue/50 transition-colors duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-gray-400 mb-3">
                          {solution.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-green-400 font-medium">
                            {solution.benefit}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="fade-in-up">
          <div className="card-glass p-8 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              The BestzDealAi Advantage
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                  70%
                </div>
                <div className="text-sm text-gray-400">
                  Time Saved
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  vs traditional shopping
                </div>
              </div>
              
              <div className="group">
                <div className="text-3xl font-bold text-primary-cyan mb-2 group-hover:scale-110 transition-transform duration-300">
                  23%
                </div>
                <div className="text-sm text-gray-400">
                  Better Deals
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  average savings
                </div>
              </div>
              
              <div className="group">
                <div className="text-3xl font-bold text-primary-purple mb-2 group-hover:scale-110 transition-transform duration-300">
                  2.3min
                </div>
                <div className="text-sm text-gray-400">
                  Response Time
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  average seller response
                </div>
              </div>
              
              <div className="group">
                <div className="text-3xl font-bold text-primary-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                  10x
                </div>
                <div className="text-sm text-gray-400">
                  More Efficient
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  than price comparison
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
