export interface Fighter {
  id: string;
  name: string;
  record: string;
  rank?: number;
  country: string;
  age: number;
  weightClass: string;
  photo: string;
}

export interface Fight {
  id: string;
  fighter1: Fighter;
  fighter2: Fighter;
  weightClass: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  isMainEvent: boolean;
  status: 'upcoming' | 'live' | 'completed';
}

export interface AIPrediction {
  fightId: string;
  predictedWinner: string;
  confidence: number;
  reasoning: string;
  keyFactors: string[];
  oddsShift: number;
  lastUpdated: string;
}