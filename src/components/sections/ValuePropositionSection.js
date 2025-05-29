'use client'

import { useEffect, useRef } from 'react'
import { 
  Target, Clock, DollarSign, Users, Shield, Zap, 
  TrendingUp, MapPin, MessageCircle, Award 
} from 'lucide-react'

export default function ValuePropositionSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Value cards staggered animation
        gsap.fromTo('.value-card',
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Icon hover animations
        gsap.utils.toArray('.value-icon').forEach((icon) => {
          icon.addEventListener('mouseenter', () => {
            gsap.to(icon, {
              scale: 1.2,
              rotation: 10,
              duration: 0.3,
              ease: 'back.out(1.7)'
            })
          })

          icon.addEventListener('mouseleave', () => {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out'
            })
          })
        })
      }
    }

    initializeAnimations()
  }, [])

  const values = [
    {
      icon: Target,
      title: 'Buyer-First Philosophy',
      description: 'You post what you want, sellers compete for your business. No more endless searching through catalogs.',
      benefit: 'Save 3+ hours per purchase',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Lightning Fast Results',
      description: 'Get multiple competitive offers within minutes. Our AI instantly notifies relevant sellers.',
      benefit: 'Average 2.3 min response time',
      color: 'cyan'
    },
    {
      icon: DollarSign,
      title: 'Guaranteed Better Deals',
      description: 'Seller competition drives prices down. Our users save an average of 23% vs retail prices.',
      benefit: 'Average $2,100 saved per deal',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Local & Online Network',
      description: 'Access both local businesses and online sellers. Discover hidden gems in your area.',
      benefit: '10,000+ verified sellers',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Trust & Verification',
      description: 'All sellers are verified with ratings, reviews, and business credentials. Shop with confidence.',
      benefit: '99.2% satisfaction rate',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms learn your preferences and match you with the most relevant sellers.',
      benefit: '85% match accuracy',
      color: 'cyan'
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Get real-time market insights, price trends, and deal recommendations.',
      benefit: 'Live market data',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Location-Based Offers',
      description: 'Find local sellers for immediate pickup or delivery. Support your community.',
      benefit: 'Same-day availability',
      color: 'purple'
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Negotiation',
      description: 'Chat directly with sellers, negotiate terms, and close deals instantly.',
      benefit: 'Built-in messaging',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rate and review every transaction. Help build a trusted marketplace community.',
      benefit: 'Community-driven quality',
      color: 'cyan'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-primary-blue border-primary-blue/20 bg-primary-blue/10',
      cyan: 'text-primary-cyan border-primary-cyan/20 bg-primary-cyan/10',
      green: 'text-green-400 border-green-400/20 bg-green-400/10',
      purple: 'text-primary-purple border-primary-purple/20 bg-primary-purple/10'
    }
    return colors[color] || colors.blue
  }

  return (
    <section ref={sectionRef} className="section-padding bg-dark-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue text-sm font-medium mb-6">
            💎 Value Proposition
          </div>
          <h2 className="section-title">
            Why Choose BestzDealAi?
          </h2>
          <p className="section-subtitle">
            We're not just another marketplace. We're a revolutionary platform that puts 
            buyers first and transforms how deals are made.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            const colorClasses = getColorClasses(value.color)
            
            return (
              <div 
                key={index} 
                className="value-card card-glass p-6 text-center group hover:border-primary-blue/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`value-icon w-16 h-16 rounded-full border-2 ${colorClasses} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-blue transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {value.description}
                </p>

                {/* Benefit Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses}`}>
                  {value.benefit}
                </div>
              </div>
            )
          })}
        </div>

        {/* Core Benefits Summary */}
        <div className="fade-in-up">
          <div className="card-glass p-8">
            <h3 className="text-2xl font-bold text-gradient text-center mb-8">
              The BestzDealAi Promise
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Buyer-First</h4>
                <p className="text-gray-400 text-sm">
                  You're in control. Sellers compete for your business, not the other way around.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Time-Saving</h4>
                <p className="text-gray-400 text-sm">
                  One post gets you multiple offers. No more hours of searching and comparing.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Money-Saving</h4>
                <p className="text-gray-400 text-sm">
                  Competition drives better prices. Save an average of 23% on every purchase.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Trust-Building</h4>
                <p className="text-gray-400 text-sm">
                  Verified sellers, ratings, and reviews ensure you're dealing with trusted partners.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience the Future of Shopping?
            </h3>
            <p className="text-gray-400 mb-8">
              Join thousands of smart shoppers who are already saving time and money. 
              Your next great deal is just one post away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2 group">
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Start Saving Now</span>
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
