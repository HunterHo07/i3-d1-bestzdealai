'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DealPostForm from '@/components/demo/DealPostForm'
import OfferBoard from '@/components/demo/OfferBoard'
import ChatInterface from '@/components/demo/ChatInterface'
import DemoLevelSelector from '@/components/demo/DemoLevelSelector'
import DemoStats from '@/components/demo/DemoStats'

export default function DemoPage() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [demoData, setDemoData] = useState({
    posts: [],
    offers: [],
    chats: [],
    stats: {
      totalPosts: 0,
      totalOffers: 0,
      averageSavings: 0,
      responseTime: '2.3 minutes'
    }
  })

  useEffect(() => {
    // Load demo data from localStorage
    const loadDemoData = () => {
      try {
        const savedPosts = localStorage.getItem('bestz_demo_posts')
        const savedOffers = localStorage.getItem('bestz_demo_offers')
        const savedChats = localStorage.getItem('bestz_demo_chats')
        
        setDemoData(prev => ({
          ...prev,
          posts: savedPosts ? JSON.parse(savedPosts) : [],
          offers: savedOffers ? JSON.parse(savedOffers) : [],
          chats: savedChats ? JSON.parse(savedChats) : []
        }))
      } catch (error) {
        console.error('Error loading demo data:', error)
      }
    }

    loadDemoData()
  }, [])

  const updateDemoData = (newData) => {
    setDemoData(prev => {
      const updated = { ...prev, ...newData }
      
      // Save to localStorage
      try {
        if (newData.posts) {
          localStorage.setItem('bestz_demo_posts', JSON.stringify(updated.posts))
        }
        if (newData.offers) {
          localStorage.setItem('bestz_demo_offers', JSON.stringify(updated.offers))
        }
        if (newData.chats) {
          localStorage.setItem('bestz_demo_chats', JSON.stringify(updated.chats))
        }
      } catch (error) {
        console.error('Error saving demo data:', error)
      }
      
      return updated
    })
  }

  const demoLevels = [
    {
      id: 1,
      title: 'Basic Deal Post',
      description: 'Create your first deal request and see instant seller responses',
      features: ['Simple form', 'Instant responses', 'Basic comparison']
    },
    {
      id: 2,
      title: 'Enhanced Matching',
      description: 'Experience AI-powered seller suggestions and real-time updates',
      features: ['AI suggestions', 'Real-time updates', 'Chat simulation']
    },
    {
      id: 3,
      title: 'Advanced Features',
      description: 'Full negotiation flow with media uploads and deal completion',
      features: ['Media uploads', 'Negotiation', 'Deal completion']
    }
  ]

  return (
    <main className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      {/* Demo Header */}
      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="section-title">
              Experience BestzDealAi
            </h1>
            <p className="section-subtitle">
              Try our revolutionary reverse marketplace with real-world simulations. 
              Post what you want and watch sellers compete for your business.
            </p>
          </div>
          
          {/* Demo Level Selector */}
          <DemoLevelSelector 
            levels={demoLevels}
            currentLevel={currentLevel}
            onLevelChange={setCurrentLevel}
          />
          
          {/* Demo Stats */}
          <DemoStats stats={demoData.stats} />
        </div>
      </section>

      {/* Demo Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Deal Post Form */}
            <div className="space-y-6">
              <div className="card-glass">
                <h2 className="text-2xl font-bold text-gradient mb-6">
                  {currentLevel === 1 && 'Create Your Deal Request'}
                  {currentLevel === 2 && 'Enhanced Deal Posting'}
                  {currentLevel === 3 && 'Advanced Deal Creation'}
                </h2>
                
                <DealPostForm 
                  level={currentLevel}
                  onSubmit={(postData) => {
                    const newPost = {
                      id: Date.now().toString(),
                      ...postData,
                      timestamp: new Date().toISOString(),
                      status: 'active'
                    }
                    
                    updateDemoData({
                      posts: [...demoData.posts, newPost]
                    })
                  }}
                />
              </div>
              
              {/* Chat Interface (Level 2+) */}
              {currentLevel >= 2 && (
                <div className="card-glass">
                  <h3 className="text-xl font-bold text-gradient mb-4">
                    Live Chat with Sellers
                  </h3>
                  <ChatInterface 
                    level={currentLevel}
                    chats={demoData.chats}
                    onNewMessage={(chatData) => {
                      updateDemoData({
                        chats: [...demoData.chats, chatData]
                      })
                    }}
                  />
                </div>
              )}
            </div>

            {/* Right Column - Offer Board */}
            <div className="space-y-6">
              <div className="card-glass">
                <h2 className="text-2xl font-bold text-gradient mb-6">
                  Live Offer Board
                </h2>
                
                <OfferBoard 
                  level={currentLevel}
                  posts={demoData.posts}
                  offers={demoData.offers}
                  onOfferUpdate={(offerData) => {
                    updateDemoData({
                      offers: [...demoData.offers, offerData]
                    })
                  }}
                />
              </div>
              
              {/* Advanced Features (Level 3) */}
              {currentLevel >= 3 && (
                <div className="card-glass">
                  <h3 className="text-xl font-bold text-gradient mb-4">
                    Deal Analytics
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-dark-accent rounded-lg">
                      <div className="text-2xl font-bold text-primary-cyan">
                        {demoData.offers.length}
                      </div>
                      <div className="text-sm text-gray-400">Total Offers</div>
                    </div>
                    <div className="text-center p-4 bg-dark-accent rounded-lg">
                      <div className="text-2xl font-bold text-primary-blue">
                        23%
                      </div>
                      <div className="text-sm text-gray-400">Avg Savings</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Features Showcase */}
      <section className="section-padding bg-dark-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Why This Changes Everything
            </h2>
            <p className="section-subtitle">
              See how BestzDealAi revolutionizes the way you shop and sell
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="text-xl font-bold mb-3">Buyer-First Approach</h3>
              <p className="text-gray-400">
                You post what you want, sellers compete for your business. 
                No more endless searching.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Matching</h3>
              <p className="text-gray-400">
                Smart algorithms match you with the best sellers based on 
                value, trust, and compatibility.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="text-xl font-bold mb-3">Real-Time Competition</h3>
              <p className="text-gray-400">
                Watch offers come in live, negotiate in real-time, and 
                close deals faster than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
