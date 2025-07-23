import React from "react";
import { Fighter } from "../types";
import { MapPin, Trophy } from "lucide-react";

interface FighterCardProps {
  fighter: Fighter;
  isWinner?: boolean;
}

export const FighterCard: React.FC<FighterCardProps> = ({
  fighter,
  isWinner = false,
}) => {
  return (
    <div
      className={`relative p-4 rounded-xl transition-all duration-300 ${
        isWinner
          ? "bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 ring-2 ring-yellow-500/50"
          : "bg-gray-800/50"
      } flex-1`}
    >
      {isWinner && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-black p-1 rounded-full">
          <Trophy className="h-4 w-4" />
        </div>
      )}

      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={fighter.picture}
            alt={fighter.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-red-500/50"
          />
          {fighter.rank && (
            <div className="absolute -bottom-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {fighter.rank}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex gap-2 items-center">
            <h3 className="font-bold text-lg text-white truncate">
              {fighter.name}
            </h3>
            <img src={fighter.country} alt="country flag" width={20} />
          </div>
          <p className="text-gray-300 text-sm">{fighter.record}</p>
          {/* <div className="flex items-center space-x-2 mt-1">
            <MapPin className="h-3 w-3 text-gray-400" />
            <span className="text-gray-400 text-xs">{fighter.country}</span>
            <span className="text-gray-400 text-xs">• {fighter.age} anos</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
