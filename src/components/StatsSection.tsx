import React from 'react';
import { TrendingUp, Target, Zap, Award } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Target,
      label: 'Precisão da IA',
      value: '87.3%',
      description: 'Últimas 100 previsões',
      color: 'text-green-400'
    },
    {
      icon: TrendingUp,
      label: 'Tendência',
      value: '+12.5%',
      description: 'Melhoria mensal',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      label: 'Lutas Analisadas',
      value: '2,847',
      description: 'Total histórico',
      color: 'text-yellow-400'
    },
    {
      icon: Award,
      label: 'Streak Atual',
      value: '8',
      description: 'Previsões corretas',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <Icon className={`h-6 w-6 ${stat.color}`} />
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
            </div>
            <h3 className="text-white font-medium mb-1">{stat.label}</h3>
            <p className="text-gray-400 text-sm">{stat.description}</p>
          </div>
        );
      })}
    </div>
  );
};