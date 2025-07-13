import React from "react";
import { Fight, AIPrediction } from "../types";
import { FighterCard } from "./FighterCard";
import { PredictionCard } from "./PredictionCard";
import { Calendar, MapPin, Star, Zap } from "lucide-react";

interface FightCardProps {
  fight: Fight;
  prediction?: AIPrediction;
}

export const FightCard: React.FC<FightCardProps> = ({ fight, prediction }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const isWinner = (fighterId: string) => {
    return (
      prediction?.predictedWinner ===
      (fighterId === fight.fighter1.id
        ? fight.fighter1.name
        : fight.fighter2.name)
    );
  };

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-white">{fight.eventName}</h2>
            {fight.isMainEvent && (
              <span className="flex items-center space-x-1 bg-red-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                <Star className="h-3 w-3" />
                <span>MAIN EVENT</span>
              </span>
            )}
          </div>
          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
            {fight.weightClass}
          </span>
        </div>

        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(fight.eventDate)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{fight.eventLocation}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-4 flex-col sm:flex-row ">
          <FighterCard
            fighter={fight.fighter1}
            isWinner={isWinner(fight.fighter1.id)}
          />

          <div className="flex items-center justify-center">
            <div className="bg-red-600 text-white p-3 rounded-full">
              <Zap className="h-6 w-6" />
            </div>
          </div>

          <FighterCard
            fighter={fight.fighter2}
            isWinner={isWinner(fight.fighter2.id)}
          />
        </div>
      </div>

      {prediction && <PredictionCard prediction={prediction} />}
    </div>
  );
};
