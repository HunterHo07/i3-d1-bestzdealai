'use client'

import { useEffect, useRef } from 'react'
import { Shield, Award, Users, TrendingUp, Clock, Star, CheckCircle, Globe } from 'lucide-react'

export default function TrustElementsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)

        // Trust elements animation
        gsap.fromTo('.trust-element',
          { y: 30, opacity: 0 },
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

        // Logo carousel animation
        gsap.to('.logo-carousel', {
          x: '-50%',
          duration: 20,
          ease: 'none',
          repeat: -1
        })

        // Stats counter animation
        gsap.utils.toArray('.stat-number').forEach((stat) => {
          const finalValue = parseInt(stat.textContent)
          gsap.fromTo(stat, 
            { textContent: 0 },
            {
              textContent: finalValue,
              duration: 2,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none none'
              }
            }
          )
        })
      }
    }

    initializeAnimations()
  }, [])

  const trustStats = [
    {
      icon: Users,
      number: '50000',
      suffix: '+',
      label: 'Active Users',
      description: 'Growing community of smart shoppers'
    },
    {
      icon: TrendingUp,
      number: '2100',
      prefix: '$',
      label: 'Avg Savings',
      description: 'Per successful deal completed'
    },
    {
      icon: Clock,
      number: '2.3',
      suffix: ' min',
      label: 'Response Time',
      description: 'Average seller response time'
    },
    {
      icon: Star,
      number: '4.9',
      suffix: '/5',
      label: 'User Rating',
      description: 'Based on 10,000+ reviews'
    }
  ]

  const certifications = [
    {
      icon: Shield,
      title: 'SOC 2 Certified',
      description: 'Enterprise-grade security standards'
    },
    {
      icon: CheckCircle,
      title: 'GDPR Compliant',
      description: 'Full data protection compliance'
    },
    {
      icon: Award,
      title: 'ISO 27001',
      description: 'Information security management'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Available in 25+ countries'
    }
  ]

  const partnerLogos = [
    { name: 'TechCrunch', logo: '🚀' },
    { name: 'Forbes', logo: '💼' },
    { name: 'Wired', logo: '⚡' },
    { name: 'Bloomberg', logo: '📈' },
    { name: 'WSJ', logo: '📰' },
    { name: 'Reuters', logo: '🌐' },
    { name: 'CNN', logo: '📺' },
    { name: 'BBC', logo: '🎯' }
  ]

  const testimonialHighlights = [
    {
      quote: "BestzDealAi saved our company $50K in procurement costs this year.",
      author: "Sarah Johnson, CFO at TechStart Inc."
    },
    {
      quote: "The AI matching is incredibly accurate. Found suppliers I never knew existed.",
      author: "Mike Chen, Operations Manager"
    },
    {
      quote: "Cut our sourcing time by 70%. This platform is a game-changer.",
      author: "Lisa Rodriguez, Procurement Director"
    }
  ]

  return (
    <section ref={sectionRef} className="section-padding bg-dark-bg">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            🛡️ Trust & Security
          </div>
          <h2 className="section-title">
            Trusted by Thousands
          </h2>
          <p className="section-subtitle">
            Join a growing community of smart shoppers and businesses who trust BestzDealAi 
            for their most important purchases.
          </p>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="trust-element card-glass p-6 text-center group hover:border-primary-blue/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.prefix}
                  <span className="stat-number">{stat.number}</span>
                  {stat.suffix}
                </div>
                
                <div className="text-primary-blue font-medium mb-2">
                  {stat.label}
                </div>
                
                <div className="text-gray-400 text-sm">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Security & Compliance
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="trust-element card-glass p-6 text-center group">
                  <div className="w-16 h-16 bg-primary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-blue" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">
                    {cert.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm">
                    {cert.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Media Coverage */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Featured In
          </h3>
          
          <div className="overflow-hidden">
            <div className="logo-carousel flex space-x-12 items-center">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div key={index} className="flex-shrink-0 flex items-center space-x-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl">{partner.logo}</span>
                  <span className="text-gray-400 font-medium whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Testimonial Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            What Our Customers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialHighlights.map((testimonial, index) => (
              <div key={index} className="trust-element card-glass p-6">
                <div className="text-primary-blue text-4xl mb-4">"</div>
                <p className="text-gray-300 mb-4 italic">
                  {testimonial.quote}
                </p>
                <div className="text-sm text-gray-400">
                  — {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="trust-element card-glass p-8">
          <h3 className="text-2xl font-bold text-gradient text-center mb-8">
            Your Security is Our Priority
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary-blue mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                End-to-End Encryption
              </h4>
              <p className="text-gray-400 text-sm">
                All communications and transactions are protected with military-grade encryption.
              </p>
            </div>
            
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-primary-cyan mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                Verified Sellers
              </h4>
              <p className="text-gray-400 text-sm">
                Every seller goes through our comprehensive verification process.
              </p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-primary-purple mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">
                Dispute Resolution
              </h4>
              <p className="text-gray-400 text-sm">
                24/7 support team ready to help resolve any issues quickly and fairly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
