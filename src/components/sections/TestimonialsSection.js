'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Small Business Owner',
      location: 'San Francisco, CA',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "BestzDealAi completely changed how I source equipment for my cafe. Instead of calling dozens of suppliers, I post once and get competitive offers within minutes. Saved me $3,200 on my espresso machine!",
      savings: '$3,200',
      category: 'Business Equipment',
      verified: true,
      responseTime: '4 minutes'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Tech Enthusiast',
      location: 'Austin, TX',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "As someone who's always hunting for the latest gadgets, this platform is a game-changer. Posted for a gaming laptop and got 8 offers in 2 hours. Found a local seller with better specs for $400 less than retail!",
      savings: '$400',
      category: 'Electronics',
      verified: true,
      responseTime: '2 hours'
    },
    {
      id: 3,
      name: 'Jennifer Park',
      role: 'Event Planner',
      location: 'New York, NY',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "Planning events means sourcing everything from flowers to sound equipment. BestzDealAi connects me with local vendors I never knew existed. The AI matching is incredibly accurate - it's like having a personal procurement assistant.",
      savings: '$1,800',
      category: 'Event Services',
      verified: true,
      responseTime: '15 minutes'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Home Renovator',
      location: 'Denver, CO',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "Renovating my kitchen was stressful until I found BestzDealAi. Posted my requirements and got quotes from contractors I would never have found otherwise. The transparency and competition drove prices down significantly.",
      savings: '$5,500',
      category: 'Home Services',
      verified: true,
      responseTime: '30 minutes'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'Fashion Blogger',
      location: 'Los Angeles, CA',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "Finding unique pieces for my content used to take forever. Now I post what I'm looking for and local boutiques reach out with amazing options. It's like having access to a hidden fashion network!",
      savings: '$280',
      category: 'Fashion',
      verified: true,
      responseTime: '1 hour'
    },
    {
      id: 6,
      name: 'Ahmed Hassan',
      role: 'Car Enthusiast',
      location: 'Miami, FL',
      avatar: '/api/placeholder/80/80',
      rating: 5,
      quote: "Buying car parts was always a hassle - calling shops, comparing prices, driving around. BestzDealAi brought the sellers to me. Got OEM parts for my BMW at 30% below dealer prices from a local shop I didn't even know existed.",
      savings: '$850',
      category: 'Automotive',
      verified: true,
      responseTime: '45 minutes'
    }
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 6000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, testimonials.length])

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Testimonial cards animation
        gsap.fromTo('.testimonial-card',
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        )

        // Stats animation
        gsap.fromTo('.stat-item',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.testimonial-stats',
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }
    }

    initializeAnimations()
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
            ⭐ Customer Success Stories
          </div>
          <h2 className="section-title">
            Real People, Real Savings
          </h2>
          <p className="section-subtitle">
            Discover how BestzDealAi is transforming the way people shop and save. 
            These are real stories from our beta users.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="testimonial-card card-glass p-8 mb-12 relative overflow-hidden">
          {/* Background Quote */}
          <Quote className="absolute top-4 right-4 w-16 h-16 text-primary-blue/10" />
          
          {/* Controls */}
          <div className="absolute top-4 left-4 flex items-center space-x-2">
            <button
              onClick={toggleAutoPlay}
              className="p-2 bg-dark-accent rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={isAutoPlaying ? 'Pause rotation' : 'Start rotation'}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={prevTestimonial}
              className="p-2 bg-dark-accent rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-dark-accent rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-8">
            {/* Left - User Info */}
            <div className="text-center lg:text-left">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {current.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">
                {current.name}
              </h3>
              <p className="text-primary-blue font-medium mb-1">
                {current.role}
              </p>
              <p className="text-gray-400 text-sm mb-4">
                📍 {current.location}
              </p>

              {/* Rating */}
              <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Verification Badge */}
              {current.verified && (
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">
                  ✓ Verified Customer
                </div>
              )}
            </div>

            {/* Center - Quote */}
            <div className="lg:col-span-2">
              <blockquote className="text-lg text-gray-300 leading-relaxed mb-6">
                "{current.quote}"
              </blockquote>

              {/* Success Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-dark-accent rounded-lg">
                  <div className="text-xl font-bold text-primary-cyan">
                    {current.savings}
                  </div>
                  <div className="text-xs text-gray-400">Saved</div>
                </div>
                <div className="text-center p-3 bg-dark-accent rounded-lg">
                  <div className="text-xl font-bold text-primary-blue">
                    {current.responseTime}
                  </div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div className="text-center p-3 bg-dark-accent rounded-lg">
                  <div className="text-xl font-bold text-primary-purple">
                    {current.category}
                  </div>
                  <div className="text-xs text-gray-400">Category</div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? 'bg-primary-blue w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Stats */}
        <div className="testimonial-stats grid grid-cols-1 md:grid-cols-4 gap-6 fade-in-up">
          <div className="stat-item text-center p-6 card-glass">
            <div className="text-3xl font-bold text-primary-blue mb-2">
              4.9/5
            </div>
            <div className="text-sm text-gray-400">
              Average Rating
            </div>
            <div className="flex justify-center space-x-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          <div className="stat-item text-center p-6 card-glass">
            <div className="text-3xl font-bold text-primary-cyan mb-2">
              $2,100
            </div>
            <div className="text-sm text-gray-400">
              Average Savings
            </div>
            <div className="text-xs text-gray-500 mt-1">
              per successful deal
            </div>
          </div>

          <div className="stat-item text-center p-6 card-glass">
            <div className="text-3xl font-bold text-primary-purple mb-2">
              98%
            </div>
            <div className="text-sm text-gray-400">
              Success Rate
            </div>
            <div className="text-xs text-gray-500 mt-1">
              deals completed
            </div>
          </div>

          <div className="stat-item text-center p-6 card-glass">
            <div className="text-3xl font-bold text-primary-blue mb-2">
              15min
            </div>
            <div className="text-sm text-gray-400">
              Avg Response
            </div>
            <div className="text-xs text-gray-500 mt-1">
              first offer received
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
