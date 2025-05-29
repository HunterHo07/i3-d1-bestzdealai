'use client'

import { CheckCircle, Lock } from 'lucide-react'

export default function DemoLevelSelector({ levels, currentLevel, onLevelChange }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-white text-center mb-6">
        Choose Your Demo Experience
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {levels.map((level) => {
          const isActive = currentLevel === level.id
          const isUnlocked = level.id <= currentLevel || level.id === 1
          
          return (
            <button
              key={level.id}
              onClick={() => isUnlocked && onLevelChange(level.id)}
              disabled={!isUnlocked}
              className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                isActive
                  ? 'border-primary-blue bg-primary-blue/10 glow-effect'
                  : isUnlocked
                  ? 'border-white/20 bg-dark-card hover:border-primary-blue/50'
                  : 'border-gray-600 bg-gray-800/50 opacity-50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  isActive
                    ? 'bg-primary-blue text-white'
                    : isUnlocked
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-600 text-gray-400'
                }`}>
                  {isUnlocked ? level.id : <Lock className="w-4 h-4" />}
                </div>
                
                {isActive && (
                  <CheckCircle className="w-5 h-5 text-primary-blue" />
                )}
              </div>
              
              <h4 className={`text-lg font-bold mb-2 ${
                isUnlocked ? 'text-white' : 'text-gray-400'
              }`}>
                {level.title}
              </h4>
              
              <p className={`text-sm mb-4 ${
                isUnlocked ? 'text-gray-300' : 'text-gray-500'
              }`}>
                {level.description}
              </p>
              
              <div className="space-y-1">
                {level.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      isUnlocked ? 'bg-primary-blue' : 'bg-gray-500'
                    }`}></div>
                    <span className={`text-xs ${
                      isUnlocked ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
