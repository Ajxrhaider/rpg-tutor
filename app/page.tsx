'use client';

import { useState, useEffect, useMemo } from 'react';
import ChatInterface from '@/components/ChatInterface';
import FeedbackReport from '@/components/FeedbackReport';

const GLOBAL_LANGS = [
  'English', 'French', 'Spanish', 'German', 'Japanese', 'Mandarin', 'Korean', 
  'Italian', 'Portuguese', 'Arabic', 'Russian', 'Hindi', 'Turkish', 'Dutch', 
  'Pidgin English', 'Thai', 'Vietnamese', 'Greek', 'Swedish', 'Polish'
];

const SCENARIOS = [
  // --- PIDGIN ENGLISH & NIGERIAN CONTEXTS ---
  { id: 'lagos-danfo', title: 'Danfo Conductor Argument', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Travel', role: 'Danfo Conductor', desc: 'Arguing for your change after paying with a 1000 Naira note for a 200 Naira drop.' },
  { id: 'suya-spot', title: 'Ordering Suya at Night', originalLanguage: 'Pidgin English', availableLanguages: GLOBAL_LANGS, category: 'Dining', role: 'Mai Suya', desc: 'Negotiating extra onions and asking for the beef to be extra spicy.' },
  { id: 'nepa-wahala', title: 'NEPA Took Light', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English'], category: 'Incidents', role: 'Angry Neighbor', desc: 'Complaining about the sudden blackout right in the middle of a Champions League final.' },
  { id: 'balogun-market', title: 'Balogun Market Hustle', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English', 'Mandarin'], category: 'Shopping', role: 'Fabric Vendor', desc: 'Haggling aggressively over the price of six yards of Ankara fabric.' },
  { id: 'police-checkpoint', title: 'The Checkpoint', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Incidents', role: 'Police Officer', desc: 'Trying to explain that all your car papers are complete and valid.' },

  // --- SINGLE LANGUAGE LOCKED (Cultural Immersion) ---
  { id: 'tokyo-shrine', title: 'Shrine Etiquette', originalLanguage: 'Japanese', availableLanguages: ['Japanese'], category: 'Travel', role: 'Shinto Priest', desc: 'Asking for the proper way to purify your hands before entering the shrine.' },
  { id: 'paris-baker', title: 'The Stale Baguette', originalLanguage: 'French', availableLanguages: ['French'], category: 'Dining', role: 'Boulanger', desc: 'Politely pointing out that the baguette you were just sold is from yesterday.' },
  { id: 'mexico-taco', title: 'Late Night Tacos', originalLanguage: 'Spanish', availableLanguages: ['Spanish'], category: 'Dining', role: 'Taquero', desc: 'Ordering five al pastor tacos and asking which salsa is the deadliest.' },
  { id: 'naples-nonna', title: 'Refusing More Food', originalLanguage: 'Italian', availableLanguages: ['Italian'], category: 'Dining', role: 'Italian Nonna', desc: 'Trying to politely explain you cannot possibly eat a fourth plate of pasta.' },
  { id: 'beijing-hutong', title: 'Lost in the Alley', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin'], category: 'Travel', role: 'Elderly Resident', desc: 'Asking a local elder for directions out of a winding, traditional Hutong.' },

  // --- UNIVERSAL SCENARIOS (Available in ALL_LANGS) ---
  { id: 'alien-abduction', title: 'Explaining Earth', originalLanguage: 'English', availableLanguages: GLOBAL_LANGS, category: 'Funny', role: 'Zorg the Conqueror', desc: 'Trying to convince an alien commander that Earth is not worth blowing up.' },
  { id: 'job-interview', title: 'The Difficult Interview', originalLanguage: 'English', availableLanguages: GLOBAL_LANGS, category: 'Work', role: 'Hiring Manager', desc: 'Explaining a two-year gap in your resume during a high-stakes job interview.' },
  { id: 'tech-support', title: 'The Blue Screen', originalLanguage: 'English', availableLanguages: GLOBAL_LANGS, category: 'Tech', role: 'IT Support Agent', desc: 'Trying to explain to IT that your computer crashed during a BIOS update.' },
  { id: 'sentient-printer', title: 'The Printer Demands Ink', originalLanguage: 'English', availableLanguages: GLOBAL_LANGS, category: 'Funny', role: 'Office Printer', desc: 'Pleading with the printer to print your document even though cyan is at 5%.' },
  { id: 'hotel-lockout', title: 'Locked Out Naked', originalLanguage: 'German', availableLanguages: GLOBAL_LANGS, category: 'Incidents', role: 'Night Manager', desc: 'Explaining you stepped into the hall for ice in a towel and your door locked behind you.' },
  { id: 'salary-negotiation', title: 'Asking for a Raise', originalLanguage: 'English', availableLanguages: GLOBAL_LANGS, category: 'Work', role: 'Your Boss', desc: 'Presenting your accomplishments over the last year to justify a 15% salary increase.' },
  { id: 'escape-room', title: 'Stuck on the First Clue', originalLanguage: 'English', availableLanguages: GLOBAL_LANGS, category: 'Funny', role: 'Game Master (via radio)', desc: 'Asking for a hint because your team has been staring at a padlock for 20 minutes.' },

  // --- HIGH ENGLISH PRESENCE (But randomized options) ---
  { id: 'noc-outage', title: 'Navigating a Network Outage', originalLanguage: 'English', availableLanguages: ['English', 'Pidgin English', 'Russian', 'German'], category: 'Tech', role: 'Lead NOC Engineer', desc: 'Coordinating with your Lead NOC Engineer to analyze downtime logs.' },
  { id: 'game-engine-pitch', title: 'Game Engine Pitch', originalLanguage: 'English', availableLanguages: ['English', 'Japanese', 'Korean', 'Mandarin'], category: 'Tech', role: 'Senior C++ Developer', desc: 'Defending your choice to use Data-Oriented Design targeting legacy hardware.' },
  { id: 'murim-cultivation', title: 'Demonic Clan Cultivation', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English', 'Korean', 'Japanese'], category: 'Pop Culture', role: 'Demonic Path Patriarch', desc: 'Explaining unconventional Dantian energy cultivation techniques.' },
  { id: 'berlin-startup', title: 'Pitching an App Idea', originalLanguage: 'German', availableLanguages: ['German', 'English', 'Swedish', 'French'], category: 'Work', role: 'Angel Investor', desc: 'Giving a 60-second elevator pitch for your new tech startup.' },
  { id: 'dubai-gold', title: 'Gold Souk Negotiation', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English', 'Hindi', 'Urdu', 'Pidgin English'], category: 'Shopping', role: 'Jeweler', desc: 'Asking about karat purity and negotiating the making charge of a necklace.' },
  { id: 'moscow-subway', title: 'Navigating the Metro', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English', 'Ukrainian', 'Polish'], category: 'Travel', role: 'Local Commuter', desc: 'Asking a local which train line goes to the Red Square.' },
  { id: 'seoul-skincare', title: 'Skincare Routine', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English', 'Mandarin', 'Japanese'], category: 'Shopping', role: 'Beauty Consultant', desc: 'Asking for recommendations for dry, sensitive skin products.' },
  { id: 'milan-design', title: 'Creative Differences', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English', 'French'], category: 'Work', role: 'Art Director', desc: 'Defending your bold design choices against an art director who wants something "safer."' },
  
  // --- REAL LIFE: TRAVEL & TRANSIT ---
  { id: 'berlin-train', title: 'Missed Train in Berlin', originalLanguage: 'German', availableLanguages: ['German', 'English', 'Dutch'], category: 'Travel', role: 'Ticket Inspector', desc: 'You boarded the wrong ICE train and need to explain your situation.' },
  { id: 'seoul-taxi', title: 'Lost in Seoul', originalLanguage: 'Korean', availableLanguages: ['Korean', 'English'], category: 'Travel', role: 'Taxi Driver', desc: 'Trying to give a taxi driver directions to your Airbnb without knowing the exact address.' },
  { id: 'rome-bus', title: 'Buying a Bus Ticket', originalLanguage: 'Italian', availableLanguages: ['Italian', 'English', 'Spanish'], category: 'Travel', role: 'Tabaccheria Owner', desc: 'Purchasing a 24-hour transit pass and asking for directions.' },
  { id: 'beijing-airport', title: 'Lost Luggage Claim', originalLanguage: 'Mandarin', availableLanguages: ['Mandarin', 'English'], category: 'Incidents', role: 'Airport Staff', desc: 'Filing a missing baggage report after your flight.' },
  { id: 'paris-metro', title: 'Metro Turnstile Error', originalLanguage: 'French', availableLanguages: ['French', 'English'], category: 'Incidents', role: 'Station Attendant', desc: 'Your ticket was eaten by the machine and you are stuck.' },
  { id: 'tokyo-shinkansen', title: 'Reserving Shinkansen Seats', originalLanguage: 'Japanese', availableLanguages: ['Japanese', 'English'], category: 'Travel', role: 'Ticket Agent', desc: 'Booking two window seats on the bullet train to Kyoto.' },
  
  // --- COMEDY & ABSURD (Mostly English & Pidgin) ---
  { id: 'pigeon-fight', title: 'Arguing with a Pigeon', originalLanguage: 'English', availableLanguages: ['English', 'Pidgin English', 'French'], category: 'Funny', role: 'A Very Smart Pigeon', desc: 'Negotiating a peace treaty over the remaining half of your sandwich.' },
  { id: 'gordon-ramsay', title: 'The Raw Risotto', originalLanguage: 'English', availableLanguages: ['English', 'Italian', 'Pidgin English'], category: 'Funny', role: 'Angry Celebrity Chef', desc: 'Defending your terrible, mushy risotto on a cooking reality show.' },
  { id: 'flat-earther', title: 'The Flat Earther Uber', originalLanguage: 'English', availableLanguages: ['English', 'Spanish', 'Pidgin English'], category: 'Funny', role: 'Uber Driver', desc: 'Trying to politely change the subject while your driver explains the ice wall.' },
  { id: 'cat-boss', title: 'Performance Review with a Cat', originalLanguage: 'English', availableLanguages: GLOBAL_LANGS, category: 'Funny', role: 'Mr. Whiskers (CEO)', desc: 'Explaining your quarterly KPIs to your boss, who happens to be a cat.' },
  
  // --- POP CULTURE / EASTER EGGS ---
  { id: 'parks-and-rec', title: 'Hardware Store Confidence', originalLanguage: 'English', availableLanguages: ['English', 'Russian', 'German'], category: 'Pop Culture', role: 'Gruff Store Manager', desc: 'Trying to ask for help finding a screw, only to be told "I know more than you."' },
  { id: 'office-space', title: 'The TPS Report', originalLanguage: 'English', availableLanguages: ['English', 'Japanese'], category: 'Pop Culture', role: 'Micromanaging Boss', desc: 'Explaining that you did, in fact, get the memo about the new cover sheets.' },
  { id: 'matrix-pill', title: 'The Purple Pill', originalLanguage: 'English', availableLanguages: ['English', 'Mandarin', 'Pidgin English'], category: 'Pop Culture', role: 'Morpheus', desc: 'Refusing both the red and blue pills and asking if he has a grape-flavored one.' },
  { id: 'terminator-clothes', title: 'I Need Your Clothes', originalLanguage: 'English', availableLanguages: ['English', 'German', 'Russian'], category: 'Pop Culture', role: 'Cyborg Assassin', desc: 'Refusing to give up your boots and motorcycle to a naked Austrian bodybuilder.' },
  { id: 'portal-glados', title: 'The Cake is a Lie', originalLanguage: 'English', availableLanguages: ['English', 'Korean', 'Pidgin English'], category: 'Pop Culture', role: 'Passive Aggressive AI', desc: 'Demanding the cake you were promised after finishing a dangerous test chamber.' }
];

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
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [displayScenarios, setDisplayScenarios] = useState(SCENARIOS);
  
  // Track dynamically selected language per scenario card
  const [cardLanguages, setCardLanguages] = useState<Record<string, string>>({});
  const [isMounted, setIsMounted] = useState(false);

  // Dynamic filter options
  const LANGUAGES = useMemo(() => {
    const allLangs = new Set<string>();
    SCENARIOS.forEach(s => s.availableLanguages.forEach(l => allLangs.add(l)));
    return ['All', ...Array.from(allLangs).sort()];
  }, []);
  
  const CATEGORIES = useMemo(() => ['All', ...Array.from(new Set(SCENARIOS.map(s => s.category))).sort()], []);

  useEffect(() => {
    setDisplayScenarios(shuffleArray(SCENARIOS));
    setIsMounted(true);
  }, []);

  const handleStart = (scenario: typeof SCENARIOS[0]) => {
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-space-grotesk relative pb-4">
              Select a Scenario
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded"></span>
            </h2>
            
            {/* Filter Controls */}
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
                    className="flex-1 md:w-40 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-primary font-medium"
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
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredScenarios.length > 0 ? (
                filteredScenarios.map((scenario) => {
                  const currentLang = cardLanguages[scenario.id] || scenario.originalLanguage;
                  
                  return (
                    <div 
                      key={scenario.id} 
                      onClick={() => handleStart(scenario)}
                      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 cursor-pointer flex flex-col items-center text-center group border border-gray-100 h-full relative"
                    >
                      <div className="flex gap-2 mb-6 w-full justify-center items-center">
                        {/* Dynamic Language Selector */}
                        <div className="relative inline-block" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={currentLang}
                            onChange={(e) => handleCardLanguageChange(e, scenario.id)}
                            className={`px-3 py-1 pr-6 text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none transition-colors border ${
                              currentLang === 'English' 
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100' 
                                : currentLang === 'Pidgin English'
                                ? 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100'
                                : 'bg-indigo-50 border-indigo-200 text-primary hover:bg-indigo-100'
                            }`}
                          >
                            {scenario.availableLanguages.map(lang => (
                              <option key={lang} value={lang}>{lang}</option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <svg className={`fill-current h-3 w-3 ${
                              currentLang === 'English' ? 'text-emerald-700' : 
                              currentLang === 'Pidgin English' ? 'text-orange-700' : 'text-primary'
                            }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                        
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                          {scenario.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-4 font-space-grotesk group-hover:text-primary transition-colors">
                        {scenario.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-grow leading-relaxed">{scenario.desc}</p>
                      <div className="mt-8 bg-primary text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md text-sm font-semibold">
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