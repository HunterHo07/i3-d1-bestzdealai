'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Smartphone, Car, Home, Gamepad2, Shirt, Coffee, Play, Pause } from 'lucide-react'

export default function FeaturePreviewSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  const features = [
    {
      category: 'Electronics',
      icon: Smartphone,
      title: 'Smart Device Deals',
      description: 'Find the best prices on phones, laptops, and gadgets from verified sellers',
      image: '/api/placeholder/400/300',
      stats: { offers: 12, avgSaving: '23%', responseTime: '2.1 min' },
      demoData: {
        request: 'iPhone 15 Pro Max 256GB',
        budget: '$1000-1200',
        offers: [
          { seller: 'TechHub NYC', price: '$1,149', rating: 4.9, verified: true },
          { seller: 'Apple Store', price: '$1,199', rating: 4.8, verified: true },
          { seller: 'Electronics Plus', price: '$1,129', rating: 4.7, verified: true }
        ]
      }
    },
    {
      category: 'Automotive',
      icon: Car,
      title: 'Vehicle & Parts',
      description: 'Get competitive quotes for cars, motorcycles, and auto parts',
      image: '/api/placeholder/400/300',
      stats: { offers: 8, avgSaving: '31%', responseTime: '5.2 min' },
      demoData: {
        request: '2020 Honda Civic',
        budget: '$18,000-22,000',
        offers: [
          { seller: 'AutoMax Dealers', price: '$19,500', rating: 4.8, verified: true },
          { seller: 'City Motors', price: '$20,200', rating: 4.6, verified: true },
          { seller: 'Honda Certified', price: '$21,000', rating: 4.9, verified: true }
        ]
      }
    },
    {
      category: 'Real Estate',
      icon: Home,
      title: 'Property Services',
      description: 'Connect with real estate agents, contractors, and home service providers',
      image: '/api/placeholder/400/300',
      stats: { offers: 15, avgSaving: '18%', responseTime: '12.5 min' },
      demoData: {
        request: 'Kitchen Renovation',
        budget: '$15,000-25,000',
        offers: [
          { seller: 'Elite Contractors', price: '$18,500', rating: 4.9, verified: true },
          { seller: 'Home Pros', price: '$22,000', rating: 4.7, verified: true },
          { seller: 'Kitchen Masters', price: '$19,800', rating: 4.8, verified: true }
        ]
      }
    },
    {
      category: 'Gaming',
      icon: Gamepad2,
      title: 'Gaming Gear',
      description: 'Score deals on consoles, games, and gaming accessories',
      image: '/api/placeholder/400/300',
      stats: { offers: 9, avgSaving: '27%', responseTime: '1.8 min' },
      demoData: {
        request: 'PlayStation 5 Console',
        budget: '$450-550',
        offers: [
          { seller: 'GameStop Pro', price: '$499', rating: 4.8, verified: true },
          { seller: 'Best Buy', price: '$499', rating: 4.9, verified: true },
          { seller: 'Local Game Store', price: '$479', rating: 4.6, verified: true }
        ]
      }
    },
    {
      category: 'Fashion',
      icon: Shirt,
      title: 'Fashion & Style',
      description: 'Discover unique fashion pieces from local boutiques and online stores',
      image: '/api/placeholder/400/300',
      stats: { offers: 11, avgSaving: '35%', responseTime: '3.7 min' },
      demoData: {
        request: 'Designer Winter Coat',
        budget: '$200-400',
        offers: [
          { seller: 'Fashion Forward', price: '$289', rating: 4.7, verified: true },
          { seller: 'Style Boutique', price: '$325', rating: 4.8, verified: true },
          { seller: 'Winter Wear Co', price: '$259', rating: 4.6, verified: true }
        ]
      }
    },
    {
      category: 'Food & Dining',
      icon: Coffee,
      title: 'Food Services',
      description: 'Get quotes for catering, meal prep, and specialty food items',
      image: '/api/placeholder/400/300',
      stats: { offers: 7, avgSaving: '22%', responseTime: '4.1 min' },
      demoData: {
        request: 'Wedding Catering for 100',
        budget: '$2,500-4,000',
        offers: [
          { seller: 'Gourmet Catering', price: '$3,200', rating: 4.9, verified: true },
          { seller: 'Event Foods', price: '$2,850', rating: 4.7, verified: true },
          { seller: 'Premium Caterers', price: '$3,500', rating: 4.8, verified: true }
        ]
      }
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % features.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, features.length])

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Carousel entrance animation
        gsap.fromTo('.feature-carousel',
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

        // Category tabs animation
        gsap.fromTo('.category-tab',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.category-tabs',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    initializeAnimations()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const currentFeature = features[currentSlide]
  const Icon = currentFeature.icon

  return (
    <section ref={sectionRef} className="section-padding bg-dark-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary-purple/10 border border-primary-purple/20 rounded-full text-primary-purple text-sm font-medium mb-6">
            🚀 MVP Features
          </div>
          <h2 className="section-title">
            Every Category, Every Deal
          </h2>
          <p className="section-subtitle">
            From electronics to real estate, our AI-powered platform works across 
            all categories to get you the best deals from verified sellers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs flex flex-wrap justify-center gap-2 mb-12">
          {features.map((feature, index) => {
            const TabIcon = feature.icon
            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`category-tab flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-primary text-white'
                    : 'bg-dark-card text-gray-400 hover:text-white hover:bg-dark-accent'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span className="text-sm font-medium">{feature.category}</span>
              </button>
            )
          })}
        </div>

        {/* Feature Carousel */}
        <div className="feature-carousel card-glass p-8 relative overflow-hidden">
          {/* Carousel Controls */}
          <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
            <button
              onClick={toggleAutoPlay}
              className="p-2 bg-dark-accent rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={prevSlide}
              className="p-2 bg-dark-accent rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-dark-accent rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Feature Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-primary-blue font-medium">
                    {currentFeature.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentFeature.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 mb-6">
                {currentFeature.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-dark-accent rounded-lg">
                  <div className="text-xl font-bold text-primary-cyan">
                    {currentFeature.stats.offers}
                  </div>
                  <div className="text-xs text-gray-400">Avg Offers</div>
                </div>
                <div className="text-center p-3 bg-dark-accent rounded-lg">
                  <div className="text-xl font-bold text-primary-blue">
                    {currentFeature.stats.avgSaving}
                  </div>
                  <div className="text-xs text-gray-400">Avg Savings</div>
                </div>
                <div className="text-center p-3 bg-dark-accent rounded-lg">
                  <div className="text-xl font-bold text-primary-purple">
                    {currentFeature.stats.responseTime}
                  </div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
              </div>

              <button className="btn-primary w-full">
                Try {currentFeature.category} Demo
              </button>
            </div>

            {/* Right Column - Live Demo */}
            <div className="bg-dark-accent p-6 rounded-lg">
              <div className="text-sm text-primary-blue font-medium mb-4">
                Live Demo Preview
              </div>
              
              {/* Request */}
              <div className="mb-4">
                <div className="text-white font-semibold mb-1">
                  "{currentFeature.demoData.request}"
                </div>
                <div className="text-sm text-gray-400">
                  Budget: {currentFeature.demoData.budget}
                </div>
              </div>

              {/* Offers */}
              <div className="space-y-3">
                {currentFeature.demoData.offers.map((offer, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-dark-card rounded-lg border border-white/10 hover:border-primary-blue/30 transition-colors duration-300"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-white text-sm">
                          {offer.seller}
                        </span>
                        {offer.verified && (
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-400">
                        ⭐ {offer.rating} rating
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-cyan">
                        {offer.price}
                      </div>
                      <button className="text-xs text-primary-blue hover:text-primary-cyan transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <div className="text-xs text-gray-400 mb-2">
                  {currentFeature.demoData.offers.length} offers received
                </div>
                <div className="w-full bg-dark-card rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-primary-blue w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
