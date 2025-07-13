import { Fight, AIPrediction, Fighter } from '../types';

export const mockFighters: Fighter[] = [
  {
    id: '1',
    name: 'Jon Jones',
    record: '27-1-0',
    rank: 1,
    country: 'USA',
    age: 36,
    weightClass: 'Heavyweight',
    photo: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Stipe Miocic',
    record: '20-4-0',
    rank: 3,
    country: 'USA',
    age: 41,
    weightClass: 'Heavyweight',
    photo: 'https://images.pexels.com/photos/7045734/pexels-photo-7045734.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Islam Makhachev',
    record: '25-1-0',
    rank: 1,
    country: 'Russia',
    age: 32,
    weightClass: 'Lightweight',
    photo: 'https://images.pexels.com/photos/8612961/pexels-photo-8612961.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Charles Oliveira',
    record: '34-9-0',
    rank: 2,
    country: 'Brazil',
    age: 34,
    weightClass: 'Lightweight',
    photo: 'https://images.pexels.com/photos/7045562/pexels-photo-7045562.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    name: 'Alexander Volkanovski',
    record: '26-3-0',
    rank: 1,
    country: 'Australia',
    age: 35,
    weightClass: 'Featherweight',
    photo: 'https://images.pexels.com/photos/8611992/pexels-photo-8611992.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    name: 'Ilia Topuria',
    record: '15-0-0',
    rank: 2,
    country: 'Spain',
    age: 27,
    weightClass: 'Featherweight',
    photo: 'https://images.pexels.com/photos/7045417/pexels-photo-7045417.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];

export const mockFights: Fight[] = [
  {
    id: '1',
    fighter1: mockFighters[0],
    fighter2: mockFighters[1],
    weightClass: 'Heavyweight',
    eventName: 'UFC 309',
    eventDate: '2024-11-16',
    eventLocation: 'Madison Square Garden, New York',
    isMainEvent: true,
    status: 'upcoming'
  },
  {
    id: '2',
    fighter1: mockFighters[2],
    fighter2: mockFighters[3],
    weightClass: 'Lightweight',
    eventName: 'UFC 308',
    eventDate: '2024-10-26',
    eventLocation: 'Etihad Arena, Abu Dhabi',
    isMainEvent: true,
    status: 'upcoming'
  },
  {
    id: '3',
    fighter1: mockFighters[4],
    fighter2: mockFighters[5],
    weightClass: 'Featherweight',
    eventName: 'UFC 307',
    eventDate: '2024-10-05',
    eventLocation: 'Delta Center, Salt Lake City',
    isMainEvent: false,
    status: 'upcoming'
  }
];

export const mockPredictions: AIPrediction[] = [
  {
    fightId: '1',
    predictedWinner: 'Jon Jones',
    confidence: 78,
    reasoning: 'Jones possui maior alcance, experiência em grandes lutas e histórico dominante contra lutadores de wrestling. Miocic vem de longa inatividade.',
    keyFactors: ['Alcance superior', 'Experiência em title fights', 'Clinch game', 'Inatividade do oponente'],
    oddsShift: 2.5,
    lastUpdated: '2024-01-15T10:30:00Z'
  },
  {
    fightId: '2',
    predictedWinner: 'Islam Makhachev',
    confidence: 65,
    reasoning: 'Makhachev mantém pressão constante e controle superior. Oliveira é perigoso no ground game, mas Islam tem melhor controle posicional.',
    keyFactors: ['Pressure fighting', 'Cardio superior', 'Wrestling control', 'Experience advantage'],
    oddsShift: -1.8,
    lastUpdated: '2024-01-15T11:15:00Z'
  },
  {
    fightId: '3',
    predictedWinner: 'Ilia Topuria',
    confidence: 72,
    reasoning: 'Topuria possui poder de nocaute superior e está no auge da carreira. Volkanovski ainda é tecnicamente superior, mas vem de derrotas recentes.',
    keyFactors: ['Knockout power', 'Momentum', 'Youth advantage', 'Recent form'],
    oddsShift: 4.2,
    lastUpdated: '2024-01-15T09:45:00Z'
  }
];