'use client'

import { useState, useEffect } from 'react'
import { Star, MapPin, Clock, MessageCircle, CheckCircle, TrendingUp } from 'lucide-react'

export default function OfferBoard({ level, posts, offers, onOfferUpdate }) {
  const [selectedPost, setSelectedPost] = useState(null)
  const [simulatedOffers, setSimulatedOffers] = useState([])
  const [isGeneratingOffers, setIsGeneratingOffers] = useState(false)

  // Simulated seller data
  const mockSellers = [
    {
      id: 1,
      name: 'TechHub Electronics',
      rating: 4.9,
      reviews: 1247,
      location: 'New York, NY',
      verified: true,
      responseTime: '2 min',
      specialties: ['Electronics', 'Gadgets']
    },
    {
      id: 2,
      name: 'Local Electronics Plus',
      rating: 4.7,
      reviews: 892,
      location: 'Brooklyn, NY',
      verified: true,
      responseTime: '5 min',
      specialties: ['Electronics', 'Repairs']
    },
    {
      id: 3,
      name: 'Best Buy Certified',
      rating: 4.8,
      reviews: 2156,
      location: 'Manhattan, NY',
      verified: true,
      responseTime: '1 min',
      specialties: ['Electronics', 'Warranties']
    },
    {
      id: 4,
      name: 'Mobile Masters',
      rating: 4.6,
      reviews: 634,
      location: 'Queens, NY',
      verified: true,
      responseTime: '8 min',
      specialties: ['Smartphones', 'Accessories']
    },
    {
      id: 5,
      name: 'Digital Deals Direct',
      rating: 4.5,
      reviews: 445,
      location: 'Online Store',
      verified: true,
      responseTime: '15 min',
      specialties: ['Electronics', 'Bulk Orders']
    }
  ]

  useEffect(() => {
    if (posts.length > 0 && !selectedPost) {
      setSelectedPost(posts[posts.length - 1])
    }
  }, [posts, selectedPost])

  useEffect(() => {
    if (selectedPost && simulatedOffers.length === 0) {
      generateSimulatedOffers()
    }
  }, [selectedPost])

  const generateSimulatedOffers = async () => {
    if (!selectedPost) return

    setIsGeneratingOffers(true)
    setSimulatedOffers([])

    // Simulate offers coming in over time
    const numberOfOffers = Math.min(level + 2, mockSellers.length)
    
    for (let i = 0; i < numberOfOffers; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))
      
      const seller = mockSellers[i]
      const basePrice = parseInt(selectedPost.budget?.min || 100)
      const maxPrice = parseInt(selectedPost.budget?.max || 500)
      const priceRange = maxPrice - basePrice
      const offerPrice = basePrice + Math.random() * priceRange
      
      const newOffer = {
        id: Date.now() + i,
        sellerId: seller.id,
        sellerName: seller.name,
        sellerRating: seller.rating,
        sellerReviews: seller.reviews,
        sellerLocation: seller.location,
        sellerVerified: seller.verified,
        sellerResponseTime: seller.responseTime,
        price: Math.round(offerPrice),
        originalPrice: Math.round(offerPrice * 1.15),
        description: `High-quality ${selectedPost.product} available. ${seller.specialties.includes('Electronics') ? 'Warranty included.' : 'Fast delivery available.'}`,
        features: [
          'Free shipping',
          seller.verified ? 'Verified seller' : 'Standard seller',
          `${seller.responseTime} response time`,
          seller.location.includes('Online') ? 'Online delivery' : 'Local pickup available'
        ],
        timestamp: new Date().toISOString(),
        status: 'active'
      }

      setSimulatedOffers(prev => [...prev, newOffer])
      onOfferUpdate(newOffer)
    }

    setIsGeneratingOffers(false)
  }

  const handleOfferAction = (offerId, action) => {
    setSimulatedOffers(prev => 
      prev.map(offer => 
        offer.id === offerId 
          ? { ...offer, status: action }
          : offer
      )
    )
  }

  const sortedOffers = [...simulatedOffers].sort((a, b) => {
    if (level >= 2) {
      // AI-powered sorting: consider price, rating, and location
      const scoreA = (5 - a.price / 100) + a.sellerRating + (a.sellerLocation.includes('NY') ? 1 : 0)
      const scoreB = (5 - b.price / 100) + b.sellerRating + (b.sellerLocation.includes('NY') ? 1 : 0)
      return scoreB - scoreA
    } else {
      // Simple price sorting
      return a.price - b.price
    }
  })

  if (!selectedPost) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-400 mb-2">
          No Active Requests
        </h3>
        <p className="text-gray-500 text-sm">
          Create a deal request to see offers from sellers
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Selected Post Summary */}
      <div className="bg-dark-accent p-4 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-2">
          "{selectedPost.product}"
        </h3>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span>Budget: ${selectedPost.budget?.min}-${selectedPost.budget?.max}</span>
          <span>•</span>
          <span>{selectedPost.location}</span>
          <span>•</span>
          <span>{selectedPost.urgency} priority</span>
        </div>
      </div>

      {/* Offer Generation Status */}
      {isGeneratingOffers && (
        <div className="bg-primary-blue/10 border border-primary-blue/20 p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 border-2 border-primary-blue/30 border-t-primary-blue rounded-full animate-spin"></div>
            <span className="text-primary-blue font-medium">
              AI is finding the best sellers for you...
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-400">
            {simulatedOffers.length} offers received so far
          </div>
        </div>
      )}

      {/* Offers List */}
      <div className="space-y-4">
        {sortedOffers.length === 0 && !isGeneratingOffers ? (
          <div className="text-center py-8">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-400">Waiting for offers...</p>
          </div>
        ) : (
          sortedOffers.map((offer, index) => (
            <div 
              key={offer.id}
              className="card-glass p-6 hover:border-primary-blue/30 transition-all duration-300"
            >
              {/* Offer Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                    {offer.sellerName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-lg font-semibold text-white">
                        {offer.sellerName}
                      </h4>
                      {offer.sellerVerified && (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      )}
                      {level >= 2 && index === 0 && (
                        <span className="bg-primary-blue/20 text-primary-blue text-xs px-2 py-1 rounded-full">
                          AI Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{offer.sellerRating}</span>
                        <span>({offer.sellerReviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{offer.sellerLocation}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{offer.sellerResponseTime} response</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-cyan">
                    ${offer.price}
                  </div>
                  {offer.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      ${offer.originalPrice}
                    </div>
                  )}
                  <div className="text-xs text-green-400">
                    Save ${offer.originalPrice - offer.price}
                  </div>
                </div>
              </div>

              {/* Offer Description */}
              <p className="text-gray-300 mb-4">
                {offer.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {offer.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex}
                    className="bg-dark-accent text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={() => handleOfferAction(offer.id, 'accepted')}
                  disabled={offer.status !== 'active'}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-300 ${
                    offer.status === 'accepted'
                      ? 'bg-green-500 text-white'
                      : offer.status === 'active'
                      ? 'bg-primary-blue text-white hover:bg-primary-blue/80'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {offer.status === 'accepted' ? 'Accepted' : 'Accept Offer'}
                </button>
                
                {level >= 2 && (
                  <button
                    onClick={() => handleOfferAction(offer.id, 'negotiating')}
                    disabled={offer.status !== 'active'}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 ${
                      offer.status === 'negotiating'
                        ? 'bg-yellow-500 text-white'
                        : offer.status === 'active'
                        ? 'bg-dark-accent text-white border border-white/20 hover:bg-white/10'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {offer.status === 'negotiating' ? 'Negotiating' : 'Negotiate'}
                    </span>
                  </button>
                )}
                
                <button
                  onClick={() => handleOfferAction(offer.id, 'declined')}
                  disabled={offer.status !== 'active'}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                    offer.status === 'declined'
                      ? 'bg-red-500 text-white'
                      : offer.status === 'active'
                      ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {offer.status === 'declined' ? 'Declined' : 'Decline'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Stats */}
      {sortedOffers.length > 0 && (
        <div className="bg-dark-accent p-4 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-3">
            Offer Summary
          </h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-primary-blue">
                {sortedOffers.length}
              </div>
              <div className="text-xs text-gray-400">Total Offers</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary-cyan">
                ${Math.min(...sortedOffers.map(o => o.price))}
              </div>
              <div className="text-xs text-gray-400">Best Price</div>
            </div>
            <div>
              <div className="text-xl font-bold text-green-400">
                {Math.round(((Math.max(...sortedOffers.map(o => o.originalPrice || o.price)) - Math.min(...sortedOffers.map(o => o.price))) / Math.max(...sortedOffers.map(o => o.originalPrice || o.price))) * 100)}%
              </div>
              <div className="text-xs text-gray-400">Max Savings</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
