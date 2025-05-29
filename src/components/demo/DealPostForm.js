'use client'

import { useState } from 'react'
import { Upload, MapPin, DollarSign, Tag, Image, Send } from 'lucide-react'

export default function DealPostForm({ level, onSubmit }) {
  const [formData, setFormData] = useState({
    product: '',
    category: '',
    budget: { min: '', max: '' },
    location: '',
    description: '',
    images: [],
    urgency: 'normal',
    preferences: []
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    'Electronics', 'Automotive', 'Home & Garden', 'Fashion', 
    'Sports & Outdoors', 'Health & Beauty', 'Books & Media',
    'Toys & Games', 'Food & Beverages', 'Services'
  ]

  const urgencyOptions = [
    { value: 'low', label: 'No Rush', description: 'Within 2 weeks' },
    { value: 'normal', label: 'Normal', description: 'Within 1 week' },
    { value: 'high', label: 'Urgent', description: 'Within 3 days' },
    { value: 'critical', label: 'ASAP', description: 'Within 24 hours' }
  ]

  const preferenceOptions = [
    'Local sellers preferred',
    'Free shipping required',
    'Brand new only',
    'Certified/verified sellers',
    'Eco-friendly options',
    'Same-day pickup available'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleBudgetChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      budget: {
        ...prev.budget,
        [type]: value
      }
    }))
  }

  const handlePreferenceToggle = (preference) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(preference)
        ? prev.preferences.filter(p => p !== preference)
        : [...prev.preferences, preference]
    }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    // Simulate image upload
    const imageUrls = files.map(file => URL.createObjectURL(file))
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    onSubmit(formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      product: '',
      category: '',
      budget: { min: '', max: '' },
      location: '',
      description: '',
      images: [],
      urgency: 'normal',
      preferences: []
    })
    setCurrentStep(1)
  }

  const nextStep = () => {
    if (currentStep < (level >= 3 ? 3 : 2)) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.product && formData.category && formData.budget.min && formData.budget.max
      case 2:
        return formData.location
      case 3:
        return true
      default:
        return false
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center space-x-2 mb-6">
        {[1, 2, ...(level >= 3 ? [3] : [])].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step <= currentStep
                ? 'bg-primary-blue text-white'
                : 'bg-gray-600 text-gray-400'
            }`}>
              {step}
            </div>
            {step < (level >= 3 ? 3 : 2) && (
              <div className={`w-8 h-1 mx-2 ${
                step < currentStep ? 'bg-primary-blue' : 'bg-gray-600'
              }`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Basic Information */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">
            What are you looking for?
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Product or Service
            </label>
            <input
              type="text"
              value={formData.product}
              onChange={(e) => handleInputChange('product', e.target.value)}
              placeholder="e.g., iPhone 15 Pro, Wedding Photography, Car Repair"
              className="w-full px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
              className="w-full px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary-blue"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Min Budget ($)
              </label>
              <input
                type="number"
                value={formData.budget.min}
                onChange={(e) => handleBudgetChange('min', e.target.value)}
                placeholder="100"
                className="w-full px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Max Budget ($)
              </label>
              <input
                type="number"
                value={formData.budget.max}
                onChange={(e) => handleBudgetChange('max', e.target.value)}
                placeholder="500"
                className="w-full px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Location & Details */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">
            Location & Additional Details
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Location
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              placeholder="City, State or ZIP code"
              className="w-full px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description (Optional)
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Any specific requirements, preferences, or additional details..."
              rows={4}
              className="w-full px-4 py-3 bg-dark-accent border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-blue resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Urgency Level
            </label>
            <div className="grid grid-cols-2 gap-2">
              {urgencyOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleInputChange('urgency', option.value)}
                  className={`p-3 rounded-lg border text-left transition-colors duration-300 ${
                    formData.urgency === option.value
                      ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                      : 'border-white/10 bg-dark-accent text-gray-300 hover:border-primary-blue/50'
                  }`}
                >
                  <div className="font-medium">{option.label}</div>
                  <div className="text-xs opacity-75">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Advanced Options (Level 3+) */}
      {currentStep === 3 && level >= 3 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">
            Advanced Options
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <Image className="w-4 h-4 inline mr-1" />
              Upload Images (Optional)
            </label>
            <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-400">Click to upload images</p>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB each</p>
              </label>
            </div>
            
            {formData.images.length > 0 && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {formData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Preferences
            </label>
            <div className="space-y-2">
              {preferenceOptions.map((preference) => (
                <button
                  key={preference}
                  type="button"
                  onClick={() => handlePreferenceToggle(preference)}
                  className={`w-full p-3 rounded-lg border text-left transition-colors duration-300 ${
                    formData.preferences.includes(preference)
                      ? 'border-primary-blue bg-primary-blue/10 text-primary-blue'
                      : 'border-white/10 bg-dark-accent text-gray-300 hover:border-primary-blue/50'
                  }`}
                >
                  {preference}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
            currentStep === 1
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-dark-accent text-white hover:bg-white/10'
          }`}
        >
          Previous
        </button>

        {currentStep < (level >= 3 ? 3 : 2) ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!isStepValid()}
            className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
              isStepValid()
                ? 'bg-primary-blue text-white hover:bg-primary-blue/80'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || !isStepValid()}
            className={`px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300 ${
              isSubmitting || !isStepValid()
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-primary text-white hover:opacity-90'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Posting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Post Deal Request</span>
              </>
            )}
          </button>
        )}
      </div>
    </form>
  )
}
