import React from "react";
import { Fight, AIPrediction } from "../types";
import { FighterCard } from "./FighterCard";
import { PredictionCard } from "./PredictionCard";
import { Calendar, MapPin, Star, Zap } from "lucide-react";
import Belt from "./Belt";

interface FightCardProps {
  fight: Fight;
  fightDate: string;
  fightLocation: fightLocation;
}

interface fightLocation {
  locationName: string;
  locationCountry: string;
}

export const FightCard: React.FC<FightCardProps> = ({
  fight,
  fightDate,
  fightLocation,
}) => {
  const prediction = fight.prediction;

  const isWinner = (fighterName: string) => {
    return prediction?.winner === fighterName;
  };

  const getWeightClass = (weightClass: string) => {
    switch (weightClass) {
      case "265":
        return "Heavyweight";
      case "205":
        return "Light Heavyweight";
      case "185":
        return "Middleweight";
      case "170":
        return "Welterweight";
      case "155":
        return "Lightweight";
      case "145":
        return "Featherweight";
      case "135":
        return "Bantamweight";
      case "125":
        return "Flyweight";
      case "115":
        return "Strawweight";
      case "105":
        return "Atomweight";
      default:
        return weightClass + "lbs";
    }
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
          <div className="flex gap-4">
            {fight.belt && (
              <img
                src="src/components/icons/belt.png"
                width={40}
                style={{
                  filter:
                    "invert(100%) sepia(100%) saturate(1%) hue-rotate(180deg) brightness(108%) contrast(101%)",
                }}
              />
            )}

            <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
              {getWeightClass(fight.weight)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{fightDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span className="flex items-center gap-2">
              {fightLocation?.locationName}
              <img
                src={fightLocation.locationCountry}
                alt="country flag"
                width={20}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-4 flex-col sm:flex-row ">
          <FighterCard
            fighter={fight.fighterA}
            isWinner={isWinner(fight.fighterA.name)}
          />

          <div className="flex items-center justify-center">
            <div className="bg-red-600 text-white p-3 rounded-full">
              <Zap className="h-6 w-6" />
            </div>
          </div>

          <FighterCard
            fighter={fight.fighterB}
            isWinner={isWinner(fight.fighterB.name)}
          />
        </div>
      </div>

      {prediction && <PredictionCard prediction={prediction} />}
    </div>
  );
};
