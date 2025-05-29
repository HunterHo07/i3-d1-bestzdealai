'use client'

import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react'

export default function DemoStats({ stats }) {
  const statItems = [
    {
      icon: Users,
      label: 'Total Posts',
      value: stats.totalPosts,
      color: 'text-primary-blue'
    },
    {
      icon: TrendingUp,
      label: 'Total Offers',
      value: stats.totalOffers,
      color: 'text-primary-cyan'
    },
    {
      icon: DollarSign,
      label: 'Avg Savings',
      value: `${stats.averageSavings}%`,
      color: 'text-green-400'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: stats.responseTime,
      color: 'text-primary-purple'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statItems.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div key={index} className="card-glass p-4 text-center">
            <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
            <div className={`text-xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-400">
              {stat.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}
