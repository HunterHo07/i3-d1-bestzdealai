'use client'

import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Target, Brain, Zap, Shield, Users, TrendingUp, 
  Award, Globe, Clock, DollarSign, CheckCircle, Star 
} from 'lucide-react'

export default function WhyUsPage() {
  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Animate sections on scroll
        gsap.utils.toArray('.fade-in-up').forEach((element) => {
          gsap.fromTo(element, 
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          )
        })
      }
    }

    initializeAnimations()
  }, [])

  const differentiators = [
    {
      icon: Target,
      title: 'Buyer-First Philosophy',
      description: 'We flip the traditional marketplace model. Instead of buyers searching through endless listings, sellers compete for your business.',
      stats: '70% time saved vs traditional shopping',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'Advanced AI Matching',
      description: 'Our proprietary AI algorithms analyze seller profiles, inventory, and location to find the perfect matches for your needs.',
      stats: '85% match accuracy rate',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Results',
      description: 'Get multiple competitive offers within minutes. Our real-time notification system ensures instant seller responses.',
      stats: '2.3 min average response time',
      color: 'cyan'
    },
    {
      icon: Shield,
      title: 'Trust & Security First',
      description: 'Every seller is verified through our comprehensive screening process. Your transactions are protected by enterprise-grade security.',
      stats: '99.2% customer satisfaction',
      color: 'green'
    }
  ]

  const advantages = [
    {
      category: 'Market Position',
      items: [
        'First true buyer-initiated marketplace',
        'No direct competitors in this space',
        'Revolutionary approach to commerce',
        'Patent-pending AI matching technology'
      ]
    },
    {
      category: 'Technology Edge',
      items: [
        'Proprietary AI recommendation engine',
        'Real-time bidding system',
        'Advanced seller verification',
        'Predictive pricing algorithms'
      ]
    },
    {
      category: 'User Experience',
      items: [
        'One post, multiple offers',
        'Negotiation tools built-in',
        'Mobile-first design',
        'Instant notifications'
      ]
    },
    {
      category: 'Business Model',
      items: [
        'Free for buyers always',
        'Sustainable seller fees',
        'Multiple revenue streams',
        'Scalable globally'
      ]
    }
  ]

  const teamHighlights = [
    {
      role: 'AI & Machine Learning',
      experience: '15+ years combined experience',
      background: 'Ex-Google, Microsoft, Amazon',
      achievement: 'Built recommendation systems for 100M+ users'
    },
    {
      role: 'Marketplace Expertise',
      experience: '20+ years in e-commerce',
      background: 'Ex-eBay, Alibaba, Shopify',
      achievement: 'Scaled platforms to $1B+ GMV'
    },
    {
      role: 'Product & Design',
      experience: '12+ years in UX/UI',
      background: 'Ex-Apple, Airbnb, Uber',
      achievement: 'Designed apps used by 50M+ people'
    }
  ]

  const milestones = [
    {
      date: 'Q4 2023',
      title: 'Concept & Research',
      description: 'Market research and competitive analysis completed',
      status: 'completed'
    },
    {
      date: 'Q1 2024',
      title: 'MVP Development',
      description: 'Core platform and AI matching engine built',
      status: 'completed'
    },
    {
      date: 'Q2 2024',
      title: 'Beta Testing',
      description: '1,000+ beta users providing feedback',
      status: 'current'
    },
    {
      date: 'Q3 2024',
      title: 'Public Launch',
      description: 'Full platform launch with marketing campaign',
      status: 'upcoming'
    }
  ]

  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark pt-24">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full text-primary-blue text-sm font-medium mb-6">
              🚀 Why Choose BestzDealAi
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">We're Not Just</span>
              <br />
              <span className="text-gradient">Another Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing commerce by putting buyers first. Here's why thousands 
              of smart shoppers and businesses choose BestzDealAi over traditional platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">What Makes Us Different</h2>
            <p className="section-subtitle">
              Four core advantages that set us apart from every other marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="fade-in-up card-glass p-8 hover:border-primary-blue/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      item.color === 'blue' ? 'bg-primary-blue/20 text-primary-blue' :
                      item.color === 'purple' ? 'bg-primary-purple/20 text-primary-purple' :
                      item.color === 'cyan' ? 'bg-primary-cyan/20 text-primary-cyan' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {item.description}
                      </p>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        item.color === 'blue' ? 'bg-primary-blue/10 text-primary-blue border border-primary-blue/20' :
                        item.color === 'purple' ? 'bg-primary-purple/10 text-primary-purple border border-primary-purple/20' :
                        item.color === 'cyan' ? 'bg-primary-cyan/10 text-primary-cyan border border-primary-cyan/20' :
                        'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        📊 {item.stats}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Our Competitive Advantages</h2>
            <p className="section-subtitle">
              Deep advantages across technology, user experience, and business model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((category, index) => (
              <div key={index} className="fade-in-up card-glass p-6">
                <h3 className="text-lg font-bold text-primary-blue mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Excellence */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">World-Class Team</h2>
            <p className="section-subtitle">
              Industry veterans with proven track records at top tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map((member, index) => (
              <div key={index} className="fade-in-up card-glass p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {member.role}
                </h3>
                <p className="text-primary-blue font-medium mb-2">
                  {member.experience}
                </p>
                <p className="text-gray-400 text-sm mb-3">
                  {member.background}
                </p>
                <div className="bg-dark-accent p-3 rounded-lg">
                  <p className="text-xs text-gray-300">
                    🏆 {member.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap & Milestones */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in building the future of commerce
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="fade-in-up flex items-start space-x-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    milestone.status === 'completed' ? 'bg-green-500' :
                    milestone.status === 'current' ? 'bg-primary-blue' :
                    'bg-gray-600'
                  }`}>
                    {milestone.status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : milestone.status === 'current' ? (
                      <Clock className="w-6 h-6 text-white" />
                    ) : (
                      <Star className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {milestone.title}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        milestone.status === 'current' ? 'bg-primary-blue/20 text-primary-blue' :
                        'bg-gray-600/20 text-gray-400'
                      }`}>
                        {milestone.date}
                      </span>
                    </div>
                    <p className="text-gray-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be part of the future of commerce. Experience the BestzDealAi difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Try Live Demo
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Get Early Access
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
