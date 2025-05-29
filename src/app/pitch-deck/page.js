'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  ChevronLeft, ChevronRight, Play, Pause, Download, 
  Target, TrendingUp, Users, DollarSign, Zap, Globe,
  Brain, Shield, Rocket, Award
} from 'lucide-react'

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const slides = [
    {
      id: 1,
      title: 'BestzDealAi',
      subtitle: 'The AI-Powered Reverse Marketplace',
      content: {
        tagline: 'You post it. They deal it.',
        description: 'Revolutionizing commerce by putting buyers first',
        highlight: 'First true buyer-initiated marketplace'
      },
      type: 'title'
    },
    {
      id: 2,
      title: 'The Problem',
      subtitle: 'Shopping is Broken',
      content: {
        problems: [
          {
            stat: '70%',
            description: 'of shoppers visit 3+ sites before buying'
          },
          {
            stat: '85%',
            description: 'of local businesses lack online presence'
          },
          {
            stat: '3+ hours',
            description: 'average time spent price comparing'
          }
        ],
        summary: 'Current marketplaces prioritize sellers, not buyers'
      },
      type: 'problem'
    },
    {
      id: 3,
      title: 'Our Solution',
      subtitle: 'Flip the Script',
      content: {
        solution: 'Buyer-first marketplace where sellers compete for your business',
        steps: [
          'Buyers post what they want',
          'AI matches with relevant sellers',
          'Sellers compete with offers',
          'Buyers choose the best deal'
        ]
      },
      type: 'solution'
    },
    {
      id: 4,
      title: 'Market Opportunity',
      subtitle: '$6.2T Global E-commerce Market',
      content: {
        market: {
          total: '$6.2T',
          growth: '10.4%',
          tam: '$1.2B',
          sam: '$120M'
        },
        trends: [
          'Mobile commerce growing 72.9%',
          'Local commerce: 46% of searches',
          'AI in retail: $40B by 2026'
        ]
      },
      type: 'market'
    },
    {
      id: 5,
      title: 'Business Model',
      subtitle: 'Sustainable & Scalable',
      content: {
        revenue: [
          {
            stream: 'Seller Subscriptions',
            description: 'Freemium model: $19-49/month',
            percentage: '60%'
          },
          {
            stream: 'Transaction Fees',
            description: '2-3% on completed deals',
            percentage: '30%'
          },
          {
            stream: 'Premium Features',
            description: 'Boosted offers, analytics',
            percentage: '10%'
          }
        ]
      },
      type: 'business'
    },
    {
      id: 6,
      title: 'Competitive Advantage',
      subtitle: 'First-Mover in Buyer-First Commerce',
      content: {
        advantages: [
          'No direct competitors',
          'Patent-pending AI matching',
          'Network effects',
          'Data moat'
        ],
        differentiators: [
          'Buyer-initiated vs seller-centric',
          'AI-powered vs manual search',
          'Real-time competition vs static pricing'
        ]
      },
      type: 'competitive'
    },
    {
      id: 7,
      title: 'Traction',
      subtitle: 'Strong Early Momentum',
      content: {
        metrics: [
          { label: 'Beta Users', value: '1,000+', growth: '+150% MoM' },
          { label: 'Deals Posted', value: '5,000+', growth: '+200% MoM' },
          { label: 'GMV', value: '$500K+', growth: '+300% MoM' },
          { label: 'Avg Savings', value: '23%', growth: 'Consistent' }
        ]
      },
      type: 'traction'
    },
    {
      id: 8,
      title: 'Financial Projections',
      subtitle: '5-Year Growth Plan',
      content: {
        projections: [
          { year: 'Year 1', users: '10K', revenue: '$500K', gmv: '$10M' },
          { year: 'Year 2', users: '100K', revenue: '$5M', gmv: '$100M' },
          { year: 'Year 3', users: '500K', revenue: '$25M', gmv: '$500M' },
          { year: 'Year 4', users: '2M', revenue: '$100M', gmv: '$2B' },
          { year: 'Year 5', users: '10M', revenue: '$500M', gmv: '$10B' }
        ]
      },
      type: 'financials'
    },
    {
      id: 9,
      title: 'Team',
      subtitle: 'World-Class Execution',
      content: {
        team: [
          {
            role: 'CEO',
            background: 'Ex-Google, 15 years marketplace experience',
            achievement: 'Built $1B+ GMV platform'
          },
          {
            role: 'CTO',
            background: 'Ex-Amazon, AI/ML expert',
            achievement: 'Led recommendation systems for 100M+ users'
          },
          {
            role: 'CPO',
            background: 'Ex-Airbnb, Product design leader',
            achievement: 'Designed apps used by 50M+ people'
          }
        ]
      },
      type: 'team'
    },
    {
      id: 10,
      title: 'Funding Ask',
      subtitle: '$5M Series A',
      content: {
        ask: '$5M',
        use: [
          { category: 'Product Development', percentage: '40%', amount: '$2M' },
          { category: 'Marketing & Growth', percentage: '35%', amount: '$1.75M' },
          { category: 'Team Expansion', percentage: '20%', amount: '$1M' },
          { category: 'Operations', percentage: '5%', amount: '$250K' }
        ],
        milestones: [
          '100K active users',
          '$10M GMV',
          'Mobile app launch',
          'International expansion'
        ]
      },
      type: 'funding'
    }
  ]

  useEffect(() => {
    let interval
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 8000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const currentSlideData = slides[currentSlide]

  const renderSlideContent = () => {
    switch (currentSlideData.type) {
      case 'title':
        return (
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6">
              {currentSlideData.title}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              {currentSlideData.subtitle}
            </p>
            <div className="space-y-4">
              <p className="text-xl text-primary-blue font-medium">
                {currentSlideData.content.tagline}
              </p>
              <p className="text-lg text-gray-400">
                {currentSlideData.content.description}
              </p>
              <div className="inline-block bg-primary-blue/10 border border-primary-blue/20 rounded-lg px-6 py-3">
                <p className="text-primary-blue font-semibold">
                  {currentSlideData.content.highlight}
                </p>
              </div>
            </div>
          </div>
        )

      case 'problem':
        return (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              {currentSlideData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {currentSlideData.content.problems.map((problem, index) => (
                <div key={index} className="card-glass p-6 text-center">
                  <div className="text-4xl font-bold text-red-400 mb-3">
                    {problem.stat}
                  </div>
                  <p className="text-gray-300">{problem.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-300 bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                {currentSlideData.content.summary}
              </p>
            </div>
          </div>
        )

      case 'solution':
        return (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              {currentSlideData.title}
            </h2>
            <div className="text-center mb-8">
              <p className="text-2xl text-primary-blue font-semibold mb-8">
                {currentSlideData.content.solution}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSlideData.content.steps.map((step, index) => (
                <div key={index} className="card-glass p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 'market':
        return (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              {currentSlideData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-primary-blue mb-6">Market Size</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Market:</span>
                    <span className="text-white font-bold">{currentSlideData.content.market.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Growth Rate:</span>
                    <span className="text-green-400 font-bold">{currentSlideData.content.market.growth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">TAM:</span>
                    <span className="text-primary-cyan font-bold">{currentSlideData.content.market.tam}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">SAM:</span>
                    <span className="text-primary-purple font-bold">{currentSlideData.content.market.sam}</span>
                  </div>
                </div>
              </div>
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-primary-cyan mb-6">Key Trends</h3>
                <div className="space-y-4">
                  {currentSlideData.content.trends.map((trend, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{trend}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      case 'traction':
        return (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              {currentSlideData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentSlideData.content.metrics.map((metric, index) => (
                <div key={index} className="card-glass p-6 text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-300 mb-2">{metric.label}</div>
                  <div className="text-green-400 text-sm font-medium">
                    {metric.growth}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'funding':
        return (
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              {currentSlideData.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-primary-blue mb-6">Use of Funds</h3>
                <div className="space-y-4">
                  {currentSlideData.content.use.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-300">{item.category}</span>
                      <div className="text-right">
                        <div className="text-white font-bold">{item.amount}</div>
                        <div className="text-primary-blue text-sm">{item.percentage}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-primary-cyan mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  {currentSlideData.content.milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentSlideData.title}
            </h2>
            <p className="text-xl text-gray-300">
              {currentSlideData.subtitle}
            </p>
          </div>
        )
    }
  }

  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      {/* Pitch Deck Viewer */}
      <section className="min-h-screen pt-20 pb-8">
        <div className="container-custom h-full">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">BestzDealAi Pitch Deck</h1>
              <div className="text-gray-400">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-2 bg-dark-card rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button className="p-2 bg-dark-card rounded-lg text-gray-400 hover:text-white transition-colors duration-300">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slide Content */}
          <div className="bg-dark-card rounded-lg p-8 md:p-12 min-h-[600px] flex items-center justify-center mb-8">
            {renderSlideContent()}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="flex items-center space-x-2 px-4 py-2 bg-dark-card rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-primary-blue' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center space-x-2 px-4 py-2 bg-dark-card rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
