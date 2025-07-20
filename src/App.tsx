import React, { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { FilterBar } from "./components/FilterBar";
import { StatsSection } from "./components/StatsSection";
import { FightCard } from "./components/FightCard";
import { useGetFights } from "./hooks/api/useGetFights";

function App() {
  const { data } = useGetFights();

  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredFights = useMemo(() => {
    switch (selectedFilter) {
      case "main-events":
        return data?.fights?.filter((fight) => fight.main);
      case "heavyweight":
        return data?.fights?.filter((fight) => fight.weight === "265");
      case "lightweight":
        return data?.fights?.filter((fight) => fight.weight === "155");
      case "featherweight":
        return data?.fights?.filter((fight) => fight.weight === "145");
      default:
        return data?.fights;
    }
  }, [selectedFilter, data?.fights]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-red-500">UFC</span> Previsions
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Smart predictions for each UFC fight
          </p>
          <p className="text-gray-400">
            Advanced AI technology analyzing statistics, history and trends
          </p>
        </div>

        {/* Stats Section */}
        {/* <StatsSection /> */}

        {/* Filters */}
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        {/* Fights Grid */}
        <div className="space-y-8">
          {filteredFights?.length > 0 ? (
            filteredFights?.map((fight) => {
              return (
                <FightCard
                  key={crypto.randomUUID()}
                  fight={fight}
                  fightDate={data?.date}
                />
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No fight found for the selected weight class
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© 2024 UFC Predictions.</p>
            <p className="mt-2 text-sm">
              Previsions based in machine learning algorithms and statistical
              analysis.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
