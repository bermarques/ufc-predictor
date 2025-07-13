import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { StatsSection } from './components/StatsSection';
import { FightCard } from './components/FightCard';
import { mockFights, mockPredictions } from './data/mockData';

function App() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredFights = useMemo(() => {
    switch (selectedFilter) {
      case 'main-events':
        return mockFights.filter(fight => fight.isMainEvent);
      case 'heavyweight':
        return mockFights.filter(fight => fight.weightClass === 'Heavyweight');
      case 'lightweight':
        return mockFights.filter(fight => fight.weightClass === 'Lightweight');
      case 'featherweight':
        return mockFights.filter(fight => fight.weightClass === 'Featherweight');
      default:
        return mockFights;
    }
  }, [selectedFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Previsões <span className="text-red-500">UFC</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Análises inteligentes e previsões precisas para cada luta
          </p>
          <p className="text-gray-400">
            Tecnologia de IA avançada analisando estatísticas, histórico e tendências
          </p>
        </div>

        {/* Stats Section */}
        <StatsSection />

        {/* Filters */}
        <FilterBar 
          selectedFilter={selectedFilter} 
          onFilterChange={setSelectedFilter} 
        />

        {/* Fights Grid */}
        <div className="space-y-8">
          {filteredFights.length > 0 ? (
            filteredFights.map((fight) => {
              const prediction = mockPredictions.find(p => p.fightId === fight.id);
              return (
                <FightCard
                  key={fight.id}
                  fight={fight}
                  prediction={prediction}
                />
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Nenhuma luta encontrada para o filtro selecionado
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© 2024 UFC Predictions. Dados atualizados em tempo real.</p>
            <p className="mt-2 text-sm">
              Previsões baseadas em algoritmos de machine learning e análise estatística
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;