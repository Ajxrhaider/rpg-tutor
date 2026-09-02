import { ALL_LANGUAGES, type ScenarioType } from './types';

export const packLimaScenarios: ScenarioType[] = [
  { id: 'lma-01', title: 'Manual Transmission Panic', originalLanguage: 'German', availableLanguages: ['German', 'English'], category: 'Incidents', role: 'Rental Agent', desc: 'Explain that you have absolutely no idea how to drive the manual car they just rented you.' },
  { id: 'lma-02', title: 'Highway Breakdown', originalLanguage: 'Russian', availableLanguages: ['Russian', 'English'], category: 'Travel', role: 'Tow Truck Dispatch', desc: 'Explain your location on a desolate highway in the middle of a snowstorm.' },
  { id: 'lma-03', title: 'Stolen Hubcaps', originalLanguage: 'Dutch', availableLanguages: ['Dutch', 'English', 'German'], category: 'Incidents', role: 'Police Officer', desc: 'Report that someone stole all four hubcaps off your rental car overnight.' },
  { id: 'lma-04', title: 'The Upsell Mechanic', originalLanguage: 'Arabic', availableLanguages: ['Arabic', 'English'], category: 'Shopping', role: 'Slick Mechanic', desc: 'Refuse the premium synthetic oil upgrade for a 15-year-old beater car.' },
  { id: 'lma-05', title: 'Motorcycle Rental', originalLanguage: 'Portuguese', availableLanguages: ['Portuguese', 'English', 'Spanish'], category: 'Travel', role: 'Shop Owner', desc: 'Rent a 250cc dirt bike for the weekend and ask about off-road trails.' },
  { id: 'lma-06', title: 'Keke Napep Hustle', originalLanguage: 'Pidgin English', availableLanguages: ['Pidgin English', 'English'], category: 'Travel', role: 'Keke Driver', desc: 'Argue that carrying four people in the back of the tricycle is completely unacceptable.' }
];