import React from 'react';
import { Filter, Calendar, Trophy } from 'lucide-react';

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ selectedFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'Todas as Lutas', icon: Trophy },
    { id: 'main-events', label: 'Main Events', icon: Calendar },
    { id: 'heavyweight', label: 'Heavyweight', icon: Filter },
    { id: 'lightweight', label: 'Lightweight', icon: Filter },
    { id: 'featherweight', label: 'Featherweight', icon: Filter },
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const Icon = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-medium">{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};