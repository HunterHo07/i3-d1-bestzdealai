'use client'

import { useState, useEffect, useRef } from 'react'
import { Check, X, Star, Zap, Crown, Rocket } from 'lucide-react'

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Pricing cards animation
        gsap.fromTo('.pricing-card',
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Featured card highlight
        gsap.fromTo('.featured-card',
          { scale: 0.95 },
          {
            scale: 1.05,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.featured-card',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    initializeAnimations()
  }, [])

  const plans = [
    {
      name: 'Free Explorer',
      icon: Star,
      description: 'Perfect for trying out BestzDealAi',
      price: { monthly: 0, yearly: 0 },
      originalPrice: null,
      features: [
        '3 deal posts per month',
        'Basic seller matching',
        'Standard support',
        'Mobile app access',
        'Basic analytics'
      ],
      limitations: [
        'No priority placement',
        'Limited chat features',
        'No advanced analytics',
        'No API access'
      ],
      cta: 'Start Free',
      popular: false,
      color: 'gray'
    },
    {
      name: 'Smart Shopper',
      icon: Zap,
      description: 'For regular deal hunters and smart shoppers',
      price: { monthly: 19, yearly: 15 },
      originalPrice: { monthly: 29, yearly: 23 },
      features: [
        '25 deal posts per month',
        'AI-powered seller matching',
        'Priority support',
        'Advanced chat features',
        'Detailed analytics',
        'Price trend insights',
        'Negotiation tools',
        'Mobile & web access'
      ],
      limitations: [
        'No API access',
        'Standard verification'
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
      color: 'blue'
    },
    {
      name: 'Business Pro',
      icon: Crown,
      description: 'For businesses and power users',
      price: { monthly: 49, yearly: 39 },
      originalPrice: { monthly: 69, yearly: 55 },
      features: [
        'Unlimited deal posts',
        'Premium AI matching',
        'Priority seller placement',
        '24/7 premium support',
        'Advanced analytics dashboard',
        'Market intelligence reports',
        'Bulk posting tools',
        'Team collaboration',
        'Custom integrations',
        'Dedicated account manager'
      ],
      limitations: [],
      cta: 'Start 30-Day Trial',
      popular: false,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      description: 'Custom solutions for large organizations',
      price: { monthly: 'Custom', yearly: 'Custom' },
      originalPrice: null,
      features: [
        'Everything in Business Pro',
        'Custom AI model training',
        'White-label solutions',
        'API access & webhooks',
        'Custom integrations',
        'Dedicated infrastructure',
        'SLA guarantees',
        'Custom reporting',
        'On-premise deployment',
        'Training & onboarding'
      ],
      limitations: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'gradient'
    }
  ]

  const getCardClasses = (plan) => {
    if (plan.popular) {
      return 'pricing-card featured-card border-2 border-primary-blue glow-effect relative'
    }
    return 'pricing-card border border-white/10 hover:border-primary-blue/30 transition-all duration-300'
  }

  const getIconClasses = (color) => {
    const colors = {
      gray: 'bg-gray-500/20 text-gray-400',
      blue: 'bg-gradient-primary text-white',
      purple: 'bg-primary-purple/20 text-primary-purple',
      gradient: 'bg-gradient-secondary text-white'
    }
    return colors[color] || colors.gray
  }

  const getPrice = (plan) => {
    if (typeof plan.price[billingCycle] === 'string') {
      return plan.price[billingCycle]
    }
    return plan.price[billingCycle]
  }

  const getOriginalPrice = (plan) => {
    if (!plan.originalPrice || typeof plan.originalPrice[billingCycle] === 'string') {
      return null
    }
    return plan.originalPrice[billingCycle]
  }

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            💰 Pricing Plans
          </div>
          <h2 className="section-title">
            Choose Your Perfect Plan
          </h2>
          <p className="section-subtitle">
            Start free and upgrade as you save more. All plans include our core features 
            with no hidden fees or long-term commitments.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 fade-in-up">
          <div className="bg-dark-card p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-primary-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary-blue text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = getPrice(plan)
            const originalPrice = getOriginalPrice(plan)
            
            return (
              <div key={index} className={`${getCardClasses(plan)} card-glass p-6 flex flex-col h-full`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full ${getIconClasses(plan.color)} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    {originalPrice && (
                      <span className="text-gray-500 line-through text-lg">
                        ${originalPrice}
                      </span>
                    )}
                    <div className="text-3xl font-bold text-white">
                      {typeof price === 'string' ? price : `$${price}`}
                    </div>
                  </div>
                  {typeof price === 'number' && (
                    <div className="text-gray-400 text-sm">
                      per {billingCycle === 'monthly' ? 'month' : 'year'}
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <li key={limitIndex} className="flex items-center space-x-3">
                        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-primary text-white hover:scale-105 hover:shadow-lg'
                    : 'bg-dark-accent text-white border border-white/20 hover:border-primary-blue hover:bg-primary-blue/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="fade-in-up">
          <div className="card-glass p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient text-center mb-8">
              Frequently Asked Questions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Can I change plans anytime?
                </h4>
                <p className="text-gray-400 text-sm">
                  Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Is there a free trial?
                </h4>
                <p className="text-gray-400 text-sm">
                  All paid plans include a free trial period. No credit card required to start.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-400 text-sm">
                  We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Do you offer refunds?
                </h4>
                <p className="text-gray-400 text-sm">
                  Yes, we offer a 30-day money-back guarantee on all paid plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
