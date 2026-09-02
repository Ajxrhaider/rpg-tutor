'use client';

import { useState, useEffect, useMemo } from 'react';
import ChatInterface from '@/components/ChatInterface';
import FeedbackReport from '@/components/FeedbackReport';
import { SCENARIOS, ALL_LANGUAGES, type ScenarioType } from '@/lib/scenarios';

type GameState = 'select' | 'chat' | 'review';
type Message = { role: 'user' | 'assistant'; content: string };
type ActiveScenario = { id: string; title: string; language: string; role: string; desc: string };

const shuffleArray = (array: any[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function Home() {
  const [gameState, setGameState] = useState<GameState>('select');
  const [activeScenario, setActiveScenario] = useState<ActiveScenario | null>(null);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayScenarios, setDisplayScenarios] = useState<ScenarioType[]>([]);
  
  const [cardLanguages, setCardLanguages] = useState<Record<string, string>>({});
  const [isMounted, setIsMounted] = useState(false);

  const LANGUAGES = useMemo(() => ['All', ...[...ALL_LANGUAGES].sort()], []);
  const CATEGORIES = useMemo(() => ['All', ...Array.from(new Set(SCENARIOS.map(s => s.category))).sort()], []);

  useEffect(() => {
    setDisplayScenarios(shuffleArray(SCENARIOS));
    setIsMounted(true);
  }, []);

  const handleStart = (scenario: ScenarioType) => {
    const chosenLanguage = cardLanguages[scenario.id] || scenario.originalLanguage;
    setActiveScenario({
      id: scenario.id,
      title: scenario.title,
      language: chosenLanguage,
      role: scenario.role,
      desc: scenario.desc
    });
    setGameState('chat');
  };

  const handleEnd = (messages: Message[]) => {
    setChatHistory(messages);
    setGameState('review');
  };

  const handleReset = () => {
    setChatHistory([]);
    setGameState('select');
  };

  const handleShuffle = () => {
    setDisplayScenarios(shuffleArray(displayScenarios));
  };

  const handleCardLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>, scenarioId: string) => {
    e.stopPropagation(); 
    setCardLanguages(prev => ({
      ...prev,
      [scenarioId]: e.target.value
    }));
  };

  const filteredScenarios = displayScenarios.filter(scenario => {
    const matchesSearch = 
      scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scenario.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLang = selectedLanguageFilter === 'All' || scenario.availableLanguages.includes(selectedLanguageFilter);
    const matchesCat = selectedCategory === 'All' || scenario.category === selectedCategory;
    
    return matchesSearch && matchesLang && matchesCat;
  });

  // TACTICAL LIMITER: Only render 100 DOM elements at a time to prevent browser crash
  const paginatedScenarios = filteredScenarios.slice(0, 100);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen font-inter bg-gray-50 text-slate-800">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16 text-center rounded-b-lg shadow-lg mb-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 mb-4 animate-fade-in-up">
            <img src="/images/icon.png" alt="Hizaki Labs Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg border-2 border-indigo-300 object-cover" />
            <h1 className="text-4xl md:text-5xl font-extrabold font-space-grotesk tracking-tight">
              Hizaki Labs: RPG Tutor 🌍
            </h1>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
            Practice real-world language scenarios with AI.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        {gameState === 'select' && (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-space-grotesk relative pb-4">
              Select a Scenario
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded"></span>
            </h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <input 
                    type="text" 
                    placeholder="Search titles or keywords..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-5 py-3 pl-12 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <svg className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                  <select 
                    value={selectedLanguageFilter}
                    onChange={(e) => setSelectedLanguageFilter(e.target.value)}
                    className="flex-1 md:w-48 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary font-medium"
                  >
                    {LANGUAGES.map(lang => (
                      <option key={lang} value={lang}>{lang === 'All' ? 'All Languages' : lang}</option>
                    ))}
                  </select>

                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="flex-1 md:w-40 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary font-medium"
                  >
                    {CATEGORIES.map(cat => (
                      <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                    ))}
                  </select>

                  <button 
                    onClick={handleShuffle}
                    className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm whitespace-nowrap"
                  >
                    🔀 Shuffle
                  </button>
                </div>
              </div>
              <div className="text-center mt-4 text-sm text-gray-500 font-medium">
                Deploying {paginatedScenarios.length} of {filteredScenarios.length} available operational scenarios.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedScenarios.length > 0 ? (
                paginatedScenarios.map((scenario) => {
                  const currentLang = cardLanguages[scenario.id] || scenario.originalLanguage;
                  
                  return (
                    <div 
                      key={scenario.id} 
                      onClick={() => handleStart(scenario)}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 cursor-pointer flex flex-col items-center text-center group border border-gray-100 h-full relative"
                    >
                      <div className="flex gap-2 mb-4 w-full justify-center items-center flex-wrap">
                        <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={currentLang}
                            onChange={(e) => handleCardLanguageChange(e, scenario.id)}
                            className={`px-3 py-1 pr-6 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none transition-colors border max-w-[140px] truncate ${
                              currentLang === 'English' 
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100' 
                                : 'bg-indigo-50 border-indigo-200 text-primary hover:bg-indigo-100'
                            }`}
                          >
                            {scenario.availableLanguages.map(lang => (
                              <option key={lang} value={lang}>{lang}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <svg className={`fill-current h-3 w-3 ${currentLang === 'English' ? 'text-emerald-700' : 'text-primary'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                          {scenario.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-800 mb-3 font-space-grotesk group-hover:text-primary transition-colors leading-snug">
                        {scenario.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow leading-relaxed line-clamp-3">{scenario.desc}</p>
                      <div className="mt-6 bg-primary text-white px-5 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md text-sm font-semibold">
                        Start Scenario
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center text-gray-500 py-12 text-lg">
                  No scenarios found matching your filters.
                </div>
              )}
            </div>
          </div>
        )}

        {gameState === 'chat' && activeScenario && (
          <ChatInterface 
            scenario={activeScenario} 
            onEndScenario={handleEnd} 
          />
        )}

        {gameState === 'review' && activeScenario && (
          <FeedbackReport 
            messages={chatHistory} 
            scenario={activeScenario} 
            onReset={handleReset} 
          />
        )}
      </div>
    </main>
  );
}