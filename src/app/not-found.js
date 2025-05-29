'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Home, Search, ArrowLeft, Zap } from 'lucide-react'

export default function NotFound() {
  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        
        // 404 text animation
        gsap.fromTo('.error-code',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'back.out(1.7)' }
        )
        
        // Content animation
        gsap.fromTo('.error-content',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
        )
        
        // Floating animation for particles
        gsap.to('.floating-particle', {
          y: -20,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.3
        })
      }
    }

    initializeAnimations()
  }, [])

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home, description: 'Back to homepage' },
    { name: 'Demo', href: '/demo', icon: Zap, description: 'Try our live demo' },
    { name: 'Why Us', href: '/why-us', icon: Search, description: 'Learn about our platform' }
  ]

  return (
    <main className="min-h-screen bg-dark-bg text-white relative overflow-hidden">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-primary-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-purple/5"></div>
      </div>

      <section className="min-h-screen flex items-center justify-center pt-20 pb-8 relative z-10">
        <div className="container-custom">
          <div className="text-center">
            {/* 404 Code */}
            <div className="error-code mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">
                404
              </h1>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            {/* Error Content */}
            <div className="error-content max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Oops! Page Not Found
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                The page you're looking for seems to have vanished into the digital void. 
                But don't worry, we'll help you find your way back to amazing deals!
              </p>

              {/* Search Suggestion */}
              <div className="card-glass p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">
                  What were you looking for?
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Search for pages, features, or help..."
                    className="flex-1 px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue"
                  />
                  <button className="btn-primary px-6 py-3 flex items-center justify-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span>Search</span>
                  </button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-6">
                  Popular Destinations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <Link
                        key={index}
                        href={link.href}
                        className="card-glass p-6 text-center hover:border-primary-blue/30 transition-all duration-300 group"
                      >
                        <Icon className="w-8 h-8 text-primary-blue mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                        <h4 className="text-lg font-bold text-white mb-2">
                          {link.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {link.description}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.history.back()}
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Go Back</span>
                </button>
                <Link href="/" className="btn-primary flex items-center justify-center space-x-2">
                  <Home className="w-5 h-5" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="error-content mt-12">
              <div className="card-glass p-6 max-w-md mx-auto">
                <h4 className="text-lg font-bold text-primary-blue mb-3">
                  💡 Did You Know?
                </h4>
                <p className="text-gray-300 text-sm">
                  While you're here, our AI is constantly learning from user behavior 
                  to make deal matching even better. Every 404 helps us improve!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
