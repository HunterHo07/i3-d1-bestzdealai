'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const initializeAnimations = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        
        gsap.fromTo('.login-form',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
  }

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
                Welcome Back!
              </h1>
              <p className="text-gray-300 mb-8">
                You have successfully logged in to your BestzDealAi account.
              </p>
              <div className="space-y-4">
                <Link href="/demo" className="btn-primary w-full block text-center">
                  Go to Demo
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
          <div className="max-w-md mx-auto">
            <div className="login-form">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Welcome <span className="text-gradient">Back</span>
                </h1>
                <p className="text-gray-400">
                  Sign in to your BestzDealAi account
                </p>
              </div>

              <div className="card-glass p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  {/* Password */}
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

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                        className="w-4 h-4 text-primary-blue bg-dark-accent border-white/20 rounded focus:ring-primary-blue focus:ring-2"
                      />
                      <span className="text-sm text-gray-300">Remember me</span>
                    </label>
                    <Link href="/forgot-password" className="text-sm text-primary-blue hover:underline">
                      Forgot password?
                    </Link>
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
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-400">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-primary-blue hover:underline">
                      Sign up for free
                    </Link>
                  </p>
                </div>

                {/* Social Login */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-dark-card text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-lg bg-dark-accent text-sm font-medium text-gray-300 hover:bg-white/5 transition-colors duration-300">
                      <span>Google</span>
                    </button>
                    <button className="w-full inline-flex justify-center py-2 px-4 border border-white/20 rounded-lg bg-dark-accent text-sm font-medium text-gray-300 hover:bg-white/5 transition-colors duration-300">
                      <span>GitHub</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Demo Access */}
              <div className="mt-8 text-center">
                <div className="card-glass p-4">
                  <p className="text-gray-400 text-sm mb-3">
                    Want to try before signing up?
                  </p>
                  <Link href="/demo" className="btn-secondary text-sm">
                    Try Demo Without Account
                  </Link>
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
