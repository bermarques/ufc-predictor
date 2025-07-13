import React from 'react';
import { AIPrediction } from '../types';
import { Brain, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface PredictionCardProps {
  prediction: AIPrediction;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-green-400';
    if (confidence >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getConfidenceBg = (confidence: number) => {
    if (confidence >= 80) return 'bg-green-500/20';
    if (confidence >= 60) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-purple-400" />
          <h3 className="font-semibold text-white">Previsão da IA</h3>
        </div>
        <div className={`px-3 py-1 rounded-full ${getConfidenceBg(prediction.confidence)}`}>
          <span className={`text-sm font-medium ${getConfidenceColor(prediction.confidence)}`}>
            {prediction.confidence}% confiança
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <span className="text-white font-medium">Vencedor Previsto:</span>
          <span className="text-yellow-400 font-bold">{prediction.predictedWinner}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-gray-300 font-medium mb-2">Análise:</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{prediction.reasoning}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-gray-300 font-medium mb-2">Fatores Principais:</h4>
        <div className="flex flex-wrap gap-2">
          {prediction.keyFactors.map((factor, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md"
            >
              {factor}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-700">
        <div className="flex items-center space-x-1">
          <TrendingUp className="h-3 w-3" />
          <span>Mudança odds: {prediction.oddsShift > 0 ? '+' : ''}{prediction.oddsShift}%</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>Atualizado: {new Date(prediction.lastUpdated).toLocaleDateString('pt-BR')}</span>
        </div>
      </div>
    </div>
  );
};