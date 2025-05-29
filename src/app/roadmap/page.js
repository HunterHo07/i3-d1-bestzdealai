'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Rocket, Target, Users, Globe, Brain, Shield, 
  Smartphone, Zap, CheckCircle, Clock, Star, ArrowRight 
} from 'lucide-react'

export default function RoadmapPage() {
  const [selectedPhase, setSelectedPhase] = useState(0)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

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

        // Timeline animation
        gsap.fromTo('.timeline-item',
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.timeline-container',
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    initializeAnimations()
  }, [])

  const roadmapPhases = [
    {
      phase: 'MVP',
      title: 'Foundation & Launch',
      timeline: 'Q4 2024 - Q1 2025',
      status: 'current',
      progress: 85,
      icon: Rocket,
      description: 'Core platform with essential features for buyers and sellers',
      features: [
        'Buyer deal posting system',
        'Seller offer management',
        'Basic AI matching algorithm',
        'Real-time chat interface',
        'Payment processing integration',
        'Mobile-responsive web app',
        'User verification system',
        'Basic analytics dashboard'
      ],
      metrics: {
        users: '10K+',
        deals: '$1M+',
        satisfaction: '90%+'
      }
    },
    {
      phase: 'Phase 1',
      title: 'Enhanced Intelligence',
      timeline: 'Q2 2025 - Q3 2025',
      status: 'planned',
      progress: 0,
      icon: Brain,
      description: 'Advanced AI features and improved user experience',
      features: [
        'Advanced AI recommendation engine',
        'Predictive pricing algorithms',
        'Smart negotiation assistance',
        'Automated deal suggestions',
        'Enhanced seller verification',
        'Advanced analytics for sellers',
        'Multi-language support',
        'API for third-party integrations'
      ],
      metrics: {
        users: '100K+',
        deals: '$10M+',
        satisfaction: '95%+'
      }
    },
    {
      phase: 'Phase 2',
      title: 'Mobile & Scale',
      timeline: 'Q4 2025 - Q1 2026',
      status: 'planned',
      progress: 0,
      icon: Smartphone,
      description: 'Native mobile apps and global expansion',
      features: [
        'iOS and Android native apps',
        'Push notifications system',
        'Offline functionality',
        'AR product visualization',
        'Voice-activated posting',
        'Social media integration',
        'Referral program',
        'Advanced seller tools'
      ],
      metrics: {
        users: '500K+',
        deals: '$50M+',
        satisfaction: '97%+'
      }
    },
    {
      phase: 'Phase 3',
      title: 'Global Platform',
      timeline: 'Q2 2026 - Q4 2026',
      status: 'planned',
      progress: 0,
      icon: Globe,
      description: 'International expansion and enterprise features',
      features: [
        'Multi-currency support',
        'International shipping integration',
        'Enterprise seller accounts',
        'White-label solutions',
        'Advanced fraud detection',
        'Blockchain verification',
        'AI-powered customer support',
        'Advanced marketplace analytics'
      ],
      metrics: {
        users: '2M+',
        deals: '$200M+',
        satisfaction: '98%+'
      }
    },
    {
      phase: 'Phase 4',
      title: 'Future Innovation',
      timeline: '2027 & Beyond',
      status: 'vision',
      progress: 0,
      icon: Zap,
      description: 'Next-generation commerce technologies',
      features: [
        'AI-powered virtual shopping assistant',
        'VR/AR shopping experiences',
        'IoT device integration',
        'Autonomous delivery coordination',
        'Smart contract automation',
        'Quantum-enhanced matching',
        'Predictive commerce',
        'Neural interface compatibility'
      ],
      metrics: {
        users: '10M+',
        deals: '$1B+',
        satisfaction: '99%+'
      }
    }
  ]

  const currentMilestones = [
    {
      title: 'Beta Testing Complete',
      description: '1,000+ beta users provided feedback',
      date: 'December 2024',
      status: 'completed'
    },
    {
      title: 'Public Launch',
      description: 'Platform goes live for all users',
      date: 'January 2025',
      status: 'current'
    },
    {
      title: 'Mobile App Release',
      description: 'iOS and Android apps launch',
      date: 'March 2025',
      status: 'upcoming'
    },
    {
      title: 'AI Enhancement',
      description: 'Advanced matching algorithms deployed',
      date: 'June 2025',
      status: 'upcoming'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'current': return 'text-primary-blue border-primary-blue bg-primary-blue/10'
      case 'completed': return 'text-green-400 border-green-400 bg-green-400/10'
      case 'planned': return 'text-primary-cyan border-primary-cyan bg-primary-cyan/10'
      case 'vision': return 'text-primary-purple border-primary-purple bg-primary-purple/10'
      default: return 'text-gray-400 border-gray-400 bg-gray-400/10'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return CheckCircle
      case 'current': return Clock
      default: return Star
    }
  }

  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark pt-24">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-purple/10 border border-primary-purple/20 rounded-full text-primary-purple text-sm font-medium mb-6">
              🗺️ Product Roadmap
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">The Future of</span>
              <br />
              <span className="text-gradient">Commerce is Here</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our ambitious roadmap to revolutionize how people buy and sell. 
              From MVP to global platform, here's how we're building the future.
            </p>
          </div>
        </div>
      </section>

      {/* Current Milestones */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-2xl font-bold text-white mb-4">Current Milestones</h2>
            <p className="text-gray-400">Key achievements and upcoming goals</p>
          </div>

          <div className="timeline-container max-w-4xl mx-auto">
            <div className="space-y-6">
              {currentMilestones.map((milestone, index) => {
                const StatusIcon = getStatusIcon(milestone.status)
                return (
                  <div key={index} className="timeline-item flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'current' ? 'bg-primary-blue' :
                      'bg-gray-600'
                    }`}>
                      <StatusIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 card-glass p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-gray-400">
                          {milestone.date}
                        </span>
                      </div>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Phases */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Development Roadmap</h2>
            <p className="section-subtitle">
              Five phases of innovation leading to the ultimate commerce platform
            </p>
          </div>

          {/* Phase Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 fade-in-up">
            {roadmapPhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setSelectedPhase(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedPhase === index
                    ? getStatusColor(phase.status)
                    : 'text-gray-400 border border-gray-600 hover:border-gray-500'
                }`}
              >
                {phase.phase}
              </button>
            ))}
          </div>

          {/* Selected Phase Details */}
          <div className="fade-in-up">
            {roadmapPhases.map((phase, index) => {
              if (selectedPhase !== index) return null
              
              const Icon = phase.icon
              return (
                <div key={index} className="card-glass p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Phase Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(phase.status)}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {phase.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {phase.timeline}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">
                        {phase.description}
                      </p>

                      {/* Progress Bar */}
                      {phase.progress > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-primary-blue">{phase.progress}%</span>
                          </div>
                          <div className="w-full bg-dark-accent rounded-full h-2">
                            <div 
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${phase.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary-blue">
                            {phase.metrics.users}
                          </div>
                          <div className="text-xs text-gray-400">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary-cyan">
                            {phase.metrics.deals}
                          </div>
                          <div className="text-xs text-gray-400">GMV</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">
                            {phase.metrics.satisfaction}
                          </div>
                          <div className="text-xs text-gray-400">Satisfaction</div>
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-bold text-white mb-4">
                        Key Features & Capabilities
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="section-title">Technology Evolution</h2>
            <p className="section-subtitle">
              How our technology stack will evolve to support our vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in-up card-glass p-6">
              <Shield className="w-12 h-12 text-primary-blue mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">
                Security & Trust
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Blockchain verification</li>
                <li>• Advanced fraud detection</li>
                <li>• Zero-knowledge proofs</li>
                <li>• Quantum-resistant encryption</li>
              </ul>
            </div>

            <div className="fade-in-up card-glass p-6">
              <Brain className="w-12 h-12 text-primary-cyan mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">
                AI & Machine Learning
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Neural recommendation engines</li>
                <li>• Predictive pricing models</li>
                <li>• Natural language processing</li>
                <li>• Computer vision for products</li>
              </ul>
            </div>

            <div className="fade-in-up card-glass p-6">
              <Globe className="w-12 h-12 text-primary-purple mb-4" />
              <h3 className="text-lg font-bold text-white mb-3">
                Global Infrastructure
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Multi-region deployment</li>
                <li>• Edge computing optimization</li>
                <li>• Real-time global sync</li>
                <li>• Scalable microservices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us as we build the future of commerce. Your feedback and participation 
              help shape our roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Join Beta Program</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
