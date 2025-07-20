import React from "react";
import { AIPrediction } from "../types";
import { Brain, TrendingUp, Clock, CheckCircle } from "lucide-react";

interface PredictionCardProps {
  prediction: AIPrediction;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({
  prediction,
}) => {
  const getConfidencePercent = (confidence: number) => {
    const isFloat = confidence === confidence && confidence % 1 !== 0;

    if (isFloat) return Math.round(confidence * 100);
    return confidence;
  };
  const getConfidenceColor = (confidence: number) => {
    if (getConfidencePercent(confidence) >= 80) return "text-green-400";
    if (getConfidencePercent(confidence) >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getConfidenceBg = (confidence: number) => {
    if (getConfidencePercent(confidence) >= 80) return "bg-green-500/20";
    if (getConfidencePercent(confidence) >= 60) return "bg-yellow-500/20";
    return "bg-red-500/20";
  };

  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-purple-400" />
          <h3 className="font-semibold text-white">AI Prediction</h3>
        </div>
        <div
          className={`px-3 py-1 rounded-full ${getConfidenceBg(
            prediction.confidence
          )}`}
        >
          <span
            className={`text-sm font-medium ${getConfidenceColor(
              prediction.confidence
            )}`}
          >
            {getConfidencePercent(prediction.confidence)}% Confidence
          </span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <span className="text-white font-medium">Predicted Winner:</span>
          <span className="text-yellow-400 font-bold">{prediction.winner}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-gray-300 font-medium mb-2">Analysis:</h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          {prediction.analysis}
        </p>
      </div>

      <div className="mb-4">
        <h4 className="text-gray-300 font-medium mb-2">Key Factors:</h4>
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
          <span>
            Odds shift: {prediction.oddsShift > 0 ? "+" : ""}
            {prediction.oddsShift}%
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-3 w-3" />
          <span>Updated at: {new Date().toLocaleDateString("pt-BR")}</span>
        </div>
      </div>
    </div>
  );
};
