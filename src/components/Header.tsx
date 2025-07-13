import React from 'react';
import { Zap, Brain } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-red-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">UFC Predictions</h1>
                <p className="text-xs text-gray-400">Powered by AI</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-purple-600/20 px-3 py-1 rounded-full">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">IA Ativa</span>
          </div>
        </div>
      </div>
    </header>
  );
};