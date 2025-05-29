'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { 
  Mail, Lock, User, Phone, MapPin, Eye, EyeOff, 
  CheckCircle, ArrowRight, Shield, Zap, Users 
} from 'lucide-react'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer',
    agreeToTerms: false,
    subscribeNewsletter: true
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        
        gsap.fromTo('.signup-form',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
        )
        
        gsap.fromTo('.benefits-card',
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.3 }
        )
      }
    }

    initializeAnimations()
  }, [])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const benefits = [
    {
      icon: Zap,
      title: 'Get Better Deals',
      description: 'Save an average of 23% on every purchase with competitive seller offers'
    },
    {
      icon: Users,
      title: 'Access Local Sellers',
      description: 'Discover hidden gems and local businesses in your area'
    },
    {
      icon: Shield,
      title: 'Verified & Secure',
      description: 'All sellers are verified with ratings, reviews, and secure transactions'
    }
  ]

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-dark-bg text-white">
        <Header />
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="container-custom">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">
                Welcome to BestzDealAi!
              </h1>
              <p className="text-gray-300 mb-8">
                Your account has been created successfully. Check your email for verification instructions.
              </p>
              <div className="space-y-4">
                <Link href="/demo" className="btn-primary w-full block text-center">
                  Try the Demo
                </Link>
                <Link href="/" className="btn-secondary w-full block text-center">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      <section className="min-h-screen pt-20 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Join the <span className="text-gradient">Revolution</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Be part of the future of shopping. Create your free account and start 
                  getting better deals today.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="benefits-card flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-400">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="card-glass p-6">
                <h3 className="text-lg font-bold text-primary-blue mb-3">
                  Early Adopter Benefits
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Lifetime 50% discount</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Exclusive beta features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Direct founder feedback</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Pioneer badge & recognition</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Sign Up Form */}
            <div className="signup-form">
              <div className="card-glass p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Create Your Account
                  </h2>
                  <p className="text-gray-400">
                    Join thousands of smart shoppers
                  </p>
                </div>

                {/* User Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    I want to:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleInputChange('userType', 'buyer')}
                      className={`p-3 rounded-lg border text-center transition-colors duration-300 ${
                        formData.userType === 'buyer'
                          ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                          : 'border-white/20 bg-dark-accent text-gray-300 hover:border-primary-blue/50'
                      }`}
                    >
                      <Users className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-sm font-medium">Buy</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('userType', 'seller')}
                      className={`p-3 rounded-lg border text-center transition-colors duration-300 ${
                        formData.userType === 'seller'
                          ? 'border-primary-cyan bg-primary-cyan/10 text-primary-cyan'
                          : 'border-white/20 bg-dark-accent text-gray-300 hover:border-primary-cyan/50'
                      }`}
                    >
                      <Zap className="w-5 h-5 mx-auto mb-1" />
                      <div className="text-sm font-medium">Sell</div>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`w-full pl-10 pr-4 py-3 bg-dark-accent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                            errors.firstName ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                          }`}
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`w-full px-4 py-3 bg-dark-accent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                          errors.lastName ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                        }`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 bg-dark-accent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone (Optional)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue transition-colors duration-300"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange('location', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue transition-colors duration-300"
                          placeholder="New York, NY"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Password Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className={`w-full pl-10 pr-12 py-3 bg-dark-accent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                            errors.password ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                          }`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.password && (
                        <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          className={`w-full pl-10 pr-12 py-3 bg-dark-accent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-300 ${
                            errors.confirmPassword ? 'border-red-500' : 'border-white/10 focus:border-primary-blue'
                          }`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary-blue bg-dark-accent border-white/20 rounded focus:ring-primary-blue focus:ring-2"
                      />
                      <span className="text-sm text-gray-300">
                        I agree to the{' '}
                        <Link href="/terms" className="text-primary-blue hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary-blue hover:underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-red-400 text-xs">{errors.agreeToTerms}</p>
                    )}

                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.subscribeNewsletter}
                        onChange={(e) => handleInputChange('subscribeNewsletter', e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary-blue bg-dark-accent border-white/20 rounded focus:ring-primary-blue focus:ring-2"
                      />
                      <span className="text-sm text-gray-300">
                        Subscribe to our newsletter for updates and exclusive offers
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-primary text-white hover:scale-105 hover:shadow-lg'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary-blue hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
