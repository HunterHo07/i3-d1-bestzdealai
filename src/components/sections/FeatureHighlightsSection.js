'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  ChevronDown, ChevronUp, Smartphone, Brain, MessageCircle, 
  Shield, MapPin, TrendingUp, Bell, CreditCard, Star, Users 
} from 'lucide-react'

export default function FeatureHighlightsSection() {
  const [expandedFeature, setExpandedFeature] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Feature cards animation
        gsap.fromTo('.feature-highlight-card',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    initializeAnimations()
  }, [])

  const features = [
    {
      icon: Smartphone,
      title: 'Smart Deal Posting',
      subtitle: 'AI-powered form that optimizes your requests',
      description: 'Our intelligent posting system helps you create the perfect deal request. AI suggests categories, price ranges, and keywords to maximize seller responses.',
      details: [
        'Auto-complete product suggestions',
        'Smart price range recommendations',
        'Category optimization',
        'Photo enhancement tools',
        'Location-based targeting'
      ],
      demo: {
        title: 'Example: iPhone 15 Pro Request',
        steps: [
          'AI suggests "iPhone 15 Pro 256GB" based on your input',
          'Recommends price range $1000-1200 based on market data',
          'Auto-tags with "Electronics > Smartphones > Apple"',
          'Suggests local and online seller preferences'
        ]
      }
    },
    {
      icon: Brain,
      title: 'AI Seller Matching',
      subtitle: 'Intelligent algorithms find the perfect sellers',
      description: 'Advanced machine learning analyzes seller profiles, ratings, inventory, and location to match you with the most relevant and trustworthy sellers.',
      details: [
        'Seller reputation analysis',
        'Inventory matching',
        'Location optimization',
        'Price competitiveness scoring',
        'Response time prediction'
      ],
      demo: {
        title: 'Matching Process',
        steps: [
          'Analyzes 10,000+ seller profiles in seconds',
          'Scores sellers based on relevance and trust',
          'Prioritizes local sellers for faster delivery',
          'Sends notifications to top 20 matches'
        ]
      }
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Chat & Negotiation',
      subtitle: 'Seamless communication with sellers',
      description: 'Built-in messaging system with negotiation tools, file sharing, and real-time notifications. Close deals faster with integrated communication.',
      details: [
        'Instant messaging',
        'File and image sharing',
        'Offer counter-proposals',
        'Deal timeline tracking',
        'Automated follow-ups'
      ],
      demo: {
        title: 'Chat Features',
        steps: [
          'Seller sends initial offer with photos',
          'You counter-propose with specific requirements',
          'Seller adjusts offer in real-time',
          'Deal closed with integrated agreement'
        ]
      }
    },
    {
      icon: Shield,
      title: 'Trust & Verification System',
      subtitle: 'Comprehensive seller verification and protection',
      description: 'Multi-layer verification system ensures you deal with legitimate, trustworthy sellers. Includes business verification, insurance, and dispute resolution.',
      details: [
        'Business license verification',
        'Identity confirmation',
        'Insurance coverage check',
        'Review and rating system',
        'Dispute resolution service'
      ],
      demo: {
        title: 'Verification Levels',
        steps: [
          'Basic: Email and phone verification',
          'Standard: Business license and address',
          'Premium: Insurance and background check',
          'Elite: Full financial and legal verification'
        ]
      }
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      subtitle: 'Smart local and delivery optimization',
      description: 'Advanced location services help you find nearby sellers, optimize delivery routes, and discover local businesses you never knew existed.',
      details: [
        'GPS-based seller discovery',
        'Delivery time estimation',
        'Local business promotion',
        'Route optimization',
        'Pickup location suggestions'
      ],
      demo: {
        title: 'Location Features',
        steps: [
          'Finds sellers within your preferred radius',
          'Calculates delivery times and costs',
          'Suggests optimal pickup locations',
          'Promotes local business discovery'
        ]
      }
    },
    {
      icon: TrendingUp,
      title: 'Market Analytics',
      subtitle: 'Real-time pricing and trend insights',
      description: 'Access comprehensive market data, price trends, and demand analytics to make informed purchasing decisions and get the best deals.',
      details: [
        'Real-time price tracking',
        'Market trend analysis',
        'Demand forecasting',
        'Seasonal pricing insights',
        'Competitor price monitoring'
      ],
      demo: {
        title: 'Analytics Dashboard',
        steps: [
          'Shows current market price for your item',
          'Displays 30-day price trend graph',
          'Predicts best time to buy',
          'Compares offers to market average'
        ]
      }
    }
  ]

  const toggleFeature = (index) => {
    setExpandedFeature(expandedFeature === index ? -1 : index)
  }

  return (
    <section ref={sectionRef} className="section-padding bg-dark-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-purple/10 border border-primary-purple/20 rounded-full text-primary-purple text-sm font-medium mb-6">
            ⚡ Feature Highlights
          </div>
          <h2 className="section-title">
            Powerful Features That Set Us Apart
          </h2>
          <p className="section-subtitle">
            Discover the advanced technology and innovative features that make BestzDealAi 
            the smartest way to shop and get the best deals.
          </p>
        </div>

        {/* Feature Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedFeature === index
            
            return (
              <div 
                key={index}
                className="feature-highlight-card card-glass overflow-hidden transition-all duration-300 hover:border-primary-blue/30"
              >
                {/* Feature Header */}
                <button
                  onClick={() => toggleFeature(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-primary-blue" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Left Column - Description & Details */}
                      <div>
                        <p className="text-gray-300 mb-4">
                          {feature.description}
                        </p>
                        
                        <h4 className="text-lg font-semibold text-white mb-3">
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {feature.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-2 text-gray-400">
                              <div className="w-1.5 h-1.5 bg-primary-blue rounded-full"></div>
                              <span className="text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column - Demo */}
                      <div className="bg-dark-accent p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-primary-blue mb-3">
                          {feature.demo.title}
                        </h4>
                        <div className="space-y-3">
                          {feature.demo.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary-blue/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs text-primary-blue font-bold">
                                  {stepIndex + 1}
                                </span>
                              </div>
                              <p className="text-sm text-gray-300">
                                {step}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Feature Summary */}
        <div className="mt-16 fade-in-up">
          <div className="card-glass p-8 text-center">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Everything You Need in One Platform
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="group">
                <Bell className="w-8 h-8 text-primary-blue mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm text-gray-400">Smart Notifications</div>
              </div>
              <div className="group">
                <CreditCard className="w-8 h-8 text-primary-cyan mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm text-gray-400">Secure Payments</div>
              </div>
              <div className="group">
                <Star className="w-8 h-8 text-primary-purple mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm text-gray-400">Rating System</div>
              </div>
              <div className="group">
                <Users className="w-8 h-8 text-primary-blue mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-sm text-gray-400">Community</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              From AI-powered matching to secure payments, we've built everything you need 
              for the perfect deal-hunting experience.
            </p>
            
            <button className="btn-primary">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
